import type { NextConfig } from "next";

/** Gốc HTTP tới Spring (không có path /api/v1) — dùng cho rewrite proxy. */
function backendOriginFromEnv(): string {
  const raw =
    process.env.BACKEND_INTERNAL_ORIGIN ||
    process.env.API_INTERNAL_URL ||
    "http://127.0.0.1:8080/api/v1";
  try {
    const u = new URL(raw);
    return `${u.protocol}//${u.host}`;
  } catch {
    return "http://127.0.0.1:8080";
  }
}

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    qualities: [75, 95],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    const origin = backendOriginFromEnv();
    return [
      {
        source: "/api/v1/:path*",
        destination: `${origin}/api/v1/:path*`,
      },
      {
        source: "/uploads/:path*",
        destination: `${origin}/uploads/:path*`,
      },
    ];
  },
};

export default nextConfig;
