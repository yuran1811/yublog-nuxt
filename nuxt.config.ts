export default defineNuxtConfig({
  modules: [
    '@nuxtjs/seo',
    '@nuxtjs/mdc',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'reka-ui/nuxt',
    'nuxt-svgo',
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
    enabled: false,
  },
  app: {
    head: {
      title: 'yublog',
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in',
    },
  },
  css: ['@/assets/css/main.css'],
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
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
            'bash',
            'css',
            'html',
            'js',
            'json',
            'md',
            'mdc',
            'python',
            'rust',
            'shell',
            'ts',
            'vue',
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
        'bash',
        'css',
        'html',
        'js',
        'json',
        'md',
        'mdc',
        'python',
        'rust',
        'shell',
        'ts',
        'vue',
        'yaml',
      ],
    },
  },
  dir: {
    modules: './app/modules',
  },
  srcDir: 'app',
  routeRules: {
    // more info: https://github.com/danielroe/nuxt-vercel-isr
    '/**': { isr: 60, prerender: true },
    '/md-editor': { ssr: false },
  },
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    typedPages: true,
  },
  compatibilityDate: '2025-03-01',

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
  icon: {
    serverBundle: {
      collections: ['catppuccin', 'lucide', 'ic'],
    },
    customCollections: [
      {
        prefix: 'local',
        dir: './app/assets/icons',
      },
    ],
  },
  svgo: {
    autoImportPath: '@/assets/icons',
  },
});
