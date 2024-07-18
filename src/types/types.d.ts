declare interface Social {
	name: string;
	link?: string;
	tooltip?: string;
	icon: string;
}

declare interface MenuEntry {
	name: string;
	link: string;
	active?: boolean;
}

declare interface Experience {
	order: number;
	company: string;
	role: string;
	startDate: string;
	endDate: string;
	description: string;
	tags?: Tag[];
	link?: string;
}

declare enum TagName {
	javascript = "Javascript",
	react = "React",
	typescript = "Typescript",
	html_css = "HTML && CSS",
	node = "Node",
	tailwind = "Tailwind",
}

declare interface Tag {
	name: TagName
}

declare interface Project {
	title: string;
	description: string;
	tags?: Tag[];
	link: string;
	image: string;
}
