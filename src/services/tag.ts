import api from "@/lib/axios";
import type { ApiResponse, PaginatedData, Article, Tag } from "@/types";

export interface PaginationParams {
  page?: number;
  size?: number;
  sort?: string;
}

export const tagService = {
  async getAll(): Promise<Tag[]> {
    const { data } = await api.get<ApiResponse<PaginatedData<Tag>>>("/tags", {
      params: { size: 100 },
    });
    return data.data.result;
  },

  async getArticles(
    id: number,
    params?: PaginationParams,
  ): Promise<PaginatedData<Article>> {
    const { data } = await api.get<ApiResponse<PaginatedData<Article>>>(
      `/tags/${id}/articles`,
      { params: { sort: "createdAt,desc", ...params } },
    );
    return data.data;
  },
};
