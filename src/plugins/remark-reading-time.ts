import { toString as mdastToString } from "mdast-util-to-string";
import getReadingTime from "reading-time";

export function remarkReadingTime() {
	// @ts-expect-error:next-line
	return (tree, { data }) => {
		const textOnPage = mdastToString(tree);
		const readingTime = getReadingTime(textOnPage);
		// 只传递分钟数，让前端处理翻译
		const minutes = Math.ceil(readingTime.minutes);
		data.astro.frontmatter.readingTime = minutes;
	};
}
