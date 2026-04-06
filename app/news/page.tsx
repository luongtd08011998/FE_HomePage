import { redirect } from "next/navigation";
import NewsCard from "@/components/NewsCard";
import CategoryFilter from "@/components/CategoryFilter";
import { articleService } from "@/services/article";
import { categoryService } from "@/services/category";

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

  let articles: Awaited<ReturnType<typeof articleService.getAll>>["result"] =
    [];
  let meta = { page: 1, pageSize: 9, total: 0, pages: 1 };
  let categories: Awaited<ReturnType<typeof categoryService.getAll>> = [];

  try {
    const articlesResult = await articleService.getAll({
      page,
      size: 9,
      category: categorySlug,
    });
    articles = articlesResult.result;
    meta = articlesResult.meta;
  } catch (err) {
    console.error("[NewsPage] articles error:", err);
  }

  try {
    categories = await categoryService.getAll();
  } catch (err) {
    console.error("[NewsPage] categories error:", err);
  }

  function buildUrl(newPage: number) {
    const qs = new URLSearchParams();
    if (newPage > 1) qs.set("page", String(newPage));
    if (categorySlug) qs.set("category", categorySlug);
    return `/news${qs.toString() ? `?${qs}` : ""}`;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Tin tức</h1>

      {/* Category filter */}
      <div className="mb-8">
        <CategoryFilter
          categories={categories}
          activeSlug={categorySlug}
          basePath="/category"
        />
      </div>

      {/* Articles grid */}
      {articles.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {articles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>

          <PaginationNav
            current={meta.page}
            lastPage={meta.pages}
            buildUrl={buildUrl}
          />
        </>
      ) : (
        <p className="text-gray-500 text-center py-16">Chưa có bài viết nào.</p>
      )}
    </div>
  );
}

// Server-rendered pagination links for SEO
function PaginationNav({
  current,
  lastPage,
  buildUrl,
}: {
  current: number;
  lastPage: number;
  buildUrl: (page: number) => string;
}) {
  if (lastPage <= 1) return null;
  return (
    <div className="flex justify-center gap-2 mt-4">
      {current > 1 && (
        <a
          href={buildUrl(current - 1)}
          className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          ← Trước
        </a>
      )}
      {current < lastPage && (
        <a
          href={buildUrl(current + 1)}
          className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Tiếp →
        </a>
      )}
    </div>
  );
}
