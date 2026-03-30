import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-dark text-white">{children}</body>
    </html>
  );
}
