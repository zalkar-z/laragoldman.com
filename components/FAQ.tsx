"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is this for people who are already doing well financially?",
    a: "Yes — especially for them. Most people earning good income have never been taught the structural frameworks this covers. That gap is exactly who this was written for.",
  },
  {
    q: "How long does it take to read?",
    a: "Most readers finish in one sitting — 2 to 3 hours. Each chapter has a practical exercise you can do immediately after reading.",
  },
  {
    q: "I've read money books before. How is this different?",
    a: "Most money books focus on individual finance. This focuses on the family as a financial unit — the conversations, the structure, the legacy. That angle is almost never covered.",
  },
  {
    q: "I'm in the US / UK — is this relevant to me?",
    a: "Written specifically for families in both countries. References UK (ISA, SIPP) and US (401k, Roth IRA) structures throughout.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-dark py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-3xl text-center mb-12 gold-gradient">
          Common Questions
        </h2>
        <div className="divide-y divide-gold/10">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-5 flex items-center justify-between gap-4 cursor-pointer group"
              >
                <span className="font-medium text-lg text-white group-hover:text-gold transition-colors">{faq.q}</span>
                <span className="text-2xl text-gold/40 shrink-0 transition-transform duration-300" style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  +
                </span>
              </button>
              {open === i && (
                <p className="pb-5 text-gray-400 leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
