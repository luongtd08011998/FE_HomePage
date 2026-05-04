export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface CategoryNode {
  id: number;
  name: string;
  slug: string;
  active?: number;
  parent: CategoryNode | null;
  children: CategoryNode[];
  createdAt: string;
  updatedAt: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
}

// Embedded inside ArticleResponse (no slug returned by backend)
export interface ArticleCategory {
  id: number;
  name: string;
}

export interface ArticleTag {
  id: number;
  name: string;
}

export interface ArticleAuthor {
  id: number;
  name: string;
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  content: string;
  thumbnail: string;
  type: number;
  views: number;
  active: number;
  /** API đôi khi trả null — luôn dùng optional chaining khi hiển thị. */
  author: ArticleAuthor | null;
  category: ArticleCategory | null;
  tags: ArticleTag[] | null;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  statusCode: number;
}

export interface PaginatedMeta {
  page: number;
  pageSize: number;
  pages: number;
  total: number;
}

export interface PaginatedData<T> {
  result: T[];
  meta: PaginatedMeta;
}
