import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PRICING_PLANS } from '../data/mockData';
import { Check, X, Sparkles, ArrowRight, Clock, ShieldCheck, Palette } from 'lucide-react';

interface PricingProps {
  onOpenConsultation: (planName?: string) => void;
}

type CardTheme = 'royal' | 'emerald' | 'violet' | 'onyx';

export const Pricing: React.FC<PricingProps> = ({ onOpenConsultation }) => {
  const [billingCycle, setBillingCycle] = useState<'oneTime' | 'monthly'>('oneTime');
  const [cardTheme, setCardTheme] = useState<CardTheme>('royal');

  const themeStyles = {
    royal: {
      popularCard: 'bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white border-2 border-blue-500 shadow-2xl shadow-blue-500/20 scale-105 z-20 overflow-hidden',
      standardCard: 'bg-gradient-to-b from-white via-blue-50/20 to-slate-50/90 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-slate-950/90 border border-slate-200/90 dark:border-slate-800 text-slate-900 dark:text-white shadow-xl hover:shadow-2xl overflow-hidden glass-card-hover',
      sheenPopular: 'bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500',
      sheenStandard: 'bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600',
      ctaPopular: 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30 hover:shadow-lg',
      ctaStandard: 'bg-slate-900 dark:bg-blue-600 text-white hover:bg-slate-800 dark:hover:bg-blue-500',
      badgeBg: 'bg-gradient-to-r from-blue-600 to-cyan-500',
    },
    emerald: {
      popularCard: 'bg-gradient-to-b from-slate-900 via-slate-900 to-emerald-950 text-white border-2 border-emerald-500 shadow-2xl shadow-emerald-500/20 scale-105 z-20 overflow-hidden',
      standardCard: 'bg-gradient-to-b from-white via-emerald-50/20 to-slate-50/90 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-slate-950/90 border border-slate-200/90 dark:border-slate-800 text-slate-900 dark:text-white shadow-xl hover:shadow-2xl overflow-hidden glass-card-hover',
      sheenPopular: 'bg-gradient-to-r from-emerald-600 via-teal-400 to-cyan-500',
      sheenStandard: 'bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600',
      ctaPopular: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30 hover:shadow-lg',
      ctaStandard: 'bg-slate-900 dark:bg-emerald-600 text-white hover:bg-slate-800 dark:hover:bg-emerald-500',
      badgeBg: 'bg-gradient-to-r from-emerald-600 to-teal-500',
    },
    violet: {
      popularCard: 'bg-gradient-to-b from-slate-900 via-slate-900 to-purple-950 text-white border-2 border-purple-500 shadow-2xl shadow-purple-500/20 scale-105 z-20 overflow-hidden',
      standardCard: 'bg-gradient-to-b from-white via-purple-50/20 to-slate-50/90 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-slate-950/90 border border-slate-200/90 dark:border-slate-800 text-slate-900 dark:text-white shadow-xl hover:shadow-2xl overflow-hidden glass-card-hover',
      sheenPopular: 'bg-gradient-to-r from-purple-600 via-pink-400 to-indigo-500',
      sheenStandard: 'bg-gradient-to-r from-purple-500 via-pink-400 to-indigo-600',
      ctaPopular: 'bg-purple-600 hover:bg-purple-500 text-white shadow-purple-600/30 hover:shadow-lg',
      ctaStandard: 'bg-slate-900 dark:bg-purple-600 text-white hover:bg-slate-800 dark:hover:bg-purple-500',
      badgeBg: 'bg-gradient-to-r from-purple-600 to-pink-500',
    },
    onyx: {
      popularCard: 'bg-gradient-to-b from-slate-950 via-slate-900 to-amber-950/80 text-white border-2 border-amber-500/80 shadow-2xl shadow-amber-500/10 scale-105 z-20 overflow-hidden',
      standardCard: 'bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-950/90 border border-amber-500/20 text-white shadow-xl hover:shadow-2xl overflow-hidden glass-card-hover',
      sheenPopular: 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600',
      sheenStandard: 'bg-gradient-to-r from-amber-500/60 via-yellow-400/60 to-amber-600/60',
      ctaPopular: 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold shadow-amber-500/30 hover:shadow-lg',
      ctaStandard: 'bg-amber-500/90 text-slate-950 hover:bg-amber-400 font-bold',
      badgeBg: 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950',
    }
  };

  const currentTheme = themeStyles[cardTheme];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-slate-50/60 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Background Ambient Glow Accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-cyan-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
            <span>Transparent Investment Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white font-heading tracking-tight mb-4">
            Simple, Transparent Pricing with Zero Hidden Fees.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mb-8">
            Choose a one-time project fee or an affordable monthly plan including continuous hosting, backups, and 24/7 care.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {/* Billing Cycle Toggle */}
            <div className="inline-flex items-center p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm">
              <button
                onClick={() => setBillingCycle('oneTime')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  billingCycle === 'oneTime'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                One-Time Payment
              </button>
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  billingCycle === 'monthly'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>Monthly Care Plan</span>
                <span className="text-[10px] uppercase font-bold bg-emerald-500 text-white px-2 py-0.5 rounded-full">
                  All Included
                </span>
              </button>
            </div>

            {/* Background Theme Selector */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm text-xs">
              <span className="text-slate-500 dark:text-slate-400 font-bold flex items-center gap-1 mr-1">
                <Palette className="w-3.5 h-3.5" />
                Theme:
              </span>
              <button
                onClick={() => setCardTheme('royal')}
                className={`w-5 h-5 rounded-full bg-blue-600 transition-transform ${cardTheme === 'royal' ? 'ring-2 ring-blue-500 ring-offset-2 scale-110' : 'opacity-70 hover:opacity-100'}`}
                title="Royal Blue Theme"
              />
              <button
                onClick={() => setCardTheme('emerald')}
                className={`w-5 h-5 rounded-full bg-emerald-500 transition-transform ${cardTheme === 'emerald' ? 'ring-2 ring-emerald-500 ring-offset-2 scale-110' : 'opacity-70 hover:opacity-100'}`}
                title="Emerald Mint Theme"
              />
              <button
                onClick={() => setCardTheme('violet')}
                className={`w-5 h-5 rounded-full bg-purple-600 transition-transform ${cardTheme === 'violet' ? 'ring-2 ring-purple-500 ring-offset-2 scale-110' : 'opacity-70 hover:opacity-100'}`}
                title="Sunset Violet Theme"
              />
              <button
                onClick={() => setCardTheme('onyx')}
                className={`w-5 h-5 rounded-full bg-amber-500 transition-transform ${cardTheme === 'onyx' ? 'ring-2 ring-amber-500 ring-offset-2 scale-110' : 'opacity-70 hover:opacity-100'}`}
                title="Midnight Onyx Theme"
              />
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular ? currentTheme.popularCard : currentTheme.standardCard
                }`}
              >
                {/* Top Sheen Line Accent */}
                <div
                  className={`absolute top-0 left-0 right-0 ${
                    isPopular ? 'h-1.5 ' + currentTheme.sheenPopular : 'h-1 ' + currentTheme.sheenStandard + ' opacity-60 group-hover:opacity-100'
                  } transition-opacity duration-300`}
                />

                {/* Popular Highlight Badge */}
                {isPopular && (
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full ${currentTheme.badgeBg} text-white text-xs font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1`}>
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    <span>Most Popular Business Plan</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Subtitle */}
                  <h3 className={`text-2xl font-bold font-heading mb-2 ${isPopular || cardTheme === 'onyx' ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-medium ${isPopular || cardTheme === 'onyx' ? 'text-slate-200' : 'text-slate-600 dark:text-slate-300'}`}>
                    {plan.subtitle}
                  </p>

                  {/* Price Box */}
                  <div className="mb-6 pb-6 border-b border-slate-200/80 dark:border-slate-700/80">
                    <div className="flex items-baseline gap-1.5">
                      <span className={`text-4xl sm:text-5xl font-extrabold font-heading ${isPopular || cardTheme === 'onyx' ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                        ${billingCycle === 'oneTime' ? plan.priceOneTime : plan.priceMonthly}
                      </span>
                      <span className={`text-xs font-bold ${isPopular || cardTheme === 'onyx' ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'}`}>
                        {billingCycle === 'oneTime' ? 'one-time' : '/month'}
                      </span>
                    </div>

                    <div className="mt-2.5 flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      <Clock className="w-4 h-4" />
                      <span>Estimated Delivery: {plan.turnaroundTime}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className={`text-xs font-bold uppercase tracking-wider block ${isPopular || cardTheme === 'onyx' ? 'text-slate-300' : 'text-slate-700 dark:text-slate-300'}`}>
                      What's Included:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                        {feat.included ? (
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        )}
                        <span className={feat.included ? (isPopular || cardTheme === 'onyx' ? 'text-slate-100 font-medium' : 'text-slate-800 dark:text-slate-100 font-medium') : 'text-slate-400 dark:text-slate-500 line-through'}>
                          {feat.text}
                          {feat.detail && !feat.included && (
                            <span className="no-underline ml-1 text-[11px] text-blue-500 dark:text-cyan-400 font-semibold">({feat.detail})</span>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA */}
                <div>
                  <button
                    onClick={() => onOpenConsultation(plan.name)}
                    className={`w-full py-4 rounded-2xl text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 ${
                      isPopular ? currentTheme.ctaPopular : currentTheme.ctaStandard
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className={`text-xs font-medium text-center mt-3 ${isPopular || cardTheme === 'onyx' ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'}`}>
                    Ideal for: {plan.idealFor}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Risk-Free Guarantee Notice */}
        <div className="p-6 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white font-heading">
              100% Satisfaction Guarantee
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              We provide interactive Figma designs and working staging links before launch. You approve every detail before final deployment.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

