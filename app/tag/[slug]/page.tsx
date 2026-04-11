import { notFound } from "next/navigation";
import type { Metadata } from "next";
import NewsCard from "@/components/NewsCard";
import { CARD_HOVER_CLASS } from "@/lib/cardHover";
import { tagService } from "@/services/tag";
import type { Article, PaginatedMeta } from "@/types";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const isId = /^\d+$/.test(slug);
    if (isId) {
      const tags = await tagService.getAll();
      const tag = tags.find((t) => t.id === Number(slug));
      return { title: `#${tag?.name ?? slug} | TinTức` };
    }
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

  let articles: Article[] = [];
  let meta: PaginatedMeta = { page: 1, pageSize: 9, total: 0, pages: 1 };
  let tagName = `#${slug}`;

  try {
    const isId = /^\d+$/.test(slug);
    let tagId: number;

    if (isId) {
      tagId = Number(slug);
      const tags = await tagService.getAll();
      const found = tags.find((t) => t.id === tagId);
      if (found) tagName = `#${found.name}`;
    } else {
      const tagsResult = await tagService.getAll();
      const found = tagsResult.find((t) => t.slug === slug);
      if (!found) notFound();
      tagName = `#${found.name}`;
      tagId = found.id;
    }

    const articlesResult = await tagService.getArticles(tagId, {
      page,
      size: 9,
    });
    articles = articlesResult.result;
    meta = articlesResult.meta;
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
                  className={`inline-block px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 ${CARD_HOVER_CLASS}`}
                >
                  ← Trước
                </a>
              )}
              {meta.page < meta.pages && (
                <a
                  href={buildUrl(meta.page + 1)}
                  className={`inline-block px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 ${CARD_HOVER_CLASS}`}
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
