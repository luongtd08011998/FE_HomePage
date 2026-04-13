const domesticAreas = [
  { name: "Các hộ dân ở phía đông Quốc lộ 51", desc: "Khu vực dân cư chính" },
  { name: "Khu Nam Hiệp Thành", desc: "Khu dân cư tập trung" },
  { name: "Từ điểm giao QL51 và đường QH33", desc: "Đi theo lề trái về Đường 81" },
] as const;

const industrialAreas = [
  { name: "KCN Mỹ Xuân B1-Conac", desc: "Khu công nghiệp trọng điểm" },
  { name: "50% KCN PM1", desc: "Khu công nghiệp Phú Mỹ 1" },
  { name: "KCN Phú Mỹ 2 và Phú Mỹ 2 mở rộng", desc: "Khu công nghiệp mở rộng" },
  { name: "KCN Cái Mép", desc: "Khu công nghiệp cảng biển" },
] as const;

const infoBadges = [
  {
    title: "Vị Trí Chiến Lược",
    desc: "Phủ sóng các khu vực trọng điểm tại Phú Mỹ",
    bg: "bg-blue-600/20 border-blue-500/30",
    iconColor: "text-blue-400",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Cung Cấp Ổn Định",
    desc: "Đảm bảo nguồn nước liên tục 24/7",
    bg: "bg-emerald-600/20 border-emerald-500/30",
    iconColor: "text-emerald-400",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Năng Lực Cao",
    desc: "Đáp ứng nhu cầu sinh hoạt và công nghiệp",
    bg: "bg-violet-600/20 border-violet-500/30",
    iconColor: "text-violet-400",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
] as const;

const checkIcon = (colorClass: string) => (
  <svg className={`h-5 w-5 shrink-0 ${colorClass}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden>
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

/** Khu vực phục vụ — phạm vi cấp nước sinh hoạt & công nghiệp theo QĐ UBND BRVT. */
export default function KhuVucPhucVu() {
  return (
    <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900">
      <div className="mx-auto max-w-7xl px-6 py-24">

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-block">
            <div className="rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 px-6 py-2 backdrop-blur-sm">
              <span className="text-blue-300">Khu Vực Phục Vụ</span>
            </div>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">Phạm Vi Cấp Nước</h2>
          <p className="mx-auto mb-2 max-w-3xl text-lg text-slate-300">
            Phân vùng cấp nước được UBND Tỉnh BRVT phê duyệt
          </p>
          <p className="text-slate-400">Quyết định số 14414/UBND-VP</p>
        </div>

        {/* Two main cards */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Nước Sinh Hoạt */}
          <div className="group relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-600 opacity-30 blur-2xl transition-opacity group-hover:opacity-50" aria-hidden />
            <div className="relative flex h-full flex-col rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 p-10 backdrop-blur-lg transition-all duration-300 group-hover:border-blue-400/50">
              <div className="mb-8 flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 shadow-lg shadow-blue-600/30 transition-transform group-hover:scale-110">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-3xl font-bold text-white">Nước Sinh Hoạt</h3>
                  <p className="text-blue-200">Phục vụ khu vực dân cư</p>
                </div>
              </div>

              <div className="grow space-y-4">
                {domesticAreas.map((area) => (
                  <div
                    key={area.name}
                    className="group/item flex items-start gap-4 rounded-2xl border border-blue-500/20 bg-blue-950/30 p-4 transition-all hover:border-blue-500/40 hover:bg-blue-950/50"
                  >
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400 transition-all group-hover/item:scale-150 group-hover/item:shadow-lg group-hover/item:shadow-cyan-400/50" aria-hidden />
                    <div>
                      <p className="mb-1 text-white">{area.name}</p>
                      <p className="text-sm text-slate-400">{area.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-blue-500/20 pt-6">
                {checkIcon("text-cyan-400")}
                <span className="text-slate-300">Đảm bảo nước sạch cho người dân</span>
              </div>
            </div>
          </div>

          {/* Nước Công Nghiệp */}
          <div className="group relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-600 opacity-30 blur-2xl transition-opacity group-hover:opacity-50" aria-hidden />
            <div className="relative flex h-full flex-col rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-600/10 to-teal-600/10 p-10 backdrop-blur-lg transition-all duration-300 group-hover:border-emerald-400/50">
              <div className="mb-8 flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 shadow-lg shadow-emerald-600/30 transition-transform group-hover:scale-110">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-3xl font-bold text-white">Nước Công Nghiệp</h3>
                  <p className="text-emerald-200">Phục vụ các khu công nghiệp</p>
                </div>
              </div>

              <div className="grow space-y-4">
                {industrialAreas.map((area) => (
                  <div
                    key={area.name}
                    className="group/item flex items-start gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-950/30 p-4 transition-all hover:border-emerald-500/40 hover:bg-emerald-950/50"
                  >
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-400 transition-all group-hover/item:scale-150 group-hover/item:shadow-lg group-hover/item:shadow-teal-400/50" aria-hidden />
                    <div>
                      <p className="mb-1 text-white">{area.name}</p>
                      <p className="text-sm text-slate-400">{area.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-emerald-500/20 pt-6">
                {checkIcon("text-teal-400")}
                <span className="text-slate-300">Đáp ứng nhu cầu sản xuất công nghiệp</span>
              </div>
            </div>
          </div>
        </div>

        {/* Info badges */}
        <div className="relative mt-12">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-emerald-600/10 blur-xl" aria-hidden />
          <div className="relative rounded-3xl border border-slate-700/50 bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-8 backdrop-blur-lg">
            <div className="grid gap-8 text-center md:grid-cols-3">
              {infoBadges.map((b) => (
                <div key={b.title}>
                  <div className={`mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${b.bg} ${b.iconColor}`}>
                    {b.icon}
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-white">{b.title}</h4>
                  <p className="text-sm text-slate-400">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
