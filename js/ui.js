// Tiện ích giao diện dùng chung.

export const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const p = (d) => `<svg viewBox="0 0 512 512"><path d="${d}"/></svg>`;
export const icons = {
  user: p("M256 256a112 112 0 1 0 0-224 112 112 0 0 0 0 224zm80 32h-14a152 152 0 0 1-132 0h-14A112 112 0 0 0 64 400v32a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48v-32a112 112 0 0 0-112-112z"),
  key: p("M336 32a144 144 0 0 0-139 182L32 379v101h101v-48h48v-48h48l55-55A144 144 0 1 0 336 32zm40 144a40 40 0 1 1 0-80 40 40 0 0 1 0 80z"),
  home: p("M256 64 32 256h64v192h128V320h64v128h128V256h64z"),
  card: p("M48 80h416v352H48zm48 48v96h128v-96zm176 0v32h144v-32zm0 64v32h144v-32zM96 256v128h320V256z"),
  cal: p("M128 32h48v48h160V32h48v48h80v400H48V80h80zm-32 160v240h320V192z"),
  list: p("M64 112h384v48H64zm0 120h384v48H64zm0 120h256v48H64z"),
  cap: p("M256 64 0 192l256 128 192-96v144h48V192zM96 288v80c0 40 72 80 160 80s160-40 160-80v-80l-160 80z"),
  users: p("M176 240a80 80 0 1 0 0-160 80 80 0 0 0 0 160zm192 0a64 64 0 1 0 0-128 64 64 0 0 0 0 128zM176 272c-88 0-160 40-160 96v48h320v-48c0-56-72-96-160-96zm192 0c-12 0-24 1-35 4 31 22 51 54 51 92v48h112v-48c0-52-58-96-128-96z"),
  trophy: p("M128 32h256v48h96v48c0 64-48 112-112 120-16 40-48 64-88 72v64h80v48H152v-48h80v-64c-40-8-72-32-88-72C80 240 32 192 32 128V80h96zm0 96H80c0 32 16 56 48 64zm256 0v64c32-8 48-32 48-64z"),
  check: p("M480 128 192 416 32 256l48-48 112 112 240-240z"),
  book: p("M32 96c64-32 160-32 224 16 64-48 160-48 224-16v320c-64-32-160-32-224 16-64-48-160-48-224-16z"),
  search: p("M208 32a176 176 0 0 1 140 283l124 124-34 34-124-124A176 176 0 1 1 208 32zm0 48a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"),
  bell: p("M256 480a48 48 0 0 0 48-48h-96a48 48 0 0 0 48 48zm160-144V224c0-80-48-136-128-152V48h-64v24C144 88 96 144 96 224v112l-48 48v32h416v-32z"),
  menu: p("M32 96h448v48H32zm128 136h320v48H160zM32 368h448v48H32zM32 200l80 56-80 56z"),
  flag: p("M64 32h48v448H64zm80 16c96-32 160 32 256 0v224c-96 32-160-32-256 0z"),
  hourglass: p("M96 32h320v48h-32c0 96-64 128-96 176 32 48 96 80 96 176h32v48H96v-48h32c0-96 64-128 96-176-32-48-96-80-96-176H96z"),
  chart: p("M48 432h416v48H32V48h48v384zm64-160h64v128h-64zm112-96h64v224h-64zm112 64h64v160h-64z"),
  gear: p("M296 32l12 56 40 16 48-32 56 56-32 48 16 40 56 12v80l-56 12-16 40 32 48-56 56-48-32-40 16-12 56h-80l-12-56-40-16-48 32-56-56 32-48-16-40-56-12v-80l56-12 16-40-32-48 56-56 48 32 40-16 12-56zm-40 144a80 80 0 1 0 0 160 80 80 0 0 0 0-160z"),
  logout: p("M224 64H64v384h160v-48H112V112h112zm96 64-34 34 70 70H192v48h164l-70 70 34 34 128-128z"),
  grid: p("M48 48h176v176H48zm240 0h176v176H288zM48 288h176v176H48zm240 0h176v176H288z"),
  redo: p("M256 64a192 192 0 1 0 192 192h-48a144 144 0 1 1-42-102l-54 54h144V64l-56 56A191 191 0 0 0 256 64z"),
  target: p("M256 32a224 224 0 1 0 0 448 224 224 0 0 0 0-448zm0 80a144 144 0 1 1 0 288 144 144 0 0 1 0-288zm0 80a64 64 0 1 0 0 128 64 64 0 0 0 0-128z"),
};

