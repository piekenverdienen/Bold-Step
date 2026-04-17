import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check } from 'lucide-react';
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
  const [copied, setCopied] = useState(false);

  const l = (en: string, de: string, nl: string) =>
    lang === 'EN' ? en : lang === 'DE' ? de : nl;

  const handleClose = () => {
    onClose();
    if (status === 'success') {
      setStatus('idle');
      setEmail('');
      setCopied(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('GROOM10');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
                    'Here is your 10% discount code:',
                    'Hier ist Ihr 10% Rabattcode:',
                    'Hier is je 10% kortingscode:'
                  )}
                </p>
                <button
                  onClick={handleCopy}
                  className="w-full bg-brand-black text-brand-offwhite py-4 px-6 flex items-center justify-center gap-3 hover:bg-brand-black/90 transition-colors cursor-pointer"
                >
                  <p className="text-sm sm:text-2xl font-bold tracking-[0.15em] sm:tracking-[0.3em]">GROOM10</p>
                  {copied ? <Check size={18} className="text-brand-gold" /> : <Copy size={18} className="opacity-60" />}
                </button>
                <p className="text-xs opacity-40 mt-2">
                  {copied
                    ? l('Copied!', 'Kopiert!', 'Gekopieerd!')
                    : l('Click to copy', 'Klicken zum Kopieren', 'Klik om te kopiëren')}
                </p>
                <a
                  href="https://www.aurelien.com/?utm_source=thegroomcode&utm_medium=referral&utm_campaign=editorial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mt-6 py-3 bg-brand-gold text-brand-black text-[11px] uppercase tracking-[0.2em] font-bold text-center hover:bg-brand-champagne transition-all"
                >
                  {l('Shop Aurélien Now', 'Jetzt bei Aurélien shoppen', 'Shop nu bij Aurélien')}
                </a>
                <p className="text-xs opacity-40 mt-4">
                  {l(
                    '10% discount included. Apply at checkout on aurelien.com',
                    '10% Rabatt inklusive. An der Kasse auf aurelien.com einlösen',
                    '10% korting inbegrepen. Gebruik bij checkout op aurelien.com'
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
                      'Claim Your 10% Discount',
                      '10% Rabatt sichern',
                      'Claim je 10% Korting'
                    )}
                  </h2>
                  <p className="text-sm opacity-60 leading-relaxed">
                    {l(
                      'Enter your email to receive your exclusive 10% discount code for Aurélien luxury footwear.',
                      'Geben Sie Ihre E-Mail-Adresse ein, um Ihren exklusiven 10% Rabattcode für Aurélien Luxusschuhe zu erhalten.',
                      'Vul je e-mailadres in en ontvang je exclusieve 10% kortingscode voor Aurélien luxe schoenen.'
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
                      : l('Get 10% Discount', '10% Rabatt erhalten', 'Ontvang 10% Korting')}
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
