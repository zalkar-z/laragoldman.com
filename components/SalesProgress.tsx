"use client";

import { useState, useEffect } from "react";

const START = 8532;
const END = 9578;

export default function SalesProgress() {
  const [sold, setSold] = useState<number | null>(null);

  useEffect(() => {
    setSold(START);
    const interval = setInterval(() => {
      setSold((prev) => {
        if (prev === null || prev >= END) return prev;
        return prev + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const price = process.env.NEXT_PUBLIC_PRICE_DISPLAY || "9";
  const original = process.env.NEXT_PUBLIC_ORIGINAL_PRICE || "45";

  if (sold === null) return null;

  const pct = (sold / 10000) * 100;

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-gold/20">
        <div
          className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-full transition-all duration-1000 shimmer-overlay"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="mt-3 text-sm font-medium text-center text-gold-light">
        {sold.toLocaleString()} of 10,000 introductory copies at ${price}
      </p>
      <p className="text-xs text-gray-500 text-center mt-1">
        After 10,000: price returns to ${original}
      </p>
    </div>
  );
}
