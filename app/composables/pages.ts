export const usePages = () => {
  const router = useRouter();
  const { pageCategories } = useAppConfig();

  const routes = router
    .getRoutes()
    .filter(
      (route) =>
        !['index', 'about', 'blog', 'notes', 'all'].includes(
          route.name as string,
        ) &&
        ['blog-', 'notes-'].every((_) => !(route.name as string)?.includes(_)),
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
          slot: 'posts' as const,
          children: [],
        };
      }

      acc[category].children.push({
        label: (route.meta.name || route.name) as string,
        description: route.meta.description as string,
        icon: (route.meta.icon as string) || 'i-lucide-package',
        to: route.path,
        slot: 'posts' as const,
      });

      return acc;
    },
    {} as Record<
      string,
      {
        label: string;
        icon: string;
        to: string;
        slot: string;
        children: Array<{
          label: string;
          description: string;
          icon: string;
          to: string;
          slot: string;
        }>;
      }
    >,
  );

  return {
    pages: [
      [
        {
          label: 'Posts',
          icon: 'lucide:book-open',
          to: '/blog',
          slot: 'posts' as const,
        },
        {
          label: 'Series',
          icon: 'lucide:gallery-horizontal-end',
          to: '/blog/series',
          slot: 'posts' as const,
        },
        {
          label: 'Tags',
          icon: 'lucide:tags',
          to: '/blog/tags',
          slot: 'posts' as const,
        },
        {
          label: 'Notes',
          icon: 'lucide:pen-line',
          to: '/notes',
          slot: 'posts' as const,
        },
        {
          label: 'About',
          icon: 'lucide:info',
          to: '/about',
          slot: 'posts' as const,
        },
        ...Object.values(categorizedRoutes),
      ],
      [
        {
          title: 'Search',
          icon: 'lucide:search',
          slot: 'search' as const,
        },
        {
          title: 'Settings',
          icon: 'lucide:settings',
          slot: 'settings' as const,
        },
      ],
    ],
  };
};
