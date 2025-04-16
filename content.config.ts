import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    authors: defineCollection({
      type: 'data',
      source: 'authors/**.json',
      schema: z.object({
        name: z.string().trim(),
        avatar: z.string().trim().optional(),
        gender: z.boolean().optional(),
        bio: z.string().trim().optional(),
        mail: z.string().trim().email().optional(),

        discord: z.string().trim().url().optional(),
        dribbble: z.string().trim().url().optional(),
        facebook: z.string().trim().url().optional(),
        github: z.string().trim().url().optional(),
        instagram: z.string().trim().url().optional(),
        linkedin: z.string().trim().url().optional(),
        youtube: z.string().trim().url().optional(),
      }),
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.{md,mdx}',
      schema: z.object({
        author: z.string().trim(),
        date: z.date(),
        tags: z.array(z.string().trim()),
        image: z.string().trim(),
      }),
    }),
    notes: defineCollection({
      type: 'page',
      source: 'notes/*.{md,mdx}',
      schema: z.object({
        author: z.string().trim(),
        date: z.date(),
        tags: z.array(z.string().trim()),
        image: z.string().trim(),
      }),
    }),
    examples: defineCollection({
      type: 'page',
      source: 'examples/*.{md,mdx}',
      schema: z.object({
        rawbody: z.string().trim(),
      }),
    }),
  },
});
