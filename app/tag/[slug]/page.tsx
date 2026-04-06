import { notFound } from "next/navigation";
import type { Metadata } from "next";
import NewsCard from "@/components/NewsCard";
import { articleService } from "@/services/article";
import { tagService } from "@/services/tag";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const tags = await tagService.getAll();
    const tag = tags.find((t) => t.slug === slug);
    return { title: `#${tag?.name ?? slug} | TinTức` };
  } catch {
    return { title: `Tag | TinTức` };
  }
}

export default async function TagPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { page: pageParam } = await searchParams;
  const page = Number(pageParam) || 1;

  let articles: Awaited<ReturnType<typeof articleService.getAll>>["result"] =
    [];
  let meta = { page: 1, pageSize: 9, total: 0, pages: 1 };
  let tagName = `#${slug}`;

  try {
    const [articlesResult, tagsResult] = await Promise.all([
      articleService.getAll({ page, size: 9, tag: slug }),
      tagService.getAll(),
    ]);
    articles = articlesResult.result;
    meta = articlesResult.meta;
    const found = tagsResult.find((t) => t.slug === slug);
    if (!found) notFound();
    tagName = `#${found.name}`;
  } catch (err: unknown) {
    if ((err as { digest?: string })?.digest?.includes("NEXT_NOT_FOUND"))
      throw err;
    // API not available
  }

  function buildUrl(newPage: number) {
    return `/tag/${slug}${newPage > 1 ? `?page=${newPage}` : ""}`;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">{tagName}</h1>

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
