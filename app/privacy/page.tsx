import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Lara Goldman",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-dark px-5 py-16">
      <div className="max-w-[720px] mx-auto">
        <a href="/" className="text-sm text-gold/60 hover:text-gold transition-colors">
          ← Back to homepage
        </a>

        <p className="text-[11px] text-gray-600 uppercase tracking-[4px] mt-10 mb-2">
          Legal
        </p>
        <h1 className="text-[32px] font-black text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 mb-12">
          Last updated: March 30, 2026
        </p>

        <div className="space-y-8 text-[15px] text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-[16px] font-extrabold text-gold mb-3">
              1. Who We Are
            </h2>
            <p>
              This website is operated by Human Potential Global LLC. This Privacy Policy explains how we handle information when you visit laragoldman.com or purchase our products.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-extrabold text-gold mb-3">
              2. Information We Collect
            </h2>
            <p>
              We collect only the information necessary to process your purchase: your email address and payment details. Payment information is processed directly by Stripe and is never stored on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-extrabold text-gold mb-3">
              3. How We Use Your Information
            </h2>
            <p>
              Your email address is used solely to deliver your purchase and send a transaction receipt. We do not use your personal data for marketing, advertising, or any purpose beyond fulfilling your order.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-extrabold text-gold mb-3">
              4. No Data Sharing
            </h2>
            <p>
              We do not sell, rent, trade, or share your personal information with any third parties. Your data is not used for profiling, analytics, or targeted advertising.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-extrabold text-gold mb-3">
              5. Cookies
            </h2>
            <p>
              This website may use essential cookies required for basic functionality. We do not use tracking cookies, analytics cookies, or third-party advertising cookies.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-extrabold text-gold mb-3">
              6. Data Retention
            </h2>
            <p>
              We retain your email address only as long as necessary to fulfill your order. You may request deletion of your data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-extrabold text-gold mb-3">
              7. Security
            </h2>
            <p>
              All transactions are encrypted and processed securely through Stripe. We take reasonable measures to protect your information but cannot guarantee absolute security over the internet.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-extrabold text-gold mb-3">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes take effect immediately upon posting. Continued use of the website constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-extrabold text-gold mb-3">
              9. Contact
            </h2>
            <p>
              For privacy-related questions, contact us at{" "}
              <a href="mailto:info@laragoldman.com" className="text-gold hover:text-gold-light transition-colors">
                info@laragoldman.com
              </a>
            </p>
          </section>
        </div>

        <div className="gold-divider my-12" />

        <p className="text-xs text-gray-600 text-center">
          &copy; {new Date().getFullYear()} Human Potential Global LLC. All rights reserved.
        </p>
      </div>
    </main>
  );
}
