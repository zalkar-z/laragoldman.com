"use client";

import ViewerCount from "./ViewerCount";
import { useCheckout } from "@/lib/useCheckout";

export default function StickyCTA() {
  const price = process.env.NEXT_PUBLIC_PRICE_DISPLAY || "9";
  const { loading, handleCheckout } = useCheckout();

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-3 text-center backdrop-blur-md"
      style={{
        background: "rgba(10, 10, 10, 0.85)",
        borderTop: "1px solid rgba(201, 168, 76, 0.2)",
      }}
    >
      <div className="text-[12px] text-gray-400 mb-2">
        <ViewerCount />
      </div>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="w-full max-w-md mx-auto block font-bold text-[15px] tracking-wide py-3.5 rounded-lg cursor-pointer transition-all hover:scale-[1.02] gold-pulse shimmer-overlay disabled:opacity-60 disabled:cursor-wait disabled:hover:scale-100"
        style={{
          background: "linear-gradient(180deg, #E0C070 0%, #C9A84C 50%, #B8963F 100%)",
          color: "#0a0a0a",
        }}
      >
        {loading ? "Redirecting to checkout..." : `GET THE PLAYBOOK — $${price}`}
      </button>
    </div>
  );
}
