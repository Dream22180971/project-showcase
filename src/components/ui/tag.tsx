'use client';

import clsx from 'clsx';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'cyan' | 'pink' | 'green' | 'yellow';
  className?: string;
}

export function Tag({ children, variant = 'default', className }: TagProps) {
  const variants = {
    default: 'tag',
    cyan: 'tag border-neon-cyan text-neon-cyan bg-neon-cyan/10',
    pink: 'tag border-neon-pink text-neon-pink bg-neon-pink/10',
    green: 'tag border-neon-green text-neon-green bg-neon-green/10',
    yellow: 'tag border-neon-yellow text-neon-yellow bg-neon-yellow/10',
  };

  return (
    <span className={clsx(variants[variant], className)}>
      {children}
    </span>
  );
}
