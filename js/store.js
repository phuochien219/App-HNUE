// Lớp dữ liệu: dùng Firebase (Auth + Firestore) nếu đã cấu hình, ngược lại dùng localStorage (chế độ demo).
import { firebaseConfig, EMAIL_DOMAIN } from "./firebase-config.js";

const FB = "https://www.gstatic.com/firebasejs/10.12.2/";
const rid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
export const normUser = (u) => String(u || "").trim().toLowerCase();

/* ------------------------------------------------------------------ */
/* Chế độ demo: localStorage                                          */
/* ------------------------------------------------------------------ */
function localStore() {
  const KEY = "olympicstem-demo-v1";
  const load = () => {
    try { return JSON.parse(localStorage.getItem(KEY)) || null; } catch { return null; }
  };
  let db = load() || { users: {}, credentials: {}, questions: {}, exams: {}, attempts: {}, settings: {} };
  const save = () => localStorage.setItem(KEY, JSON.stringify(db));
  const clone = (x) => JSON.parse(JSON.stringify(x));
  const list = (col) => Object.entries(db[col]).map(([id, v]) => ({ id, ...clone(v) }));
  let listeners = [];
  const current = () => sessionStorage.getItem("olympicstem-uid");
  const emit = () => listeners.forEach((cb) => cb(current()));

  return {
    mode: "demo",
    async needsSetup() { return !Object.values(db.users).some((u) => u.role === "admin"); },
    async bootstrapAdmin({ username, password, name }) {
      if (!(await this.needsSetup())) throw new Error("Đã có tài khoản quản trị.");
      await this.createUser({ username, password, name, role: "admin", level: "" });
    },
    onAuth(cb) { listeners.push(cb); cb(current()); },
    async login(username, password) {
      username = normUser(username);
      const entry = Object.entries(db.users).find(([, u]) => u.username === username);
      if (!entry || db.credentials[entry[0]]?.password !== password) throw new Error("Tên đăng nhập hoặc mật khẩu không đúng.");
      sessionStorage.setItem("olympicstem-uid", entry[0]);
      emit();
    },
    async logout() { sessionStorage.removeItem("olympicstem-uid"); emit(); },
    async changePassword(oldPw, newPw) {
      const uid = current();
      if (db.credentials[uid]?.password !== oldPw) throw new Error("Mật khẩu cũ không đúng.");
      db.credentials[uid].password = newPw; save();
    },
    async getProfile(uid) { return db.users[uid] ? { id: uid, ...clone(db.users[uid]) } : null; },
    async listUsers() { return list("users"); },
    async listCredentials() { return list("credentials"); },
    async createUser({ username, password, ...rest }) {
      username = normUser(username);
      if (Object.values(db.users).some((u) => u.username === username)) throw new Error(`Tên đăng nhập "${username}" đã tồn tại.`);
      const uid = rid();
      db.users[uid] = { username, active: true, createdAt: Date.now(), role: "student", ...rest };
      db.credentials[uid] = { username, password };
      save();
      return uid;
    },
    async updateUser(uid, patch) { Object.assign(db.users[uid], patch); save(); },
    async resetPassword(uid, password) { db.credentials[uid].password = password; save(); return uid; },
    async deleteUser(uid) { delete db.users[uid]; delete db.credentials[uid]; save(); },
    async listQuestions() { return list("questions"); },
    async saveQuestion(q) { const id = q.id || rid(); const { id: _, ...d } = q; db.questions[id] = d; save(); return id; },
    async addQuestions(arr) { arr.forEach((q) => (db.questions[rid()] = q)); save(); },
    async deleteQuestion(id) { delete db.questions[id]; save(); },
    async listExams() { return list("exams"); },
    async saveExam(e) { const id = e.id || rid(); const { id: _, ...d } = e; db.exams[id] = d; save(); return id; },
    async deleteExam(id) { delete db.exams[id]; save(); },
    async createAttempt(a) { const id = rid(); db.attempts[id] = a; save(); return id; },
    async updateAttempt(id, patch) { Object.assign(db.attempts[id], clone(patch)); save(); },
    async getAttempt(id) { return db.attempts[id] ? { id, ...clone(db.attempts[id]) } : null; },
    async listAttempts(filter = {}) {
      return list("attempts").filter((a) => Object.entries(filter).every(([k, v]) => a[k] === v));
    },
    async deleteAttempt(id) { delete db.attempts[id]; save(); },
    async getSettings() { return clone(db.settings); },
    async saveSettings(s) { db.settings = { ...db.settings, ...s }; save(); },
    exportAll() { return clone(db); },
    importAll(data) { db = data; save(); },
  };
}

