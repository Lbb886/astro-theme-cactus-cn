---
title: "Git 常用命令备忘录"
description: "日常开发中最常用的 Git 命令整理"
publishDate: "2025-01-12 11:20:00"
---

整理了日常开发中最常用的 Git 命令：

## 基础操作
```bash
git init                    # 初始化仓库
git clone <url>            # 克隆仓库
git status                 # 查看状态
git add .                  # 添加所有文件到暂存区
git commit -m "message"    # 提交更改
git push                   # 推送到远程
git pull                   # 拉取远程更新
```

## 分支操作
```bash
git branch                 # 查看本地分支
git branch -r             # 查看远程分支
git checkout -b <branch>  # 创建并切换分支
git checkout <branch>     # 切换分支
git merge <branch>        # 合并分支
git branch -d <branch>    # 删除分支
```

## 日志和历史
```bash
git log --oneline         # 简洁日志
git log --graph          # 图形化日志
git show <commit>        # 查看提交详情
git diff                 # 查看变更
```

## 撤销操作
```bash
git checkout -- <file>   # 撤销工作区修改
git reset HEAD <file>    # 取消暂存
git reset --hard HEAD^   # 回退到上一版本
```

记住这些命令，日常开发效率翻倍！