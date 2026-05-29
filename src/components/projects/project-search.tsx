'use client';

import { Search, X } from 'lucide-react';
import clsx from 'clsx';
import { useTheme } from '@/contexts/theme-context';
import { useLanguage } from '@/contexts/language-context';

interface ProjectSearchProps {
  value: string;
  onChange: (value: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
  placeholder?: string;
}

export function ProjectSearch({
  value,
  onChange,
  isOpen = true,
  onClose,
  placeholder,
}: ProjectSearchProps) {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const resolvedPlaceholder = placeholder ?? t('search.placeholder');

  if (!isOpen) return null;

  return (
    <div className="relative mx-auto max-w-xl">
      <div className="relative">
        <Search className={clsx(
          'absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2',
          theme === 'dark' ? 'text-neon-cyan' : 'text-teal-700'
        )} />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={resolvedPlaceholder}
          className={clsx(
            'w-full py-4 pl-12 pr-12 font-sans text-base',
            'transition-all duration-300',
            theme === 'dark'
              ? 'bg-[#0a0a0a] border border-[rgba(0,255,255,0.2)] text-white placeholder:text-gray-600 focus:border-neon-cyan focus:shadow-[0_0_15px_#00ffff]'
              : 'bg-white/90 border border-slate-200 text-slate-950 placeholder:text-slate-400 shadow-[0_12px_34px_rgba(15,23,42,0.06)] focus:border-teal-600 focus:shadow-[0_14px_36px_rgba(15,118,110,0.12)]'
          )}
        />
        {value && (
          <button
            type="button"
            onClick={() => {
              onChange('');
            }}
            aria-label="Clear search"
            className={clsx(
              'absolute right-4 top-1/2 -translate-y-1/2 transition-colors',
              theme === 'dark'
                ? 'text-gray-500 hover:text-neon-cyan'
                : 'text-slate-400 hover:text-teal-700'
            )}
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className={clsx(
            'mt-3 w-full border px-4 py-2 font-sans text-sm font-medium uppercase tracking-wider transition-colors',
            theme === 'dark'
              ? 'border-gray-700 text-gray-400 hover:border-neon-cyan hover:text-neon-cyan'
              : 'border-slate-200 bg-white/90 text-slate-500 hover:border-teal-600 hover:text-teal-700'
          )}
        >
          {t('search.close')}
        </button>
      )}
    </div>
  );
}
