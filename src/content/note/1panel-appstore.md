---
title: 1Panel第三方应用商店
description: 1Panel第三方应用商店（本地商店）配置和使用
publishDate: "2025-09-20T15:25:00Z"
---

## 使用 **清羽飞扬 · 1Panel 第三方 App Store**

[清羽飞扬 · 1Panel 第三方 App Store](https://github.com/willow-god/appstore)

这是一个由 **清羽飞扬** 自建维护的 **1Panel 第三方应用商店仓库**，用于收纳个人常用的容器化应用与预设配置，基于 [1Panel](https://github.com/1Panel-dev/1Panel) 的 App Store 架构。

## 配置(只需三条命令)

1. 进入 1Panel 容器的终端。
2. 执行以下命令：
```bash
git clone https://github.com/willow-god/appstore /opt/1panel/resource/apps/local/appstore-localApps

cp -rf /opt/1panel/resource/apps/local/appstore-localApps/apps/* /opt/1panel/resource/apps/local/

rm -rf /opt/1panel/resource/apps/local/appstore-localApps
```

## 使用
1. 进入 1Panel 的 **应用商店** 页面。
2. 在 **全部** ->**更多** -> **本地** 应用分类下, 你将看到 **清羽飞扬 · 1Panel 第三方 App Store** 中的所有应用。
3. 选择并安装你需要的应用。