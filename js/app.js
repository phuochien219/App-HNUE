import { store } from "./store.js";
import { esc, $, $$, icons, quizIcon, pageIcon, annIcon, toast, modal, confirmBox, renderRich, renderOption } from "./ui.js";
import { LETTERS, buildItems, grade, fmtNum, fmtDuration, fmtTime, shuffle } from "./exam.js";
import { renderAdmin } from "./admin.js";

export const DEFAULT_SETTINGS = {
  siteTitle: "HỆ THỐNG THI THỬ TRỰC TUYẾN",
  orgName: "OLYMPIC STEM 2026",
  courseName: "HNUE OLYMPIC STEM 2026",
  levelName: "Cấp Tiểu học",
  announcement: "Chào mừng các em đến với hệ thống thi thử vòng Sơ loại. Hãy làm đề minh hoạ nhiều lần để làm quen với giao diện thi.",
  intro:
    "Chào mừng bạn đến với vòng thi Sơ loại của cuộc thi **HNUE Olympic STEM 2026**.\nĐề thi cấp Tiểu học gồm 20 câu, thời gian làm bài 30 phút.",
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
  if (!ctx.exams || force) ctx.exams = (await store.listExams()).sort((a, b) => (a.order ?? 0) - (b.order ?? 0) || (a.title || "").localeCompare(b.title || ""));
  return ctx.exams;
}
const qmapOf = (qs) => Object.fromEntries(qs.map((q) => [q.id, q]));
export const isAdmin = () => ctx.user?.role === "admin";

/* ------------------------------------------------------------------ */
/* Khung trang                                                         */
/* ------------------------------------------------------------------ */
function shell({ crumbs = [], title = "", main = "", side = "", sideNav = "course" }) {
  const S = ctx.settings;
  const r = location.hash;
  const a = (href, icon, label) => `<a href="${href}" class="${r === href ? "active" : ""}">${icons[icon]}<span>${label}</span></a>`;
  const courseNav =
    sideNav === "course"
      ? `<div class="nav-card">
          ${a("#/course", "cap", esc(S.courseName))}
          ${a("#/my-results", "chart", "Kết quả của tôi")}
          ${a("#/practice", "target", "Luyện tập theo chủ đề")}
          ${a("#/wrong", "redo", "Ôn lại câu làm sai")}
        </div>
        <div class="nav-card">
          ${a("#/", "home", "Trang chủ")}
          <div class="head">${icons.list} Nội dung khóa học</div>
          <div class="sub">${a("#/course", "book", esc(S.levelName))}</div>
        </div>`
      : "";
  const adminNav = isAdmin()
    ? `<div class="nav-card"><div class="head">${icons.gear} Quản trị</div><div class="sub">
        ${a("#/admin", "chart", "Tổng quan")}
        ${a("#/admin/users", "users", "Tài khoản")}
        ${a("#/admin/questions", "book", "Ngân hàng câu hỏi")}
        ${a("#/admin/exams", "grid", "Đề thi & ma trận")}
        ${a("#/admin/results", "trophy", "Kết quả thi thử")}
        ${a("#/admin/settings", "gear", "Cài đặt")}
      </div></div>`
    : "";
  return `<div class="layout" id="layout">
    <aside class="drawer">
      <div class="logo"><img src="img/logo.svg" alt=""><div><div class="t1">${esc(S.orgName)}</div><div class="t2">${esc(S.siteTitle)}</div></div></div>
      ${courseNav}
      <div class="nav-card">
        ${sideNav !== "course" ? a("#/", "home", "Trang chủ") : ""}
        ${a("#/profile", "card", "Trang cá nhân của tôi")}
        ${a("#/my-results", "cal", "Lịch sử làm bài")}
        <div class="head">${icons.list} Các khoá học của tôi</div>
        <div class="sub">${a("#/course", "cap", esc(S.courseName))}</div>
      </div>
      ${adminNav}
    </aside>
    <div class="main">
      <header class="topbar">
        <button class="menu-btn" id="menu-btn" title="Ẩn/hiện menu">${icons.menu}</button>
        <div class="spacer"></div>
        <span class="icon" title="Tìm kiếm">${icons.search}</span>
        <span class="icon" title="Thông báo" id="bell">${icons.bell}</span>
        <span class="vsep"></span>
        <div class="user-menu" id="user-menu">
          <span class="uname">${esc(ctx.user.name || ctx.user.username)}</span>
          <span class="avatar">${icons.user}</span> ▾
          <div class="dropdown" id="user-dd">
            <a href="#/profile">Hồ sơ</a>
            <a href="#/my-results">Kết quả của tôi</a>
            ${isAdmin() ? `<a href="#/admin">Quản trị</a>` : ""}
            <a id="logout">Thoát</a>
          </div>
        </div>
      </header>
      <div class="content">
        <div class="col-main">
          ${crumbs.length ? `<div class="breadcrumb">${crumbs.map(([t, h]) => (h ? `<a href="${h}">${esc(t)}</a>` : `<span>${esc(t)}</span>`)).join('<span class="sep">/</span>')}</div>` : ""}
          ${title ? `<h1 class="page-title">${esc(title)}</h1>` : ""}
          ${main}
        </div>
        ${side ? `<div class="col-side">${side}</div>` : ""}
      </div>
      <footer class="footer">
        <div>${esc(S.orgName)} – ${esc(S.siteTitle)}<br><span class="warn">Đây là hệ thống THI THỬ để học sinh làm quen giao diện, không phải hệ thống thi chính thức.</span></div>
        <div class="small-muted">${store.mode === "demo" ? '<span class="demo-badge">Chế độ demo – dữ liệu lưu trên trình duyệt này</span>' : ""}</div>
      </footer>
    </div>
  </div>`;
}

function bindShell() {
  $("#menu-btn").onclick = () => {
    const l = $("#layout");
    if (innerWidth <= 800) l.classList.toggle("opened");
    else l.classList.toggle("collapsed");
  };
  $("#user-menu").onclick = (e) => { e.stopPropagation(); $("#user-dd").classList.toggle("open"); };
  document.onclick = () => $("#user-dd")?.classList.remove("open");
  $("#logout").onclick = async () => { await store.logout(); location.hash = "#/login"; };
  $("#bell").onclick = () => modal({ title: "Thông báo", body: `<p>${renderRich(ctx.settings.announcement || "Không có thông báo mới.")}</p>` });
}

function render(opts) {
  app.innerHTML = shell(opts);
  bindShell();
  window.scrollTo(0, 0);
}
export { render };

