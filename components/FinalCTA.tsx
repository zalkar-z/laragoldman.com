"use client";

import ViewerCount from "./ViewerCount";

export default function FinalCTA() {
  const authorName =
    process.env.NEXT_PUBLIC_AUTHOR_NAME || "Lara Goldman";
  const price = process.env.NEXT_PUBLIC_PRICE_DISPLAY || "9";

  const handleCTA = async () => {
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <section className="relative bg-dark-lighter text-white py-20 px-6 overflow-hidden">
      {/* Subtle gold radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gold/5 blur-[100px] rounded-full" />
      <div className="relative z-10 max-w-xl mx-auto text-center">
        {/* Author circle with gold ring */}
        <div className="w-24 h-24 rounded-full bg-dark mx-auto mb-8 border-2 border-gold/40 gold-border-glow" />
        <p className="font-serif text-2xl sm:text-3xl leading-relaxed mb-2 text-gray-300">
          &ldquo;This is the conversation I wish someone had
          started in my family twenty years earlier.&rdquo;
        </p>
        <p className="text-gold/60 mb-8">— {authorName}</p>
        <button
          onClick={handleCTA}
          className="w-full sm:w-auto bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-dark font-bold text-lg px-12 py-5 rounded-lg transition-all cursor-pointer gold-pulse hover:scale-105 shimmer-overlay"
        >
          Get The Playbook — ${price}
        </button>
        <div className="mt-6">
          <ViewerCount />
        </div>
      </div>
    </section>
  );
}
