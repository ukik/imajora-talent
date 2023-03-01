<template>

<div v-if="last_page > 1" class="q-pt-lg q-mb-md text-center flex flex-center bg-white">

    <q-pagination v-if="!is_mobile_size" round size="16px" outline
		:model-value="current_page" color="blue-4"
		:max="last_page" unelevated
		:max-pages="3"
		@update:model-value="onUpdate"
		boundary-numbers
		direction-links
		boundary-links
		active-color="blue-5"
		active-text-color="white"
    />

    <q-pagination v-else round outline
		:model-value="current_page" color="blue-4"
		:max="last_page" unelevated
		:max-pages="3"
		@update:model-value="onUpdate"
		input
		input-class="text-orange-10"
		boundary-numbers
		direction-links
		boundary-links
		active-color="blue-5"
		active-text-color="white"
    />

</div>
</template>

<script type="text/javascript">
import { mapFields } from 'vuex-map-fields'

export default {
  computed: {
    // ...mapFields({
		// 	// current_page: 'aset.publik.data.payload.current_page',
		// 	// last_page: 'aset.publik.data.payload.last_page',

		// 	aset: 'aset',
		// 	tab: 'aset.tab',
    // }),
  	// last_page() {
  	// 	return this.aset[this.tab].data.payload.last_page
  	// },
  	// current_page() {
  	// 	return this.aset[this.tab].data.payload.current_page
  	// }
  },
  data() {
    return {
    aset:'',
    tab:'tab',
    last_page:10,
    current_page:2,
    }
  },
  watch: {
		last_page(val) {
			// console.log(val, this.route_name)
			if(this.route_name !== 'aset') return
			if(this.route_param.page > val) {
				this.onUpdate(val)
			}
		}
  },
  methods: {
  	onUpdate(val) {
  		console.log(val)

  		this.$router.replace({
  			name: 'aset',
  			params: {
  				tab: this.tab,
  				page: val
  			}
  		})
  	}
  }
};
</script>
