import type { RouterOptions } from '@nuxt/schema';

export default {
  async scrollBehavior(to, from, savedPosition) {
    const app = useNuxtApp();

    // make sure the route has changed.
    if (app.$i18n && to.name !== from.name) {
      // `$i18n` is injected in the `setup` of the nuxtjs/i18n module.
      // `scrollBehavior` is guarded against being called even when it is not completed
      await app.$i18n.waitForPendingLocaleChange();
    }

    return new Promise((resolve, _) => {
      setTimeout(() => {
        if (savedPosition) {
          return resolve(savedPosition);
        }

        if (to.hash) {
          return resolve({
            el: to.hash,
            top: 0,
          });
        }

        resolve({ top: 0 });
      }, 100);
    });
  },
} satisfies RouterOptions;
