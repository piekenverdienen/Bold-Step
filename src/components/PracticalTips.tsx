import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Language } from '../constants';

interface PracticalTipsProps {
  lang: Language;
  tips: { title: string; content: string }[];
}

export default function PracticalTips({ lang, tips }: PracticalTipsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 bg-brand-offwhite">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-4 block">
            {lang === 'EN' ? 'Expert Advice' : 'Experten-Tipps'}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            {lang === 'EN' ? 'Practical Tips' : 'Praktische Tipps'}
          </h2>
          <div className="w-24 h-px bg-brand-gold mx-auto"></div>
        </div>

        <div className="space-y-3">
          {tips.map((tip, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-brand-black/5 bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-brand-champagne/5 transition-colors"
                >
                  <h3 className="text-sm font-medium pr-4">{tip.title}</h3>
                  <ChevronDown
                    size={16}
                    className={`text-brand-gold flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-sm opacity-60 font-light leading-relaxed">
                          {tip.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
