import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Đăng nhập và tra cứu hóa đơn tiền nước",
};

export default function TraCuuHoaDonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
