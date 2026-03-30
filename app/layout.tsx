import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-playfair",
});

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "The Family Wealth Playbook";

export const metadata: Metadata = {
  title: `${siteName} — The Family Wealth Playbook`,
  description:
    "The private rules, conversations, and frameworks 3 generations of family wealth taught us — now in one $9 playbook.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${playfair.variable}`}>
      <body className="min-h-full flex flex-col bg-dark text-white">{children}</body>
    </html>
  );
}
