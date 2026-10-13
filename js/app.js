import { store } from "./store.js";
import { esc, $, $$, icons, toast, modal, renderRich, renderOption } from "./ui.js";
import { LETTERS, TF_LABELS, TYPES, buildItems, grade, isAnswered, fmtNum, fmtDuration, fmtTime, fmtClock, shuffle, pointsOf, qType } from "./exam.js";
import { renderAdmin } from "./admin.js";

export const DEFAULT_SETTINGS = {
  siteTitle: "Thi Trắc Nghiệm",
  orgName: "Thi thử HNUE Olympic STEM 2026",
};

export const ctx = { user: null, settings: { ...DEFAULT_SETTINGS }, questions: null, exams: null };
const app = document.getElementById("app");
let cleanup = [];
const onLeave = (fn) => cleanup.push(fn);

export async function loadQuestions(force) {
  if (!ctx.questions || force) ctx.questions = await store.listQuestions();
  return ctx.questions;
}
export async function loadExams(force) {
  if (!ctx.exams || force)
    ctx.exams = (await store.listExams()).sort((a, b) => (a.order ?? 0) - (b.order ?? 0) || (a.title || "").localeCompare(b.title || ""));
  return ctx.exams;
}
export const qmapOf = (qs) => Object.fromEntries(qs.map((q) => [q.id, q]));
export const isAdmin = () => ctx.user?.role === "admin";
const normCode = (c) => String(c || "").trim().toUpperCase();
const SESSION_KEY = "olympicstem-code";

/* ------------------------------------------------------------------ */
/* Khung trang học sinh / quản trị                                     */
/* ------------------------------------------------------------------ */
export function page({ nav, title = "", main = "" }) {
  const r = location.hash;
  const link = (href, icon, label) => `<a href="${href}" class="${r === href ? "active" : ""}">${icons[icon]}<span>${label}</span></a>`;
  const studentNav = `<div class="grp">Học sinh</div>
    ${link("#/home", "home", "Vào phòng thi")}
    ${link("#/history", "cal", "Lịch sử thi thử")}
    ${link("#/practice", "target", "Luyện tập theo chủ đề")}
    ${link("#/wrong", "redo", "Ôn lại câu làm sai")}
    ${link("#/progress", "chart", "Tiến bộ của tôi")}
    ${link("#/profile", "card", "Tài khoản của tôi")}`;
  const adminNav = isAdmin()
    ? `<div class="grp">Quản trị</div>
      ${link("#/admin", "chart", "Tổng quan")}
      ${link("#/admin/users", "users", "Tài khoản thí sinh")}
      ${link("#/admin/questions", "book", "Ngân hàng câu hỏi")}
      ${link("#/admin/exams", "grid", "Ca thi & ma trận đề")}
      ${link("#/admin/results", "trophy", "Kết quả thi thử")}
      ${link("#/admin/settings", "gear", "Cài đặt")}`
    : "";
  app.innerHTML = `<header class="app-head">
      <button class="menu-btn" id="menu-btn">☰</button>
      <img src="img/logo.svg" alt=""><div><div class="t">${esc(ctx.settings.siteTitle)}</div><div class="s">${esc(ctx.settings.orgName)}</div></div>
      <div class="sp"></div>
      ${store.mode === "demo" ? '<span class="demo-badge">Chế độ demo</span>' : ""}
      <div class="who"><div class="n"><b>${esc(ctx.user.name || ctx.user.username)}</b></div><div class="muted">${isAdmin() ? "Quản trị viên" : `SBD: ${esc(ctx.user.sbd || ctx.user.username)}`}</div></div>
      <button class="btn btn-sm" id="logout">${icons.logout} Đăng xuất</button>
    </header>
    <div class="app-body">
      <nav class="app-nav" id="app-nav">${nav === "admin" ? adminNav + studentNav : studentNav + adminNav}</nav>
      <main class="app-main">${title ? `<h1 class="page-title">${esc(title)}</h1>` : ""}${main}</main>
    </div>`;
  $("#logout").onclick = logout;
  $("#menu-btn").onclick = () => $("#app-nav").classList.toggle("open");
  window.scrollTo(0, 0);
}

async function logout() {
  sessionStorage.removeItem(SESSION_KEY);
  await store.logout();
  location.hash = "#/login";
}

/* ------------------------------------------------------------------ */
/* Đăng nhập vào phòng thi                                             */
/* ------------------------------------------------------------------ */
async function viewLogin() {
  const setup = await store.needsSetup();
  const noCode = location.hash === "#/login/nocode" || setup;
  app.innerHTML = `<div class="center-page"><div class="card">
    <div class="card-title">${setup ? "KHỞI TẠO HỆ THỐNG" : "ĐĂNG NHẬP VÀO PHÒNG THI"}</div>
    <div class="card-sub" style="font-size:13px">${setup ? "Tạo tài khoản quản trị viên đầu tiên." : noCode ? "Đăng nhập để xem kết quả, luyện tập hoặc quản trị." : "Nhập thông tin tài khoản được cấp và mã phiên thi."}</div>
    <div id="login-err"></div>
    <form id="login-form" autocomplete="off">
      ${setup ? `<div class="field"><label>${icons.card} Họ tên quản trị viên</label><input class="input" id="li-name" placeholder="Nhập họ tên..." required></div>` : ""}
      <div class="field"><label>${icons.user} Tên đăng nhập</label><input class="input" id="li-user" placeholder="Nhập tên đăng nhập..." value="${setup ? "admin" : ""}" autocomplete="username" required></div>
      <div class="field"><label>${icons.key} Mật khẩu</label><div class="pw-wrap"><input class="input" id="li-pass" type="password" placeholder="Nhập mật khẩu..." autocomplete="current-password" required><button type="button" class="pw-eye" id="eye" title="Hiện/ẩn mật khẩu">${icons.eye}</button></div></div>
      ${noCode ? "" : `<div class="field"><label>${icons.hash} Mã ca thi</label><input class="input code" id="li-code" placeholder="Nhập mã ca thi..." required></div>`}
      <button class="btn btn-primary btn-block btn-lg" type="submit" id="li-btn" disabled>${icons.arrow} ${setup ? "Tạo tài khoản quản trị" : noCode ? "Đăng nhập" : "Đăng nhập &amp; Vào phòng thi"}</button>
    </form>
    ${setup ? "" : `<div class="card-links">${noCode ? `<a href="#/login">Đăng nhập vào phòng thi (có mã ca thi)</a>` : `<a href="#/login/nocode">Đăng nhập không cần mã ca thi (xem kết quả / luyện tập / quản trị)</a>`}</div>`}
    ${store.mode === "demo" ? `<div class="card-links"><span class="demo-badge">Chế độ demo – dữ liệu chỉ lưu trên trình duyệt này</span></div>` : ""}
  </div></div>`;
  if (sessionStorage.getItem("olympicstem-blocked")) {
    sessionStorage.removeItem("olympicstem-blocked");
    $("#login-err").innerHTML = `<div class="err-box">Tài khoản đã bị khoá hoặc không tồn tại. Liên hệ giáo viên / quản trị viên.</div>`;
  }
  const inputs = $$("#login-form input");
  const btn = $("#li-btn");
  const check = () => (btn.disabled = inputs.some((i) => !i.value.trim()));
  inputs.forEach((i) => (i.oninput = check));
  $("#eye").onclick = () => {
    const p = $("#li-pass");
    p.type = p.type === "password" ? "text" : "password";
    $("#eye").innerHTML = p.type === "password" ? icons.eye : icons.eyeOff;
  };
  $("#login-form").onsubmit = async (e) => {
    e.preventDefault();
    btn.disabled = true;
    const u = $("#li-user").value.trim(), pw = $("#li-pass").value;
    const code = $("#li-code") ? normCode($("#li-code").value) : "";
    try {
      if (setup) {
        if (pw.length < 6) throw new Error("Mật khẩu phải có ít nhất 6 ký tự.");
        await store.bootstrapAdmin({ username: u, password: pw, name: $("#li-name").value.trim() });
        if (store.mode === "demo") await store.login(u, pw);
        return;
      }
      if (code) sessionStorage.setItem(SESSION_KEY, code);
      else sessionStorage.removeItem(SESSION_KEY);
      await store.login(u, pw);
    } catch (err) {
      sessionStorage.removeItem(SESSION_KEY);
      $("#login-err").innerHTML = `<div class="err-box">${esc(err.message)}</div>`;
      btn.disabled = false;
    }
  };
}

