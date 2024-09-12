import { create } from "zustand";

export const useAuthStore = create((set) => ({
    isLoggedIn: false,
    userToken: null,
    login: () => set({ isLoggedIn: true, userToken: '_token' }),
    logout: () => set({ isLoggedIn: false, userToken: null }),
}));