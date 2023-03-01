<template>
<q-tabs
  v-model="tab"
  inline-label
  indicator-color="primary"
  align="justify"
  active-color="white"
  class="bg-white text-white"
>
<!--   <q-tab name="1" 
  	:no-caps="is_mobile_size"
  	:class="tab == '1' ? 'bg-primary' : 'bg-blue-6'" 
  	label="Produk" /> -->
  <q-tab name="privat" 
  	:no-caps="is_mobile_size"
  	:class="tab == 'privat' ? 'bg-primary' : 'bg-blue-6'"  
  	label="Privat" />
  <q-separator vertical />
  <q-tab name="publik" 
  	:no-caps="is_mobile_size"
  	:class="tab == 'publik' ? 'bg-primary' : 'bg-blue-6'"  
  	label="Publik" />
  <q-separator vertical />
  <q-tab name="carousel" 
  	:no-caps="is_mobile_size"
  	:class="tab == 'carousel' ? 'bg-primary' : 'bg-blue-6'"  
  	label="Carousel" />
  <q-separator vertical />
  <q-tab name="penawaran" 
  	:no-caps="is_mobile_size"
  	:class="tab == 'penawaran' ? 'bg-primary' : 'bg-blue-6'"  
  	label="Penawaran" />
  <q-separator vertical />
  <q-tab name="pilihan" 
  	:no-caps="is_mobile_size"
  	:class="tab == 'pilihan' ? 'bg-primary' : 'bg-blue-6'"  
  	label="Pilihan" />
  <q-separator vertical />
  <q-tab name="tersedia" 
  	:no-caps="is_mobile_size"
  	:class="tab == 'tersedia' ? 'bg-primary' : 'bg-blue-6'"  
  	label="Tersedia" />
  <q-separator vertical />
  <q-tab name="habis" 
  	:no-caps="is_mobile_size"
  	:class="tab == 'habis' ? 'bg-primary' : 'bg-blue-6'"  
  	label="Habis" />
  <q-separator vertical />
  <q-tab name="soldout" 
    :no-caps="is_mobile_size"
    :class="tab == 'soldout' ? 'bg-primary' : 'bg-blue-6'"  
    label="Sold-Out" />
  <q-separator vertical />
  <q-tab name="diblokir" 
  	:no-caps="is_mobile_size"
  	:class="tab == 'diblokir' ? 'bg-primary' : 'bg-blue-6'"  
  	label="Diblokir" />
  <q-separator vertical />
  <q-tab name="invalid" 
  	:no-caps="is_mobile_size"
  	:class="tab == 'invalid' ? 'bg-primary' : 'bg-blue-6'"  
  	label="Invalid" />
  <q-separator vertical />
  <q-tab name="draft" 
  	:no-caps="is_mobile_size"
  	:class="tab == 'draft' ? 'bg-primary' : 'bg-blue-6'"  
  	label="Draft" />
</q-tabs>	
</template>

<script type="text/javascript">
import { mapFields } from 'vuex-map-fields'

export default {
	computed: {
		...mapFields({
			tab: 'aset.tab',
		}), 
	},  
};	
</script>