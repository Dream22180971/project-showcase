import { Project, Category } from '@/types/project';

export const categories: Category[] = [
  { id: 'all', label: '全部' },
  { id: 'desktop', label: '桌面应用' },
  { id: 'web', label: '网站/Web' },
  { id: 'ai', label: 'AI/ML' },
  { id: 'tool', label: '工具' },
  { id: 'library', label: '开源库' },
  { id: 'learning', label: '学习项目' },
  { id: 'experiment', label: '实验' },
];

export const projects: Project[] = [
  // ============ 桌面应用 ============
  {
    id: 'yourentool',
    slug: 'yourentool',
    title: '游刃密码管理器',
    subtitle: 'v1.1.0',
    description: '本地密码管理器，AES-256加密，Tauri桌面应用',
    longDescription: `
## 功能特性

- AES-256-GCM 加密存储
- 本地优先，数据不上云
- 跨平台支持 (Windows/macOS/Linux)
- 自动填充密码
- 密码生成器

## 技术栈

- Tauri 2.0
- Rust
- React + TypeScript
- AES-256-GCM
    `,
    category: 'desktop',
    tags: ['Rust', 'Tauri', 'AES-256', 'React', 'TypeScript'],
    image: '/images/projects/yourentool-cover.png',
    links: {
      github: 'https://github.com/Dream22180971/YouRenTool',
      deploy: 'https://youren.seanwalter.top',
    },
    status: 'active',
    featured: true,
    featuredOrder: 1,
    stats: {
      stars: 156,
      forks: 23,
    },
    createdAt: '2025-02-20',
    updatedAt: '2026-05-19',
    en: {
      title: 'YouRen Password Manager',
      subtitle: 'v1.1.0',
      description: 'Local password manager with AES-256 encryption, built with Tauri',
      longDescription: `
## Features

- AES-256-GCM encrypted storage
- Local-first, data never leaves your device
- Cross-platform support (Windows/macOS/Linux)
- Auto-fill passwords
- Password generator

## Tech Stack

- Tauri 2.0
- Rust
- React + TypeScript
- AES-256-GCM
    `,
    },
  },

  // ============ 网站/Web应用 ============
  {
    id: 'portfolio-blog',
    slug: 'portfolio-blog',
    title: '个人博客',
    subtitle: "Sean Walter's Blog",
    description: '技术博客，分享AI开发、独立项目实战经验',
    longDescription: `
## 关于博客

个人技术博客，主要分享：
- AI开发实战
- 独立项目经验
- 技术踩坑记录

## 技术栈

- Next.js 16
- TypeScript
- Tailwind CSS
- MDX
    `,
    category: 'web',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
    image: '/images/projects/blog-cover.png',
    links: {
      github: 'https://github.com/Dream22180971/my-portfolio-blog',
      deploy: 'https://seanwalter.top',
    },
    status: 'active',
    featured: false,
    createdAt: '2025-04-28',
    en: {
      title: 'Personal Blog',
      subtitle: "Sean Walter's Blog",
      description: 'Tech blog sharing AI development and indie project experiences',
      longDescription: `
## About the Blog

A personal tech blog focused on:
- AI development in practice
- Indie project experiences
- Technical lessons learned

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS
- MDX
    `,
    },
  },

  {
    id: 'animation-museum',
    slug: 'animation-memory-museum',
    title: '00后动画记忆馆',
    subtitle: '国产动画数字博物馆',
    description: '国产动画数字记忆博物馆，CRT/vaporwave怀旧风格',
    longDescription: `
## 项目简介

一个致敬00后童年回忆的数字博物馆，收录经典国产动画。

## 特色

- CRT扫描线效果
- Vaporwave视觉风格
- 流畅的Framer Motion动画

## 技术栈

- Next.js 16
- Framer Motion
- Swiper
    `,
    category: 'web',
    tags: ['Next.js', 'Framer Motion', 'Swiper', 'TypeScript'],
    image: '/images/projects/museum-cover.png',
    links: {
      github: 'https://github.com/Dream22180971/animation-memory-museum',
      deploy: 'https://animation-memory-museum.seanwalter.top',
    },
    status: 'active',
    featured: true,
    featuredOrder: 3,
    createdAt: '2026-05-28',
    en: {
      title: 'Animation Memory Museum',
      subtitle: 'Chinese Animation Digital Museum',
      description: 'Digital museum for Chinese animation memories, CRT/vaporwave retro style',
      longDescription: `
## Overview

A tribute to the childhood memories of the post-00s generation, featuring classic Chinese animations.

## Highlights

- CRT scanline effects
- Vaporwave visual style
- Smooth Framer Motion animations

## Tech Stack

- Next.js 16
- Framer Motion
- Swiper
    `,
    },
  },

  {
    id: 'yourentool-website',
    slug: 'yourentool-website',
    title: '游刃官网',
    subtitle: '产品落地页',
    description: '游刃密码管理器的产品官网和下载页',
    category: 'web',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    image: '/images/projects/yourentool-web-cover.png',
    links: {
      deploy: 'https://yourentool-website.seanwalter.top',
      github: 'https://github.com/Dream22180971/YouRenTool-Website',
    },
    status: 'active',
    featured: false,
    createdAt: '2025-05-12',
    en: {
      title: 'YouRen Website',
      subtitle: 'Product Landing Page',
      description: 'Product landing page and download page for YouRen Password Manager',
    },
  },

  // ============ AI项目 ============
  {
    id: 'testpilot-agent',
    slug: 'testpilot-agent',
    title: 'TestPilot Agent',
    subtitle: 'AI测试代理',
    description: 'AI驱动的自动化测试代理，智能生成和执行测试用例',
    category: 'ai',
    tags: ['Python', 'AI', 'Testing', 'Automation'],
    image: '/images/projects/testpilot-cover.png',
    links: {
      github: 'https://github.com/Dream22180971/TestPilotAgent',
    },
    status: 'active',
    featured: false,
    createdAt: '2026-05-19',
    en: {
      title: 'TestPilot Agent',
      subtitle: 'AI Testing Agent',
      description: 'AI-driven automated testing agent that intelligently generates and executes test cases',
    },
  },

  {
    id: 'voyage-ai',
    slug: 'voyage-ai',
    title: 'VoyageAI',
    subtitle: 'AI探索项目',
    description: 'AI技术探索和实验项目',
    category: 'ai',
    tags: ['Python', 'AI', 'Machine Learning'],
    image: '/images/projects/voyage-cover.png',
    links: {
      github: 'https://github.com/Dream22180971/VoyageAI',
      deploy: 'https://voyageai.seanwalter.top',
    },
    status: 'active',
    featured: true,
    featuredOrder: 2,
    createdAt: '2026-05-19',
    en: {
      title: 'VoyageAI',
      subtitle: 'AI Exploration Project',
      description: 'AI technology exploration and experimentation project',
    },
  },

  {
    id: 'coze-ecommerce-bot',
    slug: 'coze-ecommerce-bot',
    title: 'Coze电商机器人',
    subtitle: 'AI电商助手',
    description: '基于Coze平台的电商智能客服机器人',
    category: 'ai',
    tags: ['Coze', 'AI', 'E-commerce', 'Chatbot'],
    image: '/images/projects/coze-cover.png',
    links: {
      github: 'https://github.com/Dream22180971/coze-ecommerce-bot',
    },
    status: 'active',
    featured: false,
    createdAt: '2026-05-19',
    en: {
      title: 'Coze E-commerce Bot',
      subtitle: 'AI E-commerce Assistant',
      description: 'E-commerce chatbot based on Coze platform',
    },
  },

  {
    id: 'rag-knowledge-base',
    slug: 'rag-knowledge-base',
    title: 'RAG知识库Demo',
    subtitle: '检索增强生成',
    description: 'RAG检索增强生成知识库演示项目',
    category: 'ai',
    tags: ['Python', 'RAG', 'Vector DB', 'LLM'],
    image: '/images/projects/rag-cover.png',
    links: {
      github: 'https://github.com/Dream22180971/rag-knowledge-base-demo',
    },
    status: 'wip',
    featured: false,
    createdAt: '2026-05-19',
    en: {
      title: 'RAG Knowledge Base Demo',
      subtitle: 'Retrieval-Augmented Generation',
      description: 'RAG knowledge base demonstration project',
    },
  },

  // ============ 工具 ============
  {
    id: 'operation-assistant',
    slug: 'operation-assistant',
    title: '运营助手',
    subtitle: '自动化工具',
    description: '内容运营自动化辅助工具',
    category: 'tool',
    tags: ['Python', 'Automation', 'Tool'],
    image: '/images/projects/operation-cover.png',
    links: {
      github: 'https://github.com/Dream22180971/operation-assistant',
    },
    status: 'active',
    featured: false,
    createdAt: '2026-05-19',
    en: {
      title: 'Operation Assistant',
      subtitle: 'Automation Tool',
      description: 'Content operation automation assistant tool',
    },
  },

  // ============ 学习项目 ============
  {
    id: 'baiyue-medical',
    slug: 'baiyue-medical',
    title: '百悦医疗销售系统',
    subtitle: '学习项目',
    description: '医疗销售管理系统学习项目',
    category: 'learning',
    tags: ['Java', 'Spring', 'MySQL'],
    image: '/images/projects/baiyue-cover.png',
    links: {
      github: 'https://github.com/Dream22180971/BaiyueMedicalSalesSystemTest',
    },
    status: 'archived',
    featured: false,
    createdAt: '2025-05-19',
    en: {
      title: 'Baiyue Medical Sales System',
      subtitle: 'Learning Project',
      description: 'Medical sales management system learning project',
    },
  },

  {
    id: 'food-menu-app',
    slug: 'food-menu-app',
    title: 'Food Menu App',
    subtitle: '学习项目',
    description: '美食菜单应用，React入门项目',
    category: 'learning',
    tags: ['React', 'JavaScript', 'CSS'],
    image: '/images/projects/food-cover.png',
    links: {
      github: 'https://github.com/Dream22180971/food-menu-app',
      demo: 'https://food-menu-app.vercel.app',
    },
    status: 'archived',
    featured: false,
    createdAt: '2025-05-19',
    en: {
      title: 'Food Menu App',
      subtitle: 'Learning Project',
      description: 'Food menu application, a React learning project',
    },
  },
];

// ============ 辅助函数 ============

export const getFeaturedProjects = () =>
  projects
    .filter(p => p.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));

export const getProjectsByCategory = (category: string) =>
  category === 'all'
    ? projects
    : projects.filter(p => p.category === category);

export const searchProjects = (query: string) => {
  const lower = query.toLowerCase();
  return projects.filter(p =>
    p.title.toLowerCase().includes(lower) ||
    p.description.toLowerCase().includes(lower) ||
    p.tags.some(t => t.toLowerCase().includes(lower))
  );
};

export const getProjectBySlug = (slug: string) =>
  projects.find(p => p.slug === slug);

export const getAllTags = () => {
  const tags = new Set<string>();
  projects.forEach(p => p.tags.forEach(t => tags.add(t)));
  return Array.from(tags).sort();
};

export const getStats = () => ({
  totalProjects: projects.length,
  deployedProjects: projects.filter(p => p.links.deploy).length,
  totalStars: projects.reduce((acc, p) => acc + (p.stats?.stars ?? 0), 0),
});
