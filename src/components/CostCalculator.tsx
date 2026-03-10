import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Language } from '../constants';
import { CostItem } from '../content/archetypes/types';

interface CostCalculatorProps {
  lang: Language;
  costBreakdown: CostItem[];
  defaultGuestCount: number;
  totalBudgetRange: { low: number; high: number };
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
}

export default function CostCalculator({ lang, costBreakdown, defaultGuestCount, totalBudgetRange }: CostCalculatorProps) {
  const [guestCount, setGuestCount] = useState(defaultGuestCount);
  const [adjustments, setAdjustments] = useState<Record<string, number>>({});

  const items = useMemo(() => {
    return costBreakdown.map(item => {
      const adjustment = adjustments[item.category] ?? 0.5;
      const base = item.lowEstimate + (item.highEstimate - item.lowEstimate) * adjustment;
      const cost = item.perPerson ? base * guestCount : base;
      return { ...item, currentCost: Math.round(cost), adjustment };
    });
  }, [costBreakdown, guestCount, adjustments]);

  const totalCost = useMemo(() => {
    return items.reduce((sum, item) => sum + item.currentCost, 0);
  }, [items]);

  const handleSliderChange = (category: string, value: number) => {
    setAdjustments(prev => ({ ...prev, [category]: value }));
  };

  return (
    <section className="py-32 px-6 bg-brand-offwhite">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-4 block">
            {lang === 'EN' ? 'Budget Planning' : 'Budgetplanung'}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            {lang === 'EN' ? 'Cost Calculator' : 'Kostenrechner'}
          </h2>
          <p className="text-sm opacity-60 font-light max-w-lg mx-auto">
            {lang === 'EN'
              ? 'Adjust the sliders to estimate your wedding budget. All figures are based on current German market averages.'
              : 'Verschieben Sie die Regler, um Ihr Hochzeitsbudget zu schätzen. Alle Zahlen basieren auf aktuellen deutschen Marktdurchschnitten.'}
          </p>
        </motion.div>

        {/* Guest Count Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-8 bg-white border border-brand-black/5"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold uppercase tracking-widest">
              {lang === 'EN' ? 'Guest Count' : 'Gästeanzahl'}
            </h3>
            <span className="text-3xl font-serif text-brand-gold">{guestCount}</span>
          </div>
          <input
            type="range"
            min={20}
            max={200}
            step={5}
            value={guestCount}
            onChange={e => setGuestCount(Number(e.target.value))}
            className="w-full h-1 bg-brand-black/10 rounded-full appearance-none cursor-pointer accent-brand-gold
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
              [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-gold [&::-webkit-slider-thumb]:cursor-pointer
              [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:bg-brand-gold [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
          />
          <div className="flex justify-between text-[10px] uppercase tracking-widest opacity-40 mt-2">
            <span>20</span>
            <span>200</span>
          </div>
        </motion.div>

        {/* Cost Items */}
        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="p-6 bg-white border border-brand-black/5"
            >
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h4 className="text-sm font-medium">{item.label}</h4>
                  {item.note && (
                    <p className="text-[10px] opacity-40 mt-1">{item.note}</p>
                  )}
                </div>
                <span className="text-lg font-serif text-brand-gold ml-4 flex-shrink-0">
                  {formatCurrency(item.currentCost)}
                </span>
              </div>
              {item.perPerson && (
                <p className="text-[10px] opacity-40 mb-2">
                  {formatCurrency(item.lowEstimate + (item.highEstimate - item.lowEstimate) * item.adjustment)}{' '}
                  {lang === 'EN' ? 'per person' : 'pro Person'} × {guestCount} {lang === 'EN' ? 'guests' : 'Gäste'}
                </p>
              )}
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={item.adjustment}
                onChange={e => handleSliderChange(item.category, Number(e.target.value))}
                className="w-full h-0.5 bg-brand-black/10 rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3
                  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-gold [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:bg-brand-gold [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
              />
              <div className="flex justify-between text-[10px] opacity-30 mt-1">
                <span>{formatCurrency(item.perPerson ? item.lowEstimate * guestCount : item.lowEstimate)}</span>
                <span>{formatCurrency(item.perPerson ? item.highEstimate * guestCount : item.highEstimate)}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-8 bg-brand-black text-brand-offwhite"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold mb-1">
                {lang === 'EN' ? 'Estimated Total' : 'Geschätzte Gesamtkosten'}
              </h3>
              <p className="text-[10px] opacity-40">
                {lang === 'EN'
                  ? `Typical range: ${formatCurrency(totalBudgetRange.low)} – ${formatCurrency(totalBudgetRange.high)}`
                  : `Typische Spanne: ${formatCurrency(totalBudgetRange.low)} – ${formatCurrency(totalBudgetRange.high)}`}
              </p>
            </div>
            <span className="text-4xl md:text-5xl font-serif text-brand-gold">
              {formatCurrency(totalCost)}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
