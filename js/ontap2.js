// 220 câu ôn tập MỞ RỘNG – HNUE Olympic STEM 2026 – Tiểu học (Toán 30%, Khoa học 30%, Công nghệ 20%, Tin học 20%).
// Nội dung rộng hơn bộ ôn tập theo dạng bài; hình minh hoạ SVG trong img/ontap2/. Sửa câu hỏi trong mục Ngân hàng câu hỏi của app.
export const ONTAP2_QUESTIONS = [
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Biểu đồ cột",
  "source": "Ôn tập mở rộng 2026 – Câu 1",
  "content": "Biểu đồ bên cho biết số quyển sách lớp 5A đọc được mỗi ngày trong tuần. Cả tuần lớp 5A đọc được bao nhiêu quyển sách?",
  "options": [
   "58 quyển",
   "60 quyển",
   "62 quyển",
   "54 quyển"
  ],
  "answer": 1,
  "explanation": "Cộng số sách của 5 ngày: 12 + 15 + 9 + 18 + 6 = 60 (quyển).\nMẹo: cộng các cặp tròn chục trước: 12 + 18 = 30; 15 + 9 + 6 = 30; 30 + 30 = 60.",
  "image": "img/ontap2/t_sach.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Biểu đồ cột",
  "source": "Ôn tập mở rộng 2026 – Câu 2",
  "content": "Theo biểu đồ bên, ngày đọc nhiều sách nhất đọc nhiều hơn ngày đọc ít sách nhất bao nhiêu quyển?",
  "options": [
   "12 quyển",
   "9 quyển",
   "6 quyển",
   "3 quyển"
  ],
  "answer": 0,
  "explanation": "Ngày đọc nhiều nhất là Thứ Năm: 18 quyển; ngày đọc ít nhất là Thứ Sáu: 6 quyển.\n18 − 6 = 12 (quyển).",
  "image": "img/ontap2/t_sach.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Biểu đồ cột – Trung bình cộng",
  "source": "Ôn tập mở rộng 2026 – Câu 3",
  "content": "Theo biểu đồ bên, trung bình mỗi ngày lớp 5A đọc được bao nhiêu quyển sách?",
  "options": [
   "15 quyển",
   "10 quyển",
   "11 quyển",
   "12 quyển"
  ],
  "answer": 3,
  "explanation": "Tổng số sách: 12 + 15 + 9 + 18 + 6 = 60 quyển. Có 5 ngày nên trung bình mỗi ngày: 60 : 5 = 12 (quyển).",
  "image": "img/ontap2/t_sach.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Nhận biết",
  "lesson": "Xem đồng hồ",
  "source": "Ôn tập mở rộng 2026 – Câu 4",
  "content": "Đồng hồ bên chỉ mấy giờ?",
  "options": [
   "8 giờ 20 phút",
   "3 giờ 20 phút",
   "3 giờ 40 phút (4 giờ kém 20 phút)",
   "4 giờ 40 phút"
  ],
  "answer": 2,
  "explanation": "Kim ngắn (kim giờ) nằm giữa số 3 và số 4 → đã qua 3 giờ. Kim dài (kim phút) chỉ số 8 → 8 × 5 = 40 phút. Vậy là 3 giờ 40 phút, hay 4 giờ kém 20 phút.\nLỗi dễ mắc: đọc nhầm kim giờ và kim phút (thành 8 giờ 20 phút).",
  "image": "img/ontap2/t_clock1.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Thời gian",
  "source": "Ôn tập mở rộng 2026 – Câu 5",
  "content": "Bạn Na bắt đầu làm bài tập lúc đồng hồ chỉ như hình bên (buổi tối). Na làm bài hết 50 phút. Na làm xong lúc mấy giờ?",
  "options": [
   "8 giờ 15 phút",
   "7 giờ 55 phút",
   "8 giờ 5 phút",
   "8 giờ 25 phút"
  ],
  "answer": 2,
  "explanation": "Đồng hồ chỉ 7 giờ 15 phút. 7 giờ 15 phút + 50 phút = 7 giờ 65 phút = 8 giờ 5 phút (vì 60 phút = 1 giờ).",
  "image": "img/ontap2/t_clock2.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Chu vi hình chữ nhật",
  "source": "Ôn tập mở rộng 2026 – Câu 6",
  "content": "Vườn rau hình chữ nhật có kích thước như hình bên. Người ta rào xung quanh vườn. Hàng rào dài bao nhiêu mét?",
  "options": [
   "40 m",
   "26 m",
   "13 m",
   "30 m"
  ],
  "answer": 1,
  "explanation": "Rào xung quanh là tính chu vi: (8 + 5) × 2 = 26 (m).\nLỗi dễ mắc: tính diện tích 8 × 5 = 40 hoặc quên nhân 2 (13 m).",
  "image": "img/ontap2/t_vuon.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Diện tích – Phân số",
  "source": "Ôn tập mở rộng 2026 – Câu 7",
  "content": "Vườn rau ở hình bên có 3/4 diện tích dùng để trồng rau cải. Diện tích trồng rau cải là bao nhiêu?",
  "options": [
   "30 m²",
   "10 m²",
   "40 m²",
   "20 m²"
  ],
  "answer": 0,
  "explanation": "Diện tích vườn: 8 × 5 = 40 (m²). Diện tích trồng rau cải: 40 × 3 : 4 = 30 (m²).",
  "image": "img/ontap2/t_vuon.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Diện tích hình ghép",
  "source": "Ôn tập mở rộng 2026 – Câu 8",
  "content": "Một miếng bìa có hình dạng và kích thước như hình bên. Diện tích miếng bìa là bao nhiêu?",
  "options": [
   "60 cm²",
   "36 cm²",
   "52 cm²",
   "48 cm²"
  ],
  "answer": 3,
  "explanation": "Coi miếng bìa là hình chữ nhật 10 cm × 6 cm bị cắt đi một góc hình chữ nhật 4 cm × 3 cm.\n10 × 6 − 4 × 3 = 60 − 12 = 48 (cm²).\nCách khác: chia thành hình 6 × 6 = 36 cm² và hình 4 × 3 = 12 cm²; 36 + 12 = 48 cm².",
  "image": "img/ontap2/t_lshape.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng cao",
  "lesson": "Chu vi hình ghép",
  "source": "Ôn tập mở rộng 2026 – Câu 9",
  "content": "Chu vi của miếng bìa ở hình bên là bao nhiêu?",
  "options": [
   "28 cm",
   "36 cm",
   "48 cm",
   "32 cm"
  ],
  "answer": 3,
  "explanation": "Cộng độ dài tất cả các cạnh: 10 + 6 + 6 + 3 + 4 + 3 = 32 (cm).\nNhận xét: “dịch” hai cạnh của góc bị cắt ra ngoài sẽ được đúng hình chữ nhật 10 × 6, nên chu vi bằng (10 + 6) × 2 = 32 cm – cắt góc không làm đổi chu vi.",
  "image": "img/ontap2/t_lshape.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Hình khối",
  "source": "Ôn tập mở rộng 2026 – Câu 10",
  "content": "Hình bên được xếp từ các khối lập phương bằng nhau. Cần thêm ít nhất bao nhiêu khối nữa để được một khối hộp chữ nhật dài 3 khối, rộng 1 khối và cao 3 khối?",
  "options": [
   "6 khối",
   "9 khối",
   "3 khối",
   "2 khối"
  ],
  "answer": 2,
  "explanation": "Hình đang có 3 + 2 + 1 = 6 khối. Khối hộp 3 × 1 × 3 cần 9 khối. Cần thêm 9 − 6 = 3 (khối).",
  "image": "img/ontap2/t_stair.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Hình khối",
  "source": "Ôn tập mở rộng 2026 – Câu 11",
  "content": "Hình bên được xếp từ các khối lập phương; mỗi khối ở tầng trên đều có một khối đỡ ngay bên dưới. Hình có tất cả bao nhiêu khối lập phương?",
  "options": [
   "4 khối",
   "5 khối",
   "6 khối",
   "3 khối"
  ],
  "answer": 1,
  "explanation": "Tầng dưới có 2 × 2 = 4 khối. Tầng trên có 1 khối. Tổng: 4 + 1 = 5 (khối).",
  "image": "img/ontap2/t_cubes5.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Nhận biết",
  "lesson": "Phân số",
  "source": "Ôn tập mở rộng 2026 – Câu 12",
  "content": "Phân số chỉ phần đã tô màu của hình tròn bên là:",
  "options": [
   "3/8",
   "5/8",
   "3/5",
   "8/3"
  ],
  "answer": 0,
  "explanation": "Hình tròn được chia thành 8 phần bằng nhau, đã tô màu 3 phần → 3/8.\nLỗi dễ mắc: lấy số phần tô màu chia cho số phần không tô (3/5).",
  "image": "img/ontap2/t_frac1.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Phân số bằng nhau",
  "source": "Ôn tập mở rộng 2026 – Câu 13",
  "content": "Phân số nào dưới đây bằng phân số chỉ phần đã tô màu của hình bên?",
  "options": [
   "2/3",
   "3/4",
   "4/10",
   "1/3"
  ],
  "answer": 0,
  "explanation": "Hình chia 6 phần bằng nhau, tô 4 phần → 4/6. Rút gọn: 4/6 = (4 : 2)/(6 : 2) = 2/3.",
  "image": "img/ontap2/t_frac2.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Quy luật hình",
  "source": "Ôn tập mở rộng 2026 – Câu 14",
  "content": "Các chấm tròn được xếp thành hình tam giác theo quy luật như hình bên. Hình thứ 6 có bao nhiêu chấm tròn?",
  "options": [
   "15 chấm",
   "28 chấm",
   "18 chấm",
   "21 chấm"
  ],
  "answer": 3,
  "explanation": "Hình 1: 1 chấm; hình 2: 1 + 2 = 3; hình 3: 1 + 2 + 3 = 6; hình 4: 10.\nHình 6: 1 + 2 + 3 + 4 + 5 + 6 = 21 (chấm).",
  "image": "img/ontap2/t_dots.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Quy luật – Ghép bàn",
  "source": "Ôn tập mở rộng 2026 – Câu 15",
  "content": "Lớp học ghép các bàn vuông thành một hàng dài như hình bên, mỗi chỗ trống quanh bàn đặt 1 ghế. Nếu ghép 10 bàn thì đặt được bao nhiêu ghế?",
  "options": [
   "40 ghế",
   "20 ghế",
   "22 ghế",
   "24 ghế"
  ],
  "answer": 2,
  "explanation": "Mỗi bàn có 2 ghế ở hai cạnh dài (trên và dưới), thêm 2 ghế ở hai đầu hàng. 10 bàn: 10 × 2 + 2 = 22 (ghế).\nLỗi dễ mắc: tính 10 × 4 = 40, quên rằng chỗ hai bàn ghép vào nhau không đặt được ghế.",
  "image": "img/ontap2/t_tables.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Khối lượng – Cân đĩa",
  "source": "Ôn tập mở rộng 2026 – Câu 16",
  "content": "Cân đĩa ở hình bên đang thăng bằng. Hai quả táo nặng bằng nhau. Mỗi quả táo nặng bao nhiêu gam?",
  "options": [
   "250 g",
   "200 g",
   "300 g",
   "150 g"
  ],
  "answer": 1,
  "explanation": "Đĩa trái: 2 quả táo + quả cân 100 g; đĩa phải: quả cân 500 g.\n2 quả táo nặng: 500 − 100 = 400 (g). Mỗi quả: 400 : 2 = 200 (g).",
  "image": "img/ontap2/t_balance.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Số thập phân trên tia số",
  "source": "Ôn tập mở rộng 2026 – Câu 17",
  "content": "Mũi tên trên tia số ở hình bên chỉ vào số nào?",
  "options": [
   "0,3",
   "0,6",
   "3,5",
   "0,5"
  ],
  "answer": 1,
  "explanation": "Đoạn từ 0 đến 1 chia thành 5 phần bằng nhau, mỗi phần là 1 : 5 = 0,2. Mũi tên ở vạch thứ 3: 3 × 0,2 = 0,6.\nLỗi dễ mắc: nghĩ mỗi vạch là 0,1 (ra 0,3).",
  "image": "img/ontap2/t_numline.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Tỉ lệ bản đồ",
  "source": "Ôn tập mở rộng 2026 – Câu 18",
  "content": "Trên bản đồ tỉ lệ 1 : 1000, quãng đường từ cổng trường đến nhà văn hoá đo được 5 cm. Quãng đường thật dài bao nhiêu mét?",
  "options": [
   "50 m",
   "5 m",
   "500 m",
   "5000 m"
  ],
  "answer": 0,
  "explanation": "Tỉ lệ 1 : 1000 nghĩa là 1 cm trên bản đồ ứng với 1000 cm ngoài thực tế.\n5 × 1000 = 5000 (cm) = 50 (m)."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Thể tích hình hộp chữ nhật",
  "source": "Ôn tập mở rộng 2026 – Câu 19",
  "content": "Hộp quà hình hộp chữ nhật có kích thước như hình bên. Thể tích hộp quà là bao nhiêu?",
  "options": [
   "12 cm³",
   "47 cm³",
   "120 cm³",
   "60 cm³"
  ],
  "answer": 3,
  "explanation": "Thể tích hình hộp chữ nhật = chiều dài × chiều rộng × chiều cao = 5 × 4 × 3 = 60 (cm³).\nLỗi dễ mắc: cộng 5 + 4 + 3 = 12.",
  "image": "img/ontap2/t_box.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng cao",
  "lesson": "Thể tích – Đổi đơn vị",
  "source": "Ôn tập mở rộng 2026 – Câu 20",
  "content": "Bể cá hình hộp chữ nhật dài 60 cm, rộng 40 cm, cao 50 cm. Mực nước trong bể cao 30 cm (như hình). Trong bể có bao nhiêu lít nước?",
  "options": [
   "120 lít",
   "7,2 lít",
   "72 lít",
   "720 lít"
  ],
  "answer": 2,
  "explanation": "Thể tích nước = 60 × 40 × 30 = 72 000 (cm³). Vì 1 lít = 1 dm³ = 1000 cm³ nên 72 000 cm³ = 72 lít.\nLỗi dễ mắc: dùng chiều cao của bể (50 cm) thay cho chiều cao mực nước – ra 120 lít là thể tích cả bể.",
  "image": "img/ontap2/t_aqua.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Nhận biết",
  "lesson": "Đo độ dài",
  "source": "Ôn tập mở rộng 2026 – Câu 21",
  "content": "Chiếc bút chì ở hình bên dài bao nhiêu xăng-ti-mét?",
  "options": [
   "9,5 cm",
   "7 cm",
   "7,5 cm",
   "8 cm"
  ],
  "answer": 2,
  "explanation": "Đầu bút ở vạch 2 cm, ngòi bút ở vạch 9,5 cm (giữa 9 và 10). Độ dài: 9,5 − 2 = 7,5 (cm).\nLỗi dễ mắc: đọc luôn số ở đầu ngòi (9,5 cm) mà quên bút không bắt đầu từ vạch 0.",
  "image": "img/ontap2/t_ruler.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Lịch – Ngày trong tuần",
  "source": "Ôn tập mở rộng 2026 – Câu 22",
  "content": "Ngày 1 tháng 6 năm nay là thứ Hai. Hỏi ngày 20 tháng 6 cùng năm là thứ mấy?",
  "options": [
   "Thứ Sáu",
   "Thứ Bảy",
   "Chủ nhật",
   "Thứ Năm"
  ],
  "answer": 1,
  "explanation": "Từ ngày 1 đến ngày 20 cách nhau 19 ngày. 19 = 2 × 7 + 5, tức là 2 tuần và 5 ngày.\nSau 2 tuần vẫn là thứ Hai; thêm 5 ngày: thứ Ba, Tư, Năm, Sáu, Bảy → thứ Bảy.\nKiểm tra: các ngày 1, 8, 15 đều là thứ Hai; ngày 20 = 15 + 5 → thứ Bảy."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Tiền Việt Nam",
  "source": "Ôn tập mở rộng 2026 – Câu 23",
  "content": "Mai mua 3 quyển vở, mỗi quyển giá 8 500 đồng và 1 chiếc bút giá 6 000 đồng. Mai đưa cô bán hàng tờ 50 000 đồng. Cô trả lại Mai bao nhiêu tiền?",
  "options": [
   "18 500 đồng",
   "19 500 đồng",
   "28 500 đồng",
   "17 500 đồng"
  ],
  "answer": 0,
  "explanation": "Tiền 3 quyển vở: 8 500 × 3 = 25 500 (đồng). Tổng tiền: 25 500 + 6 000 = 31 500 (đồng).\nTiền trả lại: 50 000 − 31 500 = 18 500 (đồng)."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Tỉ số phần trăm",
  "source": "Ôn tập mở rộng 2026 – Câu 24",
  "content": "Lớp 5B có 40 học sinh, trong đó 35% số học sinh tham gia câu lạc bộ STEM. Lớp 5B có bao nhiêu học sinh tham gia câu lạc bộ STEM?",
  "options": [
   "35 học sinh",
   "26 học sinh",
   "12 học sinh",
   "14 học sinh"
  ],
  "answer": 3,
  "explanation": "35% của 40 là: 40 × 35 : 100 = 14 (học sinh).\nLỗi dễ mắc: tính 40 − 14 = 26 là số học sinh KHÔNG tham gia."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Chuyển động đều",
  "source": "Ôn tập mở rộng 2026 – Câu 25",
  "content": "Bác Ba đi xe đạp với vận tốc 12 km/giờ. Bác đi quãng đường 18 km hết bao nhiêu thời gian?",
  "options": [
   "1 giờ 50 phút",
   "1 giờ 18 phút",
   "2 giờ",
   "1 giờ 30 phút"
  ],
  "answer": 3,
  "explanation": "Thời gian = quãng đường : vận tốc = 18 : 12 = 1,5 (giờ). 1,5 giờ = 1 giờ 30 phút (vì 0,5 giờ = 30 phút).\nLỗi dễ mắc: đổi 1,5 giờ thành 1 giờ 50 phút."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Tổng – Hiệu",
  "source": "Ôn tập mở rộng 2026 – Câu 26",
  "content": "Hai lớp 5A và 5B trồng được tất cả 68 cây. Lớp 5A trồng nhiều hơn lớp 5B 8 cây. Lớp 5A trồng được bao nhiêu cây?",
  "options": [
   "30 cây",
   "34 cây",
   "38 cây",
   "76 cây"
  ],
  "answer": 2,
  "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (68 + 8) : 2 = 38 (cây). Lớp 5B: 38 − 8 = 30 cây.\nThử lại: 38 + 30 = 68; 38 − 30 = 8 ✓."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Tổng – Tỉ",
  "source": "Ôn tập mở rộng 2026 – Câu 27",
  "content": "Một sợi dây dài 45 cm được cắt thành hai đoạn, đoạn ngắn bằng 2/3 đoạn dài. Đoạn dài dài bao nhiêu xăng-ti-mét?",
  "options": [
   "18 cm",
   "27 cm",
   "30 cm",
   "15 cm"
  ],
  "answer": 1,
  "explanation": "Coi đoạn ngắn là 2 phần, đoạn dài là 3 phần; tổng 5 phần bằng nhau ứng với 45 cm.\nMột phần: 45 : 5 = 9 (cm). Đoạn dài: 9 × 3 = 27 (cm); đoạn ngắn 18 cm."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng cao",
  "lesson": "Suy luận – Đếm",
  "source": "Ôn tập mở rộng 2026 – Câu 28",
  "content": "Năm bạn gặp nhau, mỗi bạn bắt tay mỗi bạn khác đúng một lần. Có tất cả bao nhiêu cái bắt tay?",
  "options": [
   "10 cái",
   "20 cái",
   "25 cái",
   "5 cái"
  ],
  "answer": 0,
  "explanation": "Bạn thứ nhất bắt tay 4 bạn còn lại; bạn thứ hai bắt tay thêm 3 bạn mới; bạn thứ ba thêm 2; bạn thứ tư thêm 1.\n4 + 3 + 2 + 1 = 10 (cái).\nLỗi dễ mắc: tính 5 × 4 = 20 – như vậy mỗi cái bắt tay bị đếm 2 lần."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Trồng cây trên đường thẳng",
  "source": "Ôn tập mở rộng 2026 – Câu 29",
  "content": "Người ta trồng cây trên một hàng dài 50 m, cây nọ cách cây kia 5 m, ở cả hai đầu đều trồng cây (như hình). Cần bao nhiêu cây?",
  "options": [
   "11 cây",
   "10 cây",
   "12 cây",
   "9 cây"
  ],
  "answer": 0,
  "explanation": "Số khoảng cách: 50 : 5 = 10 (khoảng). Trồng cả hai đầu thì số cây nhiều hơn số khoảng 1: 10 + 1 = 11 (cây).",
  "image": "img/ontap2/t_trees.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Nhận biết",
  "lesson": "Trục đối xứng",
  "source": "Ôn tập mở rộng 2026 – Câu 30",
  "content": "Chữ cái in hoa nào dưới đây KHÔNG có trục đối xứng?",
  "options": [
   "A",
   "H",
   "M",
   "N"
  ],
  "answer": 3,
  "explanation": "Chữ A và M có trục đối xứng dọc; chữ H có cả trục dọc và trục ngang. Chữ N không có trục đối xứng nào (gấp theo bất kì đường nào hai nửa cũng không trùng nhau)."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Góc vuông",
  "source": "Ôn tập mở rộng 2026 – Câu 31",
  "content": "Hình tứ giác ABCD ở bên có bao nhiêu góc vuông?",
  "options": [
   "1 góc",
   "3 góc",
   "2 góc",
   "4 góc"
  ],
  "answer": 2,
  "explanation": "Góc đỉnh A và góc đỉnh D là góc vuông (có kí hiệu ô vuông). Góc B là góc tù, góc C là góc nhọn. Vậy có 2 góc vuông – đây là hình thang vuông.",
  "image": "img/ontap2/t_rtrap.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Đếm hình tam giác",
  "source": "Ôn tập mở rộng 2026 – Câu 32",
  "content": "Hình bên có tất cả bao nhiêu hình tam giác?",
  "options": [
   "3 hình",
   "6 hình",
   "4 hình",
   "5 hình"
  ],
  "answer": 1,
  "explanation": "Đáy lớn bị chia thành 3 đoạn bởi 2 đường kẻ từ đỉnh. Mỗi hình tam giác ứng với một cách chọn đoạn trên đáy gồm các phần liền nhau:\n– 3 tam giác nhỏ (1 phần), 2 tam giác ghép 2 phần, 1 tam giác lớn (3 phần).\n3 + 2 + 1 = 6 (hình).",
  "image": "img/ontap2/t_tri.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Đếm hình vuông",
  "source": "Ôn tập mở rộng 2026 – Câu 33",
  "content": "Hình bên có tất cả bao nhiêu hình vuông?",
  "options": [
   "4 hình",
   "5 hình",
   "8 hình",
   "9 hình"
  ],
  "answer": 1,
  "explanation": "Có 4 hình vuông nhỏ và 1 hình vuông lớn bao ngoài: 4 + 1 = 5 (hình).",
  "image": "img/ontap2/t_grid22.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "So sánh số thập phân",
  "source": "Ôn tập mở rộng 2026 – Câu 34",
  "content": "Dãy số nào được sắp xếp theo thứ tự từ bé đến lớn?",
  "options": [
   "2,05; 2,45; 2,5; 2,505",
   "2,5; 2,505; 2,45; 2,05",
   "2,05; 2,5; 2,45; 2,505",
   "2,45; 2,05; 2,5; 2,505"
  ],
  "answer": 0,
  "explanation": "Viết cùng số chữ số ở phần thập phân để so sánh: 2,050; 2,450; 2,500; 2,505. Từ bé đến lớn: 2,05 < 2,45 < 2,5 < 2,505.\nLỗi dễ mắc: nghĩ số có nhiều chữ số hơn ở phần thập phân thì lớn hơn (2,45 > 2,5 là sai)."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Nhận biết",
  "lesson": "Đổi đơn vị khối lượng",
  "source": "Ôn tập mở rộng 2026 – Câu 35",
  "content": "3 tấn 50 kg = … kg. Số thích hợp điền vào chỗ chấm là:",
  "options": [
   "3500",
   "350",
   "30 050",
   "3050"
  ],
  "answer": 3,
  "explanation": "1 tấn = 1000 kg nên 3 tấn = 3000 kg. 3000 kg + 50 kg = 3050 kg."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Nhận biết",
  "lesson": "Đổi đơn vị thời gian",
  "source": "Ôn tập mở rộng 2026 – Câu 36",
  "content": "2,5 giờ = … phút. Số thích hợp điền vào chỗ chấm là:",
  "options": [
   "250",
   "130",
   "150",
   "125"
  ],
  "answer": 2,
  "explanation": "1 giờ = 60 phút. 2,5 × 60 = 150 (phút). (2 giờ = 120 phút; 0,5 giờ = 30 phút.)"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Chu vi hình tròn",
  "source": "Ôn tập mở rộng 2026 – Câu 37",
  "content": "Một chiếc đĩa hình tròn có bán kính 5 cm (như hình). Chu vi chiếc đĩa là bao nhiêu?",
  "options": [
   "15,7 cm",
   "78,5 cm",
   "31,4 cm",
   "62,8 cm"
  ],
  "answer": 2,
  "explanation": "Chu vi hình tròn = bán kính × 2 × 3,14 = 5 × 2 × 3,14 = 31,4 (cm).\nLỗi dễ mắc: tính diện tích 5 × 5 × 3,14 = 78,5.",
  "image": "img/ontap2/t_circle5.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Diện tích hình tròn",
  "source": "Ôn tập mở rộng 2026 – Câu 38",
  "content": "Một bồn hoa hình tròn có bán kính 10 dm. Diện tích bồn hoa là bao nhiêu?",
  "options": [
   "62,8 dm²",
   "314 dm²",
   "31,4 dm²",
   "628 dm²"
  ],
  "answer": 1,
  "explanation": "Diện tích hình tròn = bán kính × bán kính × 3,14 = 10 × 10 × 3,14 = 314 (dm²).\nLỗi dễ mắc: dùng công thức chu vi (62,8 dm).",
  "image": "img/ontap2/t_circle10.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Diện tích hình tam giác",
  "source": "Ôn tập mở rộng 2026 – Câu 39",
  "content": "Diện tích hình tam giác ở hình bên là bao nhiêu?",
  "options": [
   "20 cm²",
   "40 cm²",
   "13 cm²",
   "26 cm²"
  ],
  "answer": 0,
  "explanation": "Diện tích tam giác = đáy × chiều cao : 2 = 8 × 5 : 2 = 20 (cm²).\nLỗi dễ mắc: quên chia 2 (ra 40 cm²).",
  "image": "img/ontap2/t_triangle.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Diện tích hình thang",
  "source": "Ôn tập mở rộng 2026 – Câu 40",
  "content": "Diện tích hình thang ở hình bên là bao nhiêu?",
  "options": [
   "64 cm²",
   "40 cm²",
   "20 cm²",
   "32 cm²"
  ],
  "answer": 3,
  "explanation": "Diện tích hình thang = (đáy lớn + đáy bé) × chiều cao : 2 = (10 + 6) × 4 : 2 = 32 (cm²).",
  "image": "img/ontap2/t_trap.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Biểu đồ hình quạt",
  "source": "Ôn tập mở rộng 2026 – Câu 41",
  "content": "Biểu đồ hình quạt bên cho biết môn thể thao yêu thích của 40 học sinh lớp 5C. Có bao nhiêu học sinh thích bơi?",
  "options": [
   "25 học sinh",
   "20 học sinh",
   "15 học sinh",
   "10 học sinh"
  ],
  "answer": 3,
  "explanation": "Bơi chiếm 25% số học sinh. 25% của 40 là 40 × 25 : 100 = 10 (học sinh). (25% chính là 1/4: 40 : 4 = 10.)",
  "image": "img/ontap2/t_pie.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Biểu đồ tranh",
  "source": "Ôn tập mở rộng 2026 – Câu 42",
  "content": "Biểu đồ tranh bên cho biết số vỏ chai ba lớp thu gom được. Lớp 5B thu gom nhiều hơn lớp 5C bao nhiêu vỏ chai?",
  "options": [
   "3 vỏ chai",
   "30 vỏ chai",
   "15 vỏ chai",
   "10 vỏ chai"
  ],
  "answer": 2,
  "explanation": "Mỗi hình chai ứng với 5 vỏ chai. Lớp 5B có 6 hình (30 vỏ), lớp 5C có 3 hình (15 vỏ).\n30 − 15 = 15 (vỏ chai). Hoặc: (6 − 3) × 5 = 15.\nLỗi dễ mắc: chỉ đếm số hình (3) mà quên nhân với 5.",
  "image": "img/ontap2/t_picto.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Đường đi trên lưới ô vuông",
  "source": "Ôn tập mở rộng 2026 – Câu 43",
  "content": "Trên lưới ô vuông bên, bạn Bin đi từ nhà đến trường theo các đường kẻ dọc, ngang, mỗi bước đi sang 1 ô kề bên. Đường đi ngắn nhất gồm bao nhiêu bước?",
  "options": [
   "5 bước",
   "7 bước",
   "12 bước",
   "6 bước"
  ],
  "answer": 1,
  "explanation": "Trường ở bên phải nhà 4 ô và ở phía trên 3 ô. Đường ngắn nhất phải đi 4 bước sang phải và 3 bước lên trên (theo thứ tự nào cũng được): 4 + 3 = 7 (bước).",
  "image": "img/ontap2/t_map.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng cao",
  "lesson": "Suy luận – Cân đĩa",
  "source": "Ôn tập mở rộng 2026 – Câu 44",
  "content": "Có 9 viên bi giống hệt nhau, trong đó có 1 viên nặng hơn các viên khác. Dùng cân đĩa (không có quả cân), cần cân ít nhất mấy lần để chắc chắn tìm ra viên bi nặng?",
  "options": [
   "2 lần",
   "3 lần",
   "4 lần",
   "1 lần"
  ],
  "answer": 0,
  "explanation": "Lần 1: chia 9 viên thành 3 nhóm, mỗi nhóm 3 viên; đặt 2 nhóm lên 2 đĩa. Nếu cân lệch, viên nặng ở nhóm nặng hơn; nếu cân thăng bằng, viên nặng ở nhóm còn lại.\nLần 2: lấy 3 viên của nhóm đó, đặt mỗi đĩa 1 viên. Lệch → viên nặng là viên ở đĩa thấp; thăng bằng → viên còn lại.\nVậy chỉ cần 2 lần cân."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng cao",
  "lesson": "Bài toán tuổi",
  "source": "Ôn tập mở rộng 2026 – Câu 45",
  "content": "Năm nay mẹ 36 tuổi, con 8 tuổi. Sau bao nhiêu năm nữa thì tuổi mẹ gấp 3 lần tuổi con?",
  "options": [
   "6 năm",
   "4 năm",
   "8 năm",
   "10 năm"
  ],
  "answer": 0,
  "explanation": "Mẹ hơn con 36 − 8 = 28 tuổi, hiệu này không đổi theo thời gian.\nKhi tuổi mẹ gấp 3 lần tuổi con, hiệu ứng với 3 − 1 = 2 phần → tuổi con lúc đó: 28 : 2 = 14 (tuổi).\nSố năm: 14 − 8 = 6 (năm). Thử lại: mẹ 42, con 14; 42 = 3 × 14 ✓."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Trung bình cộng",
  "source": "Ôn tập mở rộng 2026 – Câu 46",
  "content": "Ba bài kiểm tra của Hà được 8, 9 và 7 điểm. Bài thứ tư Hà cần được bao nhiêu điểm để điểm trung bình cả bốn bài là 8,5?",
  "options": [
   "9 điểm",
   "8,5 điểm",
   "9,5 điểm",
   "10 điểm"
  ],
  "answer": 3,
  "explanation": "Muốn trung bình 4 bài là 8,5 thì tổng 4 bài phải là 8,5 × 4 = 34 (điểm).\nBa bài đầu được 8 + 9 + 7 = 24 (điểm). Bài thứ tư cần: 34 − 24 = 10 (điểm)."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Chia số thập phân",
  "source": "Ôn tập mở rộng 2026 – Câu 47",
  "content": "Một cuộn ruy băng dài 20 m được cắt thành các đoạn, mỗi đoạn dài 2,5 m. Cắt được bao nhiêu đoạn?",
  "options": [
   "7 đoạn",
   "10 đoạn",
   "8 đoạn",
   "50 đoạn"
  ],
  "answer": 2,
  "explanation": "20 : 2,5 = 8 (đoạn). Kiểm tra: 2,5 × 8 = 20 ✓.\nLỗi dễ mắc: nhân 20 × 2,5 = 50."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Lập số",
  "source": "Ôn tập mở rộng 2026 – Câu 48",
  "content": "Từ ba chữ số 1, 2, 3 có thể lập được bao nhiêu số có ba chữ số khác nhau?",
  "options": [
   "9 số",
   "6 số",
   "3 số",
   "27 số"
  ],
  "answer": 1,
  "explanation": "Liệt kê: 123, 132, 213, 231, 312, 321 → 6 số.\nCách tính: hàng trăm có 3 cách chọn, hàng chục còn 2 cách, hàng đơn vị còn 1 cách: 3 × 2 × 1 = 6."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Dấu hiệu chia hết",
  "source": "Ôn tập mở rộng 2026 – Câu 49",
  "content": "Số nào dưới đây chia hết cho cả 2, 3 và 5?",
  "options": [
   "125",
   "120",
   "132",
   "115"
  ],
  "answer": 1,
  "explanation": "Chia hết cho 2 và 5 thì chữ số tận cùng là 0 → chỉ có 120. Tổng các chữ số của 120 là 1 + 2 + 0 = 3, chia hết cho 3. Vậy 120 chia hết cho cả 2, 3 và 5."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Nhận biết",
  "lesson": "Phân số của một số",
  "source": "Ôn tập mở rộng 2026 – Câu 50",
  "content": "3/4 giờ bằng bao nhiêu phút?",
  "options": [
   "45 phút",
   "34 phút",
   "40 phút",
   "75 phút"
  ],
  "answer": 0,
  "explanation": "1 giờ = 60 phút. 3/4 của 60 phút là 60 : 4 × 3 = 45 (phút)."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "So sánh phân số",
  "source": "Ôn tập mở rộng 2026 – Câu 51",
  "content": "Phân số nào lớn nhất trong các phân số: 3/5; 5/8; 2/3; 7/12?",
  "options": [
   "5/8",
   "3/5",
   "7/12",
   "2/3"
  ],
  "answer": 3,
  "explanation": "Quy đồng với mẫu chung 120: 3/5 = 72/120; 5/8 = 75/120; 2/3 = 80/120; 7/12 = 70/120.\nLớn nhất là 80/120 = 2/3."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Tỉ lệ bản đồ",
  "source": "Ôn tập mở rộng 2026 – Câu 52",
  "content": "Trên bản đồ ở hình bên, quãng đường từ nhà Minh đến công viên đo được 3,5 cm. Quãng đường thật dài bao nhiêu ki-lô-mét?",
  "options": [
   "5,5 km",
   "3,5 km",
   "7 km",
   "70 km"
  ],
  "answer": 2,
  "explanation": "Theo thước tỉ lệ, 1 cm trên bản đồ ứng với 2 km. 3,5 cm ứng với 3,5 × 2 = 7 (km).",
  "image": "img/ontap2/t_mapscale.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Vận tốc",
  "source": "Ôn tập mở rộng 2026 – Câu 53",
  "content": "Một ô tô đi quãng đường 120 km hết 2 giờ 30 phút. Vận tốc của ô tô là bao nhiêu?",
  "options": [
   "60 km/giờ",
   "50 km/giờ",
   "48 km/giờ",
   "40 km/giờ"
  ],
  "answer": 2,
  "explanation": "Đổi 2 giờ 30 phút = 2,5 giờ. Vận tốc = 120 : 2,5 = 48 (km/giờ).\nLỗi dễ mắc: coi 2 giờ 30 phút là 2,3 giờ hoặc chỉ chia cho 2 giờ (60 km/giờ)."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng cao",
  "lesson": "Chuyển động ngược chiều",
  "source": "Ôn tập mở rộng 2026 – Câu 54",
  "content": "Hai bạn đi xe đạp xuất phát cùng lúc từ hai đầu A và B cách nhau 9 km, đi ngược chiều về phía nhau. Vận tốc của hai bạn là 10 km/giờ và 8 km/giờ. Sau bao lâu hai bạn gặp nhau?",
  "options": [
   "45 phút",
   "30 phút",
   "1 giờ",
   "54 phút"
  ],
  "answer": 1,
  "explanation": "Mỗi giờ hai bạn lại gần nhau thêm 10 + 8 = 18 (km).\nThời gian gặp nhau: 9 : 18 = 0,5 (giờ) = 30 phút."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng cao",
  "lesson": "Hình lập phương được sơn",
  "source": "Ôn tập mở rộng 2026 – Câu 55",
  "content": "Một khối lập phương lớn ghép từ 27 khối lập phương nhỏ như hình bên. Người ta sơn tất cả các mặt bên ngoài của khối lớn. Có bao nhiêu khối nhỏ KHÔNG được sơn mặt nào?",
  "options": [
   "1 khối",
   "0 khối",
   "8 khối",
   "6 khối"
  ],
  "answer": 0,
  "explanation": "Khối nhỏ không bị sơn phải nằm hoàn toàn bên trong, không chạm mặt ngoài nào. Bỏ đi lớp ngoài cùng, phần bên trong còn lại là khối 1 × 1 × 1 = 1 khối (ở chính giữa).",
  "image": "img/ontap2/t_cube27.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng cao",
  "lesson": "Hình lập phương được sơn",
  "source": "Ôn tập mở rộng 2026 – Câu 56",
  "content": "Với khối lập phương ở hình bên (ghép từ 27 khối nhỏ, sơn tất cả mặt ngoài), có bao nhiêu khối nhỏ được sơn đúng 3 mặt?",
  "options": [
   "12 khối",
   "6 khối",
   "4 khối",
   "8 khối"
  ],
  "answer": 3,
  "explanation": "Chỉ các khối nhỏ ở góc (đỉnh) của khối lớn mới có 3 mặt lộ ra ngoài. Hình lập phương có 8 đỉnh → 8 khối.\n(Thêm: 12 khối ở giữa các cạnh được sơn 2 mặt, 6 khối ở giữa các mặt được sơn 1 mặt, 1 khối ở trong không được sơn; 8 + 12 + 6 + 1 = 27.)",
  "image": "img/ontap2/t_cube27.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng cao",
  "lesson": "Hình khai triển của hình lập phương",
  "source": "Ôn tập mở rộng 2026 – Câu 57",
  "content": "Gấp hình bên thành một hình lập phương. Mặt nào sẽ đối diện với mặt số 1?",
  "options": [
   "Mặt số 2",
   "Mặt số 4",
   "Mặt số 6",
   "Mặt số 3"
  ],
  "answer": 3,
  "explanation": "Trong cột dọc 1 – 2 – 3 – 4, hai mặt cách nhau một ô sẽ đối diện nhau khi gấp: 1 đối diện 3, 2 đối diện 4. Hai mặt 5 và 6 ở hai bên mặt 2 nên đối diện nhau.\nVậy mặt đối diện với mặt 1 là mặt 3.",
  "image": "img/ontap2/t_net.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Quy luật dãy số",
  "source": "Ôn tập mở rộng 2026 – Câu 58",
  "content": "Tìm số tiếp theo của dãy: 2; 5; 10; 17; 26; …",
  "options": [
   "35",
   "36",
   "37",
   "39"
  ],
  "answer": 2,
  "explanation": "Hiệu hai số liên tiếp: 3, 5, 7, 9 (các số lẻ tăng dần). Hiệu tiếp theo là 11: 26 + 11 = 37.\n(Cũng có thể nhận ra: mỗi số bằng một số nhân với chính nó rồi cộng 1: 1×1+1, 2×2+1, …, 6×6+1 = 37.)"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Suy luận số",
  "source": "Ôn tập mở rộng 2026 – Câu 59",
  "content": "Tìm số lớn hơn 10, nhỏ hơn 20; biết số đó chia cho 5 dư 3 và chia cho 2 dư 1.",
  "options": [
   "18",
   "13",
   "23",
   "15"
  ],
  "answer": 1,
  "explanation": "Chia 5 dư 3 thì tận cùng là 3 hoặc 8 → trong khoảng 10 đến 20 có 13 và 18. Chia 2 dư 1 nghĩa là số lẻ → chọn 13."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Đơn vị đo dung tích",
  "source": "Ôn tập mở rộng 2026 – Câu 60",
  "content": "Một bình chứa 1,5 lít nước cam. Rót vào các cốc, mỗi cốc 250 ml. Rót được bao nhiêu cốc đầy?",
  "options": [
   "6 cốc",
   "5 cốc",
   "4 cốc",
   "60 cốc"
  ],
  "answer": 0,
  "explanation": "Đổi 1,5 lít = 1500 ml. 1500 : 250 = 6 (cốc)."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Phần trăm – Giảm giá",
  "source": "Ôn tập mở rộng 2026 – Câu 61",
  "content": "Một chiếc áo giá 200 000 đồng, nay giảm giá 15%. Giá chiếc áo sau khi giảm là bao nhiêu?",
  "options": [
   "170 000 đồng",
   "185 000 đồng",
   "30 000 đồng",
   "150 000 đồng"
  ],
  "answer": 0,
  "explanation": "Số tiền được giảm: 200 000 × 15 : 100 = 30 000 (đồng). Giá sau khi giảm: 200 000 − 30 000 = 170 000 (đồng)."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Hình vuông",
  "source": "Ôn tập mở rộng 2026 – Câu 62",
  "content": "Một hình vuông có diện tích 36 cm². Chu vi hình vuông đó là bao nhiêu?",
  "options": [
   "36 cm",
   "9 cm",
   "144 cm",
   "24 cm"
  ],
  "answer": 3,
  "explanation": "Vì 6 × 6 = 36 nên cạnh hình vuông dài 6 cm. Chu vi: 6 × 4 = 24 (cm)."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Thời gian",
  "source": "Ôn tập mở rộng 2026 – Câu 63",
  "content": "Một bộ phim dài 1 giờ 45 phút, bắt đầu chiếu lúc 19 giờ 30 phút. Bộ phim kết thúc lúc mấy giờ?",
  "options": [
   "20 giờ 15 phút",
   "21 giờ 5 phút",
   "21 giờ 15 phút",
   "20 giờ 45 phút"
  ],
  "answer": 2,
  "explanation": "19 giờ 30 phút + 1 giờ 45 phút = 20 giờ 75 phút. Vì 75 phút = 1 giờ 15 phút nên kết quả là 21 giờ 15 phút."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Biểu đồ cột",
  "source": "Ôn tập mở rộng 2026 – Câu 64",
  "content": "Theo biểu đồ bên, số cây tổ 4 trồng được gấp mấy lần số cây tổ 3?",
  "options": [
   "3 lần",
   "3,5 lần",
   "25 lần",
   "2,5 lần"
  ],
  "answer": 1,
  "explanation": "Tổ 4 trồng 35 cây, tổ 3 trồng 10 cây. 35 : 10 = 3,5 (lần).\nLỗi dễ mắc: tính hiệu 35 − 10 = 25 (đó là “nhiều hơn bao nhiêu cây”, không phải “gấp mấy lần”).",
  "image": "img/ontap2/t_caytrong.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng cao",
  "lesson": "Biểu đồ – Tỉ số phần trăm",
  "source": "Ôn tập mở rộng 2026 – Câu 65",
  "content": "Theo biểu đồ bên, số cây của tổ 2 chiếm bao nhiêu phần trăm tổng số cây cả bốn tổ trồng được?",
  "options": [
   "20%",
   "25%",
   "40%",
   "50%"
  ],
  "answer": 1,
  "explanation": "Tổng số cây: 15 + 20 + 10 + 35 = 80 (cây). Tỉ số phần trăm của tổ 2: 20 : 80 = 0,25 = 25%.",
  "image": "img/ontap2/t_caytrong.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Diện tích toàn phần hình lập phương",
  "source": "Ôn tập mở rộng 2026 – Câu 66",
  "content": "Một hộp hình lập phương có cạnh 4 cm. Diện tích toàn phần của hộp là bao nhiêu?",
  "options": [
   "96 cm²",
   "64 cm²",
   "16 cm²",
   "80 cm²"
  ],
  "answer": 0,
  "explanation": "Diện tích một mặt: 4 × 4 = 16 (cm²). Hình lập phương có 6 mặt: 16 × 6 = 96 (cm²).\nLỗi dễ mắc: tính thể tích 4 × 4 × 4 = 64 hoặc diện tích xung quanh (4 mặt) = 64 cm²."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Vòng tuần hoàn của nước",
  "source": "Ôn tập mở rộng 2026 – Câu 67",
  "content": "Hình bên mô tả vòng tuần hoàn của nước trong tự nhiên. Quá trình số 2 (hơi nước bay lên cao, gặp lạnh tạo thành mây) gọi là gì?",
  "options": [
   "Bay hơi",
   "Đông đặc",
   "Nóng chảy",
   "Ngưng tụ"
  ],
  "answer": 3,
  "explanation": "Hơi nước bay lên cao gặp không khí lạnh thì ngưng tụ thành những hạt nước rất nhỏ, tạo thành mây.\nQuá trình 1 là bay hơi (nước → hơi nước), quá trình 2 là ngưng tụ (hơi nước → nước).",
  "image": "img/ontap2/k_water.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Vòng tuần hoàn của nước",
  "source": "Ôn tập mở rộng 2026 – Câu 68",
  "content": "Trong hình bên, điều gì làm cho nước ở biển bay hơi (quá trình số 1)?",
  "options": [
   "Gió thổi mạnh làm nước biến mất",
   "Mây kéo nước lên",
   "Nhiệt từ ánh sáng Mặt Trời",
   "Mặt Trăng hút nước"
  ],
  "answer": 2,
  "explanation": "Ánh nắng Mặt Trời làm nước ở biển, sông, hồ nóng lên và bay hơi. Gió có thể giúp bay hơi nhanh hơn, nhưng nguồn nhiệt chủ yếu là Mặt Trời.",
  "image": "img/ontap2/k_water.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Vòng tuần hoàn của nước",
  "source": "Ôn tập mở rộng 2026 – Câu 69",
  "content": "Trong hình bên, quá trình số 3 và số 4 là gì?",
  "options": [
   "3: bay hơi; 4: ngưng tụ",
   "3: ngưng tụ; 4: đông đặc",
   "3: mưa rơi xuống; 4: nước chảy ra sông, biển",
   "3: tuyết tan; 4: bay hơi"
  ],
  "answer": 2,
  "explanation": "Các hạt nước trong mây lớn dần rồi rơi xuống thành mưa (3). Nước mưa chảy trên mặt đất, theo sông suối ra biển (4), rồi lại bay hơi – vòng tuần hoàn lặp lại.",
  "image": "img/ontap2/k_water.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Chuỗi thức ăn",
  "source": "Ôn tập mở rộng 2026 – Câu 70",
  "content": "Trong chuỗi thức ăn ở hình bên, sinh vật nào tự tạo ra chất dinh dưỡng (sinh vật sản xuất)?",
  "options": [
   "Chuột",
   "Cây lúa",
   "Rắn",
   "Đại bàng"
  ],
  "answer": 1,
  "explanation": "Cây xanh (cây lúa) tự tạo chất dinh dưỡng nhờ ánh sáng Mặt Trời, nước, khí các-bô-níc – đó là mắt xích đầu tiên của chuỗi thức ăn. Các con vật đều phải ăn sinh vật khác.\nMũi tên chỉ “bị ăn bởi”: lúa bị chuột ăn, chuột bị rắn ăn…",
  "image": "img/ontap2/k_chain.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Vận dụng",
  "lesson": "Chuỗi thức ăn",
  "source": "Ôn tập mở rộng 2026 – Câu 71",
  "content": "Trong chuỗi thức ăn ở hình bên, nếu rắn bị con người săn bắt hết thì lúc đầu số lượng chuột sẽ thay đổi thế nào và ảnh hưởng gì đến cây lúa?",
  "options": [
   "Chuột tăng lên, lúa bị phá hại nhiều hơn",
   "Chuột giảm đi, lúa tốt hơn",
   "Chuột không đổi, lúa không bị ảnh hưởng",
   "Chuột biến mất, lúa bị phá hại"
  ],
  "answer": 0,
  "explanation": "Rắn là con vật ăn chuột. Mất rắn thì chuột ít bị săn, sinh sản nhiều nên tăng lên; chuột ăn nhiều lúa hơn → mùa màng thiệt hại. Vì vậy cần bảo vệ các loài thiên địch như rắn, cú mèo.",
  "image": "img/ontap2/k_chain.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Lưới thức ăn",
  "source": "Ôn tập mở rộng 2026 – Câu 72",
  "content": "Sơ đồ bên cho biết: cỏ bị thỏ và châu chấu ăn; thỏ bị cáo ăn; châu chấu bị ếch ăn; ếch bị rắn ăn. Có bao nhiêu chuỗi thức ăn bắt đầu từ cỏ?",
  "options": [
   "3 chuỗi",
   "4 chuỗi",
   "1 chuỗi",
   "2 chuỗi"
  ],
  "answer": 3,
  "explanation": "Chuỗi 1: Cỏ → Thỏ → Cáo.\nChuỗi 2: Cỏ → Châu chấu → Ếch → Rắn.\nVậy có 2 chuỗi thức ăn.",
  "image": "img/ontap2/k_web.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Mạch điện đơn giản",
  "source": "Ôn tập mở rộng 2026 – Câu 73",
  "content": "Trong bốn mạch điện ở hình bên, bóng đèn ở mạch nào sáng?",
  "options": [
   "Mạch A",
   "Mạch C",
   "Mạch D",
   "Mạch B"
  ],
  "answer": 3,
  "explanation": "Đèn chỉ sáng khi mạch điện kín: dòng điện đi từ một cực của pin, qua dây dẫn, qua bóng đèn rồi về cực kia của pin.\n– Mạch A: có cục tẩy cao su (vật cách điện) chắn đường → đèn không sáng.\n– Mạch C: dây bị hở → mạch hở.\n– Mạch D: cả hai dây nối vào cùng một cực của pin → không có dòng điện qua đèn.\n– Mạch B: mạch kín → đèn sáng.",
  "image": "img/ontap2/k_circuits.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Vật dẫn điện – cách điện",
  "source": "Ôn tập mở rộng 2026 – Câu 74",
  "content": "Vật nào dưới đây cho dòng điện chạy qua (vật dẫn điện)?",
  "options": [
   "Chiếc thước nhựa",
   "Thanh gỗ khô",
   "Chiếc đinh sắt",
   "Sợi dây chun (cao su)"
  ],
  "answer": 2,
  "explanation": "Kim loại (sắt, đồng, nhôm…) dẫn điện tốt. Nhựa, gỗ khô, cao su, thuỷ tinh là vật cách điện – vì vậy vỏ dây điện thường làm bằng nhựa."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Vận dụng",
  "lesson": "Ánh sáng và bóng",
  "source": "Ôn tập mở rộng 2026 – Câu 75",
  "content": "Buổi sáng, Mặt Trời ở phía Đông như hình bên. Bóng của cây sẽ đổ về phía nào?",
  "options": [
   "Phía Đông",
   "Phía Tây",
   "Phía Nam",
   "Không có bóng"
  ],
  "answer": 1,
  "explanation": "Bóng của vật luôn ở phía ngược với nguồn sáng. Mặt Trời ở phía Đông thì bóng cây đổ về phía Tây.\nBuổi chiều Mặt Trời ở phía Tây nên bóng đổ về phía Đông.",
  "image": "img/ontap2/k_shadow.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Ánh sáng và bóng",
  "source": "Ôn tập mở rộng 2026 – Câu 76",
  "content": "Trong một ngày nắng, bóng của cột cờ trên sân trường ngắn nhất vào lúc nào?",
  "options": [
   "Khoảng giữa trưa",
   "Sáng sớm",
   "Chiều tối",
   "Bóng dài như nhau cả ngày"
  ],
  "answer": 0,
  "explanation": "Giữa trưa Mặt Trời lên cao nhất trên bầu trời, ánh sáng chiếu gần như thẳng từ trên xuống nên bóng ngắn nhất. Sáng sớm và chiều muộn Mặt Trời ở thấp nên bóng rất dài."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Ánh sáng và việc nhìn",
  "source": "Ôn tập mở rộng 2026 – Câu 77",
  "content": "Vì sao ta nhìn thấy quyển sách đặt trên bàn trong phòng có đèn sáng?",
  "options": [
   "Vì ánh sáng chiếu vào quyển sách rồi truyền từ quyển sách đến mắt ta",
   "Vì mắt ta phát ra ánh sáng chiếu vào quyển sách",
   "Vì quyển sách tự phát ra ánh sáng",
   "Vì trong phòng có không khí"
  ],
  "answer": 0,
  "explanation": "Ta nhìn thấy một vật khi có ánh sáng từ vật đó truyền vào mắt. Quyển sách không tự phát sáng; nó hắt lại ánh sáng của đèn vào mắt ta. Trong phòng tối hoàn toàn, ta không nhìn thấy sách."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Sự phản xạ ánh sáng",
  "source": "Ôn tập mở rộng 2026 – Câu 78",
  "content": "Bạn Nam chiếu đèn pin vào một chiếc gương như hình bên. Điều gì xảy ra với ánh sáng?",
  "options": [
   "Ánh sáng đi xuyên qua gương",
   "Ánh sáng bị gương hút hết",
   "Ánh sáng biến thành âm thanh",
   "Ánh sáng bị gương hắt lại (đổi hướng)"
  ],
  "answer": 3,
  "explanation": "Mặt gương nhẵn, bóng nên hắt lại gần như toàn bộ ánh sáng chiếu tới – gọi là sự phản xạ ánh sáng. Vì vậy dùng gương có thể chiếu ánh sáng vào chỗ tối.\nChú ý an toàn: không chiếu ánh sáng phản xạ vào mắt người khác.",
  "image": "img/ontap2/k_mirror.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Sự truyền âm thanh",
  "source": "Ôn tập mở rộng 2026 – Câu 79",
  "content": "Âm thanh KHÔNG thể truyền qua môi trường nào?",
  "options": [
   "Không khí",
   "Nước",
   "Chân không (nơi không có không khí)",
   "Tường gạch"
  ],
  "answer": 2,
  "explanation": "Âm thanh truyền được qua chất khí, chất lỏng và chất rắn nhưng không truyền được trong chân không. Vì vậy ngoài vũ trụ, các nhà du hành phải liên lạc bằng sóng vô tuyến."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Vận dụng",
  "lesson": "Sự truyền âm thanh",
  "source": "Ôn tập mở rộng 2026 – Câu 80",
  "content": "Hai bạn làm “điện thoại cốc giấy” như hình bên. Vì sao khi kéo căng dây, bạn ở đầu kia nghe rõ tiếng nói hơn?",
  "options": [
   "Vì sợi dây phát ra âm thanh",
   "Vì âm thanh truyền qua sợi dây căng (vật rắn) tốt hơn truyền qua không khí",
   "Vì kéo căng dây làm tiếng nói to lên ở miệng người nói",
   "Vì không khí trong cốc bị đẩy ra"
  ],
  "answer": 1,
  "explanation": "Tiếng nói làm đáy cốc rung, rung động truyền theo sợi dây sang cốc bên kia. Dây phải căng thì rung động mới truyền đi được; dây chùng thì gần như không nghe thấy. Âm thanh truyền qua chất rắn tốt hơn qua không khí.",
  "image": "img/ontap2/k_phone.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Vận dụng cao",
  "lesson": "Âm thanh cao – thấp",
  "source": "Ôn tập mở rộng 2026 – Câu 81",
  "content": "Bốn chai thuỷ tinh giống nhau chứa lượng nước khác nhau như hình bên. Dùng thìa gõ nhẹ vào thân chai. Chai nào phát ra âm thanh cao (bổng) nhất?",
  "options": [
   "Chai A",
   "Chai B",
   "Chai C",
   "Chai D"
  ],
  "answer": 1,
  "explanation": "Khi gõ vào chai, cả thân chai và nước bên trong cùng rung. Chai chứa ít nước nhất rung nhanh nhất nên phát ra âm cao nhất; chai nhiều nước nhất (D) phát ra âm trầm nhất. Chai B có ít nước nhất.\nLưu ý: nếu THỔI vào miệng chai thì kết quả ngược lại (cột không khí ngắn nhất – chai D – kêu cao nhất).",
  "image": "img/ontap2/k_bottles.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Vật dẫn nhiệt",
  "source": "Ôn tập mở rộng 2026 – Câu 82",
  "content": "Khi khuấy cốc nước nóng, dùng thìa nào thì tay cầm sẽ nóng nhanh nhất?",
  "options": [
   "Thìa kim loại (inox)",
   "Thìa nhựa",
   "Thìa gỗ",
   "Thìa sứ"
  ],
  "answer": 0,
  "explanation": "Kim loại dẫn nhiệt tốt nên nhiệt từ nước truyền nhanh lên cán thìa. Nhựa, gỗ, sứ dẫn nhiệt kém. Vì thế cán xoong, nồi thường bọc nhựa hoặc gỗ."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Nhiệt độ – Nhiệt kế",
  "source": "Ôn tập mở rộng 2026 – Câu 83",
  "content": "Nhiệt kế y tế ở hình bên đo nhiệt độ cơ thể của Lan. Kết quả nào đúng?",
  "options": [
   "37 °C – Lan bình thường",
   "35,8 °C – Lan bị lạnh",
   "40 °C – Lan bị sốt rất cao",
   "38,5 °C – Lan đang bị sốt"
  ],
  "answer": 3,
  "explanation": "Mức chất lỏng màu đỏ dừng ở giữa vạch 38 và 39, tức 38,5 °C. Nhiệt độ cơ thể người khoẻ mạnh khoảng 37 °C; trên 37,5 °C là bị sốt. Khi bị sốt cần báo người lớn.",
  "image": "img/ontap2/k_thermo.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Vận dụng",
  "lesson": "Sự ngưng tụ",
  "source": "Ôn tập mở rộng 2026 – Câu 84",
  "content": "Lấy cốc nước đá để ngoài bàn, một lúc sau thành ngoài cốc có nhiều giọt nước như hình bên. Những giọt nước này từ đâu đến?",
  "options": [
   "Nước trong cốc thấm qua thành cốc ra ngoài",
   "Đá trong cốc tan rồi bắn ra ngoài",
   "Hơi nước trong không khí gặp thành cốc lạnh nên ngưng tụ thành giọt nước",
   "Thành cốc tự sinh ra nước"
  ],
  "answer": 2,
  "explanation": "Trong không khí luôn có hơi nước. Khi gặp thành cốc lạnh, hơi nước nguội đi và ngưng tụ thành các giọt nước nhỏ bám bên ngoài. Cốc thuỷ tinh không cho nước thấm qua.",
  "image": "img/ontap2/k_cup.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Hỗn hợp và cách tách",
  "source": "Ôn tập mở rộng 2026 – Câu 85",
  "content": "Hỗn hợp nào có thể tách riêng các chất bằng cách lọc qua giấy lọc (hoặc vải)?",
  "options": [
   "Muối tan trong nước",
   "Đường tan trong nước",
   "Cát và nước",
   "Giấm hoà với nước"
  ],
  "answer": 2,
  "explanation": "Cát không tan trong nước nên bị giấy lọc giữ lại, nước chảy qua. Muối, đường, giấm đã tan vào nước tạo thành dung dịch, lọc không tách ra được; muốn lấy lại muối phải làm bay hơi nước."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Làm sạch nước",
  "source": "Ôn tập mở rộng 2026 – Câu 86",
  "content": "Hình bên là bình lọc nước tự làm. Các lớp sỏi, cát trong bình có tác dụng gì?",
  "options": [
   "Diệt hết vi khuẩn trong nước",
   "Giữ lại đất, cát, rác và cặn bẩn trong nước",
   "Làm nước ngọt hơn",
   "Làm nước nóng lên"
  ],
  "answer": 1,
  "explanation": "Nước đục chảy qua các lớp bông, than, cát, sỏi thì các hạt bẩn bị giữ lại nên nước trong hơn. Than hoạt tính còn giúp khử bớt mùi, màu. Tuy nhiên bình lọc này KHÔNG diệt được hết vi khuẩn.",
  "image": "img/ontap2/k_filter.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Vận dụng",
  "lesson": "Làm sạch nước",
  "source": "Ôn tập mở rộng 2026 – Câu 87",
  "content": "Nước chảy ra từ bình lọc tự làm ở hình bên đã trong. Nước này có uống ngay được không?",
  "options": [
   "Chưa, cần đun sôi để diệt vi khuẩn rồi mới uống",
   "Uống được ngay vì nước đã trong",
   "Uống được nếu cho thêm đường",
   "Không bao giờ dùng được"
  ],
  "answer": 0,
  "explanation": "Nước trong chưa chắc đã sạch: vi khuẩn, vi rút rất nhỏ, không nhìn thấy và có thể đi qua lớp lọc. Cần đun sôi nước để diệt vi khuẩn trước khi uống.",
  "image": "img/ontap2/k_filter.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Biến đổi hoá học",
  "source": "Ôn tập mở rộng 2026 – Câu 88",
  "content": "Hiện tượng nào dưới đây là biến đổi hoá học (tạo ra chất mới)?",
  "options": [
   "Xé vụn tờ giấy",
   "Nước đá tan thành nước",
   "Hoà tan đường vào nước",
   "Đốt cháy tờ giấy"
  ],
  "answer": 3,
  "explanation": "Giấy cháy biến thành tro và khói – là những chất mới, không thể biến trở lại thành giấy → biến đổi hoá học.\nXé giấy, nước đá tan, hoà tan đường chỉ thay đổi hình dạng hoặc trạng thái, chất vẫn giữ nguyên → biến đổi lí học."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Vận dụng",
  "lesson": "Gỉ sắt",
  "source": "Ôn tập mở rộng 2026 – Câu 89",
  "content": "Chiếc đinh sắt dễ bị gỉ nhất khi đặt ở đâu?",
  "options": [
   "Trong lọ thuỷ tinh khô, đậy kín",
   "Ngâm trong dầu ăn",
   "Được sơn kín bề mặt",
   "Ngoài trời, nơi ẩm ướt, có cả nước và không khí"
  ],
  "answer": 3,
  "explanation": "Sắt bị gỉ khi tiếp xúc với cả nước (hơi ẩm) và không khí (khí ô-xi). Sơn, bôi dầu mỡ, để nơi khô ráo giúp ngăn sắt tiếp xúc với nước và không khí nên chống gỉ."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Các bộ phận của cây",
  "source": "Ôn tập mở rộng 2026 – Câu 90",
  "content": "Bộ phận số 1 của cây ở hình bên có chức năng chính là gì?",
  "options": [
   "Quang hợp tạo chất dinh dưỡng",
   "Tạo hạt để sinh sản",
   "Hút nước, muối khoáng và giữ cho cây đứng vững",
   "Thu hút côn trùng đến thụ phấn"
  ],
  "answer": 2,
  "explanation": "Bộ phận số 1 là rễ cây. Rễ bám vào đất giúp cây đứng vững và hút nước, muối khoáng nuôi cây. Lá (số 3) làm nhiệm vụ quang hợp; hoa (số 4) là cơ quan sinh sản.",
  "image": "img/ontap2/k_plant.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Các bộ phận của cây",
  "source": "Ôn tập mở rộng 2026 – Câu 91",
  "content": "Bộ phận số 2 của cây ở hình bên (thân cây) có vai trò gì?",
  "options": [
   "Hút nước từ đất",
   "Vận chuyển nước, chất khoáng và chất dinh dưỡng đi khắp cây",
   "Tạo ra hoa",
   "Thải khí ô-xi ra ngoài là chủ yếu"
  ],
  "answer": 1,
  "explanation": "Thân nâng đỡ lá, hoa và là đường vận chuyển: nước và muối khoáng từ rễ đi lên lá; chất dinh dưỡng do lá tạo ra đi đến các bộ phận khác.",
  "image": "img/ontap2/k_plant.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Quang hợp",
  "source": "Ôn tập mở rộng 2026 – Câu 92",
  "content": "Khi được chiếu sáng, lá cây xanh lấy vào khí các-bô-níc và thải ra khí gì?",
  "options": [
   "Khí ô-xi",
   "Khí các-bô-níc",
   "Hơi nước nóng",
   "Khí ni-tơ"
  ],
  "answer": 0,
  "explanation": "Khi quang hợp, lá cây dùng ánh sáng Mặt Trời, nước và khí các-bô-níc để tạo ra chất dinh dưỡng, đồng thời thải ra khí ô-xi giúp không khí trong lành."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Thí nghiệm về nhu cầu của cây",
  "source": "Ôn tập mở rộng 2026 – Câu 93",
  "content": "Hai chậu cây giống nhau, được tưới nước như nhau; chậu B bị úp hộp kín (hình bên). Thí nghiệm này nhằm tìm hiểu điều gì?",
  "options": [
   "Cây cần ánh sáng để sống và phát triển",
   "Cây cần nước để sống",
   "Cây cần đất để sống",
   "Cây cần phân bón"
  ],
  "answer": 0,
  "explanation": "Hai chậu chỉ khác nhau ở một điều kiện là ánh sáng (các điều kiện khác giữ giống nhau) → thí nghiệm tìm hiểu vai trò của ánh sáng.",
  "image": "img/ontap2/k_pots.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Vận dụng",
  "lesson": "Thí nghiệm về nhu cầu của cây",
  "source": "Ôn tập mở rộng 2026 – Câu 94",
  "content": "Sau khoảng hai tuần, cây trong chậu B (bị úp hộp kín, hình bên) sẽ thế nào?",
  "options": [
   "Cây xanh tốt hơn chậu A",
   "Cây ra hoa nhiều hơn",
   "Cây không thay đổi gì",
   "Lá vàng úa, cây yếu dần"
  ],
  "answer": 3,
  "explanation": "Không có ánh sáng, lá cây không quang hợp được để tạo chất dinh dưỡng nên lá bị vàng, cây yếu dần và có thể chết. Cây ở chậu A có ánh sáng nên xanh tốt.",
  "image": "img/ontap2/k_pots.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Vận dụng",
  "lesson": "Hoa và sự sinh sản của thực vật",
  "source": "Ôn tập mở rộng 2026 – Câu 95",
  "content": "Ở hình bên, sau khi được thụ phấn, bộ phận nào của hoa sẽ phát triển thành quả?",
  "options": [
   "Cánh hoa (số 1)",
   "Nhị hoa (số 2)",
   "Bầu nhụy (bộ phận số 3)",
   "Đài hoa (số 4)"
  ],
  "answer": 2,
  "explanation": "Nhị (số 2) chứa phấn hoa; nhụy (số 3) có bầu nhụy ở dưới. Sau khi thụ phấn, bầu nhụy lớn lên thành quả, noãn bên trong thành hạt. Cánh hoa thường héo và rụng.",
  "image": "img/ontap2/k_flower.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Sự nảy mầm của hạt",
  "source": "Ôn tập mở rộng 2026 – Câu 96",
  "content": "Để hạt đậu nảy mầm, điều kiện nào dưới đây là KHÔNG cần thiết?",
  "options": [
   "Độ ẩm (nước) vừa đủ",
   "Phân bón hoá học",
   "Không khí",
   "Nhiệt độ thích hợp"
  ],
  "answer": 1,
  "explanation": "Hạt nảy mầm cần nước, không khí và nhiệt độ thích hợp. Chất dinh dưỡng nuôi mầm có sẵn trong hạt (trong lá mầm) nên chưa cần phân bón."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Vòng đời của côn trùng",
  "source": "Ôn tập mở rộng 2026 – Câu 97",
  "content": "Trong vòng đời của bướm cải ở hình bên, giai đoạn nào gây hại cho cây rau nhiều nhất?",
  "options": [
   "Trứng",
   "Sâu",
   "Nhộng",
   "Bướm"
  ],
  "answer": 1,
  "explanation": "Sâu ăn lá rau rất nhiều để lớn nhanh nên gây hại nhất. Trứng và nhộng không ăn; bướm chủ yếu hút mật hoa.\nCách phòng: bắt sâu, ngắt bỏ lá có trứng bướm.",
  "image": "img/ontap2/k_butterfly.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Vòng đời của ếch",
  "source": "Ôn tập mở rộng 2026 – Câu 98",
  "content": "Vòng đời của ếch: Trứng → Nòng nọc → Ếch con → Ếch trưởng thành. Nòng nọc sống dưới nước và thở bằng gì?",
  "options": [
   "Mang",
   "Phổi",
   "Da và phổi",
   "Mũi"
  ],
  "answer": 0,
  "explanation": "Nòng nọc sống hoàn toàn dưới nước, có đuôi và thở bằng mang giống cá. Khi lớn thành ếch, chúng thở bằng phổi và da, có thể lên cạn.",
  "image": "img/ontap2/k_frog.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Động vật có vú",
  "source": "Ôn tập mở rộng 2026 – Câu 99",
  "content": "Con vật nào dưới đây đẻ con và nuôi con bằng sữa?",
  "options": [
   "Cá chép",
   "Con gà",
   "Con rùa",
   "Cá heo"
  ],
  "answer": 3,
  "explanation": "Cá heo sống dưới nước nhưng là động vật có vú: thở bằng phổi, đẻ con và nuôi con bằng sữa. Cá chép, gà, rùa đều đẻ trứng."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Vận dụng",
  "lesson": "Nấm mốc – Bảo quản thực phẩm",
  "source": "Ôn tập mở rộng 2026 – Câu 100",
  "content": "Bánh mì để lâu ở nơi ấm và ẩm thường bị mốc. Cách nào giúp bánh mì chậm bị mốc nhất?",
  "options": [
   "Để ngoài trời nơi ẩm ướt",
   "Phun thêm nước cho bánh mềm",
   "Gói kín, để nơi khô ráo, mát hoặc trong ngăn mát tủ lạnh",
   "Để trong túi nilon ướt, cạnh bếp"
  ],
  "answer": 2,
  "explanation": "Nấm mốc phát triển mạnh ở nơi ấm, ẩm. Giữ thực phẩm khô ráo, mát làm nấm mốc phát triển chậm. Không ăn thức ăn đã bị mốc vì có thể chứa chất độc."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Vi khuẩn có ích",
  "source": "Ôn tập mở rộng 2026 – Câu 101",
  "content": "Vi khuẩn có ích được dùng trong việc làm ra thực phẩm nào dưới đây?",
  "options": [
   "Nước lọc",
   "Muối ăn",
   "Sữa chua",
   "Đường kính"
  ],
  "answer": 2,
  "explanation": "Một số vi khuẩn có ích (vi khuẩn lactic) biến sữa thành sữa chua, làm dưa muối chua. Nước, muối, đường không được làm nhờ vi khuẩn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Nấm men",
  "source": "Ôn tập mở rộng 2026 – Câu 102",
  "content": "Khi làm bánh mì, người ta cho nấm men vào bột. Bánh mì nở xốp là vì:",
  "options": [
   "Nấm men làm bột nặng hơn",
   "Nấm men tạo ra khí các-bô-níc làm bột phồng lên",
   "Nấm men hút hết nước trong bột",
   "Nấm men tạo ra khí ô-xi"
  ],
  "answer": 1,
  "explanation": "Nấm men sử dụng đường trong bột và sinh ra khí các-bô-níc. Các bọt khí bị giữ lại trong bột làm bột phồng lên; khi nướng, bánh có nhiều lỗ nhỏ nên xốp."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Chất dinh dưỡng",
  "source": "Ôn tập mở rộng 2026 – Câu 103",
  "content": "Nhóm chất dinh dưỡng nào giúp xây dựng, đổi mới cơ thể, giúp trẻ em lớn lên (có nhiều trong thịt, cá, trứng, đậu)?",
  "options": [
   "Chất đạm",
   "Chất béo",
   "Chất bột đường",
   "Chất xơ"
  ],
  "answer": 0,
  "explanation": "Chất đạm (prô-tê-in) là nguyên liệu xây dựng cơ thể, có nhiều trong thịt, cá, trứng, sữa, đậu đỗ. Chất bột đường và chất béo chủ yếu cung cấp năng lượng."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Ăn uống cân bằng",
  "source": "Ôn tập mở rộng 2026 – Câu 104",
  "content": "Theo tháp dinh dưỡng, nhóm thực phẩm nào cần ăn hạn chế, ăn ít nhất?",
  "options": [
   "Rau xanh",
   "Cơm, ngũ cốc",
   "Hoa quả tươi",
   "Đường, muối"
  ],
  "answer": 3,
  "explanation": "Ở đỉnh tháp dinh dưỡng là đường và muối – chỉ nên ăn rất ít. Ăn nhiều đường dễ sâu răng, béo phì; ăn mặn dễ gây bệnh tim mạch, huyết áp. Rau, quả, ngũ cốc cần ăn nhiều hơn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Phòng bệnh",
  "source": "Ôn tập mở rộng 2026 – Câu 105",
  "content": "Việc làm nào giúp phòng tránh các bệnh lây qua đường tiêu hoá (như tiêu chảy)?",
  "options": [
   "Ăn rau sống chưa rửa",
   "Uống nước lã",
   "Dùng chung cốc với người bị bệnh",
   "Ăn chín, uống sôi, rửa tay bằng xà phòng trước khi ăn và sau khi đi vệ sinh"
  ],
  "answer": 3,
  "explanation": "Vi khuẩn gây bệnh có thể theo thức ăn, nước uống, bàn tay bẩn vào cơ thể. Ăn chín, uống sôi và rửa tay sạch giúp ngăn mầm bệnh."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Tuổi dậy thì",
  "source": "Ôn tập mở rộng 2026 – Câu 106",
  "content": "Tuổi dậy thì ở con gái thường bắt đầu trong khoảng nào?",
  "options": [
   "Từ 3 đến 5 tuổi",
   "Từ 6 đến 8 tuổi",
   "Từ 10 đến 15 tuổi",
   "Từ 20 đến 25 tuổi"
  ],
  "answer": 2,
  "explanation": "Theo sách Khoa học lớp 5, con gái thường bắt đầu dậy thì trong khoảng 10 – 15 tuổi, con trai khoảng 13 – 17 tuổi. Đây là giai đoạn cơ thể phát triển nhanh về chiều cao, cân nặng và có nhiều thay đổi về tâm sinh lí."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Cơ thể người",
  "source": "Ôn tập mở rộng 2026 – Câu 107",
  "content": "Cơ quan nào co bóp để đẩy máu đi khắp cơ thể?",
  "options": [
   "Phổi",
   "Tim",
   "Dạ dày",
   "Thận"
  ],
  "answer": 1,
  "explanation": "Tim là cơ quan chính của hệ tuần hoàn: tim co bóp liên tục để bơm máu đi nuôi cơ thể. Phổi thuộc hệ hô hấp, dạ dày thuộc hệ tiêu hoá, thận thuộc hệ bài tiết."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Hô hấp",
  "source": "Ôn tập mở rộng 2026 – Câu 108",
  "content": "Khi hít vào, cơ thể ta lấy khí gì từ không khí để duy trì sự sống?",
  "options": [
   "Khí ô-xi",
   "Khí các-bô-níc",
   "Khí ni-tơ",
   "Hơi nước"
  ],
  "answer": 0,
  "explanation": "Khi hít vào, phổi lấy khí ô-xi từ không khí đưa vào máu. Khi thở ra, cơ thể thải ra khí các-bô-níc."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Mặt Trời – Trái Đất – Mặt Trăng",
  "source": "Ôn tập mở rộng 2026 – Câu 109",
  "content": "Vì sao ban đêm ta nhìn thấy Mặt Trăng sáng (hình bên)?",
  "options": [
   "Mặt Trăng hắt lại ánh sáng của Mặt Trời",
   "Mặt Trăng tự phát ra ánh sáng",
   "Trái Đất chiếu sáng Mặt Trăng bằng đèn điện",
   "Mặt Trăng là một ngôi sao rất nóng"
  ],
  "answer": 0,
  "explanation": "Mặt Trăng không tự phát sáng. Ánh sáng Mặt Trời chiếu đến Mặt Trăng rồi bị hắt lại về Trái Đất nên ta thấy Mặt Trăng sáng. Mặt Trời mới là ngôi sao tự phát sáng.",
  "image": "img/ontap2/k_sem.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Ngày và đêm",
  "source": "Ôn tập mở rộng 2026 – Câu 110",
  "content": "Hiện tượng ngày và đêm luân phiên nhau trên Trái Đất là do:",
  "options": [
   "Mặt Trời quay quanh Trái Đất",
   "Mặt Trăng che Mặt Trời mỗi tối",
   "Mây che ánh nắng vào ban đêm",
   "Trái Đất tự quay quanh trục của nó"
  ],
  "answer": 3,
  "explanation": "Trái Đất hình cầu và luôn tự quay quanh trục. Nửa được Mặt Trời chiếu sáng là ban ngày, nửa còn lại là ban đêm; Trái Đất quay nên ngày và đêm thay phiên nhau, mỗi vòng quay mất khoảng 24 giờ."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Nam châm",
  "source": "Ôn tập mở rộng 2026 – Câu 111",
  "content": "Đưa nam châm lại gần các vật ở hình bên. Nam châm hút được vật nào?",
  "options": [
   "Thước nhựa",
   "Bút chì gỗ",
   "Kẹp giấy bằng sắt",
   "Tẩy cao su"
  ],
  "answer": 2,
  "explanation": "Nam châm hút các vật làm bằng sắt, thép (và một số kim loại như niken, cô-ban). Nhựa, gỗ, cao su không bị nam châm hút.",
  "image": "img/ontap2/k_magnet.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Năng lượng",
  "source": "Ôn tập mở rộng 2026 – Câu 112",
  "content": "Nguồn năng lượng nào dưới đây là năng lượng sạch, không bị cạn kiệt?",
  "options": [
   "Than đá",
   "Năng lượng Mặt Trời",
   "Dầu mỏ",
   "Khí đốt tự nhiên"
  ],
  "answer": 1,
  "explanation": "Than đá, dầu mỏ, khí đốt (năng lượng hoá thạch) sẽ cạn kiệt và khi đốt gây ô nhiễm. Năng lượng Mặt Trời, gió, nước là năng lượng tái tạo, sạch."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Năng lượng Mặt Trời",
  "source": "Ôn tập mở rộng 2026 – Câu 113",
  "content": "Tấm pin mặt trời ở hình bên biến năng lượng ánh sáng Mặt Trời thành dạng năng lượng nào để làm sáng bóng đèn?",
  "options": [
   "Năng lượng âm thanh",
   "Năng lượng điện",
   "Năng lượng gió",
   "Năng lượng của thức ăn"
  ],
  "answer": 1,
  "explanation": "Pin mặt trời (pin quang điện) biến năng lượng ánh sáng thành điện năng. Điện năng làm bóng đèn sáng, có thể nạp vào ắc quy để dùng ban đêm.",
  "image": "img/ontap2/k_solar.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Năng lượng gió",
  "source": "Ôn tập mở rộng 2026 – Câu 114",
  "content": "Tua-bin gió ở hình bên dùng để làm gì?",
  "options": [
   "Biến năng lượng gió thành năng lượng điện",
   "Tạo ra gió để làm mát",
   "Đo hướng gió cho máy bay",
   "Hút không khí bẩn"
  ],
  "answer": 0,
  "explanation": "Gió làm cánh tua-bin quay, trục quay làm máy phát điện hoạt động, biến năng lượng gió thành điện năng. Việt Nam có nhiều trang trại điện gió ở ven biển như Bạc Liêu, Ninh Thuận.",
  "image": "img/ontap2/k_wind.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Năng lượng điện",
  "source": "Ôn tập mở rộng 2026 – Câu 115",
  "content": "Khi bóng đèn điện sợi đốt sáng, năng lượng điện được chuyển hoá thành:",
  "options": [
   "Chỉ năng lượng âm thanh",
   "Năng lượng gió",
   "Năng lượng của thức ăn",
   "Năng lượng ánh sáng và nhiệt"
  ],
  "answer": 3,
  "explanation": "Bóng đèn biến điện năng thành ánh sáng, đồng thời bóng nóng lên (nhiệt). Bóng sợi đốt toả rất nhiều nhiệt nên tốn điện; bóng LED toả ít nhiệt hơn nên tiết kiệm điện."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Sử dụng năng lượng tiết kiệm",
  "source": "Ôn tập mở rộng 2026 – Câu 116",
  "content": "Việc làm nào giúp tiết kiệm điện?",
  "options": [
   "Mở cửa tủ lạnh thật lâu",
   "Bật ti vi khi không xem",
   "Tắt đèn, quạt khi ra khỏi phòng",
   "Bật tất cả đèn vào ban ngày"
  ],
  "answer": 2,
  "explanation": "Tắt các thiết bị điện khi không dùng giúp tiết kiệm điện, tiết kiệm tiền và bảo vệ môi trường (giảm đốt than để sản xuất điện)."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Thành phần của không khí",
  "source": "Ôn tập mở rộng 2026 – Câu 117",
  "content": "Trong không khí, khí nào chiếm nhiều nhất?",
  "options": [
   "Khí ô-xi",
   "Khí các-bô-níc",
   "Khí ni-tơ",
   "Hơi nước"
  ],
  "answer": 2,
  "explanation": "Không khí có khoảng 78% là khí ni-tơ, khoảng 21% là khí ô-xi, phần còn lại là khí các-bô-níc, hơi nước và các khí khác."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Vận dụng",
  "lesson": "Không khí và sự cháy",
  "source": "Ôn tập mở rộng 2026 – Câu 118",
  "content": "Úp một chiếc cốc thuỷ tinh lên cây nến đang cháy. Một lúc sau nến tắt. Vì sao?",
  "options": [
   "Cốc thuỷ tinh làm lạnh ngọn nến",
   "Không khí trong cốc không còn đủ khí ô-xi để duy trì sự cháy",
   "Ánh sáng không chiếu vào được",
   "Nến bị cháy hết"
  ],
  "answer": 1,
  "explanation": "Sự cháy cần khí ô-xi trong không khí. Khi bị úp cốc, lượng không khí có hạn; ô-xi bị dùng dần nên nến tắt. Đây cũng là nguyên tắc dập lửa bằng cách phủ chăn ướt, cát lên đám cháy nhỏ."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Vận dụng cao",
  "lesson": "Không khí và sự cháy",
  "source": "Ôn tập mở rộng 2026 – Câu 119",
  "content": "Úp hai cốc thuỷ tinh to, nhỏ khác nhau lên hai cây nến giống nhau đang cháy (hình bên). Kết quả nào đúng?",
  "options": [
   "Nến trong cốc to cháy lâu hơn vì có nhiều không khí (khí ô-xi) hơn",
   "Nến trong cốc nhỏ cháy lâu hơn",
   "Hai nến tắt cùng lúc",
   "Nến trong cốc to tắt ngay lập tức"
  ],
  "answer": 0,
  "explanation": "Cốc to chứa nhiều không khí hơn nên có nhiều khí ô-xi hơn để duy trì sự cháy → nến cháy lâu hơn.\nĐể so sánh công bằng, hai cây nến phải giống nhau và được úp cốc cùng lúc.",
  "image": "img/ontap2/k_jars.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Tính chất của nước",
  "source": "Ôn tập mở rộng 2026 – Câu 120",
  "content": "Đổ cùng một lượng nước vào cái cốc, cái bát và cái chai. Nhận xét nào đúng?",
  "options": [
   "Nước luôn có hình tròn",
   "Nước có hình dạng của cái cốc ở mọi nơi",
   "Lượng nước thay đổi khi đổ sang vật khác",
   "Nước không có hình dạng nhất định, có hình dạng của vật chứa nó"
  ],
  "answer": 3,
  "explanation": "Nước là chất lỏng: không có hình dạng riêng, có hình dạng của vật chứa nó, nhưng lượng nước không thay đổi."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Vận dụng",
  "lesson": "Đất có không khí",
  "source": "Ôn tập mở rộng 2026 – Câu 121",
  "content": "Đổ nước vào cốc đựng đất khô (hình bên), ta thấy có bọt khí nổi lên. Điều này chứng tỏ:",
  "options": [
   "Nước có chứa đất",
   "Đất bị nước làm cháy",
   "Đất có rất nhiều nước",
   "Trong đất có không khí"
  ],
  "answer": 3,
  "explanation": "Giữa các hạt đất có những khe hở chứa không khí. Khi nước tràn vào lấp chỗ trống, không khí bị đẩy ra tạo thành bọt khí. Vì vậy cần xới đất để rễ cây có không khí để thở.",
  "image": "img/ontap2/k_soil.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bảo vệ môi trường",
  "source": "Ôn tập mở rộng 2026 – Câu 122",
  "content": "Việc trồng rừng ở đầu nguồn các con sông có tác dụng gì?",
  "options": [
   "Làm nước sông nóng lên",
   "Làm tăng lũ quét",
   "Giữ đất, chống xói mòn và giảm lũ lụt",
   "Làm đất bạc màu nhanh hơn"
  ],
  "answer": 2,
  "explanation": "Rễ cây giữ đất, tán lá làm chậm dòng nước mưa, giúp đất thấm nước, nên giảm xói mòn, lũ quét và sạt lở. Phá rừng đầu nguồn là nguyên nhân làm lũ lụt nặng hơn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Ô nhiễm không khí",
  "source": "Ôn tập mở rộng 2026 – Câu 123",
  "content": "Nguyên nhân nào dưới đây gây ô nhiễm không khí?",
  "options": [
   "Trồng nhiều cây xanh",
   "Khói thải từ xe máy, ô tô và nhà máy",
   "Sử dụng xe đạp",
   "Dùng năng lượng Mặt Trời"
  ],
  "answer": 1,
  "explanation": "Khói xe, khói nhà máy, đốt rác, đốt rơm rạ thải ra bụi và khí độc gây ô nhiễm không khí. Trồng cây xanh, đi xe đạp, dùng năng lượng sạch giúp giảm ô nhiễm."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Phân loại rác",
  "source": "Ôn tập mở rộng 2026 – Câu 124",
  "content": "Rác nào dưới đây nên bỏ vào thùng rác TÁI CHẾ?",
  "options": [
   "Vỏ lon nhôm, chai nhựa đã rửa sạch",
   "Vỏ chuối",
   "Thức ăn thừa",
   "Lá cây khô"
  ],
  "answer": 0,
  "explanation": "Lon nhôm, chai nhựa, giấy, bìa có thể tái chế thành sản phẩm mới. Vỏ chuối, thức ăn thừa, lá cây là rác hữu cơ – có thể ủ làm phân bón."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Sinh sản của thực vật",
  "source": "Ôn tập mở rộng 2026 – Câu 125",
  "content": "Cây nào dưới đây có thể mọc thành cây mới từ lá?",
  "options": [
   "Cây bỏng (cây sống đời)",
   "Cây lúa",
   "Cây mía",
   "Cây ngô"
  ],
  "answer": 0,
  "explanation": "Mép lá cây bỏng có các mầm nhỏ; đặt lá lên đất ẩm, mầm mọc thành cây con. Mía trồng bằng đoạn thân (có mắt), lúa và ngô trồng bằng hạt."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Vi-ta-min và sức khoẻ",
  "source": "Ôn tập mở rộng 2026 – Câu 126",
  "content": "Thiếu vi-ta-min A, trẻ em dễ mắc bệnh nào?",
  "options": [
   "Bệnh còi xương",
   "Bệnh bướu cổ",
   "Bệnh sâu răng",
   "Bệnh về mắt (khô mắt, quáng gà)"
  ],
  "answer": 3,
  "explanation": "Vi-ta-min A giúp mắt sáng, có nhiều trong gấc, cà rốt, gan, trứng. Thiếu vi-ta-min D dễ bị còi xương; thiếu i-ốt dễ bị bướu cổ."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Phòng tránh đuối nước",
  "source": "Ôn tập mở rộng 2026 – Câu 127",
  "content": "Việc làm nào giúp phòng tránh đuối nước?",
  "options": [
   "Rủ bạn ra sông tắm một mình",
   "Chơi đùa gần ao, hồ, giếng không có nắp",
   "Chỉ tập bơi, đi bơi ở nơi an toàn và có người lớn trông",
   "Lội qua suối khi có lũ"
  ],
  "answer": 2,
  "explanation": "Trẻ em chỉ nên bơi ở bể bơi hoặc nơi an toàn, có người lớn và người cứu hộ. Không chơi gần ao hồ, sông suối; không lội qua dòng nước lũ."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Vật cho ánh sáng truyền qua",
  "source": "Ôn tập mở rộng 2026 – Câu 128",
  "content": "Để chiếu sáng một căn phòng nhưng vẫn ngăn gió và bụi, cửa sổ nên lắp tấm vật liệu nào?",
  "options": [
   "Tấm gỗ dày",
   "Tấm kính trong",
   "Tấm tôn (kim loại)",
   "Tấm bìa các-tông"
  ],
  "answer": 1,
  "explanation": "Kính trong cho ánh sáng truyền qua gần như hoàn toàn nhưng vẫn chắn được gió, bụi. Gỗ, tôn, bìa các-tông không cho ánh sáng truyền qua (vật cản sáng)."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Phòng chống tiếng ồn",
  "source": "Ôn tập mở rộng 2026 – Câu 129",
  "content": "Biện pháp nào giúp giảm tiếng ồn từ đường phố vào lớp học?",
  "options": [
   "Mở toang cửa sổ ra đường",
   "Trồng nhiều cây xanh giữa đường và lớp học",
   "Bật loa thật to trong lớp",
   "Chặt bỏ cây quanh trường"
  ],
  "answer": 1,
  "explanation": "Cây xanh, tường dày, cửa kính, rèm dày giúp ngăn bớt âm thanh truyền tới. Tiếng ồn kéo dài gây mệt mỏi, giảm tập trung và có hại cho tai."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Sự nở vì nhiệt",
  "source": "Ôn tập mở rộng 2026 – Câu 130",
  "content": "Chất lỏng trong ống nhiệt kế dâng lên khi đo vật nóng là vì:",
  "options": [
   "Chất lỏng nóng lên thì nở ra",
   "Chất lỏng lạnh đi thì nở ra",
   "Ống thuỷ tinh co lại đẩy chất lỏng lên",
   "Không khí đẩy chất lỏng lên"
  ],
  "answer": 0,
  "explanation": "Hầu hết các chất lỏng nở ra khi nóng lên và co lại khi lạnh đi. Nhiệt kế dùng tính chất này: nhiệt độ càng cao, chất lỏng nở càng nhiều, dâng càng cao."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Vận dụng cao",
  "lesson": "Thí nghiệm khoa học – Kiểm chứng công bằng",
  "source": "Ôn tập mở rộng 2026 – Câu 131",
  "content": "Minh muốn tìm hiểu: “Đường tan nhanh hơn trong nước nóng hay nước lạnh?”. Để thí nghiệm công bằng, Minh cần làm thế nào?",
  "options": [
   "Dùng nhiều đường hơn ở cốc nước nóng",
   "Khuấy cốc nước nóng, không khuấy cốc nước lạnh",
   "Dùng cốc nước lạnh to hơn cốc nước nóng",
   "Chỉ thay đổi nhiệt độ nước; giữ nguyên lượng nước, lượng đường, loại cốc và cách khuấy"
  ],
  "answer": 3,
  "explanation": "Trong thí nghiệm, chỉ được thay đổi MỘT yếu tố cần tìm hiểu (nhiệt độ nước); các yếu tố khác phải giữ giống nhau. Nếu thay đổi nhiều yếu tố cùng lúc, ta sẽ không biết yếu tố nào làm đường tan nhanh hơn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Không khí bị nén",
  "source": "Ôn tập mở rộng 2026 – Câu 132",
  "content": "Bơm xe đạp hoạt động được là nhờ tính chất nào của không khí?",
  "options": [
   "Không khí có màu xanh",
   "Không khí nặng hơn nước",
   "Không khí có thể bị nén lại và giãn ra",
   "Không khí có hình dạng cố định"
  ],
  "answer": 2,
  "explanation": "Khi ấn pít-tông, không khí trong thân bơm bị nén lại và bị đẩy vào săm xe. Không khí trong săm bị nén nên săm căng và đàn hồi."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Thiết kế kĩ thuật",
  "source": "Ôn tập mở rộng 2026 – Câu 133",
  "content": "Sơ đồ bên mô tả các bước thiết kế một sản phẩm. Bước còn thiếu ở ô có dấu “?” là gì?",
  "options": [
   "Trang trí sản phẩm",
   "Bán sản phẩm",
   "Làm mẫu và thử nghiệm",
   "Vứt bỏ ý tưởng cũ"
  ],
  "answer": 2,
  "explanation": "Quy trình thiết kế: Xác định vấn đề → Tìm hiểu, thu thập ý tưởng → Đề xuất giải pháp → Làm mẫu và thử nghiệm → Đánh giá, cải tiến (rồi có thể lặp lại).\nPhải làm mẫu và thử nghiệm thì mới có kết quả để đánh giá.",
  "image": "img/ontap2/c_design.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Vận dụng",
  "lesson": "Thiết kế kĩ thuật",
  "source": "Ôn tập mở rộng 2026 – Câu 134",
  "content": "Nhóm của An làm mô hình chiếc cầu bằng que kem. Khi thử nghiệm, cầu bị võng khi đặt vật nặng. Nhóm nên làm gì tiếp theo?",
  "options": [
   "Bỏ dở, không làm nữa",
   "Tìm nguyên nhân, cải tiến thiết kế (ví dụ thêm thanh giằng) rồi thử nghiệm lại",
   "Trang trí thêm cho cầu đẹp hơn",
   "Báo cáo là cầu đã đạt yêu cầu"
  ],
  "answer": 1,
  "explanation": "Sau thử nghiệm, nếu sản phẩm chưa đạt thì tìm nguyên nhân, điều chỉnh, cải tiến rồi thử lại. Các thanh giằng chéo tạo thành hình tam giác giúp cầu cứng vững hơn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Lắp ghép mô hình kĩ thuật",
  "source": "Ôn tập mở rộng 2026 – Câu 135",
  "content": "Trong bộ lắp ghép mô hình kĩ thuật, dụng cụ A ở hình bên là gì?",
  "options": [
   "Tua vít",
   "Cờ lê",
   "Kìm",
   "Búa"
  ],
  "answer": 0,
  "explanation": "Dụng cụ A có cán cầm và thân dài, đầu dẹt – đó là tua vít, dùng để vặn (siết hoặc tháo) vít. Dụng cụ B là cờ lê.",
  "image": "img/ontap2/c_tools.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Lắp ghép mô hình kĩ thuật",
  "source": "Ôn tập mở rộng 2026 – Câu 136",
  "content": "Khi lắp hai thanh thẳng bằng vít và đai ốc (ốc), ta dùng dụng cụ ở hình bên như thế nào?",
  "options": [
   "Dùng cờ lê để vặn vít, tua vít để giữ thanh",
   "Chỉ cần dùng tay, không cần dụng cụ",
   "Dùng búa đóng vít vào",
   "Dùng cờ lê (B) giữ chặt đai ốc, dùng tua vít (A) vặn vít"
  ],
  "answer": 3,
  "explanation": "Cờ lê giữ đai ốc không cho quay, tua vít vặn vít theo chiều kim đồng hồ để siết chặt. Muốn tháo thì vặn ngược chiều kim đồng hồ.",
  "image": "img/ontap2/c_tools.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Quạt điện",
  "source": "Ôn tập mở rộng 2026 – Câu 137",
  "content": "Bộ phận số 1 của quạt điện ở hình bên (lồng quạt) có tác dụng gì?",
  "options": [
   "Làm cho quạt quay nhanh hơn",
   "Điều chỉnh tốc độ gió",
   "Giữ cho quạt đứng vững",
   "Bảo vệ, ngăn tay và đồ vật chạm vào cánh quạt đang quay"
  ],
  "answer": 3,
  "explanation": "Lồng quạt bao quanh cánh quạt để bảo vệ người dùng. Cánh quạt (số 2) tạo ra gió; thân quạt (số 3) nâng đỡ; đế và các nút bấm (số 4) giữ quạt đứng vững và điều khiển tốc độ.",
  "image": "img/ontap2/c_fan.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "An toàn khi dùng quạt điện",
  "source": "Ôn tập mở rộng 2026 – Câu 138",
  "content": "Việc làm nào KHÔNG an toàn khi sử dụng quạt điện?",
  "options": [
   "Đặt quạt nơi chắc chắn, bằng phẳng",
   "Rút phích cắm điện trước khi lau quạt",
   "Thò ngón tay hoặc que vào lồng quạt khi quạt đang chạy",
   "Tắt quạt khi không sử dụng"
  ],
  "answer": 2,
  "explanation": "Cánh quạt quay rất nhanh, thò tay vào có thể bị thương. Trước khi lau chùi, phải tắt quạt và rút phích cắm.",
  "image": "img/ontap2/c_fan.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "An toàn điện",
  "source": "Ôn tập mở rộng 2026 – Câu 139",
  "content": "Khi phát hiện có người bị điện giật, việc đầu tiên em nên làm là gì?",
  "options": [
   "Dùng tay kéo ngay người bị điện giật ra",
   "Hô to gọi người lớn và ngắt nguồn điện (rút phích, tắt cầu dao) nếu có thể",
   "Dùng gậy sắt gạt dây điện",
   "Đứng nhìn rồi đi chỗ khác"
  ],
  "answer": 1,
  "explanation": "Không chạm tay trực tiếp vào người đang bị điện giật vì mình cũng sẽ bị giật. Cần gọi người lớn, ngắt nguồn điện; nếu phải tách dây điện thì dùng vật khô, cách điện như gậy gỗ khô, đứng trên vật cách điện. Sau đó gọi cấp cứu 115."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "An toàn điện",
  "source": "Ôn tập mở rộng 2026 – Câu 140",
  "content": "Vì sao không được cắm hoặc rút phích điện khi tay đang ướt?",
  "options": [
   "Vì nước dẫn điện, dễ bị điện giật",
   "Vì nước làm hỏng phích cắm ngay lập tức",
   "Vì tay ướt làm phích cắm trơn, khó rút",
   "Vì nước làm điện mất"
  ],
  "answer": 0,
  "explanation": "Nước (nhất là nước có lẫn muối, chất bẩn trên da) dẫn điện. Tay ướt chạm vào điện rất dễ bị điện giật nguy hiểm."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Đèn học",
  "source": "Ôn tập mở rộng 2026 – Câu 141",
  "content": "Bộ phận số 2 của đèn học ở hình bên (chao đèn) có tác dụng gì?",
  "options": [
   "Tập trung ánh sáng chiếu xuống mặt bàn, tránh chói mắt",
   "Phát ra ánh sáng",
   "Bật, tắt đèn",
   "Dẫn điện từ ổ cắm vào đèn"
  ],
  "answer": 0,
  "explanation": "Chao đèn hướng ánh sáng xuống bàn học và che bớt ánh sáng chiếu thẳng vào mắt. Bóng đèn (số 1) phát sáng; công tắc (số 3) bật tắt đèn; dây và phích cắm (số 4) dẫn điện.",
  "image": "img/ontap2/c_lamp.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Đèn học",
  "source": "Ôn tập mở rộng 2026 – Câu 142",
  "content": "Ở hình bên, bộ phận số 3 dùng để làm gì?",
  "options": [
   "Phát ra ánh sáng",
   "Đỡ toàn bộ đèn",
   "Che ánh sáng",
   "Bật, tắt đèn (công tắc)"
  ],
  "answer": 3,
  "explanation": "Bộ phận số 3 là công tắc, giúp đóng (đèn sáng) hoặc ngắt (đèn tắt) dòng điện vào bóng đèn.",
  "image": "img/ontap2/c_lamp.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Số điện thoại khẩn cấp",
  "source": "Ôn tập mở rộng 2026 – Câu 143",
  "content": "Khi phát hiện đám cháy, em cần nhờ người lớn gọi ngay số điện thoại nào?",
  "options": [
   "113",
   "115",
   "114",
   "1080"
  ],
  "answer": 2,
  "explanation": "Ở Việt Nam: 114 – Cứu hoả và cứu nạn, cứu hộ; 113 – Công an (an ninh, trật tự); 115 – Cấp cứu y tế."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Số điện thoại khẩn cấp",
  "source": "Ôn tập mở rộng 2026 – Câu 144",
  "content": "Khi có người bị ngất xỉu, cần cấp cứu y tế, ta gọi số điện thoại nào?",
  "options": [
   "114",
   "115",
   "113",
   "111"
  ],
  "answer": 1,
  "explanation": "115 là số cấp cứu y tế. Khi gọi cần nói rõ địa chỉ, tình trạng người bệnh. (111 là tổng đài bảo vệ trẻ em.)"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Trồng hoa trong chậu",
  "source": "Ôn tập mở rộng 2026 – Câu 145",
  "content": "Hình bên là mặt cắt một chậu trồng cây. Lớp số 1 ở đáy chậu thường là sỏi hoặc đá nhỏ. Lớp này có tác dụng gì?",
  "options": [
   "Cung cấp phân bón cho cây",
   "Giúp thoát nước tốt, tránh úng rễ",
   "Làm chậu nhẹ hơn",
   "Giữ thật nhiều nước trong chậu"
  ],
  "answer": 1,
  "explanation": "Lớp sỏi ở đáy để nước thừa chảy xuống lỗ thoát nước (số 4) nhanh, không đọng lại làm rễ bị úng, thối. Lớp đất/giá thể ở trên cung cấp chất dinh dưỡng cho cây.",
  "image": "img/ontap2/c_pot.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Trồng hoa trong chậu",
  "source": "Ôn tập mở rộng 2026 – Câu 146",
  "content": "Vì sao chậu trồng cây cần có lỗ ở đáy (vị trí số 4 ở hình bên)?",
  "options": [
   "Để nước thừa thoát ra ngoài, rễ không bị úng",
   "Để côn trùng chui vào",
   "Để chậu đẹp hơn",
   "Để đất chảy ra ngoài"
  ],
  "answer": 0,
  "explanation": "Rễ cây cần cả nước và không khí. Nếu nước đọng lại trong chậu, đất bị bí, rễ thiếu không khí sẽ bị thối. Lỗ thoát nước giúp nước thừa chảy ra.",
  "image": "img/ontap2/c_pot.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Chăm sóc cây",
  "source": "Ôn tập mở rộng 2026 – Câu 147",
  "content": "Cách tưới nước cho cây hoa trồng trong chậu nào dưới đây là hợp lí?",
  "options": [
   "Tưới thật nhiều vào giữa trưa nắng gắt",
   "Tưới liên tục cả ngày",
   "Không bao giờ tưới",
   "Tưới vào sáng sớm hoặc chiều mát, khi đất khô, lượng vừa đủ"
  ],
  "answer": 3,
  "explanation": "Tưới lúc trời mát để nước không bay hơi quá nhanh và không làm cây bị “sốc nhiệt”. Chỉ tưới khi đất se khô, tưới vừa đủ ẩm, không để úng."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Chọn cây phù hợp",
  "source": "Ôn tập mở rộng 2026 – Câu 148",
  "content": "Cây cảnh nào dưới đây ưa bóng râm, phù hợp đặt trong phòng học?",
  "options": [
   "Cây hoa hướng dương",
   "Cây hoa hồng",
   "Cây trầu bà",
   "Cây xương rồng"
  ],
  "answer": 2,
  "explanation": "Trầu bà chịu được bóng râm, sống tốt trong nhà. Hướng dương, hoa hồng, xương rồng ưa nhiều nắng, cần đặt ngoài trời hoặc nơi có nắng."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Đồ chơi dân gian",
  "source": "Ôn tập mở rộng 2026 – Câu 149",
  "content": "Chiếc chong chóng giấy quay được là nhờ:",
  "options": [
   "Pin bên trong chong chóng",
   "Nam châm gắn ở cán",
   "Gió thổi vào cánh chong chóng",
   "Ánh sáng Mặt Trời"
  ],
  "answer": 2,
  "explanation": "Khi có gió (hoặc khi ta cầm chạy), không khí chuyển động đẩy vào các cánh chong chóng được gấp nghiêng, làm chong chóng quay."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "An toàn khi chơi",
  "source": "Ôn tập mở rộng 2026 – Câu 150",
  "content": "Thả diều ở nơi nào là an toàn nhất?",
  "options": [
   "Trên mái nhà",
   "Bãi đất trống rộng, xa đường dây điện và đường giao thông",
   "Gần đường dây điện cao thế",
   "Giữa lòng đường"
  ],
  "answer": 1,
  "explanation": "Diều mắc vào dây điện có thể gây điện giật, chập cháy; thả diều trên mái nhà dễ ngã; ở lòng đường dễ gặp tai nạn giao thông."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Sản phẩm công nghệ",
  "source": "Ôn tập mở rộng 2026 – Câu 151",
  "content": "Đâu là sản phẩm công nghệ (do con người làm ra)?",
  "options": [
   "Chiếc xe đạp",
   "Dòng sông",
   "Ngọn núi",
   "Cây cổ thụ trong rừng"
  ],
  "answer": 0,
  "explanation": "Sản phẩm công nghệ do con người sáng tạo ra để đáp ứng nhu cầu cuộc sống, như xe đạp, quạt điện, máy tính. Sông, núi, cây rừng là tự nhiên."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Nhà sáng chế",
  "source": "Ôn tập mở rộng 2026 – Câu 152",
  "content": "Ai là nhà sáng chế nổi tiếng gắn với việc hoàn thiện và phổ biến bóng đèn điện sợi đốt?",
  "options": [
   "A-lếch-xan-đơ Gra-ham Beo (Alexander Graham Bell)",
   "Ai-xắc Niu-tơn (Isaac Newton)",
   "Các anh em nhà Rai (Wright)",
   "Thô-mát Ê-đi-xơn (Thomas Edison)"
  ],
  "answer": 3,
  "explanation": "Thomas Edison cùng cộng sự đã chế tạo được bóng đèn sợi đốt bền, dùng được lâu (năm 1879) và đưa điện vào đời sống. Graham Bell gắn với điện thoại; anh em nhà Wright với máy bay."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Nhà sáng chế",
  "source": "Ôn tập mở rộng 2026 – Câu 153",
  "content": "Nhà sáng chế nào được biết đến với phát minh điện thoại?",
  "options": [
   "Thô-mát Ê-đi-xơn (Thomas Edison)",
   "Lu-i Pa-xtơ (Louis Pasteur)",
   "An-be Anh-xtanh (Albert Einstein)",
   "A-lếch-xan-đơ Gra-ham Beo (Alexander Graham Bell)"
  ],
  "answer": 3,
  "explanation": "Năm 1876, Alexander Graham Bell được cấp bằng sáng chế điện thoại – thiết bị truyền giọng nói đi xa bằng điện."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Sử dụng điện tiết kiệm",
  "source": "Ôn tập mở rộng 2026 – Câu 154",
  "content": "Biểu đồ bên cho biết số điện nhà Lan dùng trong 4 tháng. Tháng nào nhà Lan dùng nhiều điện nhất?",
  "options": [
   "Tháng 1",
   "Tháng 2",
   "Tháng 4",
   "Tháng 3"
  ],
  "answer": 2,
  "explanation": "Cột tháng 4 cao nhất (200 kWh). Tháng nóng thường dùng nhiều điện hơn vì bật quạt, điều hoà.",
  "image": "img/ontap2/c_elec.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Vận dụng",
  "lesson": "Sử dụng điện tiết kiệm",
  "source": "Ôn tập mở rộng 2026 – Câu 155",
  "content": "Theo biểu đồ bên, nếu mỗi kWh điện giá 2 000 đồng thì tiền điện tháng 3 của nhà Lan là bao nhiêu?",
  "options": [
   "120 000 đồng",
   "240 000 đồng",
   "400 000 đồng",
   "24 000 đồng"
  ],
  "answer": 1,
  "explanation": "Tháng 3 dùng 120 kWh. Tiền điện: 120 × 2 000 = 240 000 (đồng). (Trong thực tế giá điện tính theo bậc; ở đây coi giá như nhau cho dễ tính.)",
  "image": "img/ontap2/c_elec.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Mô hình điện mặt trời",
  "source": "Ôn tập mở rộng 2026 – Câu 156",
  "content": "Khi lắp mô hình quạt chạy bằng pin mặt trời, cần đặt tấm pin ở đâu để quạt quay tốt nhất?",
  "options": [
   "Nơi có nhiều ánh nắng chiếu trực tiếp vào tấm pin",
   "Trong phòng tối",
   "Úp mặt tấm pin xuống đất",
   "Trong tủ kín"
  ],
  "answer": 0,
  "explanation": "Tấm pin mặt trời cần nhận nhiều ánh sáng để tạo ra nhiều điện. Mặt pin phải hướng về phía Mặt Trời, không bị che khuất."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Mạch điện có công tắc",
  "source": "Ôn tập mở rộng 2026 – Câu 157",
  "content": "Trong mạch điện ở hình bên, công tắc đang mở. Khi ta đóng công tắc lại thì:",
  "options": [
   "Mạch điện kín, bóng đèn sáng",
   "Mạch điện hở, bóng đèn tắt",
   "Pin bị hỏng ngay",
   "Bóng đèn phát ra âm thanh"
  ],
  "answer": 0,
  "explanation": "Công tắc dùng để đóng hoặc ngắt mạch điện. Khi đóng công tắc, mạch kín, dòng điện chạy qua bóng đèn nên đèn sáng. Khi mở công tắc, mạch hở, đèn tắt.",
  "image": "img/ontap2/c_switch.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Mô hình máy phát điện gió",
  "source": "Ôn tập mở rộng 2026 – Câu 158",
  "content": "Trong mô hình máy phát điện gió, bộ phận nào trực tiếp đón gió để quay?",
  "options": [
   "Cột đỡ",
   "Đế",
   "Dây dẫn điện",
   "Cánh quạt"
  ],
  "answer": 3,
  "explanation": "Gió thổi làm cánh quạt quay; cánh quạt làm quay trục của máy phát nhỏ (động cơ) để tạo ra điện."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Sử dụng tủ lạnh",
  "source": "Ôn tập mở rộng 2026 – Câu 159",
  "content": "Vì sao không nên để thức ăn còn nóng vào tủ lạnh ngay?",
  "options": [
   "Vì thức ăn sẽ bị đông đá ngay",
   "Vì tủ lạnh sẽ phát nổ",
   "Vì tủ lạnh phải làm việc nhiều hơn, tốn điện và ảnh hưởng đến thực phẩm khác",
   "Vì thức ăn nóng làm tủ lạnh sáng đèn"
  ],
  "answer": 2,
  "explanation": "Thức ăn nóng làm nhiệt độ trong tủ tăng lên, tủ phải chạy nhiều hơn để làm lạnh lại → tốn điện, các thực phẩm khác có thể bị ấm lên nhanh hỏng. Nên để nguội bớt, đậy kín rồi mới cho vào tủ."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Vận dụng",
  "lesson": "An toàn trong gia đình",
  "source": "Ôn tập mở rộng 2026 – Câu 160",
  "content": "Khi ngửi thấy mùi khí gas (ga) rò rỉ trong bếp, việc nào nên làm?",
  "options": [
   "Bật đèn lên để xem chỗ rò rỉ",
   "Không bật lửa, không bật công tắc điện; mở cửa cho thoáng, khoá van gas và báo người lớn",
   "Bật bếp kiểm tra xem còn gas không",
   "Bật quạt điện để thổi gas đi"
  ],
  "answer": 1,
  "explanation": "Khí gas gặp tia lửa (kể cả tia lửa nhỏ khi bật công tắc điện) có thể gây cháy nổ. Cần mở cửa thông gió, khoá van bình gas và nhanh chóng báo người lớn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Đèn tín hiệu giao thông",
  "source": "Ôn tập mở rộng 2026 – Câu 161",
  "content": "Khi đèn tín hiệu giao thông chuyển sang màu vàng, người tham gia giao thông cần:",
  "options": [
   "Tăng tốc để vượt qua",
   "Giảm tốc độ và dừng lại trước vạch dừng (trừ khi đã đi quá vạch)",
   "Quay đầu xe",
   "Bấm còi liên tục"
  ],
  "answer": 1,
  "explanation": "Đèn vàng báo hiệu sắp chuyển sang đèn đỏ: phải giảm tốc độ, dừng trước vạch dừng. Nếu đã đi quá vạch dừng thì được đi tiếp nhưng phải chú ý. Đèn xanh được đi; đèn đỏ phải dừng."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Xe đạp",
  "source": "Ôn tập mở rộng 2026 – Câu 162",
  "content": "Bộ phận số 2 của xe đạp ở hình bên (bàn đạp) có tác dụng gì?",
  "options": [
   "Người đi xe đạp đạp lên để truyền lực làm bánh xe quay",
   "Giúp xe dừng lại",
   "Để ngồi",
   "Để điều khiển hướng đi"
  ],
  "answer": 0,
  "explanation": "Khi đạp bàn đạp, đĩa xích quay, xích truyền chuyển động đến bánh sau làm xe chạy. Tay lái (số 3) để điều khiển hướng; yên (số 4) để ngồi; phanh giúp xe dừng lại.",
  "image": "img/ontap2/c_bike.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Xe đạp",
  "source": "Ôn tập mở rộng 2026 – Câu 163",
  "content": "Ở hình bên, bộ phận số 3 (ghi đông, tay lái) dùng để làm gì?",
  "options": [
   "Làm xe chạy nhanh hơn",
   "Chở hàng hoá",
   "Chiếu sáng ban đêm",
   "Điều khiển hướng đi của xe"
  ],
  "answer": 3,
  "explanation": "Ghi đông nối với bánh trước; xoay ghi đông thì bánh trước đổi hướng, giúp xe rẽ trái, rẽ phải. Trên ghi đông còn gắn tay phanh và chuông.",
  "image": "img/ontap2/c_bike.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Vật liệu",
  "source": "Ôn tập mở rộng 2026 – Câu 164",
  "content": "Để làm mô hình chiếc thuyền nổi tốt trên mặt nước, nên chọn vật liệu nào?",
  "options": [
   "Viên đá",
   "Thanh sắt đặc",
   "Chai nhựa rỗng đậy kín nắp hoặc miếng xốp",
   "Đất sét nặn khối đặc"
  ],
  "answer": 2,
  "explanation": "Chai nhựa rỗng chứa nhiều không khí và miếng xốp đều nhẹ nên nổi tốt. Đá, sắt đặc, khối đất sét đặc nặng nên chìm."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Vận dụng",
  "lesson": "Thiết kế – Thử nghiệm công bằng",
  "source": "Ôn tập mở rộng 2026 – Câu 165",
  "content": "Hai nhóm làm cầu bằng giấy và muốn so sánh cầu nhóm nào chịu được nặng hơn. Cách thử nào công bằng nhất?",
  "options": [
   "Mỗi nhóm tự chọn vật nặng khác nhau",
   "Một cầu đặt trên giá xa, một cầu trên giá gần",
   "Đặt hai cầu trên hai giá đỡ cách nhau như nhau, thêm dần các vật nặng giống nhau vào giữa cầu cho đến khi cầu sập",
   "Chỉ nhìn xem cầu nào đẹp hơn"
  ],
  "answer": 2,
  "explanation": "Thử nghiệm công bằng: chỉ khác nhau ở thiết kế cầu; còn khoảng cách giá đỡ, loại vật nặng, vị trí đặt vật phải như nhau. Khi đó cầu chịu được nhiều vật hơn là cầu khoẻ hơn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Công nghệ và môi trường",
  "source": "Ôn tập mở rộng 2026 – Câu 166",
  "content": "Việc làm nào thể hiện sử dụng sản phẩm công nghệ thân thiện với môi trường?",
  "options": [
   "Dùng thật nhiều túi ni-lông",
   "Dùng túi vải, bình nước cá nhân thay cho túi ni-lông, chai nhựa dùng một lần",
   "Vứt pin cũ vào thùng rác chung",
   "Đốt chai nhựa sau khi dùng"
  ],
  "answer": 1,
  "explanation": "Túi vải, bình nước dùng được nhiều lần giúp giảm rác thải nhựa. Pin cũ cần bỏ vào nơi thu gom riêng vì chứa chất độc hại; đốt nhựa gây ô nhiễm không khí."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Vai trò của công nghệ",
  "source": "Ôn tập mở rộng 2026 – Câu 167",
  "content": "Chiếc máy hút bụi tự động (rô-bốt hút bụi) mang lại lợi ích gì cho gia đình?",
  "options": [
   "Giúp làm sạch nhà, giảm bớt công việc cho con người",
   "Giúp nấu cơm",
   "Giúp giặt quần áo",
   "Giúp tưới cây ngoài vườn"
  ],
  "answer": 0,
  "explanation": "Rô-bốt hút bụi tự di chuyển trong nhà để hút bụi, giúp tiết kiệm thời gian, công sức. Đây là ví dụ về công nghệ phục vụ đời sống."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Sử dụng thiết bị an toàn",
  "source": "Ôn tập mở rộng 2026 – Câu 168",
  "content": "Cắm quá nhiều thiết bị điện có công suất lớn vào cùng một ổ cắm có thể gây nguy hiểm gì?",
  "options": [
   "Các thiết bị chạy nhanh hơn",
   "Tiết kiệm được nhiều điện",
   "Không có nguy hiểm gì",
   "Ổ cắm, dây điện quá tải, nóng lên và có thể gây cháy"
  ],
  "answer": 3,
  "explanation": "Mỗi ổ cắm, dây điện chỉ chịu được một mức dòng điện nhất định. Cắm quá nhiều thiết bị (bếp điện, ấm siêu tốc, bàn là…) làm dây nóng lên, có thể chảy nhựa và gây cháy."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Vận dụng",
  "lesson": "Kí hiệu mạch điện",
  "source": "Ôn tập mở rộng 2026 – Câu 169",
  "content": "Hình bên là ba kí hiệu thường dùng khi vẽ sơ đồ mạch điện. Kí hiệu số 2 là của bộ phận nào?",
  "options": [
   "Pin",
   "Công tắc",
   "Dây dẫn",
   "Bóng đèn"
  ],
  "answer": 3,
  "explanation": "Kí hiệu 1 (một vạch dài, một vạch ngắn đậm) là pin; kí hiệu 2 (vòng tròn có dấu ×) là bóng đèn; kí hiệu 3 (một đoạn nghiêng hở) là công tắc đang mở.",
  "image": "img/ontap2/c_symbols.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Nhân giống cây",
  "source": "Ôn tập mở rộng 2026 – Câu 170",
  "content": "Bác Hà muốn có thêm nhiều cây hoa hồng giống hệt cây mẹ trong thời gian ngắn. Bác nên làm cách nào?",
  "options": [
   "Gieo hạt",
   "Trồng bằng lá",
   "Giâm cành",
   "Trồng bằng hoa"
  ],
  "answer": 2,
  "explanation": "Hoa hồng thường được nhân giống bằng giâm cành (hoặc chiết, ghép): cắt một đoạn cành khoẻ có mắt, cắm vào giá thể ẩm để ra rễ thành cây mới. Cây con giữ được đặc điểm của cây mẹ và nhanh ra hoa hơn gieo hạt."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Lắp ghép mô hình kĩ thuật",
  "source": "Ôn tập mở rộng 2026 – Câu 171",
  "content": "Trong bộ lắp ghép, chi tiết nào dùng để nối và giữ chặt các tấm, thanh với nhau?",
  "options": [
   "Bánh xe",
   "Vít và đai ốc (ốc)",
   "Tua vít",
   "Cờ lê"
  ],
  "answer": 1,
  "explanation": "Vít và đai ốc là chi tiết nối, giữ các tấm, thanh lại với nhau. Tua vít và cờ lê là dụng cụ để vặn, không phải chi tiết lắp vào mô hình."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Năng lượng cho thiết bị",
  "source": "Ôn tập mở rộng 2026 – Câu 172",
  "content": "Chiếc đồng hồ đeo tay điện tử thường hoạt động nhờ nguồn năng lượng nào?",
  "options": [
   "Pin",
   "Gió",
   "Nước",
   "Than"
  ],
  "answer": 0,
  "explanation": "Đồng hồ điện tử dùng pin nhỏ (pin cúc áo) cung cấp điện. Khi hết pin cần thay và bỏ pin cũ vào nơi thu gom riêng."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Tiết kiệm năng lượng",
  "source": "Ôn tập mở rộng 2026 – Câu 173",
  "content": "So với bóng đèn sợi đốt, bóng đèn LED có ưu điểm gì?",
  "options": [
   "Tiết kiệm điện hơn, ít toả nhiệt và bền hơn",
   "Tốn điện hơn",
   "Nóng hơn nhiều",
   "Chỉ dùng được ban ngày"
  ],
  "answer": 0,
  "explanation": "Với cùng độ sáng, đèn LED dùng ít điện hơn nhiều lần, ít nóng và tuổi thọ cao hơn bóng sợi đốt. Vì vậy nên dùng đèn LED để tiết kiệm điện."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Vận dụng",
  "lesson": "Sử dụng máy giặt an toàn",
  "source": "Ôn tập mở rộng 2026 – Câu 174",
  "content": "Đặt máy giặt ở vị trí nào là phù hợp và an toàn?",
  "options": [
   "Ngoài trời, nơi mưa nắng",
   "Trên bậc thang nghiêng",
   "Sát bếp lửa",
   "Nơi khô ráo, bằng phẳng, thoáng, gần ổ cắm có dây nối đất"
  ],
  "answer": 3,
  "explanation": "Máy giặt dùng điện và nước nên cần đặt nơi khô ráo, bằng phẳng (để máy không rung lắc mạnh) và có nối đất để chống giật. Không đặt nơi mưa ướt, nghiêng hoặc gần lửa."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Sử dụng điện thoại, máy tính bảng",
  "source": "Ôn tập mở rộng 2026 – Câu 175",
  "content": "Thói quen nào giúp bảo vệ mắt khi sử dụng điện thoại, máy tính bảng?",
  "options": [
   "Dùng trong bóng tối hoàn toàn",
   "Để màn hình sát mắt",
   "Giữ khoảng cách hợp lí, không dùng quá lâu, cứ khoảng 20 phút lại nhìn ra xa để mắt nghỉ",
   "Dùng liên tục nhiều giờ không nghỉ"
  ],
  "answer": 2,
  "explanation": "Nhìn màn hình gần và lâu làm mắt mỏi, dễ cận thị. Cần đủ ánh sáng, giữ khoảng cách, nghỉ giải lao thường xuyên và hạn chế thời gian dùng thiết bị."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Vận dụng",
  "lesson": "Thiết kế sản phẩm",
  "source": "Ôn tập mở rộng 2026 – Câu 176",
  "content": "Lớp em muốn làm một chiếc hộp đựng bút từ vật liệu tái chế. Theo quy trình thiết kế, việc nên làm ĐẦU TIÊN là gì?",
  "options": [
   "Sơn màu thật đẹp",
   "Xác định nhu cầu: hộp đựng bao nhiêu bút, kích thước, yêu cầu chắc chắn",
   "Mang ra lớp khoe ngay",
   "Cắt luôn vỏ hộp sữa không cần đo"
  ],
  "answer": 1,
  "explanation": "Bước đầu tiên của thiết kế là xác định vấn đề, nhu cầu và các yêu cầu của sản phẩm; sau đó mới tìm ý tưởng, chọn vật liệu, làm mẫu, thử nghiệm và cải tiến."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Nhận biết",
  "lesson": "Máy tính",
  "source": "Ôn tập mở rộng 2026 – Câu 177",
  "content": "Bộ phận số 2 của máy tính để bàn ở hình bên là gì?",
  "options": [
   "Màn hình",
   "Thân máy – nơi xử lí thông tin",
   "Bàn phím",
   "Chuột"
  ],
  "answer": 1,
  "explanation": "Hình bên: 1 – màn hình, 2 – thân máy (chứa bộ xử lí, bộ nhớ…), 3 – bàn phím, 4 – chuột. Thân máy là nơi xử lí thông tin.",
  "image": "img/ontap2/i_pc.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Nhận biết",
  "lesson": "Thiết bị vào – ra",
  "source": "Ôn tập mở rộng 2026 – Câu 178",
  "content": "Trong hình bên, những bộ phận nào dùng để đưa thông tin VÀO máy tính?",
  "options": [
   "Bàn phím (3) và chuột (4)",
   "Màn hình (1) và thân máy (2)",
   "Chỉ màn hình (1)",
   "Màn hình (1) và chuột (4)"
  ],
  "answer": 0,
  "explanation": "Bàn phím và chuột là thiết bị vào: ta gõ chữ, nháy chuột để ra lệnh cho máy tính. Màn hình là thiết bị ra – hiển thị kết quả.",
  "image": "img/ontap2/i_pc.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Tổ chức thư mục",
  "source": "Ôn tập mở rộng 2026 – Câu 179",
  "content": "Quan sát cây thư mục ở hình bên. Tệp “baitap1.docx” nằm trong thư mục nào?",
  "options": [
   "Thư mục Hoc tap",
   "Thư mục Tieng Viet",
   "Thư mục Giai tri",
   "Thư mục Toan"
  ],
  "answer": 3,
  "explanation": "Tệp baitap1.docx được vẽ ngay dưới, lùi vào bên trong thư mục Toan. Thư mục Toan lại nằm trong thư mục Hoc tap. Đường dẫn: D:\\Hoc tap\\Toan\\baitap1.docx.",
  "image": "img/ontap2/i_tree.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Tổ chức thư mục",
  "source": "Ôn tập mở rộng 2026 – Câu 180",
  "content": "Theo cây thư mục ở hình bên, thư mục “Hoc tap” có mấy thư mục con?",
  "options": [
   "1 thư mục con",
   "3 thư mục con",
   "2 thư mục con",
   "4 thư mục con"
  ],
  "answer": 2,
  "explanation": "Thư mục Hoc tap có 2 thư mục con là Toan và Tieng Viet. Giai tri không nằm trong Hoc tap mà nằm trực tiếp trong ổ D.",
  "image": "img/ontap2/i_tree.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Nhận biết",
  "lesson": "An toàn trên mạng",
  "source": "Ôn tập mở rộng 2026 – Câu 181",
  "content": "Một người lạ làm quen trên mạng và hỏi địa chỉ nhà, trường học của em. Em nên làm gì?",
  "options": [
   "Gửi ngay địa chỉ cho người đó",
   "Hẹn gặp người đó một mình",
   "Không cung cấp thông tin, báo ngay cho bố mẹ hoặc thầy cô",
   "Gửi thêm ảnh của mình"
  ],
  "answer": 2,
  "explanation": "Không chia sẻ thông tin cá nhân (họ tên đầy đủ, địa chỉ, trường, số điện thoại, ảnh) cho người lạ trên mạng. Gặp tình huống khiến em lo lắng, hãy kể ngay với người lớn tin cậy."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Mật khẩu an toàn",
  "source": "Ôn tập mở rộng 2026 – Câu 182",
  "content": "Mật khẩu nào dưới đây an toàn nhất?",
  "options": [
   "123456",
   "Hoa@2026!xanh",
   "matkhau",
   "ngày sinh của em"
  ],
  "answer": 1,
  "explanation": "Mật khẩu mạnh cần dài, có chữ hoa, chữ thường, chữ số và kí tự đặc biệt, khó đoán. “123456”, “matkhau”, ngày sinh rất dễ bị đoán. Không chia sẻ mật khẩu cho bạn bè."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Lập trình Scratch",
  "source": "Ôn tập mở rộng 2026 – Câu 183",
  "content": "Nhân vật thực hiện đoạn chương trình Scratch ở hình bên. Nét bút sẽ vẽ ra hình gì?",
  "options": [
   "Hình vuông",
   "Hình tam giác đều",
   "Hình tròn",
   "Một đoạn thẳng"
  ],
  "answer": 0,
  "explanation": "Lặp 4 lần: đi 100 bước rồi quay 90 độ → 4 cạnh dài bằng nhau, 4 góc vuông → hình vuông. Sau 4 lần quay 90 độ, nhân vật quay đủ 360 độ, trở về hướng ban đầu.",
  "image": "img/ontap2/i_square.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng cao",
  "lesson": "Lập trình Scratch",
  "source": "Ôn tập mở rộng 2026 – Câu 184",
  "content": "Muốn sửa đoạn chương trình ở hình bên để vẽ được hình tam giác đều, cần sửa thế nào?",
  "options": [
   "Lặp lại 3 lần, xoay 60 độ",
   "Lặp lại 4 lần, xoay 120 độ",
   "Lặp lại 3 lần, xoay 90 độ",
   "Lặp lại 3 lần, xoay 120 độ"
  ],
  "answer": 3,
  "explanation": "Tam giác có 3 cạnh nên lặp 3 lần. Để quay đủ một vòng 360 độ sau 3 lần, mỗi lần xoay 360 : 3 = 120 độ.\nLỗi dễ mắc: xoay 60 độ (góc trong của tam giác đều) – khi đó nhân vật vẽ ra nửa hình lục giác chứ không khép kín.",
  "image": "img/ontap2/i_square.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Nhận biết",
  "lesson": "Lập trình Scratch",
  "source": "Ôn tập mở rộng 2026 – Câu 185",
  "content": "Trong Scratch, khối lệnh “nói Xin chào! trong 2 giây” thuộc nhóm lệnh nào?",
  "options": [
   "Chuyển động (Motion)",
   "Sự kiện (Events)",
   "Điều khiển (Control)",
   "Hiển thị (Looks)"
  ],
  "answer": 3,
  "explanation": "Nhóm Hiển thị (màu tím) chứa các lệnh nói, nghĩ, đổi trang phục, đổi kích thước… Nhóm Chuyển động (xanh dương) chứa lệnh di chuyển, xoay."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Nhận biết",
  "lesson": "Lập trình Scratch",
  "source": "Ôn tập mở rộng 2026 – Câu 186",
  "content": "Trong Scratch, khối lệnh “khi bấm vào lá cờ xanh” thuộc nhóm lệnh nào?",
  "options": [
   "Hiển thị (Looks)",
   "Âm thanh (Sound)",
   "Sự kiện (Events)",
   "Cảm biến (Sensing)"
  ],
  "answer": 2,
  "explanation": "Khối “khi bấm vào lá cờ xanh” (màu vàng) thuộc nhóm Sự kiện, thường dùng để bắt đầu chương trình."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Thuật toán – Điều khiển rô-bốt",
  "source": "Ôn tập mở rộng 2026 – Câu 187",
  "content": "Rô-bốt đứng ở ô góc dưới bên trái, quay mặt theo mũi tên (lên trên) như hình bên. Chương trình nào đưa rô-bốt đến ô có ngôi sao? (“Tiến n” là đi thẳng n ô; “Quay phải/Quay trái” là quay tại chỗ một góc vuông.)",
  "options": [
   "Tiến 2, Quay phải, Tiến 3",
   "Tiến 3, Quay phải, Tiến 2",
   "Quay phải, Tiến 3, Quay trái, Tiến 2",
   "Tiến 3, Quay trái, Tiến 2"
  ],
  "answer": 1,
  "explanation": "Ngôi sao ở cao hơn rô-bốt 3 ô và lệch sang phải 2 ô.\nTiến 3: đi lên 3 ô. Quay phải: mặt hướng sang phải. Tiến 2: đi sang phải 2 ô → tới ngôi sao.\nCác phương án khác: đi lên 2 – sang phải 3 (sai ô); quay trái sẽ đi ra ngoài lưới.",
  "image": "img/ontap2/i_robot1.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Thuật toán – Vòng lặp",
  "source": "Ôn tập mở rộng 2026 – Câu 188",
  "content": "Rô-bốt ở hình bên thực hiện chương trình: “Lặp lại 4 lần: Tiến 2, Quay phải”. Sau khi chạy xong, rô-bốt ở đâu?",
  "options": [
   "Trở về đúng ô xuất phát",
   "Ở ô có ngôi sao",
   "Ở góc trên bên phải của lưới",
   "Đi ra ngoài lưới"
  ],
  "answer": 0,
  "explanation": "Rô-bốt đi 4 cạnh, mỗi cạnh 2 ô, sau mỗi cạnh quay phải: lên 2 → sang phải 2 → xuống 2 → sang trái 2. Rô-bốt đi hết một hình vuông và trở về ô xuất phát (lại quay mặt lên trên).",
  "image": "img/ontap2/i_robot1.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Mã hoá thông tin",
  "source": "Ôn tập mở rộng 2026 – Câu 189",
  "content": "Quy ước mã hoá: A = 1, B = 2, C = 3, …, Z = 26 (theo bảng chữ cái tiếng Anh). Từ “CODE” được mã hoá thành:",
  "options": [
   "3 – 15 – 4 – 5",
   "3 – 14 – 4 – 5",
   "4 – 15 – 5 – 6",
   "3 – 15 – 5 – 4"
  ],
  "answer": 0,
  "explanation": "C là chữ thứ 3; O là chữ thứ 15; D là chữ thứ 4; E là chữ thứ 5 → 3 – 15 – 4 – 5.\nBảng chữ cái: A B C D E F G H I J K L M N O… (O đứng sau N là chữ thứ 14)."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Giải mã thông tin",
  "source": "Ôn tập mở rộng 2026 – Câu 190",
  "content": "Vẫn quy ước A = 1, B = 2, …, Z = 26. Dãy mã “8 – 14 – 21 – 5” là tên viết tắt của một trường đại học. Đó là:",
  "options": [
   "HMTE",
   "GNUE",
   "HNVE",
   "HNUE"
  ],
  "answer": 3,
  "explanation": "8 → H; 14 → N; 21 → U; 5 → E. Vậy là HNUE (Trường Đại học Sư phạm Hà Nội).\nKiểm tra: G là 7, M là 13, T là 20, V là 22 nên các phương án khác sai."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Biểu diễn hình ảnh bằng số",
  "source": "Ôn tập mở rộng 2026 – Câu 191",
  "content": "Mỗi ô của hình bên được mã hoá: ô tô đen là 1, ô trắng là 0, đọc từ trái sang phải. Hàng 4 được mã hoá là:",
  "options": [
   "10001",
   "00100",
   "01110",
   "11111"
  ],
  "answer": 2,
  "explanation": "Hàng 4 có ô 1 trắng, ô 2, 3, 4 đen, ô 5 trắng → 0 1 1 1 0.\nĐây là cách máy tính lưu hình ảnh: chia hình thành các ô nhỏ (điểm ảnh) và ghi màu của từng ô bằng số.",
  "image": "img/ontap2/i_pixel.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Biểu diễn hình ảnh bằng số",
  "source": "Ôn tập mở rộng 2026 – Câu 192",
  "content": "Theo cách mã hoá ở hình bên (đen = 1, trắng = 0), hình có tổng cộng bao nhiêu ô màu đen?",
  "options": [
   "15 ô",
   "16 ô",
   "17 ô",
   "25 ô"
  ],
  "answer": 1,
  "explanation": "Đếm số chữ số 1 ở từng hàng: hàng 1: 01010 → 2; hàng 2: 11111 → 5; hàng 3: 5; hàng 4: 01110 → 3; hàng 5: 00100 → 1.\nTổng: 2 + 5 + 5 + 3 + 1 = 16 (ô).",
  "image": "img/ontap2/i_pixel.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng cao",
  "lesson": "Số nhị phân – Thẻ chấm",
  "source": "Ôn tập mở rộng 2026 – Câu 193",
  "content": "Năm tấm thẻ có lần lượt 16, 8, 4, 2, 1 chấm. Thẻ ngửa được tính số chấm, thẻ úp không tính. Các thẻ ở hình bên biểu diễn số nào?",
  "options": [
   "11",
   "13",
   "14",
   "7"
  ],
  "answer": 1,
  "explanation": "Thẻ ngửa: 8, 4, 1 (thẻ 16 và thẻ 2 bị úp). 8 + 4 + 1 = 13.\nViết ngửa = 1, úp = 0 ta được 01101 – đó là cách viết số 13 trong hệ nhị phân mà máy tính sử dụng.",
  "image": "img/ontap2/i_binary.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Thuật toán trong đời sống",
  "source": "Ôn tập mở rộng 2026 – Câu 194",
  "content": "Các bước pha một cốc nước cam: (1) Rót nước vào cốc; (2) Vắt cam lấy nước cốt; (3) Khuấy đều; (4) Cho đường vào. Thứ tự hợp lí nhất là:",
  "options": [
   "2 → 1 → 4 → 3",
   "1 → 2 → 3 → 4",
   "3 → 4 → 1 → 2",
   "4 → 3 → 2 → 1"
  ],
  "answer": 0,
  "explanation": "Vắt cam lấy nước cốt (2) → rót nước vào (1) → cho đường (4) → khuấy đều cho đường tan (3). Phải cho đường trước rồi mới khuấy; khuấy trước khi có đường thì vô ích.\nMột dãy các bước có thứ tự rõ ràng để làm xong một việc gọi là thuật toán."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Sơ đồ khối – Rẽ nhánh",
  "source": "Ôn tập mở rộng 2026 – Câu 195",
  "content": "Theo sơ đồ khối ở hình bên, nếu nhập điểm là 4,5 thì máy in ra gì?",
  "options": [
   "Đạt",
   "4,5",
   "Không in gì",
   "Chưa đạt"
  ],
  "answer": 3,
  "explanation": "Kiểm tra điều kiện “Điểm ≥ 5?”: 4,5 nhỏ hơn 5 nên điều kiện SAI → đi theo nhánh Sai → in “Chưa đạt”.",
  "image": "img/ontap2/i_flow.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Sơ đồ khối – Rẽ nhánh",
  "source": "Ôn tập mở rộng 2026 – Câu 196",
  "content": "Theo sơ đồ khối ở hình bên, trường hợp nào in ra “Đạt”?",
  "options": [
   "Điểm bằng 4,9",
   "Điểm bằng 0",
   "Điểm bằng 5",
   "Điểm bằng 3"
  ],
  "answer": 2,
  "explanation": "Điều kiện là Điểm ≥ 5 (lớn hơn hoặc bằng 5). Điểm 5 thoả mãn điều kiện nên in “Đạt”. Các điểm 4,9; 0; 3 đều nhỏ hơn 5.",
  "image": "img/ontap2/i_flow.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Vòng lặp",
  "source": "Ôn tập mở rộng 2026 – Câu 197",
  "content": "Bạn Bi thực hiện: “Lặp lại 5 lần: vỗ tay 2 cái”. Bi vỗ tay tất cả bao nhiêu cái?",
  "options": [
   "7 cái",
   "5 cái",
   "10 cái",
   "2 cái"
  ],
  "answer": 2,
  "explanation": "Mỗi lần lặp vỗ 2 cái, lặp 5 lần: 2 × 5 = 10 (cái)."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Vòng lặp lồng nhau",
  "source": "Ôn tập mở rộng 2026 – Câu 198",
  "content": "Chương trình: “Lặp lại 3 lần: [Lặp lại 4 lần: nhảy 1 cái]; vỗ tay 1 cái”. Sau khi chạy xong, có tất cả bao nhiêu cái nhảy và bao nhiêu cái vỗ tay?",
  "options": [
   "7 cái nhảy, 3 cái vỗ tay",
   "12 cái nhảy, 3 cái vỗ tay",
   "12 cái nhảy, 12 cái vỗ tay",
   "4 cái nhảy, 1 cái vỗ tay"
  ],
  "answer": 1,
  "explanation": "Mỗi lần lặp ngoài: nhảy 4 cái rồi vỗ tay 1 cái. Lặp ngoài 3 lần → nhảy 4 × 3 = 12 cái, vỗ tay 1 × 3 = 3 cái."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Biến – Tính điểm trò chơi",
  "source": "Ôn tập mở rộng 2026 – Câu 199",
  "content": "Trong trò chơi, biến “điểm” bắt đầu bằng 0. Mỗi lần nhân vật chạm quả táo, điểm tăng 1; mỗi lần chạm hòn đá, điểm giảm 1. Nhân vật chạm 7 quả táo và 2 hòn đá. Điểm cuối cùng là bao nhiêu?",
  "options": [
   "5",
   "9",
   "7",
   "2"
  ],
  "answer": 0,
  "explanation": "Điểm = 0 + 7 × 1 − 2 × 1 = 5.\nBiến là “chiếc hộp” lưu một giá trị có thể thay đổi trong khi chương trình chạy."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Tìm kiếm thông tin",
  "source": "Ôn tập mở rộng 2026 – Câu 200",
  "content": "Vì sao các từ trong từ điển được sắp xếp theo thứ tự bảng chữ cái?",
  "options": [
   "Để từ điển đẹp hơn",
   "Để từ điển mỏng hơn",
   "Để các từ dài đứng trước",
   "Để tìm kiếm một từ nhanh hơn"
  ],
  "answer": 3,
  "explanation": "Khi dữ liệu được sắp xếp, ta không cần đọc lần lượt từng từ mà có thể mở đến đúng vùng chữ cái cần tìm. Máy tính cũng sắp xếp dữ liệu để tìm kiếm nhanh hơn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng cao",
  "lesson": "Chiến lược tìm kiếm",
  "source": "Ôn tập mở rộng 2026 – Câu 201",
  "content": "Trò chơi đoán số: bạn nghĩ một số từ 1 đến 100; mỗi lần Minh đoán, bạn chỉ nói “lớn hơn”, “nhỏ hơn” hoặc “đúng rồi”. Cách đoán nào giúp Minh tìm ra số nhanh nhất?",
  "options": [
   "Đoán lần lượt 1, 2, 3, … cho đến khi đúng",
   "Đoán ngẫu nhiên bất kì số nào",
   "Đoán lần lượt 100, 99, 98, …",
   "Luôn đoán số ở chính giữa khoảng còn lại (50, rồi 25 hoặc 75, …)"
  ],
  "answer": 3,
  "explanation": "Đoán số ở giữa thì mỗi lần loại được khoảng một nửa số còn lại: 100 → 50 → 25 → 13 → 7 → 4 → 2 → 1. Chỉ cần nhiều nhất 7 lần đoán. Đoán lần lượt có thể mất tới 100 lần. Cách này gọi là tìm kiếm nhị phân."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Nhận biết",
  "lesson": "Bàn phím",
  "source": "Ôn tập mở rộng 2026 – Câu 202",
  "content": "Muốn gõ một chữ cái in hoa mà không bật Caps Lock, ta nhấn giữ phím nào trong khi gõ chữ?",
  "options": [
   "Enter",
   "Space (phím cách)",
   "Shift",
   "Tab"
  ],
  "answer": 2,
  "explanation": "Nhấn giữ Shift rồi gõ chữ cái sẽ được chữ in hoa. Enter để xuống dòng; phím cách tạo khoảng trống giữa các từ."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Nhận biết",
  "lesson": "Bàn phím",
  "source": "Ôn tập mở rộng 2026 – Câu 203",
  "content": "Phím nào dùng để xoá kí tự ở ngay bên TRÁI con trỏ soạn thảo?",
  "options": [
   "Delete",
   "Backspace",
   "Shift",
   "Enter"
  ],
  "answer": 1,
  "explanation": "Backspace xoá kí tự bên trái con trỏ; Delete xoá kí tự bên phải con trỏ."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Nhận biết",
  "lesson": "Sử dụng chuột",
  "source": "Ôn tập mở rộng 2026 – Câu 204",
  "content": "“Nháy đúp chuột” là thao tác:",
  "options": [
   "Nhấn nhanh hai lần liên tiếp nút trái chuột",
   "Nhấn một lần nút phải chuột",
   "Nhấn giữ nút trái rồi kéo chuột",
   "Lăn nút cuộn"
  ],
  "answer": 0,
  "explanation": "Nháy đúp (nháy kép) là nhấn nhanh 2 lần nút trái chuột, thường dùng để mở thư mục, tệp hoặc phần mềm."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Phím tắt",
  "source": "Ôn tập mở rộng 2026 – Câu 205",
  "content": "Sau khi đã sao chép (Ctrl + C) một đoạn văn bản, để dán đoạn văn bản đó vào vị trí mới ta dùng tổ hợp phím nào?",
  "options": [
   "Ctrl + V",
   "Ctrl + X",
   "Ctrl + Z",
   "Ctrl + S"
  ],
  "answer": 0,
  "explanation": "Ctrl + C: sao chép; Ctrl + X: cắt; Ctrl + V: dán; Ctrl + Z: hoàn tác (quay lại thao tác trước); Ctrl + S: lưu."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Nhận biết",
  "lesson": "Phím tắt",
  "source": "Ôn tập mở rộng 2026 – Câu 206",
  "content": "Tổ hợp phím Ctrl + S dùng để:",
  "options": [
   "Xoá tệp",
   "In tệp",
   "Đóng máy tính",
   "Lưu tệp đang làm"
  ],
  "answer": 3,
  "explanation": "Ctrl + S (S là chữ đầu của “Save”) giúp lưu lại tệp. Nên lưu thường xuyên để không mất bài khi máy tắt đột ngột."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Trình chiếu",
  "source": "Ôn tập mở rộng 2026 – Câu 207",
  "content": "Trong phần mềm trình chiếu, muốn một dòng chữ “bay vào” khi đang trình chiếu một trang, ta dùng loại hiệu ứng nào?",
  "options": [
   "Hiệu ứng chuyển trang (Transition)",
   "Thay đổi phông chữ",
   "Hiệu ứng động cho đối tượng (Animation)",
   "Chèn thêm trang mới"
  ],
  "answer": 2,
  "explanation": "Hiệu ứng động (Animation) áp dụng cho từng đối tượng trên trang (chữ, hình ảnh). Hiệu ứng chuyển trang (Transition) áp dụng khi chuyển từ trang này sang trang khác."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Nhận biết",
  "lesson": "Soạn thảo văn bản",
  "source": "Ôn tập mở rộng 2026 – Câu 208",
  "content": "Để làm chữ đậm trong phần mềm soạn thảo, sau khi chọn chữ ta nhấn tổ hợp phím nào?",
  "options": [
   "Ctrl + I",
   "Ctrl + B",
   "Ctrl + U",
   "Ctrl + P"
  ],
  "answer": 1,
  "explanation": "Ctrl + B: chữ đậm (Bold); Ctrl + I: chữ nghiêng (Italic); Ctrl + U: gạch chân (Underline); Ctrl + P: in."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Tìm kiếm trên Internet",
  "source": "Ôn tập mở rộng 2026 – Câu 209",
  "content": "Em muốn tìm hiểu cách trồng cây cà chua. Từ khoá nào giúp tìm kiếm hiệu quả nhất?",
  "options": [
   "cây",
   "cách trồng cây cà chua",
   "cà",
   "trồng"
  ],
  "answer": 1,
  "explanation": "Từ khoá nên ngắn gọn nhưng đủ ý, chứa các từ quan trọng về điều cần tìm. Các từ đơn lẻ như “cây”, “cà” cho ra quá nhiều kết quả không liên quan."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Đánh giá thông tin",
  "source": "Ôn tập mở rộng 2026 – Câu 210",
  "content": "Nguồn thông tin nào dưới đây đáng tin cậy nhất khi tìm hiểu về phòng bệnh sốt xuất huyết?",
  "options": [
   "Trang web chính thức của Bộ Y tế",
   "Một bình luận không rõ tên trên mạng xã hội",
   "Tin nhắn chuyển tiếp không rõ nguồn",
   "Lời đồn của người lạ"
  ],
  "answer": 0,
  "explanation": "Thông tin từ cơ quan nhà nước, tổ chức chuyên môn (Bộ Y tế), sách giáo khoa có độ tin cậy cao. Thông tin không rõ nguồn gốc cần kiểm tra lại trước khi tin và chia sẻ."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Ứng xử trên mạng",
  "source": "Ôn tập mở rộng 2026 – Câu 211",
  "content": "Em bị một bạn đăng lời lẽ chế giễu mình trên mạng. Cách xử lí nào phù hợp nhất?",
  "options": [
   "Đăng lời chửi lại bạn đó",
   "Rủ bạn bè cùng nói xấu lại",
   "Giữ kín, không cho ai biết",
   "Không đáp trả, lưu lại bằng chứng và báo cho bố mẹ, thầy cô"
  ],
  "answer": 3,
  "explanation": "Đáp trả có thể làm mọi việc tệ hơn. Lưu bằng chứng (chụp màn hình) và nhờ người lớn tin cậy giúp đỡ là cách an toàn. Em cũng không bắt nạt, chế giễu người khác trên mạng."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Nhận biết",
  "lesson": "Tư thế ngồi máy tính",
  "source": "Ôn tập mở rộng 2026 – Câu 212",
  "content": "Khi ngồi sử dụng máy tính, tư thế nào là đúng?",
  "options": [
   "Cúi sát mặt vào màn hình",
   "Nằm trên giường để dùng máy",
   "Lưng thẳng, mắt cách màn hình khoảng 50 – 80 cm, nhìn hơi chếch xuống",
   "Ngồi vẹo người sang một bên"
  ],
  "answer": 2,
  "explanation": "Ngồi đúng tư thế giúp tránh đau lưng, mỏi cổ và bảo vệ mắt. Phòng cần đủ ánh sáng, không để ánh sáng chiếu thẳng vào màn hình gây chói."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Suy luận logic",
  "source": "Ôn tập mở rộng 2026 – Câu 213",
  "content": "An, Bình và Chi mỗi bạn thích một môn khác nhau: Toán, Tin học, Khoa học. An không thích Toán và cũng không thích Tin học. Bình không thích Toán. Chi thích môn nào?",
  "options": [
   "Tin học",
   "Khoa học",
   "Toán",
   "Không xác định được"
  ],
  "answer": 2,
  "explanation": "An không thích Toán, Tin học → An thích Khoa học. Bình không thích Toán, còn lại Tin học (vì Khoa học đã là của An) → Bình thích Tin học. Môn còn lại là Toán → Chi thích Toán."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Quy luật",
  "source": "Ôn tập mở rộng 2026 – Câu 214",
  "content": "Dãy hình lặp lại theo quy luật: ■ ▲ ● ■ ▲ ● ■ ▲ ● … Hình thứ 20 là hình gì?",
  "options": [
   "■",
   "▲",
   "●",
   "Không xác định được"
  ],
  "answer": 1,
  "explanation": "Mỗi nhóm có 3 hình lặp lại. 20 : 3 = 6 (dư 2) → sau 6 nhóm đầy đủ, hình thứ 20 là hình thứ 2 của nhóm, tức là ▲."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Tìm và sửa lỗi chương trình",
  "source": "Ôn tập mở rộng 2026 – Câu 215",
  "content": "Đoạn chương trình ở hình bên muốn vẽ hình vuông nhưng nhân vật chỉ vẽ được 3 cạnh. Cần sửa thế nào?",
  "options": [
   "Đổi số lần lặp từ 3 thành 4",
   "Đổi xoay 90 độ thành 120 độ",
   "Đổi di chuyển 100 bước thành 50 bước",
   "Xoá khối “đặt bút xuống”"
  ],
  "answer": 0,
  "explanation": "Hình vuông có 4 cạnh nên phải lặp 4 lần. Góc xoay 90 độ đã đúng; độ dài cạnh không ảnh hưởng đến số cạnh. Tìm và sửa lỗi chương trình gọi là “gỡ lỗi”.",
  "image": "img/ontap2/i_bug.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Cấu trúc rẽ nhánh",
  "source": "Ôn tập mở rộng 2026 – Câu 216",
  "content": "Mẹ dặn: “Nếu trời mưa thì con mang áo mưa, nếu không thì con đội mũ”. Sáng nay trời nắng. Bạn Hoa sẽ làm gì?",
  "options": [
   "Mang áo mưa",
   "Mang cả áo mưa và đội mũ",
   "Không mang gì",
   "Đội mũ"
  ],
  "answer": 3,
  "explanation": "Điều kiện “trời mưa” không đúng (trời nắng) nên thực hiện việc ở nhánh “nếu không thì”: đội mũ. Đây là cấu trúc rẽ nhánh “Nếu… thì… nếu không thì…”."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng cao",
  "lesson": "Đường đi ngắn nhất",
  "source": "Ôn tập mở rộng 2026 – Câu 217",
  "content": "Rô-bốt ở ô có hình rô-bốt cần đi đến ô có ngôi sao (hình bên). Rô-bốt chỉ đi sang ô kề bên (lên, xuống, trái, phải) và không đi vào ô màu xám (vật cản). Rô-bốt cần đi ít nhất bao nhiêu bước?",
  "options": [
   "4 bước",
   "6 bước",
   "10 bước",
   "8 bước"
  ],
  "answer": 3,
  "explanation": "Hai ô xám chặn đường đi thẳng ở hàng dưới cùng và hàng thứ hai. Rô-bốt phải đi lên hàng thứ ba để vượt qua: lên 2 ô, sang phải 4 ô, xuống 2 ô → 2 + 4 + 2 = 8 bước.\nNếu không có vật cản chỉ cần 4 bước; vật cản làm phải đi thêm 2 bước lên và 2 bước xuống.",
  "image": "img/ontap2/i_maze.svg"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Nhận biết",
  "lesson": "Thư điện tử",
  "source": "Ôn tập mở rộng 2026 – Câu 218",
  "content": "Địa chỉ thư điện tử (email) nào dưới đây được viết đúng dạng?",
  "options": [
   "an nguyen gmail.com",
   "an.nguyen#gmail.com",
   "an.nguyen@gmail.com",
   "@an.nguyen"
  ],
  "answer": 2,
  "explanation": "Địa chỉ email có dạng: tên người dùng@tên miền, ví dụ an.nguyen@gmail.com. Bắt buộc có đúng một kí tự @, không có dấu cách."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Trí tuệ nhân tạo",
  "source": "Ôn tập mở rộng 2026 – Câu 219",
  "content": "Trợ lí ảo trên điện thoại hiểu được câu hỏi bằng giọng nói và trả lời lại. Đây là ứng dụng của:",
  "options": [
   "Máy tính bỏ túi",
   "Trí tuệ nhân tạo (AI)",
   "Bàn phím cơ",
   "Pin mặt trời"
  ],
  "answer": 1,
  "explanation": "Trí tuệ nhân tạo giúp máy tính “học” để nhận dạng giọng nói, hình ảnh, trả lời câu hỏi. Khi dùng AI, em cần kiểm tra lại thông tin và không chia sẻ thông tin cá nhân."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Nhận biết",
  "lesson": "Lưu trữ dữ liệu",
  "source": "Ôn tập mở rộng 2026 – Câu 220",
  "content": "Thiết bị nhỏ gọn nào dùng để lưu trữ và mang dữ liệu (bài trình chiếu, ảnh) từ máy tính này sang máy tính khác?",
  "options": [
   "USB (thẻ nhớ USB)",
   "Chuột",
   "Loa",
   "Màn hình"
  ],
  "answer": 0,
  "explanation": "USB là thiết bị lưu trữ cắm ngoài, nhỏ gọn, dễ mang theo. Chuột, loa, màn hình không lưu trữ dữ liệu."
 }
];
