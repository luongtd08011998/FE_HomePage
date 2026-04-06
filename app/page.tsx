import Link from "next/link";
import Image from "next/image";
import NewsCard from "@/components/NewsCard";
import { articleService } from "@/services/article";

function resolveThumb(thumbnail: string): string {
  if (!thumbnail) return "/placeholder.svg";
  if (thumbnail.startsWith("http")) return thumbnail;
  return `${process.env.NEXT_PUBLIC_MEDIA_URL || "http://localhost:8080"}${thumbnail}`;
}

export default async function HomePage() {
  let featured = null;
  let articles: Awaited<ReturnType<typeof articleService.getAll>>["result"] =
    [];

  try {
    const result = await articleService.getAll({ page: 1, size: 7 });
    featured = result.result[0] ?? null;
    articles = result.result.slice(1);
  } catch {
    // API not available — render empty state
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero */}
      {featured && (
        <Link href={`/news/${featured.slug}`} className="group block mb-10">
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src={resolveThumb(featured.thumbnail)}
              alt={featured.title}
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-blue-300 text-sm font-medium mb-1">
                {featured.category.name}
              </p>
              <h1 className="text-white text-2xl md:text-3xl font-bold leading-snug line-clamp-2">
                {featured.title}
              </h1>
            </div>
          </div>
        </Link>
      )}

      {/* Grid */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Tin mới nhất</h2>
        <Link
          href="/news"
          className="text-sm text-blue-600 hover:underline font-medium"
        >
          Xem tất cả →
        </Link>
      </div>

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center py-16">Chưa có bài viết nào.</p>
      )}
    </div>
  );
}
