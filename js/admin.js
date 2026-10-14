// Các trang quản trị: tài khoản, ngân hàng câu hỏi, ca thi & ma trận, kết quả, cài đặt.
import { store, normUser } from "./store.js";
import { esc, $, $$, icons, toast, modal, confirmBox, renderRich, renderOption, normalizeImageUrl, fileToDataUrl, downloadXlsx, readXlsx, randomPassword } from "./ui.js";
import { LETTERS, TF_LABELS, TYPES, TYPE_ORDER, DIFFICULTIES, checkMatrix, buildItems, fmtNum, fmtTime, fmtDuration, qType, pointsOf } from "./exam.js";
import { ctx, page, loadQuestions, loadExams, qmapOf, barRow, DEFAULT_SETTINGS } from "./app.js";
import { SAMPLE_QUESTIONS, SAMPLE_EXAM } from "./sample.js";
import { ONTAP_QUESTIONS } from "./ontap.js";
import { ONTAP2_QUESTIONS } from "./ontap2.js";

const render = (title, main) => page({ nav: "admin", title, main });
const LEVELS = ["Tiểu học", "THCS", "THPT"];
const opt = (v, cur, label = v) => `<option value="${esc(v)}" ${String(v) === String(cur ?? "") ? "selected" : ""}>${esc(label)}</option>`;
const xlsxReady = () => {
  if (!window.XLSX) { toast("Chưa tải xong thư viện Excel, thử lại sau vài giây."); return false; }
  return true;
};
const pickFile = (accept) => new Promise((res) => {
  const i = document.createElement("input");
  i.type = "file";
  i.accept = accept;
  i.onchange = () => res(i.files[0] || null);
  i.click();
});

export async function renderAdmin(parts) {
  const [p, ...rest] = parts;
  switch (p || "") {
    case "": return dashboard();
    case "users": return users();
    case "questions": return questions();
    case "exams": return exams();
    case "results": return results(rest[0]);
    case "settings": return settings();
    default: return render("Không tìm thấy", "");
  }
}

/* ------------------------------------------------------------------ */
async function seedSample() {
  const qs = await loadQuestions(true);
  const have = new Set(qs.map((q) => q.source).filter(Boolean));
  const add = [...SAMPLE_QUESTIONS, ...ONTAP_QUESTIONS, ...ONTAP2_QUESTIONS].filter((q) => !have.has(q.source));
  if (add.length) await store.addQuestions(add);
  const ex = await loadExams(true);
  if (!ex.some((e) => e.code === SAMPLE_EXAM.code)) await store.saveExam(SAMPLE_EXAM);
  await loadQuestions(true);
  await loadExams(true);
  return add.length;
}

async function dashboard() {
  const [us, qs, ex, atts] = await Promise.all([store.listUsers(), loadQuestions(true), loadExams(true), store.listAttempts()]);
  const students = us.filter((u) => u.role !== "admin");
  const fin = atts.filter((a) => a.state === "finished");
  const recent = fin.sort((a, b) => b.submittedAt - a.submittedAt).slice(0, 10);
  const byTopic = {};
  qs.forEach((q) => (byTopic[q.topic || "Chưa phân loại"] = (byTopic[q.topic || "Chưa phân loại"] || 0) + 1));
  const maxT = Math.max(1, ...Object.values(byTopic));
  render("Tổng quan", `
    ${!qs.length || !ex.length ? `<div class="alert info"><b>Bắt đầu nhanh:</b> nạp sẵn <b>440 câu Tiểu học</b>: 20 câu đề minh hoạ 2026, 200 câu tài liệu ôn tập và 220 câu ôn tập mở rộng (kèm hình, đáp án, lời giải) và ca thi mẫu mã <b>${SAMPLE_EXAM.code}</b> (30 phút).
      <div style="margin-top:8px"><button class="btn btn-primary btn-sm" id="seed">Nạp câu hỏi mẫu (440 câu)</button></div></div>` : ""}
    <div class="cards">
      <div class="stat"><div class="v">${students.length}</div><div class="k">Tài khoản thí sinh</div></div>
      <div class="stat"><div class="v">${qs.length}</div><div class="k">Câu hỏi trong ngân hàng</div></div>
      <div class="stat"><div class="v">${ex.length}</div><div class="k">Ca thi</div></div>
      <div class="stat"><div class="v">${fin.length}</div><div class="k">Lượt đã nộp bài</div></div>
      <div class="stat"><div class="v">${fin.length ? Math.round(fin.reduce((s, a) => s + a.result.marks / a.result.totalMarks, 0) / fin.length * 100) : 0}%</div><div class="k">Điểm trung bình</div></div>
    </div>
    <div class="panel"><h3>Các ca thi</h3>
      ${ex.length ? `<div class="table-wrap"><table class="tbl"><thead><tr><th>Ca thi</th><th>Mã ca thi</th><th>Thời gian</th><th>Số câu</th><th>Lượt nộp</th><th></th></tr></thead><tbody>
      ${ex.map((e) => `<tr><td>${esc(e.title)}</td><td class="mono">${esc(e.code)}</td><td>${e.duration} phút</td><td>${(e.matrix || []).reduce((s, r) => s + Number(r.count || 0), 0)}</td><td>${fin.filter((a) => a.examId === e.id).length}</td><td><a href="#/admin/results/${e.id}">Xem kết quả</a></td></tr>`).join("")}
      </tbody></table></div>` : `<p class="muted">Chưa có ca thi.</p>`}</div>
    <div class="panel"><h3>Câu hỏi theo chủ đề</h3>${Object.keys(byTopic).length ? `<div class="bar-chart">${Object.entries(byTopic).map(([t, n]) => barRow(t, n, maxT, `${n} câu`)).join("")}</div>` : `<p class="muted">Chưa có câu hỏi.</p>`}</div>
    <div class="panel"><h3>Bài nộp gần đây</h3>${recent.length ? `<div class="table-wrap"><table class="tbl"><thead><tr><th>Thời gian</th><th>Thí sinh</th><th>Phiên thi</th><th>Điểm</th><th></th></tr></thead><tbody>
      ${recent.map((a) => `<tr><td>${fmtTime(a.submittedAt)}</td><td>${esc(a.name)} <span class="muted small">${esc(a.sbd || a.username)}</span></td><td>${esc(a.exam.title)}</td><td><b>${fmtNum(a.result.grade)}</b>/${fmtNum(a.result.maxGrade)}</td><td><a href="#/review/${a.id}">Xem bài</a></td></tr>`).join("")}</tbody></table></div>` : `<p class="muted">Chưa có bài nộp.</p>`}</div>`);
  $("#seed") && ($("#seed").onclick = async () => {
    const n = await seedSample();
    toast(`Đã nạp ${n} câu hỏi và ca thi mẫu.`);
    dashboard();
  });
}

