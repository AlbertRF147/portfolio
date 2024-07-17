import { z, defineCollection } from 'astro:content';

const experienceCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    order: z.number(),
    company: z.string(),
    role: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    description: z.string(),
    tags: z.array(z.object({
      name: z.string()
    })),
  }),
});

const projectCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.object({
      name: z.string()
    })),
    link: z.string(),
    image: z.string(),
  }),
})

export const collections = {
  'experience': experienceCollection,
  'project': projectCollection
};
