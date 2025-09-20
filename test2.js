import fs from "fs";

// 读取原始 keys
const raw = JSON.parse(fs.readFileSync("i18n-keys.json", "utf-8"));

// 定义过滤规则
function isTranslatable(text) {
  // 去掉空
  if (!text || text.length < 2) return false;

  // 去掉路径 / class / 文件名
  if (
    text.startsWith(".") ||
    text.startsWith("M") && /\d/.test(text) || // SVG path
    text.endsWith(".js") ||
    text.endsWith(".ts") ||
    text.endsWith(".env")
  ) {
    return false;
  }

  // 去掉纯数字 / 单位
  if (/^\d+$/.test(text)) return false;
  if (/\d+(px|rem|em|%)$/.test(text)) return false;

  // 去掉全小写（大概率是 className）
  if (/^[a-z0-9\-]+$/.test(text)) return false;

  // 去掉 aria-、role、utf-8 等属性
  if (/^(aria-|utf|role|true|false|null|undefined)$/.test(text)) return false;

  // 只保留可能对用户可见的英文单词/短语
  return true;
}

// 应用过滤
const filtered = raw.filter(isTranslatable);

// 转换成 zh.ts 格式
const zh = {};
filtered.forEach((t) => {
  // 转 key：小写+下划线
  const key = t.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");
  zh[key] = t; // 默认值先用英文，等你手动翻译
});

const output = `const zh = ${JSON.stringify(zh, null, 2)};\n\nexport default zh;\n`;

fs.writeFileSync("zh.ts", output, "utf-8");

console.log(`✅ 过滤完成，从 ${raw.length} 条缩减到 ${filtered.length} 条，结果已写入 zh.ts`);