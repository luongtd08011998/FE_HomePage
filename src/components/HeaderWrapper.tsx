import { categoryService } from "@/services/category";
import Header from "./Header";

export default async function HeaderWrapper() {
  let categoryTree: Awaited<ReturnType<typeof categoryService.getTree>> = [];
  try {
    categoryTree = await categoryService.getTree();
  } catch {
    // silently fail — header still renders without tree
  }
  return <Header categoryTree={categoryTree} />;
}
