import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../constants';
import { ArchetypeTimeline as TimelineItem } from '../content/archetypes/types';

interface ArchetypeTimelineProps {
  lang: Language;
  timeline: TimelineItem[];
}

export default function ArchetypeTimeline({ lang, timeline }: ArchetypeTimelineProps) {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-4 block">
            {lang === 'EN' ? 'The Full Journey' : 'Die komplette Reise'}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            {lang === 'EN' ? 'From Proposal to Big Day' : 'Vom Antrag zum Großen Tag'}
          </h2>
          <div className="w-24 h-px bg-brand-gold mx-auto"></div>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-brand-gold/20 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-px bg-brand-gold/20 md:hidden" />

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: 0.1 }}
                className={`relative mb-20 last:mb-0 md:grid md:grid-cols-2 md:gap-16 ${
                  isLeft ? '' : 'md:direction-rtl'
                }`}
              >
                {/* Phase number dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-brand-black text-brand-offwhite flex items-center justify-center text-xs font-bold z-10">
                  0{i + 1}
                </div>

                {/* Content */}
                <div
                  className={`pl-20 md:pl-0 ${
                    isLeft
                      ? 'md:pr-16 md:text-right'
                      : 'md:col-start-2 md:pl-16 md:text-left'
                  }`}
                  style={{ direction: 'ltr' }}
                >
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mb-2 block">
                    {item.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif mb-4">{item.title}</h3>
                  <p className="text-sm opacity-70 font-light leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Tips */}
                  <div className={`mb-6 ${isLeft ? 'md:ml-auto' : ''}`}>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold mb-3">
                      {lang === 'EN' ? 'Key Tips' : 'Wichtige Tipps'}
                    </h4>
                    <ul className={`space-y-2 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                      {item.tips.map((tip, j) => (
                        <li key={j} className="text-xs opacity-60 font-light leading-relaxed flex gap-2">
                          <span className="text-brand-gold flex-shrink-0">—</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Shoe Recommendation */}
                  {item.shoeRecommendation && (
                    <div
                      className={`inline-block p-6 border border-brand-gold/20 bg-brand-champagne/10 ${
                        isLeft ? 'md:ml-auto' : ''
                      }`}
                    >
                      <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mb-2">
                        {lang === 'EN' ? 'Shoe Recommendation' : 'Schuh-Empfehlung'}
                      </p>
                      <p className="text-sm font-medium mb-1">{item.shoeRecommendation.product}</p>
                      <p className="text-xs opacity-60 font-light mb-3">{item.shoeRecommendation.reason}</p>
                      <a
                        href={item.shoeRecommendation.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] uppercase tracking-widest font-bold text-brand-gold hover:underline"
                      >
                        {lang === 'EN' ? 'View Product' : 'Produkt ansehen'}
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
