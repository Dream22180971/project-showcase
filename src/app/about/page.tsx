'use client';

import { motion } from 'framer-motion';
import { Terminal, Mail, MapPin, Briefcase, Cpu, Rocket } from 'lucide-react';

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}
import { NeonButton } from '@/components/ui/neon-button';
import { useLanguage } from '@/contexts/language-context';
import { useTheme } from '@/contexts/theme-context';
import clsx from 'clsx';

export default function AboutPage() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  const isZh = language === 'zh';

  const highlights = isZh ? [
    { icon: Briefcase, label: '自动化测试 → AI Agent 开发' },
    { icon: Cpu, label: 'RAG · LLM · 多模态 · 智能自动化' },
    { icon: Rocket, label: 'Python / TypeScript / FastAPI / LangChain' },
  ] : [
    { icon: Briefcase, label: 'Automation Testing → AI Agent Developer' },
    { icon: Cpu, label: 'RAG · LLM · Multimodal · Smart Automation' },
    { icon: Rocket, label: 'Python / TypeScript / FastAPI / LangChain' },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className={clsx(
            'flex items-center gap-4 mb-6',
          )}>
            <div className={clsx(
              'flex items-center justify-center w-16 h-16 rounded-2xl',
              theme === 'dark'
                ? 'bg-neon-cyan/10 border border-neon-cyan/20'
                : 'bg-teal-50 border border-teal-200'
            )}>
              <Terminal className={clsx(
                'w-8 h-8',
                theme === 'dark' ? 'text-neon-cyan' : 'text-teal-700'
              )} />
            </div>
            <div>
              <h1 className={clsx(
                'font-sans text-4xl font-bold',
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              )}>
                {isZh ? '关于我' : 'About Me'}
              </h1>
              <p className={clsx(
                'font-sans text-lg mt-1',
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              )}>
                Sean Walter
              </p>
            </div>
          </div>

          <div className={clsx(
            'flex items-center gap-4 text-sm',
            theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
          )}>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {isZh ? '南京' : 'Nanjing, China'}
            </span>
            <span className="flex items-center gap-1.5">
              <GitHubIcon className="w-4 h-4" />
              Dream22180971
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4" />
              contact@seanwalter.top
            </span>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={clsx(
            'mb-10 p-6 rounded-xl border',
            theme === 'dark'
              ? 'bg-white/[0.03] border-white/10'
              : 'bg-white/80 border-slate-200 shadow-sm'
          )}
        >
          <p className={clsx(
            'font-sans text-lg leading-8',
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          )}>
            {isZh
              ? '从自动化测试工程师转型 AI Agent 开发者。热衷于用 AI 技术解决真实问题，正在构建 RAG 系统、智能代理和多模态应用。相信技术的价值在于让事情变得更简单。'
              : 'Transitioning from automation testing to AI Agent development. Passionate about using AI to solve real problems — building RAG systems, intelligent agents, and multimodal applications. I believe technology\'s value lies in making things simpler.'}
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={clsx(
                'flex items-center gap-3 p-4 rounded-xl border',
                theme === 'dark'
                  ? 'bg-white/[0.03] border-white/10'
                  : 'bg-white/80 border-slate-200 shadow-sm'
              )}
            >
              <item.icon className={clsx(
                'w-5 h-5 shrink-0',
                theme === 'dark' ? 'text-neon-cyan' : 'text-teal-700'
              )} />
              <span className={clsx(
                'font-sans text-sm',
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              )}>
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          <NeonButton href="https://github.com/Dream22180971">
            <GitHubIcon className="w-4 h-4 mr-2" /> GitHub
          </NeonButton>
          <NeonButton href="https://seanwalter.top" variant="pink">
            {isZh ? '访问博客' : 'Visit Blog'}
          </NeonButton>
        </motion.div>
      </div>
    </div>
  );
}
