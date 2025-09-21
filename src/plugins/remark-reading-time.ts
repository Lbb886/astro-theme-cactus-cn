import { toString as mdastToString } from "mdast-util-to-string";
import getReadingTime from "reading-time";

export function remarkReadingTime() {
	// @ts-expect-error:next-line
	return (tree, { data }) => {
		const textOnPage = mdastToString(tree);
		const readingTime = getReadingTime(textOnPage);
		// 转换为中文格式
		const minutes = Math.ceil(readingTime.minutes);
		const chineseReadingTime = `${minutes} 分钟阅读`;
		data.astro.frontmatter.readingTime = chineseReadingTime;
	};
}