/* ------------------------------------------------------------------ */
/* Sẵn sàng thi                                                        */
/* ------------------------------------------------------------------ */
function examWindowMsg(e) {
  const now = Date.now();
  if (e.openFrom && now < new Date(e.openFrom).getTime()) return `Ca thi chưa mở. Thời gian mở: ${fmtTime(new Date(e.openFrom).getTime())}.`;
  if (e.openTo && now > new Date(e.openTo).getTime()) return `Ca thi đã đóng lúc ${fmtTime(new Date(e.openTo).getTime())}.`;
  return null;
}

async function findExamByCode(code) {
  const exams = await loadExams(true);
  return exams.find((e) => normCode(e.code) === normCode(code) && e.visible !== false);
}

async function viewReady() {
  const code = sessionStorage.getItem(SESSION_KEY);
  if (!code) return (location.hash = "#/home");
  const e = await findExamByCode(code);
  const u = ctx.user;
  const card = (inner) => (app.innerHTML = `<div class="center-page"><div class="card">${inner}
      <div class="card-links"><a id="lo">Đăng xuất / Đăng nhập bằng tài khoản khác</a> · <a href="#/history">Lịch sử thi thử</a></div></div></div>`);
  if (!e) {
    card(`<div class="card-title">MÃ CA THI KHÔNG HỢP LỆ</div><div class="err-box">Không tìm thấy ca thi có mã <b>${esc(code)}</b>. Kiểm tra lại mã ca thi trong Thông báo dự thi.</div>
      <a class="btn btn-primary btn-block" href="#/home">Nhập lại mã ca thi</a>`);
    sessionStorage.removeItem(SESSION_KEY);
    $("#lo").onclick = logout;
    return;
  }
  const attempts = (await store.listAttempts({ uid: u.id })).filter((a) => a.examId === e.id);
  const inprog = attempts.find((a) => a.state === "inprogress");
  const max = Number(e.maxAttempts) || 0;
  const closed = examWindowMsg(e);
  const used = !inprog && max && attempts.length >= max;
  card(`<div class="card-title">SẴN SÀNG THI</div>
    <div class="card-sub">Phiên thi: <b>${esc(e.title)}</b></div>
    <div class="info-list">
      <div class="row"><span>Họ tên:</span><span>${esc(u.name || u.username)}</span></div>
      <div class="row"><span>Số báo danh:</span><span class="mono">${esc(u.sbd || u.username)}</span></div>
      <div class="row"><span>Thời gian làm bài:</span><span class="big">${e.duration ? `${e.duration} phút` : "Không giới hạn"}</span></div>
      ${max ? `<div class="row"><span>Số lần đã làm:</span><span>${attempts.filter((a) => a.state === "finished").length} / ${max}</span></div>` : ""}
    </div>
    <div class="warn-box"><h4>⚠️ LƯU Ý TRƯỚC KHI THI</h4><ul>
      <li><b>Không chuyển tab</b> hoặc thoát toàn màn hình</li>
      <li>Không sử dụng <b>Ctrl+C, Ctrl+V</b></li>
      <li>Thời gian <b>tự động đếm ngược</b> khi bắt đầu</li>
      <li>Bài thi <b>tự động nộp khi hết giờ</b></li></ul></div>
    ${closed ? `<div class="err-box">${closed}</div>` : used ? `<div class="err-box">Bạn đã sử dụng hết ${max} lượt thi thử của ca thi này.</div>` : ""}
    <button class="btn btn-primary btn-block btn-lg" id="go" ${closed || used ? "disabled" : ""}>${icons.arrow} ${inprog ? "Tiếp tục làm bài" : "Bắt đầu làm bài"}</button>`);
  $("#lo").onclick = logout;
  $("#go").onclick = async () => {
    $("#go").disabled = true;
    enterFullscreen();
    try {
      if (inprog) return (location.hash = `#/room/${inprog.id}`);
      const items = buildItems(e, await loadQuestions(true));
      const id = await createAttempt(e, items, e.id);
      location.hash = `#/room/${id}`;
    } catch (err) {
      exitFullscreen();
      $("#go").disabled = false;
      modal({ title: "Không thể tạo đề thi", body: `<div class="alert err">${esc(err.message)}</div><p>Vui lòng báo cho giáo viên / quản trị viên.</p>` });
    }
  };
}

