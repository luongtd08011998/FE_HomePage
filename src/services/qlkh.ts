import axios, { isAxiosError } from "axios";
import type { ApiResponse, PaginatedData } from "@/types";
import qlkhApi, { QLKH_API_BASE } from "@/lib/qlkhAxios";

export interface QlkhCustomer {
  digiCode: string;
  name: string;
  address: string;
  phone: string;
  email: string | null;
  sms: string | null;
  taxCode: string | null;
  isActive: number | null;
  isWaterCut: number | null;
}

export interface QlkhInvoice {
  id: number;
  digiCode: string;
  customerName: string;
  yearMonth: string | null;
  createdDate: string | null;
  numOfHouseHold: number | null;
  waterMeterSerial: string | null;
  amount: number | null;
  envFee: number | null;
  taxFee: number | null;
  totalAmount: number | null;
  paymentStatus: number | null;
  paymentStatusLabel: string | null;
  oldVal: number | null;
  newVal: number | null;
  /** Khóa tích hợp VNPT (nếu có). */
  rootKey?: string | null;
  /** Fkey VNPT — dùng để tải XML hóa đơn điện tử. */
  fkey?: string | null;
}

export interface LoginPayload {
  digiCode: string;
  phone: string;
}

/**
 * Gọi axios thuần (không dùng qlkhApi) để chắc chắn không gửi Bearer.
 * OAuth2 Resource Server vẫn xác thực JWT nếu có Authorization → 401 khi token cũ.
 */
export async function qlkhLogin(
  payload: LoginPayload,
): Promise<{ accessToken: string }> {
  const { data } = await axios.post<ApiResponse<{ accessToken: string }>>(
    `${QLKH_API_BASE}/qlkh/auth/login`,
    payload,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    },
  );
  return data.data;
}

export async function qlkhGetMe(): Promise<QlkhCustomer> {
  const { data } = await qlkhApi.get<ApiResponse<QlkhCustomer>>(
    "/qlkh/customers/me",
  );
  return data.data;
}

export async function qlkhGetInvoices(params: {
  page: number;
  size: number;
  yearMonth?: string;
}): Promise<PaginatedData<QlkhInvoice>> {
  const { data } = await qlkhApi.get<ApiResponse<PaginatedData<QlkhInvoice>>>(
    "/qlkh/invoices",
    {
      params: {
        page: params.page,
        size: params.size,
        ...(params.yearMonth?.trim()
          ? { yearMonth: params.yearMonth.trim() }
          : {}),
      },
    },
  );
  return data.data;
}

export async function qlkhGetInvoice(id: number): Promise<QlkhInvoice> {
  const { data } = await qlkhApi.get<ApiResponse<QlkhInvoice>>(
    `/qlkh/invoices/${id}`,
  );
  return data.data;
}

/**
 * Tải file hóa đơn điện tử từ VNPT (BE có thể trả XML hoặc ZIP).
 */
export async function qlkhDownloadMonthEInvoiceXml(
  invoiceId: number,
): Promise<{ blob: Blob; filename: string; contentType: string }> {
  try {
    const res = await qlkhApi.get<Blob>(
      `/qlkh/invoices/${invoiceId}/e-invoice-download`,
      {
        responseType: "blob",
        headers: {
          Accept: "application/zip, application/xml, application/json, */*",
        },
      },
    );
    const ct = String(res.headers["content-type"] ?? "");
    const cd = String(res.headers["content-disposition"] ?? "");
    if (ct.includes("application/json") && res.data instanceof Blob) {
      const text = await res.data.text();
      const parsed = JSON.parse(text) as ApiResponse<unknown> & {
        error?: string;
      };
      throw new Error(
        parsed.message ?? parsed.error ?? "Tải hóa đơn thất bại.",
      );
    }
    const filename =
      parseContentDispositionFilename(cd) ||
      (ct.includes("zip")
        ? `hoadon-tien-nuoc-${invoiceId}.zip`
        : `hoadon-tien-nuoc-${invoiceId}.xml`);
    return { blob: res.data, filename, contentType: ct };
  } catch (err: unknown) {
    if (isAxiosError(err) && err.response?.data instanceof Blob) {
      const text = await err.response.data.text();
      try {
        const parsed = JSON.parse(text) as ApiResponse<unknown> & {
          error?: string;
        };
        throw new Error(
          parsed.message ?? parsed.error ?? "Tải hóa đơn thất bại.",
        );
      } catch (e) {
        if (e instanceof SyntaxError) {
          throw new Error(
            text.trim().slice(0, 240) || "Tải hóa đơn thất bại.",
          );
        }
        throw e;
      }
    }
    throw err;
  }
}

function parseContentDispositionFilename(cd: string): string | null {
  const s = cd.trim();
  if (!s) return null;
  // Ưu tiên filename* (RFC 5987): filename*=UTF-8''...
  const mStar = s.match(/filename\*\s*=\s*([^;]+)/i);
  if (mStar) {
    const raw = mStar[1].trim().replace(/^UTF-8''/i, "").replace(/^\"|\"$/g, "");
    try {
      return decodeURIComponent(raw);
    } catch {
      return raw;
    }
  }
  // Fallback filename="..."
  const m = s.match(/filename\s*=\s*([^;]+)/i);
  if (!m) return null;
  return m[1].trim().replace(/^\"|\"$/g, "");
}

export interface QlkhSalesInvoice {
  salesInvoiceId: number;
  invoiceNum: number;
  templateCode: string;
  invoiceDate?: string | null;
  digiCode: string;
  customerName: string;
  address: string;
  invoiceTotal: number;
  status: number;
}

export async function qlkhGetSalesInvoices(params: {
  page: number;
  size: number;
}): Promise<PaginatedData<QlkhSalesInvoice>> {
  const { data } = await qlkhApi.get<
    ApiResponse<PaginatedData<QlkhSalesInvoice>>
  >("/qlkh/sales-invoices", {
    params: {
      page: params.page,
      size: params.size,
    },
  });
  return data.data;
}

export async function qlkhGetSalesInvoice(
  salesInvoiceId: number,
): Promise<QlkhSalesInvoice> {
  const { data } = await qlkhApi.get<ApiResponse<QlkhSalesInvoice>>(
    `/qlkh/sales-invoices/${salesInvoiceId}`,
  );
  return data.data;
}
