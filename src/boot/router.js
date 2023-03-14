// import { sync } from 'vuex-router-sync';
import { boot } from 'quasar/wrappers';

import { useRouterStore } from 'src/stores/router-store'

export default boot( async ({ router }) => {
  const routerStore = useRouterStore()

  router.beforeEach((to) => {
    // ✅ This will work because the router starts its navigation after
    // the router is installed and pinia will be installed too

    // const store = useStore()
    routerStore.setRouter(to);

    // if (to.meta.requiresAuth && !store.isLoggedIn) return '/login'
  })

});
