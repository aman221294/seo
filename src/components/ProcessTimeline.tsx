import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/mockData';
import {
  Search,
  Map,
  PenTool,
  Code2,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Search,
    Map,
    PenTool,
    Code2,
    CheckCircle2,
    Rocket,
    ShieldCheck
  };

  return (
    <section id="process" className="py-20 lg:py-28 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-cyan-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
            <span>Proven 7-Step Method</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white font-heading tracking-tight mb-4">
            Our Proven Web Development Process.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            From initial strategy workshop to launch and 24/7 care, every step is optimized for maximum quality, speed, and zero friction.
          </p>
        </div>

        {/* 7-Step Timeline Layout */}
        <div className="relative">
          {/* Vertical Connecting Line on Large Displays */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-500 to-cyan-500 -translate-x-1/2 opacity-30" />

          <div className="space-y-12 lg:space-y-16">
            {PROCESS_STEPS.map((stepItem, index) => {
              const IconComp = iconMap[stepItem.icon] || Sparkles;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={stepItem.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Card Content */}
                  <div className="w-full lg:w-[46%]">
                    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/80 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                          Step {stepItem.step}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">{stepItem.subtitle}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading mb-3">
                        {stepItem.title}
                      </h3>

                      <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                        {stepItem.desc}
                      </p>

                      {/* Deliverables */}
                      <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                          Key Deliverables:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {stepItem.deliverables.map((deliv, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700"
                            >
                              ✓ {deliv}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Node Icon Circle */}
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-0.5 text-white shadow-xl shadow-blue-500/30 shrink-0">
                    <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center text-blue-600 dark:text-cyan-400">
                      <IconComp className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Empty Spacer for alternating layout */}
                  <div className="hidden lg:block w-[46%]" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
