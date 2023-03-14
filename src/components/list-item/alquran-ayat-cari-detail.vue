<template>
	<div>

		<q-toolbar class="q-px-none">

			<q-btn class="q-ml-sm" dense unelevated size="10px" color="teal" text-color="white" round icon="play_arrow" @click="onDialog('audio')"/>

			<q-toolbar-title class="q-pa-none" />

			<q-btn @click="onSubmitFavorit" dense flat size="14px" color="grey-5" round :icon="status_favorit ? 'turned_in' : 'turned_in_not'" />

	        <q-btn class="q-mx-sm"
	        	@click="onDialog('deskripsi')"
				flat
				dense
				round
				size="13px"
				color="grey-5"
				icon="list_alt"
	        />

			<q-checkbox class="q-mr-sm" size="34px" v-model="tajweed"></q-checkbox>

		</q-toolbar>


		<!-- <q-separator /> -->

		<div class="relative-position q-px-sm q-pb-md">

			<q-item class="q-pa-none q-mb-md">
				<q-item-section>
				  <q-item-label class="text-subtitle1 weight-500">{{ prop_data.surat.nama_id }}</q-item-label>
				</q-item-section>

				<q-item-section side>
				  <q-item-label caption>Ayat {{ prop_data.ayat_urutan }}</q-item-label>
				</q-item-section>
			</q-item>

			<div class="text-right q-py-md q-px-xs arabic_6" style="font-size:32px;  line-height: 200%;">
				<span v-if="tajweed" v-html="prop_data.ayat_tajweed"></span>
				<span v-else v-html="prop_data.ayat"></span>
			</div>


			{{ prop_data.terjemah }}

			<div class="text-grey-8 q-mt-md q-mb-sm">{{ prop_data.arti_id }}</div>

		</div>

		<div class="q-px-sm">
			<q-btn unelevated color="light-blue" class="full-width" icon="">
				Baca surat {{ prop_data.surat.nama_id }}
			</q-btn>
		</div>

		<!-- <q-separator class="q-py-sm" color="grey-2" /> -->

	</div>
</template>

<script type="text/javascript">
;

const favorit = {
  data() {
    return {
      status_favorit: false,
    }
  },
  mounted() {
    this.status_favorit = this.prop_data.favorit ? true : false
  },
  methods: {
    async onSubmitFavorit() {
        const form = {
          id_pemilik_postingan: this.prop_data.id_user,
          id_postingan: this.prop_data.id,
          type: 'Alquran_Ayat_Model',
          label: 'alquran',
        }

      const request = await this.dispatchVuex('aggregator/set_favorit', form)

      this.status_favorit = request.value > 0 ? true : false
    },
  },
  // computed: {
  //   get_favorit() {
  //     if(!this.data_1.favorit) return false
  //     return true
  //   },
  // }
}

export default {
	// watch: {
	// 	data_1(val) {
	// 	  this.status_favorit = val.favorit ? true : false
	// 	  this.status_suka = val.menyukai ? true : false
	// 	  this.total_suka = this.get_total_suka
	// 	}
	// },
  	computed: {
		// ...mapFields({
		// 	loading: "alquran_cari_detail.loading",
		//     // loading: "aggregator.loading",
    // 	}),
  	// },
  	mixins: [favorit],
	props: {
		prop_data: {
			default: () => ({})
		},
	},
	data() {
		return {
			tajweed: true
		}
	},
	methods: {
	    onDialog(label) {
	    	this.$emit('onBubbleEvent_Dialog', { alias: label })
	    },
	}
};
</script>