const examSnapshot = (e) => ({
  title: e.title,
  duration: Number(e.duration) || 0,
  pointsMcq: pointsOf(e, "mcq"), pointsTf: pointsOf(e, "tf"), pointsShort: pointsOf(e, "short"),
  maxGrade: Number(e.maxGrade) || 0,
  reviewMode: e.reviewMode || "full",
  strict: e.strict !== false,
});

async function createAttempt(e, items, examId) {
  const now = Date.now();
  const exam = examSnapshot(e);
  if (!exam.maxGrade) exam.maxGrade = items.reduce((s, it) => s + pointsOf(exam, it.type), 0);
  return store.createAttempt({
    uid: ctx.user.id, username: ctx.user.username, name: ctx.user.name || "", sbd: ctx.user.sbd || "", school: ctx.user.school || "",
    examId, exam, items, answers: {}, flags: {}, violations: 0, state: "inprogress", startedAt: now,
    deadline: exam.duration ? now + exam.duration * 60000 : null,
  });
}

/* ------------------------------------------------------------------ */
/* Phòng thi                                                           */
/* ------------------------------------------------------------------ */
const enterFullscreen = () => document.documentElement.requestFullscreen?.().catch(() => {});
const exitFullscreen = () => document.fullscreenElement && document.exitFullscreen?.().catch(() => {});

async function finishAttempt(a, auto) {
  const qmap = qmapOf(await loadQuestions());
  const result = grade(a, a.exam, qmap);
  const patch = { state: "finished", submittedAt: Date.now(), result, answers: a.answers, flags: a.flags, autoSubmitted: !!auto };
  await store.updateAttempt(a.id, patch);
  Object.assign(a, patch);
  return a;
}

function sectionsOf(items) {
  const secs = [];
  items.forEach((it, i) => {
    const t = it.type || "mcq";
    if (!secs.length || secs[secs.length - 1].type !== t) secs.push({ type: t, idx: [] });
    secs[secs.length - 1].idx.push(i);
  });
  return secs;
}

function roomShell(a, { review = false } = {}) {
  const secs = sectionsOf(a.items);
  return `<div class="room" id="room">
    <header class="room-head">
      <img src="img/logo.svg" alt=""><div><div class="t">${esc(a.exam.title)}</div><div class="s">${review ? "Xem lại bài làm" : esc(ctx.settings.orgName)}</div></div>
      <div class="sp"></div>
      <div class="who"><div class="n"><b>${esc(a.name || a.username)}</b></div><div class="muted">SBD: <span class="mono">${esc(a.sbd || a.username)}</span></div></div>
      ${review
        ? `<div class="timer">${fmtNum(a.result.grade)} / ${fmtNum(a.result.maxGrade)} điểm</div>`
        : a.deadline ? `<div class="timer" id="timer">${icons.clock}<span id="tleft">--:--</span></div>` : ""}
    </header>
    <aside class="room-side">
      ${secs.map((s, k) => `<div class="sec-title">Phần ${k + 1}. ${TYPES[s.type].section}</div>
        <div class="qgrid">${s.idx.map((i) => `<button class="qcell" data-go="${i}">${i + 1}</button>`).join("")}</div>`).join("")}
    </aside>
    <div class="room-foot-left">
      <div class="legend">${review
        ? `<span><i style="background:var(--green-l);border-color:var(--green)"></i>Đúng</span><span><i style="background:#fef3c7;border-color:var(--orange)"></i>Đúng một phần</span><span><i style="background:var(--red-l);border-color:var(--red)"></i>Sai/bỏ trống</span>`
        : `<span><i style="background:var(--navy);border-color:var(--navy)"></i>Đang làm</span><span><i style="background:var(--orange-l);border-color:var(--orange)"></i>Đã trả lời</span><span><i></i>Chưa làm</span>`}</div>
      ${review ? `<a class="btn btn-primary btn-block" href="#/result/${a.id}">${icons.left} Quay lại kết quả</a>` : `<button class="btn btn-primary btn-block" id="submit">${icons.send} Nộp bài</button>`}
    </div>
    <main class="room-main"><div class="inner" id="qarea"></div></main>
    <footer class="room-foot">
      <button class="btn btn-ghost" id="prev">${icons.left} Câu trước</button>
      <span class="muted small" id="pos"></span>
      ${review ? "" : `<button class="btn btn-primary btn-sm only-mobile" id="submit-m">${icons.send} Nộp bài</button>`}
      <button class="btn btn-ghost" id="next">Câu sau ${icons.right}</button>
    </footer>
  </div>`;
}

