import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Language } from '../constants';

interface TopBannerProps {
  lang: Language;
  onClose: () => void;
  onClickSignup: () => void;
}

export default function TopBanner({ lang, onClose, onClickSignup }: TopBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const l = (en: string, de: string, nl: string) =>
    lang === 'EN' ? en : lang === 'DE' ? de : nl;

  return (
    <div className="fixed top-0 left-0 right-0 z-[55] bg-brand-black text-brand-offwhite">
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-center relative">
        <button onClick={onClickSignup} className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-center cursor-pointer hover:opacity-80 transition-opacity">
          <span className="font-bold text-brand-gold">
            {l('Exclusive: Free Shipping', 'Exklusiv: Kostenloser Versand', 'Exclusief: Gratis Verzending')}
          </span>
          <span className="mx-2 opacity-40">|</span>
          <span className="opacity-80">
            {l('On all Aurélien orders', 'Auf alle Aurélien Bestellungen', 'Op alle Aurélien bestellingen')}
          </span>
          <span className="mx-2 opacity-40">|</span>
          <span className="underline text-brand-champagne">
            {l('Claim Your Code', 'Code sichern', 'Claim je code')}
          </span>
        </button>
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
