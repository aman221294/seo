import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, PhoneCall } from 'lucide-react';

interface CTAProps {
  onOpenConsultation: () => void;
  onOpenCalculator: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenConsultation, onOpenCalculator }) => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-slate-950 text-white">
      {/* Decorative Glow Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-600/30 to-cyan-500/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/80 text-cyan-300 text-xs font-semibold mb-6 shadow-lg backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>Transform Your Digital Presence Today</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight mb-6 leading-tight">
          Ready to Build Your Dream Website?
        </h2>

        {/* Subtitle */}
        <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          Let's create something amazing together. Partner with Infosedia to generate more leads, build brand trust, and multiply your business revenue.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={onOpenConsultation}
            className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-base shadow-2xl shadow-blue-600/40 hover:shadow-blue-500/60 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3 group"
          >
            <PhoneCall className="w-5 h-5 text-white" />
            <span>Get Free Quote</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <button
            onClick={onOpenCalculator}
            className="px-7 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-extrabold text-base border border-slate-700 hover:border-cyan-400/50 transition-all flex items-center gap-2"
          >
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>Calculate Instant Website Cost</span>
          </button>
        </div>

        {/* Reassurance Guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Zero Obligations Strategy Call</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>5 to 14 Days Turnaround</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Custom React Architecture</span>
          </div>
        </div>

      </div>
    </section>
  );
};
