'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Menu, X, MapPin, Phone, MessageCircle,
  Leaf, Send, ChevronRight, Star, Clock,
  ShieldCheck, ArrowRight, ChevronDown, Users, CalendarDays, BookOpen
} from 'lucide-react';
import MandalaIcon from './svg/MandalaIcon';
import AddakuLeafArt from './svg/AddakuLeafArt';
import StoneMortar from './svg/StoneMortar';

import menuData from '@/data/menu.json';
import siteData from '@/data/site.json';
import milletData from '@/data/millets.json';
import faqData from '@/data/faqs.json';

// --- Flatten menu for feature items ---
type MenuItem = {
  name: string;
  subtitle: string;
  desc: string;
  price: string;
  millet: string;
  isBestseller?: boolean;
};

const FEATURED_ITEMS: MenuItem[] = (() => {
  const all: MenuItem[] = [];
  for (const cat of menuData.categories) {
    for (const item of cat.items) {
      if (item.isBestseller) {
        all.push({
          name: item.name,
          subtitle: item.microStory || cat.name,
          desc: item.microStory || `A premium ${cat.name.toLowerCase()} preparation.`,
          price: (item as any).qty ? `${(item as any).qty}` : '',
          millet: cat.name,
          isBestseller: true,
        });
      }
    }
  }
  return all.slice(0, 4);
})();

// All categories for the full menu panel
const MENU_CATEGORIES = menuData.categories;

type BlogPost = {
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  content: string[];
};

