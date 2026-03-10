import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Check } from 'lucide-react';
import { Language, LOAFER_PRODUCTS, IMAGES } from '../constants';
import { getArchetype, ARCHETYPE_SLUGS } from '../content/archetypes';
import ArchetypeTimeline from '../components/ArchetypeTimeline';
import CostCalculator from '../components/CostCalculator';
import VenueCards from '../components/VenueCards';
import PracticalTips from '../components/PracticalTips';
import { Link } from 'react-router-dom';

interface ArchetypePageProps {
  lang: Language;
}

const archetypeImages: Record<string, string> = {
  'schloss-braeutigam': IMAGES.STYLE_BLACK_TIE,
  'auslands-braeutigam': IMAGES.STYLE_DESTINATION,
  'klassischer-braeutigam': IMAGES.STYLE_CITY,
};

export default function ArchetypePage({ lang }: ArchetypePageProps) {
  const { slug } = useParams<{ slug: string }>();
  const langPrefix = `/${lang.toLowerCase()}`;

  const archetype = slug ? getArchetype(slug, lang) : undefined;

  useEffect(() => {
    if (archetype) {
      document.title = archetype.meta.title;
    }
  }, [archetype]);

  if (!slug || !archetype || !ARCHETYPE_SLUGS.includes(slug)) {
    return <Navigate to={`${langPrefix}/archetypes`} replace />;
  }

  const heroImage = archetypeImages[slug] || IMAGES.HERO_BACKGROUND;
  const products = archetype.styleGuide.shoes.products
    .map(key => LOAFER_PRODUCTS[key as keyof typeof LOAFER_PRODUCTS])
    .filter(Boolean);

  return (
    <main className="flex-grow">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={archetype.hero.headline}
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/20 to-brand-offwhite" />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.4em] font-bold text-brand-gold mb-6 block"
          >
            {archetype.hero.badge}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif mb-8 leading-tight"
          >
            {archetype.hero.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl font-light max-w-2xl mx-auto opacity-80"
          >
            {archetype.hero.subline}
          </motion.p>
        </div>
      </section>

      {/* Identity Section */}
      <section className="py-32 px-6 bg-brand-offwhite">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-8">{archetype.identity.title}</h2>
            <p className="text-sm md:text-base opacity-70 font-light leading-relaxed mb-12">
              {archetype.identity.description}
            </p>
            <div className="space-y-4 text-left max-w-lg mx-auto">
              {archetype.identity.traits.map((trait, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-brand-gold" />
                  </div>
                  <p className="text-sm font-light opacity-70">{trait}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Journey */}
      <ArchetypeTimeline lang={lang} timeline={archetype.timeline} />

      {/* Cost Calculator */}
      <CostCalculator
        lang={lang}
        costBreakdown={archetype.costBreakdown}
        defaultGuestCount={archetype.defaultGuestCount}
        totalBudgetRange={archetype.totalBudgetRange}
      />

      {/* Style Guide */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-4 block">
              {lang === 'EN' ? 'Your Look' : 'Ihr Look'}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-6">
              {lang === 'EN' ? 'Style Guide' : 'Stil-Guide'}
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Suit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 border border-brand-black/5"
            >
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mb-4 block">
                {lang === 'EN' ? 'The Suit' : 'Der Anzug'}
              </span>
              <h3 className="text-xl font-serif mb-4">{archetype.styleGuide.suit.recommendation}</h3>
              <p className="text-sm opacity-60 font-light leading-relaxed">
                {archetype.styleGuide.suit.details}
              </p>
            </motion.div>

            {/* Shoes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 border border-brand-gold/30 bg-brand-champagne/5"
            >
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mb-4 block">
                {lang === 'EN' ? 'The Shoes' : 'Die Schuhe'}
              </span>
              <h3 className="text-xl font-serif mb-4">{archetype.styleGuide.shoes.recommendation}</h3>
              <p className="text-sm opacity-60 font-light leading-relaxed mb-6">
                {archetype.styleGuide.shoes.details}
              </p>
              {/* Product thumbnails */}
              <div className="flex gap-3">
                {products.map((product, i) => (
                  <a
                    key={i}
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-transparent group-hover:border-brand-gold transition-colors">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[8px] text-center mt-1 opacity-40 group-hover:opacity-100 transition-opacity">
                      {product.name.split(' ')[0]}
                    </p>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Accessories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 border border-brand-black/5"
            >
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mb-4 block">
                {lang === 'EN' ? 'Accessories' : 'Accessoires'}
              </span>
              <h3 className="text-xl font-serif mb-4">{archetype.styleGuide.accessories.recommendation}</h3>
              <p className="text-sm opacity-60 font-light leading-relaxed">
                {archetype.styleGuide.accessories.details}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Venue Recommendations */}
      <VenueCards lang={lang} venues={archetype.venues} />

      {/* Practical Tips */}
      <PracticalTips lang={lang} tips={archetype.practicalTips} />

      {/* CTA Section */}
      <section className="py-32 px-6 bg-brand-black text-brand-offwhite">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-6">{archetype.cta.headline}</h2>
            <p className="text-sm md:text-base font-light opacity-60 max-w-lg mx-auto mb-12">
              {archetype.cta.subline}
            </p>
            <Link
              to={`${langPrefix}${archetype.cta.buttonLink}`}
              className="group inline-flex items-center gap-4 px-10 py-5 bg-brand-gold text-brand-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-brand-offwhite transition-all"
            >
              {archetype.cta.buttonText}
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Back to Archetypes */}
      <section className="py-12 px-6 bg-brand-offwhite border-t border-brand-black/5">
        <div className="max-w-7xl mx-auto text-center">
          <Link
            to={`${langPrefix}/archetypes`}
            className="text-xs uppercase tracking-widest font-bold opacity-40 hover:opacity-100 hover:text-brand-gold transition-all"
          >
            ← {lang === 'EN' ? 'Back to All Archetypes' : 'Zurück zu allen Archetypen'}
          </Link>
        </div>
      </section>
    </main>
  );
}
