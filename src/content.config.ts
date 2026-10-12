import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guider = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guider' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    draft: z.boolean().optional().default(false),
    coverImage: z.string().optional(),
    readingTimeMinutes: z.number().optional(),
  }),
});

export const collections = { guider };