/* ------------------------------------------------------------------ */
/* Tài khoản                                                           */
/* ------------------------------------------------------------------ */
async function users() {
  const [us, creds, atts] = await Promise.all([store.listUsers(), store.listCredentials(), store.listAttempts()]);
  const pw = Object.fromEntries(creds.map((c) => [c.id, c.password]));
  const cnt = {};
  atts.forEach((a) => a.state === "finished" && (cnt[a.uid] = (cnt[a.uid] || 0) + 1));
  us.sort((a, b) => (a.role === "admin" ? -1 : 0) - (b.role === "admin" ? -1 : 0) || (a.sbd || a.username).localeCompare(b.sbd || b.username, "vi", { numeric: true }));
  render("Tài khoản thí sinh", `
    <div class="alert info small">Thí sinh đăng nhập bằng <b>Tên đăng nhập</b> + <b>Mật khẩu</b> + <b>Mã ca thi</b> (đặt ở mục Ca thi). Có thể tạo hàng loạt từ file Excel rồi xuất danh sách để gửi cho học sinh.</div>
    <div class="toolbar">
      <input class="form-control grow" id="u-q" placeholder="Tìm theo tên, SBD, trường, lớp...">
      <button class="btn btn-primary" id="u-add">+ Thêm tài khoản</button>
      <button class="btn" id="u-bulk">Tạo nhanh nhiều tài khoản</button>
      <button class="btn" id="u-import">${icons.upload} Nhập từ Excel</button>
      <button class="btn" id="u-tpl">File mẫu</button>
      <button class="btn" id="u-export">Xuất danh sách</button>
    </div>
    <div class="table-wrap"><table class="tbl"><thead><tr><th>Tên đăng nhập</th><th>Mật khẩu</th><th>Họ tên</th><th>SBD</th><th>Trường</th><th>Lớp</th><th>Vai trò</th><th>Lượt thi</th><th>Trạng thái</th><th></th></tr></thead>
    <tbody id="u-body">${us.map((u) => `<tr data-s="${esc([u.username, u.name, u.sbd, u.school, u.cls].join(" ").toLowerCase())}">
      <td class="mono">${esc(u.username)}</td><td class="mono">${esc(pw[u.id] || "")}</td><td>${esc(u.name)}</td><td class="mono">${esc(u.sbd || "")}</td><td>${esc(u.school || "")}</td><td>${esc(u.cls || "")}</td>
      <td>${u.role === "admin" ? '<span class="badge blue">Quản trị</span>' : "Thí sinh"}</td><td>${cnt[u.id] || 0}</td>
      <td>${u.active === false ? '<span class="badge red">Đã khoá</span>' : '<span class="badge green">Hoạt động</span>'}</td>
      <td style="white-space:nowrap">${u.id === ctx.user.id ? "" : `<button class="btn btn-sm" data-edit="${u.id}">Sửa</button>
        <button class="btn btn-sm" data-pw="${u.id}">Cấp lại MK</button>
        <button class="btn btn-sm" data-lock="${u.id}">${u.active === false ? "Mở khoá" : "Khoá"}</button>
        <button class="btn btn-sm btn-danger" data-del="${u.id}">Xoá</button>`}</td></tr>`).join("") || `<tr><td colspan="10" class="muted">Chưa có tài khoản.</td></tr>`}</tbody></table></div>`);

  const byId = Object.fromEntries(us.map((u) => [u.id, u]));
  $("#u-q").oninput = (e) => $$("#u-body tr").forEach((tr) => (tr.style.display = tr.dataset.s?.includes(e.target.value.toLowerCase()) ? "" : "none"));
  $("#u-add").onclick = () => userForm();
  $$("[data-edit]").forEach((b) => (b.onclick = () => userForm(byId[b.dataset.edit])));
  $$("[data-lock]").forEach((b) => (b.onclick = async () => {
    const u = byId[b.dataset.lock];
    await store.updateUser(u.id, { active: u.active === false });
    users();
  }));
  $$("[data-del]").forEach((b) => (b.onclick = async () => {
    const u = byId[b.dataset.del];
    if (await confirmBox("Xoá tài khoản", `Xoá tài khoản <b>${esc(u.username)}</b> (${esc(u.name)})? Kết quả thi cũ vẫn được giữ lại.`, "Xoá", "btn-danger")) {
      await store.deleteUser(u.id);
      users();
    }
  }));
  $$("[data-pw]").forEach((b) => (b.onclick = async () => {
    const u = byId[b.dataset.pw];
    const np = randomPassword();
    const r = await modal({
      title: "Cấp lại mật khẩu", size: "sm",
      body: `<p>Tài khoản <b>${esc(u.username)}</b></p><div class="form-grid"><label>Mật khẩu mới</label><input class="form-control mono" id="np" value="${np}"></div>`,
      buttons: [{ label: "Huỷ", value: false }, { label: "Lưu", cls: "btn-primary", handler: async (el) => {
        const v = $("#np", el).value.trim();
        if (v.length < 6) throw new Error("Mật khẩu phải có ít nhất 6 ký tự.");
        await store.resetPassword(u.id, v);
      } }],
    });
    if (r) { toast("Đã cấp lại mật khẩu."); users(); }
  }));
  $("#u-tpl").onclick = () => xlsxReady() && downloadXlsx("mau_tai_khoan.xlsx", {
    "Tài khoản": [["Tên đăng nhập", "Mật khẩu", "Họ tên", "Số báo danh", "Trường", "Lớp"],
      ["stem263056", "", "Nguyễn Ngọc Bảo An", "0870", "TH Nguyễn Trãi", "5A"],
      ["", "", "Trần Minh Khôi", "0871", "TH Nguyễn Trãi", "5B"]],
    "Hướng dẫn": [["- Để trống Tên đăng nhập → hệ thống tự tạo dạng stem + 6 chữ số."], ["- Để trống Mật khẩu → hệ thống tự tạo mật khẩu ngẫu nhiên 8 ký tự."], ["- Mật khẩu tối thiểu 6 ký tự."]],
  });
  $("#u-export").onclick = () => xlsxReady() && downloadXlsx("danh_sach_tai_khoan.xlsx", {
    "Tài khoản": [["STT", "Tên đăng nhập", "Mật khẩu", "Họ tên", "Số báo danh", "Trường", "Lớp", "Trạng thái"],
      ...us.filter((u) => u.role !== "admin").map((u, i) => [i + 1, u.username, pw[u.id] || "", u.name, u.sbd || "", u.school || "", u.cls || "", u.active === false ? "Đã khoá" : "Hoạt động"])],
  });
  $("#u-import").onclick = async () => {
    if (!xlsxReady()) return;
    const f = await pickFile(".xlsx,.xls,.csv");
    if (!f) return;
    const rows = (await readXlsx(f)).slice(1).filter((r) => r.some((c) => String(c).trim()));
    await createMany(rows.map((r) => ({ username: String(r[0]).trim(), password: String(r[1]).trim(), name: String(r[2]).trim(), sbd: String(r[3]).trim(), school: String(r[4]).trim(), cls: String(r[5]).trim() })), us);
  };
  $("#u-bulk").onclick = async () => {
    let data = null;
    const ok = await modal({
      title: "Tạo nhanh nhiều tài khoản", size: "sm",
      body: `<div class="form-grid"><label>Số lượng</label><input class="form-control" type="number" id="b-n" value="10" min="1" max="500">
        <label>Tiền tố</label><input class="form-control" id="b-pre" value="stem">
        <label>Số bắt đầu</label><input class="form-control" type="number" id="b-start" value="1">
        <label>Trường</label><input class="form-control" id="b-school"><label>Lớp</label><input class="form-control" id="b-cls"></div>
        <p class="muted small">Tên đăng nhập dạng tiền tố + số thứ tự (vd: stem001), SBD = số thứ tự, mật khẩu ngẫu nhiên. Có thể sửa họ tên sau.</p>`,
      buttons: [{ label: "Huỷ", value: false }, { label: "Tạo", cls: "btn-primary", handler: (el) => {
        data = { n: Math.min(500, +$("#b-n", el).value || 0), pre: normUser($("#b-pre", el).value) || "stem", st: +$("#b-start", el).value || 1, school: $("#b-school", el).value.trim(), cls: $("#b-cls", el).value.trim() };
      } }],
    });
    if (!ok || !data?.n) return;
    const w = String(data.st + data.n - 1).length < 3 ? 3 : String(data.st + data.n - 1).length;
    await createMany(Array.from({ length: data.n }, (_, k) => {
      const num = String(data.st + k).padStart(w, "0");
      return { username: data.pre + num, password: "", name: `Thí sinh ${num}`, sbd: num, school: data.school, cls: data.cls };
    }), us);
  };
}

async function createMany(rows, existing) {
  const taken = new Set(existing.map((u) => u.username));
  const log = [];
  let ok = 0;
  const prog = document.createElement("div");
  prog.className = "toast";
  document.body.appendChild(prog);
  for (const [i, r] of rows.entries()) {
    prog.textContent = `Đang tạo tài khoản ${i + 1}/${rows.length}...`;
    let username = normUser(r.username);
    if (!username) do username = "stem" + String(Math.floor(100000 + Math.random() * 900000)); while (taken.has(username));
    const password = r.password && r.password.length >= 6 ? r.password : randomPassword();
    try {
      if (taken.has(username)) throw new Error("đã tồn tại");
      await store.createUser({ username, password, name: r.name || username, sbd: r.sbd || "", school: r.school || "", cls: r.cls || "", role: "student", level: "Tiểu học" });
      taken.add(username);
      ok++;
    } catch (e) {
      log.push(`Dòng ${i + 2} (${username}): ${e.message}`);
    }
  }
  prog.remove();
  await modal({ title: "Kết quả tạo tài khoản", body: `<div class="alert ok">Đã tạo ${ok}/${rows.length} tài khoản.</div>${log.length ? `<div class="alert err">${log.map(esc).join("<br>")}</div>` : ""}<p>Bấm <b>Xuất danh sách</b> để tải file Excel gồm tên đăng nhập và mật khẩu.</p>` });
  users();
}

