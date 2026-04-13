const domesticAreas = [
  "Các hộ dân ở phía đông Quốc lộ 51",
  "Khu vực Nam Hiệp Thành",
  "Từ điểm giao Quốc lộ 51 và đường QH33 đi theo lề trái về Đường 81",
] as const;

const industrialAreas = [
  "Khu công nghiệp Mỹ Xuân B1-Conac",
  "50% Khu công nghiệp PM1",
  "Khu công nghiệp Phú Mỹ 2 và Phú Mỹ 2 mở rộng",
  "Khu công nghiệp Cái Mép",
] as const;

/** Phạm vi cấp nước — chuyển từ docs/pvcn.md, không dùng motion/lucide. */
export default function PhamViCapNuoc() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-emerald-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-600 shadow-xl shadow-blue-600/20">
              <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">Phạm Vi Cấp Nước</h2>
          <p className="text-xl text-slate-600">Công ty TNHH Cấp nước Tóc Tiên</p>
          <p className="mt-1 text-slate-500">
            Quyết định số 14414/UB-ND-VP - UBND Tỉnh Bà Rịa - Vũng Tàu
          </p>
        </div>

        {/* Coverage Areas */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* Nước Sinh Hoạt */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200/50">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-gradient-to-br from-blue-500/10 to-transparent" aria-hidden />
            <div className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-600/30">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="mb-6 text-2xl font-bold text-slate-900">Nước Sinh Hoạt</h3>
              <div className="space-y-4">
                {domesticAreas.map((area) => (
                  <div key={area} className="group/item flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600 transition-transform group-hover/item:scale-150" aria-hidden />
                    <p className="text-slate-600">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Nước Công Nghiệp */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-200/50">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-gradient-to-br from-emerald-500/10 to-transparent" aria-hidden />
            <div className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-600/30">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="mb-6 text-2xl font-bold text-slate-900">Nước Công Nghiệp</h3>
              <div className="space-y-4">
                {industrialAreas.map((area) => (
                  <div key={area} className="group/item flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600 transition-transform group-hover/item:scale-150" aria-hidden />
                    <p className="text-slate-600">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
