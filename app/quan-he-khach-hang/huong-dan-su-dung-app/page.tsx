import type { Metadata } from "next";
import Link from "next/link";
import AppDownloadBadges from "@/components/common/AppDownloadBadges";
import SmartQrCodeCard from "@/components/common/SmartQrCodeCard";
import {
  Smartphone,
  LogIn,
  Home,
  FileText,
  Bell,
  MessageSquareWarning,
  UserCheck,
  FolderOpen,
  LayoutGrid,
  CheckCircle2,
  QrCode,
  ArrowRight,
  PhoneCall,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hướng dẫn sử dụng App CSKH CNTOCTIEN - Cấp Nước Tóc Tiên",
  description:
    "Tài liệu hướng dẫn chi tiết từng bước cài đặt, đăng nhập, tra cứu hóa đơn, thanh toán VietQR, báo cáo sự cố và quản lý hồ sơ trên ứng dụng CSKH CNTOCTIEN.",
};

interface GuideImage {
  src: string;
  caption: string;
  badge?: string;
}

interface GuideSection {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  highlights: string[];
  note?: string;
  images: GuideImage[];
}

const GUIDE_SECTIONS: GuideSection[] = [
  {
    id: "dang-nhap",
    stepNumber: "01",
    title: "Màn hình đăng nhập",
    subtitle: "Truy cập hệ thống chăm sóc khách hàng bằng Mã khách hàng và Số điện thoại",
    icon: LogIn,
    highlights: [
      "Nhập Mã khách hàng (8 chữ số in trên hóa đơn hoặc tin nhắn thông báo tiền nước, ví dụ: 00900041).",
      "Nhập Số điện thoại đã đăng ký với Công ty TNHH Cấp nước Tóc Tiên.",
      "Tích chọn 'Ghi nhớ đăng nhập' để tự động vào ứng dụng trong các lần mở tiếp theo.",
      "Nếu chưa có đồng hồ nước, quý khách có thể bấm 'Đăng ký lắp đặt trực tuyến' ngay trên màn hình đăng nhập.",
    ],
    images: [
      {
        src: "/huong-dan-app/01-dang-nhap.png",
        badge: "Bước 1",
        caption: "Giao diện đăng nhập ứng dụng CSKH CNTOCTIEN",
      },
    ],
  },
  {
    id: "man-hinh-chinh",
    stepNumber: "02",
    title: "Màn hình chính & Thanh toán nhanh",
    subtitle: "Theo dõi nhanh hóa đơn kỳ mới nhất và quét mã VietQR thanh toán ngay tại trang chủ",
    icon: Home,
    highlights: [
      "Hiển thị lời chào, Tên khách hàng, Mã KH hiện tại và nút 'Đổi mã KH' (dành cho khách hàng quản lý nhiều đồng hồ nước).",
      "Thẻ tóm tắt Hóa đơn kỳ gần nhất: Hiển thị số tiền, lượng nước sử dụng (m³), hạn thanh toán và trạng thái Đã thanh toán / Chưa thanh toán.",
      "Khi hóa đơn chưa thanh toán: Bấm vào nút 'Thanh toán ngay' sẽ hiện ngay cửa sổ Mã VietQR để quét thanh toán hoặc tải mã QR về máy.",
      "Cụm Dịch vụ tiện ích truy cập nhanh: Hóa đơn, Báo cáo sự cố, Hồ sơ khách hàng, Khác và thanh điều hướng 5 tab ở dưới cùng.",
    ],
    note: "Lưu ý: Khi khách hàng chưa thanh toán, chỉ cần bấm nút 'Thanh toán ngay' ở ngay màn hình chính là hệ thống sẽ bật lên mã VietQR (hình số 3) với số tiền và nội dung chuyển khoản được điền tự động.",
    images: [
      {
        src: "/huong-dan-app/02a-man-hinh-chinh-da-thanh-toan.jpg",
        badge: "Đã thanh toán",
        caption: "Trang chủ khi kỳ hóa đơn đã thanh toán",
      },
      {
        src: "/huong-dan-app/02b-man-hinh-chinh-chua-thanh-toan.jpg",
        badge: "Chưa thanh toán",
        caption: "Trang chủ hiển thị nút 'Thanh toán ngay'",
      },
      {
        src: "/huong-dan-app/02c-thanh-toan-ngay-qr.jpg",
        badge: "Quét mã VietQR",
        caption: "Mã QR hiện ra ngay khi bấm 'Thanh toán ngay'",
      },
    ],
  },
  {
    id: "hoa-don",
    stepNumber: "03",
    title: "Tra cứu Hóa đơn tiền nước & Chi tiết hóa đơn",
    subtitle: "Xem biểu đồ sản lượng tiêu thụ, tải hóa đơn điện tử và quét mã QR thanh toán",
    icon: FileText,
    highlights: [
      "Biểu đồ trực quan theo dõi biến động lượng nước tiêu thụ (m³) qua từng kỳ hóa đơn.",
      "Bảng danh sách hóa đơn các kỳ: Hiển thị Kỳ, Tiêu thụ (m³), Tổng tiền (VND) và biểu tượng trạng thái Đã thanh toán (tích xanh) / Chưa thanh toán (dấu X cam).",
      "Khi nhấn vào biểu tượng xem hóa đơn ở từng dòng kỳ hóa đơn, ứng dụng sẽ mở màn hình 'Chi tiết hóa đơn': Xem chỉ số cũ, chỉ số mới, lượng nước sử dụng và nút 'Tải hóa đơn điện tử'.",
      "Cuộn xuống phần dưới của màn hình 'Chi tiết hóa đơn' sẽ hiển thị thông tin hạn thanh toán và Mã QR thanh toán (VietQR) kèm nút 'Lưu mã QR về máy'.",
    ],
    note: "Lưu ý: Mã QR thanh toán nằm ở phần bên dưới của màn hình Chi tiết hóa đơn. Quý khách có thể bấm 'Lưu mã QR về máy' rồi mở bất kỳ ứng dụng Ngân hàng nào để chọn ảnh QR thanh toán chính xác.",
    images: [
      {
        src: "/huong-dan-app/03a-danh-sach-hoa-don.png",
        badge: "1. Danh sách & Biểu đồ",
        caption: "Biểu đồ tiêu thụ và danh sách hóa đơn các kỳ",
      },
      {
        src: "/huong-dan-app/03b-chi-tiet-hoa-don.png",
        badge: "2. Chi tiết hóa đơn",
        caption: "Nhấn xem hóa đơn để xem chỉ số & tải hóa đơn điện tử",
      },
      {
        src: "/huong-dan-app/03c-qr-thanh-toan.png",
        badge: "3. Phần dưới chi tiết",
        caption: "Cuộn xuống dưới Chi tiết hóa đơn để quét/lưu mã VietQR",
      },
    ],
  },
  {
    id: "thong-bao",
    stepNumber: "04",
    title: "Thông báo tiền nước & Lịch cúp nước",
    subtitle: "Nhận thông báo tức thì từ Công ty TNHH Cấp nước Tóc Tiên",
    icon: Bell,
    highlights: [
      "Phân loại thông báo khoa học theo 3 chuyên mục: Hóa đơn, Cúp nước, Nổi bật.",
      "Hỗ trợ lọc thông báo theo 'Tất cả' hoặc theo từng 'Mã KH' riêng biệt, đi kèm thanh tìm kiếm nhanh theo nội dung hoặc mã khách hàng.",
      "Hiển thị đầy đủ nội dung thông báo tiền nước kỳ mới, địa chỉ, tổng số tiền, hạn thanh toán và nút đánh dấu 'Đã đọc hết'.",
    ],
    images: [
      {
        src: "/huong-dan-app/04-thong-bao.jpg",
        badge: "Mục Thông báo",
        caption: "Quản lý thông báo Hóa đơn, Cúp nước và tin Nổi bật",
      },
    ],
  },
  {
    id: "phan-anh",
    stepNumber: "05",
    title: "Phản ánh dịch vụ (Báo cáo sự cố)",
    subtitle: "Gửi báo cáo sự cố rò rỉ, mất nước hoặc thắc mắc hóa đơn chỉ với 2 bước",
    icon: MessageSquareWarning,
    highlights: [
      "Bước 1 — Chọn Loại vấn đề & Địa điểm: Chọn loại sự cố (Rò rỉ nước, Chất lượng nước, Áp lực nước yếu, Mất nước, Hóa đơn, Đồng hồ nước, Khác), nhập địa điểm xảy ra rồi bấm Tiếp tục.",
      "Bước 2 — Mô tả & Đính kèm hình ảnh: Nhập mô tả chi tiết tình trạng, thời gian xảy ra và chụp hoặc chọn tối đa 5 hình ảnh minh họa từ điện thoại, sau đó bấm 'Gửi'.",
      "Theo dõi tiến độ xử lý tại tab 'Lịch sử' (các phản ánh khẩn cấp được tiếp nhận và xử lý nhanh chóng trong vòng 4 giờ).",
    ],
    images: [
      {
        src: "/huong-dan-app/05a-phan-anh-buoc-1.png",
        badge: "Bước 1/2",
        caption: "Chọn loại vấn đề cần phản ánh và nhập địa điểm",
      },
      {
        src: "/huong-dan-app/05b-phan-anh-buoc-2.png",
        badge: "Bước 2/2",
        caption: "Nhập mô tả tình trạng, đính kèm ảnh và bấm Gửi",
      },
    ],
  },
  {
    id: "tai-khoan",
    stepNumber: "06",
    title: "Thông tin chi tiết khách hàng (Tài khoản)",
    subtitle: "Quản lý thông tin liên hệ, trạng thái cấp nước và liên kết nhiều mã khách hàng",
    icon: UserCheck,
    highlights: [
      "Quản lý Mã khách hàng liên kết: Dễ dàng bấm '+ Thêm mã khách hàng liên kết' để theo dõi nhiều đồng hồ nước trên cùng một tài khoản điện thoại và chạm để chuyển đổi mã KH.",
      "Xem và cập nhật Thông tin liên hệ: Số điện thoại, Số điện thoại nhận SMS, Địa chỉ cấp nước.",
      "Tra cứu Thông tin bổ sung (Mã KH, Mã số thuế, Chính sách bảo mật) và kiểm tra Trạng thái tài khoản / Trạng thái cung cấp nước.",
    ],
    images: [
      {
        src: "/huong-dan-app/06a-tai-khoan-1.png",
        badge: "Tài khoản & Mã KH liên kết",
        caption: "Chuyển đổi hoặc thêm mới Mã khách hàng liên kết",
      },
      {
        src: "/huong-dan-app/06b-tai-khoan-2.png",
        badge: "Thông tin & Trạng thái",
        caption: "Xem địa chỉ, thông tin bổ sung và trạng thái cấp nước",
      },
    ],
  },
  {
    id: "ho-so-khach-hang",
    stepNumber: "07",
    title: "Tra cứu Hồ sơ khách hàng",
    subtitle: "Xem trực tiếp hồ sơ gốc và giấy đề nghị lắp đặt đồng hồ nước trên ứng dụng",
    icon: FolderOpen,
    highlights: [
      "Truy cập từ biểu tượng 'Hồ sơ khách hàng' ngay tại màn hình chính.",
      "Hiển thị trực tiếp tài liệu PDF hồ sơ khách hàng (Giấy đề nghị lắp đặt đồng hồ nước, hợp đồng và các chứng từ đính kèm) được lưu trữ số hóa theo từng Mã khách hàng.",
    ],
    images: [
      {
        src: "/huong-dan-app/07-ho-so-khach-hang.jpg",
        badge: "Hồ sơ số hóa",
        caption: "Xem trực tiếp hồ sơ đăng ký lắp đặt đồng hồ nước",
      },
    ],
  },
  {
    id: "tien-ich-khac",
    stepNumber: "08",
    title: "Mục Khác — Các tiện ích mở rộng",
    subtitle: "Bảng giá nước, Chất lượng nước, Đăng ký lắp đặt, Thay đổi thông tin & Hotline",
    icon: LayoutGrid,
    highlights: [
      "Menu Khác: Tập hợp 6 tiện ích hỗ trợ toàn diện gồm Giới thiệu, Chất lượng nước, Bảng giá nước, Đăng ký lắp đặt, Thay đổi thông tin và gọi nhanh Hotline 0254.3894.894.",
      "Thay đổi thông tin trực tuyến: Xem thông tin hiện tại, nhập nội dung yêu cầu thay đổi (đổi SĐT, cập nhật địa chỉ, sang tên...) và đính kèm ảnh chụp hồ sơ (CCCD, giấy tờ nhà đất, hợp đồng) để gửi yêu cầu mà không cần đến trực tiếp quầy giao dịch.",
      "Đăng ký lắp đặt nước sạch: Điền họ tên chủ hộ, số điện thoại, email, địa chỉ lắp đặt để nhân viên liên hệ khảo sát trong vòng 24 giờ.",
      "Bảng giá nước & Chất lượng nước: Tra cứu bảng giá nước theo từng nhóm đối tượng và xem kết quả xét nghiệm chất lượng nước định kỳ trên website toctienltd.vn.",
    ],
    images: [
      {
        src: "/huong-dan-app/08a-muc-khac-menu.png",
        badge: "Menu Khác",
        caption: "Danh mục 6 tiện ích mở rộng trong mục Khác",
      },
      {
        src: "/huong-dan-app/08f-thay-doi-thong-tin-1.png",
        badge: "Thay đổi thông tin (1)",
        caption: "Kiểm tra thông tin khách hàng hiện tại",
      },
      {
        src: "/huong-dan-app/08g-thay-doi-thong-tin-2.png",
        badge: "Thay đổi thông tin (2)",
        caption: "Nhập nội dung cần thay đổi & đính kèm ảnh hồ sơ",
      },
      {
        src: "/huong-dan-app/08e-dang-ky-lap-dat.png",
        badge: "Đăng ký lắp đặt",
        caption: "Gửi yêu cầu lắp đặt đồng hồ nước mới trực tuyến",
      },
      {
        src: "/huong-dan-app/08d-bang-gia-nuoc.jpg",
        badge: "Bảng giá nước",
        caption: "Tra cứu đơn giá nước theo từng nhóm đối tượng",
      },
      {
        src: "/huong-dan-app/08c-chat-luong-nuoc.jpg",
        badge: "Chất lượng nước",
        caption: "Xem công bố kết quả xét nghiệm nước định kỳ",
      },
      {
        src: "/huong-dan-app/08b-gioi-thieu.png",
        badge: "Giới thiệu & Liên hệ",
        caption: "Thông tin liên hệ và pháp lý Công ty Cấp nước Tóc Tiên",
      },
    ],
  },
];

