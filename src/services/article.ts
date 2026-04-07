import api from "@/lib/axios";
import type { ApiResponse, PaginatedData, Article } from "@/types";

export interface ArticleParams {
  page?: number;
  size?: number;
  search?: string;
  sort?: string;
}

export const articleService = {
  async getAll(params?: ArticleParams): Promise<PaginatedData<Article>> {
    const { data } = await api.get<ApiResponse<PaginatedData<Article>>>(
      "/articles",
      { params: { sort: "createdAt,desc", ...params } },
    );
    return data.data;
  },

  async getBySlug(slug: string): Promise<Article> {
    const { data } = await api.get<ApiResponse<Article>>(
      `/articles/slug/${slug}`,
    );
    return data.data;
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
