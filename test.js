import fs from "fs";
import path from "path";

const exts = [".astro", ".ts", ".tsx", ".js", ".jsx", ".md"];
const results = new Set();

// 简单正则：匹配引号里的英文短语（排除变量）
const regex = /["'`](.*?)["'`]/g;

function walk(dir) {
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walk(fullPath);
    } else if (exts.includes(path.extname(file))) {
      const content = fs.readFileSync(fullPath, "utf-8");

      let match;
      while ((match = regex.exec(content)) !== null) {
        const text = match[1].trim();

        // 过滤：空 / 含变量 / 纯路径 / 纯代码符号
        if (
          text &&
          /^[A-Za-z\s\-\d\.\!\?]+$/.test(text) && // 只保留英文/空格/常见符号
          text.length > 1 && // 去掉太短的
          !text.startsWith("http") && // 去掉链接
          !text.endsWith(".js") &&
          !text.endsWith(".ts")
        ) {
          results.add(text);
        }
      }
    }
  }
}

// 扫描项目 src 和 content 目录
walk(path.join(process.cwd(), "src"));
if (fs.existsSync(path.join(process.cwd(), "content"))) {
  walk(path.join(process.cwd(), "content"));
}

const output = Array.from(results).sort();
fs.writeFileSync("i18n-keys.json", JSON.stringify(output, null, 2), "utf-8");

console.log(`✅ 提取完成，共找到 ${output.length} 条候选文本，已写入 i18n-keys.json`);