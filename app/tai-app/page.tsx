import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { APP_LINKS } from "@/constants/appLinks";
import SmartDownloadClient from "@/components/app-download/SmartDownloadClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tải ứng dụng CSKH - Cấp Nước Tóc Tiên (iOS & Android)",
  description:
    "Tải ứng dụng chăm sóc khách hàng Cấp Nước Tóc Tiên chính thức trên Apple App Store và Google Play Store. Quét mã QR tự động nhận diện thiết bị.",
};

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function TaiAppPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const stay =
    resolvedSearchParams?.stay === "1" ||
    resolvedSearchParams?.preview === "1";

  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";

  const isIOS = /iphone|ipad|ipod/i.test(userAgent);
  const isAndroid = /android/i.test(userAgent);

  // Nếu người dùng quét mã từ điện thoại thật và không có tham số preview/stay,
  // Server-side chuyển hướng ngay lập tức đến đúng store:
  if (!stay) {
    if (isIOS) {
      redirect(APP_LINKS.appStore);
    }
    if (isAndroid) {
      redirect(APP_LINKS.googlePlay);
    }
  }

  // Trường hợp mở trên máy tính hoặc có cờ stay/preview: hiển thị giao diện landing page
  return (
    <SmartDownloadClient
      initialPlatform={isIOS ? "ios" : isAndroid ? "android" : "desktop"}
    />
  );
}