function userForm(u) {
  const isNew = !u;
  u = u || { role: "student", active: true };
  modal({
    title: isNew ? "Thêm tài khoản" : `Sửa tài khoản ${esc(u.username)}`, size: "sm",
    body: `<div class="form-grid">
      <label>Tên đăng nhập</label><input class="form-control mono" id="f-user" value="${esc(u.username || "")}" ${isNew ? "" : "disabled"}>
      ${isNew ? `<label>Mật khẩu</label><input class="form-control mono" id="f-pw" value="${randomPassword()}">` : ""}
      <label>Họ tên</label><input class="form-control" id="f-name" value="${esc(u.name || "")}">
      <label>Số báo danh</label><input class="form-control mono" id="f-sbd" value="${esc(u.sbd || "")}">
      <label>Trường</label><input class="form-control" id="f-school" value="${esc(u.school || "")}">
      <label>Lớp</label><input class="form-control" id="f-cls" value="${esc(u.cls || "")}">
      <label>Vai trò</label><select class="form-control" id="f-role">${opt("student", u.role, "Thí sinh")}${opt("admin", u.role, "Quản trị viên")}</select></div>`,
    buttons: [{ label: "Huỷ", value: false }, { label: "Lưu", cls: "btn-primary", handler: async (el) => {
      const data = { name: $("#f-name", el).value.trim(), sbd: $("#f-sbd", el).value.trim(), school: $("#f-school", el).value.trim(), cls: $("#f-cls", el).value.trim(), role: $("#f-role", el).value };
      if (isNew) {
        const username = normUser($("#f-user", el).value);
        const password = $("#f-pw", el).value.trim();
        if (!/^[a-z0-9._-]{3,}$/.test(username)) throw new Error("Tên đăng nhập tối thiểu 3 ký tự, chỉ gồm chữ không dấu, số, dấu . _ -");
        if (password.length < 6) throw new Error("Mật khẩu phải có ít nhất 6 ký tự.");
        await store.createUser({ username, password, ...data, level: "Tiểu học" });
      } else {
        await store.updateUser(u.id, data);
      }
      users();
    } }],
  });
}

/* ------------------------------------------------------------------ */
/* Ngân hàng câu hỏi                                                   */
/* ------------------------------------------------------------------ */
const qFilter = { type: "", topic: "", diff: "", q: "" };

async function questions() {
  const qs = await loadQuestions(true);
  const topics = [...new Set(qs.map((q) => q.topic).filter(Boolean))].sort();
  const list = qs.filter((q) =>
    (!qFilter.type || qType(q) === qFilter.type) && (!qFilter.topic || q.topic === qFilter.topic) && (!qFilter.diff || q.difficulty === qFilter.diff) &&
    (!qFilter.q || (q.content + " " + (q.source || "")).toLowerCase().includes(qFilter.q.toLowerCase())));
  // Bảng đếm theo chủ đề × mức độ (để lập ma trận)
  const diffs = [...new Set([...DIFFICULTIES, ...qs.map((q) => q.difficulty).filter(Boolean)])];
  const pivot = topics.map((t) => [t, ...diffs.map((d) => qs.filter((q) => q.topic === t && q.difficulty === d).length)]);
  const keyText = (q) => {
    const t = qType(q);
    if (t === "mcq") return LETTERS[q.answer] ?? "?";
    if (t === "tf") return (q.answer || []).map((v) => (v ? "Đ" : "S")).join("");
    return esc(q.answer);
  };
  render("Ngân hàng câu hỏi", `
    <div class="toolbar">
      <button class="btn btn-primary" id="q-add">+ Thêm câu hỏi</button>
      <button class="btn" id="q-import">${icons.upload} Nhập từ Excel</button>
      <button class="btn" id="q-tpl">File Excel mẫu</button>
      <button class="btn" id="q-export">Xuất Excel</button>
      <button class="btn" id="q-seed">Nạp câu hỏi mẫu (440 câu)</button>
      <span class="grow"></span>
      <button class="btn btn-danger btn-sm" id="q-delall">Xoá các câu đang lọc</button>
    </div>
    <div class="toolbar">
      <select class="form-control" id="f-type"><option value="">Mọi dạng câu</option>${TYPE_ORDER.map((t) => opt(t, qFilter.type, TYPES[t].name)).join("")}</select>
      <select class="form-control" id="f-topic"><option value="">Mọi chủ đề</option>${topics.map((t) => opt(t, qFilter.topic)).join("")}</select>
      <select class="form-control" id="f-diff"><option value="">Mọi mức độ</option>${diffs.map((t) => opt(t, qFilter.diff)).join("")}</select>
      <input class="form-control grow" id="f-q" placeholder="Tìm nội dung..." value="${esc(qFilter.q)}">
      <span class="muted small">${list.length}/${qs.length} câu</span>
    </div>
    <div class="table-wrap"><table class="tbl"><thead><tr><th>#</th><th>Nội dung</th><th>Ảnh</th><th>Dạng</th><th>Chủ đề</th><th>Mức độ</th><th>Đáp án</th><th></th></tr></thead><tbody>
    ${list.map((q, i) => `<tr><td>${i + 1}</td><td><div class="clip">${esc(q.content)}</div>${q.source ? `<div class="muted small">${esc(q.source)}</div>` : ""}</td>
      <td>${q.image ? `<img class="thumb" src="${esc(q.image)}" alt="">` : ""}</td><td>${TYPES[qType(q)].name}</td><td>${esc(q.topic || "")}</td><td>${esc(q.difficulty || "")}</td>
      <td class="mono">${keyText(q)}</td>
      <td style="white-space:nowrap"><button class="btn btn-sm" data-view="${q.id}">Xem</button> <button class="btn btn-sm" data-edit="${q.id}">Sửa</button> <button class="btn btn-sm" data-dup="${q.id}">Nhân bản</button> <button class="btn btn-sm btn-danger" data-del="${q.id}">Xoá</button></td></tr>`).join("") || `<tr><td colspan="8" class="muted">Không có câu hỏi.</td></tr>`}
    </tbody></table></div>
    ${pivot.length ? `<div class="panel" style="margin-top:18px"><h3>Thống kê số câu theo chủ đề × mức độ <span class="muted small">(dùng để lập ma trận)</span></h3>
      <div class="table-wrap"><table class="tbl"><thead><tr><th>Chủ đề</th>${diffs.map((d) => `<th>${esc(d)}</th>`).join("")}<th>Tổng</th></tr></thead><tbody>
      ${pivot.map(([t, ...c]) => `<tr><td>${esc(t)}</td>${c.map((x) => `<td>${x || ""}</td>`).join("")}<td><b>${c.reduce((s, x) => s + x, 0)}</b></td></tr>`).join("")}</tbody></table></div></div>` : ""}`);

  const byId = qmapOf(qs);
  const refilter = () => { qFilter.type = $("#f-type").value; qFilter.topic = $("#f-topic").value; qFilter.diff = $("#f-diff").value; qFilter.q = $("#f-q").value; questions(); };
  ["#f-type", "#f-topic", "#f-diff"].forEach((s) => ($(s).onchange = refilter));
  $("#f-q").onchange = refilter;
  $("#q-add").onclick = () => questionForm({ type: "mcq", options: ["", "", "", ""], answer: 0, level: "Tiểu học" }, topics);
  $$("[data-edit]").forEach((b) => (b.onclick = () => questionForm(byId[b.dataset.edit], topics)));
  $$("[data-dup]").forEach((b) => (b.onclick = () => { const { id, source, ...q } = byId[b.dataset.dup]; questionForm(structuredClone(q), topics); }));
  $$("[data-view]").forEach((b) => (b.onclick = () => previewQuestion(byId[b.dataset.view])));
  $$("[data-del]").forEach((b) => (b.onclick = async () => {
    if (await confirmBox("Xoá câu hỏi", "Xoá câu hỏi này khỏi ngân hàng? Bài làm cũ có chứa câu này sẽ không xem lại được câu đó.", "Xoá", "btn-danger")) {
      await store.deleteQuestion(b.dataset.del);
      questions();
    }
  }));
  $("#q-delall").onclick = async () => {
    if (!list.length) return;
    if (await confirmBox("Xoá hàng loạt", `Xoá <b>${list.length}</b> câu hỏi đang hiển thị theo bộ lọc?`, "Xoá tất cả", "btn-danger")) {
      for (const q of list) await store.deleteQuestion(q.id);
      questions();
    }
  };
  $("#q-seed").onclick = async () => { const n = await seedSample(); toast(n ? `Đã nạp ${n} câu hỏi minh hoạ.` : "Đề minh hoạ đã có sẵn trong ngân hàng."); questions(); };
  $("#q-tpl").onclick = () => xlsxReady() && downloadXlsx("mau_cau_hoi.xlsx", {
    "Câu hỏi": [
      ["Loại", "Nội dung", "A", "B", "C", "D", "Đáp án", "Chủ đề", "Mức độ", "Cấp học", "Ảnh (link)", "Giải thích"],
      ["TN", "Khi phơi quần áo, hiện tượng nào xảy ra?", "Đông đặc", "Bay hơi", "Nóng chảy", "Ngưng tụ", "B", "Khoa học", "Nhận biết", "Tiểu học", "", "Nước trong quần áo bay hơi vào không khí."],
      ["DS", "Cho các phát biểu về không khí:", "Không khí có thể bị nén lại", "Không khí có màu xanh", "Không khí chiếm chỗ", "Không khí không có trọng lượng", "Đ,S,Đ,S", "Khoa học", "Thông hiểu", "Tiểu học", "", ""],
      ["TLN", "Một hàng rào 8 ô vuông nối tiếp cần bao nhiêu thanh tre?", "", "", "", "", "25", "Toán học", "Vận dụng", "Tiểu học", "https://drive.google.com/file/d/ID_ANH/view", "4 + 7 × 3 = 25"],
    ],
    "Hướng dẫn": [
      ["Cột", "Cách nhập"],
      ["Loại", "TN = trắc nghiệm 4 phương án; DS = đúng/sai (4 ý a–d nhập vào cột A–D); TLN = trả lời ngắn. Để trống = TN."],
      ["Đáp án", "TN: một chữ A/B/C/D. DS: 4 ký tự Đ/S theo thứ tự a–d, vd Đ,S,Đ,S. TLN: đáp án; nhiều đáp án chấp nhận được thì ngăn cách bằng dấu ; (vd: 2,5;2.5)."],
      ["Ảnh (link)", "Link ảnh trực tiếp hoặc link chia sẻ Google Drive (chế độ 'Bất kỳ ai có đường liên kết'). Có thể bỏ trống rồi tải ảnh lên trong mục Sửa câu hỏi."],
      ["Phương án là ảnh", "Dán link ảnh vào ô A–D."],
      ["Định dạng", "**chữ đậm**, *nghiêng*, x^2^ (mũ), H~2~O (chỉ số dưới). Xuống dòng trong ô: Alt+Enter."],
      ["Mức độ", DIFFICULTIES.join(" / ")],
    ],
  });
  $("#q-export").onclick = () => xlsxReady() && downloadXlsx("ngan_hang_cau_hoi.xlsx", {
    "Câu hỏi": [["Loại", "Nội dung", "A", "B", "C", "D", "Đáp án", "Chủ đề", "Mức độ", "Cấp học", "Ảnh (link)", "Giải thích"],
      ...qs.map((q) => {
        const t = qType(q);
        const o = t === "tf" ? q.statements || [] : t === "mcq" ? q.options || [] : [];
        return [TYPES[t].code, q.content, o[0] || "", o[1] || "", o[2] || "", o[3] || "", t === "mcq" ? LETTERS[q.answer] : t === "tf" ? (q.answer || []).map((v) => (v ? "Đ" : "S")).join(",") : q.answer,
          q.topic || "", q.difficulty || "", q.level || "", q.image?.startsWith("data:") ? "(ảnh tải lên)" : q.image || "", q.explanation || ""];
      })],
  });
  $("#q-import").onclick = async () => {
    if (!xlsxReady()) return;
    const f = await pickFile(".xlsx,.xls");
    if (!f) return;
    const rows = await readXlsx(f);
    const { items, errors } = parseQuestionRows(rows);
    const ok = await modal({
      title: "Nhập câu hỏi từ Excel", size: "lg",
      body: `<div class="alert ${items.length ? "ok" : "err"}">Đọc được <b>${items.length}</b> câu hợp lệ.</div>
        ${errors.length ? `<div class="alert err">${errors.length} dòng lỗi (bỏ qua):<br>${errors.slice(0, 30).map(esc).join("<br>")}</div>` : ""}
        ${items.length ? `<div class="table-wrap"><table class="tbl"><thead><tr><th>Dạng</th><th>Nội dung</th><th>Chủ đề</th><th>Mức độ</th></tr></thead><tbody>
        ${items.slice(0, 50).map((q) => `<tr><td>${TYPES[q.type].name}</td><td><div class="clip">${esc(q.content)}</div></td><td>${esc(q.topic)}</td><td>${esc(q.difficulty)}</td></tr>`).join("")}</tbody></table></div>` : ""}`,
      buttons: [{ label: "Huỷ", value: false }, ...(items.length ? [{ label: `Nhập ${items.length} câu`, cls: "btn-primary", value: true }] : [])],
    });
    if (!ok) return;
    await store.addQuestions(items);
    toast(`Đã nhập ${items.length} câu hỏi.`);
    questions();
  };
}

