<style scoped>

.gradient-1 {
  background-image: linear-gradient(to right, rgb(220, 99, 255), rgb(165,120,255) , rgb(88,151,255));  
}

.gradient-2 {
  background-image: linear-gradient(to left, rgb(0, 223, 142), rgb(0,210,181) , rgb(0,193,234), rgb(88,151,255), rgb(88,151,255)); 
}


</style>

<template>

<div class="rounded-borders">

	<div v-if="data_1" class="flex flex-center row text-white">  
		<q-btn rounded :to="{ 
			name: 'alquran_detail',
			params: {
				id: 1
			} 
		}" unelevated no-caps class="q-my-sm text-left col gradient-2">
			  <q-toolbar>

			    <div class="text-left">
			      <span v-if="data_1.surat" class="weight-500" style="font-size:14px;">
			        {{ data_1.surat['nama_id'] }}: 
			        <span class="q-ml-sm text-body2">{{ data_1.ayat_urutan }} </span>
			      </span>
			      <div class="text-caption" style="margin-top:-4px;">Baca Alquran</div>
			    </div>

			    <q-space />

			    <q-item-section side class="q-pa-none arabic_13 text-white" style="font-size:30px; margin-top: 6px;">
			      {{ data_1.surat.nama_ar }}
			    </q-item-section>

			  </q-toolbar>
		</q-btn>
	</div>
</div>
	
</template>

<script type="text/javascript">

export default {
  	data() {
  		return {
  			data_1: null
  		}
  	},
	async beforeMount() {
		setTimeout(async () => {
			const results = await this.$axios.get('api/page/alquran_pencarian_detail/1') 
			console.log('app_drawer_alquran_guest', results)
			if(!results) return
			if(!results.data) return
			if(!results.data.data_1) return
			this.data_1 = results.data.data_1
		}, 1000)		
	}
};

</script>