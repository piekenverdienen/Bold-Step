import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { Language } from '../constants';
import { VenueRecommendation } from '../content/archetypes/types';

interface VenueCardsProps {
  lang: Language;
  venues: VenueRecommendation[];
}

export default function VenueCards({ lang, venues }: VenueCardsProps) {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-4 block">
            {lang === 'EN' ? 'Where to Celebrate' : 'Wo feiern'}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            {lang === 'EN' ? 'Venue Recommendations' : 'Location-Empfehlungen'}
          </h2>
          <div className="w-24 h-px bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {venues.map((venue, i) => (
            <motion.div
              key={venue.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-brand-black/5 hover:border-brand-gold/30 transition-colors"
            >
              <h3 className="text-xl font-serif mb-2">{venue.name}</h3>
              <div className="flex items-center gap-1 mb-4">
                <MapPin size={12} className="text-brand-gold" />
                <span className="text-xs opacity-50">{venue.location}</span>
              </div>
              <p className="text-sm opacity-70 font-light leading-relaxed mb-4">
                {venue.description}
              </p>
              <div className="pt-4 border-t border-brand-black/5">
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold">
                  {lang === 'EN' ? 'Price Range' : 'Preisrahmen'}
                </span>
                <p className="text-sm font-medium mt-1">{venue.priceRange}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
