'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ProjectGrid } from '@/components/projects/project-grid';
import { ProjectFilter } from '@/components/projects/project-filter';
import { ProjectSearch } from '@/components/projects/project-search';
import { projects, getProjectsByCategory } from '@/data/projects';
import { useLanguage } from '@/contexts/language-context';
import { useTheme } from '@/contexts/theme-context';
import clsx from 'clsx';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useLanguage();
  const { theme } = useTheme();

  const filteredProjects = useMemo(() => {
    let result = getProjectsByCategory(selectedCategory);

    if (searchQuery) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className={clsx(
            'font-sans text-4xl md:text-5xl font-bold mb-4',
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          )}>
            {t('projects.title').toUpperCase()}
          </h1>
          <p className={clsx(
            'font-sans text-base',
            theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
          )}>
            {'>'} {projects.length} {t('projects.found')}_
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <ProjectSearch
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={t('projects.search')}
          />
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <ProjectFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </motion.div>

        {/* Projects Grid */}
        <ProjectGrid projects={filteredProjects} />
      </div>
    </div>
  );
}
