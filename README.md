# Project Showcase | Sean Walter 作品集

> 一个赛博朋克风格的个人项目展示站，中英文双语切换，丝滑动效，让你的作品被看见。

[![Live Demo](https://img.shields.io/badge/Live_Demo-seanwalter.top-00ffff?style=flat&logo=vercel)](https://project-showcase.seanwalter.top)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)](https://nextjs.org)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat)](./LICENSE)

[在线体验](https://project-showcase.seanwalter.top) · [博客](https://seanwalter.top) · [GitHub](https://github.com/Dream22180971/project-showcase)

---

## 目录

- [它是什么](#它是什么)
- [为什么做](#为什么做)
- [核心功能](#核心功能)
- [截图演示](#截图演示)
- [快速开始](#快速开始)
- [技术架构](#技术架构)
- [Roadmap](#roadmap)
- [FAQ](#faq)
- [谁适合用](#谁适合用)
- [关于我](#关于我)
- [License](#license)

---

## 它是什么

你可以用它来：

- **展示项目作品** —— 卡片式布局，悬停动效，让每个项目都有存在感
- **中英文自由切换** —— 一键切换，面向国内外访客
- **快速搭建作品集** —— 改 `projects.ts` 数据文件就能添加新项目，无需写代码

不需要设计能力，不需要部署经验，改配置就能用。

---

## 为什么做

市面上的个人作品集模板要么太素、要么太复杂。我想要一个：

- **有设计感** —— 赛博朋克暗色主题，不是千篇一律的白色卡片
- **动效丝滑** —— 页面过渡、悬停交互、滚动动画，体验不输大厂
- **国际化** —— 中英文一键切换，不用做两个站
- **数据驱动** —— 项目信息集中在 `projects.ts`，改数据就行

所以花了几天时间从零搭建，顺便把踩的坑记下来。

---

## 核心功能

| 功能 | 说明 |
|------|------|
| 🎨 赛博朋克主题 | 暗色 + 霓虹配色，支持亮色/暗色切换 |
| 🌐 中英文双语 | 语言偏好 localStorage 持久化，刷新不丢失 |
| ✨ 丝滑动效 | Hero 逐词揭示、卡片悬停遮罩、数字滚动计数、页面过渡 |
| 📱 响应式布局 | 移动端/平板/桌面端自适应 |
| 🔍 项目筛选 | 按分类过滤 + 关键词搜索 |
| 📊 数据统计 | 项目数/已部署/星标，数字滚动动画 |
| 🖱️ 磁吸悬停 | 3D 倾斜 + 缩放，交互有质感 |

---

## 截图演示

> 待部署后补充截图

| 首页 Hero | 精选项目 | 中文模式 |
|-----------|----------|----------|
| ![Hero](screenshots/hero.png) | ![Featured](screenshots/featured.png) | ![Chinese](screenshots/chinese.png) |

---

## 快速开始

3 步跑起来：

```bash
# 1. 克隆
git clone https://github.com/Dream22180971/project-showcase.git
cd project-showcase

# 2. 安装
npm install

# 3. 启动
npm run dev
```

打开 http://localhost:3000 就能看到界面了。

---

## 技术架构

```
project-showcase/
├── src/
│   ├── app/                    # 页面路由
│   │   ├── page.tsx            # 首页（Hero + 统计 + 精选项目 + 技术栈）
│   │   ├── about/page.tsx      # 关于页
│   │   ├── projects/           # 项目列表 + 详情
│   │   └── layout.tsx          # 根布局
│   ├── components/
│   │   ├── layout/             # 导航栏、页脚、全局壳
│   │   ├── projects/           # 卡片、筛选、搜索、统计
│   │   └── ui/                 # 通用组件（按钮、动效、主题切换）
│   ├── contexts/               # 主题 + 语言 Context
│   ├── data/projects.ts        # 项目数据（改这个文件添加项目）
│   └── types/project.ts        # TypeScript 类型定义
└── public/images/projects/     # 项目封面图
```

**关键设计决策：**

- **Framer Motion** —— 动效库，支持 spring 弹性动画和滚动触发动画
- **自定义 i18n** —— 不用 next-intl，轻量 Context + translations 字典，够用且零依赖
- **Tailwind CSS 4** —— 原子化 CSS，开发效率高
- **数据驱动** —— 所有项目信息集中在 `projects.ts`，新增项目只需加一行数据

---

## Roadmap

- [x] 中英文双语切换
- [x] 赛博朋克暗色主题
- [x] 卡片悬停动效
- [x] Hero 视差滚动 + 逐词揭示
- [x] 统计数字滚动计数
- [x] 页面切换过渡动画
- [x] 关于页
- [ ] 项目详情页长描述 Markdown 渲染
- [ ] 博客集成
- [ ] 搜索功能恢复（⌘K 快捷键）
- [ ] 性能优化（图片懒加载、代码分割）
- [ ] CI/CD 自动部署

---

## FAQ

**Q: 怎么添加新项目？**

打开 `src/data/projects.ts`，按照已有格式添加一条数据，包括标题、描述、链接、分类等。`en` 字段是英文翻译，不填则显示中文。

**Q: 怎么修改主题颜色？**

编辑 `src/app/globals.css` 中的 CSS 变量，`--neon-cyan` 是主色调，`--neon-pink` 是强调色。

**Q: 怎么部署到自己的域名？**

推到 GitHub 后在 Vercel 导入项目，绑定域名，在阿里云 DNS 加 CNAME 解析即可。

**Q: 为什么不用 next-intl？**

项目规模小，自定义 Context + 字典够用，零额外依赖，打包体积更小。

---

## 谁适合用

**适合：**
- 想搭建个人作品集的开发者
- 喜欢赛博朋克/暗色风格的设计师
- 需要中英文双语展示的独立开发者

**当前限制：**
- 项目数据需要手动改代码，没有后台管理
- 图片需要自己截图放到 `public/images/projects/`
- 没有 CMS 集成

---

## 关于我

我是 Sean Walter，一个从自动化测试转型 AI Agent 开发的工程师。正在用 AI 技术解决真实问题，构建 RAG 系统、智能代理和多模态应用。

- GitHub [Dream22180971](https://github.com/Dream22180971)
- Twitter/X [@sean_walter0717](https://x.com/sean_walter0717)
- 博客 [seanwalter.top](https://seanwalter.top)

---

## License

[MIT](./LICENSE) © 2026 Sean Walter
