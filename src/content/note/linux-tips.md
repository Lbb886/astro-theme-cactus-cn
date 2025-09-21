---
title: "Linux 命令行技巧"
description: "提高终端使用效率的实用技巧集合"
publishDate: "2025-01-11 16:45:00"
---

收集了一些实用的 Linux 命令行技巧：

## 快捷键
- `Ctrl + A`：移动到行首
- `Ctrl + E`：移动到行尾
- `Ctrl + U`：删除光标前的内容
- `Ctrl + K`：删除光标后的内容
- `Ctrl + R`：搜索历史命令

## 实用命令
```bash
# 查找大文件
du -sh * | sort -rh | head -10

# 监控系统资源
htop
iostat 1

# 快速查找文件
find . -name "*.js" -type f | head -10

# 批量重命名
for file in *.txt; do mv "$file" "${file%.txt}.bak"; done

# 查看端口占用
lsof -i :3000
netstat -tulpn | grep :3000
```

## 别名设置
在 `~/.bashrc` 或 `~/.zshrc` 中添加：
```bash
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'
alias grep='grep --color=auto'
alias ..='cd ..'
alias ...='cd ../..'
```

熟练掌握这些技巧，让终端操作更高效！