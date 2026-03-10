import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Language, IMAGES } from '../constants';
import { getAllArchetypes } from '../content/archetypes';

interface ArchetypeHubProps {
  lang: Language;
}

const archetypeImages = [
  IMAGES.STYLE_BLACK_TIE,
  IMAGES.STYLE_DESTINATION,
  IMAGES.STYLE_CITY,
];

export default function ArchetypeHub({ lang }: ArchetypeHubProps) {
  const archetypes = getAllArchetypes(lang);
  const langPrefix = `/${lang.toLowerCase()}`;

  return (
    <main className="flex-grow">
      {/* Hero */}
      <section className="relative py-40 px-6 bg-brand-black text-brand-offwhite overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="text-[15vw] font-serif whitespace-nowrap animate-marquee-slow">
            {lang === 'EN'
              ? 'CASTLE DESTINATION CLASSIC CASTLE DESTINATION CLASSIC'
              : 'SCHLOSS AUSLAND KLASSISCH SCHLOSS AUSLAND KLASSISCH'}
          </div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.4em] font-bold text-brand-gold mb-6 block"
          >
            {lang === 'EN' ? 'Discover Your Type' : 'Entdecken Sie Ihren Typ'}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif mb-8"
          >
            {lang === 'EN' ? 'Which Groom Are You?' : 'Welcher Bräutigam sind Sie?'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg font-light max-w-2xl mx-auto opacity-60"
          >
            {lang === 'EN'
              ? 'Every groom is different. Your wedding style, your budget, your vision — it all shapes your journey. Find your archetype and get a complete guide from proposal to the big day.'
              : 'Jeder Bräutigam ist anders. Ihr Hochzeitsstil, Ihr Budget, Ihre Vision — all das formt Ihre Reise. Finden Sie Ihren Archetyp und erhalten Sie einen kompletten Leitfaden vom Antrag bis zum großen Tag.'}
          </motion.p>
        </div>
      </section>

      {/* Archetype Cards */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {archetypes.map((archetype, i) => (
              <motion.div
                key={archetype.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Link
                  to={`${langPrefix}/archetypes/${archetype.slug}`}
                  className="group block"
                >
                  {/* Image */}
                  <div className="aspect-[3/4] overflow-hidden mb-8">
                    <img
                      src={archetypeImages[i]}
                      alt={archetype.hero.headline}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Content */}
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mb-2 block">
                    {archetype.hero.badge}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-serif mb-3 group-hover:text-brand-gold transition-colors">
                    {archetype.hero.headline}
                  </h2>
                  <p className="text-sm opacity-60 font-light leading-relaxed mb-4">
                    {archetype.hero.subline}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-6 mb-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-1">Budget</p>
                      <p className="text-xs font-medium">
                        €{(archetype.totalBudgetRange.low / 1000).toFixed(0)}k – €{(archetype.totalBudgetRange.high / 1000).toFixed(0)}k
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-1">
                        {lang === 'EN' ? 'Guests' : 'Gäste'}
                      </p>
                      <p className="text-xs font-medium">~{archetype.defaultGuestCount}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold group-hover:text-brand-gold transition-colors">
                    {lang === 'EN' ? 'Explore Guide' : 'Guide entdecken'}
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-brand-offwhite border-t border-brand-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm opacity-60 font-light mb-6">
            {lang === 'EN'
              ? 'Not sure which archetype fits? Each guide includes a complete timeline, cost calculator, style advice, and venue recommendations.'
              : 'Nicht sicher, welcher Archetyp passt? Jeder Guide beinhaltet eine komplette Timeline, Kostenrechner, Stil-Beratung und Location-Empfehlungen.'}
          </p>
          <Link
            to={`${langPrefix}/collection`}
            className="inline-block px-10 py-5 bg-brand-black text-brand-offwhite text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-brand-gold transition-all"
          >
            {lang === 'EN' ? 'Browse the Collection' : 'Kollektion durchstöbern'}
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          display: inline-block;
          animation: marquee-slow 60s linear infinite;
        }
      `}</style>
    </main>
  );
}
