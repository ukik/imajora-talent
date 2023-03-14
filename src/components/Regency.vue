<template>

<!-- stack-label -->
<q-select v-if="init" outlined clearable
	option-value="name"
	option-label="name"
	option-disable=""
	:use-input="dialog"
	emit-value
	map-options
	label-slot :dense="dense"
	debounce="500"
	v-model="local_regency"
	:options="options"
	@filter="filterFn"
	@popup-show="onPopupShow"
	@popup-hide="onPopupHide"
	behavior="dialog"
	square
>
	<template v-slot:label>
	  <span class="text-grey-6">Lokasi</span>
	</template>

	<template v-if="local_regency" v-slot:selected-item="">
	  <q-item-label  lines="1" class="text-grey-6">
	  	{{ $filters.capitalize_all(local_regency) }}
	  </q-item-label>
	</template>

	<!-- <template v-slot:prepend>
	  <q-icon name="apartment" />
	</template>
	 -->
  	<template v-slot:option="scope">
	    <q-item v-bind="scope.itemProps">
	      <q-item-section>
	        <q-item-label>
	        	{{ scope.opt.name }}
	        	<!-- {{ $filters.capitalize_all(scope.opt.name) }} -->
	        </q-item-label>
	      </q-item-section>
	    </q-item>
  	</template>

	<template v-slot:no-option>
		<q-item>
		  <q-item-section class="text-grey">
		    No results
		  </q-item-section>
		</q-item>
	</template>
</q-select>

</template>


<script type="text/javascript">

// ;

export default {
	computed: {
		// ...mapFields({
		// 	init: 'layout.regency.meta.init',
		// 	data: 'layout.regency.data.payload.data',
		// 	local_regency: 'layout.local.regency',
		// 	kategori_tab: 'beranda.local.kategori_tab',
		// }),
	},
	props: {
		dense: {
			default: true,
		}
	},
	watch: {
		async local_regency(val) {
			if(this.route_name == 'main' || this.route_name == 'pencarian' ) {
				await this.$store.dispatch('beranda/index', {
					kategori: this.kategori_tab, regencies: this.local_regency
				})

				this.$emit('onBubbleEvent')
			}
		}
	},
	data() {
		return {
	      options: [],
	      // use_input: true,

	      dialog: false,
		}
	},
	// async mounted() {
	// 	await this.$store.dispatch('layout/regency')
	// },
	methods: {
		onPopupShow() {
			this.dialog = true
		},
		onPopupHide() {
			this.dialog = false
		},
		filterFn (val, update) {
			const vm = this

		  if (val === '') {
		    update(() => {
		      vm.options = vm.data
		    })
		    return
		  }

		  update(() => {
		    const needle = val.toLowerCase()
		    vm.options = vm.data.filter(v => v.name.toLowerCase().indexOf(needle) > -1)
		  })
		}
	}

};
</script>
