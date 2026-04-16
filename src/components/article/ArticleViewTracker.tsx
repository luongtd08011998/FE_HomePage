"use client";

import { useEffect } from "react";
import { articleService } from "@/services/article";

const storageKey = (slug: string) => `article_view_recorded:${slug}`;

/** Tránh hai POST song song (React Strict Mode mount 2 lần). */
const inflightSlugs = new Set<string>();

/**
 * Gửi POST tăng views một lần mỗi slug mỗi phiên tab (sessionStorage sau khi thành công).
 */
export default function ArticleViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    if (!slug || typeof sessionStorage === "undefined") return;
    const key = storageKey(slug);
    if (sessionStorage.getItem(key)) return;
    if (inflightSlugs.has(slug)) return;
    inflightSlugs.add(slug);
    articleService
      .recordView(slug)
      .then(() => {
        sessionStorage.setItem(key, "1");
      })
      .catch(() => {
        /* để lần sau / tab mới thử lại */
      })
      .finally(() => {
        inflightSlugs.delete(slug);
      });
  }, [slug]);

  return null;
}
