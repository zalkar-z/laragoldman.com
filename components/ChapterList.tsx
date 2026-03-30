const chapters = [
  {
    num: "01",
    title: "Why Most Families Never Build Real Wealth",
    teaser: "It's not income. Here's what it actually is.",
  },
  {
    num: "02",
    title: "The Family Wealth Blueprint",
    teaser:
      "The three-bucket system wealthy families never explain publicly.",
  },
  {
    num: "03",
    title: "The Money Conversation Most Couples Never Have",
    teaser:
      "Financial misalignment is the #1 silent killer of family wealth.",
  },
  {
    num: "04",
    title: "Raising Financially Intelligent Children",
    teaser:
      "What to teach them — and at what age — before they leave home.",
  },
  {
    num: "05",
    title: "Protecting What You've Built",
    teaser:
      "The three events that wipe out family wealth. And how to prevent them.",
  },
  {
    num: "06",
    title: "Building Generational Wealth From Where You Are Right Now",
    teaser: "It starts with a decision, not a dollar amount.",
  },
  {
    num: "07",
    title: "Your Family Wealth Action Plan: The First 90 Days",
    teaser: "Not theory. A specific plan. Starting this week.",
  },
];

export default function ChapterList() {
  return (
    <section className="bg-dark py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-3xl text-center mb-12 gold-gradient">
          What&apos;s Inside
        </h2>
        <div className="space-y-6">
          {chapters.map((ch) => (
            <div
              key={ch.num}
              className="flex gap-5 p-4 rounded-lg border border-gold/10 bg-dark-lighter/50 hover:border-gold/30 transition-all duration-300"
            >
              <span className="gold-shimmer font-bold text-2xl leading-none pt-1 font-serif">
                {ch.num}
              </span>
              <div>
                <h3 className="font-semibold text-lg text-white">{ch.title}</h3>
                <p className="text-gray-500 mt-1">{ch.teaser}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
