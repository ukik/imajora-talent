import { sync } from 'vuex-router-sync';
import { boot } from 'quasar/wrappers';
import axios from 'axios'
import { Loading, Notify, Cookies, Platform } from 'quasar'

export default boot( async ({ router, store, ssrContext }) => {

  const cookies = process.env.SERVER
  ? Cookies.parseSSR(ssrContext)
  : Cookies // otherwise we're on client

  sync(store, router);

  if(!store.state.auth.init_status.loading) {
    // await store.dispatch('auth/init')
    await axios.get('/auth/init').catch(err => null)

    await router.beforeEach(async (to, from, next) => {

      let logged = store.getters['auth/is_logged']
      const id = store.getters['auth/user'].id

      console.log('xxxxxxxxxx 2', logged, to.meta.requiresAuth, from.meta.requiresAuth)


      if(to.meta.requiresAuth) {
        if(to.name == 'login') {
          if(logged) {
            next({ name: 'profile', params: { id: id }, })
          } else {
            next();
          }
        } else {
          next();
        }
      } else {
        next()
      }
    })
  }

});
