"use client";

import { useState } from "react";

export default function ArticleNewsletterCta() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white shadow-md">
        <p className="text-center text-sm text-blue-100">Cảm ơn bạn. Chúng tôi sẽ gửi thông tin khi có bản tin mới.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white shadow-md">
      <h3 className="mb-2 text-xl font-bold">Đăng ký nhận tin</h3>
      <p className="mb-4 text-sm text-blue-100">Nhận thông báo về tin tức và hoạt động mới nhất.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label htmlFor="article-newsletter-email" className="sr-only">
          Email
        </label>
        <input
          id="article-newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email của bạn"
          className="rounded-lg border border-white/30 bg-white/20 px-4 py-2 text-white placeholder:text-blue-200 transition-colors focus:border-white/60 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-lg bg-white px-4 py-2 font-medium text-blue-600 transition-colors hover:bg-blue-50 motion-safe:active:scale-[0.98]"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
}
