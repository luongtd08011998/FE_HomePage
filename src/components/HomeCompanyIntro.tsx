import Image from "next/image";
import Link from "next/link";
import { CARD_HOVER_CLASS } from "@/lib/cardHover";

function IconShield({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036c.635-.403 1.433-.403 2.068 0l6.154 3.782c.62.383.992 1.056.992 1.795v5.182a2.25 2.25 0 01-1.128 1.928l-6.154 3.782a2.25 2.25 0 01-2.068 0L5.628 20.629a2.25 2.25 0 01-1.128-1.928V13.52c0-.739.372-1.412.992-1.795L9.932 7.943a2.25 2.25 0 012.068 0z"
      />
    </svg>
  );
}

function IconHeart({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733C11.285 4.876 9.623 3.75 7.688 3.75c-2.59 0-4.688 2.015-4.688 4.5 0 7.23 9 12 9 12s9-4.77 9-12z"
      />
    </svg>
  );
}

function IconZap({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    </svg>
  );
}

function IconTrendingUp({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
      />
    </svg>
  );
}

function IconTarget({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9 9 0 100-18 9 9 0 000 18z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 12.75h.008v.008H12v-.008z"
      />
    </svg>
  );
}

function IconAward({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}

function IconFactory({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008H16.5v-.008zm0 3h.008v.008H16.5V18z"
      />
    </svg>
  );
}

function IconUsers({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.433-2.127M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    </svg>
  );
}

type MilestoneIcon = typeof IconFactory;

const values = [
  {
    icon: IconShield,
    title: "Chất lượng đảm bảo",
    description:
      "Cam kết nguồn nước sạch đạt chuẩn, quy trình kiểm tra và giám sát chặt chẽ.",
  },
  {
    icon: IconHeart,
    title: "Tận tâm phục vụ",
    description:
      "Đội ngũ hỗ trợ chuyên nghiệp, tiếp nhận đăng ký, sửa chữa và tư vấn cho khách hàng.",
  },
  {
    icon: IconZap,
    title: "Nhanh chóng",
    description:
      "Ứng dụng và kênh trực tuyến giúp tra cứu, thanh toán và liên hệ thuận tiện hơn.",
  },
  {
    icon: IconTrendingUp,
    title: "Phát triển bền vững",
    description:
      "Đầu tư hạ tầng và công nghệ, hướng tới phục vụ ổn định, an toàn và thân thiện môi trường.",
  },
];

const milestones: { year: string; event: string; icon: MilestoneIcon }[] = [
  { year: "2010", event: "Khởi đầu hành trình phục vụ cộng đồng", icon: IconFactory },
  { year: "2015", event: "Hoàn thiện hệ thống quản lý chất lượng ISO 9001", icon: IconAward },
  { year: "2020", event: "Mở rộng mạng lưới và dịch vụ chăm sóc khách hàng", icon: IconTrendingUp },
  { year: "2026", event: "Đồng hành cùng hàng chục nghìn hộ sử dụng nước", icon: IconUsers },
];

const stats = [
  { number: "15+", label: "Năm kinh nghiệm", icon: IconAward },
  { number: "24/7", label: "Kênh hỗ trợ", icon: IconZap },
  { number: "ISO", label: "9001:2015", icon: IconShield },
  { number: "100%", label: "Cam kết chất lượng", icon: IconHeart },
];

export default function HomeCompanyIntro() {
  return (
    <div className="mt-5 scroll-mt-4 border-t border-sky-100/70 pt-5 sm:mt-6 sm:pt-6">
      {/* Giới thiệu doanh nghiệp — chuyển từ docs/Intro.md, đồng bộ thương hiệu trang chủ */}
      <section className="py-10 sm:py-12">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          <div className="relative h-[280px] overflow-hidden rounded-2xl shadow-lg ring-1 ring-sky-100/80 sm:h-[360px] md:h-[400px] lg:h-[440px]">
            <Image
              src="https://images.unsplash.com/photo-1716703432455-3045789de738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="Đội ngũ và hoạt động Nước Tóc Tiên"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Nước Tóc Tiên — Đối tác tin cậy của bạn
            </h2>
            <p className="mb-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              Với nền tảng nhiều năm phục vụ, chúng tôi khẳng định vị thế trong lĩnh vực cấp
              nước sạch và chăm sóc khách hàng tại địa phương, đồng hành cùng gia đình và doanh
              nghiệp.
            </p>
            <p className="mb-6 text-base leading-relaxed text-gray-600 sm:text-lg">
              Chúng tôi tự hào mang đến nguồn nước ổn định, quy trình minh bạch và các tiện ích
              như tra cứu hóa đơn, thanh toán và hỗ trợ trực tuyến để mọi thao tác thuận tiện hơn.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-100">
                <IconAward className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900">ISO 9001:2015</p>
                <p className="text-sm text-gray-500">Chứng nhận hệ thống quản lý chất lượng</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl bg-gradient-to-b from-sky-50/90 to-white py-10 px-4 sm:py-12 sm:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
            Tầm nhìn &amp; Sứ mệnh
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">
            Hướng tới dịch vụ cấp nước bền vững, an toàn và thân thiện với từng khách hàng.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 md:gap-8">
          <div
            className={`rounded-2xl border border-sky-100/80 bg-gradient-to-b from-white to-sky-50/40 p-6 shadow-sm sm:p-8 ${CARD_HOVER_CLASS}`}
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600">
              <IconTarget className="h-7 w-7 text-white" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">Tầm nhìn</h3>
            <p className="leading-relaxed text-gray-600">
              Trở thành đơn vị cấp nước được tin tưởng nhờ chất lượng vận hành và dịch vụ chuyên
              nghiệp; mở rộng phạm vi phục vụ, đáp ứng tốt nhu cầu sinh hoạt và sản xuất.
            </p>
          </div>
          <div
            className={`rounded-2xl border border-sky-100/80 bg-gradient-to-b from-white to-sky-50/40 p-6 shadow-sm sm:p-8 ${CARD_HOVER_CLASS}`}
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600">
              <IconHeart className="h-7 w-7 text-white" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">Sứ mệnh</h3>
            <p className="leading-relaxed text-gray-600">
              Bảo vệ sức khỏe cộng đồng bằng nguồn nước đạt chuẩn; không ngừng cải tiến quy trình,
              minh bạch hóa đơn và kênh giao tiếp với khách hàng.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">Giá trị cốt lõi</h2>
          <p className="text-base text-gray-600 sm:text-lg">
            Những giá trị làm nên sự khác biệt của Nước Tóc Tiên.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className={`rounded-2xl border border-sky-100/80 bg-gradient-to-b from-white to-sky-50/40 p-6 shadow-sm ${CARD_HOVER_CLASS}`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{value.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-2xl bg-gradient-to-b from-white to-sky-50/80 py-10 px-2 sm:py-12 sm:px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
            Hành trình phát triển
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">Một số cột mốc tiêu biểu.</p>
        </div>
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-sky-200 md:block" />
          <ul className="space-y-8 md:space-y-12">
            {milestones.map((milestone, index) => {
              const MIcon = milestone.icon;
              const reverse = index % 2 === 0;
              return (
                <li
                  key={milestone.year}
                  className={`relative flex flex-col items-center gap-6 md:flex-row md:gap-8 ${
                    reverse ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 md:text-right">
                    <div
                      className={`mx-auto max-w-md rounded-2xl border border-sky-100/80 bg-gradient-to-b from-white to-sky-50/40 p-5 shadow-sm sm:p-6 ${CARD_HOVER_CLASS} ${
                        reverse ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"
                      }`}
                    >
                      <div className="mb-2 flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100">
                          <MIcon className="h-6 w-6 text-blue-600" />
                        </div>
                        <p className="text-xl font-bold text-blue-600">{milestone.year}</p>
                      </div>
                      <p className="text-base font-medium text-gray-900">{milestone.event}</p>
                    </div>
                  </div>
                  <div
                    className="hidden h-3 w-3 shrink-0 rounded-full border-4 border-white bg-blue-500 shadow-md md:block"
                    aria-hidden
                  />
                  <div className="hidden flex-1 md:block" />
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="border-t border-sky-100/70 py-8 sm:py-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {stats.map((s) => {
            const SIcon = s.icon;
            return (
              <div
                key={s.label}
                className={`flex flex-col items-center rounded-xl border border-sky-100/80 bg-gradient-to-b from-white to-sky-50/40 px-3 py-4 text-center shadow-sm sm:py-5 ${CARD_HOVER_CLASS}`}
              >
                <SIcon className="mb-2 h-6 w-6 text-blue-600" />
                <p className="text-xl font-extrabold text-gray-900 sm:text-2xl">{s.number}</p>
                <p className="mt-1 text-xs text-gray-600 sm:text-sm">{s.label}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-6 flex justify-center">
          <Link
            href="/category/gioi-thieu"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Xem thêm bài viết giới thiệu →
          </Link>
        </div>
      </section>
    </div>
  );
}
