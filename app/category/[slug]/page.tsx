import { notFound } from "next/navigation";
import type { Metadata } from "next";
import NewsCard from "@/components/NewsCard";
import CategoryFilter from "@/components/CategoryFilter";
import { categoryService } from "@/services/category";
import type { Article, Category, PaginatedMeta } from "@/types";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const result = await categoryService.getArticlesBySlug(slug, { size: 1 });
    // Get category name from first article if available
    const catName = result.result[0]?.category?.name;
    return { title: `${catName ?? "Chuyên mục"} | TinTức` };
  } catch {
    return { title: "Chuyên mục | TinTức" };
  }
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { page: pageParam } = await searchParams;
  const page = Number(pageParam) || 1;

  let articles: Article[] = [];
  let meta: PaginatedMeta = { page: 1, pageSize: 9, total: 0, pages: 1 };
  let categories: Category[] = [];
  let categoryName = slug;

  try {
    const [articlesResult, tree] = await Promise.all([
      categoryService.getArticlesBySlug(slug, { page, size: 9 }),
      categoryService.getTree(),
    ]);

    articles = articlesResult.result;
    meta = articlesResult.meta;

    // Category name from first article or tree lookup
    if (articles.length > 0) {
      categoryName = articles[0].category.name;
    } else {
      // Try tree lookup when no articles
      function findName(nodes: typeof tree): string | undefined {
        for (const n of nodes) {
          if (n.slug === slug) return n.name;
          if (n.children?.length) {
            const found = findName(n.children);
            if (found) return found;
          }
        }
      }
      const name = findName(tree);
      if (!name) notFound();
      categoryName = name!;
    }

    categories = tree.map((n) => ({ id: n.id, name: n.name, slug: n.slug }));
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
