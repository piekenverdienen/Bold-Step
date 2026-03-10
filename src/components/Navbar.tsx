import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Language, translations } from '../constants';
import Quiz from './Quiz';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
}

export default function Navbar({ lang, onToggleLang }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const location = useLocation();
  const t = translations[lang];

  const langPrefix = `/${lang.toLowerCase()}`;

  const navLinks = [
    { name: lang === 'EN' ? 'The Journey' : 'Die Reise', href: `${langPrefix}/#narrative` },
    { name: lang === 'EN' ? 'The Proposal' : 'Der Antrag', href: `${langPrefix}/#proposal` },
    { name: lang === 'EN' ? 'The Planning' : 'Die Planung', href: `${langPrefix}/#planning` },
    { name: lang === 'EN' ? 'The Style' : 'Der Stil', href: `${langPrefix}/#style` },
    { name: lang === 'EN' ? 'The Matcher' : 'Der Matcher', href: `${langPrefix}/matcher` },
    { name: lang === 'EN' ? 'The Collection' : 'Die Kollektion', href: `${langPrefix}/collection` },
    { name: lang === 'EN' ? 'The Journal' : 'Das Journal', href: `${langPrefix}/journal` },
  ];

  const handleScroll = (href: string) => {
    setIsMenuOpen(false);
    if (href.includes('#')) {
      const id = href.split('#')[1];
      if (location.pathname === langPrefix || location.pathname === `${langPrefix}/`) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <AnimatePresence>
        {isQuizOpen && (
          <Quiz lang={lang} onClose={() => setIsQuizOpen(false)} />
        )}
      </AnimatePresence>

      <nav className="fixed w-full z-50 bg-brand-offwhite/80 backdrop-blur-md border-b border-brand-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to={langPrefix} className="text-2xl font-serif tracking-widest uppercase">The Groom Code</Link>
            <div className="hidden md:flex gap-4 text-xs uppercase tracking-widest font-medium opacity-60">
              {navLinks.map((link) => (
                link.href.includes('#') ? (
                  <Link 
                    key={link.href} 
                    to={link.href}
                    onClick={() => handleScroll(link.href)}
                    className="hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link 
                    key={link.href} 
                    to={link.href}
                    className="hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={onToggleLang}
              className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest hover:text-brand-gold transition-colors"
            >
              <Globe size={14} />
              {lang}
            </button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
              <Menu size={24} />
            </button>
            <button 
              onClick={() => setIsQuizOpen(true)}
              className="hidden md:block px-6 py-2 bg-brand-gold text-brand-black text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-brand-black hover:text-brand-offwhite transition-all"
            >
              {t.hero.cta}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-brand-offwhite flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-8 mt-12 text-3xl font-serif">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  to={link.href}
                  onClick={() => handleScroll(link.href)}
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={() => { onToggleLang(); setIsMenuOpen(false); }}
                className="text-xl font-sans uppercase tracking-widest flex items-center gap-2"
              >
                <Globe size={20} /> {lang === 'EN' ? 'Switch to German' : 'Auf Englisch umstellen'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
