import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageCircle,
  MessageSquare,
  ArrowUp,
  X,
  Send,
  Sparkles,
  ShieldCheck,
  Check,
  Bot,
  User,
  PhoneCall
} from 'lucide-react';

interface ExtraWidgetsProps {
  onOpenConsultation: () => void;
  privacyOpen: boolean;
  setPrivacyOpen: (val: boolean) => void;
  termsOpen: boolean;
  setTermsOpen: (val: boolean) => void;
}

interface ChatMessage {
  sender: 'bot' | 'user';
  text: string;
}

export const ExtraWidgets: React.FC<ExtraWidgetsProps> = ({
  onOpenConsultation,
  privacyOpen,
  setPrivacyOpen,
  termsOpen,
  setTermsOpen
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [cookieAccepted, setCookieAccepted] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      sender: 'bot',
      text: 'Hello! 👋 I am the Infosedia Web Assistant. How can I help you today? Ask me about web packages, estimated timelines, or request a quote!'
    }
  ]);
  const [inputMsg, setInputMsg] = useState('');

  useEffect(() => {
    // Check local storage for cookie banner
    const saved = localStorage.getItem('infosedia_cookie_consent');
    if (!saved) {
      setCookieAccepted(false);
    }

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('infosedia_cookie_consent', 'true');
    setCookieAccepted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;

    const userText = inputMsg;
    setChatMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInputMsg('');

    // Generate intelligent agency bot responses
    setTimeout(() => {
      let botReply = "That's a great question! Infosedia builds custom, lightning-fast React websites with sub-second page speeds and 95+ SEO Lighthouse scores.";

      const lower = userText.toLowerCase();
      if (lower.includes('price') || lower.includes('cost') || lower.includes('package')) {
        botReply = "Our pricing starts at $999 for Starter 5-page sites and $1,899 for Business web apps with custom online booking or e-commerce. Would you like to schedule a free 1-on-1 consultation?";
      } else if (lower.includes('time') || lower.includes('long') || lower.includes('days')) {
        botReply = "Most Starter projects launch in 5 to 7 days, while Business web apps take 10 to 14 days!";
      } else if (lower.includes('restaurant') || lower.includes('salon') || lower.includes('gym') || lower.includes('doctor')) {
        botReply = "Yes! We specialize in tailored web solutions for that exact industry, complete with direct online booking and zero third-party commission fees.";
      } else if (lower.includes('seo') || lower.includes('google')) {
        botReply = "Every Infosedia website includes technical on-page SEO, Schema.org JSON-LD markup, and Google Search Console indexing!";
      }

      setChatMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 600);
  };

  return (
    <>
      {/* Back To Top Floating Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-40 p-3 rounded-2xl bg-slate-900/90 dark:bg-slate-800/90 text-white shadow-xl backdrop-blur-md border border-white/20 hover:bg-blue-600 transition-colors"
            aria-label="Back To Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Chat Button */}
      <a
        href="https://wa.me/18005554636?text=Hi%20Infosedia!%20I%20would%20like%20to%20get%20a%20free%20website%20quote."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-6 z-40 p-3.5 rounded-full bg-emerald-500 text-white shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
        title="Direct WhatsApp Chat"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold pl-0 group-hover:pl-2">
          Chat on WhatsApp
        </span>
      </a>

      {/* AI Live Chat Widget Button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-blue-600 text-white shadow-2xl hover:bg-blue-500 transition-transform hover:scale-105 flex items-center justify-center gap-2"
        aria-label="Live Assistant"
      >
        <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
        <span className="hidden sm:inline text-xs font-bold">Ask AI Assistant</span>
      </button>

      {/* AI Chat Drawer */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-20 right-6 z-50 w-80 sm:w-96 bg-slate-900 text-white rounded-3xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col h-[480px]"
          >
            {/* Header */}
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-heading text-white">Infosedia Assistant</h4>
                  <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Online • Instant Answers
                  </p>
                </div>
              </div>

              <button
                onClick={() => setChatOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs bg-slate-900/90">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-6 h-6 rounded-lg bg-blue-600/30 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-tr-none'
                        : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat CTA Button */}
            <div className="px-4 py-2 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => {
                  setChatOpen(false);
                  onOpenConsultation();
                }}
                className="text-[11px] font-bold text-cyan-400 hover:underline flex items-center gap-1"
              >
                <PhoneCall className="w-3 h-3" />
                <span>Book Free Consultation Call</span>
              </button>
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSendMessage} className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask about pricing, speed, SEO..."
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                className="flex-1 px-3 py-2 rounded-xl bg-slate-900 text-xs text-white border border-slate-800 focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Consent Banner */}
      <AnimatePresence>
        {!cookieAccepted && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 p-5 bg-slate-900/95 backdrop-blur-xl text-white rounded-3xl border border-slate-700 shadow-2xl flex flex-col gap-3"
          >
            <div className="flex items-center gap-2 text-xs font-bold font-heading text-cyan-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Cookie & Privacy Choice</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We use essential cookies to analyze site traffic and deliver sub-second performance. No personal tracking data is sold.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={handleAcceptCookies}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors flex-1"
              >
                Accept All Cookies
              </button>
              <button
                onClick={handleAcceptCookies}
                className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
              >
                Essential Only
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {privacyOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setPrivacyOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                Infosedia Privacy Policy
              </h3>

              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed">
                <p><strong>Effective Date:</strong> July 31, 2026</p>
                <p>Infosedia Web Development Agency ("we," "our," "us") is committed to protecting your personal data and privacy.</p>
                <h4 className="font-bold text-slate-900 dark:text-white">1. Information We Collect</h4>
                <p>We collect information you voluntarily provide through consultation request forms, instant quote calculators, and newsletter subscriptions (such as name, email, phone number, and project specs).</p>
                <h4 className="font-bold text-slate-900 dark:text-white">2. How We Use Data</h4>
                <p>We strictly use your data to communicate project proposals, technical audits, and service updates. We NEVER sell or share your personal data with third-party advertisers.</p>
                <h4 className="font-bold text-slate-900 dark:text-white">3. Security</h4>
                <p>We implement bank-grade SSL encryption and secure server infrastructure to protect all client submissions.</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setPrivacyOpen(false)}
                  className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
                >
                  I Understand
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Terms of Service Modal */}
      <AnimatePresence>
        {termsOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setTermsOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                Terms & Conditions
              </h3>

              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed">
                <p>Welcome to Infosedia. By requesting a consultation or using our services, you agree to these terms.</p>
                <h4 className="font-bold text-slate-900 dark:text-white">1. Deliverables & Ownership</h4>
                <p>Upon final project payment, the client receives 100% full ownership of custom source code, assets, and design files.</p>
                <h4 className="font-bold text-slate-900 dark:text-white">2. Guarantees & Revisions</h4>
                <p>Every website project includes unlimited revisions during the Figma design phase until you explicitly approve the final layout before code deployment.</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setTermsOpen(false)}
                  className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
                >
                  Accept Terms
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
