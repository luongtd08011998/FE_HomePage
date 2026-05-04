import api from "@/lib/axios";
import type { ApiResponse, PaginatedData, Article } from "@/types";

export interface ArticleParams {
  page?: number;
  size?: number;
  /** Gửi lên BE query `keyword` (GET /api/v1/articles). */
  keyword?: string;
  /** Tiện ích: map sang `keyword` khi gọi API. */
  search?: string;
  /** 0=bài thường, 1=nổi bật, 2=tin tức — khớp ArticleFilterRequest. */
  type?: 0 | 1 | 2;
  /** 1=đang hiện, 0=ẩn. */
  active?: 0 | 1;
  sort?: string;
}

export const articleService = {
  async getAll(params?: ArticleParams): Promise<PaginatedData<Article>> {
    const { search, keyword, ...rest } = params ?? {};
    const query: Record<string, string | number | undefined> = {
      sort: "createdAt,desc",
      active: 1,
      ...rest,
    };
    const kw = keyword ?? search;
    if (kw !== undefined) query.keyword = kw;
    const { data } = await api.get<ApiResponse<PaginatedData<Article>>>(
      "/articles",
      { params: query },
    );
    return data.data;
  },

  async getBySlug(slug: string): Promise<Article> {
    const { data } = await api.get<ApiResponse<Article>>(
      `/articles/slug/${encodeURIComponent(slug)}`,
    );
    return data.data;
  },

  /** Ghi nhận lượt xem (gọi từ client, không dùng trong SSR/metadata). BE trả 204 No Content. */
  async recordView(slug: string): Promise<void> {
    await api.post(`/articles/slug/${encodeURIComponent(slug)}/view`, null, {
      validateStatus: (s) => s === 204 || (s >= 200 && s < 300),
    });
  },

  async getRelated(
    id: number,
    params?: { page?: number; size?: number },
  ): Promise<PaginatedData<Article>> {
    const { data } = await api.get<ApiResponse<PaginatedData<Article>>>(
      `/articles/${id}/related`,
      { params },
    );
    return data.data;
  },

  async search(params: {
    keyword: string;
    page?: number;
    size?: number;
    sort?: string;
  }): Promise<PaginatedData<Article>> {
    const { data } = await api.get<ApiResponse<PaginatedData<Article>>>(
      "/articles/search",
      { params: { sort: "id,desc", ...params } },
    );
    return data.data;
  },
};
