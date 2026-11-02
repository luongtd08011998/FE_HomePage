import { NextRequest, NextResponse } from "next/server";

function getBackendApiBase(): string {
  const raw =
    process.env.API_INTERNAL_URL ||
    (process.env.BACKEND_INTERNAL_ORIGIN
      ? `${process.env.BACKEND_INTERNAL_ORIGIN.replace(/\/$/, "")}/api/v1`
      : "http://127.0.0.1:8080/api/v1");
  return raw.replace(/\/$/, "");
}

export async function proxyToBackend(
  request: NextRequest,
  pathSegments: string[],
): Promise<NextResponse> {
  try {
    const base = getBackendApiBase();
    const subPath = pathSegments
      .map((s) => encodeURIComponent(s))
      .join("/");
    const search = request.nextUrl.search || "";
    const targetUrl = `${base}/${subPath}${search}`;

    // Chỉ chuyển tiếp các header cần thiết, loại bỏ Origin/Referer để tránh lỗi 403 CORS từ Spring Boot
    const forwardHeaders = new Headers();
    const contentType = request.headers.get("content-type");
    if (contentType) forwardHeaders.set("content-type", contentType);

    const accept = request.headers.get("accept");
    if (accept) forwardHeaders.set("accept", accept);

    const authorization = request.headers.get("authorization");
    if (authorization) forwardHeaders.set("authorization", authorization);

    const forwardedFor = request.headers.get("x-forwarded-for");
    if (forwardedFor) forwardHeaders.set("x-forwarded-for", forwardedFor);

    const method = request.method.toUpperCase();
    let body: ArrayBuffer | undefined;
    if (method !== "GET" && method !== "HEAD") {
      const buf = await request.arrayBuffer();
      if (buf.byteLength > 0) {
        body = buf;
      }
    }

    const upstream = await fetch(targetUrl, {
      method,
      headers: forwardHeaders,
      body,
      cache: "no-store",
    });

    if (upstream.status === 204) {
      return new NextResponse(null, { status: 204 });
    }

    const resHeaders = new Headers();
    const resContentType = upstream.headers.get("content-type");
    if (resContentType) resHeaders.set("content-type", resContentType);

    const resDisposition = upstream.headers.get("content-disposition");
    if (resDisposition) resHeaders.set("content-disposition", resDisposition);

    const data = await upstream.arrayBuffer();
    return new NextResponse(data, {
      status: upstream.status,
      headers: resHeaders,
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        statusCode: 502,
        error: "Bad Gateway",
        message: `Không thể kết nối tới Backend API: ${msg}`,
      },
      { status: 502 },
    );
  }
}

