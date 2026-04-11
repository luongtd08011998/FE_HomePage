/** Chuẩn hóa HTML bài viết thành chuỗi hiển thị (tiêu đề phụ, thời gian đọc). */
export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function articleExcerpt(html: string, maxLen = 200): string {
  const t = stripHtml(html);
  if (!t) return "";
  return t.length > maxLen ? `${t.slice(0, maxLen)}…` : t;
}

/** Ước lượng phút đọc (tiếng Việt, ~180 từ/phút). */
export function estimateReadMinutes(html: string): number {
  const text = stripHtml(html);
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 180));
}