function questionHtml(a, i, q, { review = false } = {}) {
  const it = a.items[i];
  const t = it.type || "mcq";
  const ans = a.answers[i];
  if (!q) return `<div class="alert err">Câu hỏi này đã bị xoá khỏi ngân hàng.</div>`;
  const d = review ? a.result.details[i] : null;
  let body = "";
  if (t === "mcq") {
    body = `<div class="opts">${it.perm.map((orig, pos) => {
      const sel = ans === pos;
      let cls = sel ? "sel" : "", tag = "";
      if (review) {
        const right = orig === Number(q.answer);
        cls = right ? "correct" : sel ? "incorrect" : "";
        tag = right ? "✔ Đáp án đúng" : sel ? "✘ Bạn chọn" : "";
      }
      return `<label class="opt ${cls}"><input type="radio" name="q" value="${pos}" ${sel ? "checked" : ""} ${review ? "disabled" : ""}>
        <div><div class="l">${LETTERS[pos]}</div><div class="v">${renderOption(q.options[orig])}</div></div>${tag ? `<span class="tag">${tag}</span>` : ""}</label>`;
    }).join("")}</div>`;
  } else if (t === "tf") {
    body = `<table class="tf-table">${it.perm.map((orig, pos) => {
      const v = Array.isArray(ans) ? ans[pos] : null;
      const key = !!(q.answer || [])[orig];
      const b = (val, label) => {
        const c = review ? (val === key ? "ok" : v === val ? "bad" : "") : v === val ? "on" : "";
        return `<button class="tf-btn ${c}" data-tf="${pos}" data-v="${val}" ${review ? "disabled" : ""}>${label}</button>`;
      };
      return `<tr><td>${TF_LABELS[pos]})</td><td>${renderOption(q.statements?.[orig] ?? "")}</td><td>${b(true, "Đúng")}${b(false, "Sai")}</td></tr>`;
    }).join("")}</table>${review ? `<div class="small muted">Nút xanh: đáp án đúng · Nút đỏ: lựa chọn sai của bạn</div>` : ""}`;
  } else {
    body = `<input class="short-input" id="short" placeholder="Nhập câu trả lời..." value="${esc(ans ?? "")}" ${review ? "disabled" : ""} autocomplete="off">
      ${review ? "" : `<div class="small muted" style="margin-top:6px">Chỉ ghi kết quả (số hoặc từ ngắn). Số thập phân dùng dấu phẩy, ví dụ 2,5.</div>`}`;
  }
  let explain = "";
  if (review && a.exam.reviewMode === "full") {
    const ok = d.r === 1;
    const blank = !isAnswered(it, ans);
    const keyText =
      t === "mcq" ? `${LETTERS[it.perm.indexOf(Number(q.answer))]}. ${renderOption(q.options[q.answer])}`
      : t === "tf" ? it.perm.map((orig, pos) => `${TF_LABELS[pos]}) ${(q.answer || [])[orig] ? "Đúng" : "Sai"}`).join(" · ")
      : esc(String(q.answer).split(/[;|]/)[0]);
    const mistake = blank ? "Bạn chưa trả lời câu này."
      : ok ? ""
      : t === "mcq" ? `Bạn đã chọn phương án <b>${LETTERS[ans]}</b> – chưa chính xác.`
      : t === "tf" ? `Bạn làm đúng ${Math.round(d.r === 0.5 ? 3 : d.r === 0.25 ? 2 : d.r === 0.1 ? 1 : 0)}/4 ý.`
      : `Câu trả lời của bạn “${esc(ans)}” chưa đúng.`;
    explain = `<div class="explain ${ok ? "ok" : "bad"}">
      <div class="h">${ok ? "✔ Chính xác" : blank ? "○ Chưa trả lời" : d.r > 0 ? "Đúng một phần" : "✘ Chưa chính xác"} – đạt ${fmtNum(d.s)}/${fmtNum(pointsOf(a.exam, t))} điểm</div>
      ${mistake ? `<div><b>Lỗi sai:</b> ${mistake}</div>` : ""}
      <div><b>Đáp án đúng:</b> ${keyText}</div>
      ${q.explanation ? `<div style="margin-top:6px"><b>Giải thích:</b> ${renderRich(q.explanation)}</div>` : ""}
    </div>`;
  } else if (review && a.exam.reviewMode === "mark") {
    explain = `<div class="explain ${d.r === 1 ? "ok" : "bad"}"><div class="h">${d.r === 1 ? "✔ Đúng" : d.r > 0 ? "Đúng một phần" : "✘ Sai / chưa trả lời"}</div></div>`;
  }
  return `<span class="chip">${TYPES[t].name}</span>${q.topic && review ? ` <span class="chip gray">${esc(q.topic)}</span>` : ""}
    <div class="qtext"><b class="qn">Câu ${i + 1}.</b> ${renderRich(q.content)}</div>
    ${q.image ? `<img class="qimg" src="${esc(q.image)}" alt="" draggable="false">` : ""}
    ${body}
    ${review ? "" : `<div class="flag-toggle ${a.flags[i] ? "on" : ""}" id="flag">${icons.flag} ${a.flags[i] ? "Đã đánh dấu xem lại (bấm để bỏ)" : "Đánh dấu câu này để xem lại"}</div>`}
    ${explain}`;
}