/* ------------------------------------------------------------------ */
/* Đăng nhập & khởi tạo                                                */
/* ------------------------------------------------------------------ */
async function viewLogin() {
  const S = ctx.settings;
  const setup = await store.needsSetup();
  const remembered = localStorage.getItem("olympicstem-remember") || "";
  app.innerHTML = `<div class="login-page">
    <div class="login-hero">
      <div class="brand"><img src="img/logo.svg" alt=""> STEM LMS</div>
      <div class="slogan"><div class="sub">${esc(S.siteTitle)}</div><div class="main">${esc(S.orgName).replace(" ", "<br>")}</div></div>
      <div class="copy">Hệ thống thi thử dành cho học sinh</div>
    </div>
    <div class="login-panel">
      <div class="login-logo"><img src="img/logo.svg" alt=""><div><div class="t1">${esc(S.orgName)}</div><div class="t2">${esc(S.siteTitle)}</div></div></div>
      ${setup ? `<div class="alert info">Chưa có tài khoản quản trị. Hãy tạo tài khoản <b>quản trị viên</b> đầu tiên.</div>` : ""}
      <div id="login-err"></div>
      <form id="login-form">
        ${setup ? `<div class="input-icon">${icons.card}<input id="li-name" placeholder="Họ tên quản trị viên" required></div>` : ""}
        <div class="input-icon">${icons.user}<input id="li-user" placeholder="Tên đăng nhập" value="${esc(setup ? "admin" : remembered)}" autocomplete="username" required></div>
        <div class="input-icon">${icons.key}<input id="li-pass" type="password" placeholder="Mật khẩu" autocomplete="current-password" required></div>
        <div class="login-forgot"><a id="forgot" style="color:inherit">Bạn quên tên đăng nhập hoặc mật khẩu?</a></div>
        <button class="btn btn-primary btn-block" type="submit">${setup ? "Tạo tài khoản quản trị" : "Đăng nhập"}</button>
        <div class="toggle-row"><label class="switch"><input type="checkbox" id="li-rem" ${remembered ? "checked" : ""}><span></span></label> Nhớ tên tài khoản</div>
      </form>
      <div class="login-sep"></div>
      <p class="login-note">Tài khoản đăng nhập do Ban tổ chức / giáo viên cấp.<br>Liên hệ giáo viên phụ trách nếu bạn chưa có tài khoản.</p>
      ${store.mode === "demo" ? `<p class="login-note"><span class="demo-badge">Chế độ demo</span> – dữ liệu chỉ lưu trên trình duyệt này.</p>` : ""}
    </div>
  </div>`;
  $("#forgot").onclick = () => modal({ title: "Quên mật khẩu", size: "sm", body: "<p>Vui lòng liên hệ giáo viên/quản trị viên để được cấp lại mật khẩu.</p>" });
  $("#login-form").onsubmit = async (e) => {
    e.preventDefault();
    const btn = e.submitter;
    btn.disabled = true;
    const u = $("#li-user").value, pw = $("#li-pass").value;
    try {
      if (setup) {
        if (pw.length < 6) throw new Error("Mật khẩu phải có ít nhất 6 ký tự.");
        await store.bootstrapAdmin({ username: u, password: pw, name: $("#li-name").value });
        if (store.mode === "demo") await store.login(u, pw);
      } else {
        await store.login(u, pw);
      }
      if ($("#li-rem").checked) localStorage.setItem("olympicstem-remember", u);
      else localStorage.removeItem("olympicstem-remember");
    } catch (err) {
      $("#login-err").innerHTML = `<div class="login-error">${esc(err.message)}</div>`;
      btn.disabled = false;
    }
  };
}

/* ------------------------------------------------------------------ */
/* Trang chủ & khoá học                                                */
/* ------------------------------------------------------------------ */
const banner = () => `<div class="course-banner"><span class="ava"></span><span class="tag">STEM</span>
  <div class="b1">HNUE OLYMPIC STEM</div><div class="b2">FUTURE INNOVATORS</div>
  <div class="small-muted" style="font-size:10px;margin-top:6px">Sân chơi học thuật cho học sinh Tiểu học, THCS và THPT</div></div>`;

function viewHome() {
  const S = ctx.settings;
  render({
    sideNav: "home",
    main: `<div class="course-grid"><h2 class="center-title">Các khoá học của tôi</h2>
      <div class="course-card">${banner()}<div class="course-body"><div class="name">${esc(S.courseName)}</div>
      <a class="btn btn-primary btn-block" href="#/course">♥ Vào học</a></div></div></div>`,
    side: `<div class="side-block"><h4>Các khoá học của tôi</h4><div class="side-item">${icons.cap.replace("<svg", '<svg width="16"')} ${esc(S.courseName)}</div>
      <a class="btn btn-primary btn-block btn-sm" href="#/course">Tất cả các khoá học</a></div>`,
  });
}

const doneKey = () => `olympicstem-done-${ctx.user.id}`;
const getDone = () => { try { return JSON.parse(localStorage.getItem(doneKey())) || {}; } catch { return {}; } };

