import axios, { type InternalAxiosRequestConfig } from "axios";
import { useQlkhAuthStore } from "@/stores/qlkhAuthStore";

/** Base URL API (trùng env NEXT_PUBLIC_API_URL). Dùng cho login không qua interceptor. */
export const QLKH_API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "/api/v1";

const qlkhApi = axios.create({
  baseURL: QLKH_API_BASE,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/**
 * Đăng nhập QLKH là permitAll nhưng OAuth2 vẫn thử xác thực nếu có Bearer.
 * Token cũ (hết hạn) gửi kèm POST login → 401. Không gắn Authorization cho login.
 */
function isQlkhLoginRequest(config: InternalAxiosRequestConfig): boolean {
  const u = config.url ?? "";
  return u.includes("qlkh/auth/login");
}

qlkhApi.interceptors.request.use((config) => {
  if (isQlkhLoginRequest(config)) {
    delete config.headers.Authorization;
    return config;
  }
  const token = useQlkhAuthStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

qlkhApi.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const url = String(error.config?.url ?? "");
    if (status === 401 && !url.includes("qlkh/auth/login")) {
      useQlkhAuthStore.getState().logout();
    }
    return Promise.reject(error);
  },
);

export default qlkhApi;
