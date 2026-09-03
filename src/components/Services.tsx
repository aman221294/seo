import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data/mockData';
import { ServiceItem } from '../types';
import {
  Building2,
  Utensils,
  Scissors,
  Dumbbell,
  ShoppingBag,
  GraduationCap,
  Hotel,
  Stethoscope,
  Rocket,
  Layout,
  RefreshCw,
  Wrench,
  ArrowRight,
  Sparkles,
  X,
  CheckCircle2,
  Clock,
  DollarSign
} from 'lucide-react';

interface ServicesProps {
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Building2,
    Utensils,
    Scissors,
    Dumbbell,
    ShoppingBag,
    GraduationCap,
    Hotel,
    Stethoscope,
    Rocket,
    Layout,
    RefreshCw,
    Wrench
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-cyan-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
            <span>Our Core Specialties</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white font-heading tracking-tight mb-4">
            Web Development Services Built to Drive Revenue.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            From single high-converting landing pages to complex corporate platforms and e-commerce stores, we deliver world-class web solutions.
          </p>
        </div>

        {/* 12 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const IconComp = iconMap[service.iconName] || Building2;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
                className="group relative rounded-2xl p-6 glass-card glass-card-hover overflow-hidden flex flex-col justify-between"
              >
                {/* Top Subtle Gradient Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Service Top Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 p-0.5 text-white shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300 shrink-0">
                      <div className="w-full h-full bg-slate-50 dark:bg-slate-900 rounded-[10px] flex items-center justify-center text-blue-600 dark:text-cyan-400">
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Bottom Actions & Price Hint */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between mt-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-medium">Starting From</span>
                    <span className="text-sm font-extrabold text-slate-900 dark:text-white font-heading">
                      ${service.startingPrice}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="px-3.5 py-2 rounded-xl bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 font-semibold text-xs hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all flex items-center gap-1 group/btn shadow-xs"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                  {selectedService.category}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-blue-500" />
                  Turnaround: {selectedService.timeline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-heading mb-3">
                {selectedService.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {selectedService.fullDesc}
              </p>

              {/* Price & Popular For Box */}
              <div className="p-4 rounded-2xl bg-blue-50/80 dark:bg-slate-800/80 border border-blue-200/80 dark:border-slate-700 mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Estimated Project Investment</p>
                  <p className="text-2xl font-extrabold text-blue-600 dark:text-cyan-400 font-heading">
                    Starting at ${selectedService.startingPrice}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Ideal Business Types</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{selectedService.popularFor}</p>
                </div>
              </div>

              {/* Features List */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Included Technical Features:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-200 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onOpenConsultation(title);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/30 transition-all flex items-center gap-2"
                >
                  <span>Request Quote for {selectedService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
