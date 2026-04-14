import axios from "axios";

// SSR (Node.js): gọi thẳng Spring Boot nội bộ, tránh self-signed cert qua Nginx.
// Client (browser): gọi qua Nginx HTTPS.
const isServer = typeof window === "undefined";
const baseURL = isServer
  ? (process.env.API_INTERNAL_URL || "http://127.0.0.1:8080/api/v1")
  : (process.env.NEXT_PUBLIC_API_URL || "/api/v1");

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
