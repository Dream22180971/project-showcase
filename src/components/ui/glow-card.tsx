'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useTheme } from '@/contexts/theme-context';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlowCard({ children, className, hover = true }: GlowCardProps) {
  const { theme } = useTheme();

  return (
    <motion.div
      className={clsx(
        'relative rounded-lg p-5 transition-colors duration-300 sm:p-6',
        theme === 'dark'
          ? 'border border-white/10 bg-card-bg shadow-[0_18px_70px_rgba(0,0,0,0.22)]'
          : 'border border-slate-200 bg-white/90 shadow-[0_16px_42px_rgba(15,23,42,0.07)]',
        hover && 'card-hover',
        className
      )}
      whileHover={hover ? { y: -2 } : undefined}
    >
      {children}
    </motion.div>
  );
}
