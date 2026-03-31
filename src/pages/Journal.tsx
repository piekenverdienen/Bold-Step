import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Language, translations } from '../constants';
import { Link } from 'react-router-dom';

interface JournalProps {
  lang: Language;
}

export default function Journal({ lang }: JournalProps) {
  const data = translations[lang].blog;
  const langPrefix = `/${lang.toLowerCase()}`;

  return (
    <main className="pt-32 pb-32 px-6 bg-brand-offwhite min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-4 block">
            {lang === 'EN' ? 'Insights & Inspiration' : lang === 'DE' ? 'Einblicke & Inspiration' : 'Inzichten & Inspiratie'}
          </span>
          <h2 className="text-5xl md:text-7xl font-serif mb-6">{data.title}</h2>
          <div className="w-24 h-px bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {data.posts.map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white group"
            >
              <Link to={`${langPrefix}/journal/${post.slug}`} className="block">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-10">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mb-4 block">
                    {post.category}
                  </span>
                  <h3 className="text-2xl font-serif mb-4 group-hover:text-brand-gold transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm opacity-60 font-light leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold">
                    {data.cta} <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
