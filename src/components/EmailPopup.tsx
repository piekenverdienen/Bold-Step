import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Language } from '../constants';
import { subscribeEmail } from '../lib/supabase';

interface EmailPopupProps {
  lang: Language;
}

export default function EmailPopup({ lang }: EmailPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const l = (en: string, de: string, nl: string) =>
    lang === 'EN' ? en : lang === 'DE' ? de : nl;

  useEffect(() => {
    // Don't show if already dismissed or subscribed
    const dismissed = localStorage.getItem('email_popup_dismissed');
    if (dismissed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('email_popup_dismissed', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');
    try {
      await subscribeEmail(email, 'popup');
      setStatus('success');
      localStorage.setItem('email_popup_dismissed', 'true');
      setTimeout(() => setIsOpen(false), 10000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center px-4"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-brand-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-brand-offwhite max-w-md w-full p-10 shadow-2xl"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 opacity-40 hover:opacity-100 transition-opacity"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {status === 'success' ? (
              <div className="text-center py-4">
                <div className="text-brand-gold text-4xl font-serif mb-4">
                  {l('Thank You', 'Vielen Dank', 'Bedankt')}
                </div>
                <p className="text-sm opacity-60 mb-6">
                  {l(
                    'Here is your exclusive discount code:',
                    'Hier ist Ihr exklusiver Rabattcode:',
                    'Hier is je exclusieve kortingscode:'
                  )}
                </p>
                <div className="bg-brand-black text-brand-offwhite py-4 px-6">
                  <p className="text-2xl font-bold tracking-[0.3em]">THEGROOMCODE26</p>
                </div>
                <p className="text-xs opacity-40 mt-4">
                  {l(
                    'Free shipping included. Apply at checkout on aurelien.com',
                    'Kostenloser Versand inklusive. An der Kasse auf aurelien.com einlösen',
                    'Gratis verzending inbegrepen. Gebruik bij checkout op aurelien.com'
                  )}
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gold block mb-3">
                    {l('Exclusive Access', 'Exklusiver Zugang', 'Exclusieve Toegang')}
                  </span>
                  <h2 className="text-3xl font-serif mb-3">
                    {l(
                      'Unlock Your Partner Discount',
                      'Partner-Rabatt freischalten',
                      'Ontgrendel je Partner Korting'
                    )}
                  </h2>
                  <p className="text-sm opacity-60 leading-relaxed">
                    {l(
                      'Sign up to receive your exclusive discount code and free shipping on Aurélien luxury footwear.',
                      'Melden Sie sich an, um Ihren exklusiven Rabattcode und kostenlosen Versand für Aurélien Luxusschuhe zu erhalten.',
                      'Meld je aan om je exclusieve kortingscode en gratis verzending op Aurélien luxe schoenen te ontvangen.'
                    )}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={l('Your email address', 'Ihre E-Mail-Adresse', 'Je e-mailadres')}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-brand-black/15 text-sm tracking-wide placeholder:opacity-40 focus:outline-none focus:border-brand-gold transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3 bg-brand-black text-brand-offwhite text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-brand-gold transition-all disabled:opacity-50"
                  >
                    {status === 'loading'
                      ? '...'
                      : l('Get My Discount', 'Rabatt erhalten', 'Ontvang mijn korting')}
                  </button>
                </form>

                {status === 'error' && (
                  <p className="text-red-500 text-xs text-center mt-3">
                    {l(
                      'Something went wrong. Please try again.',
                      'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
                      'Er is iets misgegaan. Probeer het opnieuw.'
                    )}
                  </p>
                )}

                <p className="text-[10px] text-center opacity-30 mt-6">
                  {l(
                    'No spam, ever. Unsubscribe anytime.',
                    'Kein Spam, niemals. Jederzeit abmelden.',
                    'Nooit spam. Afmelden kan altijd.'
                  )}
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