function parseQuestionRows(rows) {
  const items = [], errors = [];
  const head = (rows[0] || []).map((h) => String(h).toLowerCase());
  const start = head.some((h) => h.includes("nội dung") || h.includes("noi dung")) ? 1 : 0;
  rows.slice(start).forEach((r, k) => {
    const line = k + start + 1;
    const c = (i) => String(r[i] ?? "").trim();
    if (!c(1)) { if (r.some((x) => String(x).trim())) errors.push(`Dòng ${line}: thiếu nội dung câu hỏi.`); return; }
    const code = c(0).toUpperCase().replace(/\s/g, "");
    const type = code === "DS" || code === "ĐS" || code.startsWith("Đ") ? "tf" : code === "TLN" || code === "TL" ? "short" : "mcq";
    const q = { type, content: c(1), topic: c(7), difficulty: c(8), level: c(9) || "Tiểu học", image: normalizeImageUrl(c(10)), explanation: c(11) };
    const four = [c(2), c(3), c(4), c(5)].map(normalizeImageUrl);
    const key = c(6);
    if (type === "mcq") {
      const a = LETTERS.indexOf(key.toUpperCase().replace(/[^A-D]/g, "").slice(0, 1));
      if (four.some((x) => !x)) return errors.push(`Dòng ${line}: thiếu phương án A–D.`);
      if (a < 0) return errors.push(`Dòng ${line}: đáp án phải là A, B, C hoặc D.`);
      Object.assign(q, { options: four, answer: a });
    } else if (type === "tf") {
      const v = key.toUpperCase().replace(/[^ĐDSTF]/g, "").split("").map((x) => x === "Đ" || x === "D" || x === "T");
      if (four.some((x) => !x)) return errors.push(`Dòng ${line}: câu Đúng/Sai cần đủ 4 ý ở cột A–D.`);
      if (v.length !== 4) return errors.push(`Dòng ${line}: đáp án Đúng/Sai cần 4 ký tự Đ/S (vd Đ,S,Đ,S).`);
      Object.assign(q, { statements: four, answer: v });
    } else {
      if (!key) return errors.push(`Dòng ${line}: thiếu đáp án trả lời ngắn.`);
      q.answer = key;
    }
    items.push(q);
  });
  return { items, errors };
}

function previewQuestion(q) {
  const t = qType(q);
  modal({
    title: "Xem câu hỏi", size: "lg",
    body: `<span class="chip">${TYPES[t].name}</span> ${q.topic ? `<span class="chip gray">${esc(q.topic)}</span>` : ""} ${q.difficulty ? `<span class="chip gray">${esc(q.difficulty)}</span>` : ""}
      <div class="qtext">${renderRich(q.content)}</div>${q.image ? `<img class="qimg" src="${esc(q.image)}">` : ""}
      ${t === "mcq" ? `<div class="opts">${q.options.map((o, i) => `<div class="opt ${i === Number(q.answer) ? "correct" : ""}"><div><div class="l">${LETTERS[i]}</div><div class="v">${renderOption(o)}</div></div></div>`).join("")}</div>`
      : t === "tf" ? `<table class="tf-table">${q.statements.map((s, i) => `<tr><td>${TF_LABELS[i]})</td><td>${renderOption(s)}</td><td><b>${q.answer[i] ? "Đúng" : "Sai"}</b></td></tr>`).join("")}</table>`
      : `<div class="explain ok"><b>Đáp án:</b> ${esc(q.answer)}</div>`}
      ${q.explanation ? `<div class="explain"><b>Giải thích:</b> ${renderRich(q.explanation)}</div>` : ""}`,
  });
}

