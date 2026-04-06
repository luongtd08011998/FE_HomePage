import api from "@/lib/axios";
import type { ApiResponse, PaginatedData, Category } from "@/types";

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
};
