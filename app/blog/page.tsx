import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Stories, guides, and millet wisdom from the Milletmillodies kitchen. Learn about millets, Telangana breakfast traditions, and healthy eating.',
};

const posts = [
  {
    slug: 'millet-breakfast-benefits',
    title: '7 Reasons Millet Breakfast Beats Rice Idly',
    excerpt: 'Discover why millet-based breakfast items are gaining popularity across Telangana.',
    date: '2026-02-20',
    tag: 'Health',
  },
  {
    slug: 'addaku-idly-story',
    title: 'The Story Behind Addaku Idly',
    excerpt: 'How a simple leaf plate transformed our signature idly into an eco-friendly experience.',
    date: '2026-02-15',
    tag: 'Culture',
  },
  {
    slug: 'telangana-traditional-breakfast',
    title: 'Telangana Traditional Breakfast: A Complete Guide',
    excerpt: 'From pesarattu to jonna roti — the rich breakfast culture of Telangana.',
    date: '2026-02-10',
    tag: 'Guide',
  },
  {
    slug: 'millet-catering-events',
    title: 'Why Millet Catering is the New Wedding Trend',
    excerpt: 'Health-conscious couples are choosing millet-based menus for their wedding breakfasts.',
    date: '2026-02-05',
    tag: 'Catering',
  },
  {
    slug: 'ghee-vs-oil-south-indian-breakfast',
    title: 'Pure Ghee vs Oil: What Makes Tiffin Taste Better?',
    excerpt: 'The tradition behind using pure cow ghee in South Indian breakfast preparations.',
    date: '2026-01-28',
    tag: 'Ingredients',
  },
];

export default function BlogIndex() {
  return (
    <main className="blog-index">
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.85rem',
          color: 'var(--terracotta)',
          display: 'inline-block',
          marginBottom: 'var(--space-lg)',
        }}
      >
        &larr; Back to Village
      </Link>
      <h1
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          color: 'var(--deep-brown)',
        }}
      >
        Millet Stories & Recipes
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          color: '#6B5B4E',
          marginTop: 'var(--space-sm)',
          maxWidth: 500,
        }}
      >
        Guides, traditions, and wisdom from our kitchen to yours.
      </p>

      <div className="blog-grid">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{
              display: 'block',
              background: 'var(--white)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-lg)',
              boxShadow: 'var(--shadow-sm)',
              borderTop: '3px solid var(--terracotta)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
          >
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--leaf-green)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {post.tag}
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--deep-brown)', margin: '6px 0', lineHeight: 1.3 }}>
              {post.title}
            </h2>
            <p style={{ fontSize: '0.85rem', color: '#6B5B4E', lineHeight: 1.5, margin: 0 }}>
              {post.excerpt}
            </p>
            <time style={{ fontSize: '0.75rem', color: '#999', marginTop: 8, display: 'block' }}>
              {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </Link>
        ))}
      </div>
    </main>
  );
}
