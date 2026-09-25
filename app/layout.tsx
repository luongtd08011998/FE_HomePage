import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
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
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#0c2340]">
        <AntdRegistry>
          <HeaderWrapper />
          <main className="flex min-h-0 flex-1 flex-col">{children}</main>
          <Footer />
        </AntdRegistry>
      </body>
    </html>
  );
}