function questionForm(q, topics) {
  const t0 = qType(q);
  const field = (t, i) =>
    t === "tf" ? `<label>Ý ${TF_LABELS[i]})</label><div style="display:flex;gap:8px"><input class="form-control" style="flex:1" data-st="${i}" value="${esc(q.statements?.[i] || "")}">
        <select class="form-control" data-tfk="${i}">${opt("1", q.answer?.[i] ? "1" : "0", "Đúng")}${opt("0", q.answer?.[i] ? "1" : "0", "Sai")}</select></div>`
    : `<label>Phương án ${LETTERS[i]}</label><div style="display:flex;gap:8px;align-items:center"><input type="radio" name="f-ans" value="${i}" ${Number(q.answer) === i ? "checked" : ""} title="Đáp án đúng"><input class="form-control" style="flex:1" data-op="${i}" value="${esc(q.options?.[i] || "")}" placeholder="Nội dung hoặc link ảnh"></div>`;
  const typeFields = (t) =>
    t === "short" ? `<label>Đáp án đúng</label><input class="form-control" id="f-short" value="${esc(typeof q.answer === "string" ? q.answer : "")}" placeholder="vd: 25 hoặc 2,5;2.5 (nhiều đáp án ngăn cách bởi ;)">`
    : `${[0, 1, 2, 3].map((i) => field(t, i)).join("")}${t === "mcq" ? `<span></span><span class="muted small">Chọn nút tròn bên trái phương án đúng.</span>` : ""}`;
  let image = q.image || "";
  modal({
    title: q.id ? "Sửa câu hỏi" : "Thêm câu hỏi", size: "lg",
    body: `<div class="form-grid">
      <label>Dạng câu hỏi</label><select class="form-control" id="f-type">${TYPE_ORDER.map((t) => opt(t, t0, TYPES[t].name)).join("")}</select>
      <label>Nội dung</label><textarea class="form-control" id="f-content" rows="4">${esc(q.content || "")}</textarea>
      <label>Hình minh hoạ</label><div><div style="display:flex;gap:8px;flex-wrap:wrap"><input class="form-control" style="flex:1;min-width:200px" id="f-imgurl" placeholder="Dán link ảnh / link Google Drive" value="${image.startsWith("data:") ? "" : esc(image)}">
        <button class="btn btn-sm" id="f-upload" type="button">${icons.upload} Tải ảnh lên</button><button class="btn btn-sm" id="f-noimg" type="button">Bỏ ảnh</button></div>
        <img id="f-imgprev" class="thumb" style="max-height:120px;max-width:240px;margin-top:8px;${image ? "" : "display:none"}" src="${esc(image)}"></div>
      <div id="f-typefields" style="display:contents">${typeFields(t0)}</div>
      <label>Chủ đề</label><input class="form-control" id="f-topic" list="topic-list" value="${esc(q.topic || "")}"><datalist id="topic-list">${topics.map((t) => `<option value="${esc(t)}">`).join("")}</datalist>
      <label>Mức độ</label><select class="form-control" id="f-diff"><option value=""></option>${DIFFICULTIES.map((d) => opt(d, q.difficulty)).join("")}</select>
      <label>Cấp học</label><select class="form-control" id="f-level">${LEVELS.map((l) => opt(l, q.level || "Tiểu học")).join("")}</select>
      <label>Giải thích / lời giải</label><textarea class="form-control" id="f-exp" rows="3" placeholder="Hiển thị cho học sinh khi xem lại bài">${esc(q.explanation || "")}</textarea>
      <label>Giữ nguyên thứ tự phương án</label><label style="font-weight:400"><input type="checkbox" id="f-fixed" ${q.fixedOrder ? "checked" : ""}> Không tráo (dùng khi có phương án kiểu “Cả A và B”)</label>
    </div>`,
    onOpen: (el) => {
      $("#f-type", el).onchange = (e) => ($("#f-typefields", el).innerHTML = typeFields(e.target.value));
      const setImg = (v) => { image = v; const p = $("#f-imgprev", el); p.src = v; p.style.display = v ? "" : "none"; };
      $("#f-imgurl", el).onchange = (e) => setImg(normalizeImageUrl(e.target.value));
      $("#f-noimg", el).onclick = () => { $("#f-imgurl", el).value = ""; setImg(""); };
      $("#f-upload", el).onclick = async () => {
        const f = await pickFile("image/*");
        if (f) setImg(await fileToDataUrl(f));
      };
    },
    buttons: [{ label: "Huỷ", value: false }, { label: "Lưu", cls: "btn-primary", handler: async (el) => {
      const t = $("#f-type", el).value;
      const data = { type: t, content: $("#f-content", el).value.trim(), image, topic: $("#f-topic", el).value.trim(), difficulty: $("#f-diff", el).value,
        level: $("#f-level", el).value, explanation: $("#f-exp", el).value.trim(), fixedOrder: $("#f-fixed", el).checked };
      if (q.source) data.source = q.source;
      if (!data.content) throw new Error("Chưa nhập nội dung câu hỏi.");
      if (t === "mcq") {
        data.options = [0, 1, 2, 3].map((i) => normalizeImageUrl($(`[data-op="${i}"]`, el).value.trim()));
        if (data.options.some((o) => !o)) throw new Error("Cần nhập đủ 4 phương án.");
        const c = $('input[name="f-ans"]:checked', el);
        if (!c) throw new Error("Chưa chọn đáp án đúng.");
        data.answer = Number(c.value);
      } else if (t === "tf") {
        data.statements = [0, 1, 2, 3].map((i) => $(`[data-st="${i}"]`, el).value.trim());
        if (data.statements.some((o) => !o)) throw new Error("Cần nhập đủ 4 ý a–d.");
        data.answer = [0, 1, 2, 3].map((i) => $(`[data-tfk="${i}"]`, el).value === "1");
      } else {
        data.answer = $("#f-short", el).value.trim();
        if (!data.answer) throw new Error("Chưa nhập đáp án.");
      }
      await store.saveQuestion(q.id ? { id: q.id, ...data } : data);
      questions();
    } }],
  });
}

