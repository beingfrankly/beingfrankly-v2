import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    createdAt: z.coerce.date(),
    modifiedAt: z.coerce.date().nullable(),
    publishedAt: z.coerce.date().nullable(),
    published: z.boolean(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog,
};
