import { boot } from 'quasar/wrappers';

import { useCartStore } from 'src/stores/cart-store'
import { useLangStore } from 'src/stores/lang-store'
import { useRouterStore } from 'src/stores/router-store'
import { useProductsStore } from 'src/stores/products-store'

import { nextTick, defineAsyncComponent } from 'vue';

const default_avatar = 'data:image/webp;base64,UklGRhgUAABXRUJQVlA4IAwUAABQJgKdASrcBdwFPpFIokylpCMiIPDYGLASCWlu4Xf1TmNwsD8+9G2Cey6wptKOz/FhX6RlOBC5B486dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dN8Wf+0/JiwuvJmckzOSZnJMzkmZyTM5JmckzOSZnJMzkmZyTM5JmcKCNr3GMz1FroFnTp06dOnTp06dOnTp06dOnTp06dOnTo4g5lO5KKfUOHDhw4cOHDhw4b8DA+62lC7FnTp06dOnTp06dOnTp06dOnTp06dOnTp0cpDw9KDhxHsZyTM5JmckzOSZnJMzkmZyTM5JmckzOSZnJMzkmZyTM4LYYTUhB+K73ECBAgQIECBAgQIECBAgQIECBAgQIECBAcEDFk09EOyriBAgQIECBAgQH+DwbuEZhLl3N8g10Czp06dOnTp06dOnTp06dOnTp06b5bATvuN10A7jdmlXyDXQLOnTp0dKnKn7FnTp06dOnTp06dOnTp06dOnTp06dOnTp0ch/N+TNOANiUmDh/V4flGxKS8UeAq9jkDKuIECBAf4+ICn7FnTp06dOnTp06dOnTp06dOnTp06dOnTp0ch/N+TNGt4gL01ejjA+491p5AgQIECBAgOEqcqfsWdOnTp06dOnTp06dOnTp06dOnTp06dOnRyH835J6nBSW/lJpkRxADfXECA4kTQv2yrh/j4gKfsWdOnTp06dOnTp06dOnTp06dOnTp06dOnRyH835J6xj48N+JmhsCzpv4BWhPqhZDQtV2EhFH1DflcVKfsWdOnTp06dOnTp06dOnTp06dOnTp06dOnRyH835J6pg6ZmLqhW+J1hajsSuHEgSMOftDw0aL+qgx6sINbMqcqfsWdOnTp06dOnTp06dOnTp06dOnTp06dOnRyH835M0PvtfCQ6NieBbzu2Z0Ola5/pAgNwxgP7miZO+qgxcFqGR8QFP2LOnTp06dOnTp06dOnTp06dOnTp06dOnTo5D+b8miw03C9HKz4Odi4i/mwhXkCA4kCRhz9oeKuHA/BbLhSHIBwlTlT9izp06dOnTp06dOnTp06dOnTp06dOnTp06OQ/m/Jo6LXXwLHkCA3EcsjeOHDfiTPoWRi4LRHxAU/Ys6dOnTp06dOnTp06dOnTp06dOnTp06dOjkP5vyaOb4Kl4cIKCBAbhjAf3N8g1sn4LZcKYQjb4gKfsWdOnTp06dOnTp06dOnTp06dOnTp06dOnRyH835NHN3jTWgwTzYxgDT9s52QJGHP2hbKQLOnTfMP52wVR49KnKn7FnTp06dOnTp06dOnTp06dOnTp06dOnTp0ch/N+TRzRJhtwyhu1Cm94AW/hK+tAGVCopSTEriBAgP8JzD7lTlT9izp06dOnTp06dOnTp06dOnTp06dOnTp06OQ/m/Jo4g01oNcUgVjjAihVUOHGn9FXECBAf4+HlTlT9izp06dOnTp06dOnTp06dOnTp06dOnTp06OQ/m/JosJhtwyhuyHFHLub5BroFjpU1cVKfsWdOnTp06dOnTp06dOnTp06dOnTp06dOnRyH835M0NNaDXFIFZ06dOnTp06dN9jk+ICn7FnTp06dOnTp06dOnTp06dOnTp06dOnTp0ch/N+SekgZux5Dhw4cOHDhw4cMj4eVOVP2LOnTp06dOnTp06dOnTp06dOnTp06dOnTo5D+b8k+jg4cOHDhw4cOHDflcTHLRcyBZ06dOnTp06dOnTp06dOnTp06dOnTp06b5bATvsQU/Ys6dOnTp06dOjpU1cVKfsWdOnTp06dOnTp06dOnTp06dOnTp06dOnRyH835J7bAtBjXSZnJMzkmZyTM5JmckzOSZnJMzkmZyTM5JmckwWUqUlY+ICn7FnTp06dOnTp06dOnTp06dOnTp06dOnTp0ch/N+TRzfINdAs6dOnTp032OWi5kCzp06dOnTp06dOnTp06dOnTp06dOnTp03y2TZhA5QwgxvkGugWdOnTp06dHCB0H6BsEJ1/c3yDXQLOnTp06dOnTp06dOnTp06dOnTp0cuPGABK13wHVGA6owHVGA6owHVGA6owHVGA6owHVGA6owHVGA6owHVF/u0cKcieZBroFnTp06dOnTp06dOnTp06dOnTp06dOnRw+oW1I+C7Mb5BroFnTp06dOnTo4p+iBwOspVEq+Qa6BZ06dOnTp06dOnTp06dOnTp06dOnaRglOq+NwHVGA6owHVGA6owHVGA6owHVGA6owHVGA6owHVGA6owHVGA6i/U+CadiLKHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDhw4cOqoXc3yDXQLOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOm+AAP7/0c3MOcwypZfhiO1pwIADfVJy2jAgACNy8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxLVS5ziXvmiSRZ3eqPxpvMCOyAdvSBBiAopkH2IdBegDM0tCbxugISbtqYKQi1D+syBA+//wCrUszDeqiEe9AVaeUfcc6PI6g3RXohh4R240AIQzio77/2QohEnsToRJ4eTW5gAFUM5VPQJSo+lOX4afH1igA0/A/CEEpvapYLLWmH9y+wxBCoiiC88OniSK/ucamAqTQAA6k3ljTp/y73YirJAAEPOd/NkHrWriOeA5aWqJU7h/4ML0ABqxgwAhkoDEtwt5mjaHAAJ42FHBMzbAAUPaS6Lq9myhb5j9FGFd9p4gjmaNocAPxborYqjC0Akm4ACs2FnKxsC4Ez3M5xHyi4i1EGH0TYozKXen8CYjd2JNJQCJwACIvSwm9sKVAs5PYj4yo8BJ7p3qmOBb2xckG9eRdP8dhXn0hSqrbACBm2AABaWqJU+n146eiLsi8iLAAKrWU3DkPJ1oOAAT20vk8cjgSjAARPTberEc13FkEdt68ldXMFmFj+XhxPrmJMAA9dvGKD/FjQ5K3yBbDiqsWK0hAACJ6bb1YjeeV+tYrU8Eak0YHiADE4suR6Zc6xQAAb+9PftXl40UAAHRuU4W7UGKAAEzFAAAAAAAAAAAAAZUuZ17ZX/77CP1o+aqDK8cgGVFcvBDlXqLUNgAoOCxAZ1kWl4fdFlFdI/6Jlz9OpxiZqAGzZ6cia/oUTwnd+KdvzsP3OgY8QfD9JAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==' //'https://secure.gravatar.com/avatar?d=wavatar';

