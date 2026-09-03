import React from 'react';
import { CLIENT_LOGOS } from '../data/mockData';
import { Shield } from 'lucide-react';

export const ClientLogos: React.FC = () => {
  // Duplicate array for seamless infinite marquee loop
  const marqueeLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-12 bg-slate-50/80 dark:bg-slate-900/80 border-y border-slate-200/60 dark:border-slate-800/60 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
          <Shield className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
          Trusted by 100+ Leading Brands, Startups & Local Businesses Worldwide
        </p>
      </div>

      {/* Marquee Outer Container */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left Blur Fade */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />
        {/* Right Blur Fade */}
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Inner Container */}
        <div className="flex w-max gap-8 sm:gap-12 animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
          {marqueeLogos.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow group shrink-0"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-7 h-7 rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {client.name}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                  {client.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
