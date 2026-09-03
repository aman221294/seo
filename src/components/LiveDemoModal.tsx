import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, ExternalLink, Monitor, Tablet, Smartphone, Sparkles, RefreshCw } from 'lucide-react';

interface LiveDemoModalProps {
  demoUrl: string;
  title: string;
  onClose: () => void;
  onOpenConsultation?: () => void;
}

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({
  demoUrl,
  title,
  onClose,
  onOpenConsultation
}) => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [loading, setLoading] = useState(true);

  const deviceWidths = {
    desktop: 'w-full max-w-5xl h-[70vh]',
    tablet: 'w-[768px] max-w-full h-[70vh]',
    mobile: 'w-[375px] max-w-full h-[70vh]'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-lg">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-6xl bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[90vh]"
      >
        {/* Modal Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-950 border-b border-slate-800 gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-heading">{title}</h4>
              <p className="text-[11px] text-slate-400 font-mono">Live Interactive Web Showcase</p>
            </div>
          </div>

          {/* Viewport Device Switcher */}
          <div className="flex items-center gap-1 p-1 bg-slate-800/80 rounded-xl border border-slate-700">
            <button
              onClick={() => setDevice('desktop')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                device === 'desktop' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Desktop</span>
            </button>
            <button
              onClick={() => setDevice('tablet')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                device === 'tablet' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Tablet</span>
            </button>
            <button
              onClick={() => setDevice('mobile')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                device === 'mobile' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mobile</span>
            </button>
          </div>

          {/* Top Actions */}
          <div className="flex items-center gap-2">
            {onOpenConsultation && (
              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/30 flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Build Similar Site</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Viewport Frame Container */}
        <div className="flex-1 bg-slate-950/60 p-4 sm:p-6 flex items-center justify-center overflow-auto relative">
          <div className={`transition-all duration-300 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative bg-slate-900 ${deviceWidths[device]}`}>
            
            {/* Embedded Live Preview Canvas / Image Showcase */}
            <div className="w-full h-full relative overflow-hidden flex flex-col bg-slate-900">
              <div className="p-3 bg-slate-900 text-slate-300 text-xs font-mono flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-slate-400">Previewing:</span>
                  <span className="text-cyan-400 font-semibold">{title}</span>
                </div>
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 flex items-center gap-1 text-[11px]"
                >
                  <span>Open Full View</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="flex-1 relative overflow-y-auto">
                <img
                  src={demoUrl}
                  alt={title}
                  className="w-full h-auto min-h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};
