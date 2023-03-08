import { boot } from 'quasar/wrappers'
import { defineAsyncComponent } from 'vue'

// in this path vue-easy-lightbox/dist/external-css/*.js
import VueEasyLightbox from 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.esm.min.js'
// import VueEasyLightbox from 'vue-easy-lightbox'

// you need to import css yourself
import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css'

// import { RecycleScroller } from 'vue3-virtual-scroller'
import 'vue3-virtual-scroller/dist/vue3-virtual-scroller.css'

import VueVirtualScroller from 'vue3-virtual-scroller'

import MasonryWall from '@yeger/vue-masonry-wall'


// import 'src/components/list-item';
// import 'src/components/profile';
// import 'src/components/toolbar';
// import 'src/components/blank';
// import 'src/components/skeleton';
// import 'src/components/widgets';

export default boot( async ({ app, ssrContext, router, store }) => {

  app.component("SkeletonTwitch", () => import('src/components/skeleton/skeleton-twitch.vue'))
  app.component("SkeletonTwitter", () => import('src/components/skeleton/skeleton-twitter.vue'))

  app.component("BlankArtikel", () => import('src/components/blank/artikel.vue'))
  app.component("BlankCari", () => import('src/components/blank/cari.vue'))
  app.component("BlankFavorit", () => import('src/components/blank/favorit.vue'))
  app.component("BlankKomentar", () => import('src/components/blank/komentar.vue'))
  app.component("BlankProfil", () => import('src/components/blank/profil.vue'))
  app.component("BlankSuka", () => import('src/components/blank/suka.vue'))

  app.component("SpinnerOrbit", () => import('src/components/widgets/spinner_orbit.vue'))
  app.component("ActionbarMenu", () => import('src/components/widgets/Actionbar_Menu.vue'))

	app.mixin({
		data() {
		    return {}
		},
		computed: {

		},
		methods: {
		}
	})
  app.use(MasonryWall)

	// app.component('review',
	// 	defineAsyncComponent(() => import('src/components/review.vue'))
	// )

	// app.component('VirtualCollection',
	// 	defineAsyncComponent(() => import("vue-virtual-collection/src/VirtualCollection.vue"))
	// )

	// app.component('BadgeCartUnit',
	// 	defineAsyncComponent(() => import('src/components/widgets/badge_cart_unit.vue'))
	// )

  // app.component('RecycleScroller', RecycleScroller)
  app.use(VueVirtualScroller)


  app.use(VueEasyLightbox)

})
