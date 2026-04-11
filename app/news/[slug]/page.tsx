import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { Tag } from "antd";
import ArticleContent from "@/components/ArticleContent";
import NewsCard from "@/components/NewsCard";
import { articleService } from "@/services/article";
import { categoryService } from "@/services/category";
import type { CategoryNode } from "@/types";

function resolveThumb(thumbnail: string): string {
  if (!thumbnail) return "/placeholder.svg";
  if (thumbnail.startsWith("http")) return thumbnail;
  return `${process.env.NEXT_PUBLIC_MEDIA_URL || "http://localhost:8080"}${thumbnail}`;
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const article = await articleService.getBySlug(slug);
    return {
      title: `${article.title} | TinTức`,
      openGraph: {
        title: article.title,
        images: article.thumbnail
          ? [{ url: resolveThumb(article.thumbnail) }]
          : [],
      },
    };
  } catch {
    return { title: "Bài viết | TinTức" };
  }
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;

  let article: Awaited<ReturnType<typeof articleService.getBySlug>> | null =
    null;
  let related: Awaited<ReturnType<typeof articleService.getAll>>["result"] = [];

  try {
    article = await articleService.getBySlug(slug);
  } catch {
    // Article not found — check if slug matches a category and redirect
    try {
      const tree = await categoryService.getTree();
      function findSlug(nodes: CategoryNode[]): boolean {
        for (const n of nodes) {
          if (n.slug === slug) return true;
          if (n.children?.length && findSlug(n.children)) return true;
        }
        return false;
      }
      if (findSlug(tree)) redirect(`/category/${slug}`);
    } catch {
      // ignore
    }
    notFound();
  }

  if (!article) notFound();

  try {
    const result = await articleService.getRelated(article.id, {
      page: 1,
      size: 4,
    });
    related = result.result;
  } catch {
    // no related articles
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="lg:grid lg:grid-cols-4 lg:gap-10">
        {/* Main content */}
        <article className="lg:col-span-3">
          {/* Hero thumbnail */}
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-6">
            <Image
              src={resolveThumb(article.thumbnail)}
              alt={article.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-2 mb-4">
            {article.category ? (
              <Tag color="blue">{article.category.name}</Tag>
            ) : (
              <Tag>Chưa phân loại</Tag>
            )}
            {(article.tags ?? []).map((tag) => (
              <Tag key={tag.id}>{tag?.name ?? "—"}</Tag>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 leading-snug mb-3">
            {article.title}
          </h1>

          <p className="text-sm text-gray-400 mb-8">
            {new Date(article.createdAt).toLocaleDateString("vi-VN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            {" · "}
            {article.views} lượt xem
          </p>

          {/* Content */}
          <ArticleContent content={article.content} />
        </article>

        {/* Sidebar */}
        {related.length > 0 && (
          <aside className="mt-10 lg:mt-0">
            <div className="sticky top-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Bài liên quan
              </h2>
              <div className="flex flex-col gap-4">
                {related.map((rel) => (
                  <NewsCard key={rel.id} article={rel} />
                ))}
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
