<style type="text/css" scoped>
@supports (position: sticky) {
  .is_sticky {
    z-index:8000;
    position: sticky;
    top: 50px; 
  }
} 
</style>

<template>
    <q-drawer  show-if-above :breakpoint="768" v-model="right_drawer" side="right" :width="$q.screen.width < 1100 && $q.screen.width > 1014 ? 250 : 300">

    	<q-no-ssr>
    		<div data-v-step="finish"></div>
			<v-tour name="myTour" :steps="steps" :options="myOptions"></v-tour>
    	</q-no-ssr>

    	<q-no-ssr>
    	<q-scroll-area v-show="right_drawer" class="content bg-grey-3 q-mr-xs" :class="[ screen_width > 1014 ? 'is_sticky' : '' ]" :style="height"> 

		<!-- <q-scroll-area style="height: calc(100% - 50px); margin-top: 50px; border-right: 1px solid #ddd"> -->
    	<!-- <q-scroll-area class="content bg-grey-3 is_sticky q-mr-xs" :style="'height:'+(height - ayat_player)+'px; min-height:'+(height - ayat_player)+'px;'"> -->
		  <div class="q-px-md">
		  	<slot />

		  	<Sponsor data-v-step="0" />
		  	<AlquranGuest v-if="!ayat_terakhir_dibaca.id" class="q-mt-md " data-v-step="1" />
		  	<AlquranPlayer data-v-step="2" />
	
		  	<div v-if="logged">
			  	<AyatTerakhirDibaca v-if="ayat_terakhir_dibaca.id" data-v-step="1" />
			  	<router-link class="unlink" :to="({ 
				    name: 'koin_dompet',
					params: {
						id: get_authentication_user.id
					}			    
				  })">
			  		<Dompet data-v-step="3" />
			  	</router-link>
			  	<router-link v-if="lokasi.latitude && lokasi.longitude"  class="unlink" :to="({ 
				    name: 'sholat',
				  })">
				  	<Absensi data-v-step="4" />
			  	</router-link>
		  	</div>

		  	<Pengumuman data-v-step="5" />

		  	<div class="row q-mt-md">
			    <Kalender data-v-step="6" class="col" />
			</div>

	    	<Misi v-if="logged" data-v-step="7" />

	    	<div style="margin-bottom:20px;" />
		  </div>
		</q-scroll-area>
    	</q-no-ssr>

    </q-drawer>	
</template>

<script type="text/javascript">
import { mapFields } from "vuex-map-fields";
import { mapGetters } from "vuex";



export default {
  	computed: {
    	...mapFields({
    		right_drawer: "drawer.right_drawer",
			ayat_player_display: "alquran_index.ayat_player_display",
			ayat_terakhir_dibaca: "alquran.ayat_terakhir_dibaca",
		    is_not_player_real_closed: "alquran_index.is_not_player_real_closed", 			

			lokasi: 'authentication.lokasi',

		}),
		...mapGetters({
			logged: 'authentication/get_user_logged',
		})
	},
	data() {
		return {
			// drawer: true,
			ayat_player: 0,		
			height: '',
			add_height: 51,

			myOptions: {
			  useKeyboardNavigation: false,
			  labels: {
			    buttonSkip: 'Skip tour',
			    buttonPrevious: 'Previous',
			    buttonNext: 'Next',
			    buttonStop: 'Finish'
			  }
			},

			steps: [
			  {
			    target: '[data-v-step="0"]',  // We're using document.querySelector() under the hood
			    header: {
			      title: 'Get Started',
			    },
			    content: `Discover <strong>Vue Tour</strong>!`
			  },
			  {
			    target: '[data-v-step="1"]',
			    content: 'An awesome plugin made with Vue.js!'
			  },
			  {
			    target: '[data-v-step="2"]',
			    content: 'An awesome plugin made with Vue.js!'
			  },
			  {
			    target: '[data-v-step="3"]',
			    content: 'An awesome plugin made with Vue.js!'
			  },
			  {
			    target: '[data-v-step="4"]',
			    content: 'An awesome plugin made with Vue.js!'
			  },
			  {
			    target: '[data-v-step="5"]',
			    content: 'An awesome plugin made with Vue.js!'
			  },
			  {
			    target: '[data-v-step="6"]',
			    content: 'An awesome plugin made with Vue.js!'
			  },
			  {
			    target: '[data-v-step="7"]',
			    content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
			    params: {
			      placement: 'top' // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
			    }
			  },
			  {
			    target: '[data-v-step="finish"]',
			    content: 'Terimakasih',
			    params: {
			      placement: 'top' // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
			    }			    
			  },			  
			]

		}
	},
	mounted() {
	    // this.height = 'height:'+(this.$q.screen.height -  51 - 50 - this.ayat_player)+'px;  margin-top: 0px;'
	    this.height = 'height:'+(this.$q.screen.height -  this.add_height )+'px;  margin-top: 0px;'

		if(this.is_not_player_real_closed) {
		  this.ayat_player = 0
		} else {
		  this.ayat_player = 71
		}
	},
	created() {
	    this.$store.dispatch('drawer', { key: 'right_drawer', value: this.screen_width > 1024 })
		this.add_height = this.screen_width > 1014 ? 51 : 0
	},
	watch: {
		screen_width(val) {
		    // this.$store.dispatch('drawer', { key: 'right_drawer', value: this.screen_width > 1024 })
			this.add_height = val > 1014 ? 51 : 0
		},
		is_not_player_real_closed(val) {
		  if(val) {
		    this.ayat_player = 0
		  } else {
		    this.ayat_player = 71
		  }
		},
		right_drawer(val) {
			if(val) {
				// this.$store.dispatch('drawer', { key: 'right_drawer', value: this.screen_width > 1024 })
			}
		}
	},
	components: {
		Sponsor: () => import("./app_drawer_sponsor"),
		Kalender: () => import("./app_drawer_kalender"),
		Misi: () => import("./app_drawer_misi"),
		Pengumuman: () => import("./app_drawer_pengumuman"),
		Absensi: () => import("./app_drawer_cuplikan_absensi"),
		Dompet: () => import("./app_drawer_dompet"),
		AlquranPlayer: () => import("./app_drawer_alquran_player"),
		AyatTerakhirDibaca: () => import("./app_drawer_ayat_terakhir_dibaca"),

		AlquranGuest: () => import("./app_drawer_alquran_guest"),



	}
};
</script>