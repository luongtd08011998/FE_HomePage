"use client";

import { useEffect, useRef } from "react";

interface ArticleContentProps {
  content: string;
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
