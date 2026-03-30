import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Lara Goldman",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-sm text-gray-600 mb-12">
          Last updated: March 30, 2026
        </p>

        <div className="space-y-8 text-[15px] text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-[16px] font-extrabold text-gold mb-3">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing or purchasing from laragoldman.com, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use this website or purchase any products. This website is operated by Human Potential Global LLC.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-extrabold text-gold mb-3">
              2. Products &amp; Delivery
            </h2>
            <p>
              All products sold on this website are digital goods delivered electronically. Upon successful payment, you will receive immediate access to download your purchase. It is your responsibility to download and save your files. We are not obligated to provide re-delivery.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-extrabold text-gold mb-3">
              3. No Refunds Policy
            </h2>
            <p>
              All sales are final. Due to the digital nature of our products, we do not offer refunds, returns, exchanges, or cancellations once a purchase has been completed. By completing a purchase, you acknowledge and agree to this policy.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-extrabold text-gold mb-3">
              4. Intellectual Property
            </h2>
            <p>
              All content on this website and in our products — including text, graphics, images, and other material — is the property of Human Potential Global LLC and is protected by copyright law. You may not reproduce, distribute, modify, or create derivative works from any content without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-extrabold text-gold mb-3">
              5. Disclaimer
            </h2>
            <p>
              The content provided in our products is for educational and informational purposes only. It does not constitute financial, legal, or professional advice. You should consult a qualified professional before making any financial decisions. We make no guarantees regarding outcomes or results from using our materials.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-extrabold text-gold mb-3">
              6. Limitation of Liability
            </h2>
            <p>
              Human Potential Global LLC shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or any products purchased. Your use of this website and its products is at your sole risk.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-extrabold text-gold mb-3">
              7. Payments
            </h2>
            <p>
              All payments are securely processed through Stripe. We do not store your payment information on our servers. By making a purchase, you agree to Stripe&apos;s terms of service and privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-extrabold text-gold mb-3">
              8. Changes to Terms
            </h2>
            <p>
              We reserve the right to update these Terms of Service at any time without prior notice. Changes take effect immediately upon posting. Continued use of the website constitutes acceptance of updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-[16px] font-extrabold text-gold mb-3">
              9. Contact
            </h2>
            <p>
              For questions regarding these terms, contact us at{" "}
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
