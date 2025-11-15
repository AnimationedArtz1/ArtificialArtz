'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { TAGLINES } from '@/lib/constants/taglines';
import { useRotatingItems } from '@/hooks/use-rotating-items';

export const TaglineRotator = () => {
  const tagline = useRotatingItems(TAGLINES, 3500);

  return (
    <div className="relative flex items-center gap-3 text-lg text-primary-200">
      <AnimatePresence mode="wait">
        <motion.span
          key={tagline}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="rounded-full border border-primary-500/40 bg-primary-500/10 px-4 py-1 text-sm uppercase tracking-wide text-primary-200"
        >
          {tagline}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
