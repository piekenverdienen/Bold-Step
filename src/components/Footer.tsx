import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../constants';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
    const langPrefix = `/${lang.toLowerCase()}`;

  return (
    <footer className="bg-brand-offwhite border-t border-brand-black/5 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <h2 className="text-2xl font-serif uppercase tracking-widest mb-6">The Groom Code</h2>
          <p className="max-w-sm text-sm opacity-60 font-light leading-relaxed">
            {lang === 'EN'
              ? "The definitive style manual for the modern groom. Navigating tradition with contemporary elegance."
              : "Der definitive Stil-Leitfaden für den modernen Bräutigam. Tradition met zeitgenössischer Eleganz verbinden."}
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Navigation</h4>
          <ul className="flex flex-col gap-4 text-sm opacity-60 font-light">
            <li><Link to={`${langPrefix}/#proposal`} className="hover:text-brand-gold transition-colors">The Proposal</Link></li>
            <li><Link to={`${langPrefix}/#planning`} className="hover:text-brand-gold transition-colors">The Planning</Link></li>
            <li><Link to={`${langPrefix}/#style`} className="hover:text-brand-gold transition-colors">The Style</Link></li>
            <li><Link to={`${langPrefix}/journal`} className="hover:text-brand-gold transition-colors">The Journal</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Legal</h4>
          <ul className="flex flex-col gap-4 text-sm opacity-60 font-light">
            <li><a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Impressum</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-brand-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold opacity-40">
        <p>© 2026 The Groom Code</p>
        <p>Handcrafted in Italy. Designed for the Aisle.</p>
      </div>
    </footer>
  );
}