async function viewRoom(id, startIdx) {
  const a = await store.getAttempt(id);
  if (!a || a.uid !== ctx.user.id) return notFound();
  if (a.state === "finished") return (location.hash = `#/result/${id}`);
  if (a.deadline && Date.now() >= a.deadline) {
    await finishAttempt(a, true);
    return (location.hash = `#/result/${id}`);
  }
  const qmap = qmapOf(await loadQuestions());
  const n = a.items.length;
  let cur = Math.min(Math.max(0, Number(startIdx) || 0), n - 1);
  app.innerHTML = roomShell(a);
  let saving = Promise.resolve();
  const persist = (patch = { answers: a.answers, flags: a.flags }) =>
    (saving = saving.then(() => store.updateAttempt(id, patch)).catch(() => toast("Lỗi lưu bài – kiểm tra kết nối mạng!")));

  const refreshGrid = () => $$(".qcell").forEach((c) => {
    const i = Number(c.dataset.go);
    c.className = "qcell" + (i === cur ? " current" : isAnswered(a.items[i], a.answers[i]) ? " answered" : "") + (a.flags[i] ? " flag" : "");
  });

  const show = (i) => {
    cur = i;
    $("#qarea").innerHTML = questionHtml(a, i, qmap[a.items[i].qid]);
    $(".room-main").scrollTop = 0;
    $("#prev").disabled = i === 0;
    $("#next").disabled = i === n - 1;
    $("#pos").textContent = `Câu ${i + 1} / ${n}`;
    refreshGrid();
    $$('.opt input[name="q"]').forEach((inp) => (inp.onchange = () => {
      a.answers[i] = Number(inp.value);
      $$(".opt").forEach((o) => o.classList.toggle("sel", o.contains(inp)));
      refreshGrid(); persist();
    }));
    $$("[data-tf]").forEach((b) => (b.onclick = () => {
      const pos = Number(b.dataset.tf), v = b.dataset.v === "true";
      const arr = Array.isArray(a.answers[i]) ? a.answers[i].slice() : [null, null, null, null];
      arr[pos] = arr[pos] === v ? null : v;
      a.answers[i] = arr;
      $$(`[data-tf="${pos}"]`).forEach((x) => x.classList.toggle("on", arr[pos] === (x.dataset.v === "true")));
      refreshGrid(); persist();
    }));
    const sh = $("#short");
    if (sh) {
      let t;
      sh.oninput = () => { a.answers[i] = sh.value; refreshGrid(); clearTimeout(t); t = setTimeout(persist, 600); };
      sh.onblur = () => persist();
    }
    $("#flag").onclick = () => { a.flags[i] = !a.flags[i]; show(i); persist(); };
  };
  $$(".qcell").forEach((c) => (c.onclick = () => show(Number(c.dataset.go))));
  $("#prev").onclick = () => cur > 0 && show(cur - 1);
  $("#next").onclick = () => cur < n - 1 && show(cur + 1);
  show(cur);

  const submit = async () => {
    await saving;
    const blankNums = a.items.map((it, i) => (!isAnswered(it, a.answers[i]) ? i + 1 : null)).filter(Boolean);
    const flagged = a.items.map((_, i) => (a.flags[i] ? i + 1 : null)).filter(Boolean);
    const ok = await modal({
      title: "Xác nhận nộp bài", size: "sm",
      body: `<p>Bạn đã trả lời <b>${n - blankNums.length}/${n}</b> câu.</p>
        ${blankNums.length ? `<div class="alert warn">Còn <b>${blankNums.length}</b> câu <b>chưa làm</b>: ${blankNums.join(", ")}</div>` : ""}
        ${flagged.length ? `<div class="alert info">Câu đang đánh dấu xem lại: ${flagged.join(", ")}</div>` : ""}
        <p>Sau khi nộp bài, bạn sẽ không thể thay đổi câu trả lời.</p>`,
      buttons: [{ label: "Tiếp tục làm bài", value: false }, { label: "Nộp bài", cls: "btn-primary", value: true }],
    });
    if (!ok) return;
    stop();
    await finishAttempt(a, false);
    exitFullscreen();
    location.hash = `#/result/${id}`;
  };
  $("#submit").onclick = submit;
  $("#submit-m").onclick = submit;

  // Đồng hồ đếm ngược
  let timer;
  const stop = () => clearInterval(timer);
  if (a.deadline) {
    const tick = async () => {
      const left = a.deadline - Date.now();
      $("#tleft").textContent = fmtClock(left);
      $("#timer").classList.toggle("warn", left <= 60000);
      if (left <= 0) {
        stop();
        await saving;
        await finishAttempt(a, true);
        exitFullscreen();
        await modal({ title: "Hết giờ làm bài", size: "sm", body: "<p>Đã hết thời gian làm bài. Bài thi của bạn đã được <b>tự động nộp</b>.</p>" });
        location.hash = `#/result/${id}`;
      }
    };
    timer = setInterval(tick, 1000);
    tick();
  }
  onLeave(stop);

  // Giám sát: toàn màn hình, chuyển tab, sao chép/dán
  const strict = a.exam.strict !== false;
  const violate = (why) => {
    a.violations = (a.violations || 0) + 1;
    store.updateAttempt(id, { violations: a.violations, lastViolation: why }).catch(() => {});
  };
  const showFsOverlay = () => {
    if ($("#fs-ov") || !strict) return;
    const ov = document.createElement("div");
    ov.className = "overlay";
    ov.id = "fs-ov";
    ov.innerHTML = `<div class="fs-card"><div class="ic">${icons.expand}</div><h3>Tiếp tục làm bài</h3>
      <p>Nhấn nút bên dưới để vào chế độ toàn màn hình và tiếp tục làm bài thi.</p>
      <button class="btn btn-primary btn-block">${icons.expand} Vào toàn màn hình</button></div>`;
    ov.querySelector("button").onclick = () => { enterFullscreen(); ov.remove(); };
    document.body.appendChild(ov);
  };
  const onFs = () => {
    if (!document.fullscreenElement && a.state !== "finished") { violate("Thoát toàn màn hình"); showFsOverlay(); }
  };
  const onVis = () => document.hidden && a.state !== "finished" && violate("Chuyển tab / rời màn hình");
  const block = (ev) => {
    if (!strict) return;
    if (ev.type === "contextmenu" || ((ev.ctrlKey || ev.metaKey) && ["c", "v", "x", "a", "p"].includes(ev.key?.toLowerCase()))) {
      ev.preventDefault();
      toast("Không được sử dụng sao chép / dán trong khi làm bài.");
    }
  };
  const onUnload = (ev) => { ev.preventDefault(); ev.returnValue = ""; };
  document.addEventListener("fullscreenchange", onFs);
  document.addEventListener("visibilitychange", onVis);
  document.addEventListener("keydown", block);
  document.addEventListener("contextmenu", block);
  document.addEventListener("copy", block);
  window.addEventListener("beforeunload", onUnload);
  onLeave(() => {
    document.removeEventListener("fullscreenchange", onFs);
    document.removeEventListener("visibilitychange", onVis);
    document.removeEventListener("keydown", block);
    document.removeEventListener("contextmenu", block);
    document.removeEventListener("copy", block);
    window.removeEventListener("beforeunload", onUnload);
    $("#fs-ov")?.remove();
  });
  if (strict && !document.fullscreenElement && document.fullscreenEnabled) showFsOverlay();
}

/* ------------------------------------------------------------------ */
/* Kết quả & xem lại                                                   */
/* ------------------------------------------------------------------ */
export function barRow(label, c, n, suffix) {
  const pct = n ? Math.round((c / n) * 100) : 0;
  return `<div class="bar-row"><span title="${esc(label)}">${esc(label)}</span><div class="bar-track"><div class="bar-fill ${pct < 50 ? "low" : pct < 80 ? "mid" : "hi"}" style="width:${pct}%"></div></div><span>${suffix ?? `${fmtNum(c)}/${fmtNum(n)} (${pct}%)`}</span></div>`;
}

export function topicStats(attempts, qmap) {
  const by = {};
  attempts.forEach((a) => a.items.forEach((it, i) => {
    const t = qmap[it.qid]?.topic || "Khác";
    by[t] ??= [0, 0];
    by[t][1]++;
    by[t][0] += a.result.details[i].r;
  }));
  return by;
}

