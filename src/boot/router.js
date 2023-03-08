// import { sync } from 'vuex-router-sync';
import { boot } from 'quasar/wrappers';

// import { mapState, mapWritableState, mapActions } from 'pinia'
// import { useKomentarStore } from 'src/stores/komentar-store.js'

export default boot( async ({ store, router }) => {
  // const routerStore = useKomentarStore()

  router.beforeEach((to) => {
    // ✅ This will work because the router starts its navigation after
    // the router is installed and pinia will be installed too

    // const store = useStore()
    // routerStore.setRouter(to);

    // const mystore = useKomentarStore(store)
    // mystore.action_payload()

    // if (to.meta.requiresAuth && !store.isLoggedIn) return '/login'
  })

});
