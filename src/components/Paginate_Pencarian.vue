<template>

<div v-if="last_page > 1" :class="[is_mobile_size ? '' : 'q-py-md']" class="text-center flex flex-center bg-white">

    <q-pagination v-if="!is_mobile_size"
		v-model="current_page" color="blue-4"
		:max="last_page" unelevated
		:max-pages="3"
		@update:model-value="onUpdate"
		boundary-numbers
		direction-links
		boundary-links
		active-color="blue-5"
		active-text-color="white"
    />

    <q-pagination v-else
		v-model="current_page" color="blue-4"
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
//

export default {
  computed: {
    // ...mapFields({
		// 	current_page: 'pencarian.index.data.payload.current_page',

    //   keyword: 'pencarian.local.keyword',
    //   min: 'pencarian.local.min',
    //   max: 'pencarian.local.max',
    //   regencies: 'layout.local.regency',
    //   kategori: 'pencarian.local.kategori',

		// 	last_page: 'pencarian.index.data.payload.last_page',
    // }),
  },
  watch: {
		last_page(val) {
			// console.log(val, this.route_name)
			if(this.route_name !== 'pencarian') return
			if(this.route_param.page > val) {
				this.onUpdate(val)
			}
		}
  },
  methods: {
  	onUpdate(val) {
  		console.log(val)
  		this.$router.push({
  			name: 'pencarian',
  			params: {
  				page: val
  			},
				query: {
				  keyword: this.keyword,
				  min: this.min,
				  max: this.max,
				  regency: this.regencies,
				  kategori: this.kategori,
				}
  		})
  	}
  }
};
</script>
