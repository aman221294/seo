import React, { useState } from 'react';
import { Sparkles, Send, Check, Heart, Shield, Globe, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenConsultation
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: About Infosedia */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-6">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-0.5 flex items-center justify-center shadow-md">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-heading">
                Infosedia
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              Infosedia is a premier website development company designing high-converting, lightning-fast custom websites for businesses, startups, restaurants, salons, gyms, and enterprises.
            </p>

            {/* Newsletter Subscription */}
            <div className="w-full max-w-sm">
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                Subscribe to Agency Growth Newsletter
              </p>
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-3.5 py-2 rounded-xl bg-slate-900 text-xs text-white border border-slate-800 focus:outline-none focus:border-cyan-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all shrink-0 flex items-center gap-1"
                >
                  {subscribed ? <Check className="w-4 h-4 text-emerald-400" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </form>
              {subscribed && (
                <p className="text-[10px] text-emerald-400 mt-1.5 font-medium">
                  ✓ Successfully subscribed to web design insights!
                </p>
              )}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-heading mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li><a href="#why-us" className="hover:text-cyan-400 transition-colors">Why Infosedia</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services Offered</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Client Portfolio</a></li>
              <li><a href="#process" className="hover:text-cyan-400 transition-colors">7-Step Process</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing Packages</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#blog" className="hover:text-cyan-400 transition-colors">Blog & Insights</a></li>
            </ul>
          </div>

          {/* Col 3: Popular Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-heading mb-4">
              Core Industries
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li><a href="#industries" className="hover:text-cyan-400 transition-colors">Restaurants & Cafes</a></li>
              <li><a href="#industries" className="hover:text-cyan-400 transition-colors">Salons & Spas</a></li>
              <li><a href="#industries" className="hover:text-cyan-400 transition-colors">Gyms & Fitness</a></li>
              <li><a href="#industries" className="hover:text-cyan-400 transition-colors">Doctors & Clinics</a></li>
              <li><a href="#industries" className="hover:text-cyan-400 transition-colors">Real Estate Firms</a></li>
              <li><a href="#industries" className="hover:text-cyan-400 transition-colors">Ecommerce Stores</a></li>
              <li><a href="#industries" className="hover:text-cyan-400 transition-colors">Schools & Colleges</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-heading mb-4">
              Contact Agency
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>100 Innovation Way, Suite 400, San Francisco, CA 94105</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>+1 (800) 555-INFO</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>hello@infosedia.com</span>
              </p>

              <button
                onClick={onOpenConsultation}
                className="mt-2 px-4 py-2 rounded-xl bg-blue-600/80 hover:bg-blue-600 text-white font-bold text-xs transition-all w-full text-center"
              >
                Schedule Consultation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Infosedia Web Development Agency. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button onClick={onOpenPrivacy} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
            <button onClick={onOpenTerms} className="hover:text-slate-300 transition-colors">
              Terms of Service
            </button>
            <button onClick={onOpenPrivacy} className="hover:text-slate-300 transition-colors">
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
