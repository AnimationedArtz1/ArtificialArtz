'use client';

import { motion } from 'framer-motion';
import { STATS } from '@/lib/constants/taglines';

export const StatsSection = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 md:grid-cols-4">
        {STATS.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="mb-2 bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-5xl font-extrabold text-transparent">
              {stat.value}
            </p>
            <p className="text-sm font-medium uppercase tracking-wide text-white/60">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
