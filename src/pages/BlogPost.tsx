import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Calendar, Tag, ArrowRight } from 'lucide-react';
import { Language, translations } from '../constants';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
          <ChevronLeft size={16} /> {lang === 'EN' ? 'Back to Journal' : lang === 'DE' ? 'Zurück zum Journal' : 'Terug naar Journaal'}
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

          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-12 leading-tight">
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

          <div className="markdown-body">
            {(() => {
              const paragraphs = post.content.split('\n\n');
              const middleIndex = Math.floor(paragraphs.length / 2);
              const firstHalf = paragraphs.slice(0, middleIndex).join('\n\n');
              const secondHalf = paragraphs.slice(middleIndex).join('\n\n');

              const CTAButton = () => (
                <div className="my-16 py-12 border-y border-brand-black/5 flex flex-col items-center text-center">
                  <h4 className="text-xl font-serif mb-6">
                    {lang === 'EN' ? 'Ready to find your perfect pair?' : lang === 'DE' ? 'Bereit für Ihr perfektes Paar?' : 'Klaar om je perfecte paar te vinden?'}
                  </h4>
                  <Link 
                    to={`${langPrefix}/collection`}
                    className="px-8 py-4 bg-brand-black text-brand-offwhite text-xs uppercase tracking-widest font-bold hover:bg-brand-gold transition-all"
                  >
                    {lang === 'EN' ? 'Explore the Collection' : lang === 'DE' ? 'Kollektion entdecken' : 'Ontdek de Collectie'}
                  </Link>
                </div>
              );

              const MarkdownComponents = {
                p: ({ children }: { children: React.ReactNode }) => <p className="text-lg md:text-xl opacity-90 font-light leading-relaxed mb-8">{children}</p>,
                a: ({ href, children }: { href?: string; children: React.ReactNode }) => {
                  const isInternal = href?.startsWith('/');
                  if (isInternal) {
                    return (
                      <Link 
                        to={href} 
                        className="text-brand-gold underline decoration-brand-gold/30 underline-offset-4 hover:decoration-brand-gold transition-all font-medium"
                      >
                        {children}
                      </Link>
                    );
                  }
                  return (
                    <a 
                      href={href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-brand-gold underline decoration-brand-gold/30 underline-offset-4 hover:decoration-brand-gold transition-all font-medium"
                    >
                      {children}
                    </a>
                  );
                },
                h1: ({ children }: { children: React.ReactNode }) => <h1 className="text-3xl md:text-5xl font-serif font-black mb-10 mt-20 leading-tight text-brand-black">{children}</h1>,
                h2: ({ children }: { children: React.ReactNode }) => <h2 className="text-2xl md:text-4xl font-serif font-bold mb-8 mt-16 leading-tight text-brand-black">{children}</h2>,
                h3: ({ children }: { children: React.ReactNode }) => <h3 className="text-xl md:text-2xl font-serif font-bold mb-6 mt-12 leading-tight text-brand-black">{children}</h3>,
                h4: ({ children }: { children: React.ReactNode }) => <h4 className="text-lg md:text-xl font-serif font-bold mb-4 mt-10 leading-tight text-brand-black">{children}</h4>,
                ul: ({ children }: { children: React.ReactNode }) => <ul className="list-disc list-outside ml-6 mb-8 flex flex-col gap-2">{children}</ul>,
                ol: ({ children }: { children: React.ReactNode }) => <ol className="list-decimal list-outside ml-6 mb-8 flex flex-col gap-2">{children}</ol>,
                li: ({ children }: { children: React.ReactNode }) => <li className="text-lg opacity-90 font-light leading-relaxed">{children}</li>,
                table: ({ children }: { children: React.ReactNode }) => (
                  <div className="overflow-x-auto my-12">
                    <table className="w-full border-collapse text-left">{children}</table>
                  </div>
                ),
                thead: ({ children }: { children: React.ReactNode }) => <thead className="bg-brand-offwhite">{children}</thead>,
                th: ({ children }: { children: React.ReactNode }) => <th className="p-4 text-xs uppercase tracking-widest font-bold border-b border-brand-black/10">{children}</th>,
                td: ({ children }: { children: React.ReactNode }) => <td className="p-4 text-sm border-b border-brand-black/5 opacity-80">{children}</td>,
              };

              return (
                <>
                  <Markdown components={MarkdownComponents} remarkPlugins={[remarkGfm]}>
                    {firstHalf}
                  </Markdown>
                  
                  <CTAButton />

                  <Markdown components={MarkdownComponents} remarkPlugins={[remarkGfm]}>
                    {secondHalf}
                  </Markdown>
                </>
              );
            })()}
          </div>
        </motion.div>

        {/* Read More Section */}
        {(() => {
          const otherPosts = data.posts
            .filter(p => p.slug !== post.slug)
            .slice(0, 3);

          if (otherPosts.length === 0) return null;

          return (
            <motion.section
              className="mt-32 border-t border-brand-black/10 pt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12">
                {lang === 'EN' ? 'Continue Reading' : lang === 'DE' ? 'Weiterlesen' : 'Verder Lezen'}
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {otherPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    to={`${langPrefix}/journal/${relatedPost.slug}`}
                    className="group block"
                  >
                    <div className="aspect-[4/3] overflow-hidden mb-5">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mb-2 block">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-serif font-bold mb-2 leading-snug group-hover:text-brand-gold transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm opacity-60 font-light leading-relaxed mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold opacity-40 group-hover:opacity-100 group-hover:text-brand-gold transition-all">
                      {data.cta} <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </motion.section>
          );
        })()}

        {/* Newsletter / CTA */}
        <div className="mt-32 p-12 bg-brand-offwhite text-center">
          <h3 className="text-2xl font-serif mb-4">
            {lang === 'EN' ? 'Stay Informed' : lang === 'DE' ? 'Bleiben Sie Informiert' : 'Blijf op de Hoogte'}
          </h3>
          <p className="text-sm opacity-60 font-light mb-8">
            {lang === 'EN' ? 'Get the latest insights on modern groom style directly in your inbox.' : lang === 'DE' ? 'Erhalten Sie die neuesten Einblicke in modernen Bräutigam-Stil direkt in Ihrem Postfach.' : 'Ontvang de nieuwste inzichten over moderne bruidegomstijl direct in je inbox.'}
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder={lang === 'EN' ? 'Your email address' : lang === 'DE' ? 'Ihre E-Mail-Adresse' : 'Je e-mailadres'}
              className="flex-grow bg-white border border-brand-black/10 px-6 py-4 text-sm focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button className="px-8 py-4 bg-brand-black text-brand-offwhite text-xs uppercase tracking-widest font-bold hover:bg-brand-gold transition-all">
              {lang === 'EN' ? 'Join' : lang === 'DE' ? 'Anmelden' : 'Aanmelden'}
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}
