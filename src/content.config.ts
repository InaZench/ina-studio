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
    heroLabel: z.string().optional(),
    heroAspect: z.string().optional(),
    tools: z.string().optional(),
    nextProject: z.string().optional(),
    heroPoster: z.string().optional(),
    verticalPoster: z.string().optional(),
    verticalVideo: z.string().optional(),
    verticalEyebrow: z.string().optional(),
    verticalTitle: z.string().optional(),
    verticalCaption: z.string().optional(),
    coverImage: z.string().optional(),
    pageLayout: z.enum(['classic', 'stacked']).optional(),
  }),
});

export const collections = { projects };