import { categoryService } from "@/services/category";
import Header from "./Header";

export default async function HeaderWrapper() {
  let categories: Awaited<ReturnType<typeof categoryService.getAll>> = [];
  try {
    categories = await categoryService.getAll();
  } catch {
    // silently fail — header still renders without categories
  }
  return <Header categories={categories} />;
}