async function viewCourse() {
  const S = ctx.settings;
  const exams = (await loadExams()).filter((e) => e.visible !== false);
  const done = getDone();
  const markBtn = (k) => `<button class="mark-btn ${done[k] ? "done" : ""}" data-done="${k}">${done[k] ? "✓ Đã hoàn thành" : "Đánh dấu hoàn thành"}</button>`;
  const act = (href, icon, title, sub, k, blue) =>
    `<div class="activity"><span class="ico ${blue ? "blue" : ""}">${icon}</span><a class="t" href="${href}">${esc(title)}${sub ? `<small>${sub}</small>` : ""}</a>${markBtn(k)}</div>`;
  const myAttempts = await store.listAttempts({ uid: ctx.user.id });
  render({
    crumbs: [["Trang chủ", "#/"], ["Các khoá học của tôi", "#/"], [S.courseName]],
    title: S.courseName,
    main: `<div class="progress-label">Quá trình học của bạn ⓘ</div>
      <div class="section">${act("#/announce", annIcon, "Các thông báo", "", "ann", true)}</div>
      <div class="section"><h2>${esc(S.levelName)}</h2>
        <div style="display:flex;gap:20px;align-items:flex-start"><div class="desc" style="flex:1">${renderRich(S.intro)}
          ${exams[0] ? `<div style="margin-top:12px"><b>Cấu trúc đề thi:</b><ul>
            <li>Gồm ${exams[0].matrix?.reduce((s, r) => s + Number(r.count || 0), 0) || 0} câu hỏi trắc nghiệm nhiều lựa chọn.</li>
            <li>Mỗi câu có 4 phương án, chọn 1 đáp án đúng nhất.</li>
            <li>Mỗi câu trả lời đúng: ${exams[0].pointsPerQuestion || 5} điểm.</li></ul>
            <b style="font-size:14px">Lưu ý khi làm bài:</b><ul><li>Đọc kỹ đề trước khi trả lời.</li><li style="font-size:14px">👉 Để bắt đầu làm bài thi, bạn hãy click vào link dưới đây.</li></ul></div>` : ""}
        </div>${markBtn("intro")}</div>
        ${exams.length ? exams.map((e) => {
          const mine = myAttempts.filter((a) => a.examId === e.id && a.state === "finished");
          const best = mine.length ? Math.max(...mine.map((a) => a.result.grade)) : null;
          return act(`#/exam/${e.id}`, quizIcon, e.title, best !== null ? `Đã làm ${mine.length} lần · Điểm cao nhất: ${fmtNum(best)} / ${fmtNum(e.maxGrade)}` : "", "exam-" + e.id);
        }).join("") : `<div class="alert warn">Chưa có đề thi nào được mở. Vui lòng quay lại sau.</div>`}
        ${act("#/practice", pageIcon, "Luyện tập theo chủ đề", "Tự chọn chủ đề, mức độ và số câu – xem đáp án và giải thích ngay sau khi nộp", "practice")}
        ${act("#/wrong", pageIcon, "Ôn lại các câu đã làm sai", "Làm lại những câu bạn từng trả lời sai", "wrong")}
        ${act("#/my-results", pageIcon, "Kết quả và tiến bộ của tôi", "Biểu đồ điểm, tỉ lệ đúng theo chủ đề", "results")}
      </div>`,
    side: `<div class="side-block"><h4>Thành viên trên mạng</h4><div class="small-muted" style="margin-bottom:12px">1 người dùng trực tuyến (cách đây 5 phút)</div>
      <div class="side-item">${esc(ctx.user.name || ctx.user.username)} <span style="margin-left:auto;color:var(--red)">●</span></div></div>`,
  });
  $$("[data-done]").forEach((b) => (b.onclick = () => {
    const d = getDone();
    d[b.dataset.done] = !d[b.dataset.done];
    localStorage.setItem(doneKey(), JSON.stringify(d));
    viewCourse();
  }));
}

function viewAnnounce() {
  const S = ctx.settings;
  render({
    crumbs: [["Trang chủ", "#/"], [S.courseName, "#/course"], ["Các thông báo"]],
    title: "Các thông báo",
    main: `<div class="section"><div class="desc">${renderRich(S.announcement || "Chưa có thông báo.")}</div></div>`,
  });
}

/* ------------------------------------------------------------------ */
/* Trang đề thi (danh sách các lần làm)                                */
/* ------------------------------------------------------------------ */
function examStatus(e) {
  const now = Date.now();
  if (e.openFrom && now < new Date(e.openFrom).getTime()) return `Đề thi sẽ mở lúc ${fmtTime(new Date(e.openFrom).getTime())}.`;
  if (e.openTo && now > new Date(e.openTo).getTime()) return `Đề thi đã đóng lúc ${fmtTime(new Date(e.openTo).getTime())}.`;
  return null;
}

async function viewExam(id) {
  const S = ctx.settings;
  const exams = await loadExams();
  const e = exams.find((x) => x.id === id);
  if (!e) return notFound();
  const attempts = (await store.listAttempts({ uid: ctx.user.id })).filter((a) => a.examId === id).sort((a, b) => a.startedAt - b.startedAt);
  const finished = attempts.filter((a) => a.state === "finished");
  const inprog = attempts.find((a) => a.state === "inprogress");
  const best = finished.length ? Math.max(...finished.map((a) => a.result.grade)) : null;
  const max = Number(e.maxAttempts) || 0;
  const closed = examStatus(e);
  const canStart = !closed && (inprog || !max || attempts.length < max);
  const idx = exams.findIndex((x) => x.id === id);
  const reviewable = e.reviewMode !== "none";
  render({
    crumbs: [["Trang chủ", "#/"], ["Các khoá học của tôi", "#/"], [S.courseName, "#/course"], [S.levelName, "#/course"], [e.title]],
    title: S.courseName,
    main: `<h2 style="font-size:24px;font-weight:400">${esc(e.title)}</h2>
      ${e.description ? `<div class="desc">${renderRich(e.description)}</div>` : ""}
      <div class="info-box">
        ${e.duration ? `<div>Thời gian làm bài: ${e.duration} phút</div>` : `<div>Không giới hạn thời gian</div>`}
        ${max ? `<div>Số lần làm bài cho phép: ${max}</div>` : ""}
        <div>Phương thức tính điểm: Lần cao nhất</div>
        ${e.openTo ? `<div>Đóng đề lúc: ${fmtTime(new Date(e.openTo).getTime())}</div>` : ""}
      </div>
      ${attempts.length ? `<h3 style="font-size:22px;font-weight:400">Tổng kết lần kiểm tra trước đó của bạn:</h3>
      <div class="table-wrap" style="border:none"><table class="tbl"><thead><tr><th>Làm lại</th><th>Trạng thái</th><th>Điểm / ${fmtNum(e.totalMarks || 100)}</th><th>Điểm / ${fmtNum(e.maxGrade)}</th><th>Xem lại</th></tr></thead><tbody>
      ${attempts.map((a, i) => `<tr><td>${i + 1}</td>
        <td>${a.state === "finished" ? `Đã kết thúc<div class="small-muted">Đã nộp bài ${fmtTime(a.submittedAt)}</div>` : `Đang làm bài<div class="small-muted">Bắt đầu ${fmtTime(a.startedAt)}</div>`}</td>
        <td>${a.state === "finished" ? fmtNum(a.result.marks) : ""}</td><td>${a.state === "finished" ? fmtNum(a.result.grade) : ""}</td>
        <td>${a.state === "finished" ? (reviewable ? `<a href="#/review/${a.id}">Xem lại</a>` : "Không được phép") : `<a href="#/attempt/${a.id}/0">Tiếp tục</a>`}</td></tr>`).join("")}
      </tbody></table></div>` : ""}
      ${best !== null ? `<div class="dark-bar">Lần cao nhất: ${fmtNum(best)} / ${fmtNum(e.maxGrade)}.</div>` : `<div style="height:30px"></div>`}
      ${closed ? `<div class="alert warn">${closed}</div>` : ""}
      ${!canStart && !closed ? `<div class="alert warn">Bạn đã dùng hết số lần làm bài cho phép.</div>` : ""}
      ${canStart ? `<button class="btn" id="start">${inprog ? "Tiếp tục lần làm bài cuối" : attempts.length ? "Thực hiện lại đề thi" : "Bắt đầu làm bài"}</button>` : ""}
      <div class="nav-row">
        ${idx > 0 ? `<a class="btn" href="#/exam/${exams[idx - 1].id}">◂ ${esc(exams[idx - 1].title)}</a>` : `<a class="btn" href="#/announce">◂ Các thông báo</a>`}
        <select class="form-control" id="jump" style="min-width:240px"><option value="">Chuyển tới...</option>
          ${exams.map((x) => `<option value="#/exam/${x.id}">${esc(x.title)}</option>`).join("")}<option value="#/practice">Luyện tập theo chủ đề</option><option value="#/my-results">Kết quả của tôi</option></select>
        ${idx < exams.length - 1 ? `<a class="btn" href="#/exam/${exams[idx + 1].id}">${esc(exams[idx + 1].title)} ▸</a>` : `<a class="btn" href="#/practice">Luyện tập theo chủ đề ▸</a>`}
      </div>`,
  });
  $("#jump").onchange = (ev) => ev.target.value && (location.hash = ev.target.value);
  const st = $("#start");
  if (st) st.onclick = async () => {
    if (inprog) return (location.hash = `#/attempt/${inprog.id}/0`);
    const ok = await modal({
      title: "Bắt đầu làm bài", size: "sm",
      body: e.duration
        ? `<p><b>Giới hạn thời gian</b></p><p>Bài làm có giới hạn thời gian là <b>${e.duration} phút</b>. Thời gian sẽ bắt đầu đếm ngược từ thời điểm bạn bắt đầu và bạn phải nộp bài trước khi hết giờ. Hết giờ, bài sẽ được tự động nộp.</p><p>Bạn có chắc chắn muốn bắt đầu ngay bây giờ không?</p>`
        : "<p>Bạn có chắc chắn muốn bắt đầu làm bài?</p>",
      buttons: [{ label: "Huỷ", value: false }, { label: "Bắt đầu làm bài", cls: "btn-primary", value: true }],
    });
    if (!ok) return;
    try {
      const items = buildItems(e, await loadQuestions());
      const id = await createAttempt(e, items, e.id);
      location.hash = `#/attempt/${id}/0`;
    } catch (err) {
      modal({ title: "Không thể tạo đề", body: `<div class="alert err">${esc(err.message)}</div><p>Vui lòng báo cho giáo viên/quản trị viên.</p>` });
    }
  };
}

