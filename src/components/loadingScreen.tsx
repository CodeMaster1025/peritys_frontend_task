"use client";

import { useLoadingStore } from "@/store/loading";

export default function LoadingScreen() {
  const { isLoading } = useLoadingStore();

  return (
    //loading screen in tailwindcss
    <div
      className={`w-full h-full flex-row bg-black opacity-50 absolute z-50 items-center justify-center ${
        isLoading ? "flex" : "hidden"
      }`}
    >
      <div className="w-24 h-24 rounded-full animate-spin border-t-2 border-b-2 rotate-180"></div>
    </div>
  );
}
