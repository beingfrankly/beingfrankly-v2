import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    id: z.string(),
    title: z.string(),
    excerpt: z.string(),
    published: z.boolean(),
    publishedDate: z.date().optional(),
    createdAt: z.date(),
    updatedAt: z.date(),
  }),
});

export const collections = {
  blog: blogCollection,
};
