'use client';

import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import clsx from 'clsx';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={clsx(
        'flex items-center gap-1 px-2 py-1.5 rounded-lg transition-all duration-300',
        'border border-transparent font-mono text-xs',
        'hover:border-current'
      )}
      aria-label={language === 'en' ? '切换到中文' : 'Switch to English'}
    >
      <Globe className="w-4 h-4" />
      <span>{language === 'en' ? 'EN' : 'ZH'}</span>
    </button>
  );
}
