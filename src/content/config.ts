import { defineCollection, z } from 'astro:content';

const tools = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    image: z.string(),
    category: z.enum(['calculator', 'converter', 'generator']),
    pubDate: z.string().transform((str) => new Date(str)),
  }),
});

export const collections = { tools };
// Astro v6 compliant config
