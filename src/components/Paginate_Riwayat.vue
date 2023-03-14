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
		// 	current_page: 'riwayat.index.data.payload.current_page',
		// 	last_page: 'riwayat.index.data.payload.last_page',
    // }),
  },
  watch: {
		last_page(val) {
			// console.log(val, this.route_name)
			if(this.route_name !== 'riwayat') return
			if(this.route_param.page > val) {
				this.onUpdate(val)
			}
		}
  },
  methods: {
  	onUpdate(val) {
  		console.log(val)
  		this.$router.push({
  			name: 'riwayat',
  			params: {
  				page: val
  			}
  		})
  	}
  }
};
</script>
