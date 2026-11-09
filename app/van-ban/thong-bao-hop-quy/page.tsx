import type { Metadata } from "next";

const IMAGE_URL = "/van-ban/thong-bao-hop-quy.jpg";

export const metadata: Metadata = {
  title: "Thông báo hợp quy",
  description: "Thông báo công bố hợp quy của Công ty TNHH Cấp nước Tóc Tiên.",
};

/**
 * Hiển thị trực tiếp bản công bố dưới dạng ảnh (trích từ file PDF cùng tên trong public/van-ban)
 * để hiện ngay trên cả desktop lẫn mobile — trình duyệt điện thoại không nhúng được PDF.
 */
export default function ThongBaoHopQuyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={IMAGE_URL}
        alt="Bản công bố hợp quy"
        className="block h-auto w-full"
      />
    </div>
  );
}