/* ------------------------------------------------------------------ */
/* Ca thi & ma trận                                                    */
/* ------------------------------------------------------------------ */
async function exams() {
  const [ex, qs] = await Promise.all([loadExams(true), loadQuestions(true)]);
  render("Ca thi & ma trận đề", `
    <div class="alert info small">Mỗi <b>ca thi</b> có một <b>mã ca thi</b> (học sinh nhập khi đăng nhập) và một <b>ma trận đề</b>. Mỗi lượt thi, hệ thống tự bốc câu ngẫu nhiên theo ma trận và tráo thứ tự câu, thứ tự phương án → mỗi học sinh / mỗi lần thi là một đề khác nhau.</div>
    <div class="toolbar"><button class="btn btn-primary" id="e-add">+ Tạo ca thi</button></div>
    <div class="table-wrap"><table class="tbl"><thead><tr><th>Ca thi</th><th>Mã ca thi</th><th>Cấp</th><th>Thời gian</th><th>Số câu</th><th>Ma trận</th><th>Lượt tối đa</th><th>Trạng thái</th><th></th></tr></thead><tbody>
    ${ex.map((e) => {
      const chk = checkMatrix(e.matrix, qs, e.level);
      const ok = chk.every((r) => r.ok);
      return `<tr><td><b>${esc(e.title)}</b></td><td class="mono">${esc(e.code)}</td><td>${esc(e.level || "")}</td><td>${e.duration ? e.duration + " phút" : "—"}</td>
        <td>${(e.matrix || []).reduce((s, r) => s + Number(r.count || 0), 0)}</td><td>${ok ? '<span class="badge green">Đủ câu</span>' : '<span class="badge red">Thiếu câu</span>'}</td>
        <td>${Number(e.maxAttempts) || "Không giới hạn"}</td><td>${e.visible === false ? '<span class="badge">Đang ẩn</span>' : '<span class="badge green">Đang mở</span>'}</td>
        <td style="white-space:nowrap"><button class="btn btn-sm" data-edit="${e.id}">Sửa</button> <button class="btn btn-sm" data-prev="${e.id}">Xem đề mẫu</button> <a class="btn btn-sm" href="#/admin/results/${e.id}">Kết quả</a> <button class="btn btn-sm btn-danger" data-del="${e.id}">Xoá</button></td></tr>`;
    }).join("") || `<tr><td colspan="9" class="muted">Chưa có ca thi.</td></tr>`}</tbody></table></div>`);
  const byId = Object.fromEntries(ex.map((e) => [e.id, e]));
  $("#e-add").onclick = () => examForm({ title: "", code: "", level: "Tiểu học", duration: 30, maxAttempts: 0, pointsMcq: 5, pointsTf: 5, pointsShort: 5, maxGrade: 100, shuffleQuestions: true, shuffleOptions: true, strict: true, reviewMode: "full", visible: true, matrix: [{ type: "mcq", topic: "", difficulty: "", count: 20 }] }, qs, ex);
  $$("[data-edit]").forEach((b) => (b.onclick = () => examForm(structuredClone(byId[b.dataset.edit]), qs, ex)));
  $$("[data-del]").forEach((b) => (b.onclick = async () => {
    if (await confirmBox("Xoá ca thi", `Xoá ca thi <b>${esc(byId[b.dataset.del].title)}</b>? Kết quả các lần thi vẫn được giữ.`, "Xoá", "btn-danger")) {
      await store.deleteExam(b.dataset.del);
      exams();
    }
  }));
  $$("[data-prev]").forEach((b) => (b.onclick = () => {
    const e = byId[b.dataset.prev];
    try {
      const items = buildItems(e, qs);
      const qm = qmapOf(qs);
      modal({ title: `Đề mẫu ngẫu nhiên – ${esc(e.title)}`, size: "lg", body: `<p class="muted small">Mỗi lần bấm sẽ ra một đề khác. Đáp án đúng được tô xanh.</p>${items.map((it, i) => {
        const q = qm[it.qid];
        const t = it.type;
        return `<div style="margin-bottom:18px"><div class="qtext"><b>Câu ${i + 1}.</b> ${renderRich(q.content)} <span class="chip gray">${esc(q.topic || "")} · ${esc(q.difficulty || "")}</span></div>
          ${q.image ? `<img class="qimg" style="max-height:180px" src="${esc(q.image)}">` : ""}
          ${t === "mcq" ? it.perm.map((o, p) => `<div style="${o === Number(q.answer) ? "color:var(--green);font-weight:700" : ""}">${LETTERS[p]}. ${renderOption(q.options[o])}</div>`).join("")
          : t === "tf" ? q.statements.map((s, k) => `<div>${TF_LABELS[k]}) ${renderOption(s)} – <b>${q.answer[k] ? "Đ" : "S"}</b></div>`).join("") : `<div style="color:var(--green)"><b>Đáp án:</b> ${esc(q.answer)}</div>`}</div>`;
      }).join("")}` });
    } catch (err) {
      modal({ title: "Không tạo được đề", body: `<div class="alert err">${esc(err.message)}</div>` });
    }
  }));
}

function examForm(e, qs, all) {
  const topics = [...new Set(qs.map((q) => q.topic).filter(Boolean))].sort();
  const diffs = [...new Set([...DIFFICULTIES, ...qs.map((q) => q.difficulty).filter(Boolean)])];
  const dt = (v) => (v ? String(v).slice(0, 16) : "");
  const rowHtml = (r, i) => `<tr data-row="${i}">
    <td><select class="form-control" data-k="type">${TYPE_ORDER.map((t) => opt(t, r.type || "mcq", TYPES[t].name)).join("")}</select></td>
    <td><select class="form-control" data-k="topic"><option value="">Mọi chủ đề</option>${topics.map((t) => opt(t, r.topic)).join("")}</select></td>
    <td><select class="form-control" data-k="difficulty"><option value="">Mọi mức độ</option>${diffs.map((t) => opt(t, r.difficulty)).join("")}</select></td>
    <td><input class="form-control" type="number" min="0" style="width:80px" data-k="count" value="${Number(r.count) || 0}"></td>
    <td data-avail></td><td><button class="btn btn-sm" data-rm="${i}" type="button">✕</button></td></tr>`;
  modal({
    title: e.id ? "Sửa ca thi" : "Tạo ca thi", size: "lg",
    body: `<div class="form-grid">
      <label>Tên phiên thi</label><input class="form-control" id="x-title" value="${esc(e.title)}" placeholder="vd: Thi thử STEM Tiểu học">
      <label>Mã ca thi</label><input class="form-control mono" id="x-code" value="${esc(e.code)}" placeholder="vd: STEM-TH01">
      <label>Cấp học</label><select class="form-control" id="x-level">${LEVELS.map((l) => opt(l, e.level)).join("")}<option value="" ${!e.level ? "selected" : ""}>Không lọc theo cấp</option></select>
      <label>Thời gian làm bài (phút)</label><input class="form-control" type="number" min="0" id="x-dur" value="${e.duration}">
      <label>Số lượt thi tối đa</label><input class="form-control" type="number" min="0" id="x-max" value="${e.maxAttempts || 0}" title="0 = không giới hạn">
      <label>Mở từ / đến</label><div style="display:flex;gap:8px;flex-wrap:wrap"><input class="form-control" type="datetime-local" id="x-from" value="${dt(e.openFrom)}"><input class="form-control" type="datetime-local" id="x-to" value="${dt(e.openTo)}"></div>
      <label>Điểm mỗi câu</label><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">TN <input class="form-control" type="number" step="0.25" style="width:80px" id="x-pm" value="${pointsOf(e, "mcq")}"> Đ/S <input class="form-control" type="number" step="0.25" style="width:80px" id="x-pt" value="${pointsOf(e, "tf")}"> TLN <input class="form-control" type="number" step="0.25" style="width:80px" id="x-ps" value="${pointsOf(e, "short")}"></div>
      <label>Thang điểm quy đổi</label><input class="form-control" type="number" id="x-grade" value="${e.maxGrade || 100}" title="Điểm hiển thị cho học sinh, vd 100 hoặc 10">
      <label>Tráo đề</label><div><label style="font-weight:400"><input type="checkbox" id="x-sq" ${e.shuffleQuestions !== false ? "checked" : ""}> Tráo thứ tự câu</label> &nbsp; <label style="font-weight:400"><input type="checkbox" id="x-so" ${e.shuffleOptions !== false ? "checked" : ""}> Tráo thứ tự phương án A–D</label></div>
      <label>Giám sát</label><label style="font-weight:400"><input type="checkbox" id="x-strict" ${e.strict !== false ? "checked" : ""}> Bắt buộc toàn màn hình, ghi nhận chuyển tab, chặn Ctrl+C/V (giống thi thật)</label>
      <label>Sau khi nộp bài</label><select class="form-control" id="x-review">${opt("full", e.reviewMode, "Xem điểm, câu sai, đáp án đúng và lời giải")}${opt("mark", e.reviewMode, "Chỉ xem điểm và câu nào đúng/sai")}${opt("none", e.reviewMode, "Chỉ xem điểm")}</select>
      <label>Trạng thái</label><label style="font-weight:400"><input type="checkbox" id="x-vis" ${e.visible !== false ? "checked" : ""}> Mở cho học sinh vào thi</label>
    </div>
    <h4 style="margin-top:20px">Ma trận đề</h4>
    <div class="table-wrap"><table class="tbl"><thead><tr><th>Dạng câu</th><th>Chủ đề</th><th>Mức độ</th><th>Số câu</th><th>Ngân hàng có</th><th></th></tr></thead><tbody id="mx">${(e.matrix || []).map(rowHtml).join("")}</tbody></table></div>
    <div style="margin-top:8px;display:flex;gap:8px;align-items:center;flex-wrap:wrap"><button class="btn btn-sm" id="mx-add" type="button">+ Thêm dòng</button><button class="btn btn-sm" id="mx-auto" type="button">Tự chia đều theo chủ đề</button><span class="muted small" id="mx-sum"></span></div>`,
    onOpen: (el) => {
      const readRows = () => $$("#mx tr", el).map((tr) => ({ type: $('[data-k="type"]', tr).value, topic: $('[data-k="topic"]', tr).value, difficulty: $('[data-k="difficulty"]', tr).value, count: Number($('[data-k="count"]', tr).value) || 0 }));
      const refresh = () => {
        const rows = readRows();
        const chk = checkMatrix(rows, qs, $("#x-level", el).value);
        $$("#mx tr", el).forEach((tr, i) => ($("[data-avail]", tr).innerHTML = `<span class="badge ${chk[i].ok ? "green" : "red"}">${chk[i].available} câu</span>`));
        const sum = rows.reduce((s, r) => s + r.count, 0);
        const pts = rows.reduce((s, r) => s + r.count * Number({ mcq: $("#x-pm", el).value, tf: $("#x-pt", el).value, short: $("#x-ps", el).value }[r.type] || 0), 0);
        $("#mx-sum", el).textContent = `Tổng: ${sum} câu · ${fmtNum(pts)} điểm thô`;
      };
      const redraw = (rows) => {
        $("#mx", el).innerHTML = rows.map(rowHtml).join("");
        $$("[data-rm]", el).forEach((b) => (b.onclick = () => { const r = readRows(); r.splice(Number(b.dataset.rm), 1); redraw(r); }));
        $$("#mx select, #mx input", el).forEach((x) => (x.onchange = x.oninput = refresh));
        refresh();
      };
      redraw(e.matrix || []);
      ["#x-level", "#x-pm", "#x-pt", "#x-ps"].forEach((s) => ($(s, el).oninput = $(s, el).onchange = refresh));
      $("#mx-add", el).onclick = () => redraw([...readRows(), { type: "mcq", topic: "", difficulty: "", count: 1 }]);
      $("#mx-auto", el).onclick = () => {
        const total = Number(prompt("Tổng số câu trắc nghiệm cần chia đều theo chủ đề:", "20")) || 0;
        const lv = $("#x-level", el).value;
        const ts = topics.filter((t) => qs.some((q) => q.topic === t && qType(q) === "mcq" && (!lv || !q.level || q.level === lv)));
        if (!total || !ts.length) return;
        const base = Math.floor(total / ts.length);
        let extra = total - base * ts.length;
        redraw(ts.map((t) => ({ type: "mcq", topic: t, difficulty: "", count: base + (extra-- > 0 ? 1 : 0) })));
      };
      el._readRows = readRows;
    },
    buttons: [{ label: "Huỷ", value: false }, { label: "Lưu", cls: "btn-primary", handler: async (el) => {
      const data = {
        title: $("#x-title", el).value.trim(), code: $("#x-code", el).value.trim().toUpperCase(), level: $("#x-level", el).value,
        duration: Number($("#x-dur", el).value) || 0, maxAttempts: Number($("#x-max", el).value) || 0,
        openFrom: $("#x-from", el).value || "", openTo: $("#x-to", el).value || "",
        pointsMcq: Number($("#x-pm", el).value) || 0, pointsTf: Number($("#x-pt", el).value) || 0, pointsShort: Number($("#x-ps", el).value) || 0,
        maxGrade: Number($("#x-grade", el).value) || 0, shuffleQuestions: $("#x-sq", el).checked, shuffleOptions: $("#x-so", el).checked,
        strict: $("#x-strict", el).checked, reviewMode: $("#x-review", el).value, visible: $("#x-vis", el).checked,
        matrix: el._readRows().filter((r) => r.count > 0), order: e.order ?? 0,
      };
      if (!data.title) throw new Error("Chưa nhập tên phiên thi.");
      if (!/^[A-Z0-9_-]{3,}$/.test(data.code)) throw new Error("Mã ca thi tối thiểu 3 ký tự, chỉ gồm chữ không dấu, số, - và _.");
      if (all.some((x) => x.id !== e.id && String(x.code).toUpperCase() === data.code)) throw new Error("Mã ca thi đã được dùng cho ca thi khác.");
      if (!data.matrix.length) throw new Error("Ma trận đề chưa có câu nào.");
      const bad = checkMatrix(data.matrix, qs, data.level).filter((r) => !r.ok);
      if (bad.length && !confirm("Ngân hàng chưa đủ câu cho một số dòng ma trận – học sinh sẽ không vào thi được. Vẫn lưu?")) return false;
      await store.saveExam(e.id ? { id: e.id, ...data } : data);
      exams();
    } }],
  });
}

