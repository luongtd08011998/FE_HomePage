const stats = [
  {
    value: "20+",
    label: "Năm Phát Triển",
    sub: "Từ năm 1998",
    color: "text-blue-400",
    hoverGrad: "from-blue-600/0 to-blue-600/10",
  },
  {
    value: "90.000",
    label: "m³/ngày",
    sub: "Công suất khai thác",
    color: "text-emerald-400",
    hoverGrad: "from-emerald-600/0 to-emerald-600/10",
  },
  {
    value: "140.000",
    label: "m³/ngày",
    sub: "Quy hoạch tương lai",
    color: "text-cyan-400",
    hoverGrad: "from-cyan-600/0 to-cyan-600/10",
  },
] as const;

const milestones = [
  {
    date: "Tháng 6/1998",
    title: "Khởi Đầu Hành Trình",
    body: "Thành lập theo Quyết định số 1349/QĐ.UBT của UBND Tỉnh Bà Rịa Vũng Tàu, phê duyệt dự án xây dựng Hệ thống cấp nước Tóc Tiên – huyện Tân Thành (nay là Thị xã Phú Mỹ).",
    dotColor: "bg-blue-600 shadow-blue-600/50",
    textColor: "text-blue-400",
    badge: null,
  },
  {
    date: "Ngày 10/06/2011",
    title: "Mở Rộng Quy Mô",
    body: "UBND Tỉnh BRVT phê duyệt chứng nhận đầu tư số 49121000336 cho dự án \"Tuyến ống truyền tải và nhà máy nước Tóc Tiên II\" để đáp ứng nhu cầu nước sinh hoạt và sản xuất công nghiệp.",
    dotColor: "bg-emerald-600 shadow-emerald-600/50",
    textColor: "text-emerald-400",
    badge: null,
  },
  {
    date: "Hiện Nay",
    title: "Công Nghệ Hiện Đại",
    body: "Sau hơn 20 năm phát triển với công nghệ được cải tiến, hiện đại, Nhà máy nước Tóc Tiên đã khẳng định được sứ mệnh cung cấp nước sạch an toàn, ổn định.",
    dotColor: "bg-cyan-600 shadow-cyan-600/50",
    textColor: "text-cyan-400",
    badge: "Đảm bảo rất an toàn",
  },
] as const;

const waterSources = [
  {
    name: "Hồ Suối Nhum",
    desc: "Nguồn nước chính, ổn định quanh năm",
    grad: "from-blue-600/20 to-blue-600/5",
    border: "border-blue-500/30 hover:border-blue-400/50",
    hoverGrad: "from-blue-600/0 to-blue-600/20",
    iconBg: "bg-blue-600/30 border-blue-500/50",
    iconColor: "text-blue-300",
  },
  {
    name: "Hồ Đá Đen",
    desc: "Nguồn nước dự phòng, đảm bảo liên tục",
    grad: "from-emerald-600/20 to-emerald-600/5",
    border: "border-emerald-500/30 hover:border-emerald-400/50",
    hoverGrad: "from-emerald-600/0 to-emerald-600/20",
    iconBg: "bg-emerald-600/30 border-emerald-500/50",
    iconColor: "text-emerald-300",
  },
] as const;

/** Lịch sử & thông tin nhà máy nước Tóc Tiên — nền tối, timeline, nguồn nước thô. */
export default function LichSuCongTy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-emerald-600/20" aria-hidden />
        <div className="absolute inset-0" aria-hidden>
          <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24">

          {/* Heading */}
          <div className="mb-20 text-center">
            <div className="mb-6 inline-block">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 to-emerald-600 opacity-50 blur-xl" aria-hidden />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-emerald-600 shadow-2xl">
                  <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </div>
            </div>
            <h2 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
              Nhà Máy Nước<br />Tóc Tiên
            </h2>
            <p className="mb-4 text-xl text-blue-200 md:text-2xl">Tập đoàn Hải Châu Việt Nam</p>
            <p className="text-lg text-slate-400">Nhà máy tư nhân đầu tiên tại Bà Rịa - Vũng Tàu</p>
          </div>

          {/* Stats Grid */}
          <div className="mb-20 grid gap-6 md:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label + s.value}
                className="group relative rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-lg transition-all duration-300 hover:bg-white/15"
              >
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${s.hoverGrad} opacity-0 transition-opacity group-hover:opacity-100`}
                  aria-hidden
                />
                <div className="relative">
                  <div className={`mb-2 text-5xl font-bold ${s.color}`}>{s.value}</div>
                  <div className="text-lg text-slate-300">{s.label}</div>
                  <div className="mt-2 text-sm text-slate-500">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute bottom-0 left-8 top-0 w-0.5 bg-gradient-to-b from-blue-600 via-emerald-600 to-cyan-600" aria-hidden />

            <div className="space-y-12">
              {milestones.map((m) => (
                <div key={m.date} className="relative pl-20">
                  <div
                    className={`absolute left-6 h-5 w-5 rounded-full border-4 border-slate-900 shadow-lg ${m.dotColor}`}
                    aria-hidden
                  />
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-lg">
                    <div className={`mb-2 ${m.textColor}`}>{m.date}</div>
                    <h3 className="mb-3 text-xl font-semibold text-white">{m.title}</h3>
                    <p className="text-slate-300">{m.body}</p>
                    {m.badge && (
                      <div className="mt-4 flex items-center gap-2 text-emerald-400">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{m.badge}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Water Sources */}
          <div className="mt-20">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">Nguồn Nước Thô</h2>
              <p className="text-lg text-slate-400">Hai nguồn cung cấp ổn định và an toàn</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {waterSources.map((ws) => (
                <div
                  key={ws.name}
                  className={`group relative rounded-3xl border bg-gradient-to-br ${ws.grad} p-10 backdrop-blur-lg transition-all duration-300 ${ws.border}`}
                >
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${ws.hoverGrad} opacity-0 transition-opacity group-hover:opacity-100`}
                    aria-hidden
                  />
                  <div className="relative">
                    <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border ${ws.iconBg}`}>
                      <svg className={`h-8 w-8 ${ws.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-white">{ws.name}</h3>
                    <p className="text-slate-300">{ws.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
