import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleListView from "@/components/article/ArticleListView";
import ArticleListPagination from "@/components/article/ArticleListPagination";
import { categoryService } from "@/services/category";
import type { Article, PaginatedMeta } from "@/types";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Keep site title constant (defined in app/layout.tsx).
  // Do not override `title` per-category.
  await params;
  return {};
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { page: pageParam } = await searchParams;
  const page = Number(pageParam) || 1;

  let articles: Article[] = [];
  let meta: PaginatedMeta = { page: 1, pageSize: 9, total: 0, pages: 1 };
  let categories: { id: number; name: string; slug: string }[] = [];
  let categoryName = slug;

  try {
    const [articlesResult, tree] = await Promise.all([
      categoryService.getArticlesBySlug(slug, { page, size: 9 }),
      categoryService.getTree(),
    ]);

    articles = articlesResult.result;
    meta = articlesResult.meta;

    function categoryTitleFromTree(nodes: typeof tree): string | undefined {
      for (const n of nodes) {
        if (n.slug === slug) return n.name;
        if (n.children?.length) {
          const found = categoryTitleFromTree(n.children);
          if (found) return found;
        }
      }
    }

    if (articles.length > 0) {
      const fromArticle = articles[0].category?.name;
      if (fromArticle) categoryName = fromArticle;
      else {
        const name = categoryTitleFromTree(tree);
        if (name) categoryName = name;
      }
    } else {
      const name = categoryTitleFromTree(tree);
      if (!name) notFound();
      categoryName = name!;
    }

    categories = tree.map((n) => ({ id: n.id, name: n.name, slug: n.slug }));
  } catch (err: unknown) {
    if ((err as { digest?: string })?.digest?.includes("NEXT_NOT_FOUND")) throw err;
  }

  function buildUrl(newPage: number) {
    return `/category/${slug}${newPage > 1 ? `?page=${newPage}` : ""}`;
  }

  return (
    <ArticleListView
      heroTitle={categoryName}
      heroDescription="Danh sách bài viết theo chuyên mục — cập nhật liên tục."
      articles={articles}
      totalCount={meta.total}
      categories={categories}
      activeCategorySlug={slug}
      showCategoryTabs
    >
      <ArticleListPagination current={meta.page} lastPage={meta.pages} buildUrl={buildUrl} />
    </ArticleListView>
  );
}
