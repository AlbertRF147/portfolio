// type
export interface Page {
  title?: string;
  description?: string;
}

export interface Pages {
  [key: string]: Page;
}

const pages: Pages = {
  home: {
    title: 'Albert Rovira Fernandez',
    description:
      'Albert\'s personal portfolio page.',
  },
  projects: {
    title: 'Projects',
    description:
      'Checkout my latest projects here.',
  },
  hireMe: {
    title: 'Hire me',
    description:
      'I am available as freelancer to do your projects, fill the form to contact to me.',
  },
};

export default pages;
