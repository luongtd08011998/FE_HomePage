"use client";

import { CreditCard, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { paymentChannels, type PaymentChannel } from "./paymentChannelsData";

function ChannelLogo({ channel }: { channel: PaymentChannel }) {
  if (channel.logo.type === "image") {
    return (
      <div className="flex h-8 w-full items-center justify-center sm:h-9">
        <Image
          src={channel.logo.src}
          alt={channel.logo.alt}
          width={172}
          height={92}
          className={[
            "max-h-full w-full object-contain",
            channel.logo.className ?? "",
          ].join(" ")}
          priority
        />
      </div>
    );
  }
  return (
    <span
      className={[
        "inline-flex h-8 w-full items-center justify-center rounded-xl text-[0.6rem] font-extrabold tracking-tight sm:h-9",
        channel.logo.className,
      ].join(" ")}
      aria-hidden
    >
      {channel.logo.text}
    </span>
  );
}

export default function PaymentChannels() {
  return (
    <section aria-label="Kênh thanh toán">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-2 text-teal-300 backdrop-blur">
            <CreditCard className="h-4 w-4" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.18em]">
              Thanh toán trực tuyến
            </span>
          </div>
        </div>

        <div className="flex flex-nowrap items-center gap-3 overflow-x-auto overscroll-x-contain px-1 pb-2 [-webkit-overflow-scrolling:touch] sm:justify-center sm:gap-4 sm:overflow-visible sm:pb-0">
          {paymentChannels.map((c) => (
            <div key={c.id} className="shrink-0 w-20 sm:w-24 md:w-28">
              <ChannelLogo channel={c} />
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur sm:grid-cols-3 sm:gap-5 sm:p-6">
          {[
            "Mở app ngân hàng / ví điện tử",
            "Chọn mục Thanh toán hóa đơn ",
            "Tìm “Cấp nước Tóc Tiên” và nhập mã KH",
          ].map((t) => (
            <div key={t} className="flex items-start gap-3">
              <CheckCircle2
                className="mt-0.5 h-5 w-5 text-teal-300"
                aria-hidden
              />
              <p className="text-sm font-medium leading-relaxed text-slate-200">
                {t}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
