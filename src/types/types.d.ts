declare interface MenuEntry {
	name: string;
	link: string;
	active?: boolean;
}

declare interface Experience {
	company: string;
	role: string;
	startDate: string;
	endDate: string;
	description: string;
	tags?: Tag[];
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
