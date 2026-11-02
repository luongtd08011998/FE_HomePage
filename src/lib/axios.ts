import axios from "axios";

// SSR (Node.js): gọi thẳng Spring Boot nội bộ.
// Client (browser): gọi qua Next.js Route Handler (/api/proxy) để tự động loại bỏ Origin header,
// tránh lỗi 403 Invalid CORS Request từ Spring Boot khi đổi tên miền.
const isServer = typeof window === "undefined";
const baseURL = isServer
  ? (process.env.API_INTERNAL_URL || "http://127.0.0.1:8080/api/v1")
  : "/api/proxy";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
