import type { Metadata } from "next";

const PDF_URL = "/van-ban/thong-bao-hop-quy.pdf";
// Ẩn thanh công cụ và khung ảnh thu nhỏ của trình xem PDF, vừa chiều ngang khung
const PDF_VIEW_URL = `${PDF_URL}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`;

export const metadata: Metadata = {
  title: "Thông báo hợp quy",
  description: "Thông báo công bố hợp quy của Công ty TNHH Cấp nước Tóc Tiên.",
};

export default function ThongBaoHopQuyPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6">
      <iframe
        src={PDF_VIEW_URL}
        title="Thông báo hợp quy"
        className="block h-[calc(100vh-8rem)] min-h-[600px] w-full border-0"
      />
    </div>
  );
}

