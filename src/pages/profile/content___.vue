
<style type="text/css" scoped>
@supports (position: sticky) {
  .is_sticky {
    z-index:9;
    position: sticky;
    top: 50px;
  }

  .is_sticky_B {
    z-index:9;
    position: sticky;
    top: 82px;
  }
}
</style>

<template>
<div>
	<q-tabs
		id="tab"
		:value="tab"
		:class="[ !is_not_player_real_closed ? 'is_sticky_B' : 'is_sticky' ]"
		no-caps
		class="text-grey bg-white"
		active-color="primary"
		indicator-color="primary"
		align="justify"
		:narrow-indicator='false'
		:breakpoint="0"
		>
			<q-tab :disable="isDisableSwiper" @click="() => onChangeTab(item, index)" class="q-pa-none q-px-md" v-for="(item, index) in tab_items" :key="index+'tab_items'" :name="item.value" :label="item.label" />
	</q-tabs>

	<!-- v-if="$q.platform.is.mobile"  -->

	<!-- PENTING, jika halaman lebih < 768 maka 'swiper-container-1' ? 'swiper-container' -->

	<div  id="swiper-kanal" class="swiper-container swiper-container-initialized swiper-container-horizontal">
	  <div class="swiper-wrapper" :class="[isDisableSwiper || !isSwipeableTab ? 'swiper-no-swiping' : '']">

        <div class="swiper-slide" :style="'min-height:'+($q.screen.height-height_toolbar-height_tab)+'px;'">
			<!-- <SkeletonTwitter v-if="get_profile_konten_beranda.length <= 0 && tab == 'tab0'" /> -->

			<Tab0  v-if="tab == 'tab0'" />

			<SkeletonTwitter v-if="tab == 'tab1'" />

        </div>

        <div class="swiper-slide" :style="'min-height:'+($q.screen.height-height_toolbar-height_tab)+'px;'">

	        <Tab1  v-if="tab == 'tab1'" />

          	<SkeletonTwitter v-if="tab == 'tab0' || tab == 'tab2'" />

        </div>

        <div class="swiper-slide" :style="'min-height:'+($q.screen.height-height_toolbar-height_tab)+'px;'">

	        <Tab2  v-if="tab == 'tab2'" />

          	<SkeletonTwitter v-if="tab == 'tab1' || tab == 'tab3'" />
        </div>

        <div class="swiper-slide" :style="'min-height:'+($q.screen.height-height_toolbar-height_tab)+'px;'">

	        <Tab3  v-if="tab == 'tab3'" />

          	<SkeletonTwitter v-if="tab == 'tab2' || tab == 'tab4'" />

        </div>

		<div class="swiper-slide" :style="'min-height:'+($q.screen.height-height_toolbar-height_tab)+'px;'">

	        <Tab4  v-if="tab == 'tab4'" />

          	<SkeletonTwitter v-if="tab == 'tab3' || tab == 'tab5'" />

        </div>

		<div class="swiper-slide" :style="'min-height:'+($q.screen.height-height_toolbar-height_tab)+'px;'">

	        <Tab5  v-if="tab == 'tab5'" />

          	<SkeletonTwitter v-if="tab == 'tab4' || tab == 'tab6'" />

        </div>
<!--
		<div class="swiper-slide" :style="'min-height:'+($q.screen.height-height_toolbar-height_tab)+'px;'">

          	<SkeletonTwitter v-if="tab == 'tab5'" />

	        <Tab6  v-if="tab == 'tab6'" />

        </div> -->

<!--         <div class="swiper-slide" v-for="(item, index) in tab_items" :key="index+'q-tab-panel'">

          <component :is="'Tab'+item.id" :prop_viewport="'max-height:'+($q.screen.height-height_toolbar-height_tab)+'px;'" :prop_tab="item.value" :prop_active="tab" :prop_ready="prop_ready(item.id)" />

          <SkeletonTwitter v-if="get_profile_konten_beranda.length <= 0 && tab == 'tab1'" />

        </div>
 -->
	  </div>
	</div>

    <!-- <q-tab-panels v-model="tab" v-if="false"
      animated
      v-else
      :swipeable="true"
      :keep-alive="false"
      transition-prev="slide-right"
      transition-next="slide-left">

      <q-tab-panel  v-for="(item, index) in tab_items" :key="index+'q-tab-panel'" :name="item.value" class="q-pa-none">
          <component :is="'Tab'+item.id" :prop_viewport="'max-height:'+($q.screen.height-height_toolbar-height_tab)+'px;'" :prop_tab="item.value" :prop_active="tab" :prop_ready="prop_ready(item.id)" />
      </q-tab-panel>
    </q-tab-panels>   	 -->
