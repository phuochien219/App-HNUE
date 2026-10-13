// Tạo đề theo ma trận, tráo câu/đáp án và chấm điểm.

export const LETTERS = ["A", "B", "C", "D"];
export const TF_LABELS = ["a", "b", "c", "d"];
export const DIFFICULTIES = ["Nhận biết", "Thông hiểu", "Vận dụng", "Vận dụng cao"];
export const TYPES = {
  mcq: { name: "Trắc nghiệm", section: "CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN", code: "TN" },
  tf: { name: "Đúng/Sai", section: "CÂU TRẮC NGHIỆM ĐÚNG SAI", code: "DS" },
  short: { name: "Trả lời ngắn", section: "CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN", code: "TLN" },
};
export const TYPE_ORDER = ["mcq", "tf", "short"];
// Điểm câu Đúng/Sai theo số ý đúng (giống thang của Bộ GD&ĐT): 1 ý 10%, 2 ý 25%, 3 ý 50%, 4 ý 100%.
const TF_RATIO = [0, 0.1, 0.25, 0.5, 1];

export function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const qType = (q) => q?.type || "mcq";

const matches = (q, row, level) =>
  qType(q) === (row.type || "mcq") &&
  (!row.topic || q.topic === row.topic) &&
  (!row.difficulty || q.difficulty === row.difficulty) &&
  (!level || !q.level || q.level === level);

// Kiểm tra ngân hàng có đủ câu cho từng dòng ma trận không.
export function checkMatrix(matrix, questions, level) {
  const used = new Set();
  return (matrix || []).map((row) => {
    const pool = questions.filter((q) => !used.has(q.id) && matches(q, row, level));
    pool.slice(0, row.count).forEach((q) => used.add(q.id));
    return { ...row, available: pool.length, ok: pool.length >= Number(row.count) };
  });
}

export const pointsOf = (exam, type) =>
  Number({ mcq: exam.pointsMcq, tf: exam.pointsTf, short: exam.pointsShort }[type] ?? exam.pointsPerQuestion) || 5;

// Bốc câu theo ma trận (không trùng), gom theo phần, tráo thứ tự câu trong từng phần và tráo phương án.
export function buildItems(exam, questions) {
  const used = new Set();
  const byType = { mcq: [], tf: [], short: [] };
  for (const row of exam.matrix || []) {
    const pool = shuffle(questions.filter((q) => !used.has(q.id) && matches(q, row, exam.level)));
    const need = Number(row.count) || 0;
    if (pool.length < need)
      throw new Error(`Ngân hàng không đủ câu ${TYPES[row.type || "mcq"].name} cho dòng ma trận "${row.topic || "Mọi chủ đề"} – ${row.difficulty || "Mọi mức độ"}" (cần ${need}, có ${pool.length}).`);
    pool.slice(0, need).forEach((q) => { used.add(q.id); byType[qType(q)].push(q); });
  }
  const items = [];
  for (const t of TYPE_ORDER) {
    const list = exam.shuffleQuestions !== false ? shuffle(byType[t]) : byType[t];
    for (const q of list) {
      const n = t === "mcq" ? 4 : t === "tf" ? 4 : 0;
      const canShuffle = t === "mcq" && exam.shuffleOptions !== false && !q.fixedOrder;
      items.push({ qid: q.id, type: t, perm: n ? (canShuffle ? shuffle([0, 1, 2, 3]) : [0, 1, 2, 3]) : [] });
    }
  }
  return items;
}

export const normShort = (s) =>
  String(s ?? "").trim().toLowerCase().replace(/\s+/g, "").replace(/,/g, ".").replace(/\.0+$/, "");

export const shortAccepted = (q) => String(q.answer ?? "").split(/[;|]/).map(normShort).filter(Boolean);

export const isAnswered = (item, ans) => {
  if (ans === undefined || ans === null) return false;
  if ((item.type || "mcq") === "tf") return Array.isArray(ans) && ans.some((x) => x === true || x === false);
  if ((item.type || "mcq") === "short") return String(ans).trim() !== "";
  return true;
};

// Chấm một câu. Trả về { score (0..1), chosen } — chosen là đáp án gốc mà học sinh chọn.
export function gradeItem(item, q, ans) {
  const t = item.type || "mcq";
  if (!q) return { ratio: 0, chosen: null };
  if (t === "mcq") {
    const chosen = ans === undefined || ans === null ? null : item.perm[ans];
    return { ratio: chosen === Number(q.answer) ? 1 : 0, chosen };
  }
  if (t === "tf") {
    const key = q.answer || [];
    const arr = item.perm.map((orig, pos) => (Array.isArray(ans) ? ans[pos] : null));
    const chosen = [null, null, null, null];
    item.perm.forEach((orig, pos) => (chosen[orig] = arr[pos] ?? null));
    const k = chosen.filter((v, i) => v !== null && v === !!key[i]).length;
    return { ratio: TF_RATIO[k], chosen, nRight: k };
  }
  const v = normShort(ans);
  return { ratio: v && shortAccepted(q).includes(v) ? 1 : 0, chosen: ans ?? null };
}

export function grade(attempt, exam, qmap) {
  let marks = 0, totalMarks = 0;
  const details = attempt.items.map((it, i) => {
    const q = qmap[it.qid];
    const pts = pointsOf(exam, it.type || "mcq");
    const g = gradeItem(it, q, attempt.answers?.[i]);
    marks += g.ratio * pts;
    totalMarks += pts;
    return { r: g.ratio, s: Math.round(g.ratio * pts * 100) / 100, ch: g.chosen ?? null };
  });
  const maxGrade = Number(exam.maxGrade) || totalMarks;
  marks = Math.round(marks * 100) / 100;
  return {
    correct: details.filter((d) => d.r === 1).length,
    total: attempt.items.length,
    marks,
    totalMarks,
    grade: totalMarks ? Math.round((marks / totalMarks) * maxGrade * 100) / 100 : 0,
    maxGrade,
    details,
  };
}

export const fmtNum = (n) => {
  const v = Number(n || 0);
  return v.toLocaleString("vi-VN", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
};

export function fmtDuration(ms) {
  const s = Math.max(0, Math.round(ms / 1000));
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
  return h ? `${h} giờ ${m} phút` : m ? `${m} phút ${sec} giây` : `${sec} giây`;
}

export const fmtTime = (t) =>
  t ? new Date(t).toLocaleString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" }) : "";

export const fmtClock = (ms) => {
  const s = Math.max(0, Math.ceil(ms / 1000));
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
};
