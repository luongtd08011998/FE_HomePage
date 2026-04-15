export interface PaymentChannel {
  id: number;
  name: string;
  shortName: string;
  /**
   * Logo cho UI. Ưu tiên ảnh trong /public; nếu không có thì fallback badge chữ.
   */
  logo:
    | {
        type: "image";
        src: string;
        alt: string;
        /** Tuỳ chỉnh kích thước riêng cho từng logo (vd: Payoo nhỏ). */
        className?: string;
      }
    | {
        type: "badge";
        text: string;
        className: string;
      };
  /** Tailwind token (dùng cho ring/border/text) */
  tone:
    | "emerald"
    | "blue"
    | "red"
    | "orange"
    | "green";
  kind: "bank" | "wallet";
}

// Trích từ docs/kenhthanhtoan.md (bản rút gọn theo UI hiện tại)
export const paymentChannels: PaymentChannel[] = [
  {
    id: 1,
    name: "Vietcombank",
    shortName: "VCB",
    logo: {
      type: "image",
      src: "/VCB.png",
      alt: "Vietcombank",
    },
    tone: "emerald",
    kind: "bank",
  },
  {
    id: 2,
    name: "BIDV",
    shortName: "BIDV",
    logo: {
      type: "image",
      src: "/BIDV.png",
      alt: "BIDV",
    },
    tone: "blue",
    kind: "bank",
  },
  {
    id: 3,
    name: "Vietinbank",
    shortName: "VTB",
    logo: {
      type: "image",
      src: "/VTB.png",
      alt: "VietinBank",
    },
    tone: "red",
    kind: "bank",
  },
  {
    id: 4,
    name: "Payoo",
    shortName: "Payoo",
    logo: {
      type: "image",
      src: "/Payoo.jpg",
      alt: "Payoo",
    },
    tone: "orange",
    kind: "wallet",
  },
  {
    id: 5,
    name: "Agribank",
    shortName: "Agribank",
    logo: {
      type: "image",
      src: "/AGR.jpg",
      alt: "Agribank",
    },
    tone: "green",
    kind: "bank",
  },
];

export function channelToneClasses(tone: PaymentChannel["tone"]) {
  switch (tone) {
    case "emerald":
      return {
        ring: "ring-emerald-400/40",
        border: "border-emerald-400/35 hover:border-emerald-300/60",
        bg: "bg-emerald-500/10 hover:bg-emerald-500/15",
        text: "text-emerald-200",
        dot: "bg-emerald-400",
      };
    case "blue":
      return {
        ring: "ring-sky-400/40",
        border: "border-sky-400/35 hover:border-sky-300/60",
        bg: "bg-sky-500/10 hover:bg-sky-500/15",
        text: "text-sky-200",
        dot: "bg-sky-400",
      };
    case "red":
      return {
        ring: "ring-rose-400/40",
        border: "border-rose-400/35 hover:border-rose-300/60",
        bg: "bg-rose-500/10 hover:bg-rose-500/15",
        text: "text-rose-200",
        dot: "bg-rose-400",
      };
    case "orange":
      return {
        ring: "ring-amber-400/40",
        border: "border-amber-400/35 hover:border-amber-300/60",
        bg: "bg-amber-500/10 hover:bg-amber-500/15",
        text: "text-amber-200",
        dot: "bg-amber-400",
      };
    case "green":
      return {
        ring: "ring-green-400/40",
        border: "border-green-400/35 hover:border-green-300/60",
        bg: "bg-green-500/10 hover:bg-green-500/15",
        text: "text-green-200",
        dot: "bg-green-400",
      };
  }
}

