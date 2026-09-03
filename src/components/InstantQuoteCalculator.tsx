import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calculator, Check, ArrowRight, X, Clock, DollarSign, ShieldCheck } from 'lucide-react';

interface InstantQuoteCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToConsultation: (specs: {
    businessType: string;
    pages: string;
    features: string[];
    estimatedCost: number;
    estimatedDays: string;
  }) => void;
}

export const InstantQuoteCalculator: React.FC<InstantQuoteCalculatorProps> = ({
  isOpen,
  onClose,
  onProceedToConsultation
}) => {
  const [businessType, setBusinessType] = useState('Small Business / Corporate');
  const [pages, setPages] = useState('5 Pages (Standard)');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'Mobile Responsive UI/UX',
    'On-Page SEO Optimization'
  ]);

  if (!isOpen) return null;

  const businessTypes = [
    { name: 'Small Business / Corporate', basePrice: 999, days: '5-7 Days' },
    { name: 'Restaurant / Cafe', basePrice: 1199, days: '7-10 Days' },
    { name: 'Salon / Beauty Spa', basePrice: 1099, days: '7-10 Days' },
    { name: 'Gym / Fitness Studio', basePrice: 1299, days: '10 Days' },
    { name: 'Doctor / Medical Clinic', basePrice: 1499, days: '10-14 Days' },
    { name: 'Real Estate Company', basePrice: 1699, days: '12-14 Days' },
    { name: 'Ecommerce Online Store', basePrice: 2299, days: '14-21 Days' },
    { name: 'School / Academy', basePrice: 1799, days: '14 Days' },
    { name: 'Hotel / Boutique Resort', basePrice: 2199, days: '14-21 Days' }
  ];

  const pageOptions = [
    { name: 'Single High-Converting Landing Page', price: -200 },
    { name: '5 Pages (Standard)', price: 0 },
    { name: '10 Pages (Expanded)', price: 400 },
    { name: '15+ Custom Pages', price: 800 }
  ];

  const featureAddons = [
    { name: 'Online Booking & Calendar Sync', price: 299 },
    { name: 'E-Commerce Storefront & Stripe', price: 499 },
    { name: 'Awwwards-Level Motion Animations', price: 250 },
    { name: 'Technical Schema & Local SEO Package', price: 200 },
    { name: 'Professional Copywriting Assistance', price: 300 },
    { name: 'WhatsApp & Live AI Chat Widget', price: 150 },
    { name: 'Monthly Maintenance & Care Plan', price: 199 }
  ];

  const currentBusiness = businessTypes.find((b) => b.name === businessType) || businessTypes[0];
  const currentPageOpt = pageOptions.find((p) => p.name === pages) || pageOptions[1];

  const totalCost =
    currentBusiness.basePrice +
    currentPageOpt.price +
    selectedFeatures.reduce((acc, featName) => {
      const match = featureAddons.find((f) => f.name === featName);
      return acc + (match ? match.price : 0);
    }, 0);

  const toggleFeature = (featName: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featName) ? prev.filter((f) => f !== featName) : [...prev, featName]
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-cyan-400">
            <Calculator className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
            Instant Web Cost Estimator
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-heading mb-2">
          Calculate Your Custom Website Investment
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6">
          Select your business model and required features to receive an instant real-time quote estimate.
        </p>

        {/* Step 1: Business Type */}
        <div className="mb-6">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            1. Select Industry / Business Type:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {businessTypes.map((bt) => (
              <button
                key={bt.name}
                onClick={() => setBusinessType(bt.name)}
                className={`p-3 rounded-xl text-xs font-semibold text-left transition-all border ${
                  businessType === bt.name
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
              >
                {bt.name}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Page Count */}
        <div className="mb-6">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            2. Estimated Page Scope:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {pageOptions.map((po) => (
              <button
                key={po.name}
                onClick={() => setPages(po.name)}
                className={`p-3 rounded-xl text-xs font-semibold text-left transition-all border ${
                  pages === po.name
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
              >
                {po.name}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Custom Features Add-ons */}
        <div className="mb-8">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            3. Select Desired Features & Add-ons:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {featureAddons.map((fa) => {
              const checked = selectedFeatures.includes(fa.name);
              return (
                <button
                  key={fa.name}
                  onClick={() => toggleFeature(fa.name)}
                  className={`p-3 rounded-xl text-xs font-medium text-left flex items-center justify-between border transition-all ${
                    checked
                      ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-500 text-blue-900 dark:text-blue-100'
                      : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${checked ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-400'}`}>
                      {checked && <Check className="w-3 h-3" />}
                    </span>
                    <span>{fa.name}</span>
                  </span>
                  <span className="font-bold text-blue-600 dark:text-cyan-400">+${fa.price}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Calculated Total Summary Box */}
        <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs text-slate-400 font-medium block">Estimated Project Investment</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-heading">
                ${totalCost}
              </span>
              <span className="text-xs text-slate-300">USD (Estimated)</span>
            </div>
            <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-1">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              Estimated Turnaround: <span className="text-white font-semibold">{currentBusiness.days}</span>
            </p>
          </div>

          <button
            onClick={() => {
              onClose();
              onProceedToConsultation({
                businessType,
                pages,
                features: selectedFeatures,
                estimatedCost: totalCost,
                estimatedDays: currentBusiness.days
              });
            }}
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-blue-600/40 transition-all flex items-center gap-2 shrink-0"
          >
            <span>Request Official Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-[11px] text-slate-500 text-center">
          * Final pricing may adjust based on specific custom API integrations or enterprise requirements.
        </p>

      </motion.div>
    </div>
  );
};
