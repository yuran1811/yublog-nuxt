export default {
  site: 'https://yublog-nuxt.vercel.app/',
  scanner: {
    device: 'desktop',
    exclude: ['/md-editor'],
  },
  lighthouseOptions: {
    onlyCategories: [
      'performance',
      'best-practices',
      'accessibility',
      'seo',
      'pwa',
    ],
  },
};
