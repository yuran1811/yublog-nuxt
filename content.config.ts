import type { Collection } from '@nuxt/content';
import { defineCollection, defineContentConfig, z } from '@nuxt/content';
import { asRobotsCollection } from '@nuxtjs/robots/content';
import { asSeoCollection } from '@nuxtjs/seo/content';
import { asSitemapCollection } from '@nuxtjs/sitemap/content';
import { asOgImageCollection } from 'nuxt-og-image/content';
import { asSchemaOrgCollection } from 'nuxt-schema-org/content';

const withSEOWrapper = (_: Collection) =>
  asRobotsCollection(
    asSeoCollection(
      asSitemapCollection(
        asOgImageCollection(
          asSchemaOrgCollection(
            //
            _,
          ),
        ),
      ),
    ),
  );

export default defineContentConfig({
  collections: {
    authors: defineCollection(
      withSEOWrapper({
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
    ),
    blog: defineCollection(
      withSEOWrapper({
        type: 'page',
        source: 'blog/*.{md,mdx}',
        schema: z.object({
          author: z.string().trim(),
          date: z.date(),
          tags: z.array(z.string().trim()),
          image: z.string().trim(),
          lang: z.string().trim().optional(),
        }),
      }),
    ),
    notes: defineCollection(
      withSEOWrapper({
        type: 'page',
        source: 'notes/*.{md,mdx}',
        schema: z.object({
          author: z.string().trim(),
          date: z.date(),
          tags: z.array(z.string().trim()),
          image: z.string().trim(),
          lang: z.string().trim().optional(),
        }),
      }),
    ),
    examples: defineCollection({
      type: 'page',
      source: 'examples/*.{md,mdx}',
      schema: z.object({
        rawbody: z.string().trim(),
      }),
    }),
  },
});
