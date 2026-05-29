'use client';

import clsx from 'clsx';
import { categories } from '@/data/projects';
import { useLanguage } from '@/contexts/language-context';
import { useTheme } from '@/contexts/theme-context';

interface ProjectFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProjectFilter({ selectedCategory, onCategoryChange }: ProjectFilterProps) {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const getCategoryLabel = (id: string) => {
    const key = `category.${id}`;
    return t(key);
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={clsx(
            'px-4 py-2 font-sans text-sm font-medium uppercase tracking-wider',
            'border transition-all duration-300',
            selectedCategory === category.id
              ? theme === 'dark'
                ? 'bg-neon-cyan/10 border-neon-cyan text-neon-cyan shadow-[0_0_10px_#00ffff]'
                : 'bg-teal-50 border-teal-600 text-teal-700 shadow-[0_10px_24px_rgba(15,118,110,0.12)]'
              : theme === 'dark'
                ? 'bg-transparent border-gray-700 text-gray-400 hover:border-neon-cyan/50 hover:text-neon-cyan'
                : 'bg-white/70 border-slate-200 text-slate-600 hover:border-teal-300 hover:text-teal-700'
          )}
        >
          {getCategoryLabel(category.id)}
        </button>
      ))}
    </div>
  );
}
