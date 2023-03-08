import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import { getField, updateField } from 'vuex-map-fields'
// import createMultiTabState from 'vuex-multi-tab-state';

import komentar from './komentar'

export default store(function (/* { ssrContext } */) {

const Store = createStore({
    modules: {
      komentar,
    },
    state: {

    },
    getters: {
      getField,
    },
    mutations: {
      updateField,
    },
    actions: {

    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  Store.subscribe( (mutation, state) => {
    // console.log(state.auth.auth.logged)
    // if(!state.auth.auth.logged) {

    // }
    // console.log(mutation, state)
  })

  return Store
})
