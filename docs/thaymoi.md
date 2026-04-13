# Thaymoi — Nội dung mới LichSuCongTy (trang chủ)

Tài liệu mô tả **nội dung và cấu trúc** block giới thiệu công ty trên website.

**Triển khai FE:** `src/components/LichSuCongTy.tsx`, được gắn trong `app/page.tsx`.

---

## Cấu trúc sections

| # | Section | Nội dung chính |
|---|---------|----------------|
| 1 | **Hero** | Badge "Giới Thiệu Công Ty", h1 "Thông Tin Chung", đoạn intro |
| 2 | **Highlights 4 ô** | Thành lập 1998, Công suất 80,500 m³/ngày, Quy hoạch 140,000, Nguồn nước 02 |
| 3 | **Hạ tầng cấp nước** | Card xanh (2 hồ + công suất trạm bơm) + grid 2×2 (Suối Nhum, Đá Đen, Trạm bơm, Tuyến ống) |
| 4 | **Nhà máy nước Tóc Tiên** | Giới thiệu + 5 bước quy trình + 2 thẻ Cụm xử lý |
| 5 | **Công nghệ & Kiểm soát** | Nền xanh đậm, 4 ô: SCADA, Phòng thí nghiệm, Công nghệ tiên tiến, Giám sát 24/7 |
| 6 | **Trang thiết bị** | 3 thẻ: Công nghệ thế kỷ 20, Bể HDPE, Khấu khuẩn Clorine |
| 7 | **Cam kết chất lượng** | Đoạn cam kết + 4 badge pill: ISO 9001:2015, Chuẩn Bộ Y Tế, Giám sát 24/7, Công nghệ quốc tế |

---

## Highlights (mảng data trong component)

| Nhãn | Giá trị | Đơn vị | Mô tả |
|------|---------|--------|-------|
| Thành lập | 1998 | — | Nhà máy tư nhân đầu tiên |
| Công suất hiện tại | 80,500 | m³/ngày | Đáp ứng nhu cầu toàn khu vực |
| Quy hoạch mở rộng | 140,000 | m³/ngày | Kế hoạch phát triển tương lai |
| Nguồn nước | 02 | — | Hồ Suối Nhum & Hồ Đá Đen |

---

## Nguồn nước & công suất trạm bơm

- **Suối Nhum:** 80,500 m³/ngày
- **Đá Đen:** 01,600 m³/ngày

---

## 5 bước quy trình xử lý nước

1. Hốc Tạp
2. Phèn Nhớ
3. Lắng
4. Lọc
5. Khấu Khuẩn

---

## Trang thiết bị

1. **Công nghệ thế kỷ 20** — Nhà máy đã sử dụng công nghệ tiên tiến từ các nước phát triển cho các thiết bị chính của nhà máy.
2. **Bể chứa HDPE** — Đơn lọc 02 lớp HDPE được sản xuất bởi Leopold - Hoa Kỳ, đảm bảo tối ưu hóa việc khuếch tán nước sau lọc.
3. **Khấu khuẩn Clorine** — Nước sau lọc được khử trùng bằng hệ thống clorin tự động đẳng khí hóa nhập khẩu từ Đức.

---

## Checklist cập nhật nội dung

- [ ] Sửa chữ trong mảng data (`highlights`, `treatmentProcess`, `features`, `equipment`, `qualityBadges`) trong `LichSuCongTy.tsx`.
- [ ] Kiểm tra mobile (grid 4 cột → 2/1, timeline dọc, 3 cột thiết bị → 1 cột).
- [ ] Chạy `npm run build` trước khi deploy.

---

**Ghi chú kỹ thuật:** Bản tham khảo gốc dùng `motion/react` và `lucide-react`. Dự án không cài các package đó — UI được làm bằng **Tailwind CSS + SVG inline**.
