import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import ArticleContent from "@/components/ArticleContent";
import ArticleViewTracker from "@/components/article/ArticleViewTracker";
import ReadingProgressBar from "@/components/article/ReadingProgressBar";
import { articleService } from "@/services/article";
import { categoryService } from "@/services/category";
import { estimateReadMinutes } from "@/lib/articleText";
import { publicMediaUrl } from "@/lib/publicMediaUrl";
import type { CategoryNode } from "@/types";

function resolveThumb(thumbnail: string): string {
  if (!thumbnail) return "/placeholder.svg";
  return publicMediaUrl(thumbnail);
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

function IconEye({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
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
  // Keep metadata consistent across pages (see app/layout.tsx).
  // This route should not derive metadata from article content.
  await params;
  return {};
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

  const readMinutes = estimateReadMinutes(article.content);
  const published = new Date(article.createdAt).toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f2fe] via-[#f8fafb] to-[#dbeafe]">
      <ReadingProgressBar />
      <ArticleViewTracker slug={article.slug} />
      <main className="pt-20">
        <article className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <div className="mb-6">
              <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold tracking-wider text-amber-900 uppercase">
                {article.category?.name ?? "Bài viết"}
              </span>
            </div>

            <h1 className="mb-6 text-xl font-bold leading-snug tracking-tight text-[#0c4a6e] sm:text-2xl lg:text-3xl">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 border-b border-amber-900/10 pb-8">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full border-2 border-amber-200 bg-white text-sm font-semibold text-amber-900 shadow-sm">
                  {(article.author?.name ?? "B")[0]?.toUpperCase()}
                </div>
                <div>
                  <div className="text-sm font-semibold text-amber-950">
                    {article.author?.name ?? "Ban biên tập"}
                  </div>
                  <div className="text-xs text-amber-700">Cập nhật tin tức</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-amber-700">
                <span className="flex items-center gap-1.5">
                  <IconCalendar className="h-4 w-4" />
                  {published}
                </span>
                <span className="flex items-center gap-1.5">
                  <IconClock className="h-4 w-4" />
                  {readMinutes} phút đọc
                </span>
              </div>
            </div>
          </div>

          <div className="mx-auto mb-20 max-w-4xl">
            <ArticleContent content={article.content} />
          </div>

          {article.tags && article.tags.length > 0 ? (
            <div className="mx-auto mb-12 max-w-4xl border-b border-amber-900/10 pb-12">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) =>
                  tag ? (
                    <Link
                      key={tag.id}
                      href={`/tag/${tag.id}`}
                      className="cursor-pointer rounded-full bg-amber-50 px-3 py-1 text-xs text-amber-800 transition-colors hover:bg-amber-100"
                    >
                      #{tag.name}
                    </Link>
                  ) : null,
                )}
              </div>
            </div>
          ) : null}

          <div className="mb-20">
            <h2 className="mb-8 text-3xl font-semibold text-amber-950">
              Bài viết liên quan
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.slice(0, 3).map((a) => (
                <Link key={a.id} href={`/news/${a.slug}`} className="group">
                  <div className="mb-3 aspect-[4/3] overflow-hidden rounded-xl bg-white shadow-sm">
                    <Image
                      src={resolveThumb(a.thumbnail)}
                      alt={a.title}
                      width={640}
                      height={480}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-amber-950 transition-colors group-hover:text-amber-700">
                    {a.title}
                  </h3>
                  <p className="text-sm text-amber-700">
                    {estimateReadMinutes(a.content)} phút đọc
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
