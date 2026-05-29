export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  tags: string[];
  image: string;
  images?: string[];
  links: ProjectLinks;
  status: 'active' | 'archived' | 'wip';
  featured: boolean;
  featuredOrder?: number;
  stats?: ProjectStats;
  createdAt: string;
  updatedAt?: string;
  en?: {
    title?: string;
    subtitle?: string;
    description?: string;
    longDescription?: string;
  };
}

export interface ProjectLinks {
  demo?: string;
  github?: string;
  deploy?: string;
  docs?: string;
  blog?: string;
  download?: string;
}

export interface ProjectStats {
  stars?: number;
  forks?: number;
  downloads?: number;
}

export type ProjectCategory =
  | 'desktop'
  | 'web'
  | 'ai'
  | 'tool'
  | 'library'
  | 'learning'
  | 'experiment'
  | 'mobile'
  | 'backend';

export interface Category {
  id: string | 'all';
  label: string;
}