/* ------------------------------------------------------------------ */
/* Firebase                                                            */
/* ------------------------------------------------------------------ */
async function firebaseStore() {
  const [{ initializeApp, deleteApp }, A, F] = await Promise.all([
    import(FB + "firebase-app.js"),
    import(FB + "firebase-auth.js"),
    import(FB + "firebase-firestore.js"),
  ]);
  const app = initializeApp(firebaseConfig);
  const auth = A.getAuth(app);
  const fs = F.getFirestore(app);
  const d = (...p) => F.doc(fs, ...p);
  const all = async (col, ...q) =>
    (await F.getDocs(q.length ? F.query(F.collection(fs, col), ...q) : F.collection(fs, col))).docs.map((x) => ({ id: x.id, ...x.data() }));
  let bootstrapping = false, authCb = null;
  const emailOf = (username) => `${username}.${rid().slice(0, 6)}@${EMAIL_DOMAIN}`;

  // Tạo tài khoản Auth bằng một app phụ để admin không bị đăng xuất.
  async function createAuthUser(email, password) {
    const sec = initializeApp(firebaseConfig, "sec-" + rid());
    try {
      const cred = await A.createUserWithEmailAndPassword(A.getAuth(sec), email, password);
      return cred.user.uid;
    } catch (e) {
      if (e.code === "auth/weak-password") throw new Error("Mật khẩu phải có ít nhất 6 ký tự.");
      throw e;
    } finally {
      await deleteApp(sec);
    }
  }

  const store = {
    mode: "firebase",
    async needsSetup() { return !(await F.getDoc(d("meta", "admin"))).exists(); },
    async bootstrapAdmin({ username, password, name }) {
      username = normUser(username);
      const email = emailOf(username);
      bootstrapping = true;
      const cred = await A.createUserWithEmailAndPassword(auth, email, password).catch((e) => {
        bootstrapping = false;
        throw e;
      });
      const uid = cred.user.uid;
      const b = F.writeBatch(fs);
      b.set(d("meta", "admin"), { uid });
      b.set(d("users", uid), { username, name, role: "admin", level: "", active: true, createdAt: Date.now() });
      b.set(d("logins", username), { email, uid });
      b.set(d("credentials", uid), { username, password });
      await b.commit().finally(() => (bootstrapping = false));
      authCb?.(uid);
    },
    onAuth(cb) {
      authCb = cb;
      A.onAuthStateChanged(auth, (u) => !bootstrapping && cb(u ? u.uid : null));
    },
    async login(username, password) {
      username = normUser(username);
      const snap = await F.getDoc(d("logins", username));
      if (!snap.exists()) throw new Error("Tên đăng nhập hoặc mật khẩu không đúng.");
      try {
        await A.signInWithEmailAndPassword(auth, snap.data().email, password);
      } catch {
        throw new Error("Tên đăng nhập hoặc mật khẩu không đúng.");
      }
    },
    logout: () => A.signOut(auth),
    async changePassword(oldPw, newPw) {
      const u = auth.currentUser;
      await A.reauthenticateWithCredential(u, A.EmailAuthProvider.credential(u.email, oldPw)).catch(() => {
        throw new Error("Mật khẩu cũ không đúng.");
      });
      await A.updatePassword(u, newPw);
      await F.setDoc(d("credentials", u.uid), { password: newPw }, { merge: true });
    },
    async getProfile(uid) { const s = await F.getDoc(d("users", uid)); return s.exists() ? { id: uid, ...s.data() } : null; },
    listUsers: () => all("users"),
    listCredentials: () => all("credentials"),
    async createUser({ username, password, ...rest }) {
      username = normUser(username);
      if ((await F.getDoc(d("logins", username))).exists()) throw new Error(`Tên đăng nhập "${username}" đã tồn tại.`);
      const email = emailOf(username);
      const uid = await createAuthUser(email, password);
      const b = F.writeBatch(fs);
      b.set(d("users", uid), { username, active: true, createdAt: Date.now(), role: "student", ...rest });
      b.set(d("logins", username), { email, uid });
      b.set(d("credentials", uid), { username, password });
      await b.commit();
      return uid;
    },
    updateUser: (uid, patch) => F.updateDoc(d("users", uid), patch),
    // Không đổi được mật khẩu người khác từ trình duyệt → tạo tài khoản Auth mới và chuyển dữ liệu sang.
    async resetPassword(uid, password) {
      const prof = await store.getProfile(uid);
      const email = emailOf(prof.username);
      const newUid = await createAuthUser(email, password);
      const { id, ...data } = prof;
      const b = F.writeBatch(fs);
      b.set(d("users", newUid), data);
      b.set(d("logins", prof.username), { email, uid: newUid });
      b.set(d("credentials", newUid), { username: prof.username, password });
      b.delete(d("users", uid));
      b.delete(d("credentials", uid));
      for (const a of await all("attempts", F.where("uid", "==", uid))) b.update(d("attempts", a.id), { uid: newUid });
      await b.commit();
      return newUid;
    },
    async deleteUser(uid) {
      const prof = await store.getProfile(uid);
      const b = F.writeBatch(fs);
      b.delete(d("users", uid));
      b.delete(d("credentials", uid));
      if (prof) b.delete(d("logins", prof.username));
      await b.commit();
    },
    listQuestions: () => all("questions"),
    async saveQuestion(q) {
      const { id, ...data } = q;
      if (id) { await F.setDoc(d("questions", id), data); return id; }
      return (await F.addDoc(F.collection(fs, "questions"), data)).id;
    },
    async addQuestions(arr) {
      for (let i = 0; i < arr.length; i += 400) {
        const b = F.writeBatch(fs);
        arr.slice(i, i + 400).forEach((q) => b.set(F.doc(F.collection(fs, "questions")), q));
        await b.commit();
      }
    },
    deleteQuestion: (id) => F.deleteDoc(d("questions", id)),
    listExams: () => all("exams"),
    async saveExam(e) {
      const { id, ...data } = e;
      if (id) { await F.setDoc(d("exams", id), data); return id; }
      return (await F.addDoc(F.collection(fs, "exams"), data)).id;
    },
    deleteExam: (id) => F.deleteDoc(d("exams", id)),
    async createAttempt(a) { return (await F.addDoc(F.collection(fs, "attempts"), a)).id; },
    updateAttempt: (id, patch) => F.updateDoc(d("attempts", id), patch),
    async getAttempt(id) { const s = await F.getDoc(d("attempts", id)); return s.exists() ? { id, ...s.data() } : null; },
    listAttempts: (filter = {}) => all("attempts", ...Object.entries(filter).map(([k, v]) => F.where(k, "==", v))),
    deleteAttempt: (id) => F.deleteDoc(d("attempts", id)),
    async getSettings() { const s = await F.getDoc(d("meta", "settings")); return s.exists() ? s.data() : {}; },
    saveSettings: (s) => F.setDoc(d("meta", "settings"), s, { merge: true }),
  };
  return store;
}

export const store = firebaseConfig ? await firebaseStore() : localStore();