export default function HuongDanSuDungAppPage() {
  return (
    <div className="min-h-screen bg-slate-50/70 pb-16">
      {/* Banner tiêu đề trang */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c2340] via-[#0e2d52] to-[#07172c] text-white py-10 sm:py-14 border-b border-slate-800">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#1cd0b4]/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#1cd0b4]/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#1cd0b4] border border-[#1cd0b4]/30">
                <Smartphone className="h-3.5 w-3.5" />
                <span>Quan hệ khách hàng • Cẩm nang số</span>
              </div>

              <h1 className="mt-3.5 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Hướng dẫn sử dụng ứng dụng{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1cd0b4] to-cyan-300">
                  CSKH CNTOCTIEN
                </span>
              </h1>

              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Tài liệu hướng dẫn trực quan từng màn hình chức năng giúp Quý khách hàng dễ dàng tra cứu hóa đơn, quét mã VietQR thanh toán tiền nước, nhận thông báo cúp nước và gửi yêu cầu hỗ trợ trực tuyến ngay trên điện thoại.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/tai-app?stay=1"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#1cd0b4] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#0c2340] shadow-md transition hover:bg-white hover:scale-[1.02] active:scale-95"
                >
                  <QrCode className="h-4 w-4" />
                  <span>Trang tải ứng dụng (iOS & Android)</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="tel:02543894894"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-xs transition hover:border-[#1cd0b4] hover:bg-white/15"
                >
                  <PhoneCall className="h-4 w-4 text-[#1cd0b4]" />
                  <span>Hotline hỗ trợ: 0254.3894.894</span>
                </a>
              </div>
            </div>

            {/* Khung tải nhanh thu gọn ở góc phải banner */}
            <div className="shrink-0">
              <SmartQrCodeCard
                compact={true}
                className="bg-white/95 backdrop-blur-md shadow-xl border-white/40 max-w-xs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Khung mục lục dạng lưới hình chữ nhật (hiển thị đầy đủ cả 8 mục, không bị che khuất) */}
      <nav
        aria-label="Mục lục hướng dẫn"
        className="border-b border-slate-200/90 bg-white shadow-2xs"
      >
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="mb-2.5 flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Đi tới mục hướng dẫn:
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {GUIDE_SECTIONS.map((sec) => {
              const NavIcon = sec.icon;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="group flex items-center gap-2.5 rounded-xl border border-slate-200/90 bg-slate-50/80 px-3.5 py-2.5 text-left transition-all duration-200 hover:border-[#1cd0b4] hover:bg-teal-50/60 hover:shadow-xs"
                >
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#0c2340] text-xs font-extrabold text-[#1cd0b4] transition-transform group-hover:scale-105">
                    {Number(sec.stepNumber)}
                  </span>
                  <span className="flex-1 min-w-0 text-xs sm:text-[13px] font-bold text-[#0c2340] group-hover:text-teal-800 leading-snug line-clamp-2">
                    {sec.title.split(" (")[0].split(" —")[0]}
                  </span>
                  <NavIcon className="h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-teal-600" />
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Danh sách các mục hướng dẫn chi tiết */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8 space-y-10">
        {GUIDE_SECTIONS.map((section) => {
          const IconComponent = section.icon;
          const imgCount = section.images.length;

          // Tùy chỉnh số cột hiển thị hình ảnh dựa theo số lượng hình của mục đó
          const gridColsClass =
            imgCount === 1
              ? "grid-cols-1 max-w-[320px] mx-auto"
              : imgCount === 2
                ? "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto"
                : imgCount === 3
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

          return (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-20 overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-xs transition hover:shadow-md"
            >
              {/* Phần đầu của mỗi mục */}
              <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 via-white to-teal-50/30 p-5 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3.5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0c2340] text-sm font-extrabold text-[#1cd0b4] shadow-sm">
                      {section.stepNumber}
                    </span>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 border border-teal-200/60 sm:hidden">
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg sm:text-xl font-extrabold text-[#0c2340] leading-snug">
                      {section.title}
                    </h2>
                    <p className="mt-0.5 text-xs sm:text-sm text-slate-500">
                      {section.subtitle}
                    </p>
                  </div>

                  <div className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 border border-teal-200/60">
                    <IconComponent className="h-5 w-5" />
                  </div>
                </div>

                {/* Các gạch đầu dòng hướng dẫn thao tác */}
                <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {section.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 rounded-xl bg-slate-50/90 border border-slate-200/60 px-3.5 py-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
                    >
                      <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Lưu ý quan trọng nếu có */}
                {section.note && (
                  <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50/80 px-4 py-3 text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong className="font-bold text-amber-950">💡 Ghi chú thao tác: </strong>
                    {section.note.replace(/^Lưu ý:\s*/i, "")}
                  </div>
                )}
              </div>

              {/* Phần hình ảnh minh họa màn hình */}
              <div className="p-5 sm:p-7 bg-slate-50/40">
                <div className={`grid gap-6 ${gridColsClass}`}>
                  {section.images.map((img, i) => (
                    <figure
                      key={img.src}
                      className="group flex flex-col items-center rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-2xs transition hover:border-teal-300 hover:shadow-md"
                    >
                      {img.badge && (
                        <div className="mb-2.5 self-start inline-flex items-center gap-1.5 rounded-full bg-[#0c2340] px-3 py-0.5 text-[11px] font-bold text-[#1cd0b4]">
                          <span>{img.badge}</span>
                        </div>
                      )}

                      <div className="overflow-hidden rounded-xl border border-slate-200/70 bg-slate-100 w-full flex justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img.src}
                          alt={`${section.title} - ${img.caption}`}
                          loading={section.stepNumber === "01" && i === 0 ? "eager" : "lazy"}
                          className="block h-auto w-full max-w-[290px] object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                        />
                      </div>

                      <figcaption className="mt-3 text-center text-xs font-semibold text-slate-700 leading-snug px-1">
                        {img.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Khối kêu gọi tải ứng dụng ở cuối trang hướng dẫn */}
        <section className="rounded-3xl bg-gradient-to-r from-[#0c2340] via-[#0e2a4d] to-[#07172c] p-6 sm:p-10 text-white shadow-lg border border-slate-800">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <span className="inline-block rounded-full bg-[#1cd0b4]/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1cd0b4] border border-[#1cd0b4]/30">
                Cài đặt miễn phí 100%
              </span>
              <h3 className="mt-3 text-xl sm:text-2xl font-extrabold text-white">
                Tải ngay ứng dụng CSKH CNTOCTIEN
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Quét mã QR bên cạnh bằng Camera hoặc Zalo trên điện thoại để tự động mở đúng kho ứng dụng App Store (iPhone/iPad) hoặc Google Play (Android).
              </p>
              <div className="mt-5 flex justify-center lg:justify-start">
                <AppDownloadBadges variant="default" showSubtitle={true} />
              </div>
            </div>

            <div className="shrink-0 w-full max-w-[260px]">
              <SmartQrCodeCard size={150} showDownloadButton={true} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
