import type { Metadata } from "next";

// Các trang được trích từ public/van-ban/thong-bao-hop-quy.pdf
// (thay PDF thì chạy lại: pdftoppm -jpeg -r 170 thong-bao-hop-quy.pdf thong-bao-hop-quy)
const PAGE_IMAGES = [
  "/van-ban/thong-bao-hop-quy-1.jpg",
  "/van-ban/thong-bao-hop-quy-2.jpg",
];

export const metadata: Metadata = {
  title: "Thông báo hợp quy",
  description: "Thông báo công bố hợp quy của Công ty TNHH Cấp nước Tóc Tiên.",
};

/**
 * Hiển thị trực tiếp bản công bố dưới dạng ảnh để hiện ngay trên cả desktop lẫn mobile
 * (trình duyệt điện thoại không nhúng được PDF).
 */
export default function ThongBaoHopQuyPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-6">
      {PAGE_IMAGES.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={`Bản công bố hợp quy - trang ${i + 1}`}
          className="block h-auto w-full"
        />
      ))}
    </div>
  );
}
