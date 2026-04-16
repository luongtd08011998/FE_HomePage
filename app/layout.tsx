import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "CẤP NƯỚC TÓC TIÊN",
  description: "Đọc tin tức nhanh, chính xác và cập nhật nhất",
  icons: {
    icon: "/logocty1.jpg",
  },
};

/** Header gọi API danh mục — tránh menu đóng băng từ lúc build. */
export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50">
        <AntdRegistry>
          <HeaderWrapper />
          <main className="flex min-h-0 flex-1 flex-col">{children}</main>
          <Footer />
        </AntdRegistry>
      </body>
    </html>
  );
}
