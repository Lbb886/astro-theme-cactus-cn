---
title: "Markdown 告警组件"
description: "这篇文章展示了在 Astro Cactus 中使用 Markdown 告警功能"
publishDate: "25 Aug 2024"
updatedDate: "4 July 2025"
tags: ["markdown", "告警组件"]
---

## 什么是告警组件

告警组件（也称为"旁注"）对于提供与您的内容相关的支持和/或补充信息非常有用。

## 如何使用它们

要在 Astro Cactus 中使用告警组件，将您的 Markdown 内容包装在一对三重冒号 `:::` 中。第一对还应该包含您想要使用的告警类型。

例如，使用以下 Markdown：

```md
:::note
突出显示用户应该考虑的信息，即使在浏览时也是如此。
:::
```

输出：

:::note
突出显示用户应该考虑的信息，即使在浏览时也是如此。
:::

## 告警类型

目前支持以下告警类型：

- `note` - 注意
- `tip` - 提示
- `important` - 重要
- `warning` - 警告
- `caution` - 小心

### 注意

```md
:::note
突出显示用户应该考虑的信息，即使在浏览时也是如此。
:::
```

:::note
突出显示用户应该考虑的信息，即使在浏览时也是如此。
:::

### 提示

```md
:::tip
帮助用户更成功的可选信息。
:::
```

:::tip
帮助用户更成功的可选信息。
:::

### 重要

```md
:::important
用户成功所需的关键信息。
:::
```

:::important
用户成功所需的关键信息。
:::

### 小心

```md
:::caution
行动的负面潜在后果。
:::
```

:::caution
行动的负面潜在后果。
:::

### 警告

```md
:::warning
由于潜在风险需要立即引起用户注意的关键内容。
:::
```

:::warning
由于潜在风险需要立即引起用户注意的关键内容。
:::

## 自定义告警标题

您可以使用以下标记自定义告警标题：

```md
:::note[我的自定义标题]
这是一个带有自定义标题的注意事项。
:::
```

输出：

:::note[我的自定义标题]
这是一个带有自定义标题的注意事项。
:::

## GitHub 仓库卡片
您可以添加链接到 GitHub 仓库的动态卡片，在页面加载时，仓库信息从 GitHub API 拉取。

::github{repo="chrismwilliams/astro-theme-cactus"}

您也可以链接一个 Github 用户：

::github{user="withastro"}

要使用此功能，您只需使用"Github"指令：

```markdown title="链接仓库"
::github{repo="chrismwilliams/astro-theme-cactus"}
```

```markdown title="链接用户"
::github{user="withastro"}
```