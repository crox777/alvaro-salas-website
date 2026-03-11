import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const ideas = defineCollection({
	loader: glob({ base: './src/content/ideas', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			topic: z.string().default('freedom-investing'),
			featured: z.boolean().default(false),
			heroImage: z.optional(image()),
		}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			description: z.string(),
			url: z.string().url().optional(),
			status: z.enum(['active', 'completed', 'upcoming']).default('active'),
			order: z.number().default(0),
			logo: z.optional(image()),
		}),
});

const talks = defineCollection({
	loader: glob({ base: './src/content/talks', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		event: z.string(),
		date: z.coerce.date(),
		videoUrl: z.string().url().optional(),
		slidesUrl: z.string().url().optional(),
		description: z.string().optional(),
		featured: z.boolean().default(false),
	}),
});

const podcasts = defineCollection({
	loader: glob({ base: './src/content/podcasts', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		show: z.string(),
		date: z.coerce.date(),
		audioUrl: z.string().url().optional(),
		episodeUrl: z.string().url().optional(),
		duration: z.string().optional(),
		description: z.string().optional(),
	}),
});

export const collections = { ideas, projects, talks, podcasts };
