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
    { name: lang === 'EN' ? 'The Lookbook' : 'Das Lookbook', href: `${langPrefix}/lookbook` },
    { name: lang === 'EN' ? 'The Matcher' : 'Der Matcher', href: `${langPrefix}/matcher` },
    { name: lang === 'EN' ? 'The Collection' : 'Die Kollektion', href: `${langPrefix}/collection` },
    { name: lang === 'EN' ? 'The Journal' : 'Das Journal', href: `${langPrefix}/journal` },
    { name: lang === 'EN' ? 'About' : 'Über uns', href: `${langPrefix}/about` },
  ];

  const featuredLinks = [
    { name: lang === 'EN' ? 'Lookbook' : 'Lookbook', href: `${langPrefix}/lookbook` },
    { name: lang === 'EN' ? 'Matcher' : 'Matcher', href: `${langPrefix}/matcher` },
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
          <Link to={langPrefix} className="text-xl md:text-2xl font-serif tracking-widest uppercase">The Groom Code</Link>
          
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden lg:flex gap-8 text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">
              {featuredLinks.map((link) => (
                <Link 
                  key={link.href} 
                  to={link.href}
                  className="hover:opacity-100 transition-opacity hover:text-brand-gold"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="h-4 w-px bg-brand-black/10 hidden lg:block" />

            <button 
              onClick={onToggleLang}
              className="hidden sm:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-brand-gold transition-colors opacity-60"
            >
              <Globe size={12} />
              {lang}
            </button>

            <button 
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-3 group"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold hidden sm:block group-hover:text-brand-gold transition-colors">Menu</span>
              <div className="flex flex-col gap-1.5">
                <div className="w-6 h-px bg-brand-black group-hover:bg-brand-gold transition-colors" />
                <div className="w-4 h-px bg-brand-black group-hover:bg-brand-gold transition-colors ml-auto" />
              </div>
            </button>

            <button 
              onClick={() => setIsQuizOpen(true)}
              className="hidden md:block px-6 py-2.5 bg-brand-black text-brand-offwhite text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-brand-gold transition-all rounded-full"
            >
              {t.hero.cta}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-brand-black text-brand-offwhite flex flex-col"
          >
            <div className="max-w-7xl mx-auto w-full px-6 h-20 flex items-center justify-between">
              <span className="text-xl md:text-2xl font-serif tracking-widest uppercase opacity-40">The Groom Code</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 group"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Close</span>
                <X size={24} className="group-hover:rotate-90 transition-transform" />
              </button>
            </div>

            <div className="flex-grow flex flex-col items-center justify-center px-6 overflow-y-auto py-12">
              <div className="max-w-4xl w-full grid lg:grid-cols-[1fr,auto,1fr] gap-12 md:gap-24 items-center">
                
                {/* Primary Links - Central and Bold */}
                <div className="flex flex-col gap-6 md:gap-10 text-center lg:text-right order-2 lg:order-1">
                  <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gold mb-2 block">Featured</span>
                  {[
                    { name: lang === 'EN' ? 'The Lookbook' : 'Das Lookbook', href: `${langPrefix}/lookbook` },
                    { name: lang === 'EN' ? 'The Matcher' : 'Der Matcher', href: `${langPrefix}/matcher` },
                    { name: lang === 'EN' ? 'The Collection' : 'Die Kollektion', href: `${langPrefix}/collection` },
                  ].map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link 
                        to={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-4xl md:text-7xl font-serif hover:text-brand-gold transition-colors block leading-tight"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="hidden lg:block w-px h-64 bg-white/10 order-2" />

                {/* Secondary Links - Smaller and Subtle */}
                <div className="flex flex-col gap-8 text-center lg:text-left order-3">
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-6">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gold mb-4 block">The Journey</span>
                      <div className="flex flex-col gap-3">
                        {[
                          { name: lang === 'EN' ? 'Introduction' : 'Einführung', href: `${langPrefix}/#narrative` },
                          { name: lang === 'EN' ? 'The Proposal' : 'Der Antrag', href: `${langPrefix}/#proposal` },
                          { name: lang === 'EN' ? 'The Planning' : 'Die Planung', href: `${langPrefix}/#planning` },
                          { name: lang === 'EN' ? 'The Style' : 'Der Stil', href: `${langPrefix}/#style` },
                        ].map((link) => (
                          <Link 
                            key={link.href}
                            to={link.href}
                            onClick={() => handleScroll(link.href)}
                            className="text-sm md:text-lg font-light opacity-60 hover:opacity-100 hover:text-brand-gold transition-all"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gold mb-4 block">Explore</span>
                      <div className="flex flex-col gap-3">
                        {[
                          { name: lang === 'EN' ? 'The Journal' : 'Das Journal', href: `${langPrefix}/journal` },
                          { name: lang === 'EN' ? 'About' : 'Über uns', href: `${langPrefix}/about` },
                        ].map((link) => (
                          <Link 
                            key={link.href}
                            to={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm md:text-lg font-light opacity-60 hover:opacity-100 hover:text-brand-gold transition-all"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/5 hidden lg:block">
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gold mb-4 block">Contact</span>
                    <p className="text-xs tracking-widest opacity-40">info@thegroomcode.com</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="p-12 text-center opacity-20 text-[10px] uppercase tracking-[0.5em]">
              © 2026 The Groom Code — All Rights Reserved
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
