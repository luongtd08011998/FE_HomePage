import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Pagination } from "antd";
import NewsCard from "@/components/NewsCard";
import CategoryFilter from "@/components/CategoryFilter";
import { articleService } from "@/services/article";
import { categoryService } from "@/services/category";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const categories = await categoryService.getAll();
    const cat = categories.find((c) => c.slug === slug);
    return { title: `${cat?.name ?? "Chuyên mục"} | TinTức` };
  } catch {
    return { title: "Chuyên mục | TinTức" };
  }
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { page: pageParam } = await searchParams;
  const page = Number(pageParam) || 1;

  let articles: Awaited<ReturnType<typeof articleService.getAll>>["result"] =
    [];
  let meta = { page: 1, pageSize: 9, total: 0, pages: 1 };
  let categories: Awaited<ReturnType<typeof categoryService.getAll>> = [];
  let categoryName = slug;

  try {
    const [articlesResult, categoriesResult] = await Promise.all([
      articleService.getAll({ page, size: 9, category: slug }),
      categoryService.getAll(),
    ]);
    articles = articlesResult.result;
    meta = articlesResult.meta;
    categories = categoriesResult;
    const found = categoriesResult.find((c) => c.slug === slug);
    if (!found) notFound();
    categoryName = found.name;
  } catch (err: unknown) {
    if ((err as { digest?: string })?.digest?.includes("NEXT_NOT_FOUND"))
      throw err;
    // API not available
  }

  function buildUrl(newPage: number) {
    return `/category/${slug}${newPage > 1 ? `?page=${newPage}` : ""}`;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">{categoryName}</h1>

      <div className="mb-8">
        <CategoryFilter
          categories={categories}
          activeSlug={slug}
          basePath="/category"
        />
      </div>

      {articles.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {articles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
          {meta.pages > 1 && (
            <div className="flex justify-center gap-2">
              {meta.page > 1 && (
                <a
                  href={buildUrl(meta.page - 1)}
                  className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  ← Trước
                </a>
              )}
              {meta.page < meta.pages && (
                <a
                  href={buildUrl(meta.page + 1)}
                  className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Tiếp →
                </a>
              )}
            </div>
          )}
        </>
      ) : (
        <p className="text-gray-500 text-center py-16">Chưa có bài viết nào.</p>
      )}
    </div>
  );
}
