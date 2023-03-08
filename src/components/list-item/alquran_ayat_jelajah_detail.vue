<template>
<div class="bg-white rounded-borders">
	<!-- <div @click="tajweed = !tajweed" class="q-py-md text-center flex flex-center">
		<q-checkbox size="24px" :value="tajweed"></q-checkbox>
		<span class="q-ml-sm" style="padding-top: 5px;"> Tadjweed</span>
	</div> -->
	

	<q-toolbar class="q-px-none">
		<q-btn class="q-ml-sm" dense unelevated size="10px" color="teal" text-color="white" round icon="play_arrow" @click="onDialog('audio')"/>

		<q-toolbar-title class="q-pa-none" />       

		<q-btn dense flat @click="onSubmitFavorit" color="grey-5" round :icon="status_favorit ? 'turned_in' : 'turned_in_not'" />

        <q-btn class="q-mx-sm"
        	@click="onDialog('deskripsi')"
			flat
			dense
			round
			
			color="grey-5"
			icon="list_alt"
        />

		<q-checkbox class="q-mr-sm" style="margin-top:-4px;" size="30px" v-model="tajweed"></q-checkbox>

	</q-toolbar>  


	<!-- <q-separator /> -->

	<div v-ripple="{color:'grey'}" class="relative-position q-px-sm q-pb-md">

		<q-item class="q-pa-none q-mb-md">
			<q-item-section>
			  <q-item-label class="text-subtitle1 weight-500">{{ prop_data.surat.nama_id }}</q-item-label>
			</q-item-section>

			<q-item-section side>
			  <q-item-label caption>Ayat {{ prop_data.id_alquran_surat }}</q-item-label>
			</q-item-section>
		</q-item>

		<div class="text-right q-py-md q-px-xs arabic_4" style="font-size:32px;  line-height: 200%;">
			<span v-if="tajweed" v-html="prop_data.ayat_tajweed"></span>
			<span v-else v-html="prop_data.ayat"></span>
		</div>

		{{ prop_data.terjemah }}

		<div class="text-grey-8 q-mt-md q-mb-sm" v-html="kataDicari(prop_data.arti_id, keyword)"></div>

	</div>

	<q-expansion-item
	  class="shadow-1 overflow-hidden"
	  icon="wrap_text"
	  label="Tafsir & Terjemahan"
	  @show="visible = !visible"
	  @after-hide="visible = !visible"
	  header-class="bg-primary text-white"
	  expand-icon-class="text-white"
	  default-opened
	>
		<div v-if="visible" class="q-pa-sm">
			<div class="text-subtitle1  q-pb-md q-pt-sm">Terjemahan (Muntakhab)</div>
			<div class="text-grey-8 q-pb-md" v-html="kataDicari(prop_data.arti_id_muntakhab, keyword)" />

			<q-separator />    
			<div class="text-subtitle1 q-py-md">Tafsir Indonesia</div>
			<div class="text-grey-8 q-pb-md" v-html="kataDicari(prop_data.tafsir_id, keyword)" />

			<q-separator />    
			<div class="text-subtitle1 q-py-md">Tafsir Al-Misbah</div>
			<div class="text-grey-8 q-pb-md" v-html="kataDicari(prop_data.tafsir_id_panjang, keyword)" />
		</div>
	</q-expansion-item>


	<q-separator class="q-py-sm" color="grey-3" />

</div>
</template>

<script type="text/javascript">
import { mapFields } from 'vuex-map-fields';

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
  	computed: {
	    ...mapFields({
	      	// alquran_ditandai_dialog: "alquran_index.alquran_ditandai_dialog",
	      	// ayat_deskripsi_dialog: "alquran_index.ayat_deskripsi_dialog",

	    }),
  	},  
  	mixins: [favorit],
	props: ['prop_data', 'index', 'keyword'],
	data() {
		return {
			tajweed: true,
			visible: true,
		}
	},
	methods: {

	    onDialog(label) {
	    	this.$emit('onBubbleEvent_Dialog', { index: this.index, alias: label })
	      // this.action_alquran_index_ayat_deskripsi_dialog(true)
	      // this.action_alquran_index_current_index(this.index)
	    },   			
		
	}
};
</script>