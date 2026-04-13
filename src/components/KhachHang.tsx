/* SVG icons (không dùng lucide-react) */

function IconUsers({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm8 0a3 3 0 100-6 3 3 0 000 6zm4 10v-2a3 3 0 00-3-3" />
    </svg>
  );
}

function IconBuilding({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function IconCalendar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function IconWaves({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0M4 16c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
    </svg>
  );
}

function IconFactory({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" />
    </svg>
  );
}

function IconHome({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function IconStore({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-4h-4" />
    </svg>
  );
}

function IconCheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zm13.28-3.22a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-2.25-2.25a.75.75 0 011.06-1.06l1.72 1.72 3.97-3.97a.75.75 0 011.06 0z" clipRule="evenodd" />
    </svg>
  );
}

/* ============================================================
   DATA
   ============================================================ */

const stats = [
  { Icon: IconUsers,    value: "10,000+",  label: "Khách hàng" },
  { Icon: IconCalendar, value: "25+",      label: "Năm hoạt động" },
  { Icon: IconFactory,  value: "05",       label: "KCN phục vụ" },
  { Icon: IconWaves,    value: "80,500",   label: "m³/ngày" },
] as const;

const customers = [
  {
    Icon: IconFactory,
    color: "from-blue-600 to-blue-700",
    name: "KCN Phú Mỹ 1",
    type: "Khu công nghiệp",
  },
  {
    Icon: IconFactory,
    color: "from-sky-500 to-blue-600",
    name: "KCN Phú Mỹ 2",
    type: "Khu công nghiệp",
  },
  {
    Icon: IconFactory,
    color: "from-blue-500 to-sky-500",
    name: "KCN Phú Mỹ 3",
    type: "Khu công nghiệp",
  },
  {
    Icon: IconHome,
    color: "from-green-500 to-green-600",
    name: "Khu dân cư",
    type: "Hộ gia đình & Dân sinh",
  },
  {
    Icon: IconStore,
    color: "from-orange-500 to-amber-500",
    name: "Sản xuất & KD",
    type: "Đơn vị sản xuất kinh doanh",
  },
] as const;

/* ============================================================
   COMPONENT — từ docs/them.md, không dùng motion/lucide
   ============================================================ */

export default function KhachHang() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white px-4 py-16 md:px-6">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-blue-100 px-6 py-3">
            <IconUsers className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-medium text-blue-900">Đối Tác Tin Cậy</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Khách Hàng</h2>
          <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-600">
            Với hơn 20 năm qua nhà máy nước Tóc Tiên đã đáp ứng tốt nhu cầu phục vụ các dịch vụ
            và các khu công nghiệp Phú Mỹ, thị xã Phú Mỹ, khu dân cư và các đơn vị sản xuất kinh doanh khác.
            Đây là động lực quan trọng để chúng tôi tự hào và trở nên vững mạnh như ngày hôm nay.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white p-6 text-center shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                <stat.Icon className="h-7 w-7 text-blue-600" />
              </div>
              <p className="mb-2 text-4xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Customer Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {customers.map((customer) => (
            <div key={customer.name} className="group relative">
              <div className="rounded-2xl border-2 border-blue-100 bg-white p-6 shadow-xl transition-all hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl">
                <div
                  className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${customer.color} shadow-lg transition-transform group-hover:scale-110`}
                >
                  <customer.Icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="mb-2 text-center text-lg font-bold text-gray-900">{customer.name}</h3>
                <p className="text-center text-sm text-gray-600">{customer.type}</p>

                {/* Decorative badge */}
                <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-green-500 shadow-md">
                  <IconCheckCircle className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
