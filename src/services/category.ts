import api from "@/lib/axios";
import type {
  ApiResponse,
  PaginatedData,
  Article,
  Category,
  CategoryNode,
} from "@/types";

export interface PaginationParams {
  page?: number;
  size?: number;
  sort?: string;
}

export const categoryService = {
  async getAll(): Promise<Category[]> {
    const { data } = await api.get<ApiResponse<PaginatedData<Category>>>(
      "/categories",
      {
        params: { size: 100 },
      },
    );
    return data.data.result;
  },

  async getTree(): Promise<CategoryNode[]> {
    const { data } =
      await api.get<ApiResponse<CategoryNode[]>>("/categories/tree");
    return data.data;
  },

  async getArticles(
    id: number,
    params?: PaginationParams,
  ): Promise<PaginatedData<Article>> {
    const { data } = await api.get<ApiResponse<PaginatedData<Article>>>(
      `/categories/${id}/articles`,
      { params: { sort: "createdAt,desc", ...params } },
    );
    return data.data;
  },

  async getArticlesBySlug(
    slug: string,
    params?: PaginationParams,
  ): Promise<PaginatedData<Article>> {
    const { data } = await api.get<ApiResponse<PaginatedData<Article>>>(
      `/categories/slug/${slug}/articles`,
      { params: { sort: "createdAt,desc", ...params } },
    );
    return data.data;
  },
};