async function viewResult(id) {
  const a = await store.getAttempt(id);
  if (!a || (a.uid !== ctx.user.id && !isAdmin())) return notFound();
  if (a.state !== "finished") return (location.hash = `#/room/${id}`);
  exitFullscreen();
  const r = a.result;
  const qmap = qmapOf(await loadQuestions());
  const pct = Math.round((r.marks / r.totalMarks) * 100) || 0;
  const by = topicStats([a], qmap);
  const code = sessionStorage.getItem(SESSION_KEY);
  const exam = a.examId !== "practice" ? (await loadExams()).find((e) => e.id === a.examId) : null;
  const canRetry = a.examId === "practice" || (exam && code && normCode(exam.code) === normCode(code));
  app.innerHTML = `<div class="center-page"><div class="card wide">
    <div class="card-title">ĐÃ NỘP BÀI THI</div>
    <div class="card-sub">Phiên thi: <b>${esc(a.exam.title)}</b></div>
    <div class="score-big">${fmtNum(r.grade)} <small>/ ${fmtNum(r.maxGrade)} điểm</small></div>
    <p class="muted" style="text-align:center;margin:6px 0 20px">${pct >= 80 ? "🎉 Xuất sắc! Tiếp tục phát huy nhé." : pct >= 50 ? "👍 Khá tốt! Xem lại các câu sai để tiến bộ hơn." : "💪 Cố gắng lên! Hãy xem kỹ lời giải các câu sai."}</p>
    <div class="info-list">
      <div class="row"><span>Họ tên:</span><span>${esc(a.name || a.username)}</span></div>
      <div class="row"><span>Số báo danh:</span><span class="mono">${esc(a.sbd || a.username)}</span></div>
      <div class="row"><span>Số câu đúng:</span><span>${r.correct} / ${r.total}</span></div>
      <div class="row"><span>Thời gian làm bài:</span><span>${fmtDuration(a.submittedAt - a.startedAt)}${a.autoSubmitted ? " (tự động nộp khi hết giờ)" : ""}</span></div>
      <div class="row"><span>Nộp bài lúc:</span><span>${fmtTime(a.submittedAt)}</span></div>
      ${a.violations ? `<div class="row"><span>Số lần rời màn hình / thoát toàn màn hình:</span><span style="color:var(--red)">${a.violations}</span></div>` : ""}
    </div>
    ${a.exam.reviewMode !== "none" ? `<h4 style="font-size:15px">Kết quả theo chủ đề</h4><div class="bar-chart" style="margin-bottom:22px">${Object.entries(by).map(([t, [c, n]]) => barRow(t, c, n)).join("")}</div>` : ""}
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      ${a.exam.reviewMode !== "none" ? `<a class="btn btn-primary" style="flex:1" href="#/review/${id}">Xem chi tiết bài làm &amp; lời giải</a>` : ""}
      ${canRetry ? `<button class="btn" style="flex:1" id="retry">${icons.redo} Thi lại (đề mới)</button>` : ""}
    </div>
    <div class="card-links"><a href="${isAdmin() && a.uid !== ctx.user.id ? "#/admin/results" : "#/history"}">Lịch sử thi thử</a> · <a href="#/progress">Tiến bộ của tôi</a> · <a id="lo">Đăng xuất</a></div>
  </div></div>`;
  $("#lo").onclick = logout;
  $("#retry") && ($("#retry").onclick = () => (location.hash = a.examId === "practice" ? "#/practice" : "#/ready"));
}

async function viewReview(id, startIdx) {
  const a = await store.getAttempt(id);
  if (!a || (a.uid !== ctx.user.id && !isAdmin())) return notFound();
  if (a.state !== "finished") return (location.hash = `#/room/${id}`);
  if (a.exam.reviewMode === "none" && !isAdmin()) return (location.hash = `#/result/${id}`);
  if (isAdmin()) a.exam = { ...a.exam, reviewMode: "full" };
  const qmap = qmapOf(await loadQuestions());
  const n = a.items.length;
  app.innerHTML = roomShell(a, { review: true });
  $(".room").style.userSelect = "auto";
  const show = (i) => {
    $("#qarea").innerHTML = questionHtml(a, i, qmap[a.items[i].qid], { review: true });
    $(".room-main").scrollTop = 0;
    $("#prev").disabled = i === 0;
    $("#next").disabled = i === n - 1;
    $("#pos").textContent = `Câu ${i + 1} / ${n}`;
    $("#prev").onclick = () => i > 0 && show(i - 1);
    $("#next").onclick = () => i < n - 1 && show(i + 1);
    $$(".qcell").forEach((c) => c.classList.toggle("current", Number(c.dataset.go) === i));
  };
  $$(".qcell").forEach((c) => {
    const d = a.result.details[Number(c.dataset.go)];
    c.classList.add(d.r === 1 ? "right" : d.r > 0 ? "partial" : "wrong");
    c.onclick = () => show(Number(c.dataset.go));
  });
  if (isAdmin() && a.uid !== ctx.user.id) $(".room-foot-left a").href = "#/admin/results";
  show(Math.min(Number(startIdx) || 0, n - 1));
}

/* ------------------------------------------------------------------ */
/* Trang học sinh                                                      */
/* ------------------------------------------------------------------ */
function viewHome() {
  page({
    title: "Vào phòng thi",
    main: `<div class="panel" style="max-width:520px"><h3>Nhập mã ca thi</h3>
      <p class="muted small">Mã ca thi có trong Thông báo dự thi do giáo viên / Ban tổ chức cung cấp.</p>
      <form id="code-form" style="display:flex;gap:8px"><input class="input code" id="code" placeholder="Nhập mã ca thi..." required style="flex:1">
      <button class="btn btn-primary">${icons.arrow} Vào phòng thi</button></form></div>
      <div class="panel" style="max-width:520px"><h3>Luyện thêm</h3>
      <p class="muted small">Ngoài thi thử theo ca, em có thể luyện tập theo từng chủ đề, ôn lại những câu đã làm sai và theo dõi tiến bộ của mình.</p>
      <a class="btn" href="#/practice">${icons.target} Luyện tập theo chủ đề</a> <a class="btn" href="#/wrong">${icons.redo} Ôn lại câu làm sai</a></div>`,
  });
  $("#code-form").onsubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem(SESSION_KEY, normCode($("#code").value));
    location.hash = "#/ready";
  };
}

async function viewHistory() {
  const atts = (await store.listAttempts({ uid: ctx.user.id })).sort((a, b) => b.startedAt - a.startedAt);
  page({
    title: "Lịch sử thi thử",
    main: `<div class="table-wrap"><table class="tbl"><thead><tr><th>Bắt đầu</th><th>Phiên thi</th><th>Trạng thái</th><th>Số câu đúng</th><th>Điểm</th><th>Thời gian</th><th></th></tr></thead><tbody>
      ${atts.map((a) => `<tr><td>${fmtTime(a.startedAt)}</td><td>${esc(a.exam.title)}</td>
        <td>${a.state === "finished" ? '<span class="badge green">Đã nộp</span>' : '<span class="badge orange">Đang làm</span>'}</td>
        <td>${a.state === "finished" ? `${a.result.correct}/${a.result.total}` : ""}</td>
        <td>${a.state === "finished" ? `<b>${fmtNum(a.result.grade)}</b> / ${fmtNum(a.result.maxGrade)}` : ""}</td>
        <td>${a.state === "finished" ? fmtDuration(a.submittedAt - a.startedAt) : ""}</td>
        <td>${a.state === "finished" ? `<a href="#/result/${a.id}">Xem kết quả</a>` : `<a href="#/room/${a.id}">Tiếp tục</a>`}</td></tr>`).join("") || `<tr><td colspan="7" class="muted">Chưa có lần thi nào.</td></tr>`}
    </tbody></table></div>`,
  });
}

