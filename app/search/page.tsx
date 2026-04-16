import { Suspense } from "react";
import SearchContent from "./SearchContent";

export const metadata = {
  // Keep site title constant (defined in app/layout.tsx).
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
