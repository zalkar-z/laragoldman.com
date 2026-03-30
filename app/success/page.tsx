import Image from "next/image";
import { redirect } from "next/navigation";
import { getStripe } from "@/lib/stripe";

const PDF_URL =
  "https://assets.laragoldman.com/The%20Family%20Wealth%20Playbook.pdf";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  if (!session_id) {
    redirect("/");
  }

  const stripe = getStripe();
  const session = await stripe.checkout.sessions.retrieve(session_id);

  if (session.payment_status !== "paid") {
    redirect("/");
  }

  const authorName = process.env.NEXT_PUBLIC_AUTHOR_NAME || "Lara Goldman";

  return (
    <main
      className="min-h-screen flex flex-col items-center px-5 pt-6 pb-16"
      style={{
        background:
          "radial-gradient(ellipse at center, #1c1812 0%, #111009 40%, #0a0906 100%)",
      }}
    >
      <div className="w-full max-w-sm sm:max-w-md mx-auto mb-8 fade-in-up">
        <Image
          src="/images/hero-main.jpg"
          alt="The Family Wealth Playbook"
          width={800}
          height={1000}
          priority
          className="w-full h-auto rounded-lg"
        />
      </div>

      <div className="max-w-md w-full text-center fade-in-up">
        <h1 className="font-serif text-3xl sm:text-4xl mb-4 gold-shimmer leading-tight">
          Thank You
        </h1>
        <p className="text-lg text-gray-400 mb-10">
          Your purchase was successful.
        </p>

        <a
          href={PDF_URL}
          download
          className="inline-block w-full bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-dark font-bold text-lg py-5 rounded-lg gold-pulse hover:scale-105 transition-all shimmer-overlay text-center"
        >
          DOWNLOAD YOUR PLAYBOOK (PDF)
        </a>

        <p className="mt-5 text-sm text-gray-500">
          A receipt has been sent to your email by Stripe.
        </p>

        <div className="gold-divider max-w-[60px] mx-auto my-8" />

        <p className="text-sm text-gray-600">
          Thank you — {authorName}
        </p>

        <a
          href="/"
          className="inline-block mt-4 text-sm text-gold/60 hover:text-gold transition-colors"
        >
          ← Back to homepage
        </a>
      </div>
    </main>
  );
}
