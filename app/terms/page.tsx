import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for Millet Melodies (Nellai Thati Bellam Coffee). Understand the terms governing the use of our website and services.',
};

export default function TermsOfService() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 font-sans text-[#2C1E16]">
      <Link
        href="/"
        className="text-sm text-[#8B4513] hover:underline inline-block mb-8"
      >
        &larr; Back to Home
      </Link>

      <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">
        Terms of Service
      </h1>
      <p className="text-sm text-[#6B5B4E] mb-10">
        Last updated: 27 February 2026
      </p>

      <div className="prose prose-neutral max-w-none space-y-8 text-[15px] leading-relaxed text-[#3D2E22]">
        <section>
          <h2 className="text-xl font-serif font-semibold mb-3">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using the Millet Melodies website (milletmelodies.com) and our
            services, you agree to be bound by these Terms of Service. If you do not agree with any
            part of these terms, please do not use our website or services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif font-semibold mb-3">2. Our Services</h2>
          <p>
            Millet Melodies, operated by Nellai Thati Bellam Coffee, provides millet-based breakfast
            and food services including:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Dine-in and takeaway millet breakfast items.</li>
            <li>Catering services for weddings, corporate events, and gatherings.</li>
            <li>Online ordering and delivery (where available).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-serif font-semibold mb-3">
            3. Orders &amp; Payments
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>All orders are subject to availability and confirmation.</li>
            <li>
              Prices displayed on the website are in Indian Rupees (INR) and may be subject to taxes
              as applicable.
            </li>
            <li>
              We reserve the right to modify prices without prior notice. Confirmed orders will be
              honoured at the price agreed upon at the time of booking.
            </li>
            <li>
              For catering orders, a minimum advance payment may be required. Specific terms will be
              communicated at the time of booking.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-serif font-semibold mb-3">
            4. Cancellations &amp; Refunds
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Dine-in / takeaway:</strong> No cancellations once the order is prepared.
            </li>
            <li>
              <strong>Catering orders:</strong> Cancellations must be made at least 48 hours before
              the event. Refunds (if applicable) will be processed within 7&ndash;10 business days.
            </li>
            <li>
              In case of quality issues, please contact us within 2 hours of receiving the order.
              We will arrange a replacement or refund at our discretion.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-serif font-semibold mb-3">
            5. Food Allergies &amp; Dietary Information
          </h2>
          <p>
            Our food is prepared in a kitchen that handles various ingredients including millets,
            lentils, dairy (ghee), and spices. While we take care to accommodate dietary
            requirements, we cannot guarantee the complete absence of allergens. If you have
            specific allergies, please inform us before placing your order.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif font-semibold mb-3">
            6. Intellectual Property
          </h2>
          <p>
            All content on this website &mdash; including text, images, logos, illustrations, and
            design &mdash; is the property of Millet Melodies / Nellai Thati Bellam Coffee and is
            protected by Indian intellectual property laws. You may not reproduce, distribute, or
            use any content without our prior written consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif font-semibold mb-3">
            7. Website Use
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>You agree to use the website for lawful purposes only.</li>
            <li>
              You must not attempt to gain unauthorised access to any part of the website or its
              underlying systems.
            </li>
            <li>
              We reserve the right to modify, suspend, or discontinue any part of the website
              without notice.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-serif font-semibold mb-3">
            8. Limitation of Liability
          </h2>
          <p>
            Millet Melodies shall not be liable for any indirect, incidental, or consequential
            damages arising from the use of our website or services. Our total liability shall not
            exceed the amount paid by you for the specific order or service in question.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif font-semibold mb-3">
            9. Governing Law
          </h2>
          <p>
            These terms are governed by and construed in accordance with the laws of India. Any
            disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad,
            Telangana.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif font-semibold mb-3">10. Contact Us</h2>
          <p>For questions regarding these terms, please reach out:</p>
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
