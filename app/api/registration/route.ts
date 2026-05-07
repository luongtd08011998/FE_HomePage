import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import https from "https";

const EXTERNAL_API_URL = "https://toctienltd.vn/cm-portlet/api";
const AUTH_HEADER = "Basic cGh1b25nbnZAdG9jdGllbmx0ZC52bjoxMTExMTEx";

// Agent dùng chung để bỏ qua lỗi SSL (nếu có)
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    Authorization: AUTH_HEADER,
    "User-Agent": "Mozilla/5.0 (Next.js Server)",
  },
  httpsAgent,
  validateStatus: () => true,
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const response = await axios.post(`${EXTERNAL_API_URL}/register_add`, body, axiosConfig);
    return NextResponse.json(response.data, { status: response.status });
  } catch (error: any) {
    return NextResponse.json(
      { retCode: "ERR_NETWORK", retMsg: "Lỗi kết nối đến máy chủ đăng ký: " + error.message },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const phone = searchParams.get("phone");

    if (!phone) {
      return NextResponse.json({ error: "Thiếu số điện thoại" }, { status: 400 });
    }

    const response = await axios.get(`${EXTERNAL_API_URL}/register_get/${phone}`, axiosConfig);
    
    // API này trả về chuỗi text thuần túy (thời gian)
    return new NextResponse(response.data, { 
      status: response.status,
      headers: { "Content-Type": "text/plain; charset=utf-8" }
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Lỗi khi lấy thông tin thời gian: " + error.message },
      { status: 500 }
    );
  }
}