async function viewPractice() {
  const qs = await loadQuestions(true);
  const topics = [...new Set(qs.map((q) => q.topic).filter(Boolean))].sort();
  const diffs = [...new Set(qs.map((q) => q.difficulty).filter(Boolean))];
  page({
    title: "Luyện tập theo chủ đề",
    main: `<div class="panel" style="max-width:640px"><div class="form-grid">
        <label>Chủ đề</label><select class="form-control" id="p-topic"><option value="">Tất cả chủ đề</option>${topics.map((t) => `<option>${esc(t)}</option>`).join("")}</select>
        <label>Mức độ</label><select class="form-control" id="p-diff"><option value="">Tất cả mức độ</option>${diffs.map((t) => `<option>${esc(t)}</option>`).join("")}</select>
        <label>Số câu</label><select class="form-control" id="p-n">${[5, 10, 15, 20].map((n) => `<option ${n === 10 ? "selected" : ""}>${n}</option>`).join("")}</select>
        <label>Thời gian</label><select class="form-control" id="p-time"><option value="0">Không giới hạn</option><option value="1.5" selected>1,5 phút / câu (như thi thật)</option><option value="1">1 phút / câu (thử thách)</option></select>
        <label>Chế độ</label><select class="form-control" id="p-strict"><option value="0">Thoải mái (không bắt buộc toàn màn hình)</option><option value="1">Như thi thật (toàn màn hình, chặn sao chép)</option></select>
      </div><div style="margin-top:18px"><button class="btn btn-primary" id="p-start">${icons.arrow} Bắt đầu luyện tập</button> <span class="muted small">Ngân hàng hiện có ${qs.length} câu hỏi.</span></div></div>`,
  });
  $("#p-start").onclick = async () => {
    const topic = $("#p-topic").value, difficulty = $("#p-diff").value, n = Number($("#p-n").value);
    const pool = qs.filter((q) => (!topic || q.topic === topic) && (!difficulty || q.difficulty === difficulty));
    if (!pool.length) return toast("Không có câu hỏi phù hợp.");
    const pick = shuffle(pool).slice(0, n);
    const count = pick.length;
    const strict = $("#p-strict").value === "1";
    const e = {
      title: `Luyện tập: ${topic || "Tất cả chủ đề"}${difficulty ? ` – ${difficulty}` : ""}`,
      duration: Math.ceil(Number($("#p-time").value) * count), maxGrade: 10, reviewMode: "full", strict, shuffleOptions: true,
      matrix: ["mcq", "tf", "short"].map((t) => ({ type: t, count: pick.filter((q) => qType(q) === t).length })),
    };
    const items = buildItems(e, pick);
    if (strict) enterFullscreen();
    location.hash = `#/room/${await createAttempt(e, items, "practice")}`;
  };
}

async function viewWrong() {
  const qs = await loadQuestions();
  const qmap = qmapOf(qs);
  const atts = (await store.listAttempts({ uid: ctx.user.id })).filter((a) => a.state === "finished").sort((a, b) => a.submittedAt - b.submittedAt);
  const last = {};
  atts.forEach((a) => a.items.forEach((it, i) => (last[it.qid] = a.result.details[i].r === 1)));
  const wrongIds = Object.entries(last).filter(([qid, ok]) => !ok && qmap[qid]).map(([qid]) => qid);
  page({
    title: "Ôn lại các câu đã làm sai",
    main: wrongIds.length
      ? `<div class="alert info">Em có <b>${wrongIds.length}</b> câu đang làm sai (hoặc bỏ trống) ở lần gặp gần nhất. Câu nào làm lại đúng sẽ tự động được loại khỏi danh sách.</div>
        <button class="btn btn-primary" id="w-start">${icons.redo} Làm lại ${Math.min(20, wrongIds.length)} câu sai</button>
        <div class="table-wrap" style="margin-top:18px"><table class="tbl"><thead><tr><th>#</th><th>Câu hỏi</th><th>Chủ đề</th><th>Dạng</th></tr></thead><tbody>
        ${wrongIds.map((id, i) => `<tr><td>${i + 1}</td><td><div class="clip">${esc(qmap[id].content)}</div></td><td>${esc(qmap[id].topic || "")}</td><td>${TYPES[qType(qmap[id])].name}</td></tr>`).join("")}</tbody></table></div>`
      : `<div class="alert ok">Tuyệt vời! Em không có câu nào đang làm sai. Hãy thi thử thêm hoặc luyện tập theo chủ đề nhé.</div>`,
  });
  $("#w-start") && ($("#w-start").onclick = async () => {
    const pick = shuffle(wrongIds).slice(0, 20).map((id) => qmap[id]);
    const e = { title: `Ôn lại câu làm sai (${pick.length} câu)`, duration: 0, maxGrade: 10, reviewMode: "full", strict: false,
      matrix: ["mcq", "tf", "short"].map((t) => ({ type: t, count: pick.filter((q) => qType(q) === t).length })) };
    location.hash = `#/room/${await createAttempt(e, buildItems(e, pick), "practice")}`;
  });
}

