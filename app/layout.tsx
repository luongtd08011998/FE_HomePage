import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cấp nước Tóc Tiên",
  description: "Đọc tin tức nhanh, chính xác và cập nhật nhất",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-50">
        <AntdRegistry>
          <HeaderWrapper />
          <main className="flex-1">{children}</main>
          <Footer />
        </AntdRegistry>
      </body>
    </html>
  );
}
