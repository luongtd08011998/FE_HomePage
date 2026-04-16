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
          ADD_TAGS: ["picture", "source"],
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
          img.classList.add("max-w-full", "h-auto", "block");
        });
        root.querySelectorAll("picture source").forEach((el) => {
          const srcset = el.getAttribute("srcset") ?? "";
          if (!srcset) return;
          const parts = srcset.split(",").map((p) => p.trim());
          const next = parts
            .map((part) => {
              const space = part.indexOf(" ");
              if (space === -1) return normalizeMediaUrl(part) || part;
              const url = part.slice(0, space);
              const rest = part.slice(space);
              const u = normalizeMediaUrl(url);
              return u ? `${u}${rest}` : part;
            })
            .join(", ");
          if (next && next !== srcset) el.setAttribute("srcset", next);
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
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      className={[
        "prose prose-base max-w-none text-left",
        "leading-[1.6]",
        "prose-headings:font-semibold prose-headings:tracking-tight",
        "prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3",
        "prose-headings:text-gray-900 prose-p:text-gray-900 prose-p:font-normal prose-strong:text-gray-900 prose-strong:font-semibold",
        "prose-p:my-4",
        "prose-a:text-gray-900 prose-a:underline prose-a:decoration-gray-300 hover:prose-a:decoration-gray-500",
        "prose-blockquote:border-l-gray-300 prose-blockquote:text-gray-900",
        "prose-blockquote:my-8 prose-blockquote:py-1",
        "prose-hr:border-gray-200",
        "prose-li:marker:text-gray-500",
        "prose-figure:my-8 prose-figure:mx-auto prose-figure:max-w-full",
        "prose-img:block prose-img:max-w-full prose-img:h-auto prose-img:rounded-xl prose-img:shadow-xl prose-img:my-8",
        "prose-figcaption:text-gray-600",
        "selection:bg-gray-200 selection:text-gray-900",
      ].join(" ")}
    />
  );
}
