/**
 * URL ảnh/file media hiển thị trên trình duyệt.
 *
 * Tránh trỏ thẳng tới `http://127.0.0.1:8080` / `localhost` từ origin HTTPS public
 * (bị chặn bởi Private Network Access / loopback address space).
 *
 * Quy ước: dùng path `/uploads/...` để Next rewrite về backend (xem `next.config.ts`).
 */
export function publicMediaUrl(srcOrPath: string): string {
  if (!srcOrPath) return srcOrPath;
  if (srcOrPath.startsWith("data:")) return srcOrPath;

  // already same-origin relative
  if (srcOrPath.startsWith("/")) {
    return normalizeUploadsPath(srcOrPath);
  }

  if (/^https?:\/\//i.test(srcOrPath)) {
    try {
      const u = new URL(srcOrPath);
      const host = u.hostname;
      const isLoopback =
        host === "localhost" ||
        host === "127.0.0.1" ||
        host === "::1" ||
        host.endsWith(".localhost");

      // Chỉ rewrite khi URL trỏ tới loopback — giữ nguyên https/http tới domain khác (ảnh ngoài, CDN).
      // Lưu ý: không dùng `typeof window !== "undefined"` ở đây: trên client điều đó luôn true và sẽ
      // biến mọi URL tuyệt đối thành path trên origin hiện tại (làm hỏng ảnh hotlink).
      if (isLoopback) {
        return normalizeUploadsPath(`${u.pathname}${u.search}`);
      }

      return srcOrPath;
    } catch {
      return srcOrPath;
    }
  }

  return srcOrPath;
}

function normalizeUploadsPath(pathWithQuery: string): string {
  // Một số backend trả path kiểu `/api/v1/uploads/...` — chuẩn hoá về `/uploads/...`
  const withoutApi = pathWithQuery.replace(/^\/api\/v1(?=\/)/, "");
  return withoutApi;
}
