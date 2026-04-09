import axios from "axios";
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
