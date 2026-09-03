import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation } from 'lucide-react';

export const LocationMap: React.FC = () => {
  return (
    <section id="contact-map" className="py-20 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Contact Info Card */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
              Agency Headquarters
            </span>

            <h3 className="text-3xl font-bold text-slate-900 dark:text-white font-heading tracking-tight mb-4">
              Visit Infosedia Studio
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
              Our engineering & design studio is located in San Francisco's tech hub. We serve clients globally with remote strategy workshops and in-person consultations.
            </p>

            <div className="space-y-4 w-full mb-6">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white font-heading">Address</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">100 Innovation Way, Suite 400, San Francisco, CA 94105</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-cyan-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white font-heading">Direct Phone</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">+1 (800) 555-INFO / +1 (415) 890-7733</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-cyan-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white font-heading">Studio Hours</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Monday - Friday: 8:00 AM - 6:00 PM PST (24/7 Emergency Care)</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/30 transition-all flex items-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Google Maps Directions</span>
            </a>
          </div>

          {/* Right Interactive Google Maps Frame Placeholder */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl aspect-[16/10] bg-slate-900">
            {/* Map Canvas Visual */}
            <div className="w-full h-full relative flex items-center justify-center bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]">
              {/* Map Graphic Overlay */}
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                alt="San Francisco Map Location"
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                referrerPolicy="no-referrer"
              />

              {/* Pin Marker Card */}
              <div className="absolute p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-white/20 text-white shadow-2xl flex items-center gap-3 animate-bounce">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold font-heading">Infosedia Web Studio</p>
                  <p className="text-[10px] text-slate-300">San Francisco Headquarters</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
