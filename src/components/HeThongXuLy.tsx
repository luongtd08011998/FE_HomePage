const checkIcon = (color: string) => (
  <svg className={`h-5 w-5 shrink-0 ${color}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden>
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const technologies = [
  {
    title: "Công Nghệ Lắng",
    badge: "Tải trọng cao",
    body: (
      <>
        Lắng tải trọng cao với tải trọng hoạt động lên đến{" "}
        <span className="font-semibold text-cyan-400">trên 20 m/h</span> cho các bể lắng của Nhà máy.
      </>
    ),
    bullets: [
      "Công nghệ thủy lực thu nước đều toàn bề mặt",
      "Hạn chế hiện tượng ngắn mạch thủy lực so với kiểu lắng Lamen",
    ],
    footerLabel: "Hiệu quả",
    footerValue: "Ổn định cao",
    colors: {
      blur: "from-blue-600 to-cyan-600",
      card: "from-blue-600/10 to-cyan-600/10",
      border: "border-blue-500/30 group-hover:border-blue-400/50",
      iconGrad: "from-blue-600 to-cyan-600",
      badge: "bg-blue-600/30 border-blue-500/50 text-blue-200",
      infoBox: "bg-blue-950/50 border-blue-500/20",
      checkColor: "text-cyan-400 mt-0.5",
      footerBorder: "border-blue-500/20",
      footerValue: "text-cyan-400",
    },
    icon: (
      <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    ),
  },
  {
    title: "Hệ Thống Lọc",
    badge: "Leopold - USA",
    body: (
      <>
        Đan lọc 2 tầng HDPE được sản xuất bởi{" "}
        <span className="font-semibold text-violet-400">Leopold - Hoa Kỳ</span> cho các bể lọc.
      </>
    ),
    bullets: ["Đảm bảo chất lượng nước sau lọc", "Hiệu quả vận hành tối ưu"],
    footerLabel: "Công nghệ",
    footerValue: "HDPE 2 tầng",
    colors: {
      blur: "from-violet-600 to-purple-600",
      card: "from-violet-600/10 to-purple-600/10",
      border: "border-violet-500/30 group-hover:border-violet-400/50",
      iconGrad: "from-violet-600 to-purple-600",
      badge: "bg-violet-600/30 border-violet-500/50 text-violet-200",
      infoBox: "bg-violet-950/50 border-violet-500/20",
      checkColor: "text-purple-400 mt-0.5",
      footerBorder: "border-violet-500/20",
      footerValue: "text-purple-400",
    },
    icon: (
      <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
  },
  {
    title: "Khử Trùng",
    badge: "USA Technology",
    body: (
      <>
        Nước sau lọc được khử trùng bằng hệ thống châm clorin ở dạng{" "}
        <span className="font-semibold text-emerald-400">khí hóa lỏng</span> nhập khẩu từ Mỹ.
      </>
    ),
    bullets: ["Khử trùng hiệu quả cao", "An toàn cho sức khỏe người dùng"],
    footerLabel: "Phương pháp",
    footerValue: "Clorin hóa lỏng",
    colors: {
      blur: "from-emerald-600 to-teal-600",
      card: "from-emerald-600/10 to-teal-600/10",
      border: "border-emerald-500/30 group-hover:border-emerald-400/50",
      iconGrad: "from-emerald-600 to-teal-600",
      badge: "bg-emerald-600/30 border-emerald-500/50 text-emerald-200",
      infoBox: "bg-emerald-950/50 border-emerald-500/20",
      checkColor: "text-teal-400 mt-0.5",
      footerBorder: "border-emerald-500/20",
      footerValue: "text-teal-400",
    },
    icon: (
      <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
] as const;

/** Hệ thống xử lý chuyên sâu — 3 công nghệ lắng / lọc / khử trùng + banner chất lượng. */
export default function HeThongXuLy() {
  return (
    <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900">
      <div className="mx-auto max-w-7xl px-6 py-24">

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-block">
            <div className="rounded-full border border-violet-500/30 bg-gradient-to-r from-violet-600/20 to-blue-600/20 px-6 py-2 backdrop-blur-sm">
              <span className="text-violet-300">Công Nghệ Tiên Tiến</span>
            </div>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">Hệ Thống Xử Lý Chuyên Sâu</h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-300">
            Trang bị công nghệ hiện đại từ các thương hiệu hàng đầu thế giới
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {technologies.map((tech) => {
            const c = tech.colors;
            return (
              <div key={tech.title} className="group relative">
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${c.blur} opacity-30 blur-2xl transition-opacity group-hover:opacity-50`}
                  aria-hidden
                />
                <div
                  className={`relative flex h-full flex-col rounded-3xl border bg-gradient-to-br ${c.card} p-8 backdrop-blur-lg transition-all duration-300 ${c.border}`}
                >
                  {/* Title row */}
                  <div className="mb-6 flex items-start gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${c.iconGrad} transition-transform group-hover:scale-110`}
                    >
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 text-2xl font-bold text-white">{tech.title}</h3>
                      <div className={`inline-block rounded-full border px-3 py-1 backdrop-blur-sm ${c.badge}`}>
                        <span className="text-sm">{tech.badge}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <p className="mb-6 leading-relaxed text-slate-300">{tech.body}</p>

                  {/* Bullet list */}
                  <div className={`grow rounded-2xl border p-5 ${c.infoBox}`}>
                    <div className="space-y-3">
                      {tech.bullets.map((b) => (
                        <div key={b} className="flex items-start gap-3">
                          {checkIcon(c.checkColor)}
                          <p className="text-sm text-slate-300">{b}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className={`mt-6 flex items-center justify-between border-t pt-6 ${c.footerBorder}`}>
                    <span className="text-sm text-slate-400">{tech.footerLabel}</span>
                    <span className={`font-semibold ${c.footerValue}`}>{tech.footerValue}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Banner */}
        <div className="relative mt-12">
          <div
            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/20 via-emerald-600/20 to-violet-600/20 blur-xl"
            aria-hidden
          />
          <div className="relative rounded-3xl border border-white/20 bg-gradient-to-r from-blue-600/10 via-emerald-600/10 to-violet-600/10 p-8 text-center backdrop-blur-lg md:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">Chất Lượng Đảm Bảo</h3>
            <p className="mx-auto max-w-2xl text-lg text-slate-300">
              Sử dụng công nghệ và thiết bị từ các thương hiệu hàng đầu thế giới, đảm bảo cung cấp nước sạch đạt tiêu chuẩn cao nhất cho người dùng
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
