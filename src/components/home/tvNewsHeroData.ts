export interface TvNewsArticle {
  id: number;
  url: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

/** Dữ liệu mẫu — theo docs/TV.md */
export const tvNewsArticles: TvNewsArticle[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1698031610412-2e1118532d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHRyZWF0bWVudCUyMHBsYW50JTIwaW5mcmFzdHJ1Y3R1cmUlMjBwaXBlc3xlbnwxfHx8fDE3NzYyMTY2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Nâng cấp hệ thống đường ống cấp nước Tóc Tiên",
    description:
      "Công ty Cấp Nước Tóc Tiên đầu tư nâng cấp toàn bộ hệ thống đường ống cấp nước, đảm bảo cung cấp nước sạch ổn định cho người dân",
    category: "Tin tức",
    date: "14/04/2026",
    readTime: "5 phút đọc",
    author: "Nguyễn Văn A",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1739050784798-392cef82deb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3YXRlciUyMHRyZWF0bWVudCUyMHBsYW50JTIwaW5mcmFzdHJ1Y3R1cmUlMjBwaXBlc3xlbnwxfHx8fDE3NzYyMTY2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Báo cáo chất lượng nước sinh hoạt tháng 3/2026",
    description:
      "Kết quả xét nghiệm định kỳ cho thấy chất lượng nước sinh hoạt do Công ty Cấp Nước Tóc Tiên cung cấp đạt chuẩn QCVN 01:2009/BYT",
    category: "Chất lượng nước",
    date: "12/04/2026",
    readTime: "8 phút đọc",
    author: "Trần Thị B",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1743580886673-812abb5acf3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3YXRlciUyMHRyZWF0bWVudCUyMHBsYW50JTIwaW5mcmFzdHJ1Y3R1cmUlMjBwaXBlc3xlbnwxfHx8fDE3NzYyMTY2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Quy trình xử lý nước hiện đại tại nhà máy Tóc Tiên",
    description:
      "Tìm hiểu về quy trình xử lý nước 6 công đoạn tiên tiến, đảm bảo nước sạch đạt tiêu chuẩn cao nhất trước khi đưa đến người dùng",
    category: "Công nghệ",
    date: "10/04/2026",
    readTime: "10 phút đọc",
    author: "Lê Văn C",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1585270647218-4e87583eb9a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx3YXRlciUyMHRyZWF0bWVudCUyMHBsYW50JTIwaW5mcmFzdHJ1Y3R1cmUlMjBwaXBlc3xlbnwxfHx8fDE3NzYyMTY2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Mở rộng mạng lưới cấp nước đến các khu vực mới",
    description:
      "Công ty TNHH Cấp Nước Tóc Tiên triển khai dự án mở rộng mạng lưới cấp nước đến 5 khu dân cư mới, phục vụ hơn 10.000 hộ dân",
    category: "Dự án",
    date: "08/04/2026",
    readTime: "7 phút đọc",
    author: "Phạm Thị D",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1586057285471-2f78bffaf074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx3YXRlciUyMHRyZWF0bWVudCUyMHBsYW50JTIwaW5mcmFzdHJ1Y3R1cmUlMjBwaXBlc3xlbnwxfHx8fDE3NzYyMTY2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Hướng dẫn sử dụng nước tiết kiệm và hiệu quả",
    description:
      "Công ty Cấp Nước Tóc Tiên chia sẻ những tips giúp khách hàng sử dụng nước sinh hoạt tiết kiệm, giảm chi phí hàng tháng",
    category: "Hướng dẫn",
    date: "05/04/2026",
    readTime: "6 phút đọc",
    author: "Hoàng Văn E",
  },
];

