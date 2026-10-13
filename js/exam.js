// Logic tạo đề theo ma trận, tráo câu/đáp án và chấm điểm.

export const LETTERS = ["A", "B", "C", "D"];
export const DIFFICULTIES = ["Nhận biết", "Thông hiểu", "Vận dụng", "Vận dụng cao"];

export function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const matches = (q, row) =>
  (!row.topic || q.topic === row.topic) && (!row.difficulty || q.difficulty === row.difficulty) && (!row.level || !q.level || q.level === row.level);

// Kiểm tra ngân hàng có đủ câu cho từng dòng ma trận không.
export function checkMatrix(matrix, questions, level) {
  const used = new Set();
  return matrix.map((row) => {
    const pool = questions.filter((q) => !used.has(q.id) && matches(q, { ...row, level }));
    pool.slice(0, row.count).forEach((q) => used.add(q.id));
    return { ...row, available: pool.length, ok: pool.length >= row.count };
  });
}

// Bốc câu hỏi theo ma trận, không trùng lặp, tráo thứ tự câu và phương án.
export function buildItems(exam, questions) {
  const used = new Set();
  let picked = [];
  for (const row of exam.matrix || []) {
    const pool = shuffle(questions.filter((q) => !used.has(q.id) && matches(q, { ...row, level: exam.level })));
    if (pool.length < row.count)
      throw new Error(`Ngân hàng không đủ câu cho dòng ma trận "${row.topic || "Mọi chủ đề"} – ${row.difficulty || "Mọi mức độ"}" (cần ${row.count}, có ${pool.length}).`);
    pool.slice(0, row.count).forEach((q) => { used.add(q.id); picked.push(q); });
  }
  if (exam.shuffleQuestions !== false) picked = shuffle(picked);
  return picked.map((q) => ({
    qid: q.id,
    perm: exam.shuffleOptions !== false && !q.fixedOrder ? shuffle([0, 1, 2, 3]) : [0, 1, 2, 3],
  }));
}

// answers: { [index]: displayPos }. Trả về điểm và chi tiết từng câu.
export function grade(attempt, exam, qmap) {
  const ppq = Number(exam.pointsPerQuestion) || 5;
  const details = attempt.items.map((it, i) => {
    const q = qmap[it.qid];
    const pos = attempt.answers?.[i];
    const chosen = pos === undefined || pos === null ? null : it.perm[pos];
    const correct = q ? chosen === Number(q.answer) : false;
    return { qid: it.qid, chosen, correct, topic: q?.topic || "", difficulty: q?.difficulty || "" };
  });
  const nCorrect = details.filter((x) => x.correct).length;
  const marks = nCorrect * ppq;
  const totalMarks = attempt.items.length * ppq;
  const maxGrade = Number(exam.maxGrade) || totalMarks;
  return {
    correct: nCorrect,
    total: attempt.items.length,
    marks,
    totalMarks,
    grade: totalMarks ? Math.round((marks / totalMarks) * maxGrade * 100) / 100 : 0,
    maxGrade,
    details,
  };
}

export const fmtNum = (n) => Number(n || 0).toLocaleString("vi-VN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function fmtDuration(ms) {
  const s = Math.max(0, Math.round(ms / 1000));
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
  return h ? `${h} giờ ${m} phút` : m ? `${m} phút ${sec} giây` : `${sec} giây`;
}

export const fmtTime = (t) =>
  t ? new Date(t).toLocaleString("vi-VN", { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" }) : "";
