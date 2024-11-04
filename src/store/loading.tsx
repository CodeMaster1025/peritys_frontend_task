import { create } from "zustand";

export interface loadingStore {
    isLoading: boolean;
    startLoading: () => void;
    stopLoading: () => void;
}

export const useLoadingStore = create<loadingStore>((set) => ({
    isLoading: false,
    startLoading: () => {
        set({ isLoading: true });
    },
    stopLoading: () => {
        set({ isLoading: false });
    },
}));