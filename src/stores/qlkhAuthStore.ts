import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/** Tránh lỗi khi persist chạy lúc SSR (Next.js). */
function memoryStorage(): Storage {
  let store: Record<string, string> = {};
  return {
    length: 0,
    clear() {
      store = {};
    },
    getItem(key) {
      return store[key] ?? null;
    },
    key(i) {
      return Object.keys(store)[i] ?? null;
    },
    removeItem(key) {
      delete store[key];
    },
    setItem(key, value) {
      store[key] = value;
    },
  };
}

interface QlkhAuthState {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  logout: () => void;
}

export const useQlkhAuthStore = create<QlkhAuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      setAccessToken: (token) => set({ accessToken: token }),
      logout: () => set({ accessToken: null }),
    }),
    {
      name: "qlkh-auth",
      storage: createJSONStorage(() =>
        typeof window !== "undefined" ? sessionStorage : memoryStorage(),
      ),
    },
  ),
);
