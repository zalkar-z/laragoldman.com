import { ReviewBlock } from "./ReviewBlock";

const reviews = [
  {
    photo: "/images/reviews/2.jpg",
    name: "Marcus T.",
    tag: "Verified Purchase",
    text: "My wife and I read this together over two weekends and it changed how we talk about money in our house. We're both professionals — I'm in healthcare, she's in HR — we do alright. But we've been doing alright for 15 years and somehow still feel like we're one bad month away from stress. This book explains exactly why that happens and more importantly what to do about it. The section on generational wealth habits versus generational wealth luck? That hit different. We have three kids and we've been doing this wrong. Not badly — just without a map. We actually got the physical limited edition and it's sitting on the kitchen counter now. The kids have picked it up and asked questions. That alone was worth it. Lara writes like someone who's been in the room with wealthy families and is finally allowed to tell you what he saw.",
  },
  {
    photo: "/images/reviews/3.jpg",
    name: "Rajan M.",
    tag: "Verified Purchase",
    text: "I work in financial services. I know what a pension is, I know what an ISA is, I've read the Barefoot Investor twice. And I still found myself underlining things in this book. That's not something I expected to say. What Lara does differently is he doesn't talk about products — he talks about mindset architecture. How wealthy families make decisions, how they talk about money with their children, how they think about assets versus income. It sounds simple but the execution chapter alone restructured how I'm approaching our family finances this year. The limited edition print is a genuinely nice object — feels considered. I've recommended it to four colleagues already. At this price point there's absolutely no reason not to get it.",
  },
  {
    photo: "/images/reviews/1.jpg",
    name: "David H.",
    tag: "Verified Purchase",
    text: "I'll be honest — my wife ordered this for me after watching one of Lara's videos and I was sceptical. I'm 61, been working in project management my whole career, own my home, never been reckless with money. But we've never really built anything either. Just... maintained. This book put words to something that's been nagging at me for twenty years. The chapter on how wealthy families treat money as a system rather than a salary — I read it twice. Straight away. We sat down that weekend and had a proper conversation about our finances for the first time in years. Practical, no jargon, no judgment. And the fact it arrived as a printed limited edition felt like a proper thing — not some PDF you forget about. My daughter's getting a copy when she turns 30. Genuinely one of the best £9 I've ever spent.",
  },
];

export default function ReviewsSection2() {
  return (
    <section className="bg-dark py-14 px-5">
      <h2 className="font-serif text-2xl sm:text-3xl text-center mb-3 gold-gradient">
        More From Our Readers
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
