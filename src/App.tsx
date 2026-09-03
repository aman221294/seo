import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientLogos } from './components/ClientLogos';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TargetAudiences } from './components/TargetAudiences';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { LiveDemoModal } from './components/LiveDemoModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ProcessTimeline } from './components/ProcessTimeline';
import { StatsCounter } from './components/StatsCounter';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { BlogPreview } from './components/BlogPreview';
import { CTA } from './components/CTA';
import { LocationMap } from './components/LocationMap';
import { ConsultationModal } from './components/ConsultationModal';
import { InstantQuoteCalculator } from './components/InstantQuoteCalculator';
import { Footer } from './components/Footer';
import { ExtraWidgets } from './components/ExtraWidgets';
import { ProjectItem } from './types';
import { Sparkles } from 'lucide-react';
import { ThemePreset } from './components/Navbar';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemePreset>('royal');
  const [loadingApp, setLoadingApp] = useState(true);

  // Modal States
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationPresetService, setConsultationPresetService] = useState<string | undefined>(undefined);
  const [calculatorSpecs, setCalculatorSpecs] = useState<any>(null);

  const [calculatorOpen, setCalculatorOpen] = useState(false);

  const [liveDemoState, setLiveDemoState] = useState<{ open: boolean; url: string; title: string }>({
    open: false,
    url: '',
    title: ''
  });

  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectItem | null>(null);

  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  // Sync dark mode class on html tag
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Sync data-theme attribute on html tag
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  // Initial Preloader Timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingApp(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenConsultation = (presetService?: string) => {
    setConsultationPresetService(presetService);
    setConsultationOpen(true);
  };

  const handleOpenLiveDemo = (demoUrl: string, title: string) => {
    setLiveDemoState({ open: true, url: demoUrl, title });
  };

  const handleCalculatorProceed = (specs: any) => {
    setCalculatorSpecs(specs);
    setConsultationPresetService(specs.businessType);
    setConsultationOpen(true);
  };

  return (
    <div className={`min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 font-sans`}>
      {/* Brand Preloader */}
      <AnimatePresence>
        {loadingApp && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center text-white"
          >
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 p-0.5 flex items-center justify-center shadow-2xl mb-4 animate-bounce">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-cyan-400" />
              </div>
            </div>
            <h1 className="text-2xl font-bold font-heading tracking-tight mb-2">Infosedia</h1>
            <p className="text-xs text-slate-400 uppercase tracking-widest font-mono">Loading Agency Experience...</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Header Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
        onOpenConsultation={handleOpenConsultation}
        onOpenCalculator={() => setCalculatorOpen(true)}
      />

      {/* Main Page Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onOpenCalculator={() => setCalculatorOpen(true)}
          onOpenLiveDemo={handleOpenLiveDemo}
        />

        {/* 2. Client Logos Marquee */}
        <ClientLogos />

        {/* 3. Why Choose Infosedia */}
        <WhyChooseUs />

        {/* Target Industry Blueprints */}
        <TargetAudiences onOpenConsultation={handleOpenConsultation} />

        {/* 4. Services Grid */}
        <Services onOpenConsultation={handleOpenConsultation} />

        {/* 5. Portfolio Showcase */}
        <Portfolio
          onOpenLiveDemo={handleOpenLiveDemo}
          onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 6. Development Process Timeline */}
        <ProcessTimeline />

        {/* 7. Statistics & Achievements */}
        <StatsCounter />

        {/* 8. Testimonials Carousel */}
        <Testimonials />

        {/* 9. Pricing & Packages */}
        <Pricing onOpenConsultation={handleOpenConsultation} />

        {/* 10. FAQ Accordion */}
        <FAQ onOpenConsultation={() => handleOpenConsultation()} />

        {/* Blog & Articles */}
        <BlogPreview />

        {/* 11. Call to Action */}
        <CTA
          onOpenConsultation={() => handleOpenConsultation()}
          onOpenCalculator={() => setCalculatorOpen(true)}
        />

        {/* Google Maps Location */}
        <LocationMap />
      </main>

      {/* 12. Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Modals & Floating Extra Widgets */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => {
          setConsultationOpen(false);
          setCalculatorSpecs(null);
        }}
        presetService={consultationPresetService}
        calcSpecs={calculatorSpecs}
      />

      <InstantQuoteCalculator
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
        onProceedToConsultation={handleCalculatorProceed}
      />

      {liveDemoState.open && (
        <LiveDemoModal
          demoUrl={liveDemoState.url}
          title={liveDemoState.title}
          onClose={() => setLiveDemoState({ open: false, url: '', title: '' })}
          onOpenConsultation={() => handleOpenConsultation()}
        />
      )}

      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
          onOpenConsultation={handleOpenConsultation}
          onOpenLiveDemo={handleOpenLiveDemo}
        />
      )}

      <ExtraWidgets
        onOpenConsultation={() => handleOpenConsultation()}
        privacyOpen={privacyOpen}
        setPrivacyOpen={setPrivacyOpen}
        termsOpen={termsOpen}
        setTermsOpen={setTermsOpen}
      />
    </div>
  );
}