/* ------------------------------------------------------------------ */
/* Kết quả                                                             */
/* ------------------------------------------------------------------ */
async function results(examId = "") {
  const [ex, atts, qs] = await Promise.all([loadExams(true), store.listAttempts(), loadQuestions(true)]);
  const qm = qmapOf(qs);
  const sel = examId || "";
  const list = atts.filter((a) => a.state === "finished" && (sel === "all" ? true : sel ? a.examId === sel : a.examId !== "practice")).sort((a, b) => b.submittedAt - a.submittedAt);
  const inprog = atts.filter((a) => a.state === "inprogress" && (!sel || sel === "all" || a.examId === sel));
  const pct = (a) => (a.result.marks / a.result.totalMarks) * 100 || 0;
  // Phân bố điểm
  const bins = [0, 0, 0, 0, 0];
  list.forEach((a) => bins[Math.min(4, Math.floor(pct(a) / 20))]++);
  const maxBin = Math.max(1, ...bins);
  // Phân tích câu hỏi
  const qstat = {};
  list.forEach((a) => a.items.forEach((it, i) => {
    qstat[it.qid] ??= [0, 0];
    qstat[it.qid][1]++;
    qstat[it.qid][0] += a.result.details[i].r;
  }));
  const hard = Object.entries(qstat).filter(([id]) => qm[id]).sort((x, y) => x[1][0] / x[1][1] - y[1][0] / y[1][1]).slice(0, 10);
  // Điểm cao nhất của từng thí sinh
  const best = {};
  list.forEach((a) => { if (!best[a.uid] || a.result.grade > best[a.uid].result.grade) best[a.uid] = a; });
  const ranking = Object.values(best).sort((a, b) => b.result.grade - a.result.grade || (a.submittedAt - a.startedAt) - (b.submittedAt - b.startedAt));
  render("Kết quả thi thử", `
    <div class="toolbar">
      <select class="form-control" id="r-exam"><option value="">Tất cả ca thi</option>${ex.map((e) => opt(e.id, sel, e.title)).join("")}<option value="practice" ${sel === "practice" ? "selected" : ""}>Luyện tập tự do</option><option value="all" ${sel === "all" ? "selected" : ""}>Tất cả (gồm luyện tập)</option></select>
      <input class="form-control grow" id="r-q" placeholder="Lọc theo tên, SBD, trường...">
      <button class="btn" id="r-export">Xuất Excel</button>
    </div>
    <div class="cards">
      <div class="stat"><div class="v">${list.length}</div><div class="k">Lượt nộp bài</div></div>
      <div class="stat"><div class="v">${Object.keys(best).length}</div><div class="k">Thí sinh đã thi</div></div>
      <div class="stat"><div class="v">${list.length ? Math.round(list.reduce((s, a) => s + pct(a), 0) / list.length) : 0}%</div><div class="k">Điểm trung bình</div></div>
      <div class="stat"><div class="v">${inprog.length}</div><div class="k">Đang làm bài</div></div>
    </div>
    <div class="tabs"><a data-tab="all" class="active">Tất cả lượt thi</a><a data-tab="rank">Xếp hạng (lần cao nhất)</a><a data-tab="stat">Phân tích đề</a></div>
    <div data-pane="all"><div class="table-wrap"><table class="tbl"><thead><tr><th>Nộp lúc</th><th>Họ tên</th><th>SBD</th><th>Trường</th><th>Phiên thi</th><th>Đúng</th><th>Điểm</th><th>Thời gian</th><th>Vi phạm</th><th></th></tr></thead>
      <tbody id="r-body">${list.map((a) => `<tr data-s="${esc([a.name, a.sbd, a.username, a.school].join(" ").toLowerCase())}"><td>${fmtTime(a.submittedAt)}</td><td>${esc(a.name)}</td><td class="mono">${esc(a.sbd || a.username)}</td><td>${esc(a.school || "")}</td><td>${esc(a.exam.title)}</td>
        <td>${a.result.correct}/${a.result.total}</td><td><b>${fmtNum(a.result.grade)}</b>/${fmtNum(a.result.maxGrade)}</td><td>${fmtDuration(a.submittedAt - a.startedAt)}${a.autoSubmitted ? ' <span class="badge orange">hết giờ</span>' : ""}</td>
        <td>${a.violations ? `<span class="badge red" title="${esc(a.lastViolation || "")}">${a.violations}</span>` : "0"}</td>
        <td style="white-space:nowrap"><a class="btn btn-sm" href="#/review/${a.id}">Xem bài</a> <button class="btn btn-sm btn-danger" data-del="${a.id}">Xoá</button></td></tr>`).join("") || `<tr><td colspan="10" class="muted">Chưa có bài nộp.</td></tr>`}</tbody></table></div>
      ${inprog.length ? `<h3 style="margin-top:18px;font-size:16px">Đang làm bài</h3><div class="table-wrap"><table class="tbl"><thead><tr><th>Bắt đầu</th><th>Họ tên</th><th>Phiên thi</th><th>Đã trả lời</th><th>Vi phạm</th><th></th></tr></thead><tbody>
        ${inprog.map((a) => `<tr><td>${fmtTime(a.startedAt)}</td><td>${esc(a.name)}</td><td>${esc(a.exam.title)}</td><td>${Object.values(a.answers || {}).filter((v) => v !== null && v !== "").length}/${a.items.length}</td><td>${a.violations || 0}</td><td><button class="btn btn-sm btn-danger" data-del="${a.id}">Huỷ lượt</button></td></tr>`).join("")}</tbody></table></div>` : ""}
    </div>
    <div data-pane="rank" class="hidden"><div class="table-wrap"><table class="tbl"><thead><tr><th>Hạng</th><th>Họ tên</th><th>SBD</th><th>Trường</th><th>Điểm cao nhất</th><th>Số lượt</th><th>Thời gian (lần cao nhất)</th></tr></thead><tbody>
      ${ranking.map((a, i) => `<tr><td>${i + 1}</td><td>${esc(a.name)}</td><td class="mono">${esc(a.sbd || a.username)}</td><td>${esc(a.school || "")}</td><td><b>${fmtNum(a.result.grade)}</b>/${fmtNum(a.result.maxGrade)}</td><td>${list.filter((x) => x.uid === a.uid).length}</td><td>${fmtDuration(a.submittedAt - a.startedAt)}</td></tr>`).join("") || `<tr><td colspan="7" class="muted">Chưa có dữ liệu.</td></tr>`}</tbody></table></div></div>
    <div data-pane="stat" class="hidden">
      <div class="panel"><h3>Phân bố điểm (% điểm tối đa)</h3><div class="bar-chart">${["0–19%", "20–39%", "40–59%", "60–79%", "80–100%"].map((l, i) => barRow(l, bins[i], maxBin, `${bins[i]} lượt`)).join("")}</div></div>
      <div class="panel"><h3>10 câu học sinh làm sai nhiều nhất</h3>${hard.length ? `<div class="table-wrap"><table class="tbl"><thead><tr><th>Câu hỏi</th><th>Chủ đề</th><th>Số lượt gặp</th><th>Tỉ lệ đúng</th><th></th></tr></thead><tbody>
        ${hard.map(([id, [c, n]]) => `<tr><td><div class="clip">${esc(qm[id].content)}</div></td><td>${esc(qm[id].topic || "")}</td><td>${n}</td><td><span class="badge ${c / n < 0.5 ? "red" : "orange"}">${Math.round((c / n) * 100)}%</span></td><td><button class="btn btn-sm" data-q="${id}">Xem</button></td></tr>`).join("")}</tbody></table></div>` : `<p class="muted">Chưa có dữ liệu.</p>`}</div>
    </div>`);
  $("#r-exam").onchange = (e) => (location.hash = `#/admin/results${e.target.value ? "/" + e.target.value : ""}`);
  $("#r-q").oninput = (e) => $$("#r-body tr").forEach((tr) => (tr.style.display = tr.dataset.s?.includes(e.target.value.toLowerCase()) ? "" : "none"));
  $$("[data-tab]").forEach((t) => (t.onclick = () => {
    $$("[data-tab]").forEach((x) => x.classList.toggle("active", x === t));
    $$("[data-pane]").forEach((p) => p.classList.toggle("hidden", p.dataset.pane !== t.dataset.tab));
  }));
  $$("[data-del]").forEach((b) => (b.onclick = async () => {
    if (await confirmBox("Xoá lượt thi", "Xoá lượt thi này? Học sinh sẽ được tính lại số lượt.", "Xoá", "btn-danger")) {
      await store.deleteAttempt(b.dataset.del);
      results(examId);
    }
  }));
  $$("[data-q]").forEach((b) => (b.onclick = () => {
    const q = qm[b.dataset.q];
    modal({ title: "Câu hỏi", size: "lg", body: `<div class="qtext">${renderRich(q.content)}</div>${q.image ? `<img class="qimg" src="${esc(q.image)}">` : ""}${q.options ? q.options.map((o, i) => `<div style="${i === Number(q.answer) ? "color:var(--green);font-weight:700" : ""}">${LETTERS[i]}. ${renderOption(o)}</div>`).join("") : ""}` });
  }));
  $("#r-export").onclick = () => xlsxReady() && downloadXlsx("ket_qua_thi_thu.xlsx", {
    "Các lượt thi": [["Nộp lúc", "Họ tên", "Tên đăng nhập", "SBD", "Trường", "Phiên thi", "Số câu đúng", "Tổng số câu", "Điểm", "Thang điểm", "Thời gian làm (phút)", "Tự nộp khi hết giờ", "Số lần vi phạm"],
      ...list.map((a) => [fmtTime(a.submittedAt), a.name, a.username, a.sbd || "", a.school || "", a.exam.title, a.result.correct, a.result.total, a.result.grade, a.result.maxGrade, Math.round((a.submittedAt - a.startedAt) / 600) / 100, a.autoSubmitted ? "Có" : "", a.violations || 0])],
    "Xếp hạng": [["Hạng", "Họ tên", "SBD", "Trường", "Điểm cao nhất", "Thang điểm", "Số lượt"],
      ...ranking.map((a, i) => [i + 1, a.name, a.sbd || a.username, a.school || "", a.result.grade, a.result.maxGrade, list.filter((x) => x.uid === a.uid).length])],
  });
}

