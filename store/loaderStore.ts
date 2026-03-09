import { create } from "zustand";

interface LoaderState {
  progress: number;
  isLoading: boolean;
  setProgress: (progress: number) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const useLoaderStore = create<LoaderState>((set) => ({
  progress: 0,
  isLoading: true,
  setProgress: (progress) => set({ progress }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));
