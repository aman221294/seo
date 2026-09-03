import React from 'react';
import { motion } from 'motion/react';
import { ProjectItem } from '../types';
import { X, TrendingUp, CheckCircle2, Quote, ArrowRight, Calendar, MapPin, Code2 } from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectItem;
  onClose: () => void;
  onOpenConsultation: (projectCategory?: string) => void;
  onOpenLiveDemo: (demoUrl: string, title: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenConsultation,
  onOpenLiveDemo
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
            {project.category} Case Study
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-blue-500" />
            {project.location}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-blue-500" />
            Completed in {project.year}
          </span>
        </div>

        {/* Project Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white font-heading tracking-tight mb-3">
          {project.title}
        </h2>

        <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8">
          {project.summary}
        </p>

        {/* Highlighted Results Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 mb-8">
          {project.results.map((res, i) => (
            <div key={i} className="flex flex-col items-center text-center p-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-cyan-400 font-heading mb-1">
                {res.value}
              </span>
              <span className="text-xs font-bold text-slate-900 dark:text-white">{res.label}</span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">{res.change}</span>
            </div>
          ))}
        </div>

        {/* Image Banner */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-8 border border-slate-200 dark:border-slate-800 shadow-md">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <button
            onClick={() => onOpenLiveDemo(project.previewUrl, project.title)}
            className="absolute bottom-4 right-4 px-4 py-2 rounded-xl bg-slate-900/90 text-white text-xs font-semibold backdrop-blur-md hover:bg-blue-600 transition-colors shadow-lg flex items-center gap-2"
          >
            <span>View Live Interactive Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40">
            <h4 className="text-sm font-bold text-rose-800 dark:text-rose-300 uppercase tracking-wider mb-2">
              The Challenge
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40">
            <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider mb-2">
              Infosedia Solution
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Features Built */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
            Core Web Features Delivered:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
            <Code2 className="w-4 h-4 text-blue-500" />
            Tech Stack Used:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span key={i} className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Client Quote if available */}
        {project.testimonial && (
          <div className="p-6 rounded-2xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-800/80 mb-8 relative">
            <Quote className="w-8 h-8 text-blue-300 dark:text-blue-700 absolute top-4 right-4 opacity-50" />
            <p className="text-xs sm:text-sm italic text-slate-700 dark:text-slate-200 mb-3 relative z-10">
              "{project.testimonial.quote}"
            </p>
            <p className="text-xs font-bold text-slate-900 dark:text-white">
              — {project.testimonial.author}, <span className="font-normal text-slate-500">{project.testimonial.role}</span>
            </p>
          </div>
        )}

        {/* Action Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={() => onOpenLiveDemo(project.previewUrl, project.title)}
            className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-200 transition-colors"
          >
            Launch Demo Viewer
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenConsultation(project.category);
            }}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-600/30 transition-all flex items-center gap-2"
          >
            <span>Request Similar Website for My Business</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
