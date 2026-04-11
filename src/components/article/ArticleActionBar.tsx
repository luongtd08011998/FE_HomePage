"use client";

import { useCallback, useEffect, useState } from "react";

const BOOKMARK_KEY = "article-bookmarks";

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconTwitter({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconLink({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}

function IconBookmark({ className, filled }: { className?: string; filled?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
    </svg>
  );
}

function IconDownload({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}

function IconPrinter({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
    </svg>
  );
}

type ArticleActionBarProps = {
  /** URL tuyệt đối để chia sẻ; nếu rỗng sẽ dùng `window.location.href` sau khi mount. */
  shareUrl: string;
  title: string;
  slug: string;
};

export default function ArticleActionBar({ shareUrl, title, slug }: ArticleActionBarProps) {
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [resolvedUrl, setResolvedUrl] = useState(shareUrl);

  useEffect(() => {
    if (!shareUrl && typeof window !== "undefined") {
      setResolvedUrl(window.location.href);
    }
  }, [shareUrl]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(BOOKMARK_KEY);
      const list: string[] = raw ? JSON.parse(raw) : [];
      setBookmarked(Array.isArray(list) && list.includes(slug));
    } catch {
      setBookmarked(false);
    }
  }, [slug]);

  const toggleBookmark = useCallback(() => {
    try {
      const raw = localStorage.getItem(BOOKMARK_KEY);
      let list: string[] = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(list)) list = [];
      if (bookmarked) list = list.filter((s) => s !== slug);
      else list = [...list, slug];
      localStorage.setItem(BOOKMARK_KEY, JSON.stringify(list));
      setBookmarked(!bookmarked);
    } catch {
      /* ignore */
    }
  }, [bookmarked, slug]);

  const shareFacebook = () => {
    const u = resolvedUrl || shareUrl;
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(u)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const shareTwitter = () => {
    const u = resolvedUrl || shareUrl;
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(u)}&text=${encodeURIComponent(title)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const copyLink = async () => {
    const u = resolvedUrl || shareUrl;
    try {
      await navigator.clipboard.writeText(u);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const downloadTxt = () => {
    const u = resolvedUrl || shareUrl;
    const blob = new Blob([`${title}\n\n${u}\n`], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${slug.slice(0, 40)}.txt`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const printPage = () => {
    window.print();
  };

  const iconBtn =
    "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition-transform motion-safe:hover:scale-110 motion-safe:active:scale-95 motion-reduce:hover:scale-100";

  return (
    <div className="mb-8 flex flex-col gap-4 rounded-2xl bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm text-gray-600">Chia sẻ:</span>
        <button type="button" onClick={shareFacebook} className={`${iconBtn} bg-blue-600 hover:bg-blue-700`} aria-label="Chia sẻ Facebook">
          <IconFacebook className="h-4 w-4" />
        </button>
        <button type="button" onClick={shareTwitter} className={`${iconBtn} bg-sky-500 hover:bg-sky-600`} aria-label="Chia sẻ X (Twitter)">
          <IconTwitter className="h-4 w-4" />
        </button>
        <button type="button" onClick={copyLink} className={`${iconBtn} bg-gray-600 hover:bg-gray-700`} aria-label="Sao chép liên kết">
          <IconLink className="h-4 w-4" />
        </button>
        {copied ? <span className="text-xs text-emerald-600">Đã sao chép liên kết</span> : null}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={toggleBookmark}
          className={`${iconBtn} ${
            bookmarked ? "bg-amber-100 text-amber-700 hover:bg-amber-200" : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
          aria-label={bookmarked ? "Bỏ lưu bài viết" : "Lưu bài viết"}
        >
          <IconBookmark className="h-4 w-4" filled={bookmarked} />
        </button>
        <button type="button" onClick={downloadTxt} className={`${iconBtn} bg-gray-200 text-gray-600 hover:bg-gray-300`} aria-label="Tải thông tin bài viết">
          <IconDownload className="h-4 w-4" />
        </button>
        <button type="button" onClick={printPage} className={`${iconBtn} bg-gray-200 text-gray-600 hover:bg-gray-300`} aria-label="In trang">
          <IconPrinter className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
