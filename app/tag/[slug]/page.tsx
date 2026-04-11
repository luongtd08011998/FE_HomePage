import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleListView from "@/components/article/ArticleListView";
import ArticleListPagination from "@/components/article/ArticleListPagination";
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
    if ((err as { digest?: string })?.digest?.includes("NEXT_NOT_FOUND")) throw err;
  }

  function buildUrl(newPage: number) {
    return `/tag/${slug}${newPage > 1 ? `?page=${newPage}` : ""}`;
  }

  return (
    <ArticleListView
      heroTitle={tagName}
      heroDescription="Các bài viết được gắn thẻ này — sắp xếp theo thời gian mới nhất."
      articles={articles}
      totalCount={meta.total}
      showCategoryTabs={false}
    >
      <ArticleListPagination current={meta.page} lastPage={meta.pages} buildUrl={buildUrl} />
    </ArticleListView>
  );
}
