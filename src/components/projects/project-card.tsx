'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Globe, Eye } from 'lucide-react';

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

import { Project } from '@/types/project';
import { GlowCard } from '@/components/ui/glow-card';
import { useTheme } from '@/contexts/theme-context';
import { useLanguage } from '@/contexts/language-context';
import clsx from 'clsx';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const { theme } = useTheme();
  const { t, language } = useLanguage();

  const statusConfig = {
    active: { label: t('card.status.active'), color: 'text-neon-green', dot: 'bg-neon-green' },
    wip: { label: t('card.status.wip'), color: 'text-neon-yellow', dot: 'bg-neon-yellow' },
    archived: { label: t('card.status.archived'), color: 'text-gray-500', dot: 'bg-gray-500' },
  };

  const displayTitle = language === 'en' ? (project.en?.title ?? project.title) : project.title;
  const displaySubtitle = language === 'en' ? (project.en?.subtitle ?? project.subtitle) : project.subtitle;
  const displayDescription = language === 'en' ? (project.en?.description ?? project.description) : project.description;

  const status = statusConfig[project.status];
  const showImage = Boolean(project.image && !imageFailed);
  const detailLink = project.links.deploy || project.links.github;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring' as const, stiffness: 400, damping: 25 }}
    >
      <GlowCard className="group/card relative flex h-full flex-col overflow-hidden">
        {/* ===== 封面区域 ===== */}
        <div className={clsx(
          'card-cover relative mb-5 h-48 overflow-hidden rounded-md border',
          theme === 'dark'
            ? 'border-white/10 bg-[#0f1419]'
            : 'border-gray-200 bg-gray-50'
        )}>
          {/* 图片 — 悬停缩放 */}
          {showImage && (
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
              onError={() => setImageFailed(true)}
            />
          )}

          {/* 默认渐变 */}
          <div className={clsx(
            'absolute inset-0 transition-opacity duration-500',
            showImage
              ? 'bg-gradient-to-t from-black/80 via-black/30 to-transparent'
              : 'bg-[radial-gradient(circle_at_20%_10%,rgba(69,215,230,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent)]'
          )} />

          {/* 默认内容 — 悬停淡出 */}
          <div className="absolute inset-0 flex flex-col justify-between p-4 transition-opacity duration-400 group-hover/card:opacity-0">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-neon-pink/80" />
              <span className="h-2 w-2 rounded-full bg-neon-yellow/80" />
              <span className="h-2 w-2 rounded-full bg-neon-green/80" />
            </div>
            <div className="flex items-end justify-between">
              <p className={clsx(
                'font-sans text-xs uppercase tracking-wider font-medium',
                showImage ? 'text-white/70' : 'text-gray-500'
              )}>
                {project.category}
              </p>
              <div className={clsx(
                'flex items-center gap-1.5 rounded-full px-2.5 py-1',
                'font-sans text-xs font-semibold backdrop-blur-sm',
                theme === 'dark' ? 'bg-black/65' : 'bg-white/75',
                status.color
              )}>
                <span className={clsx('h-1.5 w-1.5 rounded-full', status.dot)} />
                {status.label}
              </div>
            </div>
          </div>

          {/* ===== 悬停覆盖层 — 参考 4kvm 效果 ===== */}
          <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />

          {/* 悬停内容 — 从下方滑入 */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 translate-y-3 transition-all duration-500 ease-out group-hover/card:opacity-100 group-hover/card:translate-y-0">
            <p className={clsx(
              'mb-2 font-sans text-xs uppercase tracking-wider font-medium',
              'text-white/60'
            )}>
              {project.category}
            </p>
            <h3 className={clsx(
              'mb-2 font-sans text-xl font-bold text-white leading-tight'
            )}>
              {displayTitle}
              {displaySubtitle && (
                <span className="ml-2 text-sm font-normal text-white/60">{displaySubtitle}</span>
              )}
            </h3>
            <p className={clsx(
              'mb-3 line-clamp-2 text-sm leading-5',
              'text-white/70'
            )}>
              {displayDescription}
            </p>
            <div className="flex items-center gap-3">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 font-sans text-xs font-medium text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/25"
                >
                  <ExternalLink className="h-3 w-3" />
                  {t('card.demo')}
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 font-sans text-xs font-medium text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/25"
                >
                  <GitHubIcon className="h-3 w-3" />
                  {t('card.code')}
                </a>
              )}
              {project.links.deploy && (
                <a
                  href={project.links.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 font-sans text-xs font-medium text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/25"
                >
                  <Globe className="h-3 w-3" />
                  {t('card.site')}
                </a>
              )}
            </div>
          </div>

          {/* 悬停光效扫过 */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-1000 group-hover/card:translate-x-full" />
          </div>
        </div>

        {/* ===== 底部常驻内容 ===== */}
        <div className="flex-1">
          <h3 className={clsx(
            'mb-1 font-sans text-lg font-bold transition-colors duration-300',
            theme === 'dark'
              ? 'text-white group-hover/card:text-neon-cyan'
              : 'text-gray-900 group-hover/card:text-teal-700'
          )}>
            {displayTitle}
            {displaySubtitle && (
              <span className={clsx(
                'ml-2 text-sm font-normal',
                theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
              )}>{displaySubtitle}</span>
            )}
          </h3>
          <p className={clsx(
            'line-clamp-2 text-sm leading-6',
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          )}>
            {displayDescription}
          </p>
        </div>
      </GlowCard>
    </motion.div>
  );
}
