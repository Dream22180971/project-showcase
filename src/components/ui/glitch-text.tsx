'use client';

import { ReactNode } from 'react';
import clsx from 'clsx';

interface GlitchTextProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'span';
  className?: string;
}

export function GlitchText({ children, as: Tag = 'h1', className }: GlitchTextProps) {
  return (
    <Tag
      className={clsx('glitch font-mono', className)}
      data-text={typeof children === 'string' ? children : ''}
    >
      {children}
    </Tag>
  );
}
