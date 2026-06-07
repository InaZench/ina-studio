import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'data',
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
  }),
});

export const collections = { projects };