export const quizIcon = `<svg viewBox="0 0 48 48"><rect x="6" y="10" width="28" height="32" rx="2" fill="#f3d9bf"/><rect x="10" y="6" width="28" height="32" rx="2" fill="#fff" stroke="#e8a46b"/><path d="M14 22l6 6 14-14" stroke="#1f6fd1" stroke-width="4" fill="none"/></svg>`;
export const pageIcon = `<svg viewBox="0 0 48 48"><rect x="10" y="6" width="28" height="36" rx="2" fill="#fff" stroke="#6a737b" stroke-width="2"/><path d="M16 16h16M16 23h16M16 30h10" stroke="#6a737b" stroke-width="2"/></svg>`;
export const annIcon = `<svg viewBox="0 0 48 48"><rect x="8" y="6" width="24" height="34" rx="2" fill="#fff" stroke="#3b8a3e" stroke-width="2"/><path d="M13 14h14M13 20h14M13 26h8" stroke="#3b8a3e" stroke-width="2"/><circle cx="35" cy="32" r="5" fill="#3b8a3e"/><path d="M28 42c1-4 4-5 7-5s6 1 7 5" fill="#3b8a3e"/></svg>`;

export function toast(msg, ms = 2500) {
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), ms);
}

// Hộp thoại. buttons: [{label, cls, value}] → trả Promise với value nút được bấm (null khi đóng).
export function modal({ title, body, buttons = [{ label: "Đóng", value: null }], size = "", onOpen }) {
  return new Promise((resolve) => {
    const root = document.getElementById("modal-root");
    const el = document.createElement("div");
    el.className = "modal-back";
    el.innerHTML = `<div class="modal ${size}"><div class="modal-h"><span>${title}</span><span class="x">×</span></div>
      <div class="modal-b">${body}</div>
      <div class="modal-f">${buttons.map((b, i) => `<button class="btn ${b.cls || ""}" data-i="${i}">${b.label}</button>`).join("")}</div></div>`;
    const close = (v) => { el.remove(); resolve(v); };
    el.querySelector(".x").onclick = () => close(null);
    el.querySelectorAll(".modal-f .btn").forEach((b) => {
      b.onclick = async () => {
        const btn = buttons[b.dataset.i];
        if (btn.handler) {
          b.disabled = true;
          try {
            const ok = await btn.handler(el);
            if (ok === false) return;
          } catch (e) {
            alertIn(el, e.message || String(e));
            return;
          } finally {
            b.disabled = false;
          }
        }
        close(btn.value ?? true);
      };
    });
    root.appendChild(el);
    onOpen?.(el);
  });
}

export function alertIn(el, msg) {
  let a = el.querySelector(".modal-err");
  if (!a) {
    a = document.createElement("div");
    a.className = "alert err modal-err";
    el.querySelector(".modal-b").prepend(a);
  }
  a.textContent = msg;
}

export const confirmBox = (title, text, okLabel = "Đồng ý", cls = "btn-primary") =>
  modal({ title, size: "sm", body: `<p>${text}</p>`, buttons: [{ label: "Huỷ", value: false }, { label: okLabel, cls, value: true }] });

export function renderRich(text) {
  // Văn bản thường, giữ xuống dòng; hỗ trợ **đậm**, *nghiêng*, x^2^, H~2~O.
  return esc(text)
    .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
    .replace(/\*(.+?)\*/g, "<i>$1</i>")
    .replace(/\^(.+?)\^/g, "<sup>$1</sup>")
    .replace(/~(.+?)~/g, "<sub>$1</sub>");
}

const isImg = (s) => /^(data:image\/|https?:\/\/\S+\.(png|jpe?g|gif|webp|svg)(\?\S*)?$)/i.test(String(s || "").trim());
export const renderOption = (s) => (isImg(s) ? `<img src="${esc(String(s).trim())}" alt="">` : renderRich(s));

// Chuyển link Google Drive dạng chia sẻ sang link ảnh xem trực tiếp.
export function normalizeImageUrl(u) {
  u = String(u || "").trim();
  const m = u.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?.*id=)([\w-]+)/);
  return m ? `https://drive.google.com/thumbnail?id=${m[1]}&sz=w1000` : u;
}

// Nén ảnh tải lên thành data URL (JPEG) để lưu thẳng vào cơ sở dữ liệu.
export function fileToDataUrl(file, maxW = 900, quality = 0.8) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const s = Math.min(1, maxW / img.width);
      const c = document.createElement("canvas");
      c.width = Math.round(img.width * s);
      c.height = Math.round(img.height * s);
      const ctx = c.getContext("2d");
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.drawImage(img, 0, 0, c.width, c.height);
      resolve(c.toDataURL("image/jpeg", quality));
      URL.revokeObjectURL(img.src);
    };
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}

export function downloadXlsx(filename, sheets) {
  const wb = XLSX.utils.book_new();
  for (const [name, rows] of Object.entries(sheets)) XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(rows), name);
  XLSX.writeFile(wb, filename);
}

export async function readXlsx(file) {
  const wb = XLSX.read(await file.arrayBuffer());
  return XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1, defval: "" });
}

export const randomPassword = () => {
  const c = "abcdefghjkmnpqrstuvwxyz23456789";
  return Array.from({ length: 8 }, () => c[Math.floor(Math.random() * c.length)]).join("");
};
