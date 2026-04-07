"use client";

import { useState } from "react";

export default function TraCuuHoaDonPage() {
  const [maKH, setMaKH] = useState("");
  const [dienThoai, setDienThoai] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!maKH.trim() || !dienThoai.trim()) {
      setError("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    setLoading(true);
    // Fake API — thay bằng API thật khi BE sẵn sàng
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSuccess(true);
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md border border-gray-100 p-8">
        {/* Icon */}
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
          Nhập thông tin để tra cứu hóa đơn tiền nước của bạn.
        </p>

        {success ? (
          <div className="text-center">
            <div className="flex justify-center mb-3 text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <p className="text-green-600 font-semibold text-base mb-1">
              Đăng nhập thành công!
            </p>
            <p className="text-gray-500 text-sm">
              Chức năng tra cứu hóa đơn sẽ được cập nhật sớm.
            </p>
            <button
              onClick={() => {
                setSuccess(false);
                setMaKH("");
                setDienThoai("");
              }}
              className="mt-6 text-sm text-blue-600 hover:underline"
            >
              ← Quay lại
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label
                htmlFor="maKH"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mã khách hàng
              </label>
              <input
                id="maKH"
                type="text"
                value={maKH}
                onChange={(e) => setMaKH(e.target.value)}
                placeholder="Nhập mã khách hàng"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                autoComplete="off"
              />
            </div>

            <div>
              <label
                htmlFor="dienThoai"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Số điện thoại
              </label>
              <input
                id="dienThoai"
                type="tel"
                value={dienThoai}
                onChange={(e) => setDienThoai(e.target.value)}
                placeholder="Nhập số điện thoại đăng ký"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                autoComplete="off"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold rounded-xl transition text-sm"
            >
              {loading ? "Đang xác thực..." : "Đăng nhập"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
