import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import { getField, updateField } from 'vuex-map-fields'

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

import komentar_balasan from './komentar-balasan/index.js'
import komentar from './komentar/index.js'

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      komentar,
      komentar_balasan
    },
    getters: {
      getField
    },
    mutations: {
      updateField
    },
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: false,//process.env.DEBUGGING
  })

  return Store
})
