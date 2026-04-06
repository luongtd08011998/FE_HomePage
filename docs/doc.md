Phase 1 — Khởi tạo project & cấu hình

1. Da xong qua buoc 2
2. Cài dependencies: antd @ant-design/nextjs-registry axios swr zustand @tiptap/react @tiptap/starter-kit dompurify
3. Cấu hình tailwind.config.ts: bật @tailwindcss/typography plugin để render HTML bài viết đẹp
4. Cấu hình Ant Design registry trong layout.tsx (AntdRegistry)
5. Tạo axios.ts (copy pattern từ axios.ts)
   Phase 2 — Types & Services (parallel)
6. Copy index.ts từ admin: Article, Category, Tag, ApiResponse, PaginatedData
7. Tạo articleService.getAll(params), articleService.getBySlug(slug), categoryService.getAll(), tagService.getAll()

Phase 3 — Layout cơ bản (Tailwind)

1. Header — Tailwind: flex items-center justify-between, logo + nav links + search input
2. Footer — Tailwind: bg-gray-900 text-white grid grid-cols-3
3. layout.tsx — bọc AntdRegistry + Header + Footer
   Phase 4 — Trang danh sách tin tức
4. NewsCard — Tailwind: card với rounded-xl shadow hover:shadow-lg transition, thumbnail aspect-video object-cover, Ant Design <Tag> cho chuyên mục
5. CategoryFilter — Tailwind: flex gap-2 overflow-x-auto, mỗi filter là button với active state bg-blue-600 text-white
6. / (Homepage) — hero bài nổi bật + grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
7. /news — listing + CategoryFilter + Ant Design <Pagination> ở cuối
8. /category/[slug] và /tag/[slug] — tái dùng component listing
   Phase 5 — Trang chi tiết bài viết
9. /news/[slug] (Server Component):
   - Hero thumbnail: w-full h-64 md:h-96 object-cover
   - Tiêu đề: Tailwind text-3xl font-bold
   - Nội dung: class prose prose-lg max-w-none từ @tailwindcss/typography → render TipTap HTML đẹp
   - Sanitize bằng DOMPurify trước khi dangerouslySetInnerHTML
   - Sidebar: sticky top-4 — bài liên quan
10. SEO: generateMetadata → title, description, og:image (thumbnail)
    Phase 6 — Bổ sung
11. Tìm kiếm: /search?q=... — input Tailwind + SWR debounce
12. Tăng lượt xem: useEffect gọi API khi mở bài
    news-site/
    app/
    layout.tsx ← AntdRegistry + Header + Footer
    page.tsx ← Homepage
    news/page.tsx ← /news listing
    news/[slug]/page.tsx ← detail + generateMetadata
    category/[slug]/page.tsx
    tag/[slug]/page.tsx
    src/
    components/
    Header.tsx ← Tailwind
    Footer.tsx ← Tailwind
    NewsCard.tsx ← Tailwind + Ant Design Tag
    CategoryFilter.tsx ← Tailwind
    ArticleContent.tsx ← prose class + DOMPurify
    lib/axios.ts
    services/article.ts, category.ts, tag.ts
    types/index.ts
    Verification
13. Tailwind prose render đúng nội dung TipTap HTML (heading, bold, list...)
14. NewsCard responsive: 1 cột mobile → 3 cột desktop
15. Ant Design Pagination đồng bộ với URL params ?page=
16. generateMetadata kiểm tra qua DevTools network tab → og:image đúng thumbnail
17. DOMPurify loại bỏ <script> tag trong content

Decisions

- Tailwind CSS là styling duy nhất cho layout/UI custom
- Ant Design chỉ dùng Pagination, Tag, Spin — tránh cài MUI để nhẹ bundle
- @tailwindcss/typography (prose) cho phép render HTML article đẹp mà không cần viết CSS custom
- DOMPurify bắt buộc trước dangerouslySetInnerHTML để tránh XSS
