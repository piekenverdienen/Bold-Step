import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Calendar, Tag } from 'lucide-react';
import { Language, translations } from '../constants';

interface BlogPostProps {
  lang: Language;
}

export default function BlogPost({ lang }: BlogPostProps) {
  const { id: slug } = useParams();
  const data = translations[lang].blog;
  const post = data.posts.find(p => p.slug === slug);
  const langPrefix = `/${lang.toLowerCase()}`;

  if (!post) {
    return <Navigate to={`${langPrefix}/journal`} />;
  }

  return (
    <main className="pt-32 pb-32 bg-white min-h-screen">
      <article className="max-w-4xl mx-auto px-6">
        <Link 
          to={`${langPrefix}/journal`} 
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold opacity-60 hover:opacity-100 mb-12 transition-opacity"
        >
          <ChevronLeft size={16} /> {lang === 'EN' ? 'Back to Journal' : 'Zurück zum Journal'}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-6 mb-8 text-[10px] uppercase tracking-widest font-bold text-brand-gold">
            <span className="flex items-center gap-2">
              <Tag size={12} /> {post.category}
            </span>
            <span className="flex items-center gap-2 opacity-40">
              <Calendar size={12} /> March 2026
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-serif mb-12 leading-tight">
            {post.title}
          </h1>

          <div className="aspect-video w-full overflow-hidden mb-16">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="text-lg md:text-xl opacity-90 font-light leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </div>
        </motion.div>

        {/* Newsletter / CTA */}
        <div className="mt-32 p-12 bg-brand-offwhite text-center">
          <h3 className="text-2xl font-serif mb-4">Stay Informed</h3>
          <p className="text-sm opacity-60 font-light mb-8">Get the latest insights on modern groom style directly in your inbox.</p>
          <div className="flex max-w-md mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-white border border-brand-black/10 px-6 py-4 text-sm focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button className="px-8 py-4 bg-brand-black text-brand-offwhite text-xs uppercase tracking-widest font-bold hover:bg-brand-gold transition-all">
              Join
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}
