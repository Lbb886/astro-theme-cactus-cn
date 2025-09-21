---
title: "社交图片示例"
publishDate: "27 January 2023"
description: "这是一篇 Astro Cactus 的示例文章，详细说明如何在前置信息中添加自定义社交图片卡片"
tags: ["示例", "博客", "图片"]
ogImage: "/social-card.png"
---

## 为文章添加您自己的社交图片

这篇文章是如何为博客文章添加自定义 [开放图协议](https://ogp.me/) 社交图片（也称为 OG 图片）的示例。
通过在文章的前置信息中添加可选的 ogImage 属性，您可以选择不使用 [satori](https://github.com/vercel/satori) 自动为此页面生成图片。

如果您打开这个 markdown 文件 `src/content/post/social-image.md`，您会看到 ogImage 属性设置为一个位于 public 文件夹中的图片[^1]。

```yaml
ogImage: "/social-card.png"
```

您可以在[这里](https://astro-cactus.chriswilliams.dev/social-card.png)查看为此模板页面设置的图片。

[^1]: 图片本身可以放在您喜欢的任何位置。
