"use client";

import { useEffect, useRef } from "react";

interface ArticleContentProps {
  content: string;
}

function normalizeMediaUrl(src: string): string {
  if (!src) return src;
  // absolute urls keep as is
  if (/^https?:\/\//i.test(src) || src.startsWith("data:")) return src;
  // relative media path from backend (common: /uploads/..)
  const base = process.env.NEXT_PUBLIC_MEDIA_URL || "http://localhost:8080";
  if (src.startsWith("/")) return `${base}${src}`;
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
      className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-xl"
    />
  );
}
