'use client';

import { motion } from 'framer-motion';
import { FolderOpen, Rocket, Star } from 'lucide-react';
import { getStats } from '@/data/projects';
import { useLanguage } from '@/contexts/language-context';
import { useTheme } from '@/contexts/theme-context';
import { CountUp } from '@/components/ui/count-up';
import { MagneticHover } from '@/components/ui/magnetic-hover';
import clsx from 'clsx';

export function ProjectStats() {
  const stats = getStats();
  const { t } = useLanguage();
  const { theme } = useTheme();

  const items = [
    {
      icon: FolderOpen,
      value: stats.totalProjects,
      label: t('stats.projects'),
    },
    {
      icon: Rocket,
      value: stats.deployedProjects,
      label: t('stats.deployed'),
    },
    {
      icon: Star,
      value: stats.totalStars,
      label: t('stats.stars'),
    },
  ];

  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{
            delay: index * 0.12,
            type: 'spring',
            damping: 20,
            stiffness: 80,
          }}
        >
          <MagneticHover>
            <div className={clsx(
              'rounded-lg border p-5 text-center transition-all duration-300',
              theme === 'dark'
                ? 'border-white/10 bg-white/[0.035] hover:border-neon-cyan/30 hover:shadow-[0_0_30px_rgba(0,255,255,0.06)]'
                : 'border-slate-200 bg-white/85 shadow-[0_12px_34px_rgba(15,23,42,0.06)] hover:border-teal-300 hover:shadow-[0_16px_40px_rgba(15,159,154,0.1)]'
            )}>
              <item.icon className={clsx(
                'mx-auto mb-3 h-5 w-5',
                theme === 'dark' ? 'text-neon-cyan' : 'text-teal-700'
              )} />
              <div className={clsx(
                'mb-1 font-sans text-3xl font-bold',
                theme === 'dark' ? 'text-white' : 'text-slate-950'
              )}>
                <CountUp value={item.value} />
              </div>
              <div className={clsx(
                'font-sans text-sm uppercase tracking-wider font-medium',
                theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
              )}>
                {item.label}
              </div>
            </div>
          </MagneticHover>
        </motion.div>
      ))}
    </div>
  );
}
