import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const posts: Record<string, { title: string; date: string; excerpt: string; content: React.ReactNode }> = {
  'millet-breakfast-benefits': {
    title: '7 Reasons Millet Breakfast Beats Rice Idly',
    date: '2026-02-20',
    excerpt: 'Discover why millet-based breakfast items are gaining popularity across Telangana.',
    content: (
      <>
        <p>
          For generations, rice-based idly and dosa have been the undisputed kings of South Indian
          breakfast. But across Telangana, a quiet revolution is happening — millets are reclaiming
          their place at the morning table.
        </p>
        <h2>1. Higher Fiber Content</h2>
        <p>
          Millets like foxtail (korralu) and finger millet (ragi) contain significantly more dietary
          fiber than polished rice. This means your millet idly keeps you fuller for longer, reducing
          mid-morning snacking.
        </p>
        <h2>2. Lower Glycemic Index</h2>
        <p>
          Unlike polished rice, millets release glucose slowly into the bloodstream. This makes millet-based
          breakfast a smarter choice for sustained energy through the morning.
        </p>
        <h2>3. Rich in Micronutrients</h2>
        <p>
          Ragi is one of the highest plant sources of calcium. Bajra (pearl millet) is packed with iron.
          Foxtail millet offers B-complex vitamins. A millet breakfast is naturally nutrient-dense.
        </p>
        <h2>4. Naturally Gluten-Free</h2>
        <p>
          All millets are naturally gluten-free, making them suitable for those with gluten sensitivity.
          This is a natural advantage over wheat-based breakfast options.
        </p>
        <h2>5. Environmentally Sustainable</h2>
        <p>
          Millets require far less water than rice to cultivate. They thrive in Telangana&apos;s semi-arid
          climate, making them an eco-conscious food choice.
        </p>
        <h2>6. Traditional & Cultural Roots</h2>
        <p>
          Before rice became dominant, millets were the staple grain of Telangana. Jonna roti, ragi mudde,
          and korralu rice were everyday foods. Choosing millets reconnects us with our heritage.
        </p>
        <h2>7. They Taste Amazing</h2>
        <p>
          When prepared right — naturally fermented, cooked with pure ghee and traditional podi — millet
          idly and dosa have a nutty, wholesome flavor that polished rice simply cannot match.
        </p>
        <h2>Making the Switch</h2>
        <p>
          You do not need to eliminate rice entirely. Start by replacing one or two breakfast items with
          millet versions. Try a millet ghee karam idly or a jonna dosa. Your taste buds and your body
          will thank you.
        </p>
      </>
    ),
  },
  'addaku-idly-story': {
    title: 'The Story Behind Addaku Idly',
    date: '2026-02-15',
    excerpt: 'How a simple leaf plate transformed our signature idly into an eco-friendly experience.',
    content: (
      <>
        <p>
          In Telangana villages, food has always been served on natural plates — banana leaves, addaku
          (leaf plates), and sal leaves. This was not a trend; it was everyday life. When we created
          Milletmillodies, we wanted to bring this tradition back.
        </p>
        <h2>What is Addaku?</h2>
        <p>
          Addaku refers to plates made from dried leaves, stitched together with small sticks. They are
          biodegradable, eco-friendly, and impart a subtle earthy aroma to the food served on them.
        </p>
        <h2>Why Steam Idly on a Leaf?</h2>
        <p>
          When millet idly batter is steamed directly on an addaku leaf, it absorbs a gentle, natural
          fragrance. The texture stays soft, and the leaf prevents sticking without any oil. It is both
          practical and beautiful.
        </p>
        <h2>The Eco-Friendly Statement</h2>
        <p>
          Every Addaku Idly we serve means one less plastic plate. At our catering events, leaf plates
          replace disposable plastics entirely. After the meal, the leaves decompose naturally — zero
          waste, full circle.
        </p>
        <h2>A Connection to Village Mornings</h2>
        <p>
          For many of our customers, eating from a leaf plate triggers memories — of grandparents,
          village festivals, and simpler times. Addaku Idly is not just food; it is a sensory journey
          back to those mornings.
        </p>
      </>
    ),
  },
  'telangana-traditional-breakfast': {
    title: 'Telangana Traditional Breakfast: A Complete Guide',
    date: '2026-02-10',
    excerpt: 'From pesarattu to jonna roti — the rich breakfast culture of Telangana.',
    content: (
      <>
        <p>
          Telangana&apos;s breakfast culture is one of the richest and most diverse in India. Far beyond
          the standard idly-dosa, the state offers a treasure trove of morning meals rooted in local
          grains, spices, and traditions.
        </p>
        <h2>Pesarattu: The Green Gram Wonder</h2>
        <p>
          Made from whole green gram (pesalu) batter, pesarattu is protein-rich, crispy, and uniquely
          Telangana. Served with ginger chutney and upma, it is a complete breakfast in itself.
        </p>
        <h2>Jonna Roti: The Sorghum Flatbread</h2>
        <p>
          Before wheat chapathis became common, jonna (sorghum) roti was the daily bread of Telangana.
          Thick, earthy, and filling — best enjoyed with a spicy curry or simple neyyi (ghee).
        </p>
        <h2>Podi &amp; Karam: The Spice That Defines Breakfast</h2>
        <p>
          No Telangana breakfast is complete without podi — a dry spice powder made from roasted lentils,
          red chilies, and sesame seeds. Mixed with ghee or oil, it transforms any plain idly or dosa
          into a flavor explosion.
        </p>
        <h2>Bellam Chai: Palm Jaggery Tea</h2>
        <p>
          Instead of refined sugar, traditional Telangana tea uses palm jaggery (thatibellam). The result
          is a naturally sweet, mineral-rich beverage that pairs perfectly with any tiffin item.
        </p>
        <h2>The Millet Revival</h2>
        <p>
          Today, Telangana is at the forefront of the millet revival. What was once village food is now
          celebrated as superfood. Millet idly, millet dosa, and millet pongal are finding their way back
          to breakfast tables across the state.
        </p>
      </>
    ),
  },
  'millet-catering-events': {
    title: 'Why Millet Catering is the New Wedding Trend',
    date: '2026-02-05',
    excerpt: 'Health-conscious couples are choosing millet-based menus for their wedding breakfasts.',
    content: (
      <>
        <p>
          Wedding breakfast catering in Telangana is evolving. More couples are choosing millet-based
          menus over traditional rice-heavy spreads. Here is why this trend is growing — and why it makes
          perfect sense.
        </p>
        <h2>Health-Conscious Celebrations</h2>
        <p>
          Modern couples care about what they serve their guests. Millet-based breakfast items offer
          better nutrition — more fiber, lower glycemic impact, and richer micronutrient profiles —
          without sacrificing taste.
        </p>
        <h2>The Addaku Experience</h2>
        <p>
          Imagine your wedding guests being served steaming millet idly on traditional leaf plates.
          It creates a talking point, a cultural connection, and an eco-friendly statement all at once.
        </p>
        <h2>Menu Variety</h2>
        <p>
          Millet catering is not limited. From millet dosa and pesarattu to pongal and upma, the variety
          matches or exceeds traditional rice-based menus. Add venna specials and munagaku podi items,
          and you have a feast.
        </p>
        <h2>Eco-Friendly by Default</h2>
        <p>
          Leaf plate serving, millet crops that need less water, and zero-plastic packaging — a millet
          catering spread is inherently better for the environment.
        </p>
        <h2>How to Plan a Millet Catering Menu</h2>
        <p>
          Start with a mix of familiar and unique items. Include some standard favorites (ghee idly,
          masala dosa) alongside signature millet items (jonna ghee karam dosa, millet pongal). This
          ensures every guest finds something they love.
        </p>
      </>
    ),
  },
  'ghee-vs-oil-south-indian-breakfast': {
    title: 'Pure Ghee vs Oil: What Makes Tiffin Taste Better?',
    date: '2026-01-28',
    excerpt: 'The tradition behind using pure cow ghee in South Indian breakfast preparations.',
    content: (
      <>
        <p>
          Walk into any traditional Telangana household during breakfast time, and you will notice
          one thing: the aroma of pure ghee. Not refined oil, not vanaspati — ghee. There is a reason
          for this, and it goes beyond taste.
        </p>
        <h2>The Flavor Difference</h2>
        <p>
          Pure cow ghee has a rich, nutty aroma that no oil can replicate. When a dosa is finished
          with ghee instead of oil, the flavor profile transforms entirely — deeper, warmer, more
          satisfying.
        </p>
        <h2>Ghee and Podi: The Perfect Pair</h2>
        <p>
          Traditional podi (spice powder) is designed to be mixed with ghee, not oil. The fat in ghee
          carries the flavors of roasted lentils and sesame more effectively, creating a richer taste
          experience on your idly or dosa.
        </p>
        <h2>The Traditional Kitchen Approach</h2>
        <p>
          In village kitchens, ghee was not a luxury — it was the default cooking fat. Breakfast was
          naturally cooked in ghee. When we use ghee at Milletmillodies, we are simply continuing what
          our grandmothers always did.
        </p>
        <h2>Quality Matters</h2>
        <p>
          Not all ghee is equal. We use pure cow ghee in all our preparations. No blends, no vanaspati,
          no shortcuts. The difference is in every bite.
        </p>
        <h2>The Bottom Line</h2>
        <p>
          Ghee makes tiffin taste better because it was always meant to be there. When you taste a
          ghee karam dosa or a ghee podi idly made with pure cow ghee, you taste breakfast the way it
          was designed to be.
        </p>
      </>
    ),
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <main className="blog-prose">
      <Link
        href="/blog"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.85rem',
          color: 'var(--terracotta)',
          display: 'inline-block',
          marginBottom: 'var(--space-lg)',
        }}
      >
        &larr; All Posts
      </Link>
      <article>
        <h1>{post.title}</h1>
        <time
          dateTime={post.date}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            color: '#999',
            display: 'block',
            marginBottom: 'var(--space-xl)',
          }}
        >
          {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
        </time>
        {post.content}
      </article>
      <hr style={{ border: 'none', borderTop: '1px solid var(--gray-light)', margin: 'var(--space-2xl) 0 var(--space-lg)' }} />
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9rem',
          color: 'var(--terracotta)',
          fontWeight: 600,
        }}
      >
        &larr; Back to Milletmillodies Village
      </Link>
    </main>
  );
}
