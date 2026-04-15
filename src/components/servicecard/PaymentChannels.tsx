"use client";

import { CreditCard, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { paymentChannels, type PaymentChannel } from "./paymentChannelsData";

function ChannelLogo({ channel }: { channel: PaymentChannel }) {
  if (channel.logo.type === "image") {
    return (
      <div className="flex h-20 w-full items-center justify-center sm:h-24">
        <Image
          src={channel.logo.src}
          alt={channel.logo.alt}
          width={360}
          height={200}
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
        "inline-flex h-20 w-full items-center justify-center rounded-xl text-[0.7rem] font-extrabold tracking-tight sm:h-24",
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
          <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Kênh thanh toán
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {paymentChannels.map((c) => (
            <div key={c.id} className="w-40 sm:w-52 md:w-60">
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
