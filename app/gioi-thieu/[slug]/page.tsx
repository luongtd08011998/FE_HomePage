import { notFound } from "next/navigation";
import type { Metadata } from "next";

import LichSuCongTy from "@/components/LichSuCongTy";
import QuyTrinhXuLyNuoc from "@/components/QuyTrinhXuLyNuoc";
import KhuVucPhucVu from "@/components/KhuVucPhucVu";

interface Props {
  params: Promise<{ slug: string }>;
}

function introTitleFromSlug(slug: string): string {
  const s = slug.toLowerCase();
  if (s.includes("lich-su")) return "Lịch sử phát triển";
  if (s.includes("quy-trinh")) return "Quy trình xử lí nước";
  if (s.includes("pham-vi") || s.includes("khu-vuc")) return "Phạm vi cấp nước";
  return "Giới thiệu";
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: `${introTitleFromSlug(slug)} | Giới thiệu` };
}

export default async function GioiThieuDetailPage({ params }: Props) {
  const { slug } = await params;
  const s = slug.toLowerCase();

  if (s.includes("lich-su")) return <LichSuCongTy />;
  if (s.includes("quy-trinh")) return <QuyTrinhXuLyNuoc />;
  if (s.includes("pham-vi") || s.includes("khu-vuc")) return <KhuVucPhucVu />;

  notFound();
}