const examSnapshot = (e) => ({
  title: e.title, duration: Number(e.duration) || 0, pointsPerQuestion: Number(e.pointsPerQuestion) || 5,
  maxGrade: Number(e.maxGrade) || 0, reviewMode: e.reviewMode || "full", perPage: Number(e.perPage) || 1,
});

async function createAttempt(e, items, examId) {
  const now = Date.now();
  const exam = examSnapshot(e);
  if (!exam.maxGrade) exam.maxGrade = items.length * exam.pointsPerQuestion;
  return store.createAttempt({
    uid: ctx.user.id, username: ctx.user.username, name: ctx.user.name || "", examId, exam, items,
    answers: {}, flags: {}, leaveCount: 0, state: "inprogress", startedAt: now,
    deadline: exam.duration ? now + exam.duration * 60000 : null,
  });
}

/* ------------------------------------------------------------------ */
/* Làm bài                                                             */
/* ------------------------------------------------------------------ */
const crumbsFor = (a) =>
  a.examId && a.examId !== "practice"
    ? [["Trang chủ", "#/"], ["Các khoá học của tôi", "#/"], [ctx.settings.courseName, "#/course"], [ctx.settings.levelName, "#/course"], [a.exam.title, `#/exam/${a.examId}`]]
    : [["Trang chủ", "#/"], [ctx.settings.courseName, "#/course"], ["Luyện tập", "#/practice"], [a.exam.title]];

async function finishAttempt(a, auto) {
  const qmap = qmapOf(await loadQuestions());
  const r = grade(a, a.exam, qmap);
  const result = { ...r, details: r.details.map((d) => ({ c: d.correct ? 1 : 0, ch: d.chosen })) };
  const patch = { state: "finished", submittedAt: Date.now(), result, answers: a.answers, flags: a.flags, autoSubmitted: !!auto };
  await store.updateAttempt(a.id, patch);
  Object.assign(a, patch);
  return a;
}

