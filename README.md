<div align="center">
  <img alt="Astro Cactus logo" src="https://github.com/user-attachments/assets/92dfbabf-ca65-4bf6-991d-9a71e5319880" width="70" />
</div>
<h1 align="center">
  Astro Cactus
</h1>

Astro Cactus 是一个基于 [Astro](https://astro.build) 构建的简单、固执己见的启动模板。使用它来创建易于使用的博客或网站。

## 目录

1. [主要特性](#主要特性)
2. [演示](#演示-)
3. [快速开始](#快速开始)
4. [预览](#预览)
5. [命令](#命令)
6. [配置](#配置)
7. [更新](#更新)
8. [添加文章、笔记和标签](#添加文章笔记和标签)
   - [文章前置元数据](#文章前置元数据)
   - [笔记前置元数据](#笔记前置元数据)
   - [标签前置元数据](#标签前置元数据)
   - [前置元数据代码片段](#前置元数据代码片段)
9. [Pagefind 搜索](#pagefind-搜索)
10. [分析](#分析)
11. [部署](#部署)
12. [致谢](#致谢)

## 主要特性

- Astro v5 快速 🚀
- Tailwind v4
- 可访问的、语义化的 HTML 标记
- 响应式设计和 SEO 友好
- 深色和浅色模式
- MD 和 [MDX](https://docs.astro.build/en/guides/markdown-content/#mdx-only-features) 文章和笔记
  - 包含 [Admonitions](https://astro-cactus.chriswilliams.dev/posts/markdown-elements/admonitions/) 提示框
- [Satori](https://github.com/vercel/satori) 用于创建开放图谱 PNG 图像
- [自动 RSS 订阅源](https://docs.astro.build/en/guides/rss)
- [Webmentions](https://webmention.io/)
- 自动生成：
  - [站点地图](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
  - [robots.txt](https://github.com/alextim/astro-lib/blob/main/packages/astro-robots-txt/README.md)
  - [Web 应用清单](https://github.com/alextim/astro-lib/blob/main/packages/astro-webmanifest/README.md)
- [Pagefind](https://pagefind.app/) 静态搜索库集成
- [Astro Icon](https://github.com/natemoo-re/astro-icon) SVG 图标组件
- [Expressive Code](https://expressive-code.com/) 代码块和语法高亮

## 演示 💻

查看 [演示网站](https://astro-cactus.chriswilliams.dev/)，托管在 Netlify 上

## 快速开始

[创建一个新的仓库](https://github.com/chrismwilliams/astro-theme-cactus/generate) 从这个模板。

```bash
# pnpm 7+
pnpm create astro@latest -- --template chrismwilliams/astro-theme-cactus

# pnpm
pnpm dlx create-astro --template chrismwilliams/astro-theme-cactus
```

[![使用 Netlify 部署](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/chrismwilliams/astro-theme-cactus) [![使用 Vercel 部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fchrismwilliams%2Fastro-theme-cactus&project-name=astro-theme-cactus)

## 预览

![Astro Theme Cactus 浅色模式](https://github.com/chrismwilliams/astro-theme-cactus/assets/12715988/84c89d42-4525-4674-b10c-6d6ebdc06382)

![Astro Theme Cactus 深色模式](https://github.com/chrismwilliams/astro-theme-cactus/assets/12715988/e0e575e2-445f-4c2d-a812-b5b53d2d9031)

## 命令

将 pnpm 替换为您选择的 pnpm / yarn

| 命令              | 操作                                                                 |
| :--------------- | :------------------------------------------------------------------- |
| `pnpm install`   | 安装依赖                                                             |
| `pnpm dev`       | 在 `localhost:3000` 启动本地开发服务器                              |
| `pnpm build`     | 将您的生产站点构建到 `./dist/` 目录                                 |
| `pnpm postbuild` | Pagefind 脚本，用于构建博客文章的静态搜索                           |
| `pnpm preview`   | 在部署前本地预览您的构建                                             |
| `pnpm sync`      | 根据 `src/content/config.ts` 中的配置生成类型                        |

## 配置

- 编辑模板的配置文件 `src/site.config.ts`
  - **重要**：设置 url 属性为您自己的域名。
  - 修改由 [Expressive Code](https://expressive-code.com) 生成的 Markdown 代码块的设置。Astro Cactus 有深色（dracula）和浅色（github-light）两种主题。您可以在 [expressive-code](https://expressive-code.com/guides/themes/#available-themes) 找到更多选项。
- 更新文件 `astro.config.ts`
  - [astro-webmanifest 选项](https://github.com/alextim/astro-lib/blob/main/packages/astro-webmanifest/README.md)
- 替换和更新 `/public` 文件夹中的文件：
  - icon.svg - 用作创建 favicons 和清单图标的源文件
  - social-card.png - 用作默认的 og:image
- 修改文件 `src/styles/global.css` 使用您自己的浅色和深色样式，并自定义 [Tailwind 的主题设置](https://tailwindcss.com/docs/theme#customizing-your-theme)。
- 在 `src/components/SocialList.astro` 中编辑社交链接以添加/替换您的媒体资料。图标可以在 [icones.js.org](https://icones.js.org/) 找到，按照 [Astro Icon 的说明](https://www.astroicon.dev/guides/customization/#find-an-icon-set)。
- 在 `src/content/post/` 和 `src/content/note/` 中使用 .md/mdx 文件创建/编辑博客文章和笔记。更多详情请参见 [下面](#添加文章笔记和标签)。
  - 阅读 [这篇文章](http://astro-cactus.chriswilliams.dev/posts/webmentions/) 以了解如何向您的站点添加 webmentions。
  - 在 `/src/content/tag/` 中添加任何自定义标签页面，确保文件名与标签相同。
- OG 图像：
  - 如果您想更改 Satori 库创建的生成图像的样式，请打开 `src/pages/og-image/[slug].png.ts` 到 markup 函数，您可以在其中编辑 html/tailwind-classes 必要的部分。您可以使用这个 [游乐场](https://og-playground.vercel.app/) 来辅助您的设计。
  - 您也可以创建自己的 og 图像并跳过 satori 为您生成它，方法是在前置元数据中添加一个 ogImage 属性并链接到您的资产，示例可以在 `src/content/post/social-image.md` 中找到。有关前置元数据的更多信息，请参见 [下面](#文章前置元数据)
- 可选：
  - 字体：这个主题将 body 元素设置为字体系列 `font-mono`，在 `src/layouts/Base.astro` 中的 `<body>` 上。您可以通过删除变体 `font-mono` 来更改字体，之后 TailwindCSS 将默认使用 `font-sans` [字体系列栈](https://tailwindcss.com/docs/font-family)。

## 更新

如果您已经复刻了模板，您可以将复刻 [与您自己的项目同步](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)，请记住**不要**点击丢弃更改，因为您会丢失自己的更改。

如果您有模板仓库，您可以将这个模板添加为远程仓库，[如这里讨论的](https://stackoverflow.com/questions/56577184/github-pull-changes-from-a-template-repository)。

## 添加文章、笔记和标签

这个主题使用 [内容集合](https://docs.astro.build/en/guides/content-collections/) 来组织本地 Markdown 和 MDX 文件，以及使用模式对前置元数据进行类型检查 -> `src/content/config.ts`。

添加文章/笔记/标签就像将您的 .md(x) 文件添加到 `src/content/post`、`src/content/note` 和 `src/content/tag` 文件夹一样简单，文件名将用作 slug/url。

标签集合允许您覆盖生成的标签页面的内容。例如，模板包含 `src/content/tag/test.md`，它覆盖了在 `your-domain.com/tags/test` 中显示的内容。

> **注意**
> 为了让标签页面正常工作，文件名 (`src/content/tag/*`) 必须也出现在文章的 [tags 前置元数据](#文章前置元数据) 中。

这个模板包含的文章/笔记/标签是作为如何构建您的前置元数据的示例。此外，[Astro 文档](https://docs.astro.build/en/guides/markdown-content/) 有关于 Markdown 页面的详细部分。

### 文章前置元数据

| 属性（\* 必填）  | 描述                                                                                                                                                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| title \*         | 不言而喻。用作文章的文本链接、文章页面的 h1 和页面标题属性。最大长度为 60 个字符，在 `src/content/config.ts` 中设置。                                                                                                                 |
| description \*   | 类似于上面，用作 seo 描述属性。最小长度为 50，最大长度为 160 个字符，在文章模式中设置。                                                                                                                                                |
| publishDate \*   | 同样很简单。要更改日期格式/区域设置，当前为 **en-GB**，请更新 `src/site.config.ts` 中的日期选项。注意，如果需要，您还可以向组件 `<FormattedDate>` 传递其他选项。                                                                        |
| updatedDate      | 这是一个可选日期，表示文章更新的时间，格式与 publishDate 相同。                                                                                                                                                                        |
| tags             | 标签对于任何创建的文章都是可选的。任何新标签将显示在 `your-domain.com/posts` 和 `your-domain.com/tags` 中，并生成页面 `your-domain.com/tags/[yourTag]`                                                                                  |
| coverImage       | 这是一个可选对象，将在文章顶部添加封面图像。包括 `src`: "_path-to-image_" 和 `alt`: "_image alt_"。您可以在 `src/content/post/cover-image.md` 中查看示例。                                                                        |
| ogImage          | 这是一个可选属性。对于每个未提供此属性的文章，将自动生成一个 OG 图像。如果您想为特定文章创建自己的图像，请包含此属性和指向您图像的链接，主题将跳过自动生成。                                                                           |
| draft            | 这是一个可选属性，因为它在模式中默认设置为 false。通过添加 true，文章将在生产构建中的多个地方被过滤掉，包括 getAllPosts() 调用、og-images、rss 订阅源和生成的页面。您可以在 `src/content/post/draft-post.md` 中查看示例。              |

### 笔记前置元数据

| 属性（\* 必填）  | 描述                                                                                                                                                                   |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title \*         | 用作笔记的链接文本、页面标题属性和该笔记页面的 h1。最大长度为 60 个字符。                                                                                              |
| description      | 可选。用于头部元描述属性。                                                                                                                                             |
| publishDate \*   | 允许偏移的 ISO 8601 格式。                                                                                                                                             |

### 标签前置元数据

| 属性（\* 必填）  | 描述                                                                                                                                                                   |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title            | 可选。用作标签页面的 h1 和页面标题属性。最大长度为 60 个字符。                                                                                                         |
| description      | 可选。用于头部元描述和 h1 下的第一段。                                                                                                                                  |

### 前置元数据代码片段

Astro Cactus 包含一个有用的 VSCode 代码片段，它可以为文章和笔记创建前置元数据的"存根"，可在此处找到 -> `.vscode/post.code-snippets`。在您新创建的 .md(x) 文件上开始输入单词 `frontmatter` 以触发它。Visual Studio Code 代码片段通过 mac 上的 (⌃Space) 或 windows 上的 (Ctrl+Space) 在 IntelliSense 中显示。

## Pagefind 搜索

此集成提供了一个静态搜索功能，用于搜索博客文章和笔记。在当前形式下，pagefind 仅在站点构建后才有效。这个主题添加了一个 postbuild 脚本，应该在 Astro 构建站点后运行。您可以通过运行 build && postbuild 在本地预览。

搜索结果仅包括来自文章和笔记的页面。如果您想包含其他/所有页面，请从 `src/layouts/BlogPost.astro` 和 `src/components/note/Note.astro` 中的 article 标签中删除/重新定位属性 `data-pagefind-body`。

它还允许您按博客文章前置元数据中添加的标签过滤文章。如果您想删除此功能，请从 `src/components/blog/Masthead.astro` 中的链接中删除数据属性 `data-pagefind-filter="tag"`。

如果您不想包含此集成，只需删除组件 `src/components/Search.astro`，并从 package.json 中卸载 `@pagefind/default-ui` 和 `pagefind`。您还需要从这里删除 postbuild 脚本。

您可以通过延迟加载 Web 组件样式来减少 CSS 的初始 CSS 有效负载，[如下所示](https://github.com/chrismwilliams/astro-theme-cactus/pull/145#issue-1943779868)。

## 分析

您可能想要跟踪访问您博客/网站的访问者数量，以便了解趋势和您创建的热门文章/页面。有许多提供商可供选择，包括 Web 主机，如 [vercel](https://vercel.com/analytics)、[netlify](https://www.netlify.com/products/analytics/) 和 [cloudflare](https://www.cloudflare.com/web-analytics/)。

这个主题/模板不包含特定的解决方案，因为有许多用例和/或选项，有些人可能会使用，有些人可能不会使用。

在设置时，您可能会被要求在网站的 **HEAD** 标签内包含一个代码片段，该标签可以在 `src/layouts/Base.astro` 中找到。或者，您可以在 `src/components/BaseHead.astro` 中添加代码片段。

## 部署

[Astro 文档](https://docs.astro.build/en/guides/deploy/) 有一个很好的部分和细分，说明如何在各种平台上部署您自己的 Astro 站点及其特性。

默认情况下，站点将被构建（请参见上面的 [命令](#命令) 部分）到 `/dist` 目录。

## 致谢

这个主题的灵感来自 [Hexo Theme Cactus](https://github.com/probberechts/hexo-theme-cactus)

## 许可证

MIT
