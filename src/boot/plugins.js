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

export default boot( async ({ app, ssrContext, router, store }) => {

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
