import React from 'react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../data/mockData';
import {
  Palette,
  TrendingUp,
  Smartphone,
  Zap,
  ShieldCheck,
  DollarSign,
  Headphones,
  Sparkles,
  Check
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Palette,
    TrendingUp,
    Smartphone,
    Zap,
    ShieldCheck,
    DollarSign,
    Headphones,
    Sparkles
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-cyan-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
            <span>Why Choose Infosedia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white font-heading tracking-tight mb-4">
            Engineered for Higher Revenue & Unmatched Speed.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            We don't just build websites — we create high-converting digital assets tailored to dominate your local market.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComp = iconMap[item.icon] || Sparkles;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative rounded-2xl p-6 glass-card glass-card-hover overflow-hidden flex flex-col justify-between"
              >
                {/* Top Subtle Gradient Line Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-0.5 text-white shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300 shrink-0">
                      <div className="w-full h-full bg-slate-50 dark:bg-slate-900 rounded-[10px] flex items-center justify-center text-blue-600 dark:text-cyan-400">
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-cyan-300 bg-blue-50 dark:bg-blue-950/80 px-2.5 py-1 rounded-full border border-blue-200/80 dark:border-blue-800/80 shadow-xs">
                      {item.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Subtle Bottom Accent Check */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Guaranteed Deliverable</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
