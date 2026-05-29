'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useTheme } from '@/contexts/theme-context';

interface NeonButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'cyan' | 'pink' | 'green';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function NeonButton({
  children,
  href,
  onClick,
  variant = 'cyan',
  size = 'md',
  className,
}: NeonButtonProps) {
  const { theme } = useTheme();

  const variants = theme === 'dark'
    ? {
        cyan: 'border-neon-cyan/40 bg-neon-cyan text-black shadow-[0_18px_45px_rgba(69,215,230,0.18)] hover:-translate-y-0.5 hover:bg-neon-cyan/90 hover:shadow-[0_22px_55px_rgba(69,215,230,0.22)]',
        pink: 'border-white/10 bg-white/[0.04] text-gray-100 hover:-translate-y-0.5 hover:border-neon-pink/35 hover:bg-neon-pink/10 hover:text-white',
        green: 'border-neon-green/40 bg-neon-green/15 text-neon-green hover:-translate-y-0.5 hover:bg-neon-green/20',
      }
    : {
        cyan: 'border-teal-600 bg-teal-600 text-white shadow-[0_16px_34px_rgba(15,118,110,0.22)] hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-[0_20px_42px_rgba(15,118,110,0.26)]',
        pink: 'border-slate-200 bg-white/90 text-slate-700 shadow-sm hover:-translate-y-0.5 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-700',
        green: 'border-emerald-200 bg-emerald-50 text-emerald-700 hover:-translate-y-0.5 hover:bg-emerald-100',
      };

  const sizes = {
    sm: 'px-4 py-1.5 text-xs',
    md: 'px-6 py-2 text-sm',
    lg: 'px-8 py-3 text-base',
  };

  const baseClasses = clsx(
    'inline-flex items-center justify-center',
    'rounded-full border font-sans font-semibold uppercase tracking-wider',
    'transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan/50',
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <motion.span
      className="inline-flex items-center justify-center"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
}
