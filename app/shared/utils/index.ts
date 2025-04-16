import type { AuthorsCollectionItem } from '@nuxt/content';

export const parseAuthorData = (
  data: AuthorsCollectionItem | null | undefined,
) => ({
  name: data?.name || '',
  avatar: data?.avatar || '',
  gender: !!data?.gender,
  bio: data?.bio || '',
  mail: data?.mail || '',
  discord: data?.discord || '',
  dribbble: data?.dribbble || '',
  facebook: data?.facebook || '',
  github: data?.github || '',
  instagram: data?.instagram || '',
  linkedin: data?.linkedin || '',
  youtube: data?.youtube || '',
});
