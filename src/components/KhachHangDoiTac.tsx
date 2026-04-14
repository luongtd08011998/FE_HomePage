const industrialCustomers = [
  "KCN Phú Mỹ 1",
  "KCN Phú Mỹ 2 & Mở rộng",
  "KCN Cái Mép",
  "KCN Mỹ Xuân B1",
] as const;

const achievementStats = [
  {
    value: "20+",
    label: "Năm Kinh Nghiệm",
    grad: "from-amber-600 to-orange-600",
    card: "from-amber-600/10 to-orange-600/10",
    border: "border-amber-500/30 group-hover:border-amber-400/50",
    valueColor: "text-amber-400",
  },
  {
    value: "8000+",
    label: "Hộ Dân Phục Vụ",
    grad: "from-blue-600 to-cyan-600",
    card: "from-blue-600/10 to-cyan-600/10",
    border: "border-blue-500/30 group-hover:border-blue-400/50",
    valueColor: "text-blue-400",
  },
  {
    value: "5+",
    label: "Khu Công Nghiệp",
    grad: "from-emerald-600 to-teal-600",
    card: "from-emerald-600/10 to-teal-600/10",
    border: "border-emerald-500/30 group-hover:border-emerald-400/50",
    valueColor: "text-emerald-400",
  },
  {
    value: "100%",
    label: "Chất Lượng Cam Kết",
    grad: "from-violet-600 to-purple-600",
    card: "from-violet-600/10 to-purple-600/10",
    border: "border-violet-500/30 group-hover:border-violet-400/50",
    valueColor: "text-violet-400",
  },
] as const;

const checkIcon = (colorClass: string) => (
  <svg className={`h-5 w-5 shrink-0 ${colorClass}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden>
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

/** Khách hàng & đối tác — người dân + khu công nghiệp + thống kê thành tích. */
export default function KhachHangDoiTac() {
  return (
    <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900">
      <div className="mx-auto max-w-7xl px-6 py-24">

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-block">
            <div className="rounded-full border border-orange-500/30 bg-gradient-to-r from-orange-600/20 to-amber-600/20 px-6 py-2 backdrop-blur-sm">
              <span className="text-orange-300">Đối Tác Tin Cậy</span>
            </div>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">Khách Hàng</h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-300">
            Hơn 20 năm được sự tin tưởng phục vụ người dân và các khu công nghiệp trên địa bàn Thị xã Phú Mỹ
          </p>
        </div>

        {/* Trust Banner */}
        <div className="relative mb-16">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-600/20 via-amber-600/20 to-yellow-600/20 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-gradient-to-br from-orange-600/10 via-amber-600/10 to-yellow-600/10 p-12 text-center backdrop-blur-lg md:p-16">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" aria-hidden />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" aria-hidden />
            <div className="relative">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-600 to-amber-600 shadow-2xl shadow-orange-600/40">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="mb-6 text-3xl font-bold text-white md:text-4xl">Đối Tác Đáng Tin Cậy</h3>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
                Đây là động lực quan trọng để chúng tôi tiếp tục không ngừng nỗ lực đầu tư phát triển trong thời gian tới
              </p>
            </div>
          </div>
        </div>

        {/* Two customer cards */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Người Dân */}
          <div className="group relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 opacity-30 blur-2xl transition-opacity group-hover:opacity-50" aria-hidden />
            <div className="relative rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 p-10 backdrop-blur-lg transition-all duration-300 group-hover:border-blue-400/50">
              <div className="mb-8 flex items-center gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-600/30 transition-transform group-hover:scale-110">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-3xl font-bold text-white">Người Dân</h3>
                  <p className="text-blue-200">Cư dân Thị xã Phú Mỹ</p>
                </div>
              </div>

              <div className="mb-6 rounded-2xl border border-blue-500/20 bg-blue-950/30 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <svg className="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  <h4 className="text-lg text-white">Phục vụ cộng đồng</h4>
                </div>
                <p className="leading-relaxed text-slate-300">
                  Cung cấp nước sạch chất lượng cao cho hàng ngàn hộ gia đình trên địa bàn Thị xã Phú Mỹ, đảm bảo sức khỏe và chất lượng cuộc sống cho cộng đồng
                </p>
              </div>

              <div className="flex items-center gap-3 text-blue-300">
                {checkIcon("text-blue-300")}
                <span>Nước sạch an toàn 24/7</span>
              </div>
            </div>
          </div>

          {/* Khu Công Nghiệp */}
          <div className="group relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-600 to-green-600 opacity-30 blur-2xl transition-opacity group-hover:opacity-50" aria-hidden />
            <div className="relative rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-600/10 to-green-600/10 p-10 backdrop-blur-lg transition-all duration-300 group-hover:border-emerald-400/50">
              <div className="mb-8 flex items-center gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-green-600 shadow-lg shadow-emerald-600/30 transition-transform group-hover:scale-110">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-3xl font-bold text-white">Khu Công Nghiệp</h3>
                  <p className="text-emerald-200">Đối tác công nghiệp</p>
                </div>
              </div>

              <div className="mb-6 rounded-2xl border border-emerald-500/20 bg-emerald-950/30 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <svg className="h-6 w-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                  <h4 className="text-lg text-white">Các khu công nghiệp lớn</h4>
                </div>
                <div className="space-y-3">
                  {industrialCustomers.map((kcn) => (
                    <div key={kcn} className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden />
                      <p className="text-slate-300">{kcn}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 text-emerald-300">
                {checkIcon("text-emerald-300")}
                <span>Đáp ứng nhu cầu sản xuất quy mô lớn</span>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {achievementStats.map((s) => (
            <div key={s.label} className="group relative">
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${s.grad} opacity-30 blur-xl transition-opacity group-hover:opacity-50`} aria-hidden />
              <div className={`relative rounded-2xl border bg-gradient-to-br ${s.card} p-6 text-center backdrop-blur-lg transition-all ${s.border}`}>
                <div className={`mb-2 text-4xl font-bold ${s.valueColor}`}>{s.value}</div>
                <div className="text-slate-300">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
