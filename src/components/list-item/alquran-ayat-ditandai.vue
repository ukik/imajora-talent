<template>
	<div>
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
				  <q-item-label class="text-subtitle1 weight-500">{{ prop_data.user_favoritable.surat.nama_id }}</q-item-label>
				</q-item-section>

				<q-item-section side>
				  <q-item-label caption>Ayat {{ prop_data.user_favoritable.id_alquran_surat }}</q-item-label>
				</q-item-section>
			</q-item>



			<!-- <q-toolbar-title class="q-pa-sm">Doa Jika Bermimpi Buruk</q-toolbar-title> -->
			<!-- <div class="text-subtitle1">Doa Jika Bermimpi Buruk</div> -->
			<div class="text-right q-py-md q-px-xs arabic_4" style="font-size:32px;  line-height: 200%;">
				<span v-if="tajweed" v-html="prop_data.user_favoritable.ayat_tajweed"></span>
				<span v-else v-html="prop_data.user_favoritable.ayat"></span>
			</div>

			{{ prop_data.user_favoritable.terjemah }}

			<div class="text-grey-8 q-mt-md q-mb-sm">{{ prop_data.user_favoritable.arti_id }}</div>

		    <!-- <q-card class="q-mt-md" flat bordered>    	
				<q-card-section >
					<div class="text-subtitle2 weight-500 text-light-blue-7 q-mb-sm">Arti</div>
					<div class="text-grey-9">{{ prop_data.user_favoritable.arti_id }}</div>
				</q-card-section>

				<q-separator class="q-my-sm" />

				<q-card-section >
					<div class="text-subtitle2 weight-500 text-light-blue-7 q-mb-sm">Tafsir Indonesia</div>
					<div class="text-grey-9">{{ prop_data.user_favoritable.tafsir_id_panjang }}</div>
				</q-card-section>

				<q-separator class="q-my-sm" />

				<q-card-section >
					<div class="text-subtitle2 weight-500 text-light-blue-7 q-mb-sm">Tafsir Al-Misbah (Quraisyhab)</div>
					<div class="text-grey-9">{{ prop_data.user_favoritable.arti_id_muntakhab }}</div>
				</q-card-section>
		    </q-card> -->		    


		    <!-- 
		    <q-card class="q-pa-none" flat bordered>    	
		      <q-card-section class="q-pa-xs">
				<q-chip size="font-size:14px;" dense class="rounded-borders q-pa-sm q-ma-xs" color="teal" text-color="white" icon="bookmark">
					Tafsir Indonesia
				</q-chip>
		        <q-card-section>
		          {{ prop_data.user_favoritable.tafsir_id_panjang }}
		        </q-card-section>
		      </q-card-section>
		    </q-card>		    

		    <q-card class="q-mt-sm q-pa-none" flat bordered>    	
		      <q-card-section class="q-pa-xs">
				<q-chip size="font-size:14px;" dense class="rounded-borders q-pa-sm q-ma-xs" color="primary" text-color="white" icon="bookmark">
					Tafsir Al-Misbah (Quraisyhab)
				</q-chip>
		        <q-card-section>
		          {{ prop_data.user_favoritable.arti_id_muntakhab }}
		        </q-card-section>
		      </q-card-section>
		    </q-card> -->

			<!-- <div class="q-mt-md text-light-blue">
				Ibnu Suni, Abu Dawud
			</div>	 -->	
		</div>

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
    this.status_favorit = this.prop_data.user_favoritable.favorit ? true : false
  },
  methods: {
    async onSubmitFavorit() {
        const form = {
          id_pemilik_postingan: this.prop_data.id_user,
          id_postingan: this.prop_data.user_favoritable_id,
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
	props: ['prop_data', 'index'],
	data() {
		return {
			tajweed: true
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