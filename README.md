# App thi thử vòng Sơ loại – HNUE Olympic STEM 2026

Web app giúp học sinh **làm quen giao diện thi trực tuyến** của vòng Sơ loại (giống hệ thống `spt.hnue.edu.vn`) và luyện tập.
Đây là hệ thống **thi thử**, không liên quan tới hệ thống thi chính thức của Ban tổ chức.

## Tính năng

**Học sinh**
- Đăng nhập như thi thật: *Tên đăng nhập + Mật khẩu (có nút 👁) + Mã ca thi* → màn hình **SẴN SÀNG THI** (họ tên, SBD, thời gian, lưu ý).
- Phòng thi giống giao diện chính thức:
  - cột trái chia theo phần (Trắc nghiệm / Đúng–Sai / Trả lời ngắn);
  - chú thích *Đang làm – Đã trả lời – Chưa làm*;
  - nút **Nộp bài**, **Câu trước / Câu sau**.
- Đồng hồ đếm ngược, hết giờ thì tự nộp bài. Bài làm được lưu liên tục, lỡ tải lại trang vẫn làm tiếp được.
- Bắt buộc toàn màn hình: nếu thoát ra, app hiện hộp thoại *“Tiếp tục làm bài”*. App chặn Ctrl+C/V và chuột phải, đồng thời ghi lại số lần chuyển tab.
- Đánh dấu câu cần xem lại. Khi nộp bài, app nhắc các câu còn **chưa làm**.
- Sau khi nộp có màn hình kết quả: điểm, số câu đúng, thời gian làm, kết quả theo chủ đề.
- Xem lại từng câu:
  - đáp án đúng, đáp án đã chọn;
  - **lỗi sai** và lời giải.
- Thêm:
  - luyện tập theo chủ đề/mức độ;
  - ôn lại các câu từng làm sai;
  - biểu đồ tiến bộ;
  - đổi mật khẩu.

**Quản trị**
- Tài khoản thí sinh:
  - thêm, sửa, khoá/mở khoá, cấp lại mật khẩu, xoá;
  - tạo hàng loạt hoặc nhập từ Excel;
  - xuất danh sách tài khoản và mật khẩu ra Excel để gửi cho học sinh.
- Ngân hàng câu hỏi:
  - 3 dạng câu, có ảnh (dán link, link Google Drive hoặc tải ảnh lên) và lời giải;
  - nhập/xuất Excel, có file mẫu;
  - bảng thống kê số câu theo *chủ đề × mức độ*.
- Ca thi & ma trận đề:
  - mỗi ca thi có **mã ca thi**, thời gian làm bài, số lượt tối đa, giờ mở/đóng;
  - đặt điểm cho từng dạng câu và thang điểm quy đổi;
  - ma trận theo *dạng câu × chủ đề × mức độ × số câu*, báo ngay nếu ngân hàng còn thiếu câu.
- **Tự động tráo đề**: mỗi lượt thi bốc ngẫu nhiên các câu theo ma trận, rồi tráo thứ tự câu và thứ tự phương án A–D.
- Theo dõi kết quả:
  - danh sách lượt thi, ai đang làm bài, số lần vi phạm;
  - xếp hạng theo lần cao nhất;
  - phân bố điểm, 10 câu học sinh hay sai nhất;
  - xuất Excel.
- Nút **Nạp đề minh hoạ mẫu**: 20 câu của đề minh hoạ cấp Tiểu học 2026 (kèm hình, đáp án, lời giải) và ca thi mẫu mã `STEM-TH`, 30 phút.

## Chạy thử ngay (chế độ demo)

Không cần cài đặt gì, chỉ cần một web server tĩnh:

```bash
python3 -m http.server 8000
# mở http://localhost:8000
```

Ở chế độ demo, dữ liệu chỉ lưu trong trình duyệt của máy đang dùng. Lần đầu mở, app yêu cầu tạo tài khoản quản trị.

## Triển khai thật bằng Firebase (miễn phí, nhiều học sinh dùng chung)

1. Vào <https://console.firebase.google.com> → **Add project**.
2. **Build → Authentication → Get started** → bật **Email/Password**.
3. **Build → Firestore Database → Create database**, chọn production mode, vị trí `asia-southeast1`.
4. **Project settings → Your apps → Web (</>)** → đăng ký app → chép đoạn `firebaseConfig` vào `js/firebase-config.js`.
5. Cài Firebase CLI rồi đưa quy tắc bảo mật và trang web lên:
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase use --add          # chọn project vừa tạo
   firebase deploy             # đưa firestore.rules và web lên Firebase Hosting
   ```
   App chạy tại `https://<ten-du-an>.web.app`.
6. Mở trang web → tạo tài khoản quản trị đầu tiên → **Nạp đề minh hoạ mẫu** → tạo tài khoản thí sinh → gửi cho học sinh *tên đăng nhập, mật khẩu, mã ca thi*.

> Gói miễn phí (Spark) của Firebase đủ cho vài trăm học sinh. Ảnh tải lên được nén và lưu thẳng trong Firestore nên không cần Firebase Storage (dịch vụ trả phí).

### Lưu ý bảo mật
- Bài làm được chấm ngay trên máy học sinh, và câu hỏi (kèm đáp án) được tải về trình duyệt. Như vậy là đủ cho mục đích **thi thử, luyện tập**, nhưng không phù hợp cho thi chính thức có tính điểm.
- Mật khẩu thí sinh được lưu để admin xem và xuất danh sách. Chỉ tài khoản quản trị mới đọc được.

## Định dạng file Excel câu hỏi

| Loại | Nội dung | A | B | C | D | Đáp án | Chủ đề | Mức độ | Cấp học | Ảnh (link) | Giải thích |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TN | … | pa A | pa B | pa C | pa D | `B` | Khoa học | Nhận biết | Tiểu học | link | … |
| DS | … | ý a | ý b | ý c | ý d | `Đ,S,Đ,S` | … | … | … | | |
| TLN | … | | | | | `25` hoặc `2,5;2.5` | … | … | … | | |

- **Điểm câu Đúng/Sai** tính theo số ý đúng: 1 ý được 10%, 2 ý 25%, 3 ý 50%, 4 ý 100% số điểm của câu.
- **Định dạng chữ:** `**đậm**`, `*nghiêng*`, `x^2^` (chỉ số trên), `H~2~O` (chỉ số dưới).

## Cấu trúc mã nguồn

```
index.html            trang duy nhất (SPA, không cần build)
css/style.css         giao diện
js/app.js             đăng nhập, phòng thi, kết quả, trang học sinh
js/admin.js           các trang quản trị
js/exam.js            ma trận, tráo đề, chấm điểm
js/store.js           lưu dữ liệu: Firebase hoặc localStorage (demo)
js/sample.js          đề minh hoạ Tiểu học 2026
js/ontap.js           200 câu tài liệu ôn tập 2026 (img/ontap/)
js/ontap2.js          220 câu ôn tập mở rộng – Toán 66, Khoa học 66, Công nghệ 44, Tin học 44 (hình SVG trong img/ontap2/)
js/firebase-config.js cấu hình Firebase
firestore.rules       quy tắc bảo mật Firestore
vendor/xlsx…          thư viện đọc/ghi Excel (SheetJS)
```
