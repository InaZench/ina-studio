import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    year: z.string(),
    eyebrow: z.string(),
    caseNumber: z.string(),
    format: z.string(),
    delivery: z.string(),
    objective: z.string(),
    heroNote: z.string(),
    heroVideo: z.string().optional(),
  }),
});

export const collections = { projects };
