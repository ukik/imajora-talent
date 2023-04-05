import { boot } from 'quasar/wrappers'
import { defineAsyncComponent } from 'vue'

import Vue3Tour from 'vue3-tour'
// import VueEasyLightbox from 'vue-easy-lightbox'

import 'vue3-tour/dist/vue3-tour.css'

// tidak bisa lazy component
// import VRuntimeTemplate from "vue3-runtime-template";

// import Skeleton_Twitter from 'src/components/skeleton/Skeleton_Twitter.vue'
// import Skeleton_Twitch from 'src/components/skeleton/Skeleton_Twitch.vue'

// import VueNumberInput from '@chenfengyuan/vue-number-input';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import YouTube from 'vue3-youtube'

export default boot( async ({ app, ssrContext, router, store }) => {

  app.component('YouTube', YouTube)

	app.mixin({
		data() {
		    return {}
		},
		computed: {
			img_investment() {
				return require('src/assets/flaticon/investment.png')
			},
			img_pilihan() {
				return require('src/assets/flaticon/calendar.png')
			},
			img_penawaran() {
				return require('src/assets/flaticon/store.png')
			},
			img_carousel() {
				return require('src/assets/flaticon/monitor.png')
			},
			img_renewable() {
				return require('src/assets/flaticon/renewable.png')
			},
			img_sms_gagal() {
				return require('src/assets/flaticon/cross.png')
			},
			img_lupa_sandi() {
				return require('src/assets/flaticon/shield.png')
			},
			img_ganti_telepon() {
				return require('src/assets/flaticon/chat-bubble.png')
			},
			img_sms() {
				return require('src/assets/flaticon/email.png')
			},
			img_doc() {
				return require('src/assets/flaticon/google-docs.png')
			},
			img_belum_submit() {
				return require('src/assets/flaticon/crisis-management.png')
			},
			img_belum_validasi() {
				return require('src/assets/flaticon/clock.png')
			},
			img_siap_promosi() {
				return require('src/assets/flaticon/shopping-cart.png')
			},
			img_visibilitas() {
				return require('src/assets/flaticon/transaction.png')
			},
			img_stok() {
				return require('src/assets/flaticon/package.png')
			},
			img_blokir() {
				return require('src/assets/flaticon/house (2).png')
			},
			img_validasi() {
				return require('src/assets/flaticon/house.png')
			},
			img_formulir() {
				return require('src/assets/flaticon/compliance.png')
			},



			img_login() {
				return require('src/assets/flaticon/rent.png')
			},
			img_forget() {
				return require('src/assets/flaticon/mail.png')
			},
			img_verifikasi() {
				return require('src/assets/flaticon/insurance.png')
			},
			img_register() {
				return require('src/assets/flaticon/lender.png')
			},
			img_house() {
				return require('src/assets/flaticon/house.png')
			},
			img_marketing() {
				return require('src/assets/flaticon/marketing.png')
			},
			img_login() {
				return require('src/assets/flaticon/rent.png')
			},


			img_tips() {
				// <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
				return require('src/assets/flaticon/science.png')
			},
			img_tips_1() {
				return require('src/assets/flaticon/light-bulb.png')
			},
			img_task() {
				return require('src/assets/flaticon/tasks.png')
			},
			img_hapus() {
				return require('src/assets/flaticon/bin.png')
			},
			img_hapus_1() {
				return require('src/assets/flaticon/bin2.png')
			},
			img_hapus_2() {
				return require('src/assets/flaticon/delete2.png')
			},
			img_mapel() {
				return require('src/assets/flaticon/language-learning.png')
			},
			img_mapel_1() {
				return require('src/assets/flaticon/presentation.png')
			},
			img_mapel_2() {
				return require('src/assets/flaticon/diploma.png')
			},
			img_top_teacher() {
				return require('src/assets/flaticon/teaching.png')
			},
		},
		methods: {
			onToastBottom(text) {
				// window.plugins.toast.showLongBottom(text,
				// 	function(a){ console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})
			},
      allValidate(value = this.$refs) {
        let keys = []
        setTimeout(() => {
          for (let [key, value] of Object.entries(this.$refs)) {
            try {
              console.log('auto validate')
              value.validate();
            } catch (e) { }
            // console.log(key)
            // keys.push(value)
            // if (/^tenure/.test(key)) {
            //     keys.push({ key: value })
            // }
          }
        }, 0)
        // console.log('all refs', this.$refs)
      },
		}
	})

	// app.component(VueNumberInput.name, VueNumberInput);

	const options = {
	  confirmButtonColor: '#41b882',
	  cancelButtonColor: '#ff7674',
	};

	app.use(VueSweetalert2, options);
	app.use(Vue3Tour)
	// app.use(VueEasyLightbox)

	app.component('Tags',
		defineAsyncComponent(() => import('src/components/Tags.vue'))
	)

	// app.component('Regency',
	// 	defineAsyncComponent(() => import('src/components/Regency.vue'))
	// )

	// app.component('Paginate_Bookmark',
	// 	defineAsyncComponent(() => import('src/components/Paginate_Bookmark.vue'))
	// )

	// app.component('Paginate_Aset',
	// 	defineAsyncComponent(() => import('src/components/Paginate_Aset.vue'))
	// )

	// app.component('Paginate_Pencarian',
	// 	defineAsyncComponent(() => import('src/components/Paginate_Pencarian.vue'))
	// )

	// app.component('Paginate_Riwayat',
	// 	defineAsyncComponent(() => import('src/components/Paginate_Riwayat.vue'))
	// )

	// app.component('Top_Left_Ribbon',
	// 	defineAsyncComponent(() => import('src/components/Top_Left_Ribbon.vue'))
	// )

	// app.component('SearchTune',
	// 	defineAsyncComponent(() => import('src/layouts/components/SearchTune.vue'))
	// )

	// app.component('Tab_Riwayat',
	// 	defineAsyncComponent(() => import('src/components/Tab_Riwayat.vue'))
	// )

	// app.component('Tab_Formulir',
	// 	defineAsyncComponent(() => import('src/components/Tab_Formulir.vue'))
	// )

	// app.component('Tab_Tentang',
	// 	defineAsyncComponent(() => import('src/components/Tab_Tentang.vue'))
	// )

	// app.component('Tab_Aset',
	// 	defineAsyncComponent(() => import('src/components/Tab_Aset.vue'))
	// )

	// app.component('Empty',
	// 	defineAsyncComponent(() => import('src/components/Empty.vue'))
	// )

	// app.component('Empty_Mini',
	// 	defineAsyncComponent(() => import('src/components/Empty_Mini.vue'))
	// )

	// app.component('onBoarding',
	// 	defineAsyncComponent(() => import('src/components/onBoarding.vue'))
	// )

	// app.component('OwnedLabel',
	// 	defineAsyncComponent(() => import('src/components/Owned.vue'))
	// )

	// app.component('CountryCode',
	// 	defineAsyncComponent(() => import('src/components/CountryCode.vue'))
	// )

})
