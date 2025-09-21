import type { CollectionEntry } from "astro:content";
import { siteConfig } from "@/site.config";

export function getFormattedDate(
	date: Date | undefined,
	options?: Intl.DateTimeFormatOptions,
): string {
	if (date === undefined) {
		return "无效日期";
	}

	// 确保使用上海时区
	const defaultOptions: Intl.DateTimeFormatOptions = {
		timeZone: "Asia/Shanghai",
		...(siteConfig.date.options as Intl.DateTimeFormatOptions),
	};

	return new Intl.DateTimeFormat(siteConfig.date.locale, {
		...defaultOptions,
		...options,
	}).format(date);
}

// 获取中文格式的完整日期时间
export function getFormattedDateTime(
	date: Date | undefined,
	includeTime = false,
): string {
	if (date === undefined) {
		return "无效日期";
	}

	const options: Intl.DateTimeFormatOptions = {
		timeZone: "Asia/Shanghai",
		year: "numeric",
		month: "long",
		day: "numeric",
		...(includeTime && {
			hour: "2-digit",
			minute: "2-digit",
			hour12: false,
		}),
	};

	return new Intl.DateTimeFormat("zh-CN", options).format(date);
}

// 获取相对时间格式（如：3天前）
export function getRelativeTime(date: Date | undefined): string {
	if (date === undefined) {
		return "无效日期";
	}

	const now = new Date();
	const diffInMs = now.getTime() - date.getTime();
	const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

	if (diffInDays === 0) {
		return "今天";
	} else if (diffInDays === 1) {
		return "昨天";
	} else if (diffInDays < 7) {
		return `${diffInDays}天前`;
	} else if (diffInDays < 30) {
		const weeks = Math.floor(diffInDays / 7);
		return `${weeks}周前`;
	} else if (diffInDays < 365) {
		const months = Math.floor(diffInDays / 30);
		return `${months}个月前`;
	} else {
		const years = Math.floor(diffInDays / 365);
		return `${years}年前`;
	}
}

export function collectionDateSort(
	a: CollectionEntry<"post" | "note">,
	b: CollectionEntry<"post" | "note">,
) {
	return b.data.publishDate.getTime() - a.data.publishDate.getTime();
}
