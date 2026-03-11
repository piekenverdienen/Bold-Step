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
    <main className="pt-32 pb-32 bg-brand-offwhite min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs uppercase tracking-[0.4em] font-bold text-brand-gold mb-6 block"
            >
              {lang === 'EN' ? 'Independent Selection' : 'Unabhängige Auswahl'}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-serif leading-tight mb-8"
            >
              {t.collection.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl opacity-60 font-light leading-relaxed italic font-serif"
            >
              {lang === 'EN' 
                ? "A definitive curation of Mediterranean craftsmanship, selected for the modern aisle."
                : "Eine definitive Auswahl mediterraner Handwerkskunst, kuratiert für den modernen Altar."}
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:block w-px h-32 bg-brand-black/10 mx-12"
          />
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-xs text-sm opacity-50 font-light leading-relaxed"
          >
            {lang === 'EN' 
              ? "We recommend Aurélien for their exceptional balance of Italian quality and effortless ease. Each model represents a specific style code."
              : "Wir empfehlen Aurélien für ihre außergewöhnliche Balance aus italienischer Qualität und müheloser Leichtigkeit. Jedes Modell repräsentiert einen spezifischen Stil-Kodex."}
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
          {t.collection.products.map((product, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.8 }}
              className="group"
            >
              <a 
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-[3/4] overflow-hidden mb-8 bg-brand-champagne/10 relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/5 transition-colors duration-500" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-brand-black/40 to-transparent">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-offwhite">
                      {lang === 'EN' ? 'View Details' : 'Details Anzeigen'}
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif group-hover:text-brand-gold transition-colors duration-300">
                    {product.name}
                  </h3>
                  <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0 text-brand-gold" />
                </div>
                
                <p className="text-sm opacity-60 font-light mb-6 leading-relaxed max-w-sm">
                  {product.description}
                </p>
                
                <div className="w-8 h-px bg-brand-black/20 group-hover:w-full transition-all duration-700" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Informational Section - Redesigned */}
        <div className="mt-64 border-t border-brand-black/5 pt-32">
          <div className="grid lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-xs uppercase tracking-[0.4em] font-bold text-brand-gold mb-8 block"
              >
                The Standard
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl font-serif mb-12 leading-tight"
              >
                Why we recommend these models
              </motion.h2>
              
              <div className="space-y-12">
                {[
                  {
                    title: lang === 'EN' ? "Craftsmanship" : "Handwerkskunst",
                    desc: lang === 'EN' 
                      ? "Hand-finished in Italy using the finest Mediterranean suedes and leathers." 
                      : "Handgefertigt in Italien aus feinstem mediterranem Wildleder und Glattleder."
                  },
                  {
                    title: lang === 'EN' ? "Comfort" : "Komfort",
                    desc: lang === 'EN' 
                      ? "Designed for the marathon of a wedding day—from ceremony to the final dance." 
                      : "Entwickelt für den Marathon eines Hochzeitstages – von der Zeremonie bis zum letzten Tanz."
                  },
                  {
                    title: lang === 'EN' ? "Versatility" : "Vielseitigkeit",
                    desc: lang === 'EN' 
                      ? "Silhouettes that transition effortlessly from formal tailoring to relaxed honeymoon style." 
                      : "Silhouetten, die mühelos von formeller Maßkonfektion zu entspanntem Flitterwochen-Stil übergehen."
                  }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-8"
                  >
                    <span className="text-brand-gold font-serif italic text-2xl">0{idx + 1}</span>
                    <div>
                      <h4 className="text-lg font-serif mb-2">{item.title}</h4>
                      <p className="text-sm opacity-60 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="aspect-[4/5] overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80" 
                  alt="Craftsmanship Detail" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
                />
              </motion.div>
              
              {/* Floating Element */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-12 -left-12 bg-brand-black p-12 text-brand-offwhite hidden xl:block max-w-xs"
              >
                <p className="text-sm font-light italic leading-relaxed opacity-80">
                  "Modern elegance isn't about following every rule; it's about knowing which ones to rewrite with confidence."
                </p>
                <div className="mt-6 w-12 h-px bg-brand-gold" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
