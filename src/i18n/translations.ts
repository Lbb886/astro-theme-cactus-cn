export const translations = {
  // 导航和菜单
  'nav.home': '首页',
  'nav.about': '关于',
  'nav.blog': '博客',
  'nav.notes': '笔记',
  'nav.tags': '标签',
  
  // 搜索相关
  'search.open': '打开搜索',
  'search.close': '关闭',
  'search.placeholder': '搜索...',
  'search.notAvailable': '搜索功能仅在生产构建中可用。',
  'search.tryBuilding': '请尝试构建并预览网站以在本地测试。',
  
  // 分页
  'pagination.previous': '← 上一页',
  'pagination.next': '下一页 →',
  'pagination.prevLabel': '上一页',
  'pagination.nextLabel': '下一页',
  
  // 博客相关
  'blog.backToTop': '返回顶部',
  'blog.readingTime': '分钟阅读',
  'blog.tags': '标签',
  'blog.relatedPosts': '相关文章',
  'blog.publishedOn': '发布于',
  'blog.updatedOn': '更新于',
  
  // 页面标题和描述
  'page.about.title': '关于',
  'page.about.description': '我是一个 Astro.build 的入门主题',
  'page.posts.title': '文章',
  'page.posts.description': '阅读我的文章合集和我感兴趣的事物',
  'page.notes.title': '笔记',
  'page.notes.description': '快速的想法、提醒和代码片段',
  'page.tags.title': '标签',
  'page.tags.description': '浏览所有标签',
  
  // 错误页面
  'error.404.title': '页面未找到',
  'error.404.description': '抱歉，您访问的页面不存在。',
  'error.404.backHome': '返回首页',
  
  // 通用
  'common.skipToContent': '跳转到内容',
  'common.loading': '加载中...',
  'common.readMore': '阅读更多',
  'common.viewAll': '查看全部',
  
  // 网站信息
  'site.title': 'Astro Cactus',
  'site.description': '一个基于 Astro 的博客主题',
  'site.author': 'Chris Williams',
  
  // 关于页面内容
  'about.greeting': '你好，我是一个 Astro 入门主题。我特别适合帮助你开始构建自己的博客网站。',
  'about.features': '以下是我的一些出色的内置功能：',
  'about.feature.static': '我是超快的，因为我是一个静态网站',
  'about.feature.responsive': '我完全响应式',
  'about.feature.darkMode': '我带有浅色和深色模式',
  'about.feature.customizable': '我易于自定义和添加额外内容',
  'about.feature.tailwind': '我有 Tailwind CSS 样式',
  'about.feature.syntax': 'Shiki 代码语法高亮',
  'about.feature.ogImages': '使用 Satori 自动生成博客文章的 OG 图片',
  'about.cloneRepo': '如果你喜欢我，请克隆或分叉我的',
  'about.repository': '仓库',
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey): string {
  return translations[key];
}