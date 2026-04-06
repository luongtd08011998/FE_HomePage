import { Suspense } from "react";
import SearchContent from "./SearchContent";

export const metadata = {
  title: "Tìm kiếm | TinTức",
};

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="py-16 text-center text-gray-400">Đang tải...</div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