async function viewAttempt(id, page) {
  const a = await store.getAttempt(id);
  if (!a || a.uid !== ctx.user.id) return notFound();
  if (a.state === "finished") return (location.hash = `#/review/${id}`);
  if (a.deadline && Date.now() >= a.deadline) {
    await finishAttempt(a, true);
    toast("Đã hết giờ – bài làm đã được tự động nộp.");
    return (location.hash = `#/review/${id}`);
  }
  const qmap = qmapOf(await loadQuestions());
  const n = a.items.length;
  const per = a.exam.perPage || 1;
  const pages = Math.ceil(n / per);
  page = Math.min(Math.max(0, Number(page) || 0), pages - 1);
  const idxs = Array.from({ length: per }, (_, k) => page * per + k).filter((i) => i < n);

  const qHtml = (i) => {
    const it = a.items[i];
    const q = qmap[it.qid];
    if (!q) return `<div class="alert err">Câu hỏi đã bị xoá khỏi ngân hàng.</div>`;
    const ans = a.answers[i];
    return `<div class="qhead" style="margin-top:${i === idxs[0] ? 0 : 24}px"><span class="qn">Câu hỏi ${i + 1}</span>
        <span><span class="state" id="st-${i}">${ans !== undefined && ans !== null ? "Đã trả lời" : "Chưa trả lời"}</span>
        <button class="flag-btn ${a.flags[i] ? "on" : ""}" data-flag="${i}">${icons.flag} ${a.flags[i] ? "Bỏ cờ" : "Đặt cờ"}</button></span></div>
      <div class="qbox"><div class="qtext">${renderRich(q.content)}</div>
        ${q.image ? `<img class="qimg" src="${esc(q.image)}" alt="">` : ""}
        ${it.perm.map((orig, pos) => `<label class="opt"><input type="radio" name="q${i}" value="${pos}" ${ans === pos ? "checked" : ""}><span class="l">${LETTERS[pos]}.</span><span>${renderOption(q.options[orig])}</span></label>`).join("")}
        <a class="clear-link ${ans === undefined || ans === null ? "hidden" : ""}" data-clear="${i}">Xoá lựa chọn</a>
      </div>`;
  };

  render({
    crumbs: crumbsFor(a),
    title: ctx.settings.courseName,
    main: `<div class="timer-row">${a.deadline ? `<div class="timer" id="timer"><span class="hg">${icons.hourglass}</span>Thời gian còn lại <span id="tleft"></span></div>` : ""}</div>
      ${idxs.map(qHtml).join("")}
      <div class="qnav-btns">
        ${page > 0 ? `<button class="btn" id="prev">Trang trước</button>` : "<span></span>"}
        ${page < pages - 1 ? `<button class="btn btn-primary" id="next">Trang tiếp</button>` : `<button class="btn btn-primary" id="tofinish">Kết thúc làm bài...</button>`}
      </div>`,
    side: `<div class="navblock"><h4>Các câu hỏi trong bài kiểm tra</h4>
      <div class="note">TRẮC NGHIỆM (${fmtNum(n * a.exam.pointsPerQuestion).replace(",00", "")} điểm). Thí sinh chỉ chọn một phương án. Đối với mỗi câu trả lời đúng, thí sinh được ${String(a.exam.pointsPerQuestion).padStart(2, "0")} điểm.</div>
      <div class="qgrid">${a.items.map((_, i) => `<button class="qcell" data-go="${i}"><span class="num">${i + 1}</span><span class="bar"></span></button>`).join("")}</div>
      <a class="finish-link" href="#/summary/${id}">Kết thúc làm bài...</a>
      <div class="legend"><i style="background:#8a9097"></i>Đã trả lời &nbsp; <i style="background:var(--red)"></i>Đặt cờ</div></div>`,
  });

  const refreshGrid = () =>
    $$(".qcell").forEach((c) => {
      const i = Number(c.dataset.go);
      c.classList.toggle("answered", a.answers[i] !== undefined && a.answers[i] !== null);
      c.classList.toggle("flagged", !!a.flags[i]);
      c.classList.toggle("current", idxs.includes(i));
    });
  refreshGrid();

  let saving = Promise.resolve();
  const persist = () => (saving = saving.then(() => store.updateAttempt(id, { answers: a.answers, flags: a.flags })).catch(() => toast("Lỗi lưu bài – kiểm tra kết nối mạng!")));

  $$(".opt input").forEach((inp) => (inp.onchange = () => {
    const i = Number(inp.name.slice(1));
    a.answers[i] = Number(inp.value);
    $(`#st-${i}`).textContent = "Đã trả lời";
    $(`[data-clear="${i}"]`).classList.remove("hidden");
    refreshGrid();
    persist();
  }));
  $$("[data-clear]").forEach((l) => (l.onclick = () => {
    const i = Number(l.dataset.clear);
    a.answers[i] = null;
    $$(`input[name="q${i}"]`).forEach((x) => (x.checked = false));
    $(`#st-${i}`).textContent = "Chưa trả lời";
    l.classList.add("hidden");
    refreshGrid();
    persist();
  }));
  $$("[data-flag]").forEach((b) => (b.onclick = () => {
    const i = Number(b.dataset.flag);
    a.flags[i] = !a.flags[i];
    b.classList.toggle("on", a.flags[i]);
    b.innerHTML = `${icons.flag} ${a.flags[i] ? "Bỏ cờ" : "Đặt cờ"}`;
    refreshGrid();
    persist();
  }));
  const go = async (h) => { await saving; location.hash = h; };
  $$(".qcell").forEach((c) => (c.onclick = () => go(`#/attempt/${id}/${Math.floor(Number(c.dataset.go) / per)}`)));
  $("#prev") && ($("#prev").onclick = () => go(`#/attempt/${id}/${page - 1}`));
  $("#next") && ($("#next").onclick = () => go(`#/attempt/${id}/${page + 1}`));
  $("#tofinish") && ($("#tofinish").onclick = () => go(`#/summary/${id}`));
  $(".finish-link").onclick = (ev) => { ev.preventDefault(); go(`#/summary/${id}`); };

  // Đếm số lần rời khỏi màn hình làm bài (giáo viên xem được).
  const onVis = () => {
    if (document.hidden) {
      a.leaveCount = (a.leaveCount || 0) + 1;
      store.updateAttempt(id, { leaveCount: a.leaveCount }).catch(() => {});
    }
  };
  document.addEventListener("visibilitychange", onVis);
  onLeave(() => document.removeEventListener("visibilitychange", onVis));
  startTimer(a);
}

