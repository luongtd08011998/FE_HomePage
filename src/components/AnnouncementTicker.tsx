import { Megaphone } from "lucide-react";

const OFFICE_EMAIL = "office@toctienltd.vn";

/**
 * Dải thông báo đặt ngay dưới thanh điều hướng: biểu tượng cái loa + chữ THÔNG BÁO cố định bên trái,
 * chữ chạy từ phải sang trái trong khung bên phải (bị cắt tại mép khung).
 * Di chuột vào để tạm dừng; tắt chuyển động nếu người dùng bật "giảm chuyển động".
 */
export default function AnnouncementTicker() {
  const message = (
    <>
      <strong className="font-bold">
        THÔNG BÁO VỀ VIỆC TRIỂN KHAI APP CSKH CNTOCTIEN.
      </strong>{" "}
      Kể từ tháng 01/2027, kênh liên hệ và tương tác chính thức với khách hàng
      của Công ty TNHH Cấp nước Tóc Tiên sẽ bao gồm: Ứng dụng{" "}
      <strong className="font-bold">CSKH CNTOCTIEN</strong> và Email:{" "}
      <a
        href={`mailto:${OFFICE_EMAIL}`}
        className="font-bold underline underline-offset-2"
      >
        {OFFICE_EMAIL}
      </a>
      .
    </>
  );

  return (
    <div
      role="region"
      aria-label="Thông báo"
      className="announcement-ticker w-full text-sm font-medium text-[#0c2340]"
    >
      {/* Cùng bề ngang với phần body (max-w-7xl + padding giống trang chủ).
          Khoảng cách phía trên/dưới thanh rất nhỏ (py-1). */}
      <div className="mx-auto w-full max-w-7xl px-4 pt-1 sm:px-6">
        <div className="flex items-stretch overflow-hidden rounded-xl border border-sky-200 bg-sky-50">
          {/* Chỉ phần icon + chữ THÔNG BÁO có nền xanh chính của web */}
          <div className="flex shrink-0 items-center gap-1.5 bg-[#0c2340] px-4 py-2.5 font-bold uppercase text-[#1cd0b4]">
            <Megaphone className="announcement-ticker__bell h-4 w-4" aria-hidden />
            <span>Thông báo</span>
          </div>
          <div className="min-w-0 flex-1 overflow-hidden pl-3 pr-4">
            {/* Chỉ 1 bản chữ: vào từ mép phải, chạy hết ra khỏi khung bên trái rồi mới chạy lại */}
            <div className="announcement-ticker__track py-2.5">{message}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
