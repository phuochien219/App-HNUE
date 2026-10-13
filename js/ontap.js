// Tài liệu ôn tập vòng Sơ loại HNUE Olympic STEM 2026 – Tiểu học (200 câu, đã kiểm tra đáp án; câu trùng lặp được gộp).
// Sinh tự động từ file Word – sửa câu hỏi trong mục Ngân hàng câu hỏi của app.
export const ONTAP_QUESTIONS = [
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 1. Hình khối và khối lượng — trang 6",
  "source": "Ôn tập 2026 – Khảo sát – Câu 1",
  "content": "Một mô hình có 4 khối lập phương ở hàng dưới và 3 khối đặt ở hàng trên. Không có khối nào khác. Mỗi khối nặng 100 g. Mô hình nặng bao nhiêu?",
  "options": [
   "700 g",
   "400 g",
   "900 g",
   "800 g"
  ],
  "answer": 0,
  "explanation": "Có 4 + 3 = 7 khối. Khối lượng mô hình là 7 × 100 = 700 g.\nLỗi dễ mắc: Đếm riêng từng hàng hoặc từng cột rồi cộng; kiểm tra để không đếm một khối hai lần.",
  "image": "img/ontap/h1.png"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 2. Trung bình cộng và bảng số liệu — trang 7",
  "source": "Ôn tập 2026 – Khảo sát – Câu 2",
  "content": "Chiều cao của năm bạn: Lan: 133 cm; Hòa: 136 cm; Linh: 139 cm; Đức: 137 cm; Minh: 135 cm. Những bạn nào cao hơn chiều cao trung bình của nhóm?",
  "options": [
   "Hòa, Linh và Đức",
   "Hòa và Đức",
   "Linh và Đức",
   "Lan và Minh"
  ],
  "answer": 2,
  "explanation": "Tổng chiều cao là 680 cm; trung bình là 680 : 5 = 136 cm. Linh (139 cm) và Đức (137 cm) cao hơn mức này. Hòa bằng mức trung bình nên không được chọn.\nLỗi dễ mắc: Đừng chọn luôn hai bạn cao nhất trước khi tính trung bình; số bạn trên trung bình có thể thay đổi."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 3. Phân số và thứ hạng — trang 8",
  "source": "Ôn tập 2026 – Khảo sát – Câu 3",
  "content": "Kết quả chạy của tám bạn: An 7,0 s; Mai 7,7 s; Việt 7,3 s; Huy 6,6 s; Phong 7,5 s; Ngọc 8,0 s; Hà 6,7 s; Minh 7,9 s. Chọn 1/2 số bạn có thành tích tốt nhất. Những bạn nào được chọn?",
  "options": [
   "Huy, Hà, An, Việt",
   "Hà, An, Việt, Phong",
   "Huy, Hà, An, Việt, Phong",
   "Phong, Mai, Minh, Ngọc"
  ],
  "answer": 0,
  "explanation": "Cần chọn 8 : 2 = 4 bạn. Thời gian chạy càng nhỏ thì thành tích càng tốt. Xếp tăng dần thời gian rồi chọn 4 bạn đầu: Huy, Hà, An, Việt.\nLỗi dễ mắc: Tính số người được chọn trước, sau đó xếp thứ hạng. Không chọn thời gian lớn nhất trong bài chạy."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 4. Quy luật ghép ô vuông — trang 8",
  "source": "Ôn tập 2026 – Khảo sát – Câu 4",
  "content": "Các ô vuông được ghép thành một hàng, hai ô liền nhau dùng chung một cạnh. Mỗi cạnh là một thanh tre. Cần bao nhiêu thanh để tạo 10 ô vuông?",
  "options": [
   "31 thanh",
   "22 thanh",
   "40 thanh",
   "30 thanh"
  ],
  "answer": 0,
  "explanation": "Ô đầu cần 4 thanh. Mỗi ô thêm chỉ cần 3 thanh vì dùng chung một cạnh. Tổng: 4 + (10 − 1) × 3 = 31 thanh.\nLỗi dễ mắc: Không lấy n × 4 vì cách đó đếm lại các cạnh chung. Công thức này chỉ dùng cho kiểu ghép thành một hàng đã nêu."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 5. Biểu đồ và phép chia có dư — trang 9",
  "source": "Ôn tập 2026 – Khảo sát – Câu 5",
  "content": "Bốn lớp thu gom vỏ chai: 5A: 130 vỏ; 5B: 105 vỏ; 5C: 145 vỏ; 5D: 120 vỏ. Cứ 30 vỏ đổi được một chậu cây. Nếu gộp chung, đổi được nhiều nhất bao nhiêu chậu và còn thừa bao nhiêu vỏ?",
  "options": [
   "16 chậu, không thừa",
   "15 chậu, thừa 50 vỏ",
   "16 chậu, thừa 20 vỏ",
   "17 chậu, không thừa"
  ],
  "answer": 2,
  "explanation": "Tổng: 130 + 105 + 145 + 120 = 500 vỏ. 500 : 30 = 16 dư 20. Đổi được 16 chậu và còn 20 vỏ. Số dư phải nhỏ hơn 30.\nLỗi dễ mắc: Không làm tròn lên để đổi thêm một sản phẩm khi chưa đủ vật liệu. Kiểm tra: số sản phẩm × mức đổi + số dư = tổng.",
  "image": "img/ontap/h2.png"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng cao",
  "lesson": "Bài 6. Thời gian sản xuất theo lượt — trang 10",
  "source": "Ôn tập 2026 – Khảo sát – Câu 6",
  "content": "Máy in 3D in tối đa 5 móc khóa mỗi lượt. Một lượt luôn mất 25 phút. Máy nghỉ 5 phút giữa hai lượt, không cần chờ sau lượt cuối. Cần in 21 móc khóa từ 8:00. Sớm nhất khi nào in xong?",
  "options": [
   "10:05",
   "10:25",
   "10:20",
   "10:30"
  ],
  "answer": 1,
  "explanation": "21 móc khóa cần 5 lượt (lượt cuối vẫn mất đủ 25 phút). Có 4 lần nghỉ. Tổng thời gian: 5 × 25 + 4 × 5 = 145 phút. Cộng vào 8:00 được 10:25.\nLỗi dễ mắc: Một lượt chưa đầy vẫn mất đủ thời gian nếu đề nói thời gian mỗi lượt cố định. Vẽ chuỗi làm – nghỉ – làm để kiểm tra."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 7. Không khí chiếm chỗ và có thể bị nén — trang 13",
  "source": "Ôn tập 2026 – Khảo sát – Câu 7",
  "content": "Bạn thổi vào túi rồi buộc kín miệng túi. Vì sao túi không còn xẹp như lúc đầu?",
  "options": [
   "Trong túi có thêm không khí chiếm chỗ",
   "Không khí không có trong túi",
   "Túi đã chứa toàn nước",
   "Túi tự tạo thêm giấy"
  ],
  "answer": 0,
  "explanation": "Không khí tuy khó nhìn thấy nhưng chiếm chỗ và làm túi phồng.\nLỗi dễ mắc: Bơm phao làm phao phồng không tự chứng minh khí có thể tích giảm. Muốn nói “bị nén”, cần dữ kiện phần khí chiếm thể tích nhỏ hơn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Bài 8. Nước và sự chuyển thể — trang 14",
  "source": "Ôn tập 2026 – Khảo sát – Câu 8",
  "content": "Hơi nước gặp nắp nồi nguội tạo thành giọt nước. Hiện tượng chính là gì?",
  "options": [
   "Ngưng tụ",
   "Nóng chảy",
   "Đông đặc",
   "Bay hơi"
  ],
  "answer": 0,
  "explanation": "Hơi nước chuyển thành các giọt nước lỏng khi gặp điều kiện phù hợp.\nLỗi dễ mắc: Giọt ở ngoài cốc lạnh thường từ hơi nước trong không khí ngưng tụ, không phải nước tự xuyên qua cốc."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 9. Mặt trời và phương hướng — trang 14",
  "source": "Ôn tập 2026 – Khảo sát – Câu 9",
  "content": "Trong bài tập này, Mặt trời ở hướng Tây vào buổi chiều. Bạn Lan thấy Mặt trời ở sau lưng. Lan đang quay mặt về hướng nào?",
  "options": [
   "Tây",
   "Đông",
   "Bắc",
   "Nam"
  ],
  "answer": 1,
  "explanation": "Đặt hướng Tây ở sau lưng của Lan rồi đối chiếu bốn hướng. Hướng trước mặt bạn là Đông. Khi quay mặt về Bắc, Đông ở bên phải và Tây ở bên trái.\nLỗi dễ mắc: Không xem “bên phải hình” luôn là Đông. Hãy vẽ bốn hướng và đặt người theo hướng đang nhìn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 10. Quan sát thí nghiệm nảy mầm — trang 15",
  "source": "Ôn tập 2026 – Khảo sát – Câu 10",
  "content": "Muốn tìm hiểu vai trò của nước đối với sự nảy mầm, hai chậu của nhóm cùng loại hạt và đất nên khác nhau chủ yếu ở yếu tố nào?",
  "options": [
   "Số thứ tự chậu",
   "Tên người gieo",
   "Lượng nước tưới",
   "Màu nhãn dán"
  ],
  "answer": 2,
  "explanation": "Thay đổi lượng nước và giữ các điều kiện còn lại tương đương giúp so sánh vai trò của nước.\nLỗi dễ mắc: Một chậu nảy mầm khi tưới không chứng minh mọi hạt cứ có nước là nảy mầm. Hạt và điều kiện khác cũng cần phù hợp."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 11. Chuỗi thức ăn và bảo vệ tự nhiên — trang 16",
  "source": "Ôn tập 2026 – Khảo sát – Câu 11",
  "content": "Vườn trường có cây, sâu và chim. Cách làm nào phù hợp để bảo vệ môi trường sống?",
  "options": [
   "Đổ rác vào gốc cây",
   "Chăm sóc cây và tránh phá tổ chim",
   "Phá mọi tổ chim",
   "Chặt sạch cây"
  ],
  "answer": 1,
  "explanation": "Chăm sóc cây và giữ nơi sống cho động vật giúp duy trì các quan hệ tự nhiên.\nLỗi dễ mắc: Đọc mũi tên đúng chiều. Trong câu hỏi, suy luận theo chuỗi được cho, không tự đổi thức ăn của sinh vật."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 12. Thụ phấn ở cây bí — trang 17",
  "source": "Ôn tập 2026 – Khảo sát – Câu 12",
  "content": "Bạn Lan dùng cọ sạch, mềm lấy phấn từ hoa đực rồi chạm nhẹ vào bộ phận nhận phấn của hoa cái. Lan đang làm gì?",
  "options": [
   "Tưới cây",
   "Thu hoạch quả",
   "Cắt tỉa rễ",
   "Thụ phấn bổ sung"
  ],
  "answer": 3,
  "explanation": "Lan thực hiện việc chuyển phấn để hỗ trợ thụ phấn.\nLỗi dễ mắc: Không nhầm “tưới nhiều nước vào hoa” với thụ phấn. Không nên ngắt bỏ toàn bộ hoa đực khi cần nguồn phấn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Bài 13. Bắt đầu thiết kế và cải tiến sản phẩm — trang 19",
  "source": "Ôn tập 2026 – Khảo sát – Câu 13",
  "content": "Khi thử giá đỡ máy tính bảng, nhóm phát hiện sản phẩm chưa thuận tiện. Cách xử lý nào phù hợp?",
  "options": [
   "Ghi nhận hạn chế và điều chỉnh giải pháp",
   "Che giấu mọi hạn chế",
   "Kết luận không cần thử nữa",
   "Chỉ trang trí mà bỏ qua chức năng"
  ],
  "answer": 0,
  "explanation": "Kết quả thử nghiệm cung cấp căn cứ để cải tiến sản phẩm.\nLỗi dễ mắc: Không mua vật liệu hoặc làm ngay khi chưa biết nhu cầu. “Thử nghiệm” là dùng yêu cầu để kiểm tra, không chỉ ngắm sản phẩm."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 14. Cây cảnh và không gian học tập — trang 19",
  "source": "Ôn tập 2026 – Khảo sát – Câu 14",
  "content": "Việc nào không phù hợp khi trồng cây trong trường?",
  "options": [
   "Giữ khu vực trồng sạch",
   "Phân công chăm sóc",
   "Đặt chậu chắn lối thoát hiểm",
   "Chọn cây phù hợp vị trí"
  ],
  "answer": 2,
  "explanation": "Lối thoát hiểm phải thông thoáng; chậu cây không được cản trở di chuyển.\nLỗi dễ mắc: Đề hỏi “không phù hợp” thì chọn mục đích hoặc hành động sai. Không mặc định càng nhiều cây, càng nhiều nước là càng tốt."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Bài 15. Sử dụng đèn học phù hợp và an toàn — trang 20",
  "source": "Ôn tập 2026 – Khảo sát – Câu 15",
  "content": "Đèn chiếu thẳng vào mắt làm bạn chói. Nên làm gì?",
  "options": [
   "Tiếp tục chịu chói",
   "Điều chỉnh hướng và độ sáng của đèn",
   "Nhìn sát bóng đèn hơn",
   "Che bóng bằng áo"
  ],
  "answer": 1,
  "explanation": "Ánh sáng cần hướng vào khu vực học, tránh chiếu trực tiếp gây chói mắt.\nLỗi dễ mắc: Không lau đèn đang cắm điện bằng khăn ướt, không phủ vải lên bóng nóng. Vệ sinh cần người lớn hướng dẫn, ngắt điện và chờ nguội."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 16. Sản xuất giấy và tiết kiệm tài nguyên — trang 21",
  "source": "Ôn tập 2026 – Khảo sát – Câu 16",
  "content": "Việc nào không phù hợp với sử dụng giấy tiết kiệm?",
  "options": [
   "Xé bỏ nhiều tờ giấy còn dùng được",
   "Thu gom giấy để tái chế",
   "Chọn số bản in cần thiết",
   "Viết nháp trên giấy một mặt"
  ],
  "answer": 0,
  "explanation": "Bỏ giấy còn dùng được gây lãng phí.\nLỗi dễ mắc: Không kết luận mọi giấy đều làm trực tiếp từ cây mới. Đọc đúng sơ đồ và điều kiện mà câu hỏi cung cấp."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 17. Sắp xếp trang và hiệu ứng chuyển trang — trang 22",
  "source": "Ôn tập 2026 – Khảo sát – Câu 17",
  "content": "Các trang trình chiếu: 1: Hạ; 2: Thu; 3: Đông; 4: Xuân. Muốn trình chiếu theo thứ tự xuân, hạ, thu, đông và có hiệu ứng giữa các trang, chọn cách nào?",
  "options": [
   "4–1–2–3 và chỉ thay hình ảnh",
   "1–4–2–3 và chỉ thay hình ảnh",
   "4–1–2–3 và dùng hiệu ứng chuyển trang",
   "3–2–1–4 và dùng hiệu ứng chuyển trang"
  ],
  "answer": 2,
  "explanation": "Tìm số trang tương ứng từng mùa: Xuân là trang 4, Hạ là trang 1, Thu là trang 2, Đông là trang 3. Hiệu ứng giữa các trang là hiệu ứng chuyển trang, khác với thay hình trong trang.\nLỗi dễ mắc: Một phương án phải đúng cả thứ tự và thao tác. Không chọn chỉ vì nửa đầu phương án đúng."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 18. Lệnh tuần tự trong Scratch — trang 23",
  "source": "Ôn tập 2026 – Khảo sát – Câu 18",
  "content": "Trong Scratch, nhân vật đã hướng lên trên. Nhân vật cần đi lên 35 bước rồi mới nói “Xin chào lớp mình!”. Đoạn lệnh nào đúng?",
  "options": [
   "Nói “Xin chào lớp mình!” → Di chuyển 35 bước",
   "Nói “Tôi đang đi xuống!” → Di chuyển 35 bước",
   "Di chuyển 35 bước → Nói “Tôi đang đi xuống!”",
   "Di chuyển 35 bước → Nói “Xin chào lớp mình!”"
  ],
  "answer": 3,
  "explanation": "Nhân vật đã hướng lên nên lệnh di chuyển làm nó đi lên. Yêu cầu “rồi mới nói” nghĩa là lệnh di chuyển phải đứng trước lệnh nói và lời nói phải đúng.\nLỗi dễ mắc: Kiểm tra cả hướng, số bước, thứ tự và lời nói. Nếu đề chưa nêu hướng thì chưa thể khẳng định nhân vật đi lên."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 19. Mã hóa chữ theo quy tắc — trang 24",
  "source": "Ôn tập 2026 – Khảo sát – Câu 19",
  "content": "Dùng bảng chữ cái A B C D E F G H I J K L M N O P Q R S T U V W X Y Z. Mỗi chữ được thay bằng chữ đứng sau 3 vị trí; qua Z thì quay lại A. Từ TEAM được mã hóa thành gì?",
  "options": [
   "TEAM",
   "WHDP",
   "QBXJ",
   "XIEQ"
  ],
  "answer": 1,
  "explanation": "Thay lần lượt: T → W; E → H; A → D; M → P. Ghép lại được WHDP. Giữ nguyên thứ tự chữ và quay vòng khi vượt Z.\nLỗi dễ mắc: Đừng tính chữ ban đầu là bước thứ nhất. Nếu dịch hai bước, A → B → C nên kết quả là C."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng cao",
  "lesson": "Bài 20. Robot di chuyển và lệnh lặp — trang 25",
  "source": "Ôn tập 2026 – Khảo sát – Câu 20",
  "content": "Lưới 6 hàng, 6 cột; hàng đếm từ trên xuống, cột từ trái sang phải. Robot ở hàng 6, cột 2, hướng lên trên. Lặp 3 lần: tiến 3 ô, quay phải 90° tại chỗ. Robot dừng ở đâu?",
  "options": [
   "Hàng 6, cột 5",
   "Hàng 3, cột 2",
   "Hàng 3, cột 5",
   "Hàng 6, cột 2"
  ],
  "answer": 0,
  "explanation": "Lần 1: lên 3 ô, đến (3; 2), quay sang phải. Lần 2: sang phải 3 ô, đến (3; 5), quay xuống. Lần 3: xuống 3 ô, đến (6; 5), quay sang trái. Vị trí cuối là hàng 6, cột 5; quay tại chỗ không đổi ô.\nLỗi dễ mắc: Đừng cho robot luôn tiến lên dù đã quay hướng. Khi hỏi vị trí cuối, không nhầm vị trí với hướng quay cuối.",
  "image": "img/ontap/h3.png"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 1. Hình khối và khối lượng — trang 6",
  "source": "Ôn tập 2026 – Tự luyện B 1 – Câu 1",
  "content": "Một mô hình có 4 khối lập phương ở hàng dưới và 2 khối đặt ở hàng trên. Không có khối nào khác. Mỗi khối nặng 150 g. Mô hình nặng bao nhiêu?",
  "options": [
   "900 g",
   "1200 g",
   "1050 g",
   "600 g"
  ],
  "answer": 0,
  "explanation": "Có 4 + 2 = 6 khối. Khối lượng mô hình là 6 × 150 = 900 g.\nLỗi dễ mắc: Đếm riêng từng hàng hoặc từng cột rồi cộng; kiểm tra để không đếm một khối hai lần."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 1. Hình khối và khối lượng — trang 6",
  "source": "Ôn tập 2026 – Tự luyện B 1 – Câu 2",
  "content": "Một mô hình có 5 khối lập phương ở hàng dưới và 3 khối đặt ở hàng trên. Không có khối nào khác. Mỗi khối nặng 200 g. Mô hình nặng bao nhiêu?",
  "options": [
   "1800 g",
   "1600 g",
   "1000 g",
   "2000 g"
  ],
  "answer": 1,
  "explanation": "Có 5 + 3 = 8 khối. Khối lượng mô hình là 8 × 200 = 1600 g.\nLỗi dễ mắc: Đếm riêng từng hàng hoặc từng cột rồi cộng; kiểm tra để không đếm một khối hai lần."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 1. Hình khối và khối lượng — trang 6",
  "source": "Ôn tập 2026 – Tự luyện B 1 – Câu 3",
  "content": "Một mô hình có 6 khối lập phương ở hàng dưới và 1 khối đặt ở hàng trên. Không có khối nào khác. Mỗi khối nặng 250 g. Mô hình nặng bao nhiêu?",
  "options": [
   "2250 g",
   "1750 g",
   "1500 g",
   "2000 g"
  ],
  "answer": 1,
  "explanation": "Có 6 + 1 = 7 khối. Khối lượng mô hình là 7 × 250 = 1750 g.\nLỗi dễ mắc: Đếm riêng từng hàng hoặc từng cột rồi cộng; kiểm tra để không đếm một khối hai lần."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 1. Hình khối và khối lượng — trang 6",
  "source": "Ôn tập 2026 – Tự luyện B 1 – Câu 4",
  "content": "Một mô hình có 3 khối lập phương ở hàng dưới và 2 khối đặt ở hàng trên. Không có khối nào khác. Mỗi khối nặng 300 g. Mô hình nặng bao nhiêu?",
  "options": [
   "1800 g",
   "900 g",
   "1500 g",
   "2100 g"
  ],
  "answer": 2,
  "explanation": "Có 3 + 2 = 5 khối. Khối lượng mô hình là 5 × 300 = 1500 g.\nLỗi dễ mắc: Đếm riêng từng hàng hoặc từng cột rồi cộng; kiểm tra để không đếm một khối hai lần."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 2. Trung bình cộng và bảng số liệu — trang 7",
  "source": "Ôn tập 2026 – Tự luyện B 2 – Câu 1",
  "content": "Chiều cao của năm bạn: Lan: 129 cm; Hòa: 132 cm; Linh: 135 cm; Đức: 133 cm; Minh: 131 cm. Những bạn nào cao hơn chiều cao trung bình của nhóm?",
  "options": [
   "Hòa, Linh và Đức",
   "Linh và Đức",
   "Lan và Minh",
   "Hòa và Đức"
  ],
  "answer": 1,
  "explanation": "Tổng chiều cao là 660 cm; trung bình là 660 : 5 = 132 cm. Linh (135 cm) và Đức (133 cm) cao hơn mức này. Hòa bằng mức trung bình nên không được chọn.\nLỗi dễ mắc: Đừng chọn luôn hai bạn cao nhất trước khi tính trung bình; số bạn trên trung bình có thể thay đổi."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 2. Trung bình cộng và bảng số liệu — trang 7",
  "source": "Ôn tập 2026 – Tự luyện B 2 – Câu 2",
  "content": "Chiều cao của năm bạn: Lan: 130 cm; Hòa: 133 cm; Linh: 136 cm; Đức: 134 cm; Minh: 132 cm. Những bạn nào cao hơn chiều cao trung bình của nhóm?",
  "options": [
   "Linh và Đức",
   "Hòa, Linh và Đức",
   "Lan và Minh",
   "Hòa và Đức"
  ],
  "answer": 0,
  "explanation": "Tổng chiều cao là 665 cm; trung bình là 665 : 5 = 133 cm. Linh (136 cm) và Đức (134 cm) cao hơn mức này. Hòa bằng mức trung bình nên không được chọn.\nLỗi dễ mắc: Đừng chọn luôn hai bạn cao nhất trước khi tính trung bình; số bạn trên trung bình có thể thay đổi."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 2. Trung bình cộng và bảng số liệu — trang 7",
  "source": "Ôn tập 2026 – Tự luyện B 2 – Câu 3",
  "content": "Chiều cao của năm bạn: Lan: 131 cm; Hòa: 134 cm; Linh: 137 cm; Đức: 135 cm; Minh: 133 cm. Những bạn nào cao hơn chiều cao trung bình của nhóm?",
  "options": [
   "Linh và Đức",
   "Hòa và Đức",
   "Lan và Minh",
   "Hòa, Linh và Đức"
  ],
  "answer": 0,
  "explanation": "Tổng chiều cao là 670 cm; trung bình là 670 : 5 = 134 cm. Linh (137 cm) và Đức (135 cm) cao hơn mức này. Hòa bằng mức trung bình nên không được chọn.\nLỗi dễ mắc: Đừng chọn luôn hai bạn cao nhất trước khi tính trung bình; số bạn trên trung bình có thể thay đổi."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 2. Trung bình cộng và bảng số liệu — trang 7",
  "source": "Ôn tập 2026 – Tự luyện B 2 – Câu 4",
  "content": "Chiều cao của năm bạn: Lan: 132 cm; Hòa: 135 cm; Linh: 138 cm; Đức: 136 cm; Minh: 134 cm. Những bạn nào cao hơn chiều cao trung bình của nhóm?",
  "options": [
   "Hòa và Đức",
   "Linh và Đức",
   "Lan và Minh",
   "Hòa, Linh và Đức"
  ],
  "answer": 1,
  "explanation": "Tổng chiều cao là 675 cm; trung bình là 675 : 5 = 135 cm. Linh (138 cm) và Đức (136 cm) cao hơn mức này. Hòa bằng mức trung bình nên không được chọn.\nLỗi dễ mắc: Đừng chọn luôn hai bạn cao nhất trước khi tính trung bình; số bạn trên trung bình có thể thay đổi."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 3. Phân số và thứ hạng — trang 8",
  "source": "Ôn tập 2026 – Tự luyện B 3 – Câu 1",
  "content": "Kết quả chạy của tám bạn: An 6,6 s; Mai 7,3 s; Việt 6,9 s; Huy 6,2 s; Phong 7,1 s; Ngọc 7,6 s; Hà 6,3 s; Minh 7,5 s. Chọn 1/2 số bạn có thành tích tốt nhất. Những bạn nào được chọn?",
  "options": [
   "Phong, Mai, Minh, Ngọc",
   "Hà, An, Việt, Phong",
   "Huy, Hà, An, Việt",
   "Huy, Hà, An, Việt, Phong"
  ],
  "answer": 2,
  "explanation": "Cần chọn 8 : 2 = 4 bạn. Thời gian chạy càng nhỏ thì thành tích càng tốt. Xếp tăng dần thời gian rồi chọn 4 bạn đầu: Huy, Hà, An, Việt.\nLỗi dễ mắc: Tính số người được chọn trước, sau đó xếp thứ hạng. Không chọn thời gian lớn nhất trong bài chạy."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 3. Phân số và thứ hạng — trang 8",
  "source": "Ôn tập 2026 – Tự luyện B 3 – Câu 2",
  "content": "Kết quả chạy của tám bạn: An 6,7 s; Mai 7,4 s; Việt 7,0 s; Huy 6,3 s; Phong 7,2 s; Ngọc 7,7 s; Hà 6,4 s; Minh 7,6 s. Chọn 1/4 số bạn có thành tích tốt nhất. Những bạn nào được chọn?",
  "options": [
   "Hà, An",
   "Minh, Ngọc",
   "Huy, Hà, An",
   "Huy, Hà"
  ],
  "answer": 3,
  "explanation": "Cần chọn 8 : 4 = 2 bạn. Thời gian chạy càng nhỏ thì thành tích càng tốt. Xếp tăng dần thời gian rồi chọn 2 bạn đầu: Huy, Hà.\nLỗi dễ mắc: Tính số người được chọn trước, sau đó xếp thứ hạng. Không chọn thời gian lớn nhất trong bài chạy."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 3. Phân số và thứ hạng — trang 8",
  "source": "Ôn tập 2026 – Tự luyện B 3 – Câu 3",
  "content": "Kết quả chạy của tám bạn: An 6,8 s; Mai 7,5 s; Việt 7,1 s; Huy 6,4 s; Phong 7,3 s; Ngọc 7,8 s; Hà 6,5 s; Minh 7,7 s. Chọn 1/2 số bạn có thành tích tốt nhất. Những bạn nào được chọn?",
  "options": [
   "Hà, An, Việt, Phong",
   "Huy, Hà, An, Việt",
   "Huy, Hà, An, Việt, Phong",
   "Phong, Mai, Minh, Ngọc"
  ],
  "answer": 1,
  "explanation": "Cần chọn 8 : 2 = 4 bạn. Thời gian chạy càng nhỏ thì thành tích càng tốt. Xếp tăng dần thời gian rồi chọn 4 bạn đầu: Huy, Hà, An, Việt.\nLỗi dễ mắc: Tính số người được chọn trước, sau đó xếp thứ hạng. Không chọn thời gian lớn nhất trong bài chạy."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 3. Phân số và thứ hạng — trang 8",
  "source": "Ôn tập 2026 – Tự luyện B 3 – Câu 4",
  "content": "Kết quả chạy của tám bạn: An 6,9 s; Mai 7,6 s; Việt 7,2 s; Huy 6,5 s; Phong 7,4 s; Ngọc 7,9 s; Hà 6,6 s; Minh 7,8 s. Chọn 1/4 số bạn có thành tích tốt nhất. Những bạn nào được chọn?",
  "options": [
   "Minh, Ngọc",
   "Huy, Hà",
   "Huy, Hà, An",
   "Hà, An"
  ],
  "answer": 1,
  "explanation": "Cần chọn 8 : 4 = 2 bạn. Thời gian chạy càng nhỏ thì thành tích càng tốt. Xếp tăng dần thời gian rồi chọn 2 bạn đầu: Huy, Hà.\nLỗi dễ mắc: Tính số người được chọn trước, sau đó xếp thứ hạng. Không chọn thời gian lớn nhất trong bài chạy."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 4. Quy luật ghép ô vuông — trang 8",
  "source": "Ôn tập 2026 – Tự luyện B 4 – Câu 1",
  "content": "Các ô vuông được ghép thành một hàng, hai ô liền nhau dùng chung một cạnh. Mỗi cạnh là một thanh tre. Cần bao nhiêu thanh để tạo 6 ô vuông?",
  "options": [
   "19 thanh",
   "18 thanh",
   "24 thanh",
   "14 thanh"
  ],
  "answer": 0,
  "explanation": "Ô đầu cần 4 thanh. Mỗi ô thêm chỉ cần 3 thanh vì dùng chung một cạnh. Tổng: 4 + (6 − 1) × 3 = 19 thanh.\nLỗi dễ mắc: Không lấy n × 4 vì cách đó đếm lại các cạnh chung. Công thức này chỉ dùng cho kiểu ghép thành một hàng đã nêu."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 4. Quy luật ghép ô vuông — trang 8",
  "source": "Ôn tập 2026 – Tự luyện B 4 – Câu 2",
  "content": "Các ô vuông được ghép thành một hàng, hai ô liền nhau dùng chung một cạnh. Mỗi cạnh là một thanh tre. Cần bao nhiêu thanh để tạo 7 ô vuông?",
  "options": [
   "22 thanh",
   "28 thanh",
   "16 thanh",
   "21 thanh"
  ],
  "answer": 0,
  "explanation": "Ô đầu cần 4 thanh. Mỗi ô thêm chỉ cần 3 thanh vì dùng chung một cạnh. Tổng: 4 + (7 − 1) × 3 = 22 thanh.\nLỗi dễ mắc: Không lấy n × 4 vì cách đó đếm lại các cạnh chung. Công thức này chỉ dùng cho kiểu ghép thành một hàng đã nêu."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 4. Quy luật ghép ô vuông — trang 8",
  "source": "Ôn tập 2026 – Tự luyện B 4 – Câu 3",
  "content": "Các ô vuông được ghép thành một hàng, hai ô liền nhau dùng chung một cạnh. Mỗi cạnh là một thanh tre. Cần bao nhiêu thanh để tạo 8 ô vuông?",
  "options": [
   "24 thanh",
   "18 thanh",
   "32 thanh",
   "25 thanh"
  ],
  "answer": 3,
  "explanation": "Ô đầu cần 4 thanh. Mỗi ô thêm chỉ cần 3 thanh vì dùng chung một cạnh. Tổng: 4 + (8 − 1) × 3 = 25 thanh.\nLỗi dễ mắc: Không lấy n × 4 vì cách đó đếm lại các cạnh chung. Công thức này chỉ dùng cho kiểu ghép thành một hàng đã nêu."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 4. Quy luật ghép ô vuông — trang 8",
  "source": "Ôn tập 2026 – Tự luyện B 4 – Câu 4",
  "content": "Các ô vuông được ghép thành một hàng, hai ô liền nhau dùng chung một cạnh. Mỗi cạnh là một thanh tre. Cần bao nhiêu thanh để tạo 9 ô vuông?",
  "options": [
   "28 thanh",
   "27 thanh",
   "20 thanh",
   "36 thanh"
  ],
  "answer": 0,
  "explanation": "Ô đầu cần 4 thanh. Mỗi ô thêm chỉ cần 3 thanh vì dùng chung một cạnh. Tổng: 4 + (9 − 1) × 3 = 28 thanh.\nLỗi dễ mắc: Không lấy n × 4 vì cách đó đếm lại các cạnh chung. Công thức này chỉ dùng cho kiểu ghép thành một hàng đã nêu."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 5. Biểu đồ và phép chia có dư — trang 9",
  "source": "Ôn tập 2026 – Tự luyện B 5 – Câu 1",
  "content": "Bốn lớp thu gom vỏ chai: 5A: 110 vỏ; 5B: 85 vỏ; 5C: 125 vỏ; 5D: 100 vỏ. Cứ 30 vỏ đổi được một chậu cây. Nếu gộp chung, đổi được nhiều nhất bao nhiêu chậu và còn thừa bao nhiêu vỏ?",
  "options": [
   "14 chậu, thừa 0 vỏ",
   "15 chậu, không thừa",
   "14 chậu, thừa 5 vỏ",
   "13 chậu, thừa 30 vỏ"
  ],
  "answer": 0,
  "explanation": "Tổng: 110 + 85 + 125 + 100 = 420 vỏ. 420 : 30 = 14 dư 0. Đổi được 14 chậu và còn 0 vỏ. Số dư phải nhỏ hơn 30.\nLỗi dễ mắc: Không làm tròn lên để đổi thêm một sản phẩm khi chưa đủ vật liệu. Kiểm tra: số sản phẩm × mức đổi + số dư = tổng."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 5. Biểu đồ và phép chia có dư — trang 9",
  "source": "Ôn tập 2026 – Tự luyện B 5 – Câu 2",
  "content": "Bốn lớp thu gom vỏ chai: 5A: 115 vỏ; 5B: 90 vỏ; 5C: 130 vỏ; 5D: 105 vỏ. Cứ 20 vỏ đổi được một chậu cây. Nếu gộp chung, đổi được nhiều nhất bao nhiêu chậu và còn thừa bao nhiêu vỏ?",
  "options": [
   "21 chậu, thừa 20 vỏ",
   "23 chậu, không thừa",
   "22 chậu, thừa 0 vỏ",
   "22 chậu, thừa 5 vỏ"
  ],
  "answer": 2,
  "explanation": "Tổng: 115 + 90 + 130 + 105 = 440 vỏ. 440 : 20 = 22 dư 0. Đổi được 22 chậu và còn 0 vỏ. Số dư phải nhỏ hơn 20.\nLỗi dễ mắc: Không làm tròn lên để đổi thêm một sản phẩm khi chưa đủ vật liệu. Kiểm tra: số sản phẩm × mức đổi + số dư = tổng."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 5. Biểu đồ và phép chia có dư — trang 9",
  "source": "Ôn tập 2026 – Tự luyện B 5 – Câu 3",
  "content": "Bốn lớp thu gom vỏ chai: 5A: 120 vỏ; 5B: 95 vỏ; 5C: 135 vỏ; 5D: 110 vỏ. Cứ 30 vỏ đổi được một chậu cây. Nếu gộp chung, đổi được nhiều nhất bao nhiêu chậu và còn thừa bao nhiêu vỏ?",
  "options": [
   "15 chậu, thừa 10 vỏ",
   "16 chậu, không thừa",
   "14 chậu, thừa 40 vỏ",
   "15 chậu, không thừa"
  ],
  "answer": 0,
  "explanation": "Tổng: 120 + 95 + 135 + 110 = 460 vỏ. 460 : 30 = 15 dư 10. Đổi được 15 chậu và còn 10 vỏ. Số dư phải nhỏ hơn 30.\nLỗi dễ mắc: Không làm tròn lên để đổi thêm một sản phẩm khi chưa đủ vật liệu. Kiểm tra: số sản phẩm × mức đổi + số dư = tổng."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 5. Biểu đồ và phép chia có dư — trang 9",
  "source": "Ôn tập 2026 – Tự luyện B 5 – Câu 4",
  "content": "Bốn lớp thu gom vỏ chai: 5A: 125 vỏ; 5B: 100 vỏ; 5C: 140 vỏ; 5D: 115 vỏ. Cứ 20 vỏ đổi được một chậu cây. Nếu gộp chung, đổi được nhiều nhất bao nhiêu chậu và còn thừa bao nhiêu vỏ?",
  "options": [
   "25 chậu, không thừa",
   "24 chậu, thừa 5 vỏ",
   "23 chậu, thừa 20 vỏ",
   "24 chậu, thừa 0 vỏ"
  ],
  "answer": 3,
  "explanation": "Tổng: 125 + 100 + 140 + 115 = 480 vỏ. 480 : 20 = 24 dư 0. Đổi được 24 chậu và còn 0 vỏ. Số dư phải nhỏ hơn 20.\nLỗi dễ mắc: Không làm tròn lên để đổi thêm một sản phẩm khi chưa đủ vật liệu. Kiểm tra: số sản phẩm × mức đổi + số dư = tổng."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng cao",
  "lesson": "Bài 6. Thời gian sản xuất theo lượt — trang 10",
  "source": "Ôn tập 2026 – Tự luyện B 6 – Câu 1",
  "content": "Máy in 3D in tối đa 4 móc khóa mỗi lượt. Một lượt luôn mất 20 phút. Máy nghỉ 5 phút giữa hai lượt, không cần chờ sau lượt cuối. Cần in 13 móc khóa từ 8:00. Sớm nhất khi nào in xong?",
  "options": [
   "9:40",
   "9:35",
   "9:30",
   "9:20"
  ],
  "answer": 1,
  "explanation": "13 móc khóa cần 4 lượt (lượt cuối vẫn mất đủ 20 phút). Có 3 lần nghỉ. Tổng thời gian: 4 × 20 + 3 × 5 = 95 phút. Cộng vào 8:00 được 9:35.\nLỗi dễ mắc: Một lượt chưa đầy vẫn mất đủ thời gian nếu đề nói thời gian mỗi lượt cố định. Vẽ chuỗi làm – nghỉ – làm để kiểm tra."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng cao",
  "lesson": "Bài 6. Thời gian sản xuất theo lượt — trang 10",
  "source": "Ôn tập 2026 – Tự luyện B 6 – Câu 2",
  "content": "Máy in 3D in tối đa 5 móc khóa mỗi lượt. Một lượt luôn mất 25 phút. Máy nghỉ 5 phút giữa hai lượt, không cần chờ sau lượt cuối. Cần in 16 móc khóa từ 8:00. Sớm nhất khi nào in xong?",
  "options": [
   "9:50",
   "10:00",
   "9:55",
   "9:40"
  ],
  "answer": 2,
  "explanation": "16 móc khóa cần 4 lượt (lượt cuối vẫn mất đủ 25 phút). Có 3 lần nghỉ. Tổng thời gian: 4 × 25 + 3 × 5 = 115 phút. Cộng vào 8:00 được 9:55.\nLỗi dễ mắc: Một lượt chưa đầy vẫn mất đủ thời gian nếu đề nói thời gian mỗi lượt cố định. Vẽ chuỗi làm – nghỉ – làm để kiểm tra."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng cao",
  "lesson": "Bài 6. Thời gian sản xuất theo lượt — trang 10",
  "source": "Ôn tập 2026 – Tự luyện B 6 – Câu 3",
  "content": "Máy in 3D in tối đa 3 móc khóa mỗi lượt. Một lượt luôn mất 15 phút. Máy nghỉ 5 phút giữa hai lượt, không cần chờ sau lượt cuối. Cần in 13 móc khóa từ 8:00. Sớm nhất khi nào in xong?",
  "options": [
   "9:30",
   "9:35",
   "9:15",
   "9:40"
  ],
  "answer": 1,
  "explanation": "13 móc khóa cần 5 lượt (lượt cuối vẫn mất đủ 15 phút). Có 4 lần nghỉ. Tổng thời gian: 5 × 15 + 4 × 5 = 95 phút. Cộng vào 8:00 được 9:35.\nLỗi dễ mắc: Một lượt chưa đầy vẫn mất đủ thời gian nếu đề nói thời gian mỗi lượt cố định. Vẽ chuỗi làm – nghỉ – làm để kiểm tra."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng cao",
  "lesson": "Bài 6. Thời gian sản xuất theo lượt — trang 10",
  "source": "Ôn tập 2026 – Tự luyện B 6 – Câu 4",
  "content": "Máy in 3D in tối đa 4 móc khóa mỗi lượt. Một lượt luôn mất 20 phút. Máy nghỉ 5 phút giữa hai lượt, không cần chờ sau lượt cuối. Cần in 17 móc khóa từ 8:00. Sớm nhất khi nào in xong?",
  "options": [
   "10:05",
   "10:00",
   "9:40",
   "9:55"
  ],
  "answer": 1,
  "explanation": "17 móc khóa cần 5 lượt (lượt cuối vẫn mất đủ 20 phút). Có 4 lần nghỉ. Tổng thời gian: 5 × 20 + 4 × 5 = 120 phút. Cộng vào 8:00 được 10:00.\nLỗi dễ mắc: Một lượt chưa đầy vẫn mất đủ thời gian nếu đề nói thời gian mỗi lượt cố định. Vẽ chuỗi làm – nghỉ – làm để kiểm tra."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 1. Hình khối và khối lượng — trang 6",
  "source": "Ôn tập 2026 – Luyện phần I – Câu 1",
  "content": "Một mô hình có 5 khối lập phương ở hàng dưới và 1 khối đặt ở hàng trên. Không có khối nào khác. Mỗi khối nặng 150 g. Mô hình nặng bao nhiêu?",
  "options": [
   "1200 g",
   "1050 g",
   "750 g",
   "900 g"
  ],
  "answer": 3,
  "explanation": "Có 5 + 1 = 6 khối. Khối lượng mô hình là 6 × 150 = 900 g.\nLỗi dễ mắc: Đếm riêng từng hàng hoặc từng cột rồi cộng; kiểm tra để không đếm một khối hai lần.",
  "image": "img/ontap/h7.png"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 2. Trung bình cộng và bảng số liệu — trang 7",
  "source": "Ôn tập 2026 – Luyện phần I – Câu 2",
  "content": "Chiều cao của năm bạn: Lan: 134 cm; Hòa: 137 cm; Linh: 140 cm; Đức: 138 cm; Minh: 136 cm. Những bạn nào cao hơn chiều cao trung bình của nhóm?",
  "options": [
   "Hòa, Linh và Đức",
   "Hòa và Đức",
   "Lan và Minh",
   "Linh và Đức"
  ],
  "answer": 3,
  "explanation": "Tổng chiều cao là 685 cm; trung bình là 685 : 5 = 137 cm. Linh (140 cm) và Đức (138 cm) cao hơn mức này. Hòa bằng mức trung bình nên không được chọn.\nLỗi dễ mắc: Đừng chọn luôn hai bạn cao nhất trước khi tính trung bình; số bạn trên trung bình có thể thay đổi."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 3. Phân số và thứ hạng — trang 8",
  "source": "Ôn tập 2026 – Luyện phần I – Câu 3",
  "content": "Kết quả chạy của tám bạn: An 7,1 s; Mai 7,8 s; Việt 7,4 s; Huy 6,7 s; Phong 7,6 s; Ngọc 8,1 s; Hà 6,8 s; Minh 8,0 s. Chọn 1/4 số bạn có thành tích tốt nhất. Những bạn nào được chọn?",
  "options": [
   "Minh, Ngọc",
   "Huy, Hà, An",
   "Huy, Hà",
   "Hà, An"
  ],
  "answer": 2,
  "explanation": "Cần chọn 8 : 4 = 2 bạn. Thời gian chạy càng nhỏ thì thành tích càng tốt. Xếp tăng dần thời gian rồi chọn 2 bạn đầu: Huy, Hà.\nLỗi dễ mắc: Tính số người được chọn trước, sau đó xếp thứ hạng. Không chọn thời gian lớn nhất trong bài chạy."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 4. Quy luật ghép ô vuông — trang 8",
  "source": "Ôn tập 2026 – Luyện phần I – Câu 4",
  "content": "Các ô vuông được ghép thành một hàng, hai ô liền nhau dùng chung một cạnh. Mỗi cạnh là một thanh tre. Cần bao nhiêu thanh để tạo 11 ô vuông?",
  "options": [
   "44 thanh",
   "24 thanh",
   "33 thanh",
   "34 thanh"
  ],
  "answer": 3,
  "explanation": "Ô đầu cần 4 thanh. Mỗi ô thêm chỉ cần 3 thanh vì dùng chung một cạnh. Tổng: 4 + (11 − 1) × 3 = 34 thanh.\nLỗi dễ mắc: Không lấy n × 4 vì cách đó đếm lại các cạnh chung. Công thức này chỉ dùng cho kiểu ghép thành một hàng đã nêu."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 5. Biểu đồ và phép chia có dư — trang 9",
  "source": "Ôn tập 2026 – Luyện phần I – Câu 5",
  "content": "Bốn lớp thu gom vỏ chai: 5A: 135 vỏ; 5B: 110 vỏ; 5C: 150 vỏ; 5D: 125 vỏ. Cứ 20 vỏ đổi được một chậu cây. Nếu gộp chung, đổi được nhiều nhất bao nhiêu chậu và còn thừa bao nhiêu vỏ?",
  "options": [
   "27 chậu, không thừa",
   "26 chậu, thừa 0 vỏ",
   "25 chậu, thừa 20 vỏ",
   "26 chậu, thừa 5 vỏ"
  ],
  "answer": 1,
  "explanation": "Tổng: 135 + 110 + 150 + 125 = 520 vỏ. 520 : 20 = 26 dư 0. Đổi được 26 chậu và còn 0 vỏ. Số dư phải nhỏ hơn 20.\nLỗi dễ mắc: Không làm tròn lên để đổi thêm một sản phẩm khi chưa đủ vật liệu. Kiểm tra: số sản phẩm × mức đổi + số dư = tổng.",
  "image": "img/ontap/h8.png"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng cao",
  "lesson": "Bài 6. Thời gian sản xuất theo lượt — trang 10",
  "source": "Ôn tập 2026 – Luyện phần I – Câu 6",
  "content": "Máy in 3D in tối đa 3 móc khóa mỗi lượt. Một lượt luôn mất 15 phút. Máy nghỉ 5 phút giữa hai lượt, không cần chờ sau lượt cuối. Cần in 16 móc khóa từ 8:00. Sớm nhất khi nào in xong?",
  "options": [
   "10:00",
   "9:30",
   "9:50",
   "9:55"
  ],
  "answer": 3,
  "explanation": "16 móc khóa cần 6 lượt (lượt cuối vẫn mất đủ 15 phút). Có 5 lần nghỉ. Tổng thời gian: 6 × 15 + 5 × 5 = 115 phút. Cộng vào 8:00 được 9:55.\nLỗi dễ mắc: Một lượt chưa đầy vẫn mất đủ thời gian nếu đề nói thời gian mỗi lượt cố định. Vẽ chuỗi làm – nghỉ – làm để kiểm tra."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 1. Hình khối và khối lượng — trang 6",
  "source": "Ôn tập 2026 – Luyện phần I – Câu 7",
  "content": "Một mô hình có 6 khối lập phương ở hàng dưới và 2 khối đặt ở hàng trên. Không có khối nào khác. Mỗi khối nặng 200 g. Mô hình nặng bao nhiêu?",
  "options": [
   "1200 g",
   "1600 g",
   "2000 g",
   "1800 g"
  ],
  "answer": 1,
  "explanation": "Có 6 + 2 = 8 khối. Khối lượng mô hình là 8 × 200 = 1600 g.\nLỗi dễ mắc: Đếm riêng từng hàng hoặc từng cột rồi cộng; kiểm tra để không đếm một khối hai lần.",
  "image": "img/ontap/h9.png"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 2. Trung bình cộng và bảng số liệu — trang 7",
  "source": "Ôn tập 2026 – Luyện phần I – Câu 8",
  "content": "Chiều cao của năm bạn: Lan: 135 cm; Hòa: 138 cm; Linh: 141 cm; Đức: 139 cm; Minh: 137 cm. Những bạn nào cao hơn chiều cao trung bình của nhóm?",
  "options": [
   "Lan và Minh",
   "Hòa và Đức",
   "Linh và Đức",
   "Hòa, Linh và Đức"
  ],
  "answer": 2,
  "explanation": "Tổng chiều cao là 690 cm; trung bình là 690 : 5 = 138 cm. Linh (141 cm) và Đức (139 cm) cao hơn mức này. Hòa bằng mức trung bình nên không được chọn.\nLỗi dễ mắc: Đừng chọn luôn hai bạn cao nhất trước khi tính trung bình; số bạn trên trung bình có thể thay đổi."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 3. Phân số và thứ hạng — trang 8",
  "source": "Ôn tập 2026 – Luyện phần I – Câu 9",
  "content": "Kết quả chạy của tám bạn: An 7,2 s; Mai 7,9 s; Việt 7,5 s; Huy 6,8 s; Phong 7,7 s; Ngọc 8,2 s; Hà 6,9 s; Minh 8,1 s. Chọn 1/2 số bạn có thành tích tốt nhất. Những bạn nào được chọn?",
  "options": [
   "Phong, Mai, Minh, Ngọc",
   "Hà, An, Việt, Phong",
   "Huy, Hà, An, Việt, Phong",
   "Huy, Hà, An, Việt"
  ],
  "answer": 3,
  "explanation": "Cần chọn 8 : 2 = 4 bạn. Thời gian chạy càng nhỏ thì thành tích càng tốt. Xếp tăng dần thời gian rồi chọn 4 bạn đầu: Huy, Hà, An, Việt.\nLỗi dễ mắc: Tính số người được chọn trước, sau đó xếp thứ hạng. Không chọn thời gian lớn nhất trong bài chạy."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 4. Quy luật ghép ô vuông — trang 8",
  "source": "Ôn tập 2026 – Luyện phần I – Câu 10",
  "content": "Các ô vuông được ghép thành một hàng, hai ô liền nhau dùng chung một cạnh. Mỗi cạnh là một thanh tre. Cần bao nhiêu thanh để tạo 12 ô vuông?",
  "options": [
   "36 thanh",
   "26 thanh",
   "48 thanh",
   "37 thanh"
  ],
  "answer": 3,
  "explanation": "Ô đầu cần 4 thanh. Mỗi ô thêm chỉ cần 3 thanh vì dùng chung một cạnh. Tổng: 4 + (12 − 1) × 3 = 37 thanh.\nLỗi dễ mắc: Không lấy n × 4 vì cách đó đếm lại các cạnh chung. Công thức này chỉ dùng cho kiểu ghép thành một hàng đã nêu."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 5. Biểu đồ và phép chia có dư — trang 9",
  "source": "Ôn tập 2026 – Luyện phần I – Câu 11",
  "content": "Bốn lớp thu gom vỏ chai: 5A: 140 vỏ; 5B: 115 vỏ; 5C: 155 vỏ; 5D: 130 vỏ. Cứ 30 vỏ đổi được một chậu cây. Nếu gộp chung, đổi được nhiều nhất bao nhiêu chậu và còn thừa bao nhiêu vỏ?",
  "options": [
   "17 chậu, thừa 30 vỏ",
   "19 chậu, không thừa",
   "18 chậu, thừa 5 vỏ",
   "18 chậu, thừa 0 vỏ"
  ],
  "answer": 3,
  "explanation": "Tổng: 140 + 115 + 155 + 130 = 540 vỏ. 540 : 30 = 18 dư 0. Đổi được 18 chậu và còn 0 vỏ. Số dư phải nhỏ hơn 30.\nLỗi dễ mắc: Không làm tròn lên để đổi thêm một sản phẩm khi chưa đủ vật liệu. Kiểm tra: số sản phẩm × mức đổi + số dư = tổng.",
  "image": "img/ontap/h10.png"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng cao",
  "lesson": "Bài 6. Thời gian sản xuất theo lượt — trang 10",
  "source": "Ôn tập 2026 – Luyện phần I – Câu 12",
  "content": "Máy in 3D in tối đa 4 móc khóa mỗi lượt. Một lượt luôn mất 20 phút. Máy nghỉ 5 phút giữa hai lượt, không cần chờ sau lượt cuối. Cần in 21 móc khóa từ 8:00. Sớm nhất khi nào in xong?",
  "options": [
   "10:20",
   "10:25",
   "10:30",
   "10:00"
  ],
  "answer": 1,
  "explanation": "21 móc khóa cần 6 lượt (lượt cuối vẫn mất đủ 20 phút). Có 5 lần nghỉ. Tổng thời gian: 6 × 20 + 5 × 5 = 145 phút. Cộng vào 8:00 được 10:25.\nLỗi dễ mắc: Một lượt chưa đầy vẫn mất đủ thời gian nếu đề nói thời gian mỗi lượt cố định. Vẽ chuỗi làm – nghỉ – làm để kiểm tra."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 7. Không khí chiếm chỗ và có thể bị nén — trang 13",
  "source": "Ôn tập 2026 – Tự luyện B 7 – Câu 1",
  "content": "Nhúng úp một cốc có khăn giấy ở đáy vào nước theo phương thẳng đứng. Khăn giấy vẫn khô vì phần nào chiếm chỗ trong cốc?",
  "options": [
   "Không khí",
   "Âm thanh",
   "Nhiệt độ",
   "Ánh sáng"
  ],
  "answer": 0,
  "explanation": "Không khí có sẵn trong cốc chiếm chỗ, cản nước đi vào khi giữ cốc úp thẳng.\nLỗi dễ mắc: Bơm phao làm phao phồng không tự chứng minh khí có thể tích giảm. Muốn nói “bị nén”, cần dữ kiện phần khí chiếm thể tích nhỏ hơn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 7. Không khí chiếm chỗ và có thể bị nén — trang 13",
  "source": "Ôn tập 2026 – Tự luyện B 7 – Câu 2",
  "content": "Một túi mềm đang xẹp được bơm không khí vào và phồng lên. Nhận xét nào phù hợp nhất?",
  "options": [
   "Không khí có màu đỏ",
   "Không khí đã biến thành đất",
   "Không khí đã biến mất",
   "Không khí đi vào và chiếm chỗ trong túi"
  ],
  "answer": 3,
  "explanation": "Túi phồng lên vì không khí được đưa vào. Không thể chỉ từ hình túi phồng mà kết luận thể tích khí giảm.\nLỗi dễ mắc: Bơm phao làm phao phồng không tự chứng minh khí có thể tích giảm. Muốn nói “bị nén”, cần dữ kiện phần khí chiếm thể tích nhỏ hơn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 7. Không khí chiếm chỗ và có thể bị nén — trang 13",
  "source": "Ôn tập 2026 – Tự luyện B 7 – Câu 3",
  "content": "Trong một xi lanh kín có không khí, kéo pít-tông ra làm phần chứa khí rộng hơn. Không khí bên trong có thể như thế nào?",
  "options": [
   "Mất hoàn toàn",
   "Biến thành đá",
   "Đổi thành màu xanh",
   "Giãn ra để chiếm thể tích lớn hơn"
  ],
  "answer": 3,
  "explanation": "Không khí có thể giãn ra khi thể tích phần chứa khí tăng.\nLỗi dễ mắc: Bơm phao làm phao phồng không tự chứng minh khí có thể tích giảm. Muốn nói “bị nén”, cần dữ kiện phần khí chiếm thể tích nhỏ hơn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 7. Không khí chiếm chỗ và có thể bị nén — trang 13",
  "source": "Ôn tập 2026 – Tự luyện B 7 – Câu 4",
  "content": "Một quả bóng cao su kín bị bóp nhẹ rồi thả ra. Khí vẫn ở trong bóng. Điều gì giúp giải thích việc bóng có thể bị bóp nhỏ hơn?",
  "options": [
   "Không khí luôn biến mất khi bóp",
   "Không khí là chất rắn",
   "Không khí không chiếm chỗ",
   "Không khí bên trong có thể bị nén"
  ],
  "answer": 3,
  "explanation": "Khi bóp, thể tích bên trong giảm và khí bị nén; khi thả, bóng có thể trở lại hình dạng ban đầu.\nLỗi dễ mắc: Bơm phao làm phao phồng không tự chứng minh khí có thể tích giảm. Muốn nói “bị nén”, cần dữ kiện phần khí chiếm thể tích nhỏ hơn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Bài 8. Nước và sự chuyển thể — trang 14",
  "source": "Ôn tập 2026 – Tự luyện B 8 – Câu 1",
  "content": "Nước trong khay để vào ngăn đông trở thành đá. Hiện tượng chính là gì?",
  "options": [
   "Nóng chảy",
   "Bay hơi",
   "Đông đặc",
   "Ngưng tụ"
  ],
  "answer": 2,
  "explanation": "Nước chuyển từ thể lỏng sang thể rắn.\nLỗi dễ mắc: Giọt ở ngoài cốc lạnh thường từ hơi nước trong không khí ngưng tụ, không phải nước tự xuyên qua cốc."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Bài 8. Nước và sự chuyển thể — trang 14",
  "source": "Ôn tập 2026 – Tự luyện B 8 – Câu 2",
  "content": "Viên đá để ngoài phòng chuyển thành nước. Hiện tượng chính là gì?",
  "options": [
   "Đông đặc",
   "Ngưng tụ",
   "Nóng chảy",
   "Bay hơi"
  ],
  "answer": 2,
  "explanation": "Chất chuyển từ thể rắn sang thể lỏng.\nLỗi dễ mắc: Giọt ở ngoài cốc lạnh thường từ hơi nước trong không khí ngưng tụ, không phải nước tự xuyên qua cốc."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Bài 8. Nước và sự chuyển thể — trang 14",
  "source": "Ôn tập 2026 – Tự luyện B 8 – Câu 3",
  "content": "Mặt ngoài cốc nước đá có các giọt nước từ hơi nước trong không khí. Hiện tượng chính là gì?",
  "options": [
   "Đông đặc",
   "Ngưng tụ",
   "Bay hơi",
   "Nóng chảy"
  ],
  "answer": 1,
  "explanation": "Hơi nước chuyển thành các giọt nước lỏng khi gặp điều kiện phù hợp.\nLỗi dễ mắc: Giọt ở ngoài cốc lạnh thường từ hơi nước trong không khí ngưng tụ, không phải nước tự xuyên qua cốc."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Bài 8. Nước và sự chuyển thể — trang 14",
  "source": "Ôn tập 2026 – Tự luyện B 8 – Câu 4",
  "content": "Một vũng nước ngoài sân nhỏ dần khi trời nắng. Hiện tượng chính là gì?",
  "options": [
   "Nóng chảy",
   "Đông đặc",
   "Ngưng tụ",
   "Bay hơi"
  ],
  "answer": 3,
  "explanation": "Nước lỏng chuyển thành hơi nước; lượng nước trên vật hoặc mặt đất giảm dần.\nLỗi dễ mắc: Giọt ở ngoài cốc lạnh thường từ hơi nước trong không khí ngưng tụ, không phải nước tự xuyên qua cốc."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 9. Mặt trời và phương hướng — trang 14",
  "source": "Ôn tập 2026 – Tự luyện B 9 – Câu 1",
  "content": "Trong bài tập này, Mặt trời ở hướng Tây vào buổi chiều. Bạn Bình thấy Mặt trời ở sau lưng. Bình đang quay mặt về hướng nào?",
  "options": [
   "Đông",
   "Bắc",
   "Tây",
   "Nam"
  ],
  "answer": 0,
  "explanation": "Đặt hướng Tây ở sau lưng của Bình rồi đối chiếu bốn hướng. Hướng trước mặt bạn là Đông. Khi quay mặt về Bắc, Đông ở bên phải và Tây ở bên trái.\nLỗi dễ mắc: Không xem “bên phải hình” luôn là Đông. Hãy vẽ bốn hướng và đặt người theo hướng đang nhìn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 9. Mặt trời và phương hướng — trang 14",
  "source": "Ôn tập 2026 – Tự luyện B 9 – Câu 2",
  "content": "Trong bài tập này, Mặt trời ở hướng Đông vào buổi sáng. Bạn Cường thấy Mặt trời ở bên tay trái. Cường đang quay mặt về hướng nào?",
  "options": [
   "Tây",
   "Đông",
   "Nam",
   "Bắc"
  ],
  "answer": 2,
  "explanation": "Đặt hướng Đông ở bên tay trái của Cường rồi đối chiếu bốn hướng. Hướng trước mặt bạn là Nam. Khi quay mặt về Bắc, Đông ở bên phải và Tây ở bên trái.\nLỗi dễ mắc: Không xem “bên phải hình” luôn là Đông. Hãy vẽ bốn hướng và đặt người theo hướng đang nhìn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 9. Mặt trời và phương hướng — trang 14",
  "source": "Ôn tập 2026 – Tự luyện B 9 – Câu 3",
  "content": "Trong bài tập này, Mặt trời ở hướng Tây vào buổi chiều. Bạn Duy thấy Mặt trời ở bên tay phải. Duy đang quay mặt về hướng nào?",
  "options": [
   "Bắc",
   "Tây",
   "Nam",
   "Đông"
  ],
  "answer": 2,
  "explanation": "Đặt hướng Tây ở bên tay phải của Duy rồi đối chiếu bốn hướng. Hướng trước mặt bạn là Nam. Khi quay mặt về Bắc, Đông ở bên phải và Tây ở bên trái.\nLỗi dễ mắc: Không xem “bên phải hình” luôn là Đông. Hãy vẽ bốn hướng và đặt người theo hướng đang nhìn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 9. Mặt trời và phương hướng — trang 14",
  "source": "Ôn tập 2026 – Tự luyện B 9 – Câu 4",
  "content": "Trong bài tập này, Mặt trời ở hướng Đông vào buổi sáng. Bạn Hoa thấy Mặt trời ở trước mặt. Hoa đang quay mặt về hướng nào?",
  "options": [
   "Bắc",
   "Đông",
   "Tây",
   "Nam"
  ],
  "answer": 1,
  "explanation": "Đặt hướng Đông ở trước mặt của Hoa rồi đối chiếu bốn hướng. Hướng trước mặt bạn là Đông. Khi quay mặt về Bắc, Đông ở bên phải và Tây ở bên trái.\nLỗi dễ mắc: Không xem “bên phải hình” luôn là Đông. Hãy vẽ bốn hướng và đặt người theo hướng đang nhìn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 10. Quan sát thí nghiệm nảy mầm — trang 15",
  "source": "Ôn tập 2026 – Tự luyện B 10 – Câu 1",
  "content": "Muốn tìm hiểu vai trò của nước đối với sự nảy mầm, hai chậu cùng loại hạt và đất nên khác nhau chủ yếu ở yếu tố nào?",
  "options": [
   "Lượng nước tưới",
   "Số thứ tự chậu",
   "Màu nhãn dán",
   "Tên người gieo"
  ],
  "answer": 0,
  "explanation": "Thay đổi lượng nước và giữ các điều kiện còn lại tương đương giúp so sánh vai trò của nước.\nLỗi dễ mắc: Một chậu nảy mầm khi tưới không chứng minh mọi hạt cứ có nước là nảy mầm. Hạt và điều kiện khác cũng cần phù hợp."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 10. Quan sát thí nghiệm nảy mầm — trang 15",
  "source": "Ôn tập 2026 – Tự luyện B 10 – Câu 2",
  "content": "Một nhóm so sánh chậu A được tưới vừa đủ với chậu B không tưới. Để so sánh hợp lý, nhóm nên làm gì?",
  "options": [
   "Dùng hạt cùng loại, số lượng như nhau và điều kiện khác tương đương",
   "Gieo một chậu trước chậu kia một tháng",
   "Đặt một chậu trong tủ lạnh, một chậu ngoài trời",
   "Dùng hai loại hạt khác hẳn nhau"
  ],
  "answer": 0,
  "explanation": "Giữ các điều kiện khác tương đương giúp tránh nhầm tác động của nước với tác động của loại hạt, nhiệt độ hay thời gian.\nLỗi dễ mắc: Một chậu nảy mầm khi tưới không chứng minh mọi hạt cứ có nước là nảy mầm. Hạt và điều kiện khác cũng cần phù hợp."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 10. Quan sát thí nghiệm nảy mầm — trang 15",
  "source": "Ôn tập 2026 – Tự luyện B 10 – Câu 3",
  "content": "Sau ba ngày, chậu đủ ẩm có nhiều hạt nảy mầm hơn chậu đất khô. Cách ghi kết quả nào giúp nhóm dễ so sánh nhất?",
  "options": [
   "Chỉ ghi màu chậu",
   "Ghi số hạt nảy mầm trong từng chậu sau cùng thời gian",
   "Bỏ qua chậu chưa nảy mầm",
   "Chỉ ghi tên nhóm"
  ],
  "answer": 1,
  "explanation": "Ghi số hạt nảy mầm theo cùng thời điểm tạo dữ liệu để so sánh hai chậu.\nLỗi dễ mắc: Một chậu nảy mầm khi tưới không chứng minh mọi hạt cứ có nước là nảy mầm. Hạt và điều kiện khác cũng cần phù hợp."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 10. Quan sát thí nghiệm nảy mầm — trang 15",
  "source": "Ôn tập 2026 – Tự luyện B 10 – Câu 4",
  "content": "Chậu A đủ ẩm có hạt nảy mầm, chậu B đất khô chưa có hạt nảy mầm. Các điều kiện khác tương đương. Chọn câu kết luận đúng trong phạm vi quan sát.",
  "options": [
   "Trong điều kiện thí nghiệm, đủ ẩm hỗ trợ hạt nảy mầm",
   "Hạt không cần không khí",
   "Mọi hạt nảy mầm chỉ cần nước",
   "Cứ gieo vào đất khô là nảy mầm"
  ],
  "answer": 0,
  "explanation": "Kết quả hỗ trợ vai trò của độ ẩm trong điều kiện đã giữ tương đương, không chứng minh nước là điều kiện duy nhất.\nLỗi dễ mắc: Một chậu nảy mầm khi tưới không chứng minh mọi hạt cứ có nước là nảy mầm. Hạt và điều kiện khác cũng cần phù hợp."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 11. Chuỗi thức ăn và bảo vệ tự nhiên — trang 16",
  "source": "Ôn tập 2026 – Tự luyện B 11 – Câu 1",
  "content": "Trong chuỗi lúa → chuột → rắn, sinh vật nào ăn thực vật theo chuỗi đã cho?",
  "options": [
   "Chuột",
   "Rắn",
   "Cả lúa và rắn",
   "Lúa"
  ],
  "answer": 0,
  "explanation": "Mũi tên đi từ thức ăn đến sinh vật ăn nó. Chuột ăn lúa trong chuỗi này.\nLỗi dễ mắc: Đọc mũi tên đúng chiều. Trong câu hỏi, suy luận theo chuỗi được cho, không tự đổi thức ăn của sinh vật."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 11. Chuỗi thức ăn và bảo vệ tự nhiên — trang 16",
  "source": "Ôn tập 2026 – Tự luyện B 11 – Câu 2",
  "content": "Trong chuỗi rau → sâu → chim, chim sử dụng nguồn thức ăn nào theo sơ đồ?",
  "options": [
   "Ánh sáng",
   "Rau",
   "Đất",
   "Sâu"
  ],
  "answer": 3,
  "explanation": "Sơ đồ thể hiện sâu là thức ăn của chim.\nLỗi dễ mắc: Đọc mũi tên đúng chiều. Trong câu hỏi, suy luận theo chuỗi được cho, không tự đổi thức ăn của sinh vật."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 11. Chuỗi thức ăn và bảo vệ tự nhiên — trang 16",
  "source": "Ôn tập 2026 – Tự luyện B 11 – Câu 3",
  "content": "Hoạt động nào góp phần bảo vệ các chuỗi thức ăn ở rừng?",
  "options": [
   "Trồng cây phù hợp và bảo vệ rừng",
   "Chặt hết cây",
   "Đốt rừng làm sạch đất",
   "Săn bắt mọi động vật"
  ],
  "answer": 0,
  "explanation": "Cây xanh và môi trường sống được bảo vệ giúp duy trì quan hệ thức ăn giữa các sinh vật.\nLỗi dễ mắc: Đọc mũi tên đúng chiều. Trong câu hỏi, suy luận theo chuỗi được cho, không tự đổi thức ăn của sinh vật."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 11. Chuỗi thức ăn và bảo vệ tự nhiên — trang 16",
  "source": "Ôn tập 2026 – Tự luyện B 11 – Câu 4",
  "content": "Trong chuỗi cỏ → thỏ → cáo, cỏ giảm mạnh có thể ảnh hưởng trực tiếp đến sinh vật nào trước tiên?",
  "options": [
   "Chim biển",
   "Cáo",
   "Cá trong ao",
   "Thỏ"
  ],
  "answer": 3,
  "explanation": "Thỏ ăn cỏ nên việc cỏ giảm tác động trực tiếp đến nguồn thức ăn của thỏ.\nLỗi dễ mắc: Đọc mũi tên đúng chiều. Trong câu hỏi, suy luận theo chuỗi được cho, không tự đổi thức ăn của sinh vật."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 12. Thụ phấn ở cây bí — trang 17",
  "source": "Ôn tập 2026 – Tự luyện B 12 – Câu 1",
  "content": "Ở cây bí, việc đưa phấn hoa đực sang hoa cái nhằm mục đích gì?",
  "options": [
   "Làm rễ biến mất",
   "Hỗ trợ thụ phấn",
   "Thay thế hoàn toàn việc chăm cây",
   "Làm hoa đổi màu"
  ],
  "answer": 1,
  "explanation": "Đưa phấn sang hoa cái hỗ trợ quá trình thụ phấn.\nLỗi dễ mắc: Không nhầm “tưới nhiều nước vào hoa” với thụ phấn. Không nên ngắt bỏ toàn bộ hoa đực khi cần nguồn phấn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 12. Thụ phấn ở cây bí — trang 17",
  "source": "Ôn tập 2026 – Tự luyện B 12 – Câu 2",
  "content": "Việc nào không trực tiếp giúp đưa phấn đến hoa cái của cây bí?",
  "options": [
   "Dùng cọ mềm chuyển phấn",
   "Đổ nước vào hoa",
   "Chuyển phấn bằng tay đúng cách",
   "Côn trùng mang phấn"
  ],
  "answer": 1,
  "explanation": "Nước đổ vào hoa không thay thế việc chuyển phấn hoa.\nLỗi dễ mắc: Không nhầm “tưới nhiều nước vào hoa” với thụ phấn. Không nên ngắt bỏ toàn bộ hoa đực khi cần nguồn phấn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 12. Thụ phấn ở cây bí — trang 17",
  "source": "Ôn tập 2026 – Tự luyện B 12 – Câu 3",
  "content": "Trong vườn bí, ong đến các hoa có thể hỗ trợ việc gì?",
  "options": [
   "Biến đất thành nước",
   "Mang phấn giữa các hoa",
   "Làm hoa không cần sinh sản",
   "Cắt bỏ rễ cây"
  ],
  "answer": 1,
  "explanation": "Ong có thể mang phấn khi di chuyển giữa các hoa.\nLỗi dễ mắc: Không nhầm “tưới nhiều nước vào hoa” với thụ phấn. Không nên ngắt bỏ toàn bộ hoa đực khi cần nguồn phấn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 12. Thụ phấn ở cây bí — trang 17",
  "source": "Ôn tập 2026 – Tự luyện B 12 – Câu 4",
  "content": "Vì sao ngắt bỏ hết hoa đực có thể làm cây bí khó tạo quả hơn?",
  "options": [
   "Hoa cái không cần phấn",
   "Hoa đực là toàn bộ rễ cây",
   "Nước tưới tự tạo phấn hoa",
   "Giảm nguồn phấn cho hoa cái"
  ],
  "answer": 3,
  "explanation": "Hoa đực cung cấp phấn. Loại bỏ toàn bộ nguồn phấn có thể cản trở thụ phấn.\nLỗi dễ mắc: Không nhầm “tưới nhiều nước vào hoa” với thụ phấn. Không nên ngắt bỏ toàn bộ hoa đực khi cần nguồn phấn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 7. Không khí chiếm chỗ và có thể bị nén — trang 13",
  "source": "Ôn tập 2026 – Luyện phần II – Câu 1",
  "content": "Để quan sát tính nén được của không khí, nên chọn thí nghiệm nào?",
  "options": [
   "Chiếu đèn vào tờ giấy",
   "Làm tan viên đá",
   "Phơi khăn ướt",
   "Đẩy pít-tông của xi lanh có khí và đầu bịt kín"
  ],
  "answer": 3,
  "explanation": "Xi lanh bịt kín giúp quan sát thể tích khí giảm khi pít-tông được đẩy vào.\nLỗi dễ mắc: Bơm phao làm phao phồng không tự chứng minh khí có thể tích giảm. Muốn nói “bị nén”, cần dữ kiện phần khí chiếm thể tích nhỏ hơn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Bài 8. Nước và sự chuyển thể — trang 14",
  "source": "Ôn tập 2026 – Luyện phần II – Câu 2",
  "content": "Nước làm đá viên chuyển từ lỏng sang rắn. Hiện tượng chính là gì?",
  "options": [
   "Ngưng tụ",
   "Nóng chảy",
   "Bay hơi",
   "Đông đặc"
  ],
  "answer": 3,
  "explanation": "Nước chuyển từ thể lỏng sang thể rắn.\nLỗi dễ mắc: Giọt ở ngoài cốc lạnh thường từ hơi nước trong không khí ngưng tụ, không phải nước tự xuyên qua cốc."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 9. Mặt trời và phương hướng — trang 14",
  "source": "Ôn tập 2026 – Luyện phần II – Câu 3",
  "content": "Trong bài tập này, Mặt trời ở hướng Đông vào buổi sáng. Bạn Minh thấy Mặt trời ở bên tay trái. Minh đang quay mặt về hướng nào?",
  "options": [
   "Đông",
   "Bắc",
   "Tây",
   "Nam"
  ],
  "answer": 3,
  "explanation": "Đặt hướng Đông ở bên tay trái của Minh rồi đối chiếu bốn hướng. Hướng trước mặt bạn là Nam. Khi quay mặt về Bắc, Đông ở bên phải và Tây ở bên trái.\nLỗi dễ mắc: Không xem “bên phải hình” luôn là Đông. Hãy vẽ bốn hướng và đặt người theo hướng đang nhìn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 10. Quan sát thí nghiệm nảy mầm — trang 15",
  "source": "Ôn tập 2026 – Luyện phần II – Câu 4",
  "content": "Nhóm Hoa so sánh chậu A được tưới vừa đủ với chậu B không tưới. Để so sánh hợp lý, nhóm nên làm gì?",
  "options": [
   "Dùng hạt cùng loại, số lượng như nhau và điều kiện khác tương đương",
   "Dùng hai loại hạt khác hẳn nhau",
   "Gieo một chậu trước chậu kia một tháng",
   "Đặt một chậu trong tủ lạnh, một chậu ngoài trời"
  ],
  "answer": 0,
  "explanation": "Giữ các điều kiện khác tương đương giúp tránh nhầm tác động của nước với tác động của loại hạt, nhiệt độ hay thời gian.\nLỗi dễ mắc: Một chậu nảy mầm khi tưới không chứng minh mọi hạt cứ có nước là nảy mầm. Hạt và điều kiện khác cũng cần phù hợp."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 11. Chuỗi thức ăn và bảo vệ tự nhiên — trang 16",
  "source": "Ôn tập 2026 – Luyện phần II – Câu 5",
  "content": "Trong chuỗi lá cây → sâu → chim, sinh vật nào tạo nguồn thức ăn từ thực vật?",
  "options": [
   "Cả sâu và chim",
   "Sâu",
   "Chim",
   "Cây"
  ],
  "answer": 3,
  "explanation": "Cây tạo chất hữu cơ, cung cấp lá làm nguồn thức ăn cho sâu trong chuỗi.\nLỗi dễ mắc: Đọc mũi tên đúng chiều. Trong câu hỏi, suy luận theo chuỗi được cho, không tự đổi thức ăn của sinh vật."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 12. Thụ phấn ở cây bí — trang 17",
  "source": "Ôn tập 2026 – Luyện phần II – Câu 6",
  "content": "Sau khi hỗ trợ thụ phấn cho hoa bí, nhóm nên tiếp tục làm gì?",
  "options": [
   "Nhổ cây lên mỗi ngày",
   "Ngừng mọi chăm sóc ngay",
   "Chăm sóc và theo dõi sự phát triển của hoa, quả",
   "Ngắt bỏ toàn bộ hoa cái"
  ],
  "answer": 2,
  "explanation": "Thụ phấn không thay thế các điều kiện chăm sóc; cần theo dõi sự phát triển của cây.\nLỗi dễ mắc: Không nhầm “tưới nhiều nước vào hoa” với thụ phấn. Không nên ngắt bỏ toàn bộ hoa đực khi cần nguồn phấn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 7. Không khí chiếm chỗ và có thể bị nén — trang 13",
  "source": "Ôn tập 2026 – Luyện phần II – Câu 7",
  "content": "Hai xi lanh giống nhau, một đầu hở và một đầu bịt kín. Khi đẩy pít-tông, khí trong xi lanh đầu hở có thể làm gì?",
  "options": [
   "Luôn biến thành nước",
   "Thoát qua đầu hở",
   "Không thể chuyển động",
   "Biến thành gỗ"
  ],
  "answer": 1,
  "explanation": "Khí có thể đi ra qua đầu hở. Muốn quan sát khí bị nén, cần giữ khí trong một phần chứa kín.\nLỗi dễ mắc: Bơm phao làm phao phồng không tự chứng minh khí có thể tích giảm. Muốn nói “bị nén”, cần dữ kiện phần khí chiếm thể tích nhỏ hơn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Bài 8. Nước và sự chuyển thể — trang 14",
  "source": "Ôn tập 2026 – Luyện phần II – Câu 8",
  "content": "Kem đông lạnh mềm và chảy khi để lâu ngoài trời. Hiện tượng chính là gì?",
  "options": [
   "Nóng chảy",
   "Đông đặc",
   "Ngưng tụ",
   "Bay hơi"
  ],
  "answer": 0,
  "explanation": "Chất chuyển từ thể rắn sang thể lỏng.\nLỗi dễ mắc: Giọt ở ngoài cốc lạnh thường từ hơi nước trong không khí ngưng tụ, không phải nước tự xuyên qua cốc."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 9. Mặt trời và phương hướng — trang 14",
  "source": "Ôn tập 2026 – Luyện phần II – Câu 9",
  "content": "Trong bài tập này, Mặt trời ở hướng Tây vào buổi chiều. Bạn Ngọc thấy Mặt trời ở bên tay phải. Ngọc đang quay mặt về hướng nào?",
  "options": [
   "Nam",
   "Tây",
   "Bắc",
   "Đông"
  ],
  "answer": 0,
  "explanation": "Đặt hướng Tây ở bên tay phải của Ngọc rồi đối chiếu bốn hướng. Hướng trước mặt bạn là Nam. Khi quay mặt về Bắc, Đông ở bên phải và Tây ở bên trái.\nLỗi dễ mắc: Không xem “bên phải hình” luôn là Đông. Hãy vẽ bốn hướng và đặt người theo hướng đang nhìn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 10. Quan sát thí nghiệm nảy mầm — trang 15",
  "source": "Ôn tập 2026 – Luyện phần II – Câu 10",
  "content": "Sau bốn ngày, chậu đủ ẩm có nhiều hạt nảy mầm hơn chậu đất khô. Cách ghi kết quả nào giúp nhóm dễ so sánh nhất?",
  "options": [
   "Bỏ qua chậu chưa nảy mầm",
   "Chỉ ghi màu chậu",
   "Ghi số hạt nảy mầm trong từng chậu sau cùng thời gian",
   "Chỉ ghi tên nhóm"
  ],
  "answer": 2,
  "explanation": "Ghi số hạt nảy mầm theo cùng thời điểm tạo dữ liệu để so sánh hai chậu.\nLỗi dễ mắc: Một chậu nảy mầm khi tưới không chứng minh mọi hạt cứ có nước là nảy mầm. Hạt và điều kiện khác cũng cần phù hợp."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 11. Chuỗi thức ăn và bảo vệ tự nhiên — trang 16",
  "source": "Ôn tập 2026 – Luyện phần II – Câu 11",
  "content": "Mũi tên trong chuỗi cỏ → châu chấu thể hiện điều gì?",
  "options": [
   "Cỏ ăn châu chấu",
   "Châu chấu tạo ra cỏ",
   "Hai sinh vật không liên quan",
   "Châu chấu ăn cỏ"
  ],
  "answer": 3,
  "explanation": "Mũi tên chỉ từ thức ăn đến sinh vật sử dụng nguồn thức ăn đó.\nLỗi dễ mắc: Đọc mũi tên đúng chiều. Trong câu hỏi, suy luận theo chuỗi được cho, không tự đổi thức ăn của sinh vật."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 12. Thụ phấn ở cây bí — trang 17",
  "source": "Ôn tập 2026 – Luyện phần II – Câu 12",
  "content": "Cách nào phù hợp để hỗ trợ côn trùng thụ phấn trong vườn?",
  "options": [
   "Đóng kín tất cả hoa trước thụ phấn",
   "Phá mọi nơi sống của ong",
   "Ngắt bỏ toàn bộ hoa",
   "Bảo vệ côn trùng có ích và chăm cây phù hợp"
  ],
  "answer": 3,
  "explanation": "Côn trùng có ích có thể giúp chuyển phấn giữa các hoa.\nLỗi dễ mắc: Không nhầm “tưới nhiều nước vào hoa” với thụ phấn. Không nên ngắt bỏ toàn bộ hoa đực khi cần nguồn phấn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Bài 13. Bắt đầu thiết kế và cải tiến sản phẩm — trang 19",
  "source": "Ôn tập 2026 – Tự luyện B 13 – Câu 1",
  "content": "Nhóm đã làm mẫu giá sách nhỏ. Muốn biết mẫu có đáp ứng nhu cầu hay không, nên làm gì tiếp?",
  "options": [
   "Chỉ nhìn màu sắc",
   "Thử nghiệm theo các yêu cầu đã xác định",
   "Không cho ai sử dụng",
   "Bỏ qua việc kiểm tra"
  ],
  "answer": 1,
  "explanation": "Thử nghiệm theo yêu cầu giúp đánh giá mẫu có giải quyết được vấn đề hay không và cần sửa ở đâu.\nLỗi dễ mắc: Không mua vật liệu hoặc làm ngay khi chưa biết nhu cầu. “Thử nghiệm” là dùng yêu cầu để kiểm tra, không chỉ ngắm sản phẩm."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Bài 13. Bắt đầu thiết kế và cải tiến sản phẩm — trang 19",
  "source": "Ôn tập 2026 – Tự luyện B 13 – Câu 2",
  "content": "Khi thử chậu tưới cây, nhóm phát hiện sản phẩm chưa thuận tiện. Cách xử lý nào phù hợp?",
  "options": [
   "Ghi nhận hạn chế và điều chỉnh giải pháp",
   "Che giấu mọi hạn chế",
   "Chỉ trang trí mà bỏ qua chức năng",
   "Kết luận không cần thử nữa"
  ],
  "answer": 0,
  "explanation": "Kết quả thử nghiệm cung cấp căn cứ để cải tiến sản phẩm.\nLỗi dễ mắc: Không mua vật liệu hoặc làm ngay khi chưa biết nhu cầu. “Thử nghiệm” là dùng yêu cầu để kiểm tra, không chỉ ngắm sản phẩm."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Bài 13. Bắt đầu thiết kế và cải tiến sản phẩm — trang 19",
  "source": "Ôn tập 2026 – Tự luyện B 13 – Câu 3",
  "content": "Nhóm muốn thiết kế đèn trang trí. Việc nào cần làm trước tiên?",
  "options": [
   "Báo cáo một sản phẩm chưa làm",
   "Xác định vấn đề và nhu cầu của người dùng",
   "Trang trí sản phẩm ngay",
   "Mua thật nhiều vật liệu bất kỳ"
  ],
  "answer": 1,
  "explanation": "Trước khi chọn giải pháp, cần biết sản phẩm giải quyết vấn đề gì, cho ai và cần đáp ứng yêu cầu nào.\nLỗi dễ mắc: Không mua vật liệu hoặc làm ngay khi chưa biết nhu cầu. “Thử nghiệm” là dùng yêu cầu để kiểm tra, không chỉ ngắm sản phẩm."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Bài 13. Bắt đầu thiết kế và cải tiến sản phẩm — trang 19",
  "source": "Ôn tập 2026 – Tự luyện B 13 – Câu 4",
  "content": "Nhóm đã làm mẫu hộp giảm tiếng ồn. Muốn biết mẫu có đáp ứng nhu cầu hay không, nên làm gì tiếp?",
  "options": [
   "Không cho ai sử dụng",
   "Thử nghiệm theo các yêu cầu đã xác định",
   "Bỏ qua việc kiểm tra",
   "Chỉ nhìn màu sắc"
  ],
  "answer": 1,
  "explanation": "Thử nghiệm theo yêu cầu giúp đánh giá mẫu có giải quyết được vấn đề hay không và cần sửa ở đâu.\nLỗi dễ mắc: Không mua vật liệu hoặc làm ngay khi chưa biết nhu cầu. “Thử nghiệm” là dùng yêu cầu để kiểm tra, không chỉ ngắm sản phẩm."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 14. Cây cảnh và không gian học tập — trang 19",
  "source": "Ôn tập 2026 – Tự luyện B 14 – Câu 1",
  "content": "Khi đặt chậu cây trong lớp, nên chọn vị trí nào?",
  "options": [
   "Có điều kiện phù hợp cho cây và không cản lối đi",
   "Trên mép bàn dễ rơi",
   "Giữa cửa ra vào",
   "Chặn hết cửa sổ"
  ],
  "answer": 0,
  "explanation": "Vị trí cần phù hợp với cây và bảo đảm an toàn, thuận tiện cho học sinh.\nLỗi dễ mắc: Đề hỏi “không phù hợp” thì chọn mục đích hoặc hành động sai. Không mặc định càng nhiều cây, càng nhiều nước là càng tốt."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 14. Cây cảnh và không gian học tập — trang 19",
  "source": "Ôn tập 2026 – Tự luyện B 14 – Câu 2",
  "content": "Cách chăm sóc cây cảnh nào phù hợp?",
  "options": [
   "Tưới theo nhu cầu của cây và theo dõi độ ẩm",
   "Tưới ngập mọi chậu mỗi giờ",
   "Đổ rác vào chậu",
   "Không bao giờ kiểm tra cây"
  ],
  "answer": 0,
  "explanation": "Các cây có nhu cầu khác nhau; tưới phù hợp và theo dõi giúp cây phát triển.\nLỗi dễ mắc: Đề hỏi “không phù hợp” thì chọn mục đích hoặc hành động sai. Không mặc định càng nhiều cây, càng nhiều nước là càng tốt."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 14. Cây cảnh và không gian học tập — trang 19",
  "source": "Ôn tập 2026 – Tự luyện B 14 – Câu 3",
  "content": "Cây trước cửa sổ mọc quá dày làm lớp thiếu sáng. Nên làm gì?",
  "options": [
   "Không cần quan tâm ánh sáng",
   "Để cây che kín thêm",
   "Chặt mọi cây trong trường",
   "Trao đổi với người phụ trách để điều chỉnh, tỉa phù hợp"
  ],
  "answer": 3,
  "explanation": "Cần cân bằng lợi ích cây xanh với ánh sáng và điều kiện học tập.\nLỗi dễ mắc: Đề hỏi “không phù hợp” thì chọn mục đích hoặc hành động sai. Không mặc định càng nhiều cây, càng nhiều nước là càng tốt."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 14. Cây cảnh và không gian học tập — trang 19",
  "source": "Ôn tập 2026 – Tự luyện B 14 – Câu 4",
  "content": "Lợi ích nào phù hợp khi chăm sóc vườn trường?",
  "options": [
   "Tạo cảnh quan và cơ hội học về thực vật",
   "Làm học sinh không cần ánh sáng",
   "Thay thế toàn bộ việc vệ sinh",
   "Bảo đảm mọi loại cây đều sống không cần nước"
  ],
  "answer": 0,
  "explanation": "Vườn trường tạo cảnh quan và giúp học sinh quan sát, tìm hiểu thực vật.\nLỗi dễ mắc: Đề hỏi “không phù hợp” thì chọn mục đích hoặc hành động sai. Không mặc định càng nhiều cây, càng nhiều nước là càng tốt."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Bài 15. Sử dụng đèn học phù hợp và an toàn — trang 20",
  "source": "Ôn tập 2026 – Tự luyện B 15 – Câu 1",
  "content": "Bạn viết bằng tay trái. Cách bố trí nào phù hợp?",
  "options": [
   "Đặt đèn trên chồng đồ dễ đổ",
   "Đặt đèn ở phía bên phải, ánh sáng phù hợp",
   "Che kín bóng đèn bằng vải",
   "Để đèn chiếu thẳng vào mắt"
  ],
  "answer": 1,
  "explanation": "Đặt đèn phía đối diện tay viết giúp hạn chế bóng tay; đèn cần vững và đủ sáng.\nLỗi dễ mắc: Không lau đèn đang cắm điện bằng khăn ướt, không phủ vải lên bóng nóng. Vệ sinh cần người lớn hướng dẫn, ngắt điện và chờ nguội."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Bài 15. Sử dụng đèn học phù hợp và an toàn — trang 20",
  "source": "Ôn tập 2026 – Tự luyện B 15 – Câu 2",
  "content": "Đèn đang nhấp nháy và dây có dấu hiệu hỏng. Học sinh nên làm gì?",
  "options": [
   "Gõ mạnh vào đèn",
   "Tự tháo dây khi đang cắm điện",
   "Lau dây bằng khăn ướt",
   "Ngừng dùng và báo người lớn"
  ],
  "answer": 3,
  "explanation": "Cần ngừng sử dụng và nhờ người lớn xử lý thiết bị hỏng.\nLỗi dễ mắc: Không lau đèn đang cắm điện bằng khăn ướt, không phủ vải lên bóng nóng. Vệ sinh cần người lớn hướng dẫn, ngắt điện và chờ nguội."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Bài 15. Sử dụng đèn học phù hợp và an toàn — trang 20",
  "source": "Ôn tập 2026 – Tự luyện B 15 – Câu 3",
  "content": "Muốn vệ sinh đèn học, học sinh nên làm gì?",
  "options": [
   "Lau bóng nóng bằng khăn ướt",
   "Giữ nguyên điện rồi tháo bóng",
   "Xịt nước vào đèn đang sáng",
   "Nhờ người lớn hướng dẫn, ngắt điện và chờ đèn nguội"
  ],
  "answer": 3,
  "explanation": "Ngắt điện, chờ nguội và được hướng dẫn giúp tránh nguy cơ điện và bỏng.\nLỗi dễ mắc: Không lau đèn đang cắm điện bằng khăn ướt, không phủ vải lên bóng nóng. Vệ sinh cần người lớn hướng dẫn, ngắt điện và chờ nguội."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Bài 15. Sử dụng đèn học phù hợp và an toàn — trang 20",
  "source": "Ôn tập 2026 – Tự luyện B 15 – Câu 4",
  "content": "Hành động nào không an toàn khi dùng đèn?",
  "options": [
   "Chạm vào bóng đang nóng",
   "Đặt đèn vững",
   "Báo người lớn khi đèn hỏng",
   "Điều chỉnh sáng vừa đủ"
  ],
  "answer": 0,
  "explanation": "Bóng đèn nóng có thể gây bỏng; không chạm trực tiếp.\nLỗi dễ mắc: Không lau đèn đang cắm điện bằng khăn ướt, không phủ vải lên bóng nóng. Vệ sinh cần người lớn hướng dẫn, ngắt điện và chờ nguội."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 16. Sản xuất giấy và tiết kiệm tài nguyên — trang 21",
  "source": "Ôn tập 2026 – Tự luyện B 16 – Câu 1",
  "content": "Tờ giấy mới dùng một mặt còn sạch. Cách sử dụng nào tiết kiệm?",
  "options": [
   "Dùng mặt còn lại cho việc phù hợp",
   "Bỏ ngay tất cả",
   "In lại toàn bộ nội dung lên giấy mới",
   "Xé vụn rồi vứt"
  ],
  "answer": 0,
  "explanation": "Tận dụng mặt còn sạch giúp giảm nhu cầu dùng giấy mới.\nLỗi dễ mắc: Không kết luận mọi giấy đều làm trực tiếp từ cây mới. Đọc đúng sơ đồ và điều kiện mà câu hỏi cung cấp."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 16. Sản xuất giấy và tiết kiệm tài nguyên — trang 21",
  "source": "Ôn tập 2026 – Tự luyện B 16 – Câu 2",
  "content": "Để thu gom giấy tái chế ở lớp, nên làm gì?",
  "options": [
   "Phân loại và giữ giấy thu gom sạch, khô",
   "Trộn giấy với thức ăn thừa",
   "Ngâm toàn bộ giấy trong nước bẩn",
   "Đốt giấy trong lớp"
  ],
  "answer": 0,
  "explanation": "Phân loại sạch và khô giúp việc thu gom, tái chế thuận tiện hơn.\nLỗi dễ mắc: Không kết luận mọi giấy đều làm trực tiếp từ cây mới. Đọc đúng sơ đồ và điều kiện mà câu hỏi cung cấp."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 16. Sản xuất giấy và tiết kiệm tài nguyên — trang 21",
  "source": "Ôn tập 2026 – Tự luyện B 16 – Câu 3",
  "content": "Trong sơ đồ cây gỗ → nguyên liệu → nhà máy → giấy, bước nào tạo sản phẩm giấy từ nguyên liệu?",
  "options": [
   "Vứt giấy đi",
   "Trồng cây trên trang giấy",
   "Viết tên vào vở",
   "Sản xuất tại nhà máy"
  ],
  "answer": 3,
  "explanation": "Nhà máy xử lý nguyên liệu để tạo sản phẩm giấy trong sơ đồ đơn giản này.\nLỗi dễ mắc: Không kết luận mọi giấy đều làm trực tiếp từ cây mới. Đọc đúng sơ đồ và điều kiện mà câu hỏi cung cấp."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 16. Sản xuất giấy và tiết kiệm tài nguyên — trang 21",
  "source": "Ôn tập 2026 – Tự luyện B 16 – Câu 4",
  "content": "Trước khi in một tài liệu, cách nào giảm in sai?",
  "options": [
   "In nhiều bản rồi mới kiểm tra",
   "Chỉ kiểm tra sau khi vứt giấy",
   "Bỏ qua lỗi chính tả",
   "Kiểm tra nội dung và xem trước bản in"
  ],
  "answer": 3,
  "explanation": "Kiểm tra trước giúp giảm bản in lỗi và giấy lãng phí.\nLỗi dễ mắc: Không kết luận mọi giấy đều làm trực tiếp từ cây mới. Đọc đúng sơ đồ và điều kiện mà câu hỏi cung cấp."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Bài 13. Bắt đầu thiết kế và cải tiến sản phẩm — trang 19",
  "source": "Ôn tập 2026 – Luyện phần III – Câu 1",
  "content": "Nhóm muốn thiết kế dụng cụ nhặt rác. Việc nào cần làm trước tiên?",
  "options": [
   "Xác định vấn đề và nhu cầu của người dùng",
   "Trang trí sản phẩm ngay",
   "Mua thật nhiều vật liệu bất kỳ",
   "Báo cáo một sản phẩm chưa làm"
  ],
  "answer": 0,
  "explanation": "Trước khi chọn giải pháp, cần biết sản phẩm giải quyết vấn đề gì, cho ai và cần đáp ứng yêu cầu nào.\nLỗi dễ mắc: Không mua vật liệu hoặc làm ngay khi chưa biết nhu cầu. “Thử nghiệm” là dùng yêu cầu để kiểm tra, không chỉ ngắm sản phẩm."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 14. Cây cảnh và không gian học tập — trang 19",
  "source": "Ôn tập 2026 – Luyện phần III – Câu 2",
  "content": "Muốn chọn cây cho góc lớp ít ánh sáng, cần tìm hiểu điều gì?",
  "options": [
   "Số chữ trong tên lớp",
   "Chỉ tên người bán",
   "Chỉ màu chậu",
   "Nhu cầu ánh sáng của loại cây"
  ],
  "answer": 3,
  "explanation": "Cần chọn cây phù hợp điều kiện thực tế, trong đó có ánh sáng.\nLỗi dễ mắc: Đề hỏi “không phù hợp” thì chọn mục đích hoặc hành động sai. Không mặc định càng nhiều cây, càng nhiều nước là càng tốt."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Bài 15. Sử dụng đèn học phù hợp và an toàn — trang 20",
  "source": "Ôn tập 2026 – Luyện phần III – Câu 3",
  "content": "Đèn được đặt trên mép bàn và dây vướng lối đi. Cách sửa phù hợp là gì?",
  "options": [
   "Kéo dây căng qua lối đi",
   "Giấu dây hỏng dưới giấy",
   "Để đèn nghiêng thêm",
   "Đặt đèn vững và sắp xếp dây gọn"
  ],
  "answer": 3,
  "explanation": "Vị trí vững và dây gọn giúp tránh đổ đèn hoặc vấp dây.\nLỗi dễ mắc: Không lau đèn đang cắm điện bằng khăn ướt, không phủ vải lên bóng nóng. Vệ sinh cần người lớn hướng dẫn, ngắt điện và chờ nguội."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 16. Sản xuất giấy và tiết kiệm tài nguyên — trang 21",
  "source": "Ôn tập 2026 – Luyện phần III – Câu 4",
  "content": "Giấy thu gom được đưa đến cơ sở tái chế để làm gì?",
  "options": [
   "Xử lý để tạo nguyên liệu hoặc sản phẩm mới",
   "Làm mọi giấy biến mất",
   "Biến ngay thành cây sống",
   "Thay thế việc phân loại rác"
  ],
  "answer": 0,
  "explanation": "Tái chế đưa vật liệu đã dùng trở lại quá trình tạo nguyên liệu hoặc sản phẩm.\nLỗi dễ mắc: Không kết luận mọi giấy đều làm trực tiếp từ cây mới. Đọc đúng sơ đồ và điều kiện mà câu hỏi cung cấp."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Bài 13. Bắt đầu thiết kế và cải tiến sản phẩm — trang 19",
  "source": "Ôn tập 2026 – Luyện phần III – Câu 5",
  "content": "Nhóm đã làm mẫu mái che cây. Muốn biết mẫu có đáp ứng nhu cầu hay không, nên làm gì tiếp?",
  "options": [
   "Chỉ nhìn màu sắc",
   "Không cho ai sử dụng",
   "Bỏ qua việc kiểm tra",
   "Thử nghiệm theo các yêu cầu đã xác định"
  ],
  "answer": 3,
  "explanation": "Thử nghiệm theo yêu cầu giúp đánh giá mẫu có giải quyết được vấn đề hay không và cần sửa ở đâu.\nLỗi dễ mắc: Không mua vật liệu hoặc làm ngay khi chưa biết nhu cầu. “Thử nghiệm” là dùng yêu cầu để kiểm tra, không chỉ ngắm sản phẩm."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 14. Cây cảnh và không gian học tập — trang 19",
  "source": "Ôn tập 2026 – Luyện phần III – Câu 6",
  "content": "Khi chậu cây có nước đọng kéo dài, nhóm nên làm gì?",
  "options": [
   "Nhờ giáo viên hướng dẫn kiểm tra lượng tưới và thoát nước",
   "Tưới thêm liên tục",
   "Bỏ qua tình trạng cây",
   "Bịt mọi lỗ thoát nước"
  ],
  "answer": 0,
  "explanation": "Cần xem độ ẩm và khả năng thoát nước, thay vì tăng tưới không có căn cứ.\nLỗi dễ mắc: Đề hỏi “không phù hợp” thì chọn mục đích hoặc hành động sai. Không mặc định càng nhiều cây, càng nhiều nước là càng tốt."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Bài 15. Sử dụng đèn học phù hợp và an toàn — trang 20",
  "source": "Ôn tập 2026 – Luyện phần III – Câu 7",
  "content": "Tay bạn đang ướt và cần bật đèn. Nên làm gì?",
  "options": [
   "Đổ nước lên công tắc",
   "Lau khô tay trước khi thao tác, nhờ người lớn khi cần",
   "Chạm phích điện ngay",
   "Dùng khăn ướt quấn phích"
  ],
  "answer": 1,
  "explanation": "Cần giữ tay khô khi sử dụng thiết bị điện và tuân theo hướng dẫn an toàn.\nLỗi dễ mắc: Không lau đèn đang cắm điện bằng khăn ướt, không phủ vải lên bóng nóng. Vệ sinh cần người lớn hướng dẫn, ngắt điện và chờ nguội."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 16. Sản xuất giấy và tiết kiệm tài nguyên — trang 21",
  "source": "Ôn tập 2026 – Luyện phần III – Câu 8",
  "content": "Thứ tự nào phù hợp với sơ đồ sản xuất giấy đơn giản?",
  "options": [
   "Sử dụng → không sản xuất → nguyên liệu",
   "Giấy → không cần nguyên liệu → nhà máy",
   "Giấy → sử dụng → cây tự mọc ngay",
   "Nguyên liệu → xử lý sản xuất → giấy"
  ],
  "answer": 3,
  "explanation": "Sản xuất cần nguyên liệu và quá trình xử lý trước khi có sản phẩm.\nLỗi dễ mắc: Không kết luận mọi giấy đều làm trực tiếp từ cây mới. Đọc đúng sơ đồ và điều kiện mà câu hỏi cung cấp."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 17. Sắp xếp trang và hiệu ứng chuyển trang — trang 22",
  "source": "Ôn tập 2026 – Tự luyện B 17 – Câu 1",
  "content": "Các trang trình chiếu: 1: Đông; 2: Hạ; 3: Xuân; 4: Thu. Muốn trình chiếu theo thứ tự xuân, hạ, thu, đông và có hiệu ứng giữa các trang, chọn cách nào?",
  "options": [
   "2–3–4–1 và chỉ thay hình ảnh",
   "3–2–4–1 và chỉ thay hình ảnh",
   "3–2–4–1 và dùng hiệu ứng chuyển trang",
   "1–4–2–3 và dùng hiệu ứng chuyển trang"
  ],
  "answer": 2,
  "explanation": "Tìm số trang tương ứng từng mùa: Xuân là trang 3, Hạ là trang 2, Thu là trang 4, Đông là trang 1. Hiệu ứng giữa các trang là hiệu ứng chuyển trang, khác với thay hình trong trang.\nLỗi dễ mắc: Một phương án phải đúng cả thứ tự và thao tác. Không chọn chỉ vì nửa đầu phương án đúng."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 17. Sắp xếp trang và hiệu ứng chuyển trang — trang 22",
  "source": "Ôn tập 2026 – Tự luyện B 17 – Câu 2",
  "content": "Các trang trình chiếu: 1: Thu; 2: Đông; 3: Hạ; 4: Xuân. Muốn trình chiếu theo thứ tự xuân, hạ, thu, đông và có hiệu ứng giữa các trang, chọn cách nào?",
  "options": [
   "4–3–1–2 và chỉ thay hình ảnh",
   "3–4–1–2 và chỉ thay hình ảnh",
   "4–3–1–2 và dùng hiệu ứng chuyển trang",
   "2–1–3–4 và dùng hiệu ứng chuyển trang"
  ],
  "answer": 2,
  "explanation": "Tìm số trang tương ứng từng mùa: Xuân là trang 4, Hạ là trang 3, Thu là trang 1, Đông là trang 2. Hiệu ứng giữa các trang là hiệu ứng chuyển trang, khác với thay hình trong trang.\nLỗi dễ mắc: Một phương án phải đúng cả thứ tự và thao tác. Không chọn chỉ vì nửa đầu phương án đúng."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 17. Sắp xếp trang và hiệu ứng chuyển trang — trang 22",
  "source": "Ôn tập 2026 – Tự luyện B 17 – Câu 3",
  "content": "Các trang trình chiếu: 1: Xuân; 2: Hạ; 3: Đông; 4: Thu. Muốn trình chiếu theo thứ tự xuân, hạ, thu, đông và có hiệu ứng giữa các trang, chọn cách nào?",
  "options": [
   "1–2–4–3 và dùng hiệu ứng chuyển trang",
   "1–2–4–3 và chỉ thay hình ảnh",
   "2–1–4–3 và chỉ thay hình ảnh",
   "3–4–2–1 và dùng hiệu ứng chuyển trang"
  ],
  "answer": 0,
  "explanation": "Tìm số trang tương ứng từng mùa: Xuân là trang 1, Hạ là trang 2, Thu là trang 4, Đông là trang 3. Hiệu ứng giữa các trang là hiệu ứng chuyển trang, khác với thay hình trong trang.\nLỗi dễ mắc: Một phương án phải đúng cả thứ tự và thao tác. Không chọn chỉ vì nửa đầu phương án đúng."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 17. Sắp xếp trang và hiệu ứng chuyển trang — trang 22",
  "source": "Ôn tập 2026 – Tự luyện B 17 – Câu 4",
  "content": "Các trang trình chiếu: 1: Đông; 2: Hạ; 3: Thu; 4: Xuân. Muốn trình chiếu theo thứ tự xuân, hạ, thu, đông và có hiệu ứng giữa các trang, chọn cách nào?",
  "options": [
   "2–4–3–1 và chỉ thay hình ảnh",
   "4–2–3–1 và chỉ thay hình ảnh",
   "1–3–2–4 và dùng hiệu ứng chuyển trang",
   "4–2–3–1 và dùng hiệu ứng chuyển trang"
  ],
  "answer": 3,
  "explanation": "Tìm số trang tương ứng từng mùa: Xuân là trang 4, Hạ là trang 2, Thu là trang 3, Đông là trang 1. Hiệu ứng giữa các trang là hiệu ứng chuyển trang, khác với thay hình trong trang.\nLỗi dễ mắc: Một phương án phải đúng cả thứ tự và thao tác. Không chọn chỉ vì nửa đầu phương án đúng."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 18. Lệnh tuần tự trong Scratch — trang 23",
  "source": "Ôn tập 2026 – Tự luyện B 18 – Câu 1",
  "content": "Trong Scratch, nhân vật đã hướng lên trên. Nhân vật cần đi lên 15 bước rồi mới nói “Chào các bạn!”. Đoạn lệnh nào đúng?",
  "options": [
   "Nói “Tôi đang đi xuống!” → Di chuyển 15 bước",
   "Di chuyển 15 bước → Nói “Chào các bạn!”",
   "Di chuyển 15 bước → Nói “Tôi đang đi xuống!”",
   "Nói “Chào các bạn!” → Di chuyển 15 bước"
  ],
  "answer": 1,
  "explanation": "Nhân vật đã hướng lên nên lệnh di chuyển làm nó đi lên. Yêu cầu “rồi mới nói” nghĩa là lệnh di chuyển phải đứng trước lệnh nói và lời nói phải đúng.\nLỗi dễ mắc: Kiểm tra cả hướng, số bước, thứ tự và lời nói. Nếu đề chưa nêu hướng thì chưa thể khẳng định nhân vật đi lên."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 18. Lệnh tuần tự trong Scratch — trang 23",
  "source": "Ôn tập 2026 – Tự luyện B 18 – Câu 2",
  "content": "Trong Scratch, nhân vật đã hướng lên trên. Nhân vật cần đi lên 20 bước rồi mới nói “Tôi đã tới đích!”. Đoạn lệnh nào đúng?",
  "options": [
   "Nói “Tôi đang đi xuống!” → Di chuyển 20 bước",
   "Nói “Tôi đã tới đích!” → Di chuyển 20 bước",
   "Di chuyển 20 bước → Nói “Tôi đã tới đích!”",
   "Di chuyển 20 bước → Nói “Tôi đang đi xuống!”"
  ],
  "answer": 2,
  "explanation": "Nhân vật đã hướng lên nên lệnh di chuyển làm nó đi lên. Yêu cầu “rồi mới nói” nghĩa là lệnh di chuyển phải đứng trước lệnh nói và lời nói phải đúng.\nLỗi dễ mắc: Kiểm tra cả hướng, số bước, thứ tự và lời nói. Nếu đề chưa nêu hướng thì chưa thể khẳng định nhân vật đi lên."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 18. Lệnh tuần tự trong Scratch — trang 23",
  "source": "Ôn tập 2026 – Tự luyện B 18 – Câu 3",
  "content": "Trong Scratch, nhân vật đã hướng lên trên. Nhân vật cần đi lên 25 bước rồi mới nói “Tôi đang đi lên!”. Đoạn lệnh nào đúng?",
  "options": [
   "Di chuyển 25 bước → Nói “Tôi đang đi xuống!”",
   "Nói “Tôi đang đi lên!” → Di chuyển 25 bước",
   "Nói “Tôi đang đi xuống!” → Di chuyển 25 bước",
   "Di chuyển 25 bước → Nói “Tôi đang đi lên!”"
  ],
  "answer": 3,
  "explanation": "Nhân vật đã hướng lên nên lệnh di chuyển làm nó đi lên. Yêu cầu “rồi mới nói” nghĩa là lệnh di chuyển phải đứng trước lệnh nói và lời nói phải đúng.\nLỗi dễ mắc: Kiểm tra cả hướng, số bước, thứ tự và lời nói. Nếu đề chưa nêu hướng thì chưa thể khẳng định nhân vật đi lên."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 18. Lệnh tuần tự trong Scratch — trang 23",
  "source": "Ôn tập 2026 – Tự luyện B 18 – Câu 4",
  "content": "Trong Scratch, nhân vật đã hướng lên trên. Nhân vật cần đi lên 30 bước rồi mới nói “Tôi đang di chuyển!”. Đoạn lệnh nào đúng?",
  "options": [
   "Di chuyển 30 bước → Nói “Tôi đang di chuyển!”",
   "Nói “Tôi đang di chuyển!” → Di chuyển 30 bước",
   "Di chuyển 30 bước → Nói “Tôi đang đi xuống!”",
   "Nói “Tôi đang đi xuống!” → Di chuyển 30 bước"
  ],
  "answer": 0,
  "explanation": "Nhân vật đã hướng lên nên lệnh di chuyển làm nó đi lên. Yêu cầu “rồi mới nói” nghĩa là lệnh di chuyển phải đứng trước lệnh nói và lời nói phải đúng.\nLỗi dễ mắc: Kiểm tra cả hướng, số bước, thứ tự và lời nói. Nếu đề chưa nêu hướng thì chưa thể khẳng định nhân vật đi lên."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 19. Mã hóa chữ theo quy tắc — trang 24",
  "source": "Ôn tập 2026 – Tự luyện B 19 – Câu 1",
  "content": "Dùng bảng chữ cái A B C D E F G H I J K L M N O P Q R S T U V W X Y Z. Mỗi chữ được thay bằng chữ đứng sau 2 vị trí; qua Z thì quay lại A. Từ STEM được mã hóa thành gì?",
  "options": [
   "UVGO",
   "VWHP",
   "STEM",
   "QRCK"
  ],
  "answer": 0,
  "explanation": "Thay lần lượt: S → U; T → V; E → G; M → O. Ghép lại được UVGO. Giữ nguyên thứ tự chữ và quay vòng khi vượt Z.\nLỗi dễ mắc: Đừng tính chữ ban đầu là bước thứ nhất. Nếu dịch hai bước, A → B → C nên kết quả là C."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 19. Mã hóa chữ theo quy tắc — trang 24",
  "source": "Ôn tập 2026 – Tự luyện B 19 – Câu 2",
  "content": "Dùng bảng chữ cái A B C D E F G H I J K L M N O P Q R S T U V W X Y Z. Mỗi chữ được thay bằng chữ đứng sau 3 vị trí; qua Z thì quay lại A. Từ CODE được mã hóa thành gì?",
  "options": [
   "FRGH",
   "CODE",
   "ZLAB",
   "GSHI"
  ],
  "answer": 0,
  "explanation": "Thay lần lượt: C → F; O → R; D → G; E → H. Ghép lại được FRGH. Giữ nguyên thứ tự chữ và quay vòng khi vượt Z.\nLỗi dễ mắc: Đừng tính chữ ban đầu là bước thứ nhất. Nếu dịch hai bước, A → B → C nên kết quả là C."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 19. Mã hóa chữ theo quy tắc — trang 24",
  "source": "Ôn tập 2026 – Tự luyện B 19 – Câu 3",
  "content": "Dùng bảng chữ cái A B C D E F G H I J K L M N O P Q R S T U V W X Y Z. Mỗi chữ được thay bằng chữ đứng sau 1 vị trí; qua Z thì quay lại A. Từ PLAY được mã hóa thành gì?",
  "options": [
   "RNCA",
   "OKZX",
   "PLAY",
   "QMBZ"
  ],
  "answer": 3,
  "explanation": "Thay lần lượt: P → Q; L → M; A → B; Y → Z. Ghép lại được QMBZ. Giữ nguyên thứ tự chữ và quay vòng khi vượt Z.\nLỗi dễ mắc: Đừng tính chữ ban đầu là bước thứ nhất. Nếu dịch hai bước, A → B → C nên kết quả là C."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 19. Mã hóa chữ theo quy tắc — trang 24",
  "source": "Ôn tập 2026 – Tự luyện B 19 – Câu 4",
  "content": "Dùng bảng chữ cái A B C D E F G H I J K L M N O P Q R S T U V W X Y Z. Mỗi chữ được thay bằng chữ đứng sau 2 vị trí; qua Z thì quay lại A. Từ ZONE được mã hóa thành gì?",
  "options": [
   "BQPG",
   "XMLC",
   "ZONE",
   "CRQH"
  ],
  "answer": 0,
  "explanation": "Thay lần lượt: Z → B; O → Q; N → P; E → G. Ghép lại được BQPG. Giữ nguyên thứ tự chữ và quay vòng khi vượt Z.\nLỗi dễ mắc: Đừng tính chữ ban đầu là bước thứ nhất. Nếu dịch hai bước, A → B → C nên kết quả là C."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng cao",
  "lesson": "Bài 20. Robot di chuyển và lệnh lặp — trang 25",
  "source": "Ôn tập 2026 – Tự luyện B 20 – Câu 1",
  "content": "Lưới 6 hàng, 6 cột; hàng đếm từ trên xuống, cột từ trái sang phải. Robot ở hàng 6, cột 1, hướng lên trên. Lặp 3 lần: tiến 2 ô, quay phải 90° tại chỗ. Robot dừng ở đâu?",
  "options": [
   "Hàng 4, cột 1",
   "Hàng 4, cột 3",
   "Hàng 6, cột 3",
   "Hàng 6, cột 1"
  ],
  "answer": 2,
  "explanation": "Lần 1: lên 2 ô, đến (4; 1), quay sang phải. Lần 2: sang phải 2 ô, đến (4; 3), quay xuống. Lần 3: xuống 2 ô, đến (6; 3), quay sang trái. Vị trí cuối là hàng 6, cột 3; quay tại chỗ không đổi ô.\nLỗi dễ mắc: Đừng cho robot luôn tiến lên dù đã quay hướng. Khi hỏi vị trí cuối, không nhầm vị trí với hướng quay cuối."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng cao",
  "lesson": "Bài 20. Robot di chuyển và lệnh lặp — trang 25",
  "source": "Ôn tập 2026 – Tự luyện B 20 – Câu 2",
  "content": "Lưới 6 hàng, 6 cột; hàng đếm từ trên xuống, cột từ trái sang phải. Robot ở hàng 5, cột 1, hướng lên trên. Lặp 3 lần: tiến 3 ô, quay phải 90° tại chỗ. Robot dừng ở đâu?",
  "options": [
   "Hàng 5, cột 4",
   "Hàng 2, cột 4",
   "Hàng 2, cột 1",
   "Hàng 5, cột 1"
  ],
  "answer": 0,
  "explanation": "Lần 1: lên 3 ô, đến (2; 1), quay sang phải. Lần 2: sang phải 3 ô, đến (2; 4), quay xuống. Lần 3: xuống 3 ô, đến (5; 4), quay sang trái. Vị trí cuối là hàng 5, cột 4; quay tại chỗ không đổi ô.\nLỗi dễ mắc: Đừng cho robot luôn tiến lên dù đã quay hướng. Khi hỏi vị trí cuối, không nhầm vị trí với hướng quay cuối."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng cao",
  "lesson": "Bài 20. Robot di chuyển và lệnh lặp — trang 25",
  "source": "Ôn tập 2026 – Tự luyện B 20 – Câu 3",
  "content": "Lưới 6 hàng, 6 cột; hàng đếm từ trên xuống, cột từ trái sang phải. Robot ở hàng 6, cột 2, hướng lên trên. Lặp 3 lần: tiến 1 ô, quay phải 90° tại chỗ. Robot dừng ở đâu?",
  "options": [
   "Hàng 5, cột 3",
   "Hàng 5, cột 2",
   "Hàng 6, cột 2",
   "Hàng 6, cột 3"
  ],
  "answer": 3,
  "explanation": "Lần 1: lên 1 ô, đến (5; 2), quay sang phải. Lần 2: sang phải 1 ô, đến (5; 3), quay xuống. Lần 3: xuống 1 ô, đến (6; 3), quay sang trái. Vị trí cuối là hàng 6, cột 3; quay tại chỗ không đổi ô.\nLỗi dễ mắc: Đừng cho robot luôn tiến lên dù đã quay hướng. Khi hỏi vị trí cuối, không nhầm vị trí với hướng quay cuối."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng cao",
  "lesson": "Bài 20. Robot di chuyển và lệnh lặp — trang 25",
  "source": "Ôn tập 2026 – Tự luyện B 20 – Câu 4",
  "content": "Lưới 6 hàng, 6 cột; hàng đếm từ trên xuống, cột từ trái sang phải. Robot ở hàng 5, cột 2, hướng lên trên. Lặp 3 lần: tiến 2 ô, quay phải 90° tại chỗ. Robot dừng ở đâu?",
  "options": [
   "Hàng 3, cột 4",
   "Hàng 3, cột 2",
   "Hàng 5, cột 4",
   "Hàng 5, cột 2"
  ],
  "answer": 2,
  "explanation": "Lần 1: lên 2 ô, đến (3; 2), quay sang phải. Lần 2: sang phải 2 ô, đến (3; 4), quay xuống. Lần 3: xuống 2 ô, đến (5; 4), quay sang trái. Vị trí cuối là hàng 5, cột 4; quay tại chỗ không đổi ô.\nLỗi dễ mắc: Đừng cho robot luôn tiến lên dù đã quay hướng. Khi hỏi vị trí cuối, không nhầm vị trí với hướng quay cuối."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 17. Sắp xếp trang và hiệu ứng chuyển trang — trang 22",
  "source": "Ôn tập 2026 – Luyện phần IV – Câu 1",
  "content": "Các trang trình chiếu: 1: Hạ; 2: Xuân; 3: Đông; 4: Thu. Muốn trình chiếu theo thứ tự xuân, hạ, thu, đông và có hiệu ứng giữa các trang, chọn cách nào?",
  "options": [
   "1–2–4–3 và chỉ thay hình ảnh",
   "3–4–1–2 và dùng hiệu ứng chuyển trang",
   "2–1–4–3 và chỉ thay hình ảnh",
   "2–1–4–3 và dùng hiệu ứng chuyển trang"
  ],
  "answer": 3,
  "explanation": "Tìm số trang tương ứng từng mùa: Xuân là trang 2, Hạ là trang 1, Thu là trang 4, Đông là trang 3. Hiệu ứng giữa các trang là hiệu ứng chuyển trang, khác với thay hình trong trang.\nLỗi dễ mắc: Một phương án phải đúng cả thứ tự và thao tác. Không chọn chỉ vì nửa đầu phương án đúng."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 18. Lệnh tuần tự trong Scratch — trang 23",
  "source": "Ôn tập 2026 – Luyện phần IV – Câu 2",
  "content": "Trong Scratch, nhân vật đã hướng lên trên. Nhân vật cần đi lên 40 bước rồi mới nói “Tôi đã đi xong!”. Đoạn lệnh nào đúng?",
  "options": [
   "Nói “Tôi đang đi xuống!” → Di chuyển 40 bước",
   "Di chuyển 40 bước → Nói “Tôi đang đi xuống!”",
   "Di chuyển 40 bước → Nói “Tôi đã đi xong!”",
   "Nói “Tôi đã đi xong!” → Di chuyển 40 bước"
  ],
  "answer": 2,
  "explanation": "Nhân vật đã hướng lên nên lệnh di chuyển làm nó đi lên. Yêu cầu “rồi mới nói” nghĩa là lệnh di chuyển phải đứng trước lệnh nói và lời nói phải đúng.\nLỗi dễ mắc: Kiểm tra cả hướng, số bước, thứ tự và lời nói. Nếu đề chưa nêu hướng thì chưa thể khẳng định nhân vật đi lên."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 19. Mã hóa chữ theo quy tắc — trang 24",
  "source": "Ôn tập 2026 – Luyện phần IV – Câu 3",
  "content": "Dùng bảng chữ cái A B C D E F G H I J K L M N O P Q R S T U V W X Y Z. Mỗi chữ được thay bằng chữ đứng sau 1 vị trí; qua Z thì quay lại A. Từ WATER được mã hóa thành gì?",
  "options": [
   "XBUFS",
   "VZSDQ",
   "WATER",
   "YCVGT"
  ],
  "answer": 0,
  "explanation": "Thay lần lượt: W → X; A → B; T → U; E → F; R → S. Ghép lại được XBUFS. Giữ nguyên thứ tự chữ và quay vòng khi vượt Z.\nLỗi dễ mắc: Đừng tính chữ ban đầu là bước thứ nhất. Nếu dịch hai bước, A → B → C nên kết quả là C."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng cao",
  "lesson": "Bài 20. Robot di chuyển và lệnh lặp — trang 25",
  "source": "Ôn tập 2026 – Luyện phần IV – Câu 4",
  "content": "Lưới 6 hàng, 6 cột; hàng đếm từ trên xuống, cột từ trái sang phải. Robot ở hàng 5, cột 3, hướng lên trên. Lặp 3 lần: tiến 1 ô, quay phải 90° tại chỗ. Robot dừng ở đâu?",
  "options": [
   "Hàng 4, cột 3",
   "Hàng 5, cột 3",
   "Hàng 5, cột 4",
   "Hàng 4, cột 4"
  ],
  "answer": 2,
  "explanation": "Lần 1: lên 1 ô, đến (4; 3), quay sang phải. Lần 2: sang phải 1 ô, đến (4; 4), quay xuống. Lần 3: xuống 1 ô, đến (5; 4), quay sang trái. Vị trí cuối là hàng 5, cột 4; quay tại chỗ không đổi ô.\nLỗi dễ mắc: Đừng cho robot luôn tiến lên dù đã quay hướng. Khi hỏi vị trí cuối, không nhầm vị trí với hướng quay cuối.",
  "image": "img/ontap/h12.png"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 17. Sắp xếp trang và hiệu ứng chuyển trang — trang 22",
  "source": "Ôn tập 2026 – Luyện phần IV – Câu 5",
  "content": "Các trang trình chiếu: 1: Thu; 2: Xuân; 3: Hạ; 4: Đông. Muốn trình chiếu theo thứ tự xuân, hạ, thu, đông và có hiệu ứng giữa các trang, chọn cách nào?",
  "options": [
   "4–1–3–2 và dùng hiệu ứng chuyển trang",
   "2–3–1–4 và chỉ thay hình ảnh",
   "2–3–1–4 và dùng hiệu ứng chuyển trang",
   "3–2–1–4 và chỉ thay hình ảnh"
  ],
  "answer": 2,
  "explanation": "Tìm số trang tương ứng từng mùa: Xuân là trang 2, Hạ là trang 3, Thu là trang 1, Đông là trang 4. Hiệu ứng giữa các trang là hiệu ứng chuyển trang, khác với thay hình trong trang.\nLỗi dễ mắc: Một phương án phải đúng cả thứ tự và thao tác. Không chọn chỉ vì nửa đầu phương án đúng."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 18. Lệnh tuần tự trong Scratch — trang 23",
  "source": "Ôn tập 2026 – Luyện phần IV – Câu 6",
  "content": "Trong Scratch, nhân vật đã hướng lên trên. Nhân vật cần đi lên 45 bước rồi mới nói “Mình ở phía trên!”. Đoạn lệnh nào đúng?",
  "options": [
   "Di chuyển 45 bước → Nói “Mình ở phía trên!”",
   "Di chuyển 45 bước → Nói “Tôi đang đi xuống!”",
   "Nói “Tôi đang đi xuống!” → Di chuyển 45 bước",
   "Nói “Mình ở phía trên!” → Di chuyển 45 bước"
  ],
  "answer": 0,
  "explanation": "Nhân vật đã hướng lên nên lệnh di chuyển làm nó đi lên. Yêu cầu “rồi mới nói” nghĩa là lệnh di chuyển phải đứng trước lệnh nói và lời nói phải đúng.\nLỗi dễ mắc: Kiểm tra cả hướng, số bước, thứ tự và lời nói. Nếu đề chưa nêu hướng thì chưa thể khẳng định nhân vật đi lên."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 19. Mã hóa chữ theo quy tắc — trang 24",
  "source": "Ôn tập 2026 – Luyện phần IV – Câu 7",
  "content": "Dùng bảng chữ cái A B C D E F G H I J K L M N O P Q R S T U V W X Y Z. Mỗi chữ được thay bằng chữ đứng sau 2 vị trí; qua Z thì quay lại A. Từ YAZ được mã hóa thành gì?",
  "options": [
   "WYX",
   "ACB",
   "YAZ",
   "BDC"
  ],
  "answer": 1,
  "explanation": "Thay lần lượt: Y → A; A → C; Z → B. Ghép lại được ACB. Giữ nguyên thứ tự chữ và quay vòng khi vượt Z.\nLỗi dễ mắc: Đừng tính chữ ban đầu là bước thứ nhất. Nếu dịch hai bước, A → B → C nên kết quả là C."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng cao",
  "lesson": "Bài 20. Robot di chuyển và lệnh lặp — trang 25",
  "source": "Ôn tập 2026 – Luyện phần IV – Câu 8",
  "content": "Lưới 6 hàng, 6 cột; hàng đếm từ trên xuống, cột từ trái sang phải. Robot ở hàng 6, cột 3, hướng lên trên. Lặp 3 lần: tiến 2 ô, quay phải 90° tại chỗ. Robot dừng ở đâu?",
  "options": [
   "Hàng 6, cột 3",
   "Hàng 4, cột 5",
   "Hàng 4, cột 3",
   "Hàng 6, cột 5"
  ],
  "answer": 3,
  "explanation": "Lần 1: lên 2 ô, đến (4; 3), quay sang phải. Lần 2: sang phải 2 ô, đến (4; 5), quay xuống. Lần 3: xuống 2 ô, đến (6; 5), quay sang trái. Vị trí cuối là hàng 6, cột 5; quay tại chỗ không đổi ô.\nLỗi dễ mắc: Đừng cho robot luôn tiến lên dù đã quay hướng. Khi hỏi vị trí cuối, không nhầm vị trí với hướng quay cuối.",
  "image": "img/ontap/h13.png"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 1. Hình khối và khối lượng — trang 6",
  "source": "Ôn tập 2026 – Đề TH1 – Câu 1",
  "content": "Một mô hình có 3 khối lập phương ở hàng dưới và 3 khối đặt ở hàng trên. Không có khối nào khác. Mỗi khối nặng 250 g. Mô hình nặng bao nhiêu?",
  "options": [
   "1500 g",
   "2000 g",
   "1750 g",
   "750 g"
  ],
  "answer": 0,
  "explanation": "Có 3 + 3 = 6 khối. Khối lượng mô hình là 6 × 250 = 1500 g.\nLỗi dễ mắc: Đếm riêng từng hàng hoặc từng cột rồi cộng; kiểm tra để không đếm một khối hai lần.",
  "image": "img/ontap/h14.png"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 2. Trung bình cộng và bảng số liệu — trang 7",
  "source": "Ôn tập 2026 – Đề TH1 – Câu 2",
  "content": "Chiều cao của năm bạn: Lan: 136 cm; Hòa: 139 cm; Linh: 142 cm; Đức: 140 cm; Minh: 138 cm. Những bạn nào cao hơn chiều cao trung bình của nhóm?",
  "options": [
   "Lan và Minh",
   "Hòa, Linh và Đức",
   "Linh và Đức",
   "Hòa và Đức"
  ],
  "answer": 2,
  "explanation": "Tổng chiều cao là 695 cm; trung bình là 695 : 5 = 139 cm. Linh (142 cm) và Đức (140 cm) cao hơn mức này. Hòa bằng mức trung bình nên không được chọn.\nLỗi dễ mắc: Đừng chọn luôn hai bạn cao nhất trước khi tính trung bình; số bạn trên trung bình có thể thay đổi."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 3. Phân số và thứ hạng — trang 8",
  "source": "Ôn tập 2026 – Đề TH1 – Câu 3",
  "content": "Kết quả chạy của tám bạn: An 7,3 s; Mai 8,0 s; Việt 7,6 s; Huy 6,9 s; Phong 7,8 s; Ngọc 8,3 s; Hà 7,0 s; Minh 8,2 s. Chọn 1/4 số bạn có thành tích tốt nhất. Những bạn nào được chọn?",
  "options": [
   "Huy, Hà, An",
   "Huy, Hà",
   "Minh, Ngọc",
   "Hà, An"
  ],
  "answer": 1,
  "explanation": "Cần chọn 8 : 4 = 2 bạn. Thời gian chạy càng nhỏ thì thành tích càng tốt. Xếp tăng dần thời gian rồi chọn 2 bạn đầu: Huy, Hà.\nLỗi dễ mắc: Tính số người được chọn trước, sau đó xếp thứ hạng. Không chọn thời gian lớn nhất trong bài chạy."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 4. Quy luật ghép ô vuông — trang 8",
  "source": "Ôn tập 2026 – Đề TH1 – Câu 4",
  "content": "Các ô vuông được ghép thành một hàng, hai ô liền nhau dùng chung một cạnh. Mỗi cạnh là một thanh tre. Cần bao nhiêu thanh để tạo 13 ô vuông?",
  "options": [
   "39 thanh",
   "28 thanh",
   "40 thanh",
   "52 thanh"
  ],
  "answer": 2,
  "explanation": "Ô đầu cần 4 thanh. Mỗi ô thêm chỉ cần 3 thanh vì dùng chung một cạnh. Tổng: 4 + (13 − 1) × 3 = 40 thanh.\nLỗi dễ mắc: Không lấy n × 4 vì cách đó đếm lại các cạnh chung. Công thức này chỉ dùng cho kiểu ghép thành một hàng đã nêu."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 5. Biểu đồ và phép chia có dư — trang 9",
  "source": "Ôn tập 2026 – Đề TH1 – Câu 5",
  "content": "Bốn lớp thu gom vỏ chai: 5A: 145 vỏ; 5B: 120 vỏ; 5C: 160 vỏ; 5D: 135 vỏ. Cứ 20 vỏ đổi được một chậu cây. Nếu gộp chung, đổi được nhiều nhất bao nhiêu chậu và còn thừa bao nhiêu vỏ?",
  "options": [
   "28 chậu, thừa 0 vỏ",
   "29 chậu, không thừa",
   "28 chậu, thừa 5 vỏ",
   "27 chậu, thừa 20 vỏ"
  ],
  "answer": 0,
  "explanation": "Tổng: 145 + 120 + 160 + 135 = 560 vỏ. 560 : 20 = 28 dư 0. Đổi được 28 chậu và còn 0 vỏ. Số dư phải nhỏ hơn 20.\nLỗi dễ mắc: Không làm tròn lên để đổi thêm một sản phẩm khi chưa đủ vật liệu. Kiểm tra: số sản phẩm × mức đổi + số dư = tổng.",
  "image": "img/ontap/h15.png"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng cao",
  "lesson": "Bài 6. Thời gian sản xuất theo lượt — trang 10",
  "source": "Ôn tập 2026 – Đề TH1 – Câu 6",
  "content": "Máy in 3D in tối đa 5 móc khóa mỗi lượt. Một lượt luôn mất 25 phút. Máy nghỉ 5 phút giữa hai lượt, không cần chờ sau lượt cuối. Cần in 26 móc khóa từ 8:00. Sớm nhất khi nào in xong?",
  "options": [
   "10:50",
   "10:30",
   "11:00",
   "10:55"
  ],
  "answer": 3,
  "explanation": "26 móc khóa cần 6 lượt (lượt cuối vẫn mất đủ 25 phút). Có 5 lần nghỉ. Tổng thời gian: 6 × 25 + 5 × 5 = 175 phút. Cộng vào 8:00 được 10:55.\nLỗi dễ mắc: Một lượt chưa đầy vẫn mất đủ thời gian nếu đề nói thời gian mỗi lượt cố định. Vẽ chuỗi làm – nghỉ – làm để kiểm tra."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 7. Không khí chiếm chỗ và có thể bị nén — trang 13",
  "source": "Ôn tập 2026 – Đề TH1 – Câu 7",
  "content": "Một chai tưởng như rỗng, không đậy nắp và không chứa nước. Trong chai thường có gì?",
  "options": [
   "Không khí",
   "Chỉ có đá",
   "Chỉ có gỗ",
   "Không có vật chất nào"
  ],
  "answer": 0,
  "explanation": "Chai không chứa chất lỏng vẫn thường chứa không khí.\nLỗi dễ mắc: Bơm phao làm phao phồng không tự chứng minh khí có thể tích giảm. Muốn nói “bị nén”, cần dữ kiện phần khí chiếm thể tích nhỏ hơn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Bài 8. Nước và sự chuyển thể — trang 14",
  "source": "Ôn tập 2026 – Đề TH1 – Câu 8",
  "content": "Áo vừa giặt được phơi và khô dần. Hiện tượng chính là gì?",
  "options": [
   "Đông đặc",
   "Bay hơi",
   "Nóng chảy",
   "Ngưng tụ"
  ],
  "answer": 1,
  "explanation": "Nước lỏng chuyển thành hơi nước; lượng nước trên vật hoặc mặt đất giảm dần.\nLỗi dễ mắc: Giọt ở ngoài cốc lạnh thường từ hơi nước trong không khí ngưng tụ, không phải nước tự xuyên qua cốc."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 9. Mặt trời và phương hướng — trang 14",
  "source": "Ôn tập 2026 – Đề TH1 – Câu 9",
  "content": "Trong bài tập này, Mặt trời ở hướng Đông vào buổi sáng. Bạn Phương thấy Mặt trời ở trước mặt. Phương đang quay mặt về hướng nào?",
  "options": [
   "Đông",
   "Bắc",
   "Nam",
   "Tây"
  ],
  "answer": 0,
  "explanation": "Đặt hướng Đông ở trước mặt của Phương rồi đối chiếu bốn hướng. Hướng trước mặt bạn là Đông. Khi quay mặt về Bắc, Đông ở bên phải và Tây ở bên trái.\nLỗi dễ mắc: Không xem “bên phải hình” luôn là Đông. Hãy vẽ bốn hướng và đặt người theo hướng đang nhìn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 10. Quan sát thí nghiệm nảy mầm — trang 15",
  "source": "Ôn tập 2026 – Đề TH1 – Câu 10",
  "content": "Mai nói: “Chỉ cần đổ thật nhiều nước, mọi hạt đều sẽ nảy mầm”. Ý kiến nào phù hợp?",
  "options": [
   "Không cần quan tâm loại hạt và điều kiện",
   "Mai đúng trong mọi trường hợp",
   "Cần hạt tốt, độ ẩm, không khí và nhiệt độ phù hợp",
   "Càng ngập nước càng chắc chắn tốt"
  ],
  "answer": 2,
  "explanation": "Nước là một điều kiện; lượng nước quá nhiều không bảo đảm nảy mầm. Hạt và các điều kiện khác vẫn cần phù hợp.\nLỗi dễ mắc: Một chậu nảy mầm khi tưới không chứng minh mọi hạt cứ có nước là nảy mầm. Hạt và điều kiện khác cũng cần phù hợp."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 11. Chuỗi thức ăn và bảo vệ tự nhiên — trang 16",
  "source": "Ôn tập 2026 – Đề TH1 – Câu 11",
  "content": "Hoạt động nào có nguy cơ làm mất nơi sống và thức ăn của nhiều sinh vật?",
  "options": [
   "Trồng lại cây phù hợp",
   "Chặt phá rừng trên diện rộng",
   "Giữ sạch ao hồ",
   "Bảo vệ cây bản địa"
  ],
  "answer": 1,
  "explanation": "Chặt phá rừng làm giảm cây và phá môi trường sống của nhiều sinh vật.\nLỗi dễ mắc: Đọc mũi tên đúng chiều. Trong câu hỏi, suy luận theo chuỗi được cho, không tự đổi thức ăn của sinh vật."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 12. Thụ phấn ở cây bí — trang 17",
  "source": "Ôn tập 2026 – Đề TH1 – Câu 12",
  "content": "Để theo dõi hiệu quả thụ phấn bổ sung, nên ghi dữ liệu nào?",
  "options": [
   "Số chữ trên bảng",
   "Chỉ ghi màu của cọ",
   "Số hoa được thụ phấn và số quả hình thành",
   "Số trang vở trắng"
  ],
  "answer": 2,
  "explanation": "Ghi số hoa và số quả giúp xem kết quả chăm sóc, thụ phấn của nhóm.\nLỗi dễ mắc: Không nhầm “tưới nhiều nước vào hoa” với thụ phấn. Không nên ngắt bỏ toàn bộ hoa đực khi cần nguồn phấn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Bài 13. Bắt đầu thiết kế và cải tiến sản phẩm — trang 19",
  "source": "Ôn tập 2026 – Đề TH1 – Câu 13",
  "content": "Khi thử hộp phân loại rác, nhóm phát hiện sản phẩm chưa thuận tiện. Cách xử lý nào phù hợp?",
  "options": [
   "Kết luận không cần thử nữa",
   "Chỉ trang trí mà bỏ qua chức năng",
   "Ghi nhận hạn chế và điều chỉnh giải pháp",
   "Che giấu mọi hạn chế"
  ],
  "answer": 2,
  "explanation": "Kết quả thử nghiệm cung cấp căn cứ để cải tiến sản phẩm.\nLỗi dễ mắc: Không mua vật liệu hoặc làm ngay khi chưa biết nhu cầu. “Thử nghiệm” là dùng yêu cầu để kiểm tra, không chỉ ngắm sản phẩm."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 14. Cây cảnh và không gian học tập — trang 19",
  "source": "Ôn tập 2026 – Đề TH1 – Câu 14",
  "content": "Mục đích nào phù hợp khi trồng cây quanh sân trường?",
  "options": [
   "Tạo bóng mát và cảnh quan phù hợp",
   "Che kín tất cả lối đi",
   "Thay thế mọi hoạt động học",
   "Làm sân không cần vệ sinh"
  ],
  "answer": 0,
  "explanation": "Cây được bố trí hợp lý có thể tạo bóng mát và cảnh quan.\nLỗi dễ mắc: Đề hỏi “không phù hợp” thì chọn mục đích hoặc hành động sai. Không mặc định càng nhiều cây, càng nhiều nước là càng tốt."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Bài 15. Sử dụng đèn học phù hợp và an toàn — trang 20",
  "source": "Ôn tập 2026 – Đề TH1 – Câu 15",
  "content": "Dấu hiệu nào cần báo người lớn và ngừng dùng đèn?",
  "options": [
   "Có mùi khét hoặc dây bị hở",
   "Ánh sáng phù hợp",
   "Đèn đứng vững",
   "Dây được xếp gọn"
  ],
  "answer": 0,
  "explanation": "Mùi khét hoặc dây hở có thể báo hiệu hư hỏng; cần ngừng dùng và báo người lớn.\nLỗi dễ mắc: Không lau đèn đang cắm điện bằng khăn ướt, không phủ vải lên bóng nóng. Vệ sinh cần người lớn hướng dẫn, ngắt điện và chờ nguội."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 16. Sản xuất giấy và tiết kiệm tài nguyên — trang 21",
  "source": "Ôn tập 2026 – Đề TH1 – Câu 16",
  "content": "Nhóm cần 5 bản tài liệu nhưng in 20 bản không dùng hết. Cách cải thiện lần sau là gì?",
  "options": [
   "Bỏ qua nhu cầu thực tế",
   "Xác định đúng số bản cần trước khi in",
   "Vứt mọi bản chưa dùng",
   "Luôn in nhiều gấp bốn lần"
  ],
  "answer": 1,
  "explanation": "Xác định nhu cầu trước khi in giúp tránh thừa và lãng phí giấy.\nLỗi dễ mắc: Không kết luận mọi giấy đều làm trực tiếp từ cây mới. Đọc đúng sơ đồ và điều kiện mà câu hỏi cung cấp."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 17. Sắp xếp trang và hiệu ứng chuyển trang — trang 22",
  "source": "Ôn tập 2026 – Đề TH1 – Câu 17",
  "content": "Các trang trình chiếu: 1: Hạ; 2: Đông; 3: Thu; 4: Xuân. Muốn trình chiếu theo thứ tự xuân, hạ, thu, đông và có hiệu ứng giữa các trang, chọn cách nào?",
  "options": [
   "2–3–1–4 và dùng hiệu ứng chuyển trang",
   "4–1–3–2 và chỉ thay hình ảnh",
   "1–4–3–2 và chỉ thay hình ảnh",
   "4–1–3–2 và dùng hiệu ứng chuyển trang"
  ],
  "answer": 3,
  "explanation": "Tìm số trang tương ứng từng mùa: Xuân là trang 4, Hạ là trang 1, Thu là trang 3, Đông là trang 2. Hiệu ứng giữa các trang là hiệu ứng chuyển trang, khác với thay hình trong trang.\nLỗi dễ mắc: Một phương án phải đúng cả thứ tự và thao tác. Không chọn chỉ vì nửa đầu phương án đúng."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 18. Lệnh tuần tự trong Scratch — trang 23",
  "source": "Ôn tập 2026 – Đề TH1 – Câu 18",
  "content": "Trong Scratch, nhân vật đã hướng lên trên. Nhân vật cần đi lên 50 bước rồi mới nói “Tôi đang bay lên!”. Đoạn lệnh nào đúng?",
  "options": [
   "Di chuyển 50 bước → Nói “Tôi đang đi xuống!”",
   "Nói “Tôi đang bay lên!” → Di chuyển 50 bước",
   "Nói “Tôi đang đi xuống!” → Di chuyển 50 bước",
   "Di chuyển 50 bước → Nói “Tôi đang bay lên!”"
  ],
  "answer": 3,
  "explanation": "Nhân vật đã hướng lên nên lệnh di chuyển làm nó đi lên. Yêu cầu “rồi mới nói” nghĩa là lệnh di chuyển phải đứng trước lệnh nói và lời nói phải đúng.\nLỗi dễ mắc: Kiểm tra cả hướng, số bước, thứ tự và lời nói. Nếu đề chưa nêu hướng thì chưa thể khẳng định nhân vật đi lên."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 19. Mã hóa chữ theo quy tắc — trang 24",
  "source": "Ôn tập 2026 – Đề TH1 – Câu 19",
  "content": "Dùng bảng chữ cái A B C D E F G H I J K L M N O P Q R S T U V W X Y Z. Mỗi chữ được thay bằng chữ đứng sau 3 vị trí; qua Z thì quay lại A. Từ BOOK được mã hóa thành gì?",
  "options": [
   "YLLH",
   "FSSO",
   "ERRN",
   "BOOK"
  ],
  "answer": 2,
  "explanation": "Thay lần lượt: B → E; O → R; O → R; K → N. Ghép lại được ERRN. Giữ nguyên thứ tự chữ và quay vòng khi vượt Z.\nLỗi dễ mắc: Đừng tính chữ ban đầu là bước thứ nhất. Nếu dịch hai bước, A → B → C nên kết quả là C."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng cao",
  "lesson": "Bài 20. Robot di chuyển và lệnh lặp — trang 25",
  "source": "Ôn tập 2026 – Đề TH1 – Câu 20",
  "content": "Lưới 6 hàng, 6 cột; hàng đếm từ trên xuống, cột từ trái sang phải. Robot ở hàng 5, cột 3, hướng lên trên. Lặp 3 lần: tiến 3 ô, quay phải 90° tại chỗ. Robot dừng ở đâu?",
  "options": [
   "Hàng 5, cột 3",
   "Hàng 2, cột 6",
   "Hàng 5, cột 6",
   "Hàng 2, cột 3"
  ],
  "answer": 2,
  "explanation": "Lần 1: lên 3 ô, đến (2; 3), quay sang phải. Lần 2: sang phải 3 ô, đến (2; 6), quay xuống. Lần 3: xuống 3 ô, đến (5; 6), quay sang trái. Vị trí cuối là hàng 5, cột 6; quay tại chỗ không đổi ô.\nLỗi dễ mắc: Đừng cho robot luôn tiến lên dù đã quay hướng. Khi hỏi vị trí cuối, không nhầm vị trí với hướng quay cuối.",
  "image": "img/ontap/h12.png"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 1. Hình khối và khối lượng — trang 6",
  "source": "Ôn tập 2026 – Đề TH2 – Câu 1",
  "content": "Một mô hình có 4 khối lập phương ở hàng dưới và 1 khối đặt ở hàng trên. Không có khối nào khác. Mỗi khối nặng 300 g. Mô hình nặng bao nhiêu?",
  "options": [
   "1200 g",
   "1500 g",
   "2100 g",
   "1800 g"
  ],
  "answer": 1,
  "explanation": "Có 4 + 1 = 5 khối. Khối lượng mô hình là 5 × 300 = 1500 g.\nLỗi dễ mắc: Đếm riêng từng hàng hoặc từng cột rồi cộng; kiểm tra để không đếm một khối hai lần.",
  "image": "img/ontap/h16.png"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 2. Trung bình cộng và bảng số liệu — trang 7",
  "source": "Ôn tập 2026 – Đề TH2 – Câu 2",
  "content": "Chiều cao của năm bạn: Lan: 137 cm; Hòa: 140 cm; Linh: 143 cm; Đức: 141 cm; Minh: 139 cm. Những bạn nào cao hơn chiều cao trung bình của nhóm?",
  "options": [
   "Linh và Đức",
   "Hòa, Linh và Đức",
   "Lan và Minh",
   "Hòa và Đức"
  ],
  "answer": 0,
  "explanation": "Tổng chiều cao là 700 cm; trung bình là 700 : 5 = 140 cm. Linh (143 cm) và Đức (141 cm) cao hơn mức này. Hòa bằng mức trung bình nên không được chọn.\nLỗi dễ mắc: Đừng chọn luôn hai bạn cao nhất trước khi tính trung bình; số bạn trên trung bình có thể thay đổi."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 3. Phân số và thứ hạng — trang 8",
  "source": "Ôn tập 2026 – Đề TH2 – Câu 3",
  "content": "Kết quả chạy của tám bạn: An 7,4 s; Mai 8,1 s; Việt 7,7 s; Huy 7,0 s; Phong 7,9 s; Ngọc 8,4 s; Hà 7,1 s; Minh 8,3 s. Chọn 1/2 số bạn có thành tích tốt nhất. Những bạn nào được chọn?",
  "options": [
   "Phong, Mai, Minh, Ngọc",
   "Huy, Hà, An, Việt",
   "Huy, Hà, An, Việt, Phong",
   "Hà, An, Việt, Phong"
  ],
  "answer": 1,
  "explanation": "Cần chọn 8 : 2 = 4 bạn. Thời gian chạy càng nhỏ thì thành tích càng tốt. Xếp tăng dần thời gian rồi chọn 4 bạn đầu: Huy, Hà, An, Việt.\nLỗi dễ mắc: Tính số người được chọn trước, sau đó xếp thứ hạng. Không chọn thời gian lớn nhất trong bài chạy."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 4. Quy luật ghép ô vuông — trang 8",
  "source": "Ôn tập 2026 – Đề TH2 – Câu 4",
  "content": "Các ô vuông được ghép thành một hàng, hai ô liền nhau dùng chung một cạnh. Mỗi cạnh là một thanh tre. Cần bao nhiêu thanh để tạo 14 ô vuông?",
  "options": [
   "56 thanh",
   "42 thanh",
   "30 thanh",
   "43 thanh"
  ],
  "answer": 3,
  "explanation": "Ô đầu cần 4 thanh. Mỗi ô thêm chỉ cần 3 thanh vì dùng chung một cạnh. Tổng: 4 + (14 − 1) × 3 = 43 thanh.\nLỗi dễ mắc: Không lấy n × 4 vì cách đó đếm lại các cạnh chung. Công thức này chỉ dùng cho kiểu ghép thành một hàng đã nêu."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 5. Biểu đồ và phép chia có dư — trang 9",
  "source": "Ôn tập 2026 – Đề TH2 – Câu 5",
  "content": "Bốn lớp thu gom vỏ chai: 5A: 150 vỏ; 5B: 125 vỏ; 5C: 165 vỏ; 5D: 140 vỏ. Cứ 30 vỏ đổi được một chậu cây. Nếu gộp chung, đổi được nhiều nhất bao nhiêu chậu và còn thừa bao nhiêu vỏ?",
  "options": [
   "19 chậu, thừa 10 vỏ",
   "18 chậu, thừa 40 vỏ",
   "20 chậu, không thừa",
   "19 chậu, không thừa"
  ],
  "answer": 0,
  "explanation": "Tổng: 150 + 125 + 165 + 140 = 580 vỏ. 580 : 30 = 19 dư 10. Đổi được 19 chậu và còn 10 vỏ. Số dư phải nhỏ hơn 30.\nLỗi dễ mắc: Không làm tròn lên để đổi thêm một sản phẩm khi chưa đủ vật liệu. Kiểm tra: số sản phẩm × mức đổi + số dư = tổng.",
  "image": "img/ontap/h17.png"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng cao",
  "lesson": "Bài 6. Thời gian sản xuất theo lượt — trang 10",
  "source": "Ôn tập 2026 – Đề TH2 – Câu 6",
  "content": "Máy in 3D in tối đa 3 móc khóa mỗi lượt. Một lượt luôn mất 15 phút. Máy nghỉ 5 phút giữa hai lượt, không cần chờ sau lượt cuối. Cần in 19 móc khóa từ 8:00. Sớm nhất khi nào in xong?",
  "options": [
   "10:20",
   "10:15",
   "9:45",
   "10:10"
  ],
  "answer": 1,
  "explanation": "19 móc khóa cần 7 lượt (lượt cuối vẫn mất đủ 15 phút). Có 6 lần nghỉ. Tổng thời gian: 7 × 15 + 6 × 5 = 135 phút. Cộng vào 8:00 được 10:15.\nLỗi dễ mắc: Một lượt chưa đầy vẫn mất đủ thời gian nếu đề nói thời gian mỗi lượt cố định. Vẽ chuỗi làm – nghỉ – làm để kiểm tra."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 7. Không khí chiếm chỗ và có thể bị nén — trang 13",
  "source": "Ôn tập 2026 – Đề TH2 – Câu 7",
  "content": "Trong thí nghiệm nén khí, pít-tông được đẩy vào nhưng khí không thoát ra. Đại lượng nào của phần khí giảm?",
  "options": [
   "Thể tích phần khí chiếm chỗ",
   "Màu sắc của khí",
   "Số chữ trên xi lanh",
   "Độ dài bàn học"
  ],
  "answer": 0,
  "explanation": "Phần không gian chứa khí nhỏ lại; đây là dấu hiệu nén khí.\nLỗi dễ mắc: Bơm phao làm phao phồng không tự chứng minh khí có thể tích giảm. Muốn nói “bị nén”, cần dữ kiện phần khí chiếm thể tích nhỏ hơn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Bài 8. Nước và sự chuyển thể — trang 14",
  "source": "Ôn tập 2026 – Đề TH2 – Câu 8",
  "content": "Hơi nước trên gương phòng tắm nguội tạo thành giọt. Hiện tượng chính là gì?",
  "options": [
   "Nóng chảy",
   "Đông đặc",
   "Ngưng tụ",
   "Bay hơi"
  ],
  "answer": 2,
  "explanation": "Hơi nước chuyển thành các giọt nước lỏng khi gặp điều kiện phù hợp.\nLỗi dễ mắc: Giọt ở ngoài cốc lạnh thường từ hơi nước trong không khí ngưng tụ, không phải nước tự xuyên qua cốc."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 9. Mặt trời và phương hướng — trang 14",
  "source": "Ôn tập 2026 – Đề TH2 – Câu 9",
  "content": "Trong bài tập này, Mặt trời ở hướng Tây vào buổi chiều. Bạn Quân thấy Mặt trời ở sau lưng. Quân đang quay mặt về hướng nào?",
  "options": [
   "Đông",
   "Bắc",
   "Tây",
   "Nam"
  ],
  "answer": 0,
  "explanation": "Đặt hướng Tây ở sau lưng của Quân rồi đối chiếu bốn hướng. Hướng trước mặt bạn là Đông. Khi quay mặt về Bắc, Đông ở bên phải và Tây ở bên trái.\nLỗi dễ mắc: Không xem “bên phải hình” luôn là Đông. Hãy vẽ bốn hướng và đặt người theo hướng đang nhìn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 10. Quan sát thí nghiệm nảy mầm — trang 15",
  "source": "Ôn tập 2026 – Đề TH2 – Câu 10",
  "content": "Hai nhóm muốn thử vai trò của nước: nhóm 1 chỉ thay lượng tưới; nhóm 2 đổi cả loại hạt, đất và nhiệt độ. Cách nào dễ xác định tác động của nước hơn?",
  "options": [
   "Hai nhóm đều không cần ghi kết quả",
   "Nhóm 2 vì thay càng nhiều càng rõ",
   "Chỉ cần chọn chậu đẹp hơn",
   "Nhóm 1 vì giữ các yếu tố còn lại tương đương"
  ],
  "answer": 3,
  "explanation": "Khi chỉ thay lượng tưới, khác biệt kết quả có thể được xem xét rõ hơn theo yếu tố này; đổi nhiều yếu tố làm khó xác định nguyên nhân.\nLỗi dễ mắc: Một chậu nảy mầm khi tưới không chứng minh mọi hạt cứ có nước là nảy mầm. Hạt và điều kiện khác cũng cần phù hợp."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 11. Chuỗi thức ăn và bảo vệ tự nhiên — trang 16",
  "source": "Ôn tập 2026 – Đề TH2 – Câu 11",
  "content": "Trong chuỗi hạt → chim nhỏ → chim săn mồi, chim nhỏ giữ vai trò nào?",
  "options": [
   "Ăn hạt và là thức ăn của chim săn mồi",
   "Tạo ra ánh sáng",
   "Không liên quan đến hạt",
   "Ăn chim săn mồi"
  ],
  "answer": 0,
  "explanation": "Chim nhỏ sử dụng hạt làm thức ăn và có thể là thức ăn của chim săn mồi.\nLỗi dễ mắc: Đọc mũi tên đúng chiều. Trong câu hỏi, suy luận theo chuỗi được cho, không tự đổi thức ăn của sinh vật."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 12. Thụ phấn ở cây bí — trang 17",
  "source": "Ôn tập 2026 – Đề TH2 – Câu 12",
  "content": "Cây bí có đủ nước nhưng hoa cái chưa nhận được phấn. Nhận xét nào phù hợp?",
  "options": [
   "Đủ nước không thay thế được thụ phấn",
   "Đủ nước thì mọi hoa chắc chắn thành quả",
   "Hoa đực hoàn toàn không có vai trò",
   "Không cần phấn trong mọi trường hợp"
  ],
  "answer": 0,
  "explanation": "Nước và thụ phấn có vai trò khác nhau; không nên xem nước là yếu tố thay thế phấn.\nLỗi dễ mắc: Không nhầm “tưới nhiều nước vào hoa” với thụ phấn. Không nên ngắt bỏ toàn bộ hoa đực khi cần nguồn phấn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Bài 13. Bắt đầu thiết kế và cải tiến sản phẩm — trang 19",
  "source": "Ôn tập 2026 – Đề TH2 – Câu 13",
  "content": "Nhóm muốn thiết kế xe chở đồ chơi. Việc nào cần làm trước tiên?",
  "options": [
   "Trang trí sản phẩm ngay",
   "Báo cáo một sản phẩm chưa làm",
   "Mua thật nhiều vật liệu bất kỳ",
   "Xác định vấn đề và nhu cầu của người dùng"
  ],
  "answer": 3,
  "explanation": "Trước khi chọn giải pháp, cần biết sản phẩm giải quyết vấn đề gì, cho ai và cần đáp ứng yêu cầu nào.\nLỗi dễ mắc: Không mua vật liệu hoặc làm ngay khi chưa biết nhu cầu. “Thử nghiệm” là dùng yêu cầu để kiểm tra, không chỉ ngắm sản phẩm."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 14. Cây cảnh và không gian học tập — trang 19",
  "source": "Ôn tập 2026 – Đề TH2 – Câu 14",
  "content": "Cách tổ chức chăm sóc cây nào giúp duy trì vườn lớp?",
  "options": [
   "Chỉ tưới vào ngày chụp ảnh",
   "Không ai chịu trách nhiệm",
   "Phân công và ghi lại việc chăm sóc",
   "Mỗi bạn tưới tùy ý thật nhiều"
  ],
  "answer": 2,
  "explanation": "Phân công và ghi chép giúp theo dõi nhu cầu của cây và tránh bỏ sót hoặc tưới quá mức.\nLỗi dễ mắc: Đề hỏi “không phù hợp” thì chọn mục đích hoặc hành động sai. Không mặc định càng nhiều cây, càng nhiều nước là càng tốt."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Bài 15. Sử dụng đèn học phù hợp và an toàn — trang 20",
  "source": "Ôn tập 2026 – Đề TH2 – Câu 15",
  "content": "Vì sao đặt đèn phía đối diện tay viết thường phù hợp?",
  "options": [
   "Làm bút viết nhanh hơn",
   "Giảm bóng của tay che vùng đang viết",
   "Làm giấy tự phát sáng",
   "Không cần điều chỉnh ánh sáng"
  ],
  "answer": 1,
  "explanation": "Tay viết có thể che ánh sáng; đặt đèn đối diện giúp giảm bóng tay.\nLỗi dễ mắc: Không lau đèn đang cắm điện bằng khăn ướt, không phủ vải lên bóng nóng. Vệ sinh cần người lớn hướng dẫn, ngắt điện và chờ nguội."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 16. Sản xuất giấy và tiết kiệm tài nguyên — trang 21",
  "source": "Ôn tập 2026 – Đề TH2 – Câu 16",
  "content": "Vì sao tiết kiệm giấy có thể góp phần tiết kiệm tài nguyên?",
  "options": [
   "Vì giấy không có nguyên liệu",
   "Vì dùng giấy càng nhiều càng không cần cây",
   "Giảm nhu cầu sản xuất giấy mới và nguyên liệu liên quan",
   "Vì mọi giấy không cần nước hay năng lượng"
  ],
  "answer": 2,
  "explanation": "Giảm giấy lãng phí góp phần giảm nhu cầu nguyên liệu và các nguồn lực dùng trong sản xuất.\nLỗi dễ mắc: Không kết luận mọi giấy đều làm trực tiếp từ cây mới. Đọc đúng sơ đồ và điều kiện mà câu hỏi cung cấp."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 17. Sắp xếp trang và hiệu ứng chuyển trang — trang 22",
  "source": "Ôn tập 2026 – Đề TH2 – Câu 17",
  "content": "Các trang trình chiếu: 1: Đông; 2: Xuân; 3: Thu; 4: Hạ. Muốn trình chiếu theo thứ tự xuân, hạ, thu, đông và có hiệu ứng giữa các trang, chọn cách nào?",
  "options": [
   "1–3–4–2 và dùng hiệu ứng chuyển trang",
   "4–2–3–1 và chỉ thay hình ảnh",
   "2–4–3–1 và chỉ thay hình ảnh",
   "2–4–3–1 và dùng hiệu ứng chuyển trang"
  ],
  "answer": 3,
  "explanation": "Tìm số trang tương ứng từng mùa: Xuân là trang 2, Hạ là trang 4, Thu là trang 3, Đông là trang 1. Hiệu ứng giữa các trang là hiệu ứng chuyển trang, khác với thay hình trong trang.\nLỗi dễ mắc: Một phương án phải đúng cả thứ tự và thao tác. Không chọn chỉ vì nửa đầu phương án đúng."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 18. Lệnh tuần tự trong Scratch — trang 23",
  "source": "Ôn tập 2026 – Đề TH2 – Câu 18",
  "content": "Trong Scratch, nhân vật đã hướng lên trên. Nhân vật cần đi lên 55 bước rồi mới nói “Đã hoàn thành!”. Đoạn lệnh nào đúng?",
  "options": [
   "Nói “Tôi đang đi xuống!” → Di chuyển 55 bước",
   "Di chuyển 55 bước → Nói “Tôi đang đi xuống!”",
   "Nói “Đã hoàn thành!” → Di chuyển 55 bước",
   "Di chuyển 55 bước → Nói “Đã hoàn thành!”"
  ],
  "answer": 3,
  "explanation": "Nhân vật đã hướng lên nên lệnh di chuyển làm nó đi lên. Yêu cầu “rồi mới nói” nghĩa là lệnh di chuyển phải đứng trước lệnh nói và lời nói phải đúng.\nLỗi dễ mắc: Kiểm tra cả hướng, số bước, thứ tự và lời nói. Nếu đề chưa nêu hướng thì chưa thể khẳng định nhân vật đi lên."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 19. Mã hóa chữ theo quy tắc — trang 24",
  "source": "Ôn tập 2026 – Đề TH2 – Câu 19",
  "content": "Dùng bảng chữ cái A B C D E F G H I J K L M N O P Q R S T U V W X Y Z. Mỗi chữ được thay bằng chữ đứng sau 1 vị trí; qua Z thì quay lại A. Từ SUN được mã hóa thành gì?",
  "options": [
   "RTM",
   "UWP",
   "TVO",
   "SUN"
  ],
  "answer": 2,
  "explanation": "Thay lần lượt: S → T; U → V; N → O. Ghép lại được TVO. Giữ nguyên thứ tự chữ và quay vòng khi vượt Z.\nLỗi dễ mắc: Đừng tính chữ ban đầu là bước thứ nhất. Nếu dịch hai bước, A → B → C nên kết quả là C."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng cao",
  "lesson": "Bài 20. Robot di chuyển và lệnh lặp — trang 25",
  "source": "Ôn tập 2026 – Đề TH2 – Câu 20",
  "content": "Lưới 6 hàng, 6 cột; hàng đếm từ trên xuống, cột từ trái sang phải. Robot ở hàng 6, cột 4, hướng lên trên. Lặp 3 lần: tiến 1 ô, quay phải 90° tại chỗ. Robot dừng ở đâu?",
  "options": [
   "Hàng 6, cột 5",
   "Hàng 6, cột 4",
   "Hàng 5, cột 4",
   "Hàng 5, cột 5"
  ],
  "answer": 0,
  "explanation": "Lần 1: lên 1 ô, đến (5; 4), quay sang phải. Lần 2: sang phải 1 ô, đến (5; 5), quay xuống. Lần 3: xuống 1 ô, đến (6; 5), quay sang trái. Vị trí cuối là hàng 6, cột 5; quay tại chỗ không đổi ô.\nLỗi dễ mắc: Đừng cho robot luôn tiến lên dù đã quay hướng. Khi hỏi vị trí cuối, không nhầm vị trí với hướng quay cuối.",
  "image": "img/ontap/h18.png"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 1. Hình khối và khối lượng — trang 6",
  "source": "Ôn tập 2026 – Đề TH3 – Câu 1",
  "content": "Một mô hình có 5 khối lập phương ở hàng dưới và 2 khối đặt ở hàng trên. Không có khối nào khác. Mỗi khối nặng 100 g. Mô hình nặng bao nhiêu?",
  "options": [
   "900 g",
   "500 g",
   "700 g",
   "800 g"
  ],
  "answer": 2,
  "explanation": "Có 5 + 2 = 7 khối. Khối lượng mô hình là 7 × 100 = 700 g.\nLỗi dễ mắc: Đếm riêng từng hàng hoặc từng cột rồi cộng; kiểm tra để không đếm một khối hai lần.",
  "image": "img/ontap/h19.png"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 2. Trung bình cộng và bảng số liệu — trang 7",
  "source": "Ôn tập 2026 – Đề TH3 – Câu 2",
  "content": "Chiều cao của năm bạn: Lan: 138 cm; Hòa: 141 cm; Linh: 144 cm; Đức: 142 cm; Minh: 140 cm. Những bạn nào cao hơn chiều cao trung bình của nhóm?",
  "options": [
   "Hòa, Linh và Đức",
   "Linh và Đức",
   "Lan và Minh",
   "Hòa và Đức"
  ],
  "answer": 1,
  "explanation": "Tổng chiều cao là 705 cm; trung bình là 705 : 5 = 141 cm. Linh (144 cm) và Đức (142 cm) cao hơn mức này. Hòa bằng mức trung bình nên không được chọn.\nLỗi dễ mắc: Đừng chọn luôn hai bạn cao nhất trước khi tính trung bình; số bạn trên trung bình có thể thay đổi."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 3. Phân số và thứ hạng — trang 8",
  "source": "Ôn tập 2026 – Đề TH3 – Câu 3",
  "content": "Kết quả chạy của tám bạn: An 7,5 s; Mai 8,2 s; Việt 7,8 s; Huy 7,1 s; Phong 8,0 s; Ngọc 8,5 s; Hà 7,2 s; Minh 8,4 s. Chọn 1/4 số bạn có thành tích tốt nhất. Những bạn nào được chọn?",
  "options": [
   "Hà, An",
   "Minh, Ngọc",
   "Huy, Hà, An",
   "Huy, Hà"
  ],
  "answer": 3,
  "explanation": "Cần chọn 8 : 4 = 2 bạn. Thời gian chạy càng nhỏ thì thành tích càng tốt. Xếp tăng dần thời gian rồi chọn 2 bạn đầu: Huy, Hà.\nLỗi dễ mắc: Tính số người được chọn trước, sau đó xếp thứ hạng. Không chọn thời gian lớn nhất trong bài chạy."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 4. Quy luật ghép ô vuông — trang 8",
  "source": "Ôn tập 2026 – Đề TH3 – Câu 4",
  "content": "Các ô vuông được ghép thành một hàng, hai ô liền nhau dùng chung một cạnh. Mỗi cạnh là một thanh tre. Cần bao nhiêu thanh để tạo 15 ô vuông?",
  "options": [
   "60 thanh",
   "46 thanh",
   "32 thanh",
   "45 thanh"
  ],
  "answer": 1,
  "explanation": "Ô đầu cần 4 thanh. Mỗi ô thêm chỉ cần 3 thanh vì dùng chung một cạnh. Tổng: 4 + (15 − 1) × 3 = 46 thanh.\nLỗi dễ mắc: Không lấy n × 4 vì cách đó đếm lại các cạnh chung. Công thức này chỉ dùng cho kiểu ghép thành một hàng đã nêu."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 5. Biểu đồ và phép chia có dư — trang 9",
  "source": "Ôn tập 2026 – Đề TH3 – Câu 5",
  "content": "Bốn lớp thu gom vỏ chai: 5A: 155 vỏ; 5B: 130 vỏ; 5C: 170 vỏ; 5D: 145 vỏ. Cứ 20 vỏ đổi được một chậu cây. Nếu gộp chung, đổi được nhiều nhất bao nhiêu chậu và còn thừa bao nhiêu vỏ?",
  "options": [
   "30 chậu, thừa 0 vỏ",
   "29 chậu, thừa 20 vỏ",
   "30 chậu, thừa 5 vỏ",
   "31 chậu, không thừa"
  ],
  "answer": 0,
  "explanation": "Tổng: 155 + 130 + 170 + 145 = 600 vỏ. 600 : 20 = 30 dư 0. Đổi được 30 chậu và còn 0 vỏ. Số dư phải nhỏ hơn 20.\nLỗi dễ mắc: Không làm tròn lên để đổi thêm một sản phẩm khi chưa đủ vật liệu. Kiểm tra: số sản phẩm × mức đổi + số dư = tổng.",
  "image": "img/ontap/h20.png"
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Toán học",
  "difficulty": "Vận dụng cao",
  "lesson": "Bài 6. Thời gian sản xuất theo lượt — trang 10",
  "source": "Ôn tập 2026 – Đề TH3 – Câu 6",
  "content": "Máy in 3D in tối đa 4 móc khóa mỗi lượt. Một lượt luôn mất 20 phút. Máy nghỉ 5 phút giữa hai lượt, không cần chờ sau lượt cuối. Cần in 25 móc khóa từ 8:00. Sớm nhất khi nào in xong?",
  "options": [
   "10:55",
   "10:45",
   "10:50",
   "10:20"
  ],
  "answer": 2,
  "explanation": "25 móc khóa cần 7 lượt (lượt cuối vẫn mất đủ 20 phút). Có 6 lần nghỉ. Tổng thời gian: 7 × 20 + 6 × 5 = 170 phút. Cộng vào 8:00 được 10:50.\nLỗi dễ mắc: Một lượt chưa đầy vẫn mất đủ thời gian nếu đề nói thời gian mỗi lượt cố định. Vẽ chuỗi làm – nghỉ – làm để kiểm tra."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 7. Không khí chiếm chỗ và có thể bị nén — trang 13",
  "source": "Ôn tập 2026 – Đề TH3 – Câu 7",
  "content": "Quan sát một bóng bay được bơm từ xẹp thành phồng. Kết luận nào chắc chắn phù hợp với tình huống?",
  "options": [
   "Khí trong bóng chắc chắn có thể tích giảm",
   "Không khí biến thành nhựa",
   "Không khí không tồn tại",
   "Không khí được đưa vào bóng và chiếm chỗ"
  ],
  "answer": 3,
  "explanation": "Bóng tăng thể tích khi khí được đưa vào. Tính chất chắc chắn quan sát được là khí chiếm chỗ.\nLỗi dễ mắc: Bơm phao làm phao phồng không tự chứng minh khí có thể tích giảm. Muốn nói “bị nén”, cần dữ kiện phần khí chiếm thể tích nhỏ hơn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Nhận biết",
  "lesson": "Bài 8. Nước và sự chuyển thể — trang 14",
  "source": "Ôn tập 2026 – Đề TH3 – Câu 8",
  "content": "Đá trong cốc tan thành nước. Hiện tượng chính là gì?",
  "options": [
   "Bay hơi",
   "Ngưng tụ",
   "Đông đặc",
   "Nóng chảy"
  ],
  "answer": 3,
  "explanation": "Chất chuyển từ thể rắn sang thể lỏng.\nLỗi dễ mắc: Giọt ở ngoài cốc lạnh thường từ hơi nước trong không khí ngưng tụ, không phải nước tự xuyên qua cốc."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 9. Mặt trời và phương hướng — trang 14",
  "source": "Ôn tập 2026 – Đề TH3 – Câu 9",
  "content": "Trong bài tập này, Mặt trời ở hướng Đông vào buổi sáng. Bạn Trang thấy Mặt trời ở bên tay trái. Trang đang quay mặt về hướng nào?",
  "options": [
   "Tây",
   "Bắc",
   "Đông",
   "Nam"
  ],
  "answer": 3,
  "explanation": "Đặt hướng Đông ở bên tay trái của Trang rồi đối chiếu bốn hướng. Hướng trước mặt bạn là Nam. Khi quay mặt về Bắc, Đông ở bên phải và Tây ở bên trái.\nLỗi dễ mắc: Không xem “bên phải hình” luôn là Đông. Hãy vẽ bốn hướng và đặt người theo hướng đang nhìn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 10. Quan sát thí nghiệm nảy mầm — trang 15",
  "source": "Ôn tập 2026 – Đề TH3 – Câu 10",
  "content": "Hai chậu ban đầu đều có 10 hạt giống nhau. Sau cùng thời gian, chậu đủ ẩm có 8 hạt nảy mầm, chậu đất khô có 1 hạt. Nhận xét nào dựa đúng vào dữ liệu?",
  "options": [
   "Cả hai chậu đều có 10 hạt nảy mầm",
   "Chậu đủ ẩm có nhiều hạt nảy mầm hơn trong thí nghiệm",
   "Chậu khô có nhiều hơn",
   "Mọi hạt trên thế giới đều cần đúng lượng nước đó"
  ],
  "answer": 1,
  "explanation": "So sánh 8 với 1 cho thấy chậu đủ ẩm có nhiều hạt nảy mầm hơn; kết luận giới hạn trong dữ liệu thí nghiệm.\nLỗi dễ mắc: Một chậu nảy mầm khi tưới không chứng minh mọi hạt cứ có nước là nảy mầm. Hạt và điều kiện khác cũng cần phù hợp."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 11. Chuỗi thức ăn và bảo vệ tự nhiên — trang 16",
  "source": "Ôn tập 2026 – Đề TH3 – Câu 11",
  "content": "Vì sao không nên loại bỏ toàn bộ động vật ăn thực vật trong một khu vực?",
  "options": [
   "Vì chúng không cần thức ăn",
   "Vì chúng không ảnh hưởng sinh vật khác",
   "Chúng là một mắt xích trong các chuỗi thức ăn",
   "Vì mọi cây đều ăn động vật"
  ],
  "answer": 2,
  "explanation": "Động vật ăn thực vật liên kết nguồn thức ăn từ cây với các sinh vật khác; loại bỏ hoàn toàn có thể phá vỡ quan hệ tự nhiên.\nLỗi dễ mắc: Đọc mũi tên đúng chiều. Trong câu hỏi, suy luận theo chuỗi được cho, không tự đổi thức ăn của sinh vật."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Khoa học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 12. Thụ phấn ở cây bí — trang 17",
  "source": "Ôn tập 2026 – Đề TH3 – Câu 12",
  "content": "Khi dùng cọ để chuyển phấn cho hoa bí, cách nào phù hợp?",
  "options": [
   "Chỉ quét phấn lên lá",
   "Thao tác nhẹ, chuyển phấn đúng bộ phận của hoa cái",
   "Chà mạnh cho rách hoa",
   "Dùng cọ bẩn rồi đổ nước vào hoa"
  ],
  "answer": 1,
  "explanation": "Cần chuyển phấn đúng vị trí, thao tác nhẹ để tránh làm hỏng hoa.\nLỗi dễ mắc: Không nhầm “tưới nhiều nước vào hoa” với thụ phấn. Không nên ngắt bỏ toàn bộ hoa đực khi cần nguồn phấn."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Bài 13. Bắt đầu thiết kế và cải tiến sản phẩm — trang 19",
  "source": "Ôn tập 2026 – Đề TH3 – Câu 13",
  "content": "Nhóm đã làm mẫu bảng nhắc việc. Muốn biết mẫu có đáp ứng nhu cầu hay không, nên làm gì tiếp?",
  "options": [
   "Chỉ nhìn màu sắc",
   "Không cho ai sử dụng",
   "Thử nghiệm theo các yêu cầu đã xác định",
   "Bỏ qua việc kiểm tra"
  ],
  "answer": 2,
  "explanation": "Thử nghiệm theo yêu cầu giúp đánh giá mẫu có giải quyết được vấn đề hay không và cần sửa ở đâu.\nLỗi dễ mắc: Không mua vật liệu hoặc làm ngay khi chưa biết nhu cầu. “Thử nghiệm” là dùng yêu cầu để kiểm tra, không chỉ ngắm sản phẩm."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 14. Cây cảnh và không gian học tập — trang 19",
  "source": "Ôn tập 2026 – Đề TH3 – Câu 14",
  "content": "Cây cảnh và ánh sáng trong lớp nên được bố trí theo nguyên tắc nào?",
  "options": [
   "Bỏ qua điều kiện của cây",
   "Càng tối càng tốt",
   "Cây phù hợp vị trí, lớp vẫn đủ sáng và lối đi thông thoáng",
   "Càng nhiều chậu chắn cửa càng tốt"
  ],
  "answer": 2,
  "explanation": "Cần bảo đảm đồng thời điều kiện cho cây và điều kiện học tập, di chuyển.\nLỗi dễ mắc: Đề hỏi “không phù hợp” thì chọn mục đích hoặc hành động sai. Không mặc định càng nhiều cây, càng nhiều nước là càng tốt."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Nhận biết",
  "lesson": "Bài 15. Sử dụng đèn học phù hợp và an toàn — trang 20",
  "source": "Ôn tập 2026 – Đề TH3 – Câu 15",
  "content": "Cách nào phù hợp với góc học tập?",
  "options": [
   "Đèn chạm giấy",
   "Đèn vững, ánh sáng đủ và không chiếu trực tiếp vào mắt",
   "Bóng nóng phủ khăn",
   "Dây hỏng vẫn tiếp tục dùng"
  ],
  "answer": 1,
  "explanation": "Góc học cần ánh sáng phù hợp và thiết bị được sử dụng an toàn.\nLỗi dễ mắc: Không lau đèn đang cắm điện bằng khăn ướt, không phủ vải lên bóng nóng. Vệ sinh cần người lớn hướng dẫn, ngắt điện và chờ nguội."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Công nghệ",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 16. Sản xuất giấy và tiết kiệm tài nguyên — trang 21",
  "source": "Ôn tập 2026 – Đề TH3 – Câu 16",
  "content": "Lớp muốn giảm giấy bỏ đi. Phương án nào phù hợp?",
  "options": [
   "Xé hết vở còn trang trắng",
   "In thật nhiều bản không dùng",
   "Trộn giấy với mọi rác ướt",
   "Dùng đủ nhu cầu, tận dụng giấy còn sạch và thu gom tái chế"
  ],
  "answer": 3,
  "explanation": "Kết hợp giảm dùng, tái sử dụng và thu gom tái chế giúp hạn chế lãng phí.\nLỗi dễ mắc: Không kết luận mọi giấy đều làm trực tiếp từ cây mới. Đọc đúng sơ đồ và điều kiện mà câu hỏi cung cấp."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 17. Sắp xếp trang và hiệu ứng chuyển trang — trang 22",
  "source": "Ôn tập 2026 – Đề TH3 – Câu 17",
  "content": "Các trang trình chiếu: 1: Xuân; 2: Đông; 3: Hạ; 4: Thu. Muốn trình chiếu theo thứ tự xuân, hạ, thu, đông và có hiệu ứng giữa các trang, chọn cách nào?",
  "options": [
   "2–4–3–1 và dùng hiệu ứng chuyển trang",
   "3–1–4–2 và chỉ thay hình ảnh",
   "1–3–4–2 và dùng hiệu ứng chuyển trang",
   "1–3–4–2 và chỉ thay hình ảnh"
  ],
  "answer": 2,
  "explanation": "Tìm số trang tương ứng từng mùa: Xuân là trang 1, Hạ là trang 3, Thu là trang 4, Đông là trang 2. Hiệu ứng giữa các trang là hiệu ứng chuyển trang, khác với thay hình trong trang.\nLỗi dễ mắc: Một phương án phải đúng cả thứ tự và thao tác. Không chọn chỉ vì nửa đầu phương án đúng."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Thông hiểu",
  "lesson": "Bài 18. Lệnh tuần tự trong Scratch — trang 23",
  "source": "Ôn tập 2026 – Đề TH3 – Câu 18",
  "content": "Trong Scratch, nhân vật đã hướng lên trên. Nhân vật cần đi lên 60 bước rồi mới nói “Tôi ở vị trí mới!”. Đoạn lệnh nào đúng?",
  "options": [
   "Nói “Tôi đang đi xuống!” → Di chuyển 60 bước",
   "Di chuyển 60 bước → Nói “Tôi ở vị trí mới!”",
   "Nói “Tôi ở vị trí mới!” → Di chuyển 60 bước",
   "Di chuyển 60 bước → Nói “Tôi đang đi xuống!”"
  ],
  "answer": 1,
  "explanation": "Nhân vật đã hướng lên nên lệnh di chuyển làm nó đi lên. Yêu cầu “rồi mới nói” nghĩa là lệnh di chuyển phải đứng trước lệnh nói và lời nói phải đúng.\nLỗi dễ mắc: Kiểm tra cả hướng, số bước, thứ tự và lời nói. Nếu đề chưa nêu hướng thì chưa thể khẳng định nhân vật đi lên."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng",
  "lesson": "Bài 19. Mã hóa chữ theo quy tắc — trang 24",
  "source": "Ôn tập 2026 – Đề TH3 – Câu 19",
  "content": "Dùng bảng chữ cái A B C D E F G H I J K L M N O P Q R S T U V W X Y Z. Mỗi chữ được thay bằng chữ đứng sau 2 vị trí; qua Z thì quay lại A. Từ ZERO được mã hóa thành gì?",
  "options": [
   "XCPM",
   "BGTQ",
   "CHUR",
   "ZERO"
  ],
  "answer": 1,
  "explanation": "Thay lần lượt: Z → B; E → G; R → T; O → Q. Ghép lại được BGTQ. Giữ nguyên thứ tự chữ và quay vòng khi vượt Z.\nLỗi dễ mắc: Đừng tính chữ ban đầu là bước thứ nhất. Nếu dịch hai bước, A → B → C nên kết quả là C."
 },
 {
  "type": "mcq",
  "level": "Tiểu học",
  "topic": "Tin học",
  "difficulty": "Vận dụng cao",
  "lesson": "Bài 20. Robot di chuyển và lệnh lặp — trang 25",
  "source": "Ôn tập 2026 – Đề TH3 – Câu 20",
  "content": "Lưới 6 hàng, 6 cột; hàng đếm từ trên xuống, cột từ trái sang phải. Robot ở hàng 5, cột 4, hướng lên trên. Lặp 3 lần: tiến 2 ô, quay phải 90° tại chỗ. Robot dừng ở đâu?",
  "options": [
   "Hàng 3, cột 4",
   "Hàng 3, cột 6",
   "Hàng 5, cột 4",
   "Hàng 5, cột 6"
  ],
  "answer": 3,
  "explanation": "Lần 1: lên 2 ô, đến (3; 4), quay sang phải. Lần 2: sang phải 2 ô, đến (3; 6), quay xuống. Lần 3: xuống 2 ô, đến (5; 6), quay sang trái. Vị trí cuối là hàng 5, cột 6; quay tại chỗ không đổi ô.\nLỗi dễ mắc: Đừng cho robot luôn tiến lên dù đã quay hướng. Khi hỏi vị trí cuối, không nhầm vị trí với hướng quay cuối.",
  "image": "img/ontap/h21.png"
 }
];
