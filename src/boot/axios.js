
import { boot } from 'quasar/wrappers'
import axios from 'axios'

import { Loading, Notify, Cookies, Platform, Screen } from 'quasar'

// const api = axios.create({ baseURL: 'https://api.example.com' })

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

import { host } from 'src/boot/common'

export default boot(async ({ app, ssrContext, router, store, urlPath }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  // app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API

  let cookies = null
  let token = null
  let logged = null
  let csrf = null
  let type = null

  var is_cookie_secure = { secure: false }

  axios.defaults.baseURL = host + 'api/v1/' //host+'/api' // 'http://192.168.1.8:8000/api' // 'https://api.hiqma.labsnip.com' //'http://localhost:8000' // 'http://192.168.1.7:8000' // 'http://192.168.1.4:8000' //  "http://192.168.1.4:8000" //
  // axios.defaults.params = {};

  if(process.env.CLIENT) {
    if(Platform.is.cordova) {
      axios.defaults.params = {
        'cordova': true,
      };
      is_cookie_secure = { secure: false }
    } else {
      axios.defaults.params = {
        'cordova': false,
      };
    }
  }

  axios.interceptors.request.use(function (config) {
    // default options

    if(config.method == "post") {
        Loading.show()
    }

    cookies = process.env.SERVER
      ? Cookies.parseSSR(ssrContext)
      : Cookies // otherwise we're on client

    // token = cookies.get('cubix_token_2')
    // csrf = store.getters['auth/auth_csrf'] // cookies.get('cubix_csrf') //
    // type = cookies.get('cubix_type')

    // axios.defaults.params = { 'csrf': csrf };

    // config.headers.common['Authorization'] = `${type} ${token}`
    // config.headers.common['cubix_csrf'] = csrf

    config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    config.headers.post['Content-Type'] = 'multipart/form-data'
    config.headers.post['Content-Type'] = 'application/json'
    // config.headers.post['Content-Type'] = 'application/pdf';

    // console.log('axios.interceptors.response request', config)

    return config

  }, function (error) {
    Loading.hide()
    console.log('axios.interceptors.response error1', error.response)

    return Promise.reject(error)
  })


  axios.interceptors.response.use(async function (response) {

    return response
    Loading.hide()

    console.log('axios.interceptors.response response status', response?.data?.meta?.status)

    csrf = response?.data?.payload?.csrf
    const status = response?.data?.meta?.status

    const requiresAuth = router?.currentRoute?.value?.meta?.requiresAuth
    console.log('JWTMiddleware', requiresAuth)

    // JWTMiddleware.php
    switch (response?.data?.status) {
      case "token_not_provided":
      case "invalid_credentials":
      case "could_not_create_token":
      case "token_expired":
      case "token_invalid":
      case "token_absent":
          // case "unrecognized":

          if(requiresAuth) {
            Notify.create({
                message: 'Sistem otentikasi error',
                color: 'negative',
                position: 'top',
                icon: 'announcement'
            })
            // store.commit('set_token_logout');
          }

          return response;
    }


    if(status == 'init') {
      console.log('axios.interceptors.response response init', response.data)

      await cookies.set('cubix_csrf', response.data.payload.csrf, is_cookie_secure)
      await cookies.set('cubix_token_2', response.data.payload.token, is_cookie_secure)
      await cookies.set('cubix_type', response.data.payload.type, is_cookie_secure)

      console.log('init')

      // await store.commit('auth/auth', {
      //   payload: response.data.payload
      // })

      // await store.commit('profile/user', {
      //   payload: response.data.payload.user
      // })

      // await store.commit('order/form_profile', {
      //   payload: response.data.payload.user
      // })

      return response
    }


    if(status == 'login') {
      await cookies.set('cubix_csrf', response.data.payload.csrf, is_cookie_secure)
      await cookies.set('cubix_token_2', response.data.payload.token, is_cookie_secure)
      await cookies.set('cubix_type', response.data.payload.type, is_cookie_secure)

      // if(store.state.auth.dialog) {
      //   await store.commit('auth/dialog', false)
      // } else {
      //   router.replace({ name: 'profile', params: { id: response.data.payload.user.id }, })
      // }

      // console.log('login')

      // await store.commit('auth/auth', {
      //   payload: response.data.payload
      // })

      // await store.commit('profile/user', {
      //   payload: response.data.payload.user
      // })

      // await store.commit('order/form_profile', {
      //   payload: response.data.payload.user
      // })

      return response
    }

    if(status == '403' || status == 'error_csrf') {
      router.push({ name:'403' })
      return response
    }

    if(status == '404') {
      router.push({ name:'404' })
      return response
    }

    if(status == 'logout' || status == 'unauthorized') {
      cookies.remove('cubix_csrf', is_cookie_secure)
      cookies.remove('cubix_token_2', is_cookie_secure)
      cookies.remove('cubix_type', is_cookie_secure)

      // const route = store.$router.currentRoute.value

      if(route.meta.requiresAuth) {
        router.push({ name:'main' })
      }
      return response
    }

    return response

    /*
    switch(status) {
      // case "token_not_provided":
      // case "invalid_credentials":
      // case "could_not_create_token":
      // case "token_expired":
      // case "token_invalid":
      // case "token_absent":
      case "403":
      case "error_csrf":
        router.push({ name:'403' })
        break
      case "404":
        router.replace({ name:'404' })
        break
      case "logout":
      case "unauthorized":
        // cookies.remove('cubix_token_2')
        // cookies.remove('cubix_csrf')
        // cookies.remove('cubix_type')
        // console.log('unauthorized', store.$router.currentRoute.value)

        cookies.remove('cubix_csrf', is_cookie_secure)
        cookies.remove('cubix_token_2', is_cookie_secure)
        cookies.remove('cubix_type', is_cookie_secure)

        const route = store.$router.currentRoute.value

        if(route.meta.requiresAuth) {
          router.push({ name:'main' })
        }
        break
      case "init":
      case "login":
        // http
        cookies.set('cubix_csrf', response.data.payload.csrf, is_cookie_secure)
        cookies.set('cubix_token_2', response.data.payload.token, is_cookie_secure)
        cookies.set('cubix_type', response.data.payload.type, is_cookie_secure)

        if(store.state.auth.dialog) {
          store.commit('auth/dialog', false)
        } else {
          router.replace({ name: 'profile', params: { id: response.data.payload.user.id }, })
        }

        console.log('login / init')

        store.commit('auth/auth', {
          payload: response.data.payload
        })

        store.commit('profile/user', {
          payload: response.data.payload.user
        })

        store.commit('order/form_profile', {
          payload: response.data.payload.user
        })

        break
    }

    return response
    */
  })


}, function (error) {
  Loading.hide()
  console.log('axios.interceptors.response error2', error.response)

  try {
    if(error.response.data) {

    }
  } catch (err) {

  }

  return Promise.reject(error.response)
})

// export { api }
