export default defineEventHandler(async (ev) => {
  return await queryCollection(ev, 'authors')
    .select(
      'name',
      'avatar',
      'gender',
      'bio',
      'mail',
      'discord',
      'dribbble',
      'facebook',
      'github',
      'instagram',
      'linkedin',
      'youtube',
    )
    .all();
});
