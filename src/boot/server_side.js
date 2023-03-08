import { boot } from 'quasar/wrappers'
import { defineAsyncComponent } from 'vue'

// import Vue3Tour from 'vue3-tour'
// import VueEasyLightbox from 'vue-easy-lightbox'

import 'vue3-tour/dist/vue3-tour.css'

// tidak bisa lazy component
// import VRuntimeTemplate from "vue3-runtime-template";

// import Skeleton_Twitter from 'src/components/skeleton/Skeleton_Twitter.vue'
// import Skeleton_Twitch from 'src/components/skeleton/Skeleton_Twitch.vue'

// import ListItemButton from 'src/components/list_item_button.vue'
// import FilterGuru from 'src/components/filter_guru.vue'

// import Entry from 'src/pages/Entry.vue'


import Wrapper from 'src/components/Wrapper.vue'

// import { GoogleMap, Marker } from 'vue3-google-map'

// import SkeletonTwitch from 'src/components/SkeletonTwitch.vue'

export default boot( async ({ app, ssrContext, router, store }) => {

	// app.use(Vue3Tour)
	// app.use(VueEasyLightbox)

	// app.component('VRuntimeTemplate', VRuntimeTemplate)

	// app.component('Skeleton_Twitch', Skeleton_Twitch)
	// app.component('Skeleton_Twitter', Skeleton_Twitter)

	// app.component('ListItemButton', ListItemButton)

	// app.component('GoogleMap', GoogleMap);
	// app.component('Marker', Marker);


	app.component('Wrapper', Wrapper)

	// app.component('SkeletonTwitch', SkeletonTwitch)

	// app.component('QCurrencyInput', QCurrencyInput)

})
