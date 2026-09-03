import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap, Smartphone, Search, Play, Star } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenCalculator: () => void;
  onOpenLiveDemo: (demoUrl: string, title: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onOpenCalculator,
  onOpenLiveDemo
}) => {
  const highlights = [
    { label: 'Trusted by Businesses', icon: ShieldCheck },
    { label: 'Mobile First', icon: Smartphone },
    { label: 'SEO Optimized', icon: Search },
    { label: 'Fast Performance', icon: Zap }
  ];

  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden animated-gradient-bg">
      {/* Decorative Floating Abstract Shapes */}
      <div className="absolute top-1/4 left-5 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-600/20 rounded-full blur-3xl animate-float-reverse pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800/80 text-blue-700 dark:text-cyan-300 text-xs font-semibold mb-6 shadow-sm backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>Award-Winning Web Development Agency</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400" />
              <span className="text-slate-600 dark:text-slate-300 font-normal">Awwwards-Level Quality</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.08] font-heading mb-6">
              Websites That{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent underline decoration-blue-500/30 decoration-wavy underline-offset-8">
                Grow
              </span>{' '}
              Your Business.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl mb-8">
              We design beautiful, lightning-fast websites that help businesses generate more leads, build trust, and increase revenue.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/45 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                href="#portfolio"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-base border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:bg-slate-50 dark:hover:bg-slate-750 shadow-md transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>View Portfolio</span>
              </a>

              <button
                onClick={onOpenCalculator}
                className="w-full sm:w-auto px-5 py-4 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500/20 font-semibold text-sm border border-cyan-500/30 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-cyan-500" />
                <span>Estimate Cost in 30s</span>
              </button>
            </div>

            {/* Included Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Social Proof Rating */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Client 1" referrerPolicy="no-referrer" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Client 2" referrerPolicy="no-referrer" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Client 3" referrerPolicy="no-referrer" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80" alt="Client 4" referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-900 dark:text-white ml-1">4.9/5.0</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">From 128+ verified client reviews</p>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Laptop & Interactive Floating Device Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur-2xl opacity-20 dark:opacity-35 animate-pulse" />

            {/* Laptop Device Frame Container */}
            <div className="relative glass-card rounded-2xl p-3 border border-white/60 dark:border-slate-700/60 shadow-2xl overflow-hidden group">
              {/* Laptop Header Bar */}
              <div className="flex items-center justify-between px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl mb-3 border border-slate-200/80 dark:border-slate-700/80">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="px-4 py-0.5 rounded-md bg-white dark:bg-slate-900 text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5 border border-slate-200 dark:border-slate-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  https://infosedia-preview.com
                </div>
                <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">
                  99 Core Vitals
                </span>
              </div>

              {/* Laptop Screen Preview Image with Hover Effects */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-900 shadow-inner group-hover:scale-[1.01] transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                  alt="Infosedia Agency Portfolio Preview"
                  className="w-full h-full object-cover object-top hover:object-bottom transition-all duration-[8000ms] ease-in-out cursor-pointer"
                  referrerPolicy="no-referrer"
                  onClick={() => onOpenLiveDemo('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80', 'Infosedia Flagship Preview')}
                />

                {/* Overlaid Live Interactive Badge */}
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                  <button
                    onClick={() => onOpenLiveDemo('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80', 'Infosedia Flagship Preview')}
                    className="px-4 py-2.5 rounded-xl bg-slate-900/85 backdrop-blur-md text-white text-xs font-semibold shadow-xl border border-white/20 flex items-center gap-2 group-hover:scale-110 transition-transform duration-300"
                  >
                    <Play className="w-3.5 h-3.5 fill-white text-white" />
                    <span>Interactive Live Demo</span>
                  </button>
                </div>
              </div>

              {/* Floating Badge 1 - Conversion Metric */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-xl p-3 shadow-xl border border-slate-200 dark:border-slate-700 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                  +240%
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Revenue Growth</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Average Client Impact</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Speed Benchmark */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-xl p-3 shadow-xl border border-slate-200 dark:border-slate-700 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950/80 flex items-center justify-center text-blue-600 dark:text-cyan-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">0.4s Load Speed</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">100/100 Mobile Speed</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
