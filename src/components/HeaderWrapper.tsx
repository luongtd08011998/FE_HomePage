import { categoryService } from "@/services/category";
import Header from "./Header";
import type { CategoryNode } from "@/types";

const FALLBACK_CATEGORY_TREE = [
  {
    id: 15,
    name: "Giới thiệu",
    slug: "gioi-thieu",
    active: 1,
    children: [
      { id: 33, name: "Hoạt động và sự kiện", slug: "hoat-dong-su-kien", active: 1, children: [] },
      { id: 49, name: "Hình thành và phát triển", slug: "hinh-thanh-phat-trien", active: 1, children: [] },
      { id: 50, name: "Liên hệ", slug: "lien-he-cong-ty", active: 1, children: [] },
    ],
  },
  {
    id: 19,
    name: "Tin tức",
    slug: "tin-tuc",
    active: 1,
    children: [],
  },
  {
    id: 21,
    name: "Quan hệ khách hàng",
    slug: "quan-he-khach-hang",
    active: 1,
    children: [
      { id: 22, name: "Giá nước sinh hoạt", slug: "gia-nuoc-sinh-hoat", active: 1, children: [] },
      { id: 43, name: "Tra cứu hóa đơn", slug: "tra-cuu-hoa-don", active: 1, children: [] },
      { id: 44, name: "Đăng ký lắp đặt trực tuyến", slug: "dang-ky-lap-dat-truc-tuyen", active: 1, children: [] },
    ],
  },
  {
    id: 46,
    name: "Văn bản",
    slug: "van-ban",
    active: 1,
    children: [
      { id: 20, name: "Xét nghiệm nước", slug: "xet-nghiem-nuoc", active: 1, children: [] },
      { id: 48, name: "Văn bản khác", slug: "van-ban-khac", active: 1, children: [] },
    ],
  },
  {
    id: 47,
    name: "Lịch cúp nước - bảo dưỡng",
    slug: "lich-cup-nuoc-bao-duong",
    active: 1,
    children: [],
  },
];

export default async function HeaderWrapper() {
  let categoryTree: Awaited<ReturnType<typeof categoryService.getTree>> = [];
  try {
    categoryTree = await categoryService.getTree();
  } catch {
    // silently fail — header still renders with fallback tree
  }

  const finalTree =
    categoryTree && categoryTree.length > 0
      ? categoryTree
      : (FALLBACK_CATEGORY_TREE as unknown as CategoryNode[]);

  return <Header categoryTree={finalTree} />;
}

