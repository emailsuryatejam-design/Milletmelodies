import type { MetadataRoute } from 'next';

const BASE_URL = 'https://milletmelodies.com';

const blogSlugs = [
  'millet-breakfast-benefits',
  'addaku-idly-story',
  'telangana-traditional-breakfast',
  'millet-catering-events',
  'ghee-vs-oil-south-indian-breakfast',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    /* Homepage — highest priority */
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    /* Menu page */
    {
      url: `${BASE_URL}/#menu`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    /* Catering page */
    {
      url: `${BASE_URL}/#catering`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    /* Contact / Visit */
    {
      url: `${BASE_URL}/#contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    /* Blog index */
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    /* Individual blog posts */
    ...blogRoutes,
  ];
}
