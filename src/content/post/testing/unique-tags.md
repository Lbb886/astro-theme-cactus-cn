---
title: "唯一标签验证"
publishDate: "30 January 2023"
description: "这篇文章用于验证是否移除重复标签，无论字符串大小写如何"
tags: ["博客", "博客", "博客", "test", "博客", "test", "博客"]
---

## 这篇文章用于测试 zod 转换

如果您打开文件 `src/content/post/unique-tags.md`，标签数组中有许多不同大小写的重复博客字符串。

这些重复项会被 `src/content/config.ts` 中的 removeDupsAndLowercase 函数移除。
