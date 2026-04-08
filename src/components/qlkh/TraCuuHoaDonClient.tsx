"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import {
  Button,
  Card,
  Empty,
  Input,
  Modal,
  Pagination,
  Spin,
  Table,
  Tag,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  qlkhGetInvoice,
  qlkhGetInvoices,
  qlkhGetMe,
  qlkhLogin,
  type QlkhCustomer,
  type QlkhInvoice,
} from "@/services/qlkh";
import { useQlkhAuthStore } from "@/stores/qlkhAuthStore";
import type { PaginatedMeta } from "@/types";

const PAGE_SIZE = 10;

function formatVnd(n: number | null | undefined): string {
  if (n == null || Number.isNaN(n)) return "—";
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(n);
}

/** yearMonth dạng YYYYMM → hiển thị thân thiện */
function formatKyThanhToan(ym: string | null | undefined): string {
  if (!ym || ym.length < 6) return ym?.trim() || "—";
  const y = ym.slice(0, 4);
  const m = ym.slice(4, 6);
  return `Tháng ${parseInt(m, 10)}/${y}`;
}

function formatNgayDb(d: string | null | undefined): string {
  if (!d || d.length < 8) return d?.trim() || "—";
  const y = d.slice(0, 4);
  const mo = d.slice(4, 6);
  const day = d.slice(6, 8);
  return `${day}/${mo}/${y}`;
}

function accountStatusLabel(isActive: number | null): string {
  if (isActive === null || isActive === undefined) return "Không xác định";
  return isActive === 1 ? "Hoạt động" : "Ngưng";
}

function waterStatusLabel(isWaterCut: number | null): string {
  if (isWaterCut === null || isWaterCut === undefined) return "Không xác định";
  return isWaterCut === 1 ? "Tạm ngừng cấp nước" : "Cấp nước bình thường";
}

