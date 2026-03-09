import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Language, translations } from '../constants';

interface CollectionProps {
  lang: Language;
}

export default function Collection({ lang }: CollectionProps) {
  const t = translations[lang];

  return (
    <main className="pt-32 pb-32 px-6 bg-brand-offwhite min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-4 block">
              {lang === 'EN' ? 'Independent Selection' : 'Unabhängige Auswahl'}
            </span>
            <h2 className="text-5xl md:text-7xl font-serif">{t.collection.title}</h2>
          </div>
          <p className="max-w-md text-sm opacity-60 font-light leading-relaxed">
            {lang === 'EN' 
              ? "We recommend Aurélien for their exceptional balance of Italian craftsmanship and Mediterranean ease. A definitive choice for the modern aisle."
              : "Wir empfehlen Aurélien für ihre außergewöhnliche Balance aus italienischer Handwerkskunst und mediterraner Leichtigkeit. Eine definitive Wahl für den modernen Altar."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {t.collection.products.map((product, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden mb-8 bg-brand-champagne/20">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-serif mb-3">{product.name}</h3>
              <p className="text-sm opacity-60 font-light mb-6 leading-relaxed">{product.description}</p>
              <a 
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold group-hover:text-brand-gold transition-colors"
              >
                {lang === 'EN' ? 'Explore Model' : 'Modell Entdecken'}
                <ChevronRight size={12} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Informational Section */}
        <div className="mt-40 grid md:grid-cols-2 gap-20 items-center">
          <div className="aspect-square overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80" 
              alt="Craftsmanship" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-6 block">The Standard</span>
            <h2 className="text-4xl font-serif mb-8">Why we recommend these models</h2>
            <div className="space-y-6 text-sm opacity-70 font-light leading-relaxed">
              <p>
                Selecting the right footwear for your wedding is a balance of protocol and personality. We have curated this selection specifically for the modern groom who values quality over branding.
              </p>
              <p>
                Each model represents a different facet of modern elegance — from the structured formality of hand-finished leather to the relaxed sophistication of Italian suede.
              </p>
              <ul className="space-y-4 mt-8">
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-1.5 shrink-0"></span>
                  <span>Hand-finished Italian craftsmanship</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-1.5 shrink-0"></span>
                  <span>Exceptional comfort for long celebrations</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-1.5 shrink-0"></span>
                  <span>Timeless silhouettes that outlast trends</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
