<style scoped>

.gradient-1 {
  background-image: linear-gradient(to right, rgb(220, 99, 255), rgb(165,120,255) , rgb(88,151,255));  
}

.gradient-2 {
  background-image: linear-gradient(to left, rgb(0, 223, 142), rgb(0,210,181) , rgb(0,193,234), rgb(88,151,255), rgb(88,151,255)); 
}


</style>

<template>

<div class="q-mt-md rounded-borders"> 
	<div v-if="ayat_terakhir_dibaca.id" class="flex flex-center row text-white">  

		<q-btn rounded :to="goto_ayat" unelevated no-caps class="q-my-sm text-left col gradient-2">
			  <q-toolbar>

			    <div class="text-left">
			      <span v-if="ayat_terakhir_dibaca.ayat" class="weight-500" style="font-size:14px;">
			        {{ ayat_terakhir_dibaca.ayat.surat.nama_id }}: 
			        <span class="q-ml-sm text-body2">{{ ayat_terakhir_dibaca.ayat.ayat_urutan }} </span>
			      </span>
			      <div class="text-caption" style="margin-top:-4px;">Terakhir Dibaca</div>
			    </div>

			    <q-space />

			    <q-item-section v-if="ayat_terakhir_dibaca.ayat" side class="q-pa-none arabic_13 text-white" style="font-size:30px; margin-top: 6px;">
			      {{ ayat_terakhir_dibaca.ayat.surat.nama_ar }}
			    </q-item-section>

			  </q-toolbar>
		</q-btn>
	</div>
</div>
	
</template>

<script type="text/javascript">
import { mapFields } from "vuex-map-fields";
import { mapGetters } from "vuex";

export default {
  	computed: {
    	...mapFields({
			ayat_terakhir_dibaca: "alquran.ayat_terakhir_dibaca",
		}),
		...mapGetters({
			logged: 'authentication/get_user_logged',
		}),		
		get_null_checker() {
			return function(val, key) {
				if(val == undefined || val == null) return
				return val[key]
			}
		},
		goto_ayat() {
			if(!this.logged) {
				return ({ 
				  name: 'alquran_detail', 
				  params: { 
				    id: 1,
				  },
				  // query: {
				  // 	ayat: ayat.ayat_urutan,
				  // 	page: ayat.pagination_page,
				  // 	current_index: ayat.current_index,
				  // 	// tipe: ayat.tipe,
				  // } 
				})
			}


			const ayat = this.ayat_terakhir_dibaca
			switch(ayat.tipe) {
				case "surat":
					return ({ 
					  name: 'alquran_detail', 
					  params: { 
					    id: ayat.last_ayat_or_juz,
					  },
					  query: {
					  	ayat: ayat.ayat_urutan,
					  	page: ayat.pagination_page,
					  	current_index: ayat.current_index,
					  	// tipe: ayat.tipe,
					  } 
					})
					
				case "juz":
					return ({ 
					  name: 'alquran_detail_juz', 
					  params: { 
					    id: ayat.last_ayat_or_juz,
					  },
					  query: {
					  	ayat: ayat.ayat_urutan,
					  	page: ayat.pagination_page,
					  	current_index: ayat.current_index,
					  	// tipe: ayat.tipe,
					  } 
					})
			}		
		}
	},
	watch: {
		ayat_terakhir_dibaca(val) {
			console.log(val)
		},
		async logged(val) { 
			if(val) {
				setTimeout(async () => {
					const results = await this.$axios.get('api/page/alquran_ayat_terakhir_dibaca') 
					// if(!results) return
					// if(!results.data) return
					// if(!results.data.data_1) return
					try {
						this.dispatchVuex('alquran/ayat_terakhir_dibaca', results.data.data_1)
						this.dispatchVuex('alquran_index/last_ayat_or_juz', results.data.data_1.last_ayat_or_juz)
						this.dispatchVuex('alquran_index/action_alquran_current_index', results.data.data_1.current_index)
					} catch (err) {}
				}, 1000)
			}
		}
	},
	async beforeMount() {
		if(this.logged) {
			setTimeout(async () => {
				const results = await this.$axios.get('api/page/alquran_ayat_terakhir_dibaca') 
				console.log('beforeMount', results)
				try {
					this.dispatchVuex('alquran/ayat_terakhir_dibaca', results.data.data_1)
					this.dispatchVuex('alquran_index/last_ayat_or_juz', results.data.data_1.last_ayat_or_juz)
					this.dispatchVuex('alquran_index/action_alquran_current_index', results.data.data_1.current_index)
				} catch (err) {}
			}, 1000)
		}
	}
};

</script>