function startTimer(a) {
  if (!a.deadline) return;
  const el = $("#tleft");
  const tick = async () => {
    const left = a.deadline - Date.now();
    if (left <= 0) {
      clearInterval(t);
      await finishAttempt(a, true);
      await modal({ title: "Hết giờ làm bài", size: "sm", body: "<p>Đã hết thời gian làm bài. Bài làm của bạn đã được tự động nộp.</p>" });
      location.hash = `#/review/${a.id}`;
      return;
    }
    const s = Math.ceil(left / 1000);
    el.textContent = `${Math.floor(s / 3600)}:${String(Math.floor((s % 3600) / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
    $("#timer")?.classList.toggle("warn", s <= 60);
  };
  const t = setInterval(tick, 1000);
  tick();
  onLeave(() => clearInterval(t));
}

async function viewSummary(id) {
  const a = await store.getAttempt(id);
  if (!a || a.uid !== ctx.user.id) return notFound();
  if (a.state === "finished") return (location.hash = `#/review/${id}`);
  const answered = (i) => a.answers[i] !== undefined && a.answers[i] !== null;
  const nBlank = a.items.filter((_, i) => !answered(i)).length;
  render({
    crumbs: [...crumbsFor(a), ["Tóm tắt lần làm bài"]],
    title: ctx.settings.courseName,
    main: `<div class="timer-row">${a.deadline ? `<div class="timer" id="timer"><span class="hg">${icons.hourglass}</span>Thời gian còn lại <span id="tleft"></span></div>` : ""}</div>
      <h2 style="font-size:24px;font-weight:400">${esc(a.exam.title)}</h2>
      <h3 style="font-size:20px;font-weight:400">Tóm tắt lần làm bài</h3>
      <div class="table-wrap" style="border:none"><table class="tbl"><thead><tr><th>Câu hỏi</th><th>Trạng thái</th></tr></thead><tbody>
      ${a.items.map((_, i) => `<tr><td><a href="#/attempt/${id}/${Math.floor(i / (a.exam.perPage || 1))}">${a.flags[i] ? "🚩 " : ""}${i + 1}</a></td><td>${answered(i) ? "Đã trả lời" : '<span style="color:var(--red)">Chưa trả lời</span>'}</td></tr>`).join("")}
      </tbody></table></div>
      <div style="text-align:center;margin:30px 0">
        <a class="btn" href="#/attempt/${id}/0">Quay lại làm bài</a>
        ${a.deadline ? `<p class="small-muted">Bài làm này phải được nộp trước ${fmtTime(a.deadline)}.</p>` : ""}
        <button class="btn btn-primary" id="submit" style="margin-top:10px">Nộp bài và kết thúc</button>
      </div>`,
  });
  startTimer(a);
  $("#submit").onclick = async () => {
    const ok = await modal({
      title: "Xác nhận", size: "sm",
      body: `${nBlank ? `<div class="alert warn">Bạn còn <b>${nBlank}</b> câu chưa trả lời.</div>` : ""}<p>Một khi bạn đã nộp bài, bạn sẽ không thể thay đổi câu trả lời của mình cho lần làm bài này nữa.</p>`,
      buttons: [{ label: "Huỷ", value: false }, { label: "Nộp bài và kết thúc", cls: "btn-primary", value: true }],
    });
    if (!ok) return;
    await finishAttempt(a, false);
    location.hash = `#/review/${id}`;
  };
}

/* ------------------------------------------------------------------ */
/* Xem lại bài làm                                                     */
/* ------------------------------------------------------------------ */
export async function reviewHtml(a, { admin = false } = {}) {
  const qmap = qmapOf(await loadQuestions());
  const r = a.result;
  const mode = admin ? "full" : a.exam.reviewMode || "full";
  const head = `<table class="summary">
    <tr><th>Bắt đầu vào lúc</th><td>${fmtTime(a.startedAt)}</td></tr>
    <tr><th>Trạng thái</th><td>Đã xong${a.autoSubmitted ? " (tự động nộp khi hết giờ)" : ""}</td></tr>
    <tr><th>Kết thúc lúc</th><td>${fmtTime(a.submittedAt)}</td></tr>
    <tr><th>Thời gian thực hiện</th><td>${fmtDuration(a.submittedAt - a.startedAt)}</td></tr>
    <tr><th>Điểm</th><td>${fmtNum(r.marks)}/${fmtNum(r.totalMarks)}</td></tr>
    <tr><th>Điểm</th><td><b>${fmtNum(r.grade)}</b> trên ${fmtNum(r.maxGrade)} (<b>${Math.round((r.marks / r.totalMarks) * 100) || 0}</b>%)</td></tr>
    <tr><th>Số câu đúng</th><td>${r.correct}/${r.total}</td></tr>
    ${admin ? `<tr><th>Học sinh</th><td>${esc(a.name)} (${esc(a.username)})</td></tr><tr><th>Số lần rời màn hình</th><td>${a.leaveCount || 0}</td></tr>` : ""}
  </table>`;
  if (mode === "none") return { main: head + `<div class="alert info">Đề này không cho phép xem lại chi tiết bài làm.</div>`, side: "" };

  // Thống kê theo chủ đề trong lần làm này.
  const byTopic = {};
  a.items.forEach((it, i) => {
    const t = qmap[it.qid]?.topic || "Khác";
    byTopic[t] ??= [0, 0];
    byTopic[t][1]++;
    if (r.details[i].c) byTopic[t][0]++;
  });
  const topicChart = `<h3 style="font-size:18px">Kết quả theo chủ đề</h3><div class="bar-chart" style="margin-bottom:26px">${Object.entries(byTopic).map(([t, [c, n]]) => barRow(t, c, n)).join("")}</div>`;

  const qs = a.items.map((it, i) => {
    const q = qmap[it.qid];
    const d = r.details[i];
    if (!q) return `<div class="alert err">Câu ${i + 1}: câu hỏi đã bị xoá khỏi ngân hàng.</div>`;
    const status = d.ch === null || d.ch === undefined ? "Không trả lời" : d.c ? "Đúng" : "Sai";
    const correctPos = it.perm.indexOf(Number(q.answer));
    return `<div id="rq${i}" class="qhead" style="margin-top:24px"><span class="qn">Câu hỏi ${i + 1}</span>
        <span><span class="qresult ${d.c ? "ok" : "bad"}">${status}</span><span class="small-muted">Đạt điểm ${fmtNum(d.c ? a.exam.pointsPerQuestion : 0)} trên ${fmtNum(a.exam.pointsPerQuestion)}</span></span></div>
      <div class="qbox">
        ${q.topic || q.difficulty ? `<div style="margin-bottom:10px">${q.topic ? `<span class="topic-tag">${esc(q.topic)}</span>` : ""}${q.difficulty ? `<span class="topic-tag">${esc(q.difficulty)}</span>` : ""}</div>` : ""}
        <div class="qtext">${renderRich(q.content)}</div>
        ${q.image ? `<img class="qimg" src="${esc(q.image)}" alt="">` : ""}
        ${it.perm.map((orig, pos) => {
          const chosen = d.ch === orig;
          const isRight = orig === Number(q.answer);
          const cls = mode === "full" ? (isRight ? "correct" : chosen ? "wrong" : "") : chosen ? (d.c ? "correct" : "wrong") : "";
          return `<label class="opt ${cls}"><input type="radio" disabled ${chosen ? "checked" : ""}><span class="l">${LETTERS[pos]}.</span><span>${renderOption(q.options[orig])}</span>${chosen ? `<span class="mark">${d.c ? "✔" : "✘"}</span>` : ""}</label>`;
        }).join("")}
        ${mode === "full" ? `<div class="feedback ${d.c ? "ok" : ""}">${!d.c ? `<div><b>Lỗi sai:</b> ${d.ch === null || d.ch === undefined ? "Bạn chưa chọn đáp án cho câu này." : `Bạn đã chọn phương án <b>${LETTERS[it.perm.indexOf(d.ch)]}</b> – chưa chính xác.`}</div>` : ""}
          <div>Câu trả lời đúng là: <b>${LETTERS[correctPos]}. ${renderOption(q.options[q.answer])}</b></div>
          ${q.explanation ? `<div style="margin-top:6px"><b>Giải thích:</b> ${renderRich(q.explanation)}</div>` : ""}</div>` : ""}
      </div>`;
  }).join("");

  const side = `<div class="navblock"><h4>Các câu hỏi trong bài kiểm tra</h4>
    <div class="qgrid">${a.items.map((_, i) => {
      const d = r.details[i];
      const cls = d.ch === null || d.ch === undefined ? "blank" : d.c ? "right" : "wrongc";
      return `<button class="qcell ${cls} ${a.flags?.[i] ? "flagged" : ""}" onclick="document.getElementById('rq${i}').scrollIntoView({behavior:'smooth'})"><span class="num">${i + 1}</span><span class="bar"></span></button>`;
    }).join("")}</div>
    <div class="legend"><i style="background:#3b8a3e"></i>Đúng &nbsp;<i style="background:#d33"></i>Sai &nbsp;<i style="background:#f0ad4e"></i>Bỏ trống</div>
    ${!admin ? `<a class="finish-link" style="margin-top:12px" href="${a.examId === "practice" ? "#/practice" : `#/exam/${a.examId}`}">Kết thúc xem lại</a>` : ""}</div>`;
  return { main: head + topicChart + `<h3 style="font-size:18px">Chi tiết bài làm</h3>` + qs, side };
}

export function barRow(label, c, n) {
  const pct = n ? Math.round((c / n) * 100) : 0;
  return `<div class="bar-row"><span title="${esc(label)}">${esc(label)}</span><div class="bar-track"><div class="bar-fill ${pct < 50 ? "low" : pct < 80 ? "mid" : "hi"}" style="width:${pct}%"></div></div><span>${c}/${n} (${pct}%)</span></div>`;
}

async function viewReview(id) {
  const a = await store.getAttempt(id);
  if (!a || (a.uid !== ctx.user.id && !isAdmin())) return notFound();
  if (a.state !== "finished") return (location.hash = `#/attempt/${id}/0`);
  const { main, side } = await reviewHtml(a, { admin: isAdmin() && a.uid !== ctx.user.id });
  render({
    crumbs: [...crumbsFor(a), ["Xem lại"]],
    title: ctx.settings.courseName,
    main: `<h2 style="font-size:24px;font-weight:400">${esc(a.exam.title)}</h2>${main}
      <div style="text-align:center;margin-top:30px" class="no-print"><button class="btn" onclick="print()">In kết quả</button>
      <a class="btn btn-primary" href="${a.examId === "practice" ? "#/practice" : `#/exam/${a.examId}`}">Kết thúc xem lại</a></div>`,
    side,
  });
}

/* ------------------------------------------------------------------ */
/* Luyện tập, ôn câu sai, kết quả cá nhân                              */
/* ------------------------------------------------------------------ */
async function viewPractice() {
  const qs = await loadQuestions();
  const topics = [...new Set(qs.map((q) => q.topic).filter(Boolean))].sort();
  const diffs = [...new Set(qs.map((q) => q.difficulty).filter(Boolean))];
  const mine = (await store.listAttempts({ uid: ctx.user.id })).filter((a) => a.examId === "practice").sort((a, b) => b.startedAt - a.startedAt);
  render({
    crumbs: [["Trang chủ", "#/"], [ctx.settings.courseName, "#/course"], ["Luyện tập theo chủ đề"]],
    title: "Luyện tập theo chủ đề",
    main: `<div class="section"><div class="form-grid">
        <label>Chủ đề</label><select class="form-control" id="p-topic"><option value="">Tất cả chủ đề</option>${topics.map((t) => `<option>${esc(t)}</option>`).join("")}</select>
        <label>Mức độ</label><select class="form-control" id="p-diff"><option value="">Tất cả mức độ</option>${diffs.map((t) => `<option>${esc(t)}</option>`).join("")}</select>
        <label>Số câu</label><select class="form-control" id="p-n">${[5, 10, 15, 20].map((n) => `<option ${n === 10 ? "selected" : ""}>${n}</option>`).join("")}</select>
        <label>Thời gian</label><select class="form-control" id="p-time"><option value="0">Không giới hạn</option><option value="1.5" selected>1,5 phút / câu (như thi thật)</option><option value="1">1 phút / câu (thử thách)</option></select>
      </div><div style="margin-top:18px"><button class="btn btn-primary" id="p-start">Bắt đầu luyện tập</button> <span class="small-muted">Ngân hàng hiện có ${qs.length} câu hỏi.</span></div></div>
      ${mine.length ? `<h3 style="font-size:18px">Các lần luyện tập gần đây</h3><div class="table-wrap"><table class="tbl"><thead><tr><th>Thời gian</th><th>Nội dung</th><th>Kết quả</th><th></th></tr></thead><tbody>
        ${mine.slice(0, 15).map((a) => `<tr><td>${fmtTime(a.startedAt)}</td><td>${esc(a.exam.title)}</td><td>${a.state === "finished" ? `${a.result.correct}/${a.result.total} câu đúng` : "Đang làm"}</td><td><a href="${a.state === "finished" ? `#/review/${a.id}` : `#/attempt/${a.id}/0`}">${a.state === "finished" ? "Xem lại" : "Tiếp tục"}</a></td></tr>`).join("")}
      </tbody></table></div>` : ""}`,
  });
  $("#p-start").onclick = async () => {
    const topic = $("#p-topic").value, difficulty = $("#p-diff").value, n = Number($("#p-n").value);
    const pool = qs.filter((q) => (!topic || q.topic === topic) && (!difficulty || q.difficulty === difficulty));
    if (!pool.length) return toast("Không có câu hỏi phù hợp.");
    const count = Math.min(n, pool.length);
    const e = {
      title: `Luyện tập: ${topic || "Tất cả chủ đề"}${difficulty ? ` – ${difficulty}` : ""} (${count} câu)`,
      duration: Math.ceil(Number($("#p-time").value) * count), pointsPerQuestion: 5, maxGrade: 10, reviewMode: "full",
      matrix: [{ topic, difficulty, count }],
    };
    const id = await createAttempt(e, buildItems(e, qs), "practice");
    location.hash = `#/attempt/${id}/0`;
  };
}

async function viewWrong() {
  const qs = await loadQuestions();
  const qmap = qmapOf(qs);
  const atts = (await store.listAttempts({ uid: ctx.user.id })).filter((a) => a.state === "finished").sort((a, b) => a.submittedAt - b.submittedAt);
  // Câu sai gần nhất (nếu lần gần nhất làm đúng thì bỏ ra khỏi danh sách).
  const last = {};
  atts.forEach((a) => a.items.forEach((it, i) => (last[it.qid] = a.result.details[i].c)));
  const wrongIds = Object.entries(last).filter(([qid, c]) => !c && qmap[qid]).map(([qid]) => qid);
  render({
    crumbs: [["Trang chủ", "#/"], [ctx.settings.courseName, "#/course"], ["Ôn lại câu làm sai"]],
    title: "Ôn lại các câu đã làm sai",
    main: wrongIds.length
      ? `<div class="alert info">Bạn có <b>${wrongIds.length}</b> câu đang làm sai (hoặc bỏ trống) ở lần gặp gần nhất. Hãy làm lại để chắc chắn đã hiểu bài. Câu nào làm đúng sẽ được loại khỏi danh sách này.</div>
         <button class="btn btn-primary" id="w-start">Làm lại ${Math.min(20, wrongIds.length)} câu sai</button>
         <h3 style="font-size:18px;margin-top:26px">Danh sách câu sai</h3><div class="table-wrap"><table class="tbl"><thead><tr><th>#</th><th>Câu hỏi</th><th>Chủ đề</th></tr></thead><tbody>
         ${wrongIds.map((id, i) => `<tr><td>${i + 1}</td><td>${esc(qmap[id].content).slice(0, 140)}</td><td>${esc(qmap[id].topic || "")}</td></tr>`).join("")}</tbody></table></div>`
      : `<div class="alert ok">Tuyệt vời! Bạn không có câu nào đang làm sai. Hãy làm thêm đề thi thử hoặc luyện tập theo chủ đề.</div>`,
  });
  $("#w-start") && ($("#w-start").onclick = async () => {
    const pick = shuffle(wrongIds).slice(0, 20);
    const e = { title: `Ôn lại câu làm sai (${pick.length} câu)`, duration: 0, pointsPerQuestion: 5, maxGrade: 10, reviewMode: "full" };
    const items = pick.map((qid) => ({ qid, perm: qmap[qid].fixedOrder ? [0, 1, 2, 3] : shuffle([0, 1, 2, 3]) }));
    const id = await createAttempt(e, items, "practice");
    location.hash = `#/attempt/${id}/0`;
  });
}

async function viewMyResults() {
  const qmap = qmapOf(await loadQuestions());
  const atts = (await store.listAttempts({ uid: ctx.user.id })).filter((a) => a.state === "finished").sort((a, b) => a.submittedAt - b.submittedAt);
  const exams = atts.filter((a) => a.examId !== "practice");
  const byTopic = {};
  atts.forEach((a) => a.items.forEach((it, i) => {
    const t = qmap[it.qid]?.topic || "Khác";
    byTopic[t] ??= [0, 0];
    byTopic[t][1]++;
    if (a.result.details[i].c) byTopic[t][0]++;
  }));
  const pct = (a) => Math.round((a.result.marks / a.result.totalMarks) * 100) || 0;
  const chart = exams.length
    ? `<svg viewBox="0 0 ${Math.max(300, exams.length * 46 + 40)} 180" style="width:100%;max-width:${Math.max(300, exams.length * 46 + 40)}px;height:200px">
        ${[0, 50, 100].map((v) => `<line x1="30" x2="100%" y1="${150 - v * 1.3}" y2="${150 - v * 1.3}" stroke="#e5e7eb"/><text x="0" y="${154 - v * 1.3}" font-size="10" fill="#6a737b">${v}%</text>`).join("")}
        ${exams.map((a, i) => `<rect x="${40 + i * 46}" y="${150 - pct(a) * 1.3}" width="30" height="${pct(a) * 1.3}" fill="${pct(a) >= 80 ? "#357a32" : pct(a) >= 50 ? "#f0ad4e" : "#d71920"}" rx="2"><title>${esc(a.exam.title)}: ${pct(a)}%</title></rect><text x="${55 + i * 46}" y="${145 - pct(a) * 1.3}" font-size="10" text-anchor="middle">${pct(a)}</text><text x="${55 + i * 46}" y="168" font-size="10" text-anchor="middle" fill="#6a737b">L${i + 1}</text>`).join("")}
      </svg>`
    : `<p class="small-muted">Chưa có lần thi thử nào.</p>`;
  const weak = Object.entries(byTopic).filter(([, [c, n]]) => n >= 3 && c / n < 0.6).map(([t]) => t);
  render({
    crumbs: [["Trang chủ", "#/"], [ctx.settings.courseName, "#/course"], ["Kết quả của tôi"]],
    title: "Kết quả và tiến bộ của tôi",
    main: `<div class="cards">
        <div class="stat"><div class="v">${exams.length}</div><div class="k">Lần thi thử</div></div>
        <div class="stat"><div class="v">${atts.length - exams.length}</div><div class="k">Lần luyện tập</div></div>
        <div class="stat"><div class="v">${exams.length ? Math.max(...exams.map(pct)) : 0}%</div><div class="k">Kết quả cao nhất</div></div>
        <div class="stat"><div class="v">${exams.length ? Math.round(exams.reduce((s, a) => s + pct(a), 0) / exams.length) : 0}%</div><div class="k">Trung bình</div></div>
      </div>
      <div class="section"><h3 style="font-size:18px">Điểm các lần thi thử (% số điểm)</h3>${chart}</div>
      <div class="section"><h3 style="font-size:18px">Tỉ lệ làm đúng theo chủ đề</h3>
        ${Object.keys(byTopic).length ? `<div class="bar-chart">${Object.entries(byTopic).sort((x, y) => x[1][0] / x[1][1] - y[1][0] / y[1][1]).map(([t, [c, n]]) => barRow(t, c, n)).join("")}</div>` : `<p class="small-muted">Chưa có dữ liệu.</p>`}
        ${weak.length ? `<div class="alert warn" style="margin-top:16px">Chủ đề cần ôn thêm: <b>${weak.map(esc).join(", ")}</b>. Vào <a href="#/practice">Luyện tập theo chủ đề</a> để luyện thêm.</div>` : ""}
      </div>
      <h3 style="font-size:18px">Lịch sử làm bài</h3>
      <div class="table-wrap"><table class="tbl"><thead><tr><th>Nộp bài lúc</th><th>Đề</th><th>Số câu đúng</th><th>Điểm</th><th>Thời gian</th><th></th></tr></thead><tbody>
      ${atts.slice().reverse().map((a) => `<tr><td>${fmtTime(a.submittedAt)}</td><td>${esc(a.exam.title)}</td><td>${a.result.correct}/${a.result.total}</td><td>${fmtNum(a.result.grade)} / ${fmtNum(a.result.maxGrade)}</td><td>${fmtDuration(a.submittedAt - a.startedAt)}</td><td>${a.exam.reviewMode === "none" ? "" : `<a href="#/review/${a.id}">Xem lại</a>`}</td></tr>`).join("") || `<tr><td colspan="6" class="small-muted">Chưa có dữ liệu.</td></tr>`}
      </tbody></table></div>`,
  });
}

function viewProfile() {
  const u = ctx.user;
  render({
    sideNav: "home",
    crumbs: [["Trang chủ", "#/"], ["Trang cá nhân của tôi"]],
    title: u.name || u.username,
    main: `<div class="section"><table class="summary">
        <tr><th>Tên đăng nhập</th><td>${esc(u.username)}</td></tr><tr><th>Họ và tên</th><td>${esc(u.name)}</td></tr>
        <tr><th>Trường</th><td>${esc(u.school || "")}</td></tr><tr><th>Lớp</th><td>${esc(u.cls || "")}</td></tr>
        <tr><th>Vai trò</th><td>${u.role === "admin" ? "Quản trị viên" : "Học sinh"}</td></tr></table>
      <h3 style="font-size:18px">Đổi mật khẩu</h3>
      <form id="pw-form" class="form-grid" style="max-width:520px">
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
  render({ title: "Không tìm thấy trang", main: `<p>Trang bạn yêu cầu không tồn tại hoặc bạn không có quyền truy cập.</p><a class="btn" href="#/">Về trang chủ</a>` });
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
      case "": case "login": return viewHome();
      case "course": return viewCourse();
      case "announce": return viewAnnounce();
      case "exam": return viewExam(parts[1]);
      case "attempt": return viewAttempt(parts[1], parts[2]);
      case "summary": return viewSummary(parts[1]);
      case "review": return viewReview(parts[1]);
      case "practice": return viewPractice();
      case "wrong": return viewWrong();
      case "my-results": return viewMyResults();
      case "profile": return viewProfile();
      case "admin": return isAdmin() ? renderAdmin(parts.slice(1)) : notFound();
      default: return notFound();
    }
  } catch (err) {
    console.error(err);
    render({ title: "Đã xảy ra lỗi", main: `<div class="alert err">${esc(err.message || err)}</div><a class="btn" href="#/">Về trang chủ</a>` });
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
      await store.logout();
      if (location.hash !== "#/login") location.hash = "#/login";
      else viewLogin().then(() => ($("#login-err").innerHTML = `<div class="login-error">Tài khoản đã bị khoá hoặc không tồn tại. Liên hệ quản trị viên.</div>`));
      return;
    }
    ctx.user = p;
    if (location.hash === "#/login" || !location.hash) location.hash = p.role === "admin" ? "#/admin" : "#/";
    else route();
    return;
  }
  route();
});
