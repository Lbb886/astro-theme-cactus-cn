---
title: "Markdown 元素展示"
description: "这篇文章用于测试和列出各种不同的 Markdown 元素"
publishDate: "22 Feb 2023"
updatedDate: 22 Jan 2024
tags: ["test", "markdown"]
pinned: true
---
 
## 这是二级标题

### 这是三级标题

#### 这是四级标题

##### 这是五级标题

###### 这是六级标题

## 水平分割线

---

---

---

## 强调

**这是粗体文本**

_这是斜体文本_

~~删除线~~

## 引号

"双引号" 和 '单引号'

## 块引用

> 块引用也可以嵌套使用...
>
> > ...通过在旁边使用额外的大于号...

## 引用参考

包含可点击引用[^1]和源链接的示例。

包含引用[^2]和源链接的第二个示例。

[^1]: 第一个脚注引用，带有返回内容的链接。

[^2]: 第二个带链接的引用。

如果您查看 `src/content/post/markdown-elements/index.md` 中的这个示例，您会注意到引用和"脚注"标题通过 [remark-rehype](https://github.com/remarkjs/remark-rehype#options) 插件添加到页面底部。

## 列表

无序列表

- 通过以 `+`、`-` 或 `*` 开头来创建列表
- 子列表通过缩进 2 个空格来制作：
  - 标记字符更改会强制开始新列表：
    - 悲伤的自由意志
    - 在漂亮的别名中促进
    - 没有自由意志的某些东西
- 非常简单！

有序列表

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit  
3. Integer molestie lorem at massa

4. 您可以使用连续数字...
5. ...或者将所有数字保持为 `1.`

从偏移开始编号：

57. foo
1. bar

## 代码

行内 `代码`

缩进代码

    // 一些注释
    代码第 1 行
    代码第 2 行  
    代码第 3 行

代码块"围栏"

```
这里是示例文本...
```

语法高亮

```js
var foo = function (bar) {
	return bar++;
};

console.log(foo(5));
```

### 表达式代码示例

添加标题

```js title="file.js"
console.log("标题示例");
```

Bash 终端

```bash
echo "基础终端示例"
```

高亮代码行

```js title="line-markers.js" del={2} ins={3-4} {6}
function demo() {
	console.log("这行被标记为删除");
	// 这行和下一行被标记为插入
	console.log("这是第二个插入行");

	return "这行使用中性默认标记类型";
}
```

[Expressive Code](https://expressive-code.com/) 能做的远不止这里展示的，并且包含很多[自定义选项](https://expressive-code.com/reference/configuration/)。

## 表格

| 选项   | 描述                                         |
| ------ | -------------------------------------------- |
| data   | 数据文件路径，提供将传递到模板中的数据。     |
| engine | 用于处理模板的引擎。Handlebars 是默认引擎。  |
| ext    | 目标文件使用的扩展名。                       |

### 表格对齐

| 项目     | 价格  | 库存数量 |
| -------- | :---: | -------: |
| 多汁苹果 | 1.99  |      739 |
| 香蕉     | 1.89  |        6 |

### 键盘元素

| 操作           | 快捷键                                     |
| -------------- | ------------------------------------------ |
| 垂直分割       | <kbd>Alt+Shift++</kbd>                     |
| 水平分割       | <kbd>Alt+Shift+-</kbd>                     |
| 自动分割       | <kbd>Alt+Shift+d</kbd>                     |
| 在分割间切换   | <kbd>Alt</kbd> + 方向键                    |
| 调整分割大小   | <kbd>Alt+Shift</kbd> + 方向键              |
| 关闭分割       | <kbd>Ctrl+Shift+W</kbd>                    |
| 最大化面板     | <kbd>Ctrl+Shift+P</kbd> + Toggle pane zoom |

## 图片

同文件夹中的图片：`src/content/post/markdown-elements/logo.png`

![Astro theme cactus 标志](./logo.png)

## 链接

[内容来自 markdown-it](https://markdown-it.github.io/)