</div>
</template>

<script type="text/javascript">
// Wajib
const Tab0 = () => import("./tabs/beranda.vue")
const Tab1 = () => import("./tabs/gambar.vue")
const Tab2 = () => import("./tabs/video.vue")
const Tab3 = () => import("./tabs/artikel.vue")
const Tab4 = () => import("./tabs/konsultasi.vue")
const Tab5 = () => import("./tabs/jawaban_konsultasi.vue")
// const Tab6 = () => import("./tabs/live.vue")

;

export default {
		computed: {
			// ...mapFields({
			//       loading: "profile.loading",
			//       current_tab: "profile.current_tab",
			//       is_not_player_real_closed: "alquran_index.is_not_player_real_closed",
			// }),
		},
		components: {
		    Tab0,
		    Tab1,
		    Tab2,
		    Tab3,
		    Tab4,
		    Tab5,
		    // Tab6,
		},
		created() {
			this.tabWatch('tab0')
		},
		watch: {
			loading(val) {
				if(!val) {
			        setTimeout(() => {
			        	this.isDelaySwiper = false
			        }, 500)
				}
			},
			// "$q.screen.width": {
			// 	deep: true,
			// 	handler(val) {
			// 		if(this.$q.platform.is.cordova) return
			// 		setTimeout(() => {
			// 			// location.reload();
			// 		}, 500)
			// 	}
			// }
		},
		beforeDestroy(){
			// if(this.is_cordova) {
			// 	// this.dispatchVuex('profile/action_clean_tab')
			// }
			window.clearTimeout()
		},
		deactivated(){
			// if(this.is_cordova) {
			// 	// this.dispatchVuex('profile/action_clean_tab')
			// }
			window.clearTimeout()
		},
		methods: {
		    async scrollTopTab() {
		      if (this.el_tab !== null) {
		        await this.scrollToElement(this.el_tab, 50, 0);
		      }
		    },
			async onRefreshTab() {
				if(this.el_tab !== null) {
					this.scrollTopTab()
				}

				await this.dispatchVuex('beranda/action_kanal_refresh', { page: 1, alias: this.current_tab })
			},
		    // onBubbleEvent_MOUNTED(event) {
		    // 	console.log('onBubbleEvent_MOUNTED',event)
		    // 	// this.MOUNTED = event
		    // 	if(event) {
		    // 		this.isDisableSwiper = false
		    // 	} else {
		    // 		this.isDisableSwiper = true
		    // 	}
		    // },
			onSwiper() {
				const vm = this

				const mySwiper = new Swiper( '.swiper-container', {
					centeredSlides: true,
					// zoom : true,
					watchOverflow: true,
					// When enabled Swiper will be disabled and hide navigation buttons on case there are not enough slides for sliding
				});

				vm.mySwiper = mySwiper

				// // vm.mySwiper.on('slideChange', function () {
				// //   	// console.log('slide changed', vm.mySwiper.activeIndex);
				// //   	vm.tab = "tab"+(vm.mySwiper.activeIndex)
				// // 	// vm.tabWatch(('tab'+(vm.mySwiper.activeIndex + 1)))
				// // });


				// vm.mySwiper.on('slideChangeTransitionStart', function () {
				// 	vm.isDisableSwiper = true
				// });


				// vm.mySwiper.on('slideChangeTransitionEnd', function () {
				//   	// console.log('slide changed', vm.mySwiper.activeIndex);
				//   	vm.tab = "tab"+(vm.mySwiper.activeIndex)
  		// 			vm.tabWatch('tab'+vm.mySwiper.activeIndex)

				// });
			},
		    // prop_ready(value) {
		    //   return this['tab_'+value+'_ready']
		    // },
			async onChangeTab(item, index){

				if(this.isDelaySwiper) return
				if(!this.mySwiper) return

				this.isDelaySwiper = true

				this.not_switch_tab = false

				// if(this.is_cordova) {
				  	// await this.dispatchVuex('profile/action_clean_tab')
				// }

				this.tab = ('tab'+item.id)
				setTimeout(() => {
					this.tabWatch(('tab'+item.id))
				}, 350)
				this.tab_index = index

				this.mySwiper.slideTo(item.id);

			},
		    tabWatch(val) {
		      this.scrollTopTab()

		      this.tab_0_ready = false
		      this.tab_1_ready = false
		      this.tab_2_ready = false
		      this.tab_3_ready = false
		      this.tab_4_ready = false
		      this.tab_5_ready = false
		    //   this.tab_6_ready = false

		      // if(this.el_tab !== null) {
		      // 	this.scrollToElement(this.el_tab, 48, 0)
		      // }

		      setTimeout(() => {
		        switch(val) {
		          case "tab0":
		            this.tab_0_ready = true
					// this.action_profile_payload_current_tab('beranda')
					this.dispatchVuex('profile/action_payload_current_tab', "beranda")
		            break
		          case "tab1":
		            this.tab_1_ready = true
					// this.action_profile_payload_current_tab('gambar')
					this.dispatchVuex('profile/action_payload_current_tab',  "gambar")
		            break
		          case "tab2":
		            this.tab_2_ready = true
					// this.action_profile_payload_current_tab('video')
					this.dispatchVuex('profile/action_payload_current_tab', "video")
		            break
		          case "tab3":
		            this.tab_3_ready = true
					// this.action_profile_payload_current_tab('artikel')
					this.dispatchVuex('profile/action_payload_current_tab', "artikel")
		            break
		          case "tab4":
		            this.tab_4_ready = true
					// this.action_profile_payload_current_tab('konsultasi')
					this.dispatchVuex('profile/action_payload_current_tab', "konsultasi")
		            break
		          case "tab5":
		            this.tab_5_ready = true
					// this.action_profile_payload_current_tab('jawaban_konsultasi')
					this.dispatchVuex('profile/action_payload_current_tab', "jawaban_konsultasi")
		            break
		        }
		      }, 0)

		    },
		},
		async mounted() {
			// alert(this.$q.platform.is.mobile)
			const vm = this
			await vm.onSwiper()

			// console.log(document.getElementById("toolbar"))
			// if(document.getElementById("toolbar")) {
			// 	this.el_tab = document.getElementById('swiper-kanal')

			// 	this.height_toolbar = document.getElementById("toolbar").offsetHeight
			// 	this.height_tab = document.getElementById("tab").offsetHeight
			// }

			if(document.getElementById("toolbar")) this.height_toolbar = document.getElementById("toolbar");
			if(document.getElementById("tab")) this.height_tab = document.getElementById("tab");
			if(document.getElementById("swiper-kanal")) this.el_tab = document.getElementById("swiper-kanal");

			// setTimeout(() => {
			// 	this.mySwiper.slideTo(2);
			// 	this.tab = 'tab2'
			// }, 2000)

		},
		props: {
			isSwipeableTab: {
				default: false,
			}
		},
		data () {
			return {
				isDisableSwiper: false,
				// MOUNTED: false,

				mySwiper: null,

				height_toolbar: 0,
				height_tab: 0,
				text: '',
				tab: 'tab0', //

				el_tab: null,

				tab_0_ready: false,
				tab_1_ready: false,
				tab_2_ready: false,
				tab_3_ready: false,
				tab_4_ready: false,
				tab_5_ready: false,
				// tab_6_ready: false,

				tab_items: [
					{ id:"0", value: "tab0", label: "Beranda"},
					{ id:"1", value: "tab1", label: "Gambar"},
					{ id:"2", value: "tab2", label: "Video"},
					{ id:"3", value: "tab3", label: "Artikel"},
					{ id:"4", value: "tab4", label: "Konsultasi"},
					{ id:"5", value: "tab5", label: "Menjawab"},
					// { id:"6", value: "tab6", label: "Live"},
				]
			}
		},
	};
</script>
