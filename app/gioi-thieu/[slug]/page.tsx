import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articleService } from "@/services/article";
import { categoryService } from "@/services/category";
import ArticleContent from "@/components/ArticleContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await params;
  return {};
}

export default async function GioiThieuDetailPage({ params }: Props) {
  const { slug } = await params;
  
  let article = null;
  
  try {
    // Thử lấy bài viết theo exact slug trước
    article = await articleService.getBySlug(slug);
  } catch {
    // Nếu không có, thử lấy bài viết đầu tiên của category có slug tương ứng
    try {
      const articlesResult = await categoryService.getArticlesBySlug(slug, { page: 1, size: 1 });
      if (articlesResult.result && articlesResult.result.length > 0) {
        article = articlesResult.result[0];
      }
    } catch {
      // ignore
    }
  }

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f2fe] via-[#f8fafb] to-[#dbeafe] py-20">
      <main className="mx-auto max-w-4xl px-6 bg-white p-10 rounded-2xl shadow-sm">
        <h1 className="mb-8 text-3xl font-bold leading-snug tracking-tight text-[#0c4a6e] text-center border-b border-gray-200 pb-6">
          {article.title}
        </h1>
        <ArticleContent content={article.content} />
      </main>
    </div>
  );
}
