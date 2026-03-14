import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: z.object({
    id: z.number(),
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    cookingTime: z.string().optional(),
    ingredients: z.array(z.string()),
    directions: z.array(z.string()),
  }),
});

const steps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/steps' }),
  schema: z.object({
    id: z.number(),
    number: z.number(),
    title: z.string(),
    description: z.string(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    quote: z.string(),
    emphasized: z.string(),
    name: z.string(),
    context: z.string().nullable(),
  }),
});

const values = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/values' }),
  schema: z.object({
    id: z.number(),
    icon: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  recipes,
  steps,
  testimonials,
  values,
};
