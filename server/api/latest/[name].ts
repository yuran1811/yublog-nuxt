import type { Collections } from '@nuxt/content';
import { z } from 'zod';

const querySchema = z.object({
  limit: z.string().min(0).default('0'),
  page: z.string().min(0).default('0'),
});

export default defineEventHandler(async (ev) => {
  const name = getRouterParam(ev, 'name') as Extract<
    keyof Collections,
    'blog' | 'notes'
  >;
  if (!name) {
    return createError({
      statusCode: 400,
      statusMessage: '`name` is required',
    });
  }

  const res = await queryCollection(ev, name)
    .select('id', 'title', 'date', 'path', 'tags', 'lang', 'rawbody')
    .order('date', 'DESC')
    .all();

  const { limit, page } = await getValidatedQuery(ev, querySchema.parse);
  const reqLimit = limit ? Number.parseInt(limit.replace(/\D*/g, '')) : 0;
  const reqPage = page ? Number.parseInt(page.replace(/\D*/g, '')) : 0;

  if (!page || !reqLimit || reqLimit > res.length) return res;
  return res.slice(reqPage * reqLimit, (reqPage + 1) * reqLimit);
});
