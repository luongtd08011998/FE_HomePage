import { categoryService } from "@/services/category";
import Header from "./Header";

export default async function HeaderWrapper() {
  let rootCategories: Awaited<ReturnType<typeof categoryService.getRoots>> = [];
  try {
    rootCategories = await categoryService.getRoots();
  } catch {
    // silently fail — header still renders without roots
  }
  return <Header rootCategories={rootCategories} />;
}