async function viewProgress() {
  const qmap = qmapOf(await loadQuestions());
  const atts = (await store.listAttempts({ uid: ctx.user.id })).filter((a) => a.state === "finished").sort((a, b) => a.submittedAt - b.submittedAt);
  const exams = atts.filter((a) => a.examId !== "practice");
  const pct = (a) => Math.round((a.result.marks / a.result.totalMarks) * 100) || 0;
  const by = topicStats(atts, qmap);
  const W = Math.max(320, exams.length * 46 + 50);
  const chart = exams.length
    ? `<svg viewBox="0 0 ${W} 180" style="width:100%;max-width:${W}px;height:200px">
        ${[0, 50, 100].map((v) => `<line x1="34" x2="${W}" y1="${150 - v * 1.3}" y2="${150 - v * 1.3}" stroke="#e5e7eb"/><text x="0" y="${154 - v * 1.3}" font-size="10" fill="#6b7280">${v}%</text>`).join("")}
        ${exams.map((a, i) => `<rect x="${44 + i * 46}" y="${150 - pct(a) * 1.3}" width="30" height="${Math.max(1, pct(a) * 1.3)}" fill="${pct(a) >= 80 ? "#16a34a" : pct(a) >= 50 ? "#f59e0b" : "#dc2626"}" rx="3"><title>${esc(a.exam.title)} – ${fmtTime(a.submittedAt)}: ${pct(a)}%</title></rect>
          <text x="${59 + i * 46}" y="${145 - pct(a) * 1.3}" font-size="10" text-anchor="middle">${pct(a)}</text><text x="${59 + i * 46}" y="168" font-size="10" text-anchor="middle" fill="#6b7280">L${i + 1}</text>`).join("")}
      </svg>`
    : `<p class="muted">Chưa có lần thi thử nào.</p>`;
  const weak = Object.entries(by).filter(([, [c, n]]) => n >= 3 && c / n < 0.6).map(([t]) => t);
  page({
    title: "Tiến bộ của tôi",
    main: `<div class="cards">
        <div class="stat"><div class="v">${exams.length}</div><div class="k">Lần thi thử</div></div>
        <div class="stat"><div class="v">${atts.length - exams.length}</div><div class="k">Lần luyện tập</div></div>
        <div class="stat"><div class="v">${exams.length ? Math.max(...exams.map(pct)) : 0}%</div><div class="k">Kết quả cao nhất</div></div>
        <div class="stat"><div class="v">${exams.length ? Math.round(exams.reduce((s, a) => s + pct(a), 0) / exams.length) : 0}%</div><div class="k">Trung bình</div></div>
      </div>
      <div class="panel"><h3>Kết quả các lần thi thử (% điểm)</h3>${chart}</div>
      <div class="panel"><h3>Tỉ lệ làm đúng theo chủ đề</h3>
        ${Object.keys(by).length ? `<div class="bar-chart">${Object.entries(by).sort((x, y) => x[1][0] / x[1][1] - y[1][0] / y[1][1]).map(([t, [c, n]]) => barRow(t, c, n)).join("")}</div>` : `<p class="muted">Chưa có dữ liệu.</p>`}
        ${weak.length ? `<div class="alert warn" style="margin-top:16px">Chủ đề cần ôn thêm: <b>${weak.map(esc).join(", ")}</b>. Vào <a href="#/practice">Luyện tập theo chủ đề</a> để luyện thêm.</div>` : ""}
      </div>`,
  });
}

function viewProfile() {
  const u = ctx.user;
  page({
    title: "Tài khoản của tôi",
    main: `<div class="panel" style="max-width:640px"><div class="info-list">
        <div class="row"><span>Tên đăng nhập</span><span class="mono">${esc(u.username)}</span></div>
        <div class="row"><span>Họ và tên</span><span>${esc(u.name)}</span></div>
        <div class="row"><span>Số báo danh</span><span class="mono">${esc(u.sbd || "")}</span></div>
        <div class="row"><span>Trường / Lớp</span><span>${esc([u.school, u.cls].filter(Boolean).join(" – "))}</span></div></div>
      <h3>Đổi mật khẩu</h3>
      <form id="pw-form" class="form-grid">
        <label>Mật khẩu hiện tại</label><input class="form-control" type="password" id="pw-old" required>
        <label>Mật khẩu mới</label><input class="form-control" type="password" id="pw-new" minlength="6" required>
        <label>Nhập lại mật khẩu mới</label><input class="form-control" type="password" id="pw-new2" minlength="6" required>
        <span></span><div><button class="btn btn-primary">Lưu thay đổi</button></div>
      </form><div id="pw-msg" style="margin-top:12px"></div></div>`,
  });
  $("#pw-form").onsubmit = async (e) => {
    e.preventDefault();
    const msg = $("#pw-msg");
    if ($("#pw-new").value !== $("#pw-new2").value) return (msg.innerHTML = `<div class="alert err">Mật khẩu nhập lại không khớp.</div>`);
    try {
      await store.changePassword($("#pw-old").value, $("#pw-new").value);
      msg.innerHTML = `<div class="alert ok">Đã đổi mật khẩu.</div>`;
      e.target.reset();
    } catch (err) {
      msg.innerHTML = `<div class="alert err">${esc(err.message)}</div>`;
    }
  };
}

function notFound() {
  page({ title: "Không tìm thấy trang", main: `<p>Trang bạn yêu cầu không tồn tại hoặc bạn không có quyền truy cập.</p><a class="btn" href="#/">Về trang chủ</a>` });
}

/* ------------------------------------------------------------------ */
/* Router                                                              */
/* ------------------------------------------------------------------ */
async function route() {
  cleanup.forEach((f) => f());
  cleanup = [];
  const parts = location.hash.replace(/^#\/?/, "").split("/");
  if (!ctx.user) return viewLogin();
  try {
    switch (parts[0]) {
      case "": case "login":
        return (location.hash = isAdmin() ? "#/admin" : sessionStorage.getItem(SESSION_KEY) ? "#/ready" : "#/home");
      case "home": return viewHome();
      case "ready": return viewReady();
      case "room": return viewRoom(parts[1], parts[2]);
      case "result": return viewResult(parts[1]);
      case "review": return viewReview(parts[1], parts[2]);
      case "history": return viewHistory();
      case "practice": return viewPractice();
      case "wrong": return viewWrong();
      case "progress": return viewProgress();
      case "profile": return viewProfile();
      case "admin": return isAdmin() ? renderAdmin(parts.slice(1)) : notFound();
      default: return notFound();
    }
  } catch (err) {
    console.error(err);
    page({ title: "Đã xảy ra lỗi", main: `<div class="alert err">${esc(err.message || err)}</div><a class="btn" href="#/">Về trang chủ</a>` });
  }
}

window.addEventListener("hashchange", route);
ctx.settings = { ...DEFAULT_SETTINGS, ...(await store.getSettings().catch(() => ({}))) };
store.onAuth(async (uid) => {
  ctx.user = null;
  ctx.questions = ctx.exams = null;
  if (uid) {
    const p = await store.getProfile(uid).catch(() => null);
    if (!p || p.active === false) {
      sessionStorage.setItem("olympicstem-blocked", "1");
      await store.logout();
      return;
    }
    ctx.user = p;
    if (p.role === "admin" && sessionStorage.getItem(SESSION_KEY) && location.hash.startsWith("#/login")) return (location.hash = "#/ready");
  }
  if (!ctx.user && !location.hash.startsWith("#/login")) location.hash = "#/login";
  else if (ctx.user && location.hash.startsWith("#/login")) location.hash = "#/";
  else route();
});
