'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Card } from '@/components/ui/card';
import { CASE_STUDIES } from '@/lib/constants/case-studies';

export const CaseStudies = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive(prev => (prev + 1) % CASE_STUDIES.length);
  const prev = () => setActive(p => (p - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">AI Transformation Case Studies</h2>
        <p className="mt-2 text-white/60">
          Real results from brands and creators who scaled with our solutions
        </p>
      </div>
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Card variant="glass" className="mx-auto max-w-3xl p-8">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary-300">
                    {CASE_STUDIES[active].client}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">{CASE_STUDIES[active].title}</h3>
                </div>
                <p className="text-white/70">{CASE_STUDIES[active].description}</p>
                <div className="flex flex-wrap gap-3">
                  {CASE_STUDIES[active].metrics.map(metric => (
                    <span
                      key={metric}
                      className="rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1 text-sm font-medium text-accent-200"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
            aria-label="Previous case study"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {CASE_STUDIES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 w-2 rounded-full transition ${
                  active === i ? 'bg-primary-500' : 'bg-white/20'
                }`}
                aria-label={`Go to case study ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
            aria-label="Next case study"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
