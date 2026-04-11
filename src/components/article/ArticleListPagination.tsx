import Link from "next/link";

type ArticleListPaginationProps = {
  current: number;
  lastPage: number;
  buildUrl: (page: number) => string;
};

/** Phân trang dạng nút — đồng bộ giao diện danh sách bài viết. */
export default function ArticleListPagination({
  current,
  lastPage,
  buildUrl,
}: ArticleListPaginationProps) {
  if (lastPage <= 1) return null;

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {current > 1 && (
        <Link
          href={buildUrl(current - 1)}
          className="rounded-full border-2 border-blue-500 bg-white px-6 py-2.5 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50 motion-safe:active:scale-[0.98]"
        >
          ← Trước
        </Link>
      )}
      {current < lastPage && (
        <Link
          href={buildUrl(current + 1)}
          className="rounded-full border-2 border-blue-500 bg-white px-6 py-2.5 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50 motion-safe:active:scale-[0.98]"
        >
          Tiếp →
        </Link>
      )}
    </div>
  );
}
