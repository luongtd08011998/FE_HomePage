import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { headers } from "next/headers";
import ArticleContent from "@/components/ArticleContent";
import ArticleActionBar from "@/components/article/ArticleActionBar";
import ArticleNewsletterCta from "@/components/article/ArticleNewsletterCta";
import RelatedArticlesBlock from "@/components/article/RelatedArticlesBlock";
import { articleService } from "@/services/article";
import { categoryService } from "@/services/category";
import { estimateReadMinutes } from "@/lib/articleText";
import type { CategoryNode } from "@/types";

function resolveThumb(thumbnail: string): string {
  if (!thumbnail) return "/placeholder.svg";
  if (thumbnail.startsWith("http")) return thumbnail;
  return `${process.env.NEXT_PUBLIC_MEDIA_URL || "http://localhost:8080"}${thumbnail}`;
}

async function buildShareUrl(slug: string): Promise<string> {
  const envBase = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (envBase) return `${envBase}/news/${slug}`;
  try {
    const h = await headers();
    const host = h.get("x-forwarded-host") ?? h.get("host");
    if (!host) return "";
    const proto = h.get("x-forwarded-proto") ?? "https";
    return `${proto}://${host}/news/${slug}`;
  } catch {
    return "";
  }
}

function IconChevron({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconUser({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

function IconCalendar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function IconTag({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  );
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
        images: article.thumbnail ? [{ url: resolveThumb(article.thumbnail) }] : [],
      },
    };
  } catch {
    return { title: "Bài viết | TinTức" };
  }
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;

  let article: Awaited<ReturnType<typeof articleService.getBySlug>> | null = null;
  let related: Awaited<ReturnType<typeof articleService.getAll>>["result"] = [];

  try {
    article = await articleService.getBySlug(slug);
  } catch {
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
    const result = await articleService.getRelated(article.id, { page: 1, size: 4 });
    related = result.result;
  } catch {
    // no related articles
  }

  const shareUrl = await buildShareUrl(article.slug);
  const readMinutes = estimateReadMinutes(article.content);
  const published = new Date(article.createdAt).toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumb — theo Details.md */}
      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 md:px-6">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-blue-600">
              Trang chủ
            </Link>
            <IconChevron className="h-4 w-4 shrink-0 text-gray-400" />
            <Link href="/news" className="transition-colors hover:text-blue-600">
              Tin tức
            </Link>
            <IconChevron className="h-4 w-4 shrink-0 text-gray-400" />
            <span className="line-clamp-1 text-gray-900">
              {article.category?.name ?? "Bài viết"}
            </span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <header className="mb-8">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                  {article.category?.name ?? "Chưa phân loại"}
                </span>
                <span className="text-gray-400" aria-hidden>
                  •
                </span>
                <span className="flex items-center gap-1 text-sm text-gray-500">
                  <IconClock className="h-4 w-4 shrink-0" />
                  {readMinutes} phút đọc
                </span>
              </div>

              <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-gray-200 pb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <IconUser className="h-4 w-4 shrink-0" />
                  <span className="text-sm">{article.author?.name ?? "Ban biên tập"}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <IconCalendar className="h-4 w-4 shrink-0" />
                  <span className="text-sm">{published}</span>
                </div>
              </div>
            </header>

            <ArticleActionBar shareUrl={shareUrl} title={article.title} slug={article.slug} />

            <div className="mb-8 overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200/60">
              <div className="relative aspect-[16/9] w-full min-h-[220px] md:min-h-[360px]">
                <Image
                  src={resolveThumb(article.thumbnail)}
                  alt={article.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>
            </div>

            <div className="mb-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
              <ArticleContent content={article.content} />
            </div>

            {article.tags && article.tags.length > 0 ? (
              <div className="mb-10 flex flex-wrap items-center gap-2">
                <IconTag className="h-4 w-4 shrink-0 text-gray-500" />
                {article.tags.map((tag) =>
                  tag ? (
                    <Link
                      key={tag.id}
                      href={`/tag/${tag.id}`}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-blue-100 hover:text-blue-700"
                    >
                      {tag.name}
                    </Link>
                  ) : null,
                )}
              </div>
            ) : null}
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <RelatedArticlesBlock articles={related} />
              <ArticleNewsletterCta />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
