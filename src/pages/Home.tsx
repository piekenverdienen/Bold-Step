import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Language, translations, IMAGES } from '../constants';
import EditorialSections from '../components/EditorialSections';
import AIAssistant from '../components/AIAssistant';
import StyleGuide from '../components/StyleGuide';
import Blog from '../components/Blog';
import { Link, useLocation } from 'react-router-dom';

interface HomeProps {
  lang: Language;
  onOpenQuiz: () => void;
}

export default function Home({ lang, onOpenQuiz }: HomeProps) {
  const t = translations[lang];
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.HERO_BACKGROUND} 
            alt="Luxury Wedding Setting"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-offwhite/20 via-transparent to-brand-offwhite"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.4em] font-bold text-brand-gold mb-6 block"
          >
            {lang === 'EN' ? 'The Groom\'s Compendium' : lang === 'DE' ? 'Das Kompendium des Bräutigams' : 'Het Compendium van de Bruidegom'}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-9xl font-serif mb-8 leading-tight"
          >
            {t.hero.headline}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 opacity-80"
          >
            {t.hero.subline}
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            onClick={onOpenQuiz}
            className="group flex items-center gap-4 mx-auto px-10 py-5 bg-brand-black text-brand-offwhite text-xs uppercase tracking-[0.3em] font-bold hover:bg-brand-gold transition-all"
          >
            {t.hero.cta}
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </section>

      {/* Brand Narrative */}
      <section id="narrative" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif mb-6">{t.narrative.title}</h2>
            <div className="w-24 h-px bg-brand-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16">
            {t.narrative.steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center"
              >
                <span className="text-5xl font-serif text-brand-gold/20 mb-6 block">0{i+1}</span>
                <h3 className="text-2xl font-serif mb-4">{step.title}</h3>
                <p className="text-sm leading-relaxed opacity-70 font-light">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Sections */}
      <EditorialSections lang={lang} />

      {/* AI Style Assistant */}
      <AIAssistant lang={lang} />

      {/* Suit Matcher Promotion */}
      <section className="py-32 px-6 bg-brand-cream/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6 block">
              {lang === 'EN' ? 'Style Toolkit' : lang === 'DE' ? 'Stil-Toolkit' : 'Stijl Toolkit'}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              {lang === 'EN' ? 'The Suit Matcher' : lang === 'DE' ? 'Der Anzug-Matcher' : 'De Pak Matcher'}
            </h2>
            <p className="text-sm md:text-base opacity-60 font-light leading-relaxed mb-12 max-w-md">
              {lang === 'EN'
                ? "Not sure which loafer colour complements your suit? Our interactive matcher provides the definitive answer based on tailoring rules."
                : lang === 'DE'
                ? "Sie sind sich nicht sicher, welche Loafer-Farbe zu Ihrem Anzug passt? Unser interaktiver Matcher liefert die definitive Antwort basierend auf klassischen Stilregeln."
                : "Niet zeker welke loaferkleur bij je pak past? Onze interactieve matcher geeft het definitieve antwoord op basis van stijlregels."}
            </p>
            <Link 
              to={`/${lang.toLowerCase()}/matcher`}
              className="inline-block px-10 py-5 bg-brand-black text-brand-offwhite text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-brand-gold transition-all"
            >
              {lang === 'EN' ? 'Launch Matcher' : lang === 'DE' ? 'Matcher Starten' : 'Start Matcher'}
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-brand-black/5 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={IMAGES.ALT_12} 
                alt="Suit and Loafer Coordination" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-xl shadow-xl max-w-xs hidden md:block">
              <p className="text-xs font-serif italic opacity-60">
                {lang === 'EN'
                  ? "A gentleman's shoes should always speak the same language as his suit."
                  : lang === 'DE'
                  ? "Die Schuhe eines Gentlemans sollten immer dieselbe Sprache sprechen wie sein Anzug."
                  : "De schoenen van een gentleman moeten altijd dezelfde taal spreken als zijn pak."}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Style Guide */}
      <section id="style">
        <StyleGuide lang={lang} />
      </section>

      {/* Blog Section */}
      <Blog lang={lang} />

      {/* Social Proof */}
      <section className="py-32 px-6 bg-brand-black text-brand-offwhite overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="text-[20vw] font-serif whitespace-nowrap animate-marquee">
            ELEGANCE ELEGANCE ELEGANCE ELEGANCE
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-12 flex justify-center gap-1 text-brand-gold">
            {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
          </div>
          <blockquote className="text-3xl md:text-5xl font-serif italic mb-12 leading-tight">
            "{t.social.quote}"
          </blockquote>
          <cite className="text-xs uppercase tracking-[0.3em] font-bold not-italic opacity-60">
            — {t.social.author}
          </cite>
        </div>
      </section>

      {/* Brand Anchor */}
      <section className="py-20 px-6 bg-brand-offwhite border-t border-brand-black/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-serif italic opacity-80">
            {lang === 'EN'
              ? "Handcrafted in Italy. Designed for the Aisle."
              : lang === 'DE'
              ? "Handgefertigt in Italien. Entworfen für den Altar."
              : "Handgemaakt in Italië. Ontworpen voor het Altaar."}
          </p>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </main>
  );
}
