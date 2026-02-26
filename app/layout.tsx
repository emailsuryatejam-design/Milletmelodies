import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

/* ── SEO: Enhanced Metadata per SEO Strategy Guide ── */
export const metadata: Metadata = {
  metadataBase: new URL('https://milletmillodies.com'),

  /* Title tag: primary keyword near beginning, brand at end, <60 chars */
  title: {
    default: 'Millet Breakfast & Catering Hyderabad | Millet Melodies',
    template: '%s | Millet Melodies',
  },

  /* Meta description: compelling, <160 chars, includes CTA + keywords */
  description:
    'Authentic Telangana millet breakfast — Addaku Idly, millet dosa, pure ghee & podi. Healthy tiffin rooted in village traditions. Catering for events. Order now!',

  /* Expanded keyword list targeting local + niche search terms */
  keywords: [
    'millet breakfast Hyderabad',
    'Telangana millet food',
    'addaku idly',
    'millet idly',
    'millet dosa Hyderabad',
    'foxtail millet breakfast',
    'ragi idly',
    'jowar dosa',
    'healthy breakfast Hyderabad',
    'Telangana tiffin',
    'millet catering Hyderabad',
    'wedding catering Telangana',
    'corporate breakfast catering',
    'eco-friendly catering',
    'pure ghee breakfast',
    'traditional podi karam',
    'pesarattu Hyderabad',
    'Millet Melodies',
    'milletmillodies',
    'addaku leaf plate idly',
    'village style breakfast',
    'organic millet food',
  ],

  /* Open Graph: complete with image, locale */
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://milletmillodies.com',
    siteName: 'Millet Melodies',
    title: 'Millet Breakfast & Catering Hyderabad | Millet Melodies',
    description:
      'Authentic Telangana millet breakfast — Addaku Idly, millet dosa, pure ghee. Healthy tiffin catering for weddings & events.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Millet Melodies — Authentic Telangana Millet Breakfast',
      },
    ],
  },

  /* Twitter Card */
  twitter: {
    card: 'summary_large_image',
    title: 'Millet Breakfast & Catering Hyderabad | Millet Melodies',
    description:
      'Authentic Telangana millet breakfast — Addaku Idly, millet dosa, pure ghee. Healthy tiffin catering for weddings & events.',
    images: ['/og-image.png'],
  },

  /* Robots: index, follow + crawl directives */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  /* Canonical */
  alternates: {
    canonical: 'https://milletmillodies.com',
  },

  /* Additional meta */
  authors: [{ name: 'Millet Melodies' }],
  creator: 'Millet Melodies',
  publisher: 'Millet Melodies',
  category: 'Food & Restaurant',

  /* Verification placeholders — fill with real IDs when available */
  // verification: {
  //   google: 'your-google-site-verification-id',
  // },
};

/* Viewport: mobile-first, theme color */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2C5F2D',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        {/* JSON-LD: Organization / LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Restaurant',
              name: 'Millet Melodies',
              alternateName: 'Milletmillodies',
              url: 'https://milletmillodies.com',
              logo: 'https://milletmillodies.com/logo.png',
              image: 'https://milletmillodies.com/og-image.png',
              description:
                'Authentic Telangana millet breakfast — Addaku Idly, millet dosa, traditional podi, pure ghee. Healthy morning tiffin rooted in village traditions. Catering for weddings & events.',
              telephone: '+91-XXXXXXXXXX',
              email: 'hello@milletmillodies.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Hyderabad',
                addressRegion: 'Telangana',
                postalCode: '500001',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 17.385,
                longitude: 78.4867,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '06:00',
                  closes: '11:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Saturday', 'Sunday'],
                  opens: '06:00',
                  closes: '12:00',
                },
              ],
              servesCuisine: ['South Indian', 'Telangana', 'Millet-based'],
              priceRange: '$$',
              sameAs: [
                'https://instagram.com/milletmillodies',
                'https://facebook.com/milletmillodies',
              ],
              hasMenu: {
                '@type': 'Menu',
                name: 'Breakfast Menu',
                description: 'Millet-based Telangana breakfast items',
              },
            }),
          }}
        />

        {/* JSON-LD: WebSite + SearchAction for sitelinks search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Millet Melodies',
              alternateName: 'Milletmillodies',
              url: 'https://milletmillodies.com',
            }),
          }}
        />

        {/* JSON-LD: FAQPage schema from FAQs data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is Addaku Idly?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Addaku Idly is our signature millet-based idly steamed on a traditional leaf plate (addaku). The leaf imparts a subtle aroma and flavor rooted in Telangana breakfast traditions. It is eco-friendly and connects you to village-style serving.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Which millet is used in Addaku Idly?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We primarily use foxtail millet (korralu) combined with traditional urad dal for the perfect soft texture and naturally fermented taste.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is Addaku Idly available for catering?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes! Addaku Idly is one of our most popular catering items. It adds an authentic, eco-friendly touch to weddings, corporate events, and family functions.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Are millet dosas heavy to digest?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Not at all. Millet dosas are naturally fermented, making them light on the stomach. Millets are fiber-rich and help keep you full longer without feeling heavy.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do you provide catering services?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes! We cater for weddings, corporate breakfasts, family functions, pelli pandiri events, and more. We bring the full Millet Melodies experience to your venue.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What is the minimum order for catering?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We can cater for groups as small as 25 people. For larger events of 500+, we offer special menu planning and pricing. Contact us for a custom quote.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do you use pure ghee?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. We use pure cow ghee in all our ghee preparations. No vanaspati or artificial substitutes.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What are your operating hours?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We serve breakfast from 6:00 AM to 11:00 AM on weekdays and 6:00 AM to 12:00 PM on weekends.',
                  },
                },
              ],
            }),
          }}
        />

        {/* JSON-LD: BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://milletmillodies.com',
                },
              ],
            }),
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="font-sans bg-[#F9F6F0] text-[#2C1E16] antialiased">
        {children}
      </body>
    </html>
  );
}
