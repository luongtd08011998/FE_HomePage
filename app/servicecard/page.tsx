import type { Metadata } from "next";
import ServiceCards from "@/components/ServiceCards";

export const metadata: Metadata = {
  title: "Dịch vụ khách hàng | Cấp nước Tóc Tiên",
  description:
    "Hotline hỗ trợ, tra cứu hóa đơn tiền nước và hướng dẫn thanh toán — Công ty TNHH Cấp Nước Tóc Tiên.",
};

export default function ServiceCardPage() {
  return <ServiceCards />;
}
