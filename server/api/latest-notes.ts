import { z } from 'zod';

const querySchema = z.object({
  limit: z.string().min(0).default('0'),
  page: z.string().min(0).default('0'),
});

export default defineEventHandler(async (ev) => {
  const res = await queryCollection(ev, 'notes').order('date', 'DESC').all();

  const { limit, page } = await getValidatedQuery(ev, querySchema.parse);
  const reqLimit = limit ? Number.parseInt(limit.replace(/\D*/g, '')) : 0;
  const reqPage = page ? Number.parseInt(page.replace(/\D*/g, '')) : 0;

  const allNotes = res.map((_) => ({
    id: _.id,
    title: _.title,
    date: _.date,
    path: _.path,
    tags: _.tags,
  }));

  if (!page || !reqLimit || reqLimit > res.length) return allNotes;
  return allNotes.slice(reqPage * reqLimit, (reqPage + 1) * reqLimit);
});
