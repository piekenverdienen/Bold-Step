import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Language } from '../constants';
import { subscribeEmail } from '../lib/supabase';

interface EmailPopupProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailPopup({ lang, isOpen, onClose }: EmailPopupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const l = (en: string, de: string, nl: string) =>
    lang === 'EN' ? en : lang === 'DE' ? de : nl;

  const handleClose = () => {
    onClose();
    if (status === 'success') {
      setStatus('idle');
      setEmail('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');
    try {
      await subscribeEmail(email, 'popup');
      setStatus('success');
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
                    'Here is your free shipping code:',
                    'Hier ist Ihr Code für kostenlosen Versand:',
                    'Hier is je code voor gratis verzending:'
                  )}
                </p>
                <div className="bg-brand-black text-brand-offwhite py-4 px-6">
                  <p className="text-sm sm:text-2xl font-bold tracking-[0.15em] sm:tracking-[0.3em]">THEGROOMCODE26</p>
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
                    {l('Exclusive Offer', 'Exklusives Angebot', 'Exclusief Aanbod')}
                  </span>
                  <h2 className="text-3xl font-serif mb-3">
                    {l(
                      'Claim Your Free Shipping',
                      'Kostenloser Versand sichern',
                      'Claim je Gratis Verzending'
                    )}
                  </h2>
                  <p className="text-sm opacity-60 leading-relaxed">
                    {l(
                      'Enter your email to receive your exclusive free shipping code for Aurélien luxury footwear.',
                      'Geben Sie Ihre E-Mail-Adresse ein, um Ihren exklusiven Code für kostenlosen Versand bei Aurélien Luxusschuhen zu erhalten.',
                      'Vul je e-mailadres in en ontvang je exclusieve code voor gratis verzending op Aurélien luxe schoenen.'
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
                      : l('Get Free Shipping', 'Kostenlosen Versand erhalten', 'Ontvang gratis verzending')}
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
