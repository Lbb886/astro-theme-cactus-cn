---
title: "为 Astro Cactus 添加网络提及功能"
description: "本文描述了为您的网站添加网络提及功能的过程"
publishDate: "11 Oct 2023"
tags: ["网络提及", "astro", "社交"]
updatedDate: 6 December 2024
pinned: true
---

## 快速概览

1. 根据 [IndieLogin](https://indielogin.com/setup) 的说明，在您的主页添加指向 GitHub 个人资料和/或电子邮件地址的链接。您_可以_通过 `src/components/SocialList.astro` 来实现，只需确保在相关链接中包含 `isWebmention` 属性。
2. 通过输入您网站的地址在 [Webmention.io](https://webmention.io/) 创建账户。
3. 将链接feed和API密钥添加到 `.env` 文件中，分别使用 `WEBMENTION_URL` 和 `WEBMENTION_API_KEY` 作为键名，您可以重命名此模板中的 `.env.example` 文件。您也可以在这里添加可选的 `WEBMENTION_PINGBACK` 链接。
4. 前往 [brid.gy](https://brid.gy/) 并登录您希望连接的每个社交账户。
5. 发布并构建您的网站，记得添加API密钥，现在它应该准备好接收网络提及了！

## 什么是网络提及

简单来说，这是一种通过社交媒体在您网站的各个页面上向用户展示点赞、评论、转发等互动的方式。

此主题显示每篇博客文章收到的点赞、提及和回复数量。还有一些我没有包含的其他网络提及类型，比如转发，目前被过滤掉了，但应该不难添加。

## 将其添加到您自己网站的步骤

您需要创建几个账户来启动和运行。但是，首先需要确保您的社交链接是正确的。

### 添加指向您个人资料的链接

首先，您需要在您的网站上添加链接以证明所有权。如果您查看 [IndieLogin](https://indielogin.com/setup) 的说明，它为您提供了2个选项：电子邮件地址和/或GitHub账户。我创建了组件 `src/components/SocialList.astro`，您可以在其中将详细信息添加到 `socialLinks` 数组中，只需在相关链接中包含 `isWebmention` 属性，这将添加 `rel="me authn"` 属性。无论您采用哪种方式，都要确保根据IndieLogin的[说明](https://indielogin.com/setup)在标记中包含链接

```html
<a href="https://github.com/your-username" rel="me">GitHub</a>
```

### 注册 Webmention.io

接下来，前往 [Webmention.io](https://webmention.io/) 并通过使用您的域名（例如 `https://astro-cactus.chriswilliams.dev/`）登录来创建账户。请注意，.app 顶级域名无法正常工作。登录后，它将为您的域名提供一些接受网络提及的链接。记下这些链接并创建一个 `.env` 文件（此模板包含一个示例 `.env.example`，您可以重命名）。使用 `WEBMENTION_URL` 和 `WEBMENTION_API_KEY` 分别添加链接feed和API密钥，如果需要，还可以添加可选的 `WEBMENTION_PINGBACK` 网址。请尽量不要将其发布到代码库中！

:::note
您不必包含pingback链接。也许是巧合，但在添加它之后，我开始在邮箱中收到更频繁的垃圾邮件，告诉我我的网站可以做得更好。说实话，他们说得没错。我现在已经删除了它，但这取决于您。
:::

### 注册 Brid.gy

现在您需要使用 [brid.gy](https://brid.gy/)。顾名思义，它将您的网站连接到您的社交媒体账户。对于您想要设置的每个账户（例如Mastodon），点击相关按钮并连接您希望brid.gy搜索的每个账户。再次注意，brid.gy目前在.app顶级域名方面存在问题。

## 测试是否正常工作

设置完所有内容后，现在是时候构建和发布您的网站了。**记住**要在您的主机上设置环境变量 `WEBMENTION_API_KEY` 和 `WEBMENTION_URL`。

您可以通过 [webmentions.rocks](https://webmention.rocks/receive/1) 发送测试网络提及来检查一切是否正常工作。使用您的域名登录，输入授权码，然后输入您要测试的页面网址。例如，要测试此页面，我会添加 `https://astro-cactus.chriswilliams.dev/posts/webmentions/`。要在您的网站上查看它，重新构建或本地（重新）启动开发模式，您应该在页面底部看到结果。

您也可以通过他们的 [API](https://github.com/aaronpk/webmention.io#api) 在浏览器中查看任何测试提及。

## 需要添加的功能，需要考虑的事项

- 目前，新的网络提及仅在重新构建或重启开发模式时获取，这显然意味着如果您不经常更新网站，您就不会获得很多新内容。添加一个定时任务来运行 `src/utils/webmentions.ts` 中的 `getAndCacheWebmentions()` 函数并用新内容填充您的博客应该是相当简单的。这可能是我接下来要添加的功能，作为GitHub action。

- 我看到一些提及有重复。不幸的是，它们很难过滤掉，因为它们有不同的ID。

- 我不太喜欢用于链接到评论/回复的小外部链接图标。由于它的大小，在移动设备上效果不是特别好，将来可能会更改它。

## 致谢

非常感谢 [Kieran McGuire](https://github.com/chrismwilliams/astro-theme-cactus/issues/107#issue-1863931105) 与我分享这个，以及提供的有用文章。我以前从未听说过网络提及，现在通过这次更新，希望其他人也能够使用它们。此外，来自 [kld](https://kld.dev/adding-webmentions/) 和 [ryanmulligan.dev](https://ryanmulligan.dev/blog/) 的文章和示例在设置和集成方面提供了很大帮助，如果您正在寻找更多信息，这两个都是很好的资源！
