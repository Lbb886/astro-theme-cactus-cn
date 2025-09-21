---
title: "Astro 静态网站生成器入门指南"
publishDate: "2025-01-15 10:30:00"
description: "了解如何使用 Astro 构建快速、现代的静态网站，探索其独特的岛屿架构和组件系统"
tags: ["astro", "静态网站", "前端开发", "教程"]
---

## 什么是 Astro？

Astro 是一个现代的静态网站生成器，专为构建快速、内容丰富的网站而设计。它的核心理念是"默认发送更少的 JavaScript"，这意味着你的网站将拥有出色的性能。

### 主要特性

- **零 JavaScript 默认策略**：Astro 默认生成完全静态的 HTML，只在需要时才添加交互性
- **岛屿架构**：可以在静态页面中嵌入动态的组件"岛屿"
- **多框架支持**：同一个项目中可以使用 React、Vue、Svelte 等多种框架
- **优秀的开发体验**：快速的热重载、TypeScript 支持、内置优化

## 快速开始

### 1. 创建新项目

```bash
npm create astro@latest my-astro-site
cd my-astro-site
npm install
npm run dev
```

### 2. 项目结构

```
src/
├── components/     # 组件文件
├── layouts/       # 布局模板
├── pages/         # 页面文件
└── styles/        # 样式文件
```

### 3. 创建第一个页面

在 `src/pages/` 目录下创建 `.astro` 文件即可自动生成路由：

```astro
---
// 组件脚本（在构建时运行）
const title = "我的第一个 Astro 页面";
---

<html>
  <head>
    <title>{title}</title>
  </head>
  <body>
    <h1>{title}</h1>
    <p>欢迎来到 Astro！</p>
  </body>
</html>
```

## Astro 组件语法

Astro 组件使用类似 JSX 的语法，但有一些独特的特性：

### 组件脚本

```astro
---
// 这里的代码在构建时运行，不会发送到浏览器
import Layout from '../layouts/Layout.astro';
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');
const title = "我的博客";
---
```

### 模板语法

```astro
<Layout title={title}>
  <h1>最新文章</h1>
  <ul>
    {posts.map(post => (
      <li>
        <a href={`/blog/${post.slug}`}>{post.data.title}</a>
      </li>
    ))}
  </ul>
</Layout>
```

## 内容集合

Astro 的内容集合功能让管理博客文章、产品页面等结构化内容变得简单：

### 1. 定义内容集合

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};
```

### 2. 创建内容

```markdown
---
title: "我的第一篇博客"
description: "这是一篇测试文章"
publishDate: 2025-01-15
tags: ["astro", "博客"]
---

# 文章内容

这里是 Markdown 格式的文章内容。
```

## 性能优化

Astro 内置了许多性能优化功能：

- **自动图片优化**：`<Image />` 组件自动优化图片
- **CSS 作用域**：组件级别的 CSS 自动作用域隔离
- **代码分割**：自动按路由分割 JavaScript 代码
- **预取链接**：自动预取页面链接提升导航速度

## 部署

Astro 可以部署到任何支持静态文件的平台：

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

常用部署平台：
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 总结

Astro 是一个强大且易用的静态网站生成器，特别适合：

- 内容丰富的网站（博客、文档、营销页面）
- 需要高性能的项目
- 多框架混合使用的场景
- 希望减少 JavaScript 包大小的项目

开始你的 Astro 之旅吧！🚀