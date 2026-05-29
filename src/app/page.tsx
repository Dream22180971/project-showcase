'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, GitBranch, Sparkles } from 'lucide-react';
import { NeonButton } from '@/components/ui/neon-button';
import { ProjectCard } from '@/components/projects/project-card';
import { ProjectStats } from '@/components/projects/project-stats';
import { RevealText } from '@/components/ui/reveal-text';
import { MagneticHover } from '@/components/ui/magnetic-hover';
import { getFeaturedProjects, getAllTags } from '@/data/projects';
import { useLanguage } from '@/contexts/language-context';
import { useTheme } from '@/contexts/theme-context';
import clsx from 'clsx';

/* ==================== Hero 入场动画参数 ==================== */
const heroStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const heroFadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, damping: 20, stiffness: 100 },
  },
};

const heroScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring' as const, damping: 15, stiffness: 80 },
  },
};

/* ==================== SectionHeading ==================== */
function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  const { theme } = useTheme();

  return (
    <motion.div
      className="mx-auto mb-10 max-w-3xl text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className={clsx(
        'font-sans text-2xl font-bold uppercase leading-tight tracking-wide sm:text-3xl',
        theme === 'dark' ? 'text-gray-100' : 'text-slate-950'
      )}>
        <span className={clsx(
          'mr-3 align-middle text-sm font-semibold font-mono',
          theme === 'dark' ? 'text-neon-cyan' : 'text-cyan-700'
        )}>{'//'}</span>
        {title.replace(/^\/\/\s*/, '')}
      </h2>
      {description && (
        <motion.p
          className={clsx(
            'mx-auto mt-3 max-w-2xl text-base leading-7 sm:text-lg',
            theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
          )}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

/* ==================== 首页 ==================== */
export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const tags = getAllTags();
  const { t } = useLanguage();
  const { theme } = useTheme();
  const heroRef = useRef<HTMLDivElement>(null);

  /* 视差滚动：hero 内容随滚动上移 */
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, -120]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="min-h-screen">
      {/* ========== HERO 全屏 ========== */}
      <section ref={heroRef} className="relative flex h-screen flex-col items-center justify-center px-4 overflow-hidden">
        {/* 背景光晕随滚动视差 */}
        <motion.div
          className={clsx(
            'absolute inset-0 pointer-events-none',
            theme === 'dark'
              ? 'bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.06)_0%,transparent_70%)]'
              : 'bg-[radial-gradient(ellipse_at_center,rgba(15,159,154,0.05)_0%,transparent_70%)]'
          )}
          style={{ y: heroY }}
        />

        <motion.div
          className="w-full max-w-6xl text-center -mt-16 relative z-10"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          style={{ opacity: heroOpacity }}
        >
          {/* Badge */}
          <motion.div
            variants={heroScale}
            className={clsx(
              'mx-auto mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 font-sans text-sm font-medium',
              theme === 'dark'
                ? 'border-white/10 bg-white/[0.04] text-gray-300 shadow-[0_16px_60px_rgba(0,255,255,0.08)]'
                : 'border-slate-200 bg-white/90 text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.08)]'
            )}
          >
            <Sparkles className={clsx(
              'h-3.5 w-3.5',
              theme === 'dark' ? 'text-neon-cyan' : 'text-cyan-700'
            )} />
            {t('hero.badge')}
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            variants={heroFadeUp}
            className={clsx(
              'mb-4 font-sans text-sm uppercase tracking-[0.2em] sm:text-base font-medium',
              theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
            )}
          >
            {t('hero.eyebrow')}
          </motion.p>

          {/* Title — 逐词揭示 */}
          <motion.div variants={heroFadeUp} className="mb-6">
            <RevealText
              text={t('hero.title')}
              className={clsx(
                'font-sans text-[clamp(2.3rem,10vw,5.8rem)] font-extrabold leading-[1.05] md:text-[clamp(3.2rem,5.4vw,5.8rem)]',
                theme === 'dark' ? 'text-white' : 'text-slate-950'
              )}
              delay={0.4}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={heroFadeUp}
            className={clsx(
              'mx-auto mb-10 max-w-2xl text-lg leading-8 sm:text-xl',
              theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
            )}
          >
            {t('hero.description')}
          </motion.p>

          {/* Buttons */}
          <motion.div variants={heroFadeUp} className="flex flex-wrap items-center justify-center gap-3">
            <MagneticHover>
              <Link href="/projects">
                <NeonButton size="lg">
                  {t('hero.viewProjects')} <ArrowRight className="ml-2 h-4 w-4" />
                </NeonButton>
              </Link>
            </MagneticHover>
            <MagneticHover>
              <NeonButton
                href="https://github.com/Dream22180971"
                variant="pink"
                size="lg"
              >
                <GitBranch className="mr-2 h-4 w-4" /> {t('hero.github')}
              </NeonButton>
            </MagneticHover>
          </motion.div>
        </motion.div>

        {/* 底部滚动提示 */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className={clsx(
              'w-5 h-8 rounded-full border-2 flex justify-center pt-1.5',
              theme === 'dark' ? 'border-gray-600' : 'border-slate-400'
            )}
          >
            <motion.div
              className={clsx(
                'w-1 h-2 rounded-full',
                theme === 'dark' ? 'bg-gray-500' : 'bg-slate-500'
              )}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ========== STATS ========== */}
      <section className="px-4 py-14">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading title={t('stats.title')} />
          <ProjectStats />
        </motion.div>
      </section>

      {/* ========== FEATURED PROJECTS ========== */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={t('featured.title')} description={t('featured.description')} />

          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  delay: index * 0.12,
                  type: 'spring',
                  damping: 20,
                  stiffness: 80,
                }}
              >
                <MagneticHover>
                  <ProjectCard project={project} />
                </MagneticHover>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <MagneticHover>
              <Link href="/projects">
                <NeonButton>
                  {t('featured.viewAll')} <ArrowRight className="ml-2 h-4 w-4" />
                </NeonButton>
              </Link>
            </MagneticHover>
          </motion.div>
        </div>
      </section>

      {/* ========== TECH STACK ========== */}
      <section className={clsx(
        'px-4 py-16',
        theme === 'dark' ? 'border-t border-white/10' : 'border-t border-slate-200'
      )}>
        <div className="mx-auto max-w-4xl">
          <SectionHeading title={t('tech.title')} />

          <div className="flex flex-wrap justify-center gap-3">
            {tags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.6, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.03,
                  type: 'spring',
                  damping: 12,
                  stiffness: 120,
                }}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                  transition: { type: 'spring', stiffness: 400, damping: 15 },
                }}
                className="tag cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
