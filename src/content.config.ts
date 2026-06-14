import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tools = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/tools' }),
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