/* ------------------------------------------------------------------ */
/* Cài đặt                                                             */
/* ------------------------------------------------------------------ */
function settings() {
  const S = ctx.settings;
  render("Cài đặt", `
    <div class="panel" style="max-width:720px"><h3>Thông tin hiển thị</h3><div class="form-grid">
      <label>Tên hệ thống</label><input class="form-control" id="s-title" value="${esc(S.siteTitle)}">
      <label>Dòng phụ</label><input class="form-control" id="s-org" value="${esc(S.orgName)}">
      <span></span><div><button class="btn btn-primary" id="s-save">Lưu</button></div></div></div>
    ${store.mode === "demo" ? `<div class="panel" style="max-width:720px"><h3>Dữ liệu (chế độ demo)</h3>
      <div class="alert warn">Đang chạy <b>chế độ demo</b>: mọi dữ liệu chỉ lưu trên trình duyệt của máy này, học sinh ở máy khác không thấy. Để nhiều học sinh cùng dùng, hãy cấu hình Firebase theo hướng dẫn trong README.</div>
      <button class="btn" id="s-backup">Sao lưu (tải file .json)</button> <button class="btn" id="s-restore">Khôi phục từ file</button> <button class="btn btn-danger" id="s-reset">Xoá toàn bộ dữ liệu</button></div>` : `<div class="panel" style="max-width:720px"><h3>Dữ liệu</h3><p class="muted">Đang dùng Firebase. Sao lưu dữ liệu bằng các nút <b>Xuất Excel</b> ở từng mục, hoặc dùng tính năng Export của Firestore.</p></div>`}`);
  $("#s-save").onclick = async () => {
    const s = { siteTitle: $("#s-title").value.trim() || DEFAULT_SETTINGS.siteTitle, orgName: $("#s-org").value.trim() };
    await store.saveSettings(s);
    Object.assign(ctx.settings, s);
    toast("Đã lưu.");
    settings();
  };
  if (store.mode !== "demo") return;
  $("#s-backup").onclick = () => {
    const blob = new Blob([JSON.stringify(store.exportAll())], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `saoluu_thithu_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
  };
  $("#s-restore").onclick = async () => {
    const f = await pickFile(".json");
    if (!f) return;
    try {
      const data = JSON.parse(await f.text());
      if (!data.users || !data.questions) throw new Error("File không đúng định dạng.");
      store.importAll(data);
      toast("Đã khôi phục dữ liệu.");
      setTimeout(() => location.reload(), 600);
    } catch (e) { toast(e.message); }
  };
  $("#s-reset").onclick = async () => {
    if (await confirmBox("Xoá toàn bộ dữ liệu", "Xoá TẤT CẢ tài khoản, câu hỏi, ca thi và kết quả trên trình duyệt này?", "Xoá hết", "btn-danger")) {
      localStorage.removeItem("olympicstem-demo-v1");
      sessionStorage.clear();
      location.hash = "#/login";
      location.reload();
    }
  };
}