const BLOG_POSTS: BlogPost[] = [
  {
    title: '7 Reasons Millet Breakfast Beats Rice Idly',
    date: 'Feb 2026',
    tag: 'Health',
    excerpt: 'Discover why millet-based breakfast items are gaining popularity across Telangana.',
    content: [
      'For generations, rice-based idly and dosa have been the undisputed kings of South Indian breakfast. But across Telangana, a quiet revolution is happening — millets are reclaiming their place at the morning table.',
      'Millets like foxtail (korralu) and finger millet (ragi) contain significantly more dietary fiber than polished rice. Your millet idly keeps you fuller for longer.',
      'Unlike polished rice, millets release glucose slowly into the bloodstream — a smarter choice for sustained energy through the morning.',
      'Ragi is one of the highest plant sources of calcium. Bajra is packed with iron. Foxtail millet offers B-complex vitamins. A millet breakfast is naturally nutrient-dense.',
      'All millets are naturally gluten-free. They require far less water than rice to cultivate and thrive in Telangana\'s semi-arid climate.',
      'When prepared right — naturally fermented, cooked with pure ghee and traditional podi — millet idly and dosa have a nutty, wholesome flavor that polished rice simply cannot match.',
    ],
  },
  {
    title: 'The Story Behind Addaku Idly',
    date: 'Feb 2026',
    tag: 'Culture',
    excerpt: 'How a simple leaf plate transformed our signature idly into an eco-friendly experience.',
    content: [
      'In Telangana villages, food has always been served on natural plates — banana leaves, addaku (leaf plates), and sal leaves. This was not a trend; it was everyday life.',
      'Addaku refers to plates made from dried leaves, stitched together with small sticks. They are biodegradable, eco-friendly, and impart a subtle earthy aroma to the food.',
      'When millet idly batter is steamed directly on an addaku leaf, it absorbs a gentle, natural fragrance. The texture stays soft, and the leaf prevents sticking without any oil.',
      'Every Addaku Idly we serve means one less plastic plate. At our catering events, leaf plates replace disposable plastics entirely — zero waste, full circle.',
      'For many customers, eating from a leaf plate triggers memories — of grandparents, village festivals, and simpler times. Addaku Idly is not just food; it is a sensory journey back to those mornings.',
    ],
  },
  {
    title: 'Telangana Traditional Breakfast Guide',
    date: 'Feb 2026',
    tag: 'Guide',
    excerpt: 'From pesarattu to jonna roti — the rich breakfast culture of Telangana.',
    content: [
      'Telangana\'s breakfast culture is one of the richest and most diverse in India. Far beyond the standard idly-dosa, the state offers a treasure trove of morning meals rooted in local grains.',
      'Pesarattu, made from whole green gram batter, is protein-rich, crispy, and uniquely Telangana. Served with ginger chutney and upma, it is a complete breakfast.',
      'Before wheat chapathis became common, jonna (sorghum) roti was the daily bread of Telangana — thick, earthy, and filling, best enjoyed with a spicy curry or simple neyyi.',
      'No Telangana breakfast is complete without podi — a dry spice powder made from roasted lentils, red chilies, and sesame seeds. Mixed with ghee, it transforms any plain idly into a flavor explosion.',
      'Today, Telangana is at the forefront of the millet revival. Millet idly, millet dosa, and millet pongal are finding their way back to breakfast tables across the state.',
    ],
  },
  {
    title: 'Why Millet Catering is the New Wedding Trend',
    date: 'Feb 2026',
    tag: 'Catering',
    excerpt: 'Health-conscious couples are choosing millet-based menus for their wedding breakfasts.',
    content: [
      'Wedding breakfast catering in Telangana is evolving. More couples are choosing millet-based menus over traditional rice-heavy spreads.',
      'Modern couples care about what they serve their guests. Millet-based items offer better nutrition — more fiber, lower glycemic impact, and richer micronutrient profiles — without sacrificing taste.',
      'Imagine your wedding guests being served steaming millet idly on traditional leaf plates. It creates a talking point, a cultural connection, and an eco-friendly statement all at once.',
      'From millet dosa and pesarattu to pongal and upma, the variety matches or exceeds traditional rice-based menus. Add venna specials and munagaku podi items, and you have a feast.',
      'Leaf plate serving, millet crops that need less water, and zero-plastic packaging — a millet catering spread is inherently better for the environment.',
    ],
  },
  {
    title: 'Pure Ghee vs Oil: What Makes Tiffin Taste Better?',
    date: 'Jan 2026',
    tag: 'Ingredients',
    excerpt: 'The tradition behind using pure cow ghee in South Indian breakfast preparations.',
    content: [
      'Walk into any traditional Telangana household during breakfast time, and you will notice one thing: the aroma of pure ghee. Not refined oil, not vanaspati — ghee.',
      'Pure cow ghee has a rich, nutty aroma that no oil can replicate. When a dosa is finished with ghee instead of oil, the flavor profile transforms entirely — deeper, warmer, more satisfying.',
      'Traditional podi is designed to be mixed with ghee, not oil. The fat in ghee carries the flavors of roasted lentils and sesame more effectively.',
      'In village kitchens, ghee was not a luxury — it was the default cooking fat. When we use ghee at Milletmillodies, we are simply continuing what our grandmothers always did.',
      'Ghee makes tiffin taste better because it was always meant to be there. When you taste a ghee karam dosa made with pure cow ghee, you taste breakfast the way it was designed to be.',
    ],
  },
];

const TOTAL_SECTIONS = 6;
const SECTION_LABELS = ['Heritage', 'Menu', 'Signature', 'Millets', 'Gatherings', 'Connect'];


