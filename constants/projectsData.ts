// dayjs
import dayjs, { Dayjs } from 'dayjs';
// type
import { ImageProps } from 'types/imageType';
import { ProjectCategory } from 'types/categoryType';
import React from 'react';

export interface ProjectDetails {
  category: ProjectCategory[];
  date: Dayjs;
  id: string;
  images: ImageProps[];
  postFileName: string;
  title: string;
  link: string;
  description: string;
  stack: string[];
}

export interface Project extends ProjectDetails {
  likes: number;
}

const ProjectConstructor = (props: ProjectDetails): Project => {
  const { category, date, id, images, postFileName, title, link, description, stack } = props;

  return {
    category,
    date,
    id,
    title,
    images,
    postFileName,
    get likes() {
      let totalLikes = 0;
      if (this.images.length === 0) return 0;

      this.images.forEach((image) => (totalLikes += image.likes));
      return totalLikes;
    },
    link,
    description,
    stack
  };
};

const projectsData: Project[] = [
  ProjectConstructor({
    category: ['photography'],
    date: dayjs().subtract(1, 'week'),
    id: 'portfolio',
    postFileName: 'portfolio',
    title: 'Portfolio v2',
    images: [
      {
        alt: 'portfolio cover picture',
        width: 600,
        height: 400,
        likes: 42,
        src: '/projects/nextjs.jpeg',
      },
    ],
    link: 'https://github.com/AlbertRF147/portfolio',
    description: 'My newest portfolio site. It is built with React using NextJS and Material UI. It is hosted on Github pages and implements CI/CD via Github Actions. It is forked off of the "thebag" repo built by NextJS creators and adapted to my needs.',
    stack: ['mui', 'react', 'next']
  }),
  ProjectConstructor({
    category: ['photography'],
    date: dayjs().subtract(1, 'week'),
    id: 'portfolio-old',
    postFileName: 'portfolioOld',
    title: 'Portfolio v1',
    images: [
      {
        alt: 'old portfolio cover picture',
        width: 600,
        height: 400,
        likes: 42,
        src: '/projects/code.jpg',
      },
    ],
    link: 'https://github.com/AlbertRF147/my-portfolio',
    description: 'Re­cent­ly I up­dat­ed my port­fo­lio to give it a brush up and to make it mo­bile friend­ly. I used Re­act and a few oth­er li­braries and frame­works like Pure CSS and re­act-time­line. There is also an API de­vel­oped us­ing ex­press and node­mail­er that uses Gmail Google APIs to send me and email in case you wish to con­tact me 😉 .',
    stack: ['react']
  }),
  ProjectConstructor({
    category: ['photography'],
    date: dayjs().subtract(1, 'week'),
    id: 'inventory-app',
    postFileName: 'intentoryApp',
    title: 'Inventory App',
    images: [
      {
        alt: 'inventory app cover picture',
        width: 600,
        height: 400,
        likes: 42,
        src: '/projects/inventory-app.jpg',
      },
    ],
    link: 'https://github.com/AlbertRF147/inventari-app',
    description: 'A web app built us­ing Re­act and Ma­te­r­i­al UI at the front-end, and Feath­er­sJS at the back­end. In essence it is a CRUD APP that helps man­ag­ing in­ven­to­ries for dif­fer­ent types of pub­lic en­ti­ties like schools. This is my biggest per­son­al project. It is still un­der con­struc­tion and the repo is pri­vate. I can give more de­tails upon re­quest.',
    stack: ['mui', 'react', 'mongodb']
  }),
  ProjectConstructor({
    category: ['photography'],
    date: dayjs().subtract(1, 'week'),
    id: 'multistep-form',
    postFileName: 'multistepForm',
    title: 'Multistep Form',
    images: [
      {
        alt: 'multistep form cover picture',
        width: 600,
        height: 400,
        likes: 42,
        src: '/projects/multistep-form.jpg',
      },
    ],
    link: 'https://github.com/AlbertRF147/multistep-form-v2',
    description: 'A mul­ti­step form built us­ing Vue and Vue router. This project was done to par­tic­i­pate in a con­test at Free­lancer.com and got me to sec­ond po­si­tion out of 44 in to­tal. This was one of my first pro­fes­sion­al projects.',
    stack: ['vue']
  }),
  ProjectConstructor({
    category: ['photography'],
    date: dayjs().subtract(1, 'week'),
    id: 'amazeing',
    postFileName: 'amazeing',
    title: 'A-maze-ing',
    images: [
      {
        alt: 'a-maze-ing cover picture',
        width: 600,
        height: 400,
        likes: 42,
        src: '/projects/maze.jpg',
      },
    ],
    link: 'https://github.com/AlbertRF147/my-portfolio',
    description: 'A project I built some time ago when ex­per­i­ment­ing with al­go­rithms. It uses vanil­la JS and the back­track algo to gen­er­ate a maze of dif­fer­ent sizes and to also pro­vide the so­lu­tion.',
    stack: ['vanilla']
  }),
];

export default projectsData;
