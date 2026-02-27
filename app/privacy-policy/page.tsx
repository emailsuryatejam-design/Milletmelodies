import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Millet Melodies (Nellai Thati Bellam Coffee). Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 font-sans text-[#2C1E16]">
      <Link
        href="/"
        className="text-sm text-[#8B4513] hover:underline inline-block mb-8"
      >
        &larr; Back to Home
      </Link>

      <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">
        Privacy Policy
      </h1>
      <p className="text-sm text-[#6B5B4E] mb-10">
        Last updated: 27 February 2026
      </p>

      <div className="prose prose-neutral max-w-none space-y-8 text-[15px] leading-relaxed text-[#3D2E22]">
        <section>
          <h2 className="text-xl font-serif font-semibold mb-3">1. Who We Are</h2>
          <p>
            Millet Melodies is a brand operated by <strong>Nellai Thati Bellam Coffee</strong>,
            located at PLOT NO 48, Miyapur Rd, opp. VNR Vignana Jyothi Engineering College,
            Bachupally, Hyderabad, Telangana 500090, India. When we say &ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;, we mean Nellai Thati Bellam Coffee and the
            Millet Melodies brand.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif font-semibold mb-3">
            2. Information We Collect
          </h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Contact information</strong> &mdash; name, phone number, email address, and
              delivery address when you place an order or make an enquiry.
            </li>
            <li>
              <strong>Order details</strong> &mdash; items ordered, catering requirements, event
              dates, and preferences.
            </li>
            <li>
              <strong>Usage data</strong> &mdash; pages visited, time spent, browser type, and
              device information collected automatically through cookies and analytics.
            </li>
            <li>
              <strong>Communication data</strong> &mdash; messages sent via WhatsApp, phone calls,
              or contact forms on our website.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-serif font-semibold mb-3">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To process and fulfil your orders and catering requests.</li>
            <li>To communicate with you about your orders, enquiries, and feedback.</li>
            <li>To improve our menu, website, and customer experience.</li>
            <li>To send promotional offers and updates (only with your consent).</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-serif font-semibold mb-3">
            4. Cookies &amp; Analytics
          </h2>
          <p>
            Our website uses cookies and similar technologies to enhance your browsing experience and
            gather anonymised usage statistics. You can control cookie preferences through your
            browser settings. We do not sell or share cookie data with third parties for advertising
            purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif font-semibold mb-3">5. Data Sharing</h2>
          <p>
            We do <strong>not</strong> sell, trade, or rent your personal information to third
            parties. We may share data only with:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Delivery partners to fulfil your order.</li>
            <li>Payment processors for secure transactions.</li>
            <li>Legal authorities if required by law.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-serif font-semibold mb-3">6. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information from
            unauthorised access, alteration, or destruction. However, no method of transmission over
            the internet is 100% secure. We encourage you to take steps to protect your own data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif font-semibold mb-3">7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Request access to the personal data we hold about you.</li>
            <li>Request correction or deletion of your data.</li>
            <li>Withdraw consent for marketing communications at any time.</li>
            <li>Lodge a complaint with a data protection authority.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-serif font-semibold mb-3">
            8. Third-Party Links
          </h2>
          <p>
            Our website may contain links to external sites (Google Maps, Instagram, WhatsApp). We
            are not responsible for the privacy practices of these third-party services. We encourage
            you to review their respective privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif font-semibold mb-3">
            9. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page
            with an updated revision date. Continued use of our services after changes constitutes
            acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif font-semibold mb-3">10. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise your rights, please
            contact us:
          </p>
          <ul className="list-none pl-0 space-y-1">
            <li>
              <strong>Phone / WhatsApp:</strong>{' '}
              <a href="tel:+917075927006" className="text-[#8B4513] hover:underline">
                +91 70759 27006
              </a>
            </li>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:svadhistamgroup@gmail.com" className="text-[#8B4513] hover:underline">
                svadhistamgroup@gmail.com
              </a>
            </li>
            <li>
              <strong>Address:</strong> PLOT NO 48, Miyapur Rd, Bachupally, Hyderabad, Telangana
              500090
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