// --- Steam component ---
function SteamWisps() {
  return (
    <div className="absolute top-[15%] left-1/2 -translate-x-1/2 pointer-events-none">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/70"
          style={{
            width: `${8 + i * 4}px`,
            height: `${20 + i * 8}px`,
            left: `${-10 + i * 12}px`,
            filter: `blur(${3 + i * 2}px)`,
            animation: `steamRise ${3 + i * 0.5}s infinite ease-in ${i * 0.7}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function PremiumSite() {
  const [activeModal, setActiveModal] = useState<MenuItem | null>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [expandedMenuCat, setExpandedMenuCat] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeBlog, setActiveBlog] = useState<BlogPost | null>(null);

  const scrollToSection = useCallback((index: number) => {
    setIsNavOpen(false);
    const el = document.getElementById(`section-${index}`);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // No section reveal - content always visible for reliability

  return (
    <div className="relative min-h-screen selection:bg-gold selection:text-white font-sans bg-bg text-text">
      <div className="texture-overlay" />

      {/* ====== NAVIGATION ====== */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-bg/90 backdrop-blur-md border-b border-gold/30 transition-all duration-300 overflow-visible">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between relative">
          <button className="flex items-center group" onClick={() => scrollToSection(0)}>
            <div className="absolute top-1.5 left-2 sm:left-4 bg-white rounded-2xl shadow-xl shadow-black/10 border border-gold/20 p-1.5">
              <img
                src="/logo.png"
                alt="Millet Melodies — Authentic Telangana Millet Breakfast, Hyderabad"
                className="h-24 sm:h-28 lg:h-32 w-auto object-contain"
                width={128}
                height={128}
                loading="eager"
              />
            </div>
          </button>

          <div className="hidden lg:flex space-x-8 text-xs uppercase tracking-[0.2em] font-bold text-wood">
            {SECTION_LABELS.map((item, idx) => (
              <button key={item} onClick={() => scrollToSection(idx)} className="hover:text-gold relative group py-2">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <a
            href={`https://wa.me/${siteData.phone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center px-6 py-2 bg-terra text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-terra-dark transition-colors shadow-lg shadow-red-900/20"
          >
            Order Now
          </a>

          <button className="lg:hidden text-text" onClick={() => setIsNavOpen(!isNavOpen)} aria-label="Toggle menu">
            {isNavOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isNavOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-bg border-b border-gold/30 flex flex-col p-6 shadow-2xl">
            {SECTION_LABELS.map((item, idx) => (
              <button
                key={item}
                onClick={() => scrollToSection(idx)}
                className="text-left py-4 text-lg font-serif font-bold text-text border-b border-gold/20 hover:text-terra"
              >
                {item}
              </button>
            ))}
            <a
              href={`https://wa.me/${siteData.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-4 bg-terra text-white font-bold uppercase tracking-wider rounded text-center block"
            >
              Order Now
            </a>
          </div>
        )}
      </nav>

      {/* ====== SECTIONS ====== */}
      <main className="w-full pt-28 flex flex-col bg-bg" role="main">

            {/* ========== S0: HERITAGE (Hero) ========== */}
            <section
              id="section-0"
              className="w-full min-h-[90vh] py-24 flex items-center justify-center px-6 lg:px-20 relative"
            >
              <div className={`max-w-4xl mx-auto text-center relative z-10`}>
                <div className="mb-6 flex justify-center animate-float-slow">
                  <span className="px-5 py-1.5 border border-gold rounded-full text-gold text-xs font-bold uppercase tracking-[0.2em] bg-white/50 backdrop-blur-sm">
                    Authentic Telangana Cuisine
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-text leading-[1.1] mb-6">
                  Taste the <span className="text-terra italic">Tradition</span>.<br />
                  Feel the <span className="text-shimmer animate-shimmer italic">Health</span>.
                </h1>

                <p className="text-lg md:text-2xl text-wood mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                  {siteData.tagline}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button
                    onClick={() => scrollToSection(1)}
                    className="px-10 py-4 bg-text text-bg rounded uppercase tracking-widest font-bold text-sm hover:bg-wood transition-all flex items-center group"
                  >
                    Explore Menu <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => scrollToSection(4)}
                    className="px-10 py-4 border-2 border-text text-text rounded uppercase tracking-widest font-bold text-sm hover:bg-text hover:text-bg transition-all"
                  >
                    Catering Enquiries
                  </button>
                </div>

                {/* Decorative bouncing arrow */}
                <div className="mt-16 animate-float-fast">
                  <ChevronDown className="mx-auto h-6 w-6 text-gold" />
                </div>
              </div>
            </section>

            {/* ========== S1: MENU ========== */}
            <section
              id="section-1"
              className="w-full min-h-screen py-28 flex flex-col justify-center px-6 lg:px-20 relative"
            >
              <div className={`flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-7xl mx-auto w-full`}>
                {/* Left: Header */}
                <div className="lg:w-1/3 flex flex-col justify-center">
                  <h2 className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4">Our Offerings</h2>
                  <h3 className="text-4xl md:text-5xl font-serif text-text mb-6 leading-tight">
                    Crafted with Ancient Wisdom.
                  </h3>
                  <p className="text-wood text-lg leading-relaxed mb-8">
                    Each dish is a testament to our heritage — stone-ground, pure ghee, and unadulterated ingredients.
                  </p>
                  <div className="hidden lg:block w-24 h-1 bg-terra" />

                  {/* Full menu accordion */}
                  <div className="mt-8 space-y-2 max-h-[40vh] overflow-y-auto pr-2">
                    {MENU_CATEGORIES.slice(0, 8).map((cat, idx) => (
                      <div key={idx} className="border-b border-gold/20">
                        <button
                          onClick={() => setExpandedMenuCat(expandedMenuCat === idx ? null : idx)}
                          className="w-full flex justify-between items-center py-3 text-left text-sm font-bold text-text hover:text-terra transition-colors"
                        >
                          <span>{cat.name}</span>
                          <ChevronDown className={`h-4 w-4 text-gold transition-transform ${expandedMenuCat === idx ? 'rotate-180' : ''}`} />
                        </button>
                        {expandedMenuCat === idx && (
                          <div className="pb-3 space-y-1">
                            {cat.items.map((item, j) => (
                              <div key={j} className="flex justify-between text-sm text-wood py-1">
                                <span className={item.isBestseller ? 'font-bold text-terra' : ''}>{item.name}</span>
                                {(item as any).qty && <span className="text-gold font-bold">{(item as any).qty}</span>}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Featured cards */}
                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold opacity-5 rounded-full blur-3xl -z-10" />
                  {FEATURED_ITEMS.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveModal(item)}
                      className={`menu-item-card ${i % 2 === 0 ? 'bg-white/60' : 'bg-[#EFEBE0]/90'} backdrop-blur-md border border-white/40 shadow-sm p-8 rounded-xl cursor-pointer group flex flex-col justify-between min-h-[200px]`}
                    >
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-xl md:text-2xl font-serif text-text group-hover:text-terra transition-colors">{item.name}</h4>
                          {item.price && <span className="text-xs uppercase tracking-wider text-gold font-bold border border-gold px-2 py-1 rounded whitespace-nowrap ml-2">{item.price}</span>}
                        </div>
                        <p className="text-wood text-sm italic mb-4">{item.subtitle}</p>
                      </div>
                      <div className="flex items-center text-xs font-bold uppercase tracking-wider text-terra">
                        Discover <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ========== S2: SIGNATURE (Addaku Idly) ========== */}
            <section
              id="section-2"
              className="w-full min-h-screen py-28 flex items-center justify-center px-6 lg:px-20 relative"
            >
              <div className={`max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 w-full`}>
                {/* Visual Art */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                  <div className="relative w-full max-w-xs lg:max-w-sm mx-auto">
                    <div className="absolute inset-0 bg-green-brand rounded-full opacity-10 blur-3xl animate-glow" />
                    <div className="relative z-10 animate-float-slow">
                      <AddakuLeafArt />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <span className="flex items-center text-green-brand text-sm font-bold uppercase tracking-widest mb-4">
                    <Star className="w-4 h-4 mr-2 fill-current" /> The Masterpiece
                  </span>
                  <h2 className="text-5xl lg:text-7xl font-serif text-text mb-6">
                    Addaku <br /><span className="text-green-brand italic">Experience.</span>
                  </h2>
                  <p className="text-wood text-xl leading-relaxed mb-8 font-light">
                    Steaming idly directly within hand-stitched Addaku leaves imparts a subtle, earthy fragrance
                    and therapeutic properties that modern steel cannot replicate.
                  </p>
                  <ul className="space-y-4 mb-10">
                    {['100% Biodegradable & Eco-Friendly', 'Rich in natural antioxidants from the leaf', 'Authentic Foxtail Millet Batter'].map((point, i) => (
                      <li key={i} className="flex items-center text-text font-bold">
                        <div className="w-2 h-2 rounded-full bg-gold mr-4 shrink-0" /> {point}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => scrollToSection(4)}
                    className="px-8 py-3 border border-green-brand text-green-brand rounded uppercase tracking-widest font-bold text-sm hover:bg-green-brand hover:text-white transition-all"
                  >
                    Request for Events
                  </button>
                </div>
              </div>
            </section>

            {/* ========== S3: BULK MILLETS ========== */}
            <section
              id="section-3"
              className="w-full min-h-screen py-28 flex items-center justify-center px-6 lg:px-20 relative"
            >
              <div className={`max-w-7xl mx-auto w-full`}>
                <div className="text-center mb-12">
                  <h2 className="text-xs uppercase tracking-[0.3em] text-terra font-bold mb-4">Bulk Millet Orders</h2>
                  <h3 className="text-4xl md:text-5xl font-serif text-text mb-4">Order Millets in Bulk</h3>
                  <p className="text-wood text-lg max-w-2xl mx-auto">
                    Sourced directly from organic farmers in Telangana. Order via WhatsApp for home delivery.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {milletData.millets.map((m, i) => (
                    <div
                      key={i}
                      className="bg-white/60 border border-gold/20 rounded-xl p-8 hover:border-gold hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full shrink-0 shadow-inner" style={{ background: m.color }} />
                        <div>
                          <h4 className="text-xl font-serif font-bold text-text group-hover:text-terra transition-colors">{m.name}</h4>
                          <p className="text-sm text-gold italic">{m.localName}</p>
                        </div>
                      </div>
                      <ul className="space-y-1.5 mb-6">
                        {m.healthSnippets.map((s, j) => (
                          <li key={j} className="flex items-start text-sm text-wood">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 mr-2 shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={`https://wa.me/${siteData.phone.replace(/[^0-9]/g, '')}?text=Hi! I'd like to order ${m.name} (${m.localName}) in bulk.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-3 border-2 border-text text-text rounded font-bold uppercase tracking-wider text-xs hover:bg-text hover:text-bg transition-colors"
                      >
                        <MessageCircle className="h-4 w-4" /> Order on WhatsApp
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ========== S4: CATERING ========== */}
            <section
              id="section-4"
              className="w-full min-h-screen py-28 flex items-center justify-center px-6 lg:px-20 relative"
            >
              <div className={`max-w-5xl mx-auto w-full bg-text text-bg rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row relative`}>
                <MandalaIcon className="absolute -top-32 -left-32 w-96 h-96 text-wood opacity-50 pointer-events-none" />

                <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center relative z-10">
                  <h2 className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4">Host with Heritage</h2>
                  <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                    Elevate Your Gatherings.
                  </h3>
                  <p className="text-cream text-lg mb-8 font-light">
                    Bring the authentic village feast to your weddings, corporate events, and private functions.
                  </p>
                  <div className="space-y-4 font-bold text-sm tracking-widest text-gold">
                    <p className="flex items-center gap-2"><Users className="w-4 h-4" /> LIVE DOSA STATIONS</p>
                    <p className="flex items-center gap-2"><CalendarDays className="w-4 h-4" /> TRADITIONAL PANDIRI SETUP</p>
                    <p className="flex items-center gap-2"><Star className="w-4 h-4" /> 50 TO 5000 GUESTS</p>
                  </div>
                </div>

                <div className="lg:w-1/2 bg-white/5 p-10 lg:p-16 backdrop-blur-sm border-t lg:border-t-0 lg:border-l border-wood relative z-10">
                  {formSubmitted ? (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                        <Star className="w-8 h-8 text-gold" />
                      </div>
                      <h4 className="text-2xl font-serif mb-3">Thank You!</h4>
                      <p className="text-cream">We&apos;ll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form className="space-y-5" onSubmit={handleFormSubmit}>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-gold mb-2">Name</label>
                        <input type="text" className="w-full bg-transparent border-b border-wood py-2 text-bg focus:outline-none focus:border-gold transition-colors" required />
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs uppercase tracking-widest text-gold mb-2">Phone</label>
                          <input type="tel" className="w-full bg-transparent border-b border-wood py-2 text-bg focus:outline-none focus:border-gold transition-colors" required />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-widest text-gold mb-2">Guests</label>
                          <input type="number" className="w-full bg-transparent border-b border-wood py-2 text-bg focus:outline-none focus:border-gold transition-colors" required />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-gold mb-2">Event Date</label>
                        <input type="date" className="w-full bg-transparent border-b border-wood py-2 text-bg focus:outline-none focus:border-gold transition-colors" />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-gold mb-2">Occasion</label>
                        <input type="text" className="w-full bg-transparent border-b border-wood py-2 text-bg focus:outline-none focus:border-gold transition-colors" placeholder="Wedding, Corporate, etc." />
                      </div>
                      <button type="submit" className="w-full mt-6 bg-gold text-text font-bold uppercase tracking-widest py-4 rounded hover:bg-gold-light transition-colors flex justify-center items-center">
                        <Send className="mr-2 h-4 w-4" /> Request Consultation
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </section>

            {/* ========== S5: CONNECT ========== */}
            <section
              id="section-5"
              className="w-full min-h-screen py-28 flex items-center justify-center px-6 lg:px-20 relative"
            >
              <div className={`max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16`}>
                {/* Blog / Story */}
                <div>
                  <h2 className="text-4xl font-serif text-text mb-8 border-b-2 border-gold pb-4 inline-block">Millet Stories</h2>
                  <div className="space-y-4">
                    {BLOG_POSTS.slice(0, 4).map((post, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveBlog(post)}
                        className="group block w-full text-left bg-white/40 hover:bg-white/70 border border-gold/10 hover:border-gold/30 rounded-xl p-5 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <span className="text-[10px] font-bold text-white bg-terra px-2 py-0.5 rounded uppercase tracking-widest">{post.tag}</span>
                            <h3 className="text-lg font-serif text-text group-hover:text-terra transition-colors mt-2 mb-1">{post.title}</h3>
                            <p className="text-wood text-sm leading-relaxed">{post.excerpt}</p>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gold shrink-0 mt-6 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-[#EFEBE0] p-10 lg:p-14 rounded-xl border border-gold/20 relative overflow-hidden">
                  <MandalaIcon className="absolute -bottom-20 -right-20 w-80 h-80 text-gold opacity-10 pointer-events-none" />
                  <h2 className="text-4xl font-serif text-text mb-8 relative z-10">Visit Our Store</h2>
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-start">
                      <MapPin className="text-terra mt-1 mr-4 shrink-0" />
                      <div>
                        <p className="font-bold text-text uppercase tracking-widest text-sm mb-1">Location</p>
                        <p className="text-wood">{[siteData.address.street, siteData.address.area, siteData.address.city, siteData.address.state, siteData.address.pincode].filter(Boolean).join(', ')}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="text-terra mt-1 mr-4 shrink-0" />
                      <div>
                        <p className="font-bold text-text uppercase tracking-widest text-sm mb-1">Reservations & Enquiries</p>
                        <p className="text-wood">{siteData.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="text-terra mt-1 mr-4 shrink-0" />
                      <div>
                        <p className="font-bold text-text uppercase tracking-widest text-sm mb-1">Hours</p>
                        <p className="text-wood">Weekdays: {siteData.hours.weekday}<br/>Weekends: {siteData.hours.weekend}</p>
                      </div>
                    </div>
                    <div className="pt-6 flex flex-wrap gap-4">
                      <a
                        href={`https://wa.me/${siteData.phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-[#25D366] text-white rounded font-bold uppercase tracking-wider text-xs flex items-center hover:bg-[#1DA851] transition-colors"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
                      </a>
                      <a
                        href={`tel:${siteData.phone.replace(/[^0-9+]/g, '')}`}
                        className="px-6 py-3 border-2 border-text text-text rounded font-bold uppercase tracking-wider text-xs flex items-center hover:bg-text hover:text-bg transition-colors"
                      >
                        <Phone className="mr-2 h-4 w-4" /> Call Now
                      </a>
                    </div>
                  </div>

                  {/* FAQ Preview */}
                  <div className="mt-8 pt-6 border-t border-gold/20 relative z-10">
                    <h3 className="font-serif text-lg text-text mb-4">Common Questions</h3>
                    {(faqData.sections[3]?.faqs ?? []).slice(0, 3).map((q, i) => (
                      <details key={i} className="mb-2 group">
                        <summary className="cursor-pointer text-sm font-bold text-wood hover:text-terra transition-colors py-2">
                          {q.question}
                        </summary>
                        <p className="text-sm text-wood pl-4 pb-2">{q.answer}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            </section>

      </main>

      {/* ====== FOOTER ====== */}
      <footer className="w-full py-5 bg-text text-center space-y-2">
        <div className="flex justify-center gap-6 text-xs text-white/30">
          <a href="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-white/60 transition-colors">Terms of Service</a>
        </div>
        <p className="text-xs text-white/40 tracking-widest uppercase">
          Powered by{' '}
          <a
            href="https://vyomaai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold/60 hover:text-gold transition-colors"
          >
            VyomaAI Studios
          </a>
        </p>
      </footer>

      {/* ====== MENU MODAL ====== */}
      {activeModal && (
        <div
          className="fixed inset-0 bg-text/80 backdrop-blur-md flex items-center justify-center z-[100] p-6"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-bg max-w-lg w-full rounded-lg shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-28 bg-text relative flex items-center justify-center overflow-hidden">
              <MandalaIcon className="absolute text-gold opacity-20 w-48 h-48" />
              <StoneMortar className="h-16 w-16 relative z-10" />
              <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-20">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-10 text-center">
              <span className="text-xs uppercase tracking-[0.2em] text-terra font-bold mb-2 block">{activeModal.millet}</span>
              <h3 className="font-serif font-bold text-3xl md:text-4xl text-text mb-2">{activeModal.name}</h3>
              <p className="text-gold italic font-serif text-lg mb-6">{activeModal.subtitle}</p>
              <div className="w-12 h-px bg-gold mx-auto mb-6" />
              <p className="text-wood leading-relaxed mb-8 text-sm">{activeModal.desc}</p>
              {activeModal.price && <div className="text-2xl font-serif font-bold text-terra mb-6">{activeModal.price}</div>}
              <a
                href={`https://wa.me/${siteData.phone.replace(/[^0-9]/g, '')}?text=Hi! I'd like to order ${activeModal.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block border-2 border-text text-text hover:bg-text hover:text-bg font-bold uppercase tracking-widest py-4 transition-colors text-center"
              >
                Order via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ====== BLOG MODAL ====== */}
      {activeBlog && (
        <div
          className="fixed inset-0 bg-text/80 backdrop-blur-md flex items-center justify-center z-[100] p-6"
          onClick={() => setActiveBlog(null)}
        >
          <div
            className="bg-bg max-w-2xl w-full rounded-lg shadow-2xl relative overflow-hidden max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-20 bg-text relative flex items-center justify-center overflow-hidden shrink-0">
              <MandalaIcon className="absolute text-gold opacity-20 w-48 h-48" />
              <div className="flex items-center gap-3 relative z-10">
                <BookOpen className="h-6 w-6 text-gold" />
                <span className="text-[10px] font-bold text-terra bg-gold/20 px-3 py-1 rounded uppercase tracking-widest">{activeBlog.tag}</span>
              </div>
              <button onClick={() => setActiveBlog(null)} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-20">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-8 md:p-10 overflow-y-auto">
              <span className="text-xs text-gold font-bold uppercase tracking-widest">{activeBlog.date}</span>
              <h3 className="font-serif font-bold text-2xl md:text-3xl text-text mt-2 mb-6">{activeBlog.title}</h3>
              <div className="space-y-4">
                {activeBlog.content.map((para, i) => (
                  <p key={i} className="text-wood leading-relaxed text-sm">{para}</p>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gold/20">
                <a
                  href={`https://wa.me/${siteData.phone.replace(/[^0-9]/g, '')}?text=Hi! I just read "${activeBlog.title}" and want to know more!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white rounded font-bold uppercase tracking-wider text-xs hover:bg-[#1DA851] transition-colors"
                >
                  <MessageCircle className="h-4 w-4" /> Chat with Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====== FLOATING WHATSAPP ====== */}
      <a
        href={`https://wa.me/${siteData.phone.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[80] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-900/30 hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </a>
    </div>
  );
}
