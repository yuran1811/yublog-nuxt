export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/mdc',
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/eslint',
    'nuxt-llms',
    'nuxt-svgo',
    'reka-ui/nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],
  imports: {
    presets: [
      {
        from: 'zod',
        imports: [
          'z',
          {
            name: 'infer',
            as: 'zInfer',
            type: true,
          },
        ],
      },
    ],
  },
  devtools: {
    enabled: true,
  },
  app: {
    head: {
      titleTemplate: '%s %separator %siteName',
      templateParams: {
        separator: '•',
        siteName: 'yublog',
      },
      htmlAttrs: {
        lang: 'en',
      },
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    },
    // pageTransition: {
    //   name: 'page',
    //   mode: 'out-in',
    // },
    // layoutTransition: {
    //   name: 'layout',
    //   mode: 'out-in',
    // },
  },
  css: ['@/assets/css/main.css'],
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  site: {
    url: 'https://yublog-nuxt.vercel.app',
    name: 'yuran1811 blog',
  },
  content: {
    build: {
      markdown: {
        toc: {
          depth: 3,
          searchDepth: 3,
        },
        highlight: {
          theme: {
            default: 'one-dark-pro',
            dark: 'one-dark-pro',
            light: 'one-light',
          },
          langs: [
            'diff',
            'bash',
            'shell',
            'vue',
            'html',
            'css',
            'js',
            'ts',
            'cpp',
            'c',
            'python',
            'rust',
            'md',
            'mdc',
            'json',
            'yaml',
          ],
        },
      },
    },
    renderer: {
      anchorLinks: false,
    },
    preview: {
      api: 'https://api.nuxt.studio',
    },
  },
  mdc: {
    headings: {
      anchorLinks: false,
    },
    highlight: {
      theme: {
        default: 'one-dark-pro',
        dark: 'one-dark-pro',
        light: 'one-light',
      },
      langs: [
        'diff',
        'bash',
        'shell',
        'vue',
        'html',
        'css',
        'js',
        'ts',
        'cpp',
        'c',
        'python',
        'rust',
        'md',
        'mdc',
        'json',
        'yaml',
      ],
      wrapperStyle: true,
    },
  },
  dir: {
    modules: './app/modules',
  },
  srcDir: 'app',

  routeRules: {
    // more info: https://github.com/danielroe/nuxt-vercel-isr
    '/**': { static: true, prerender: true },
    '/md-editor': { isr: false, ssr: false, prerender: false },
  },

  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    typedPages: true,
  },
  compatibilityDate: '2025-03-01',
  postcss: {
    plugins: {
      'postcss-nested': {},
    },
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
  i18n: {
    customRoutes: 'config',
    pages: {
      about: false,
    },
    lazy: true,
    strategy: 'no_prefix',
    defaultLocale: 'en',
    locales: [
      { code: 'en', language: 'en-US', file: 'en.json' },
      { code: 'vi', language: 'vi-VN', file: 'vi.json' },
    ],
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  icon: {
    serverBundle: {
      collections: ['catppuccin', 'lucide', 'ic'],
    },
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
      sizeLimitKb: 24,
      icons: ['lucide:x', 'lucide:chevron-right'],
    },
    customCollections: [
      {
        prefix: 'local',
        dir: './app/assets/icons',
      },
    ],
  },
  llms: {
    domain: 'https://yublog-nuxt.vercel.app',
    title: 'yuran1811 blog',
    description:
      'A blog about programming, technology, and life experiences, written by yuran1811',
  },
  svgo: {
    autoImportPath: '@/assets/icons',
  },
});
