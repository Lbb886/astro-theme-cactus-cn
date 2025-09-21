export const translations = {
  // 导航和菜单
  'nav.home': '首页',
  'nav.about': '关于',
  'nav.blog': '博客',
  'nav.notes': '笔记',
  
  // 搜索相关
  'search.open': '打开搜索',
  'search.close': '关闭',
  'search.placeholder': '搜索...',
  'search.notAvailable': '搜索功能仅在生产构建中可用。',
  'search.tryBuilding': '请尝试构建并预览网站以在本地测试。',
  
  // 分页
  'pagination.prevLabel': '上一页',
  'pagination.nextLabel': '下一页',
  
  // 博客相关
  'blog.backToTop': '返回顶部',
  'blog.readingTime': '分钟阅读',
  'blog.updatedOn': '更新于',
  
  // 文章导航
  'post.prevPost': '上一篇',
  'post.nextPost': '下一篇',
  'post.relatedPosts': '相关文章',
  
  // 错误页面
  'error.404.title': '页面未找到',
  'error.404.description': '抱歉，您访问的页面不存在。',
  
  // 通用
  'common.skipToContent': '跳转到内容',
  'common.viewAll': '查看全部',
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, params?: Record<string, string>): string {
  let text: string = translations[key];
  
  if (params) {
    for (const [paramKey, paramValue] of Object.entries(params)) {
      text = text.replace(`{${paramKey}}`, paramValue);
    }
  }
  
  return text;
}