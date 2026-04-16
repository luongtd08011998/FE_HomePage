"use client";

import { useEffect, useRef } from "react";
import { publicMediaUrl } from "@/lib/publicMediaUrl";

interface ArticleContentProps {
  content: string;
}

function normalizeMediaUrl(src: string): string {
  if (!src) return src;
  if (src.startsWith("data:")) return src;
  if (/^https?:\/\//i.test(src)) return publicMediaUrl(src);
  // relative path from backend (common: /uploads/..)
  if (src.startsWith("/")) return publicMediaUrl(src);
  return src;
}

export default function ArticleContent({ content }: ArticleContentProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function sanitize() {
      const DOMPurify = (await import("dompurify")).default;
      if (ref.current) {
        const clean = DOMPurify.sanitize(content, {
          FORBID_TAGS: ["script", "iframe"],
          FORBID_ATTR: ["onerror", "onload", "onclick"],
        });
        ref.current.innerHTML = clean;
        // normalize <img src> and <a href> so relative paths still load on FE
        const root = ref.current;
        root.querySelectorAll("img").forEach((img) => {
          const src = img.getAttribute("src") ?? "";
          const next = normalizeMediaUrl(src);
          if (next && next !== src) img.setAttribute("src", next);
          img.setAttribute("loading", img.getAttribute("loading") ?? "lazy");
          img.setAttribute("decoding", img.getAttribute("decoding") ?? "async");
        });
        root.querySelectorAll("a").forEach((a) => {
          const href = a.getAttribute("href") ?? "";
          const next = normalizeMediaUrl(href);
          if (next && next !== href) a.setAttribute("href", next);
        });
      }
    }
    sanitize();
  }, [content]);

  return (
    <div
      ref={ref}
      style={{ fontFamily: "var(--font-cormorant)" }}
      className={[
        "prose prose-base max-w-none",
        "leading-relaxed",
        "prose-headings:font-semibold prose-headings:tracking-tight",
        "prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3",
        "prose-headings:text-gray-900 prose-p:text-gray-900 prose-strong:text-gray-900",
        "prose-p:my-4",
        "prose-a:text-gray-900 prose-a:underline prose-a:decoration-gray-300 hover:prose-a:decoration-gray-500",
        "prose-blockquote:border-l-gray-300 prose-blockquote:text-gray-900",
        "prose-blockquote:my-8 prose-blockquote:py-1",
        "prose-hr:border-gray-200",
        "prose-li:marker:text-gray-500",
        "prose-img:rounded-xl prose-img:shadow-xl prose-img:my-8",
        "prose-figcaption:text-gray-600",
        "selection:bg-gray-200 selection:text-gray-900",
      ].join(" ")}
    />
  );
}
