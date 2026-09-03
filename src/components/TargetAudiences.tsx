import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TARGET_AUDIENCES } from '../data/mockData';
import {
  Utensils,
  Scissors,
  Dumbbell,
  Stethoscope,
  Home,
  ShoppingBag,
  Briefcase,
  Hotel,
  GraduationCap,
  Megaphone,
  CheckCircle2,
  ArrowRight,
  Layers
} from 'lucide-react';

interface TargetAudiencesProps {
  onOpenConsultation: (industryName?: string) => void;
}

export const TargetAudiences: React.FC<TargetAudiencesProps> = ({ onOpenConsultation }) => {
  const [selectedId, setSelectedId] = useState(TARGET_AUDIENCES[0].id);

  const activeAudience = TARGET_AUDIENCES.find((a) => a.id === selectedId) || TARGET_AUDIENCES[0];

  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Utensils,
    Scissors,
    Dumbbell,
    Stethoscope,
    Home,
    ShoppingBag,
    Briefcase,
    Hotel,
    GraduationCap,
    Megaphone
  };

  return (
    <section id="industries" className="py-20 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 text-cyan-800 dark:text-cyan-300 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Tailored for Every Industry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white font-heading tracking-tight mb-3">
            Custom Web Architecture Tailored for Your Industry.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Select your industry below to see how our custom websites drive conversions for your specific business model.
          </p>
        </div>

        {/* Industry Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-5xl mx-auto">
          {TARGET_AUDIENCES.map((audience) => {
            const IconComp = iconMap[audience.icon] || Briefcase;
            const isSelected = audience.id === selectedId;

            return (
              <button
                key={audience.id}
                onClick={() => setSelectedId(audience.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700'
                }`}
              >
                <IconComp className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-blue-600 dark:text-cyan-400'}`} />
                <span>{audience.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Audience Detailed Feature Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeAudience.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 dark:border-slate-700 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
                {activeAudience.name} Web Blueprint
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-heading mb-3">
                {activeAudience.tagline}
              </h3>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Proven Impact: {activeAudience.growthMetric}
              </div>

              {/* Key Features Grid */}
              <div className="mb-6 w-full">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Essential Features Built-In:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeAudience.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Pages */}
              <div className="mb-8 w-full">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Recommended Page Structure:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeAudience.recommendedPages.map((pg, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700">
                      {pg}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenConsultation(activeAudience.name)}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-600/20 transition-all flex items-center gap-2 group"
              >
                <span>Build Website for {activeAudience.name}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Preview Image */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg">
              <img
                src={activeAudience.image}
                alt={activeAudience.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                <p className="text-white font-bold text-lg">{activeAudience.name}</p>
                <p className="text-slate-300 text-xs">{activeAudience.growthMetric}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
