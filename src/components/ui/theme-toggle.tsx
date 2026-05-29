'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/theme-context';
import clsx from 'clsx';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={clsx(
        'p-2 rounded-lg transition-all duration-300',
        'border border-transparent',
        theme === 'dark'
          ? 'text-neon-cyan hover:border-neon-cyan hover:shadow-[0_0_10px_#00ffff]'
          : 'text-slate-600 hover:border-teal-600 hover:text-teal-700 hover:shadow-[0_8px_22px_rgba(15,118,110,0.14)]'
      )}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}
