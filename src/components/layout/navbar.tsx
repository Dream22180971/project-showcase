'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Terminal } from 'lucide-react';
import clsx from 'clsx';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { LanguageToggle } from '@/components/ui/language-toggle';
import { useTheme } from '@/contexts/theme-context';
import { useLanguage } from '@/contexts/language-context';

export function Navbar() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const { t } = useLanguage();

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/projects', label: t('nav.projects') },
    { href: '/about', label: t('nav.about') },
  ];

  return (
    <nav className={clsx(
      'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
      theme === 'dark'
        ? 'bg-black/80 backdrop-blur-md border-b border-[rgba(0,255,255,0.1)]'
        : 'bg-white/82 backdrop-blur-md border-b border-slate-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.04)]'
    )}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Terminal className={clsx(
              'w-5 h-5 transition-colors',
              theme === 'dark'
                ? 'text-neon-cyan group-hover:text-neon-pink'
                : 'text-teal-700 group-hover:text-rose-700'
            )} />
            <span className={clsx(
              'font-mono text-xs transition-colors sm:text-sm',
              theme === 'dark'
                ? 'text-neon-cyan group-hover:text-neon-pink'
                : 'text-teal-700 group-hover:text-rose-700'
            )}>
              SEAN.WALTER
            </span>
          </Link>

          {/* Nav Items */}
          <div className="flex items-center gap-3 sm:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'font-sans text-sm font-medium tracking-wide transition-colors',
                  pathname === item.href
                    ? theme === 'dark' ? 'text-neon-cyan' : 'text-teal-700'
                    : theme === 'dark'
                      ? 'text-gray-400 hover:text-neon-cyan'
                      : 'text-slate-600 hover:text-teal-700'
                )}
              >
                {item.label}
              </Link>
            ))}

            {/* Theme & Language Toggle */}
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
