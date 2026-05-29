'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'HOME',
    'nav.projects': 'PROJECTS',
    'nav.about': 'ABOUT',

    'hero.eyebrow': 'Personal project portfolio',
    'hero.title': 'Sean Walter Projects',
    'hero.description': 'A focused showcase of desktop apps, web products, AI tools, and experiments I build and ship.',
    'hero.viewProjects': 'VIEW PROJECTS',
    'hero.github': 'GITHUB',

    'stats.title': '// STATS',
    'stats.projects': 'Projects',
    'stats.deployed': 'Deployed',
    'stats.stars': 'Stars',

    'featured.title': '// FEATURED PROJECTS',
    'featured.description': 'Selected projects with live links, source code, and enough context to understand what was shipped.',
    'featured.viewAll': 'VIEW ALL PROJECTS',

    'tech.title': '// TECH STACK',

    'projects.title': 'PROJECTS',
    'projects.found': 'projects found',
    'projects.search': 'Search projects...',

    'project.back': 'BACK TO PROJECTS',
    'project.demo': 'DEMO',
    'project.code': 'SOURCE CODE',
    'project.site': 'LIVE SITE',
    'project.related': '// RELATED PROJECTS',
    'project.notFound': 'Project not found',

    'hero.badge': 'AI Developer · Indie Maker · QA',

    'card.status.active': 'ACTIVE',
    'card.status.wip': 'WIP',
    'card.status.archived': 'ARCHIVED',
    'card.demo': 'DEMO',
    'card.code': 'CODE',
    'card.site': 'SITE',

    'grid.empty': 'No projects found_',

    'search.placeholder': 'Search projects...',
    'search.close': 'Close',

    'detail.stars': 'stars',
    'detail.forks': 'forks',

    'footer.built': 'Built with',
    'footer.rights': 'All rights reserved.',

    'category.all': 'All',
    'category.desktop': 'Desktop',
    'category.web': 'Web',
    'category.ai': 'AI/ML',
    'category.tool': 'Tools',
    'category.library': 'Libraries',
    'category.learning': 'Learning',
    'category.experiment': 'Experiments',
  },
  zh: {
    'nav.home': '\u9996\u9875',
    'nav.projects': '\u9879\u76ee',
    'nav.about': '\u5173\u4e8e',

    'hero.eyebrow': '\u4e2a\u4eba\u9879\u76ee\u4f5c\u54c1\u96c6',
    'hero.title': 'Sean Walter \u4f5c\u54c1\u96c6',
    'hero.description': '\u5c55\u793a\u6211\u6b63\u5728\u6784\u5efa\u548c\u4ea4\u4ed8\u7684\u684c\u9762\u5e94\u7528\u3001Web \u4ea7\u54c1\u3001AI \u5de5\u5177\u548c\u5b9e\u9a8c\u9879\u76ee\u3002',
    'hero.viewProjects': '\u67e5\u770b\u9879\u76ee',
    'hero.github': 'GitHub',

    'stats.title': '// \u6570\u636e\u7edf\u8ba1',
    'stats.projects': '\u9879\u76ee',
    'stats.deployed': '\u5df2\u90e8\u7f72',
    'stats.stars': '\u661f\u6807',

    'featured.title': '// \u7cbe\u9009\u9879\u76ee',
    'featured.description': '\u7cbe\u9009\u5df2\u4ea4\u4ed8\u6216\u6b63\u5728\u8fed\u4ee3\u7684\u9879\u76ee\uff0c\u5c55\u793a\u5728\u7ebf\u94fe\u63a5\u3001\u4ee3\u7801\u548c\u5b9e\u9645\u6784\u5efa\u80cc\u666f\u3002',
    'featured.viewAll': '\u67e5\u770b\u5168\u90e8\u9879\u76ee',

    'tech.title': '// \u6280\u672f\u6808',

    'projects.title': '\u9879\u76ee',
    'projects.found': '\u4e2a\u9879\u76ee',
    'projects.search': '\u641c\u7d22\u9879\u76ee...',

    'project.back': '\u8fd4\u56de\u9879\u76ee\u5217\u8868',
    'project.demo': '\u6f14\u793a',
    'project.code': '\u6e90\u4ee3\u7801',
    'project.site': '\u5728\u7ebf\u8bbf\u95ee',
    'project.related': '// \u76f8\u5173\u9879\u76ee',
    'project.notFound': '\u9879\u76ee\u672a\u627e\u5230',

    'footer.built': '\u4f7f\u7528',
    'footer.rights': '\u4fdd\u7559\u6240\u6709\u6743\u5229\u3002',

    'hero.badge': 'AI \u5f00\u53d1\u8005 \u00b7 \u72ec\u7acb\u521b\u4f5c\u8005 \u00b7 \u6d4b\u8bd5\u5de5\u7a0b\u5e08',

    'card.status.active': '\u6d3b\u8dc3',
    'card.status.wip': '\u5f00\u53d1\u4e2d',
    'card.status.archived': '\u5df2\u5f52\u6863',
    'card.demo': '\u6f14\u793a',
    'card.code': '\u4ee3\u7801',
    'card.site': '\u7f51\u7ad9',

    'grid.empty': '\u6ca1\u6709\u627e\u5230\u9879\u76ee_',

    'search.placeholder': '\u641c\u7d22\u9879\u76ee...',
    'search.close': '\u5173\u95ed',

    'detail.stars': '\u661f\u6807',
    'detail.forks': '\u5206\u652f',

    'category.all': '\u5168\u90e8',
    'category.desktop': '\u684c\u9762\u5e94\u7528',
    'category.web': '\u7f51\u7ad9/Web',
    'category.ai': 'AI/\u673a\u5668\u5b66\u4e60',
    'category.tool': '\u5de5\u5177',
    'category.library': '\u5f00\u6e90\u5e93',
    'category.learning': '\u5b66\u4e60\u9879\u76ee',
    'category.experiment': '\u5b9e\u9a8c',
  },
} as const;

const defaultTranslations = translations.en;

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
  t: (key: string) => defaultTranslations[key as keyof typeof defaultTranslations] || key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // 从 localStorage 恢复语言偏好
  useEffect(() => {
    const saved = window.localStorage.getItem('language') as Language | null;
    if (saved && (saved === 'en' || saved === 'zh')) {
      setLanguage(saved);
      document.documentElement.lang = saved === 'zh' ? 'zh-CN' : 'en';
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('language', language);
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof defaultTranslations] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
