import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tra cứu hóa đơn | Cấp nước Tóc Tiên",
  description: "Đăng nhập và tra cứu hóa đơn tiền nước",
};

export default function TraCuuHoaDonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
