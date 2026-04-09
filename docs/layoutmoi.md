Tổng thể layout
Dạng: 2 cột chính (grid)
Tỷ lệ:
Trái: ~70%
Phải: ~30%
Khoảng cách giữa 2 cột: ~20–24px
|----------------------|----------|
|        LEFT          |  RIGHT   |
|        (70%)         |  (30%)   |
|----------------------|----------|
🟦 Cột trái (MAIN CONTENT)
1. Banner / Slider lớn
Chiếm toàn bộ chiều ngang cột trái
Tỷ lệ: 16:9 hoặc 4:3
Có:
Logo lớn (SAWACO)
Background gradient / ảnh
Đây giống hero section
2. Section:  (3 card ngang) 
 {/* Service Cards */}(sửa cho phù hơp với layout nội dung giữ nguyên phần này)
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Hotline */}
        <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="mb-4 text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .94h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
              />
            </svg>
          </div>
          <p className="text-orange-500 font-semibold text-base mb-1">
            Hotline &nbsp;
            <a href="tel:19006366" className="font-bold hover:underline">
              0254 3 894 894
            </a>
          </p>
          <h3 className="text-blue-800 font-bold text-lg uppercase mb-3">
            Hỗ trợ trực tuyến
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Cung cấp dịch vụ tư vấn trực tuyến cho khách hàng, hỗ trợ tiếp nhận
            và đăng ký lắp đặt đồng hồ nước mới, đồng thời hỗ trợ đăng ký sửa
            chữa, thay thế và di dời hệ thống nước.
          </p>
        </div>

        {/* Tra cứu hóa đơn */}
        <Link
          href="/tra-cuu-hoa-don"
          className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="mb-4 text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <p className="text-orange-500 font-semibold text-base mb-1">&nbsp;</p>
          <h3 className="text-blue-800 font-bold text-lg uppercase mb-3">
            Tra cứu hóa đơn tiền nước
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Quý khách hàng có thể tra cứu hóa đơn tiền nước tại đây.
          </p>
        </Link>

        {/* Thanh toán trực tuyến */}
        <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="mb-4 text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p className="text-orange-500 font-semibold text-base mb-1">&nbsp;</p>
          <h3 className="text-blue-800 font-bold text-lg uppercase mb-3">
            Thanh toán qua App Ngân Hàng
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Khách hàng có thể thanh toán tiền nước trực tuyến qua app Ngân
            hàng.Trong phần Hóa đơn tiền nước chọn Công ty Nước Tóc Tiên.
          </p>
        </div>
      </div>

      Cột phải (SIDEBAR)

Chia thành nhiều block xếp dọc:

1. Box “Thông báo”
Cấu trúc:
Header màu xanh
Danh sách item dạng list
Mỗi item:
Icon chấm tròn (bullet)
Tiêu đề
Ngày (nhỏ, màu xám)
• Tiêu đề
  01/04/2026
----------------

👉 Đặc điểm:

Có divider giữa các item
Scroll nếu dài
2. Banner quảng cáo nhỏ
Ảnh ngang
Nội dung về khảo sát / dịch vụ
3. Banner app mobile
Ảnh 2 điện thoại
Kích thước lớn hơn banner trên
4. Bài cảnh báo (text block)
Gồm:
Title (đậm)
Đoạn mô tả ngắn