export const host = 'https://api.properti.labsnip.com/' // 'http://properti-backend.local/'; //

// penambahan global mixin wajib di rebuild lagi nodejs nya

// wajib jika menggunakan globalProperties custom
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $onGoto: {
      (name: any): '',
      (path: any): '',
      (params: any): '',
      (query: any): '',
    };
  }
}


let onGoto: any = null;

export default boot(async ({ app, store, router }) => {

  const cartStore = useCartStore()
  const langStore = useLangStore()
  const routerStore = useRouterStore()
  const useProducts = useProductsStore()

  router.beforeEach((ctx1) => {
    console.log(ctx1)
    app.config.globalProperties.$route_meta = ctx1.meta;
    app.config.globalProperties.$route_path = ctx1.path;
    app.config.globalProperties.$route_params = ctx1.params;
    app.config.globalProperties.$route_query = ctx1.query;
    app.config.globalProperties.$route_name = ctx1.name;
  })
  console.log(app.config.globalProperties.$route_name)
  // console.log(ctx.router, ctx.store.state.value?.lang?.locale, ctx.store.state.value?.routerStore?.route);

  onGoto = (routes: any) => {
    const { query } = routes
    return {
      ...routes,
      query: {
        ...query,
        lang: routerStore.getQuery?.lang
          ? routerStore.getQuery?.lang
          : store.state.value?.lang?.locale //langStore.getLocale,
      },
    };
  }
  app.config.globalProperties.$onGoto = onGoto;

  app.config.globalProperties.$onAddItemCart = cartStore.addItem;
  app.config.globalProperties.$onSubItemCart = cartStore.subItem;

  // gtters yang dipasang di global tidak berfungsi tanpa punya params
  app.config.globalProperties.$getRealSubtotalPriceCart = cartStore.real_subtotal_price;
  app.config.globalProperties.$getRealPriceCart = cartStore.real_price;



  // only support WEBPACK, gak bisa di VITE
  // app.component('VRuntimeTemplate',
  // 	defineAsyncComponent(() => import("vue3-runtime-template"))
  // )

  app.mixin({
    data() {
      return {
        produk_dominion: useProducts.produk_dominion,
        produk_dominion_booster: useProducts.produk_dominion_booster,
        // produk_dominion: {
        //   id: 1,
        //   name:'dominion dot rumble: original edition starter pack',
        //   price: 10,
        //   unit: 1,
        //   img: '~assets/product_1.webp',
        //   weight:150
        // },
        // produk_dominion_booster: {
        //   id: 2,
        //   name:'dominion dot rumble: booster pack',
        //   unit: 1,
        //   price: 5,
        //   img: '~assets/product_2.webp',
        //   weight:150
        // }
      }
    },
    computed: {
      isSERVER() {
        return process.env.SERVER
      },
      isSSR() {
        return process.env.MODE == 'ssr'
      },
      goto() {
        return function (route: any) {
          const { query } = route
          return {
            ...route,
            query: {
              ...query,
              // @ts-ignore
              lang: this.route_query?.lang
                // @ts-ignore
                ? this.route_query?.lang
                : langStore.getLocale,
            },
          };
        };
      },
    },

    methods: {
      route_meta() {
        return this.$route.meta;
      },
      route_path() {
        return this.$route.path;
      },
      route_param() {
        return this.$route.params;
      },
      route_name() {
        return this.$route.name;
      },
      route_query() {
        return this.$route.query;
      },


      handleError(e: any) {
        console.log(e)
        e.target.src = default_avatar
      },
      img_checker_galeri(val: string) {
        try {

          if (val == null || val == undefined) {
            return ''
          }

          let n = val.substring(0, 5);
          let result = n.includes("http" || "https");

          return result ? val : (host + val)

        } catch (error) {
          return ''
        }
      },

      img_checker(val: any) {
        // ////console.log('img_checker', ifImageExist(val))
        // if(!ifImageExist(val)) return default_avatar
        try {

          if (val == null || val == undefined) {
            return default_avatar
          }

          return val

          // let n = val.substring(0, 5);
          // let result = n.includes("http");

          // return result ? val : this.server_host+'/'+val

        } catch (error: any) {
          return default_avatar
        }
      },
    }
  })
})

export { onGoto };
