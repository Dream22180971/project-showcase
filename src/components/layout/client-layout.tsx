'use client';

import { Navbar } from './navbar';
import { Footer } from './footer';
import { Scanline } from '@/components/ui/scanline';
import { PageTransition } from '@/components/ui/page-transition';
import { useTheme } from '@/contexts/theme-context';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen font-sans cyber-grid ${theme === 'light' ? 'light' : ''}`}>
      <Scanline />
      <Navbar />

      <main className="flex-1 pt-16">
        <PageTransition>{children}</PageTransition>
      </main>

      <Footer />
    </div>
  );
}
