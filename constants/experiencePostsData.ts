// dayjs
import dayjs from 'dayjs';
// lib
import { createPost } from 'utility/createExperiencePost';
// type
import { ExperiencePost } from 'types/experiencePostType';

const experiencePosts: ExperiencePost[] = [
  createPost({
    category: ['photography'],
    date: dayjs().subtract(6, 'week'),
    id: 'freelancer',
    image: {
      alt: 'freelancer',
      height: 200,
      likes: 98,
      src: '/posts/freelancer.jpeg',
      width: 400,
    },
    filename: 'freelancer',
    title: 'Freelancer.com',
  }),
  createPost({
    category: ['design'],
    date: dayjs().subtract(3, 'week'),
    id: 'qubit',
    image: {
      alt: 'qubit',
      height: 2400,
      likes: 126,
      src: '/posts/qubit.png',
      width: 1920,
    },
    filename: 'qubit',
    title: 'Qubit',
  }),
  createPost({
    category: ['photography'],
    date: dayjs().subtract(2, 'week'),
    id: 'coveo',
    image: {
      alt: 'coveo',
      height: 2880,
      likes: 77,
      src: '/posts/coveo.png',
      width: 1920,
    },
    filename: 'coveo',
    title: `Coveo`,
  }),
];

export default experiencePosts;
