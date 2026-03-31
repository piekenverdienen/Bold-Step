import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Language } from '../constants';

interface TopBannerProps {
  lang: Language;
  onClose: () => void;
}

export default function TopBanner({ lang, onClose }: TopBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const l = (en: string, de: string, nl: string) =>
    lang === 'EN' ? en : lang === 'DE' ? de : nl;

  return (
    <div className="fixed top-0 left-0 right-0 z-[55] bg-brand-black text-brand-offwhite">
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-center relative">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-center">
          <span className="font-bold text-brand-gold">
            {l('Exclusive Partner Discount', 'Exklusiver Partner-Rabatt', 'Exclusieve Partner Korting')}
          </span>
          <span className="mx-2 opacity-40">|</span>
          <span className="opacity-80">
            {l('Free Shipping', 'Kostenloser Versand', 'Gratis Verzending')}
          </span>
          <span className="mx-2 opacity-40">|</span>
          <span className="opacity-60">
            {l('Sign up for your code', 'Melden Sie sich an für Ihren Code', 'Meld je aan voor je code')}
          </span>
          <span className="ml-1 text-brand-champagne">&#8595;</span>
        </p>
        <button
          onClick={() => { setIsVisible(false); onClose(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-100 transition-opacity"
          aria-label="Close banner"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
