export default defineAppConfig({
  app: {
    name: 'yublog',
    author: 'yuran1811',
    repo: 'https://github.com/yuran1811/yublog-nuxt',
  },
  pageCategories: {
    other: {
      label: 'Other',
      icon: 'lucide:box',
    },
  },
  ui: {
    contextMenu: {
      slots: {
        group: 'p-1 isolate max-h-42 overflow-y-auto w-max',
      },
    },
    colors: {
      primary: 'green',
      neutral: 'zinc',
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
    },
    formField: {
      slots: {
        root: 'w-full',
      },
    },
    input: {
      slots: {
        root: 'w-full',
      },
    },
    textarea: {
      slots: {
        root: 'w-full',
        base: 'resize-none',
      },
    },
    accordion: {
      slots: {
        trigger: 'cursor-pointer',
        item: 'md:py-2',
      },
    },
    navigationMenu: {
      slots: {
        link: 'cursor-pointer',
      },
      variants: {
        disabled: {
          true: {
            link: 'cursor-text',
          },
        },
      },
    },
  },
});
