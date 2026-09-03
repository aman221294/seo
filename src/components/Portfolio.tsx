import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_PROJECTS } from '../data/mockData';
import { ProjectItem } from '../types';
import { Eye, BookOpen, Sparkles, Filter, ExternalLink, ArrowRight } from 'lucide-react';

interface PortfolioProps {
  onOpenLiveDemo: (demoUrl: string, title: string) => void;
  onOpenCaseStudy: (project: ProjectItem) => void;
  onOpenConsultation: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  onOpenLiveDemo,
  onOpenCaseStudy,
  onOpenConsultation
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Restaurant',
    'Salon',
    'Gym',
    'Doctor',
    'Real Estate',
    'Travel',
    'School',
    'Construction',
    'Digital Marketing',
    'Fashion',
    'Hotel',
    'Coffee Shop'
  ];

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-cyan-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
            <span>Featured Client Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white font-heading tracking-tight mb-4">
            Recent Websites Engineered by Infosedia.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Explore 12 real-world client success stories across key business sectors. Each project is designed to deliver maximum conversion and speed.
          </p>
        </div>

        {/* Category Tabs Scrollbar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid of Projects */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-3xl glass-card glass-card-hover overflow-hidden flex flex-col"
              >
                {/* Top Subtle Gradient Line Accent */}
                <div className="absolute top-0 left-0 right-0 z-20 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Image & Hover Action Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold tracking-wider uppercase border border-white/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Action Overlays on Hover */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                    <button
                      onClick={() => onOpenLiveDemo(project.previewUrl, project.title)}
                      className="px-4 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-lg flex items-center gap-1.5 hover:bg-blue-700 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </button>

                    <button
                      onClick={() => onOpenCaseStudy(project)}
                      className="px-4 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs shadow-lg flex items-center gap-1.5 hover:bg-slate-100 transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Case Study</span>
                    </button>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs text-slate-400 font-mono">{project.year}</span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm line-clamp-2 mb-4">
                      {project.summary}
                    </p>
                  </div>

                  {/* Result Metric Strip */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 font-medium block">Key Result</span>
                      <span className="text-sm font-extrabold text-blue-600 dark:text-cyan-400 font-heading">
                        {project.results[0].value} {project.results[0].label}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenLiveDemo(project.previewUrl, project.title)}
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onOpenCaseStudy(project)}
                        className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 text-xs font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Portfolio CTA Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xl max-w-3xl mx-auto">
            <div className="text-left">
              <h4 className="text-lg font-bold font-heading">Want a similar high-converting website for your business?</h4>
              <p className="text-xs text-blue-100">We deliver full custom websites in 5 to 14 business days.</p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded-2xl bg-white text-blue-700 font-bold text-xs sm:text-sm hover:bg-blue-50 shadow-md transition-all shrink-0 flex items-center gap-2"
            >
              <span>Get Free Quote Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
