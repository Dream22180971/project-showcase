'use client';

import { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, GitBranch, Globe, Star, GitFork, Calendar } from 'lucide-react';
import { getProjectBySlug, getFeaturedProjects } from '@/data/projects';
import { GlowCard } from '@/components/ui/glow-card';
import { NeonButton } from '@/components/ui/neon-button';
import { Tag } from '@/components/ui/tag';
import { useLanguage } from '@/contexts/language-context';
import { useTheme } from '@/contexts/theme-context';
import clsx from 'clsx';

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className={clsx(
            'font-mono text-4xl mb-4',
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          )}>404</h1>
          <p className={clsx(
            'font-mono mb-8',
            theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
          )}>{'>'} {t('project.notFound')}_</p>
          <Link href="/projects">
            <NeonButton>{t('project.back')}</NeonButton>
          </Link>
        </div>
      </div>
    );
  }

  const statusConfig = {
    active: { label: t('card.status.active'), color: 'text-neon-green', dot: 'bg-neon-green animate-pulse' },
    wip: { label: t('card.status.wip'), color: 'text-neon-yellow', dot: 'bg-neon-yellow' },
    archived: { label: t('card.status.archived'), color: 'text-gray-500', dot: 'bg-gray-500' },
  };

  const displayTitle = language === 'en' ? (project.en?.title ?? project.title) : project.title;
  const displaySubtitle = language === 'en' ? (project.en?.subtitle ?? project.subtitle) : project.subtitle;
  const displayDescription = language === 'en' ? (project.en?.description ?? project.description) : project.description;
  const displayLongDescription = language === 'en' ? (project.en?.longDescription ?? project.longDescription) : project.longDescription;

  const status = statusConfig[project.status];

  const relatedProjects = getFeaturedProjects()
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className={clsx(
              'inline-flex items-center gap-2 transition-colors font-sans text-sm font-medium',
              theme === 'dark'
                ? 'text-gray-400 hover:text-neon-cyan'
                : 'text-gray-600 hover:text-cyan-600'
            )}
          >
            <ArrowLeft className="w-4 h-4" />
            {t('project.back')}
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <GlowCard className="mb-8">
            {/* 项目图片 */}
            <div className={clsx(
              'relative h-64 mb-6 overflow-hidden rounded',
              theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
            )}>
              <div className={clsx(
                'absolute inset-0 flex items-center justify-center font-mono',
                theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
              )}>
                [ {displayTitle} ]
              </div>
              <div className={clsx(
                'absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5',
                'backdrop-blur-sm rounded text-xs font-sans font-semibold',
                theme === 'dark' ? 'bg-black/60' : 'bg-white/60',
                status.color
              )}>
                <span className={clsx('w-2 h-2 rounded-full', status.dot)} />
                {status.label}
              </div>
            </div>

            {/* 项目信息 */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h1 className={clsx(
                  'font-sans text-3xl font-bold mb-2',
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                )}>
                  {displayTitle}
                  {displaySubtitle && (
                    <span className={clsx(
                      'text-lg ml-3 font-normal',
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                    )}>{displaySubtitle}</span>
                  )}
                </h1>
                <p className={clsx(
                  'text-lg leading-7',
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                )}>{displayDescription}</p>
              </div>
            </div>

            {/* 技术标签 */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            {/* 统计信息 */}
            {project.stats && (
              <div className={clsx(
                'flex items-center gap-6 text-sm font-sans mb-6',
                theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
              )}>
                {project.stats.stars !== undefined && (
                  <span className="flex items-center gap-2">
                    <Star className={clsx(
                      'w-4 h-4',
                      theme === 'dark' ? 'text-neon-yellow' : 'text-amber-500'
                    )} />
                    {project.stats.stars} {t('detail.stars')}
                  </span>
                )}
                {project.stats.forks !== undefined && (
                  <span className="flex items-center gap-2">
                    <GitFork className="w-4 h-4" />
                    {project.stats.forks} {t('detail.forks')}
                  </span>
                )}
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {project.createdAt}
                </span>
              </div>
            )}

            {/* 操作按钮 */}
            <div className="flex flex-wrap gap-4">
              {project.links.demo && (
                <NeonButton href={project.links.demo}>
                  <ExternalLink className="w-4 h-4 mr-2" /> {t('project.demo')}
                </NeonButton>
              )}
              {project.links.github && (
                <NeonButton href={project.links.github} variant="pink">
                  <GitBranch className="w-4 h-4 mr-2" /> {t('project.code')}
                </NeonButton>
              )}
              {project.links.deploy && (
                <NeonButton href={project.links.deploy} variant="green">
                  <Globe className="w-4 h-4 mr-2" /> {t('project.site')}
                </NeonButton>
              )}
            </div>
          </GlowCard>
        </motion.div>

        {/* 长描述 */}
        {displayLongDescription && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlowCard className="mb-8">
              <div className="max-w-none">
                <div className={clsx(
                  'whitespace-pre-wrap font-sans text-base leading-7',
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                )}>
                  {displayLongDescription}
                </div>
              </div>
            </GlowCard>
          </motion.div>
        )}

        {/* 相关项目 */}
        {relatedProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className={clsx(
              'font-sans text-sm uppercase tracking-widest mb-6 font-semibold',
              theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
            )}>
              {t('project.related')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedProjects.map((p) => (
                <Link key={p.id} href={`/projects/${p.slug}`}>
                  <GlowCard className="h-full">
                    <h3 className={clsx(
                      'font-sans font-bold mb-2',
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    )}>{language === 'en' ? (p.en?.title ?? p.title) : p.title}</h3>
                    <p className={clsx(
                      'text-sm line-clamp-2',
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                    )}>{language === 'en' ? (p.en?.description ?? p.description) : p.description}</p>
                  </GlowCard>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