function useDebounced<T>(value: T, delay: number): T {
  const [v, setV] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setV(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return v;
}

export default function TraCuuHoaDonClient() {
  const accessToken = useQlkhAuthStore((s) => s.accessToken);
  const setAccessToken = useQlkhAuthStore((s) => s.setAccessToken);
  const logout = useQlkhAuthStore((s) => s.logout);

  const [digiCode, setDigiCode] = useState("");
  const [phone, setPhone] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [customer, setCustomer] = useState<QlkhCustomer | null>(null);
  const [customerLoading, setCustomerLoading] = useState(false);

  const [invoices, setInvoices] = useState<QlkhInvoice[]>([]);
  const [meta, setMeta] = useState<PaginatedMeta | null>(null);
  const [listLoading, setListLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [yearMonthInput, setYearMonthInput] = useState("");
  const debouncedYm = useDebounced(yearMonthInput, 400);

  const [detailOpen, setDetailOpen] = useState(false);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailInvoice, setDetailInvoice] = useState<QlkhInvoice | null>(null);

  const lastInvoiceFilterYm = useRef<string | null>(null);

  const loadCustomer = useCallback(async () => {
    setCustomerLoading(true);
    try {
      const c = await qlkhGetMe();
      setCustomer(c);
    } catch {
      setCustomer(null);
    } finally {
      setCustomerLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!accessToken) {
      lastInvoiceFilterYm.current = null;
      setCustomer(null);
      setInvoices([]);
      setMeta(null);
      return;
    }
    loadCustomer();
  }, [accessToken, loadCustomer]);

  useEffect(() => {
    if (!accessToken) return;
    const ym = debouncedYm.trim();
    const filterChanged = lastInvoiceFilterYm.current !== ym;
    if (filterChanged) {
      lastInvoiceFilterYm.current = ym;
      if (page !== 1) {
        setPage(1);
        return;
      }
    }
    let cancelled = false;
    setListLoading(true);
    void (async () => {
      try {
        const res = await qlkhGetInvoices({
          page: page - 1,
          size: PAGE_SIZE,
          yearMonth: ym || undefined,
        });
        if (!cancelled) {
          setInvoices(res.result);
          setMeta(res.meta);
        }
      } catch {
        if (!cancelled) {
          setInvoices([]);
          setMeta(null);
        }
      } finally {
        if (!cancelled) setListLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [accessToken, page, debouncedYm]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError("");
    if (!digiCode.trim() || !phone.trim()) {
      setLoginError("Vui lòng nhập đầy đủ mã khách hàng và số điện thoại.");
      return;
    }
    setLoginLoading(true);
    try {
      const { accessToken: token } = await qlkhLogin({
        digiCode: digiCode.trim(),
        phone: phone.trim(),
      });
      setAccessToken(token);
    } catch (err: unknown) {
      const msg =
        err &&
        typeof err === "object" &&
        "response" in err &&
        err.response &&
        typeof err.response === "object" &&
        "data" in err.response &&
        err.response.data &&
        typeof err.response.data === "object" &&
        "message" in err.response.data
          ? String(
              (err.response.data as { message?: string }).message ??
                "Đăng nhập thất bại.",
            )
          : "Đăng nhập thất bại. Vui lòng kiểm tra mã KH và số điện thoại.";
      setLoginError(msg);
    } finally {
      setLoginLoading(false);
    }
  }

  const openDetail = useCallback(async (row: QlkhInvoice) => {
    setDetailOpen(true);
    setDetailLoading(true);
    setDetailInvoice(null);
    try {
      const inv = await qlkhGetInvoice(row.id);
      setDetailInvoice(inv);
    } catch {
      setDetailInvoice(row);
    } finally {
      setDetailLoading(false);
    }
  }, []);

  const columns: ColumnsType<QlkhInvoice> = useMemo(
    () => [
      {
        title: "Kỳ thanh toán",
        dataIndex: "yearMonth",
        key: "yearMonth",
        render: (ym: string | null) => (
          <span className="font-medium text-gray-900">
            {formatKyThanhToan(ym)}
          </span>
        ),
      },
      {
        title: "Chỉ số cũ",
        dataIndex: "oldVal",
        key: "oldVal",
        align: "right",
        render: (v: number | null) => v ?? "—",
      },
      {
        title: "Chỉ số mới",
        dataIndex: "newVal",
        key: "newVal",
        align: "right",
        render: (v: number | null) => v ?? "—",
      },
      {
        title: "Tiền nước",
        dataIndex: "amount",
        key: "amount",
        align: "right",
        render: (v: number | null) => formatVnd(v),
      },
      {
        title: "BVMT",
        dataIndex: "envFee",
        key: "envFee",
        align: "right",
        render: (v: number | null) => formatVnd(v),
      },
      {
        title: "Thuế",
        dataIndex: "taxFee",
        key: "taxFee",
        align: "right",
        render: (v: number | null) => formatVnd(v),
      },
      {
        title: "Tổng cộng",
        dataIndex: "totalAmount",
        key: "totalAmount",
        align: "right",
        render: (v: number | null) => (
          <span className="font-semibold text-blue-800">{formatVnd(v)}</span>
        ),
      },
      {
        title: "Trạng thái",
        dataIndex: "paymentStatusLabel",
        key: "status",
        render: (label: string | null, record) => {
          const paid = record.paymentStatus === 2;
          return (
            <Tag color={paid ? "green" : "orange"}>
              {label ?? "—"}
            </Tag>
          );
        },
      },
      {
        title: "",
        key: "action",
        width: 100,
        render: (_, record) => (
          <Button
            type="link"
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              openDetail(record);
            }}
          >
            Chi tiết
          </Button>
        ),
      },
    ],
    [openDetail],
  );

  if (!accessToken) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md border border-gray-100 p-8">
          <div className="flex justify-center mb-4 text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-14 h-14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h1 className="text-center text-blue-800 font-bold text-xl uppercase mb-2">
            Tra cứu hóa đơn điện tử
          </h1>
          <p className="text-center text-gray-500 text-sm mb-8">
            Đăng nhập bằng mã khách hàng (DigiCode) và số điện thoại đăng ký.
          </p>
          <form onSubmit={handleLogin} className="space-y-5" noValidate>
            <div>
              <label
                htmlFor="digiCode"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mã khách hàng (DigiCode)
              </label>
              <Input
                id="digiCode"
                size="large"
                value={digiCode}
                onChange={(e) => setDigiCode(e.target.value)}
                placeholder="Ví dụ: 00800219"
                autoComplete="off"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Số điện thoại
              </label>
              <Input
                id="phone"
                size="large"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Số điện thoại đăng ký"
                autoComplete="tel"
              />
            </div>
            {loginError && (
              <p className="text-red-500 text-sm text-center">{loginError}</p>
            )}
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              loading={loginLoading}
              className="!bg-orange-500 hover:!bg-orange-600 !border-orange-500"
            >
              Đăng nhập
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-16">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-blue-900 tracking-tight">
            Tra cứu hóa đơn tiền nước
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Công ty TNHH Cấp nước Tóc Tiên — khu vực phục vụ của quý khách.
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50"
          >
            ← Về trang chủ
          </Link>
          <Button onClick={() => logout()}>Đăng xuất</Button>
        </div>
      </div>

      <Spin spinning={customerLoading}>
        <Card
          className="mb-8 shadow-sm border-blue-100 overflow-hidden"
          styles={{ body: { padding: 0 } }}
        >
          <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 px-6 py-4">
            <h2 className="text-white font-semibold text-lg">
              Thông tin khách hàng
            </h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {customer ? (
              <>
                <div>
                  <span className="text-gray-500">Mã khách hàng (DigiCode)</span>
                  <p className="font-semibold text-gray-900 mt-0.5">
                    {customer.digiCode}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500">Tên khách hàng</span>
                  <p className="font-semibold text-gray-900 mt-0.5">
                    {customer.name}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500">Số điện thoại</span>
                  <p className="font-semibold text-gray-900 mt-0.5">
                    {customer.phone}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500">Địa chỉ</span>
                  <p className="font-semibold text-gray-900 mt-0.5">
                    {customer.address || "—"}
                  </p>
                </div>
                <div className="md:col-span-2 flex flex-wrap gap-2 items-center">
                  <span className="text-gray-500 mr-2">Trạng thái:</span>
                  <Tag color="blue">{accountStatusLabel(customer.isActive)}</Tag>
                  <Tag color="cyan">{waterStatusLabel(customer.isWaterCut)}</Tag>
                </div>
              </>
            ) : (
              !customerLoading && (
                <Empty description="Không tải được thông tin khách hàng" />
              )
            )}
          </div>
        </Card>
      </Spin>

      <Card
        title={
          <span className="text-lg font-semibold text-gray-900">
            Danh sách hóa đơn
          </span>
        }
        className="shadow-sm border-gray-100"
        extra={
          <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
            <span className="text-gray-500 text-sm whitespace-nowrap">
              Lọc theo kỳ (năm/tháng):
            </span>
            <Input
              allowClear
              placeholder="Ví dụ: 201503 hoặc 2015"
              value={yearMonthInput}
              onChange={(e) => setYearMonthInput(e.target.value)}
              className="sm:w-52"
              maxLength={8}
            />
          </div>
        }
      >
        <Spin spinning={listLoading}>
          {invoices.length === 0 && !listLoading ? (
            <Empty description="Không có hóa đơn phù hợp" />
          ) : (
            <Table<QlkhInvoice>
              rowKey="id"
              columns={columns}
              dataSource={invoices}
              pagination={false}
              scroll={{ x: 900 }}
              size="middle"
              onRow={(record) => ({
                onClick: () => openDetail(record),
                className: "cursor-pointer hover:bg-blue-50/50",
              })}
            />
          )}
        </Spin>
        {meta && meta.total > 0 && (
          <div className="flex justify-end mt-6 pt-4 border-t border-gray-100">
            <Pagination
              current={page}
              pageSize={PAGE_SIZE}
              total={meta.total}
              showSizeChanger={false}
              showTotal={(t) => `${t} hóa đơn`}
              onChange={(p) => setPage(p)}
            />
          </div>
        )}
      </Card>

      <Modal
        open={detailOpen}
        onCancel={() => {
          setDetailOpen(false);
          setDetailInvoice(null);
        }}
        footer={[
          <Button key="close" type="primary" onClick={() => setDetailOpen(false)}>
            Đóng
          </Button>,
        ]}
        width={520}
        title={null}
        destroyOnHidden
      >
        <Spin spinning={detailLoading}>
          {detailInvoice && (
            <div className="rounded-xl border-2 border-blue-100 overflow-hidden bg-white shadow-inner">
              <div className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white text-center py-3 px-4">
                <p className="text-xs uppercase tracking-widest opacity-90">
                  Hóa đơn tiền nước
                </p>
                <p className="font-bold text-lg mt-1">
                  CÔNG TY TNHH CẤP NƯỚC TÓC TIÊN
                </p>
              </div>
              <div className="p-6 space-y-4 text-sm">
                <div className="flex justify-between border-b border-dashed border-gray-200 pb-3">
                  <span className="text-gray-500">Mã khách hàng</span>
                  <span className="font-semibold">{detailInvoice.digiCode}</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-gray-200 pb-3">
                  <span className="text-gray-500">Tên khách hàng</span>
                  <span className="font-semibold text-right max-w-[240px]">
                    {detailInvoice.customerName}
                  </span>
                </div>
                <div className="flex justify-between border-b border-dashed border-gray-200 pb-3">
                  <span className="text-gray-500">Kỳ thanh toán</span>
                  <span className="font-semibold text-orange-600">
                    {formatKyThanhToan(detailInvoice.yearMonth)}
                  </span>
                </div>
                {detailInvoice.createdDate ? (
                  <div className="flex justify-between border-b border-dashed border-gray-200 pb-3">
                    <span className="text-gray-500">Ngày lập</span>
                    <span>{formatNgayDb(detailInvoice.createdDate)}</span>
                  </div>
                ) : null}
                {detailInvoice.waterMeterSerial ? (
                  <div className="flex justify-between border-b border-dashed border-gray-200 pb-3">
                    <span className="text-gray-500">Số đồng hồ</span>
                    <span>{detailInvoice.waterMeterSerial}</span>
                  </div>
                ) : null}
                {detailInvoice.numOfHouseHold != null ? (
                  <div className="flex justify-between border-b border-dashed border-gray-200 pb-3">
                    <span className="text-gray-500">Số hộ sử dụng</span>
                    <span>{detailInvoice.numOfHouseHold}</span>
                  </div>
                ) : null}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-lg bg-gray-50 p-3 text-center">
                    <p className="text-gray-500 text-xs">Chỉ số cũ</p>
                    <p className="text-xl font-bold text-gray-900">
                      {detailInvoice.oldVal ?? "—"}
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-3 text-center">
                    <p className="text-gray-500 text-xs">Chỉ số mới</p>
                    <p className="text-xl font-bold text-gray-900">
                      {detailInvoice.newVal ?? "—"}
                    </p>
                  </div>
                </div>
                <div className="rounded-xl bg-blue-50/80 border border-blue-100 p-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Tiền nước</span>
                    <span>{formatVnd(detailInvoice.amount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phí BVMT</span>
                    <span>{formatVnd(detailInvoice.envFee)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thuế GTGT</span>
                    <span>{formatVnd(detailInvoice.taxFee)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-blue-200 font-bold text-base text-blue-900">
                    <span>Tổng thanh toán</span>
                    <span>{formatVnd(detailInvoice.totalAmount)}</span>
                  </div>
                </div>
                <div className="text-center pt-2">
                  <Tag
                    color={
                      detailInvoice.paymentStatus === 2 ? "green" : "orange"
                    }
                    className="text-sm px-3 py-1"
                  >
                    {detailInvoice.paymentStatusLabel ?? "—"}
                  </Tag>
                </div>
              </div>
            </div>
          )}
        </Spin>
      </Modal>
    </div>
  );
}
