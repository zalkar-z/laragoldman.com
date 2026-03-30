"use client";

import SalesProgress from "./SalesProgress";
import ViewerCount from "./ViewerCount";

export default function PricingCTA() {
  const price = process.env.NEXT_PUBLIC_PRICE_DISPLAY || "9";
  const original = process.env.NEXT_PUBLIC_ORIGINAL_PRICE || "45";

  const handleCTA = async () => {
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <section className="bg-dark-lighter py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-serif text-3xl mb-2 gold-shimmer">The Family Wealth Playbook</h2>
        <p className="text-2xl mb-6">
          <span className="line-through text-gray-600">${original}</span>{" "}
          <span className="gold-gradient font-bold text-3xl">${price} today</span>
        </p>
        <div className="mb-8">
          <SalesProgress />
        </div>
        <button
          onClick={handleCTA}
          className="w-full sm:w-auto bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-dark font-bold text-lg px-12 py-5 rounded-lg transition-all cursor-pointer gold-pulse hover:scale-105 shimmer-overlay"
        >
          GET THE PLAYBOOK — ${price}
        </button>
        <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-500">
          <span>🔒 Secure checkout</span>
          <span>⚡ Instant download</span>
          <span>✅ Yours forever</span>
        </div>
        <div className="mt-4">
          <ViewerCount />
        </div>
      </div>
    </section>
  );
}
