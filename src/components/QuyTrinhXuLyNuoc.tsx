const steps = [
  {
    step: 1,
    title: "Nước Thô",
    desc: "Nguồn đầu vào",
    grad: "from-slate-700 to-slate-800",
    blur: "from-slate-600 to-slate-700",
    border: "border-slate-600 group-hover:border-slate-500",
    numBg: "bg-slate-600 text-slate-300",
    iconBg: "bg-slate-600",
    iconColor: "text-slate-300",
    labelColor: "text-slate-400",
    arrowColor: "text-blue-500",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    step: 2,
    title: "Phản Ứng",
    desc: "Keo tụ hóa chất",
    grad: "from-blue-600 to-blue-700",
    blur: "from-blue-600 to-blue-700",
    border: "border-blue-500 group-hover:border-blue-400",
    numBg: "bg-blue-500 text-white",
    iconBg: "bg-blue-500",
    iconColor: "text-white",
    labelColor: "text-blue-100",
    arrowColor: "text-emerald-500",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Lắng",
    desc: "Tách tạp chất",
    grad: "from-cyan-600 to-cyan-700",
    blur: "from-cyan-600 to-cyan-700",
    border: "border-cyan-500 group-hover:border-cyan-400",
    numBg: "bg-cyan-500 text-white",
    iconBg: "bg-cyan-500",
    iconColor: "text-white",
    labelColor: "text-cyan-100",
    arrowColor: "text-emerald-500",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    ),
  },
  {
    step: 4,
    title: "Lọc",
    desc: "Lọc tinh vi",
    grad: "from-violet-600 to-violet-700",
    blur: "from-violet-600 to-violet-700",
    border: "border-violet-500 group-hover:border-violet-400",
    numBg: "bg-violet-500 text-white",
    iconBg: "bg-violet-500",
    iconColor: "text-white",
    labelColor: "text-violet-100",
    arrowColor: "text-emerald-500",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
  },
  {
    step: 5,
    title: "Nước Sạch",
    desc: "Đạt tiêu chuẩn",
    grad: "from-emerald-600 to-emerald-700",
    blur: "from-emerald-600 to-emerald-700",
    border: "border-2 border-emerald-400 group-hover:border-emerald-300",
    numBg: "bg-emerald-400 text-white",
    iconBg: "bg-emerald-500",
    iconColor: "text-white",
    labelColor: "text-emerald-100",
    arrowColor: null,
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
] as const;

const arrowSvg = (
  <svg className="h-12 w-12 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const arrowDownSvg = (
  <svg className="mx-auto h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);

/** Quy trình xử lý nước — 5 bước, layout ngang desktop / dọc mobile. */
export default function QuyTrinhXuLyNuoc() {
  return (
    <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900">
      <div className="mx-auto max-w-7xl px-6 py-24">

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-block">
            <div className="rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 px-6 py-2 backdrop-blur-sm">
              <span className="text-blue-300">Công Nghệ Hiện Đại</span>
            </div>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">Quy Trình Xử Lý Nước</h2>
          <p className="mx-auto mb-4 max-w-3xl text-lg text-slate-300 md:text-xl">
            Sử dụng quy trình xử lý truyền thống được ứng dụng phổ biến trên thế giới
          </p>
          <p className="mx-auto max-w-2xl text-slate-400">
            Hệ thống gồm 2 cụm xử lý hoạt động độc lập, đảm bảo hệ số dự phòng và an toàn trong quá trình vận hành
          </p>
        </div>

        {/* Desktop — horizontal flow */}
        <div className="hidden items-center justify-between gap-4 md:flex">
          {steps.map((s, i) => (
            <div key={s.step} className="contents">
              <div className="group flex-1">
                <div className="relative">
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${s.blur} opacity-50 blur-xl transition-opacity group-hover:opacity-75`}
                    aria-hidden
                  />
                  <div
                    className={`relative flex h-64 flex-col items-center justify-center rounded-3xl bg-gradient-to-br ${s.grad} border p-8 transition-all duration-300 ${s.border} ${s.step === 5 ? "shadow-2xl shadow-emerald-600/50" : ""}`}
                  >
                    <div className={`absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-sm ${s.numBg}`}>
                      {s.step}
                    </div>
                    <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${s.iconBg} transition-transform group-hover:scale-110 ${s.iconColor}`}>
                      {s.icon}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-white">{s.title}</h3>
                    <p className={`text-center text-sm ${s.labelColor}`}>{s.desc}</p>
                  </div>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className={`shrink-0 ${steps[i].arrowColor ?? "text-emerald-500"}`}>
                  {arrowSvg}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile — vertical flow */}
        <div className="flex flex-col gap-4 md:hidden">
          {steps.map((s, i) => (
            <div key={s.step}>
              <div className="group relative">
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${s.blur} opacity-40 blur-xl transition-opacity group-hover:opacity-65`}
                  aria-hidden
                />
                <div
                  className={`relative flex items-center gap-5 rounded-2xl bg-gradient-to-br ${s.grad} border p-5 transition-all duration-300 ${s.border}`}
                >
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${s.iconBg} ${s.iconColor}`}>
                    {s.icon}
                  </div>
                  <div>
                    <div className={`mb-0.5 text-xs font-medium ${s.numBg.includes("slate") ? "text-slate-400" : "text-white/60"}`}>
                      Bước {s.step}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                    <p className={`text-sm ${s.labelColor}`}>{s.desc}</p>
                  </div>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className={`py-1 ${steps[i].arrowColor ?? "text-emerald-500"}`}>
                  {arrowDownSvg}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
