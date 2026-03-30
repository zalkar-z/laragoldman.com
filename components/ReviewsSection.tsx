import { ReviewBlock } from "./ReviewBlock";

const reviews = [
  {
    photo: "/images/reviews/4.jpg",
    name: "James O.",
    tag: "Verified Purchase",
    text: "My wife spotted this online and I'm glad she did. We've got two kids — 16 and 11 — and we've been having those half-conversations about money that never go anywhere. You know the ones. 'We should really sort out a proper plan.' And then life happens and you don't. This book is the kick we needed. It's short enough to actually finish, which matters. Clear chapters, real examples, no waffle. The bit about what to teach your kids about money and when — we read that section out loud at dinner. My son actually put his phone down and listened. The physical copy arriving in the post felt like an event, genuinely. It's on our bookshelf now next to the stuff we actually care about. If you're sitting on the fence — just get it. You'll regret not reading it sooner.",
  },
  {
    photo: "/images/reviews/5.jpg",
    name: "Simone A.",
    tag: "Verified Purchase",
    text: "I don't usually leave reviews but this one deserved it. I'm a secondary school deputy head, single mum of two, and I have spent years feeling like I'm doing everything right and still somehow falling behind. Good salary, sensible with money, no silly debt. But no real wealth either. No plan. Just hope. This book was the first time I've read something about money that didn't make me feel stupid or sold to. Lara writes like she's talking to you — not at you. The framework around how wealthy families actually think about money across generations, not just month to month — that reframed everything for me. I ordered the digital copy and they sent a physical limited edition as part of a promotion. It's beautiful. It's on my bedside table and I've already earmarked three chapters to reread. My eldest is 17 and I've started having proper money conversations with her using the frameworks in this book. That's the point, isn't it. This is for them.",
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-dark pt-4 pb-14 px-5">
      <h2 className="font-serif text-2xl sm:text-3xl text-center mb-3 gold-gradient">
        What Readers Are Saying
      </h2>
      <div className="gold-divider max-w-[80px] mx-auto mb-10" />
      <div className="max-w-lg mx-auto space-y-12">
        {reviews.map((review, i) => (
          <ReviewBlock key={i} {...review} />
        ))}
      </div>
    </section>
  );
}
