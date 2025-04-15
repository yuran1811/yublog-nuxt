export const usePages = () => {
  const router = useRouter();
  const { pageCategories } = useAppConfig();

  const routes = router
    .getRoutes()
    .filter(
      (route) =>
        !['index', 'about', 'notes', 'all'].includes(route.name as string) &&
        !(route.name as string)?.includes('blog-'),
    );

  const categorizedRoutes = routes.reduce(
    (acc, route) => {
      const category = (route.meta.category as string) || 'other';
      if (!category) return acc;

      if (!acc[category]) {
        acc[category] = {
          label: pageCategories[category as keyof typeof pageCategories]?.label,
          icon:
            pageCategories[category as keyof typeof pageCategories]?.icon ||
            'i-lucide-folder',
          to: route.path,
          children: [],
        };
      }

      acc[category].children.push({
        label: (route.meta.name || route.name) as string,
        description: route.meta.description as string,
        icon: (route.meta.icon as string) || 'i-lucide-package',
        to: route.path,
      });

      return acc;
    },
    {} as Record<
      string,
      {
        label: string;
        icon: string;
        to: string;
        children: Array<{
          label: string;
          description: string;
          icon: string;
          to: string;
        }>;
      }
    >,
  );

  return {
    pages: [
      [
        {
          label: 'About',
          icon: 'lucide:info',
          to: '/about',
        },
        {
          label: 'Tags',
          icon: 'lucide:tags',
          to: '/blog/tags',
        },
        {
          label: 'Notes',
          icon: 'lucide:pen-line',
          to: '/notes',
        },
        ...Object.values(categorizedRoutes),
      ],
      [
        {
          label: 'Star',
          icon: 'lucide:github',
          badge: 'public',
          to: 'https://github.com/yuran1811/yublog-nuxt',
          target: '_blank',
        },
      ],
    ],
  };
};
