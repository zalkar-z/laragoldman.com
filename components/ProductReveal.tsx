"use client";

import Image from "next/image";
import SalesProgress from "./SalesProgress";
import { useCheckout } from "@/lib/useCheckout";

export default function ProductReveal() {
  const price = process.env.NEXT_PUBLIC_PRICE_DISPLAY || "9";
  const original = process.env.NEXT_PUBLIC_ORIGINAL_PRICE || "45";
  const { loading, handleCheckout } = useCheckout();

  return (
    <section className="bg-dark-lighter py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <div className="w-48 mx-auto mb-8 gold-border-glow rounded-lg overflow-hidden">
          <Image src="/images/product-image.jpg" alt="The Family Wealth Playbook" width={384} height={480} className="w-full h-auto" />
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl mb-4 gold-shimmer">
          The Family Wealth Playbook
        </h2>
        <p className="text-lg text-gray-400 mb-6">
          7 chapters. 50 pages. One decision that changes
          your family&apos;s financial future.
        </p>
        <p className="text-2xl mb-6">
          <span className="line-through text-gray-600">${original}</span>{" "}
          <span className="gold-gradient font-bold text-3xl">${price} today</span>
        </p>
        <div className="mb-8">
          <SalesProgress />
        </div>
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full sm:w-auto bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-dark font-bold text-lg px-12 py-5 rounded-lg transition-all cursor-pointer gold-pulse hover:scale-105 shimmer-overlay disabled:opacity-60 disabled:cursor-wait disabled:hover:scale-100"
        >
          {loading ? "Redirecting to checkout..." : `GET THE PLAYBOOK — $${price}`}
        </button>
        <p className="mt-4 text-sm text-gray-500">
          Secure checkout powered by Stripe · Instant digital delivery. Yours forever.
        </p>
      </div>
    </section>
  );
}
