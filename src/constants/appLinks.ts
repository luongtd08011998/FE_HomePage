/**
 * Cấu hình đường link tải ứng dụng Cấp Nước Tóc Tiên trên Android và iOS.
 * Bạn có thể cấu hình thông qua biến môi trường (.env.local) hoặc sửa trực tiếp tại đây:
 * - NEXT_PUBLIC_APP_STORE_URL: Link ứng dụng trên Apple App Store
 * - NEXT_PUBLIC_GOOGLE_PLAY_URL: Link ứng dụng trên Google Play Store
 */
export const APP_LINKS = {
  // Đường link tới Apple App Store (iOS)
  appStore:
    process.env.NEXT_PUBLIC_APP_STORE_URL ||
    "https://apps.apple.com/vn/app/cskh-cntoctien/id6780953735",

  // Đường link tới Google Play Store (Android)
  googlePlay:
    process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL ||
    "https://play.google.com/store/apps/details?id=com.toctienltd.cskh",

  // Tên ứng dụng hiển thị
  appName: "Cấp Nước Tóc Tiên CSKH",

  // Đường dẫn link thông minh trên website
  smartDownloadPath: "/tai-app",

  // Link mã QR thông minh tự động nhận diện thiết bị
  smartQrUrl:
    process.env.NEXT_PUBLIC_APP_QR_URL || "https://beta.toctienltd.vn/tai-app",

  // Giữ lại qrTargetUrl để tương thích ngược
  qrTargetUrl:
    process.env.NEXT_PUBLIC_APP_QR_URL || "https://beta.toctienltd.vn/tai-app",
} as const;
