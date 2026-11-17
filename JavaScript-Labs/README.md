# JavaScript-Labs – Thực hành Chương 4: JavaScript

Bài thực hành cá nhân môn **Phát triển ứng dụng TMĐT** (UEH) – Giảng viên: TS Nguyễn Mạnh Tuấn.

## Thông tin sinh viên

| | |
|---|---|
| Họ và tên | **[Họ và tên]** |
| Mã số sinh viên | **[MSSV]** |
| Lớp học phần | **[Lớp học phần]** |
| GitHub | https://github.com/Hagiang546 |

## Mục tiêu

Hoàn thành 3 bài Lab và vận dụng JavaScript để xây dựng các chức năng tương tác thường gặp trong website thương mại điện tử (tính tiền giỏ hàng, kiểm tra biểu mẫu, lọc sản phẩm, tải dữ liệu bằng GET request):

1. **Lab 08 – JavaScript 1: Language Foundations**
2. **Lab 09 – JavaScript 2: DOM and Events**
3. **Lab 10 – JavaScript 3: jQuery**

## Đường dẫn GitHub Pages

- Trang chủ: https://hagiang546.github.io/con-cung-ui-improvement/JavaScript-Labs/
- Lab 08: https://hagiang546.github.io/con-cung-ui-improvement/JavaScript-Labs/Lab08/
- Lab 09: https://hagiang546.github.io/con-cung-ui-improvement/JavaScript-Labs/Lab09/
- Lab 10: https://hagiang546.github.io/con-cung-ui-improvement/JavaScript-Labs/Lab10/

## Cấu trúc thư mục

```
JavaScript-Labs/
├── index.html            Trang chủ (portfolio): thông tin cá nhân, giới thiệu, liên kết 3 Lab, tổng kết
├── README.md
├── css/style.css         CSS dùng chung cho trang chủ và các Exercise
├── js/
│   ├── main.js           Giỏ hàng thử nghiệm trên trang chủ
│   └── utils.js          Hàm dùng chung ($id, vnd, escapeHtml)
├── images/avatar.jpg     Ảnh đại diện (tự thêm)
├── Lab08/                index.html + Exercise01 … Exercise09
├── Lab09/                index.html + Exercise01 … Exercise06
└── Lab10/                index.html + Exercise01 … Exercise07 (Exercise07 có products.json)
```

Mỗi thư mục `ExerciseNN/` gồm `index.html` (giao diện) và `script.js` (mã JavaScript của Exercise đó).

## Nội dung từng Lab

**Lab 08 – Language Foundations**

| Exercise | Nội dung |
|---|---|
| 8.1 | Enabling/Disabling JavaScript (`<noscript>`) |
| 8.2 | Nhúng JavaScript: inline, internal, external |
| 8.3 | Biến, kiểu dữ liệu, toán tử |
| 8.4 | Hàm và cấu trúc điều khiển (if, switch, for, while) |
| 8.5 | String (có hàm tạo slug) |
| 8.6 | Date |
| 8.7 | Array |
| 8.8 | Object |
| 8.9 | Browser Console và gỡ lỗi |

**Lab 09 – DOM and Events**

| Exercise | Nội dung |
|---|---|
| 9.1 | Chọn phần tử HTML |
| 9.2 | Đổi nội dung, thuộc tính, kiểu dáng |
| 9.3 | Tạo, thêm, xóa phần tử (giỏ hàng) |
| 9.4 | Simple Event Handling |
| 9.5 | Biểu mẫu đăng ký và kiểm tra dữ liệu |
| 9.6 | Event Debugging (bubbling, event object) |

**Lab 10 – jQuery**

| Exercise | Nội dung |
|---|---|
| 10.1 | Cài đặt jQuery (CDN + bản dự phòng) |
| 10.2 | Selectors |
| 10.3 | Events |
| 10.4 | Thêm và thao tác phần tử DOM |
| 10.5 | Hiệu ứng show/hide, fade, slide |
| 10.6 | Simple jQuery Animation |
| 10.7 | GET Requests và jqXHR |

## Hướng dẫn truy cập và chạy thử

- **Xem online:** mở trang chủ GitHub Pages ở trên, chọn Lab → Exercise.
- **Chạy trên máy:** mở thư mục trong VS Code, cài tiện ích *Live Server*, nhấp phải `index.html` → *Open with Live Server*.
  Exercise 10.7 đọc file `products.json` nên cần chạy qua Live Server hoặc GitHub Pages (mở trực tiếp bằng `file:///` sẽ bị trình duyệt chặn).
- Các Exercise ở Lab 10 nạp jQuery 3.7.1 từ CDN (`code.jquery.com`), có bản dự phòng từ cdnjs, nên cần kết nối Internet.

## Sử dụng công cụ AI

Mình có dùng công cụ AI để hỗ trợ dựng khung mã nguồn. Mình đã tự chạy thử từng Exercise, đọc và hiểu mã, chỉnh sửa khi cần, và tự viết phần giới thiệu, tổng kết trên trang chủ. <!-- Chỉnh lại đoạn này cho đúng với cách bạn làm -->
