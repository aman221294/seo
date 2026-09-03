import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, CheckCircle, Clock, HeartHandshake, ShieldCheck, Zap } from 'lucide-react';

export const StatsCounter: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const stats = [
    { value: 100, suffix: '+', label: 'Projects Completed', icon: CheckCircle, subText: 'Delivered on time & budget' },
    { value: 98, suffix: '%', label: 'Client Satisfaction', icon: HeartHandshake, subText: 'Verified client rating' },
    { value: 5, suffix: '+ Years', label: 'Agency Experience', icon: Award, subText: 'Awwwards-level design' },
    { value: 24, suffix: '/7', label: 'Technical Support', icon: Clock, subText: 'Dedicated care hotline' }
  ];

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center text-center group hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <IconComp className="w-6 h-6" />
                </div>

                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight mb-1">
                  <Counter target={stat.value} suffix={stat.suffix} active={isInView} />
                </div>

                <p className="text-sm sm:text-base font-bold text-slate-200">{stat.label}</p>
                <p className="text-xs text-slate-400 mt-1">{stat.subText}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface CounterProps {
  target: number;
  suffix: string;
  active: boolean;
}

const Counter: React.FC<CounterProps> = ({ target, suffix, active }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};
