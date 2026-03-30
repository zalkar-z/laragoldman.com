import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center text-white px-5 pt-6 pb-4 overflow-hidden text-center"
      style={{
        background:
          "radial-gradient(ellipse at center, #1c1812 0%, #111009 40%, #0a0906 100%)",
      }}
    >
      {/* Hero image — full-width on mobile, capped on desktop */}
      <div className="w-full max-w-sm sm:max-w-md mx-auto mb-8 fade-in-up">
        <Image
          src="/images/hero-main.jpg"
          alt="The Family Wealth Playbook"
          width={800}
          height={1000}
          priority
          className="w-full h-auto rounded-lg"
          style={{
            WebkitTouchCallout: "none",
            WebkitUserSelect: "none",
          }}
        />
      </div>

      <div className="relative z-20 max-w-2xl mx-auto text-center fade-in-up">
        <h1
          className="font-serif font-bold leading-[1.15] mb-8 gold-shimmer"
          style={{
            fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
            letterSpacing: "-0.01em",
          }}
        >
          What Wealthy Families Know
          <br />
          That Nobody Talks About Publicly
        </h1>
        <p className="text-base sm:text-xl text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
          The private rules, conversations, and frameworks
          3 generations of family wealth taught us.
        </p>

        {/* Author row */}
        <div className="flex items-center justify-center gap-3.5 mb-9">
          <div
            className="w-14 h-14 rounded-full shrink-0 overflow-hidden"
            style={{
              border: "2px solid var(--color-gold)",
              boxShadow: "0 0 16px rgba(201, 168, 76, 0.35)",
            }}
          >
            <Image
              src="/images/lara-profile.jpeg"
              alt="Lara Goldman"
              width={56}
              height={56}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <div className="font-serif font-bold text-[15px] text-white">
              Lara Goldman
            </div>
            <div className="text-[11px] text-gray-500 mt-0.5 leading-snug">
              Founder &amp; President of The Common Wealth Institute since 2007. Educated more than 5,000 families during 32 years in the financial literacy industry.
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="flex justify-center max-w-[480px] mx-auto mb-0 overflow-hidden"
          style={{
            border: "1px solid rgba(201, 168, 76, 0.2)",
          }}
        >
          <div className="flex-1 py-3.5 px-2.5 text-center" style={{ background: "rgba(201, 168, 76, 0.04)", borderRight: "1px solid rgba(201, 168, 76, 0.15)" }}>
            <span className="font-serif font-bold text-[22px] text-gold block">2,400+</span>
            <span className="text-[9px] text-gray-500 uppercase tracking-widest mt-0.5 block">Copies Sold</span>
          </div>
          <div className="flex-1 py-3.5 px-2.5 text-center" style={{ background: "rgba(201, 168, 76, 0.04)", borderRight: "1px solid rgba(201, 168, 76, 0.15)" }}>
            <span className="font-serif font-bold text-[22px] text-gold block">7</span>
            <span className="text-[9px] text-gray-500 uppercase tracking-widest mt-0.5 block">Chapters</span>
          </div>
          <div className="flex-1 py-3.5 px-2.5 text-center" style={{ background: "rgba(201, 168, 76, 0.04)" }}>
            <span className="font-serif font-bold text-[22px] text-gold block">4.9 <span className="text-[16px]">★</span></span>
            <span className="text-[9px] text-gray-500 uppercase tracking-widest mt-0.5 block">Average Rating</span>
          </div>
        </div>

      </div>
    </section>
  );
}
