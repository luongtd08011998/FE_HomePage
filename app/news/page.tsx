import ArticleListView from "@/components/article/ArticleListView";
import ArticleListPagination from "@/components/article/ArticleListPagination";
import { articleService } from "@/services/article";
import { categoryService } from "@/services/category";
import type { Article, PaginatedMeta } from "@/types";

interface NewsPageProps {
  searchParams: Promise<{ page?: string; category?: string }>;
}

export const metadata = {
  title: "Tin tức | TinTức",
};

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const categorySlug = params.category;

  let articles: Article[] = [];
  let meta: PaginatedMeta = { page: 1, pageSize: 9, total: 0, pages: 1 };
  let categories: Awaited<ReturnType<typeof categoryService.getAll>> = [];

  try {
    categories = await categoryService.getAll();
  } catch (err) {
    console.error("[NewsPage] categories error:", err);
  }

  try {
    if (categorySlug) {
      const articlesResult = await categoryService.getArticlesBySlug(categorySlug, {
        page,
        size: 9,
      });
      articles = articlesResult.result;
      meta = articlesResult.meta;
    } else {
      const articlesResult = await articleService.getAll({ page, size: 9 });
      articles = articlesResult.result;
      meta = articlesResult.meta;
    }
  } catch (err) {
    console.error("[NewsPage] articles error:", err);
  }

  function buildUrl(newPage: number) {
    const qs = new URLSearchParams();
    if (newPage > 1) qs.set("page", String(newPage));
    if (categorySlug) qs.set("category", categorySlug);
    return `/news${qs.toString() ? `?${qs}` : ""}`;
  }

  return (
    <ArticleListView
      heroTitle="Tin tức"
      heroDescription="Cập nhật những thông tin mới nhất về dịch vụ, chính sách và hoạt động của công ty"
      articles={articles}
      totalCount={meta.total}
      categories={categories}
      activeCategorySlug={categorySlug ?? null}
      showCategoryTabs
    >
      <ArticleListPagination current={meta.page} lastPage={meta.pages} buildUrl={buildUrl} />
    </ArticleListView>
  );
}
