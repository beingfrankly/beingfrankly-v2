import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    createdAt: z.date(),
    modifiedAt: z.date().nullable(),
    publishedAt: z.date().nullable(),
    published: z.boolean(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  'blog': blog,
}; 