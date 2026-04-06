import api from "@/lib/axios";
import type { ApiResponse, PaginatedData, Article } from "@/types";

export interface ArticleParams {
  page?: number; // 1-based (converted to 0-based before sending to Spring)
  size?: number;
  category?: string;
  tag?: string;
  search?: string;
}

export const articleService = {
  async getAll(params?: ArticleParams): Promise<PaginatedData<Article>> {
    const { data } = await api.get<ApiResponse<PaginatedData<Article>>>(
      "/articles",
      { params },
    );
    return data.data;
  },

  async getBySlug(slug: string): Promise<Article> {
    const { data } = await api.get<ApiResponse<Article>>(
      `/articles/slug/${slug}`,
    );
    return data.data;
  },
};
