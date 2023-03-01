<template>
<q-tabs
  v-model="tab"
  inline-label
  indicator-color="primary"
  align="justify"
  active-color="white"
  class="bg-white text-white"
>
  <q-tab name="berminat" :style="{ width: tab_width }" icon="o_sell" 
  	:class="tab == 'berminat' ? 'bg-primary' : 'bg-blue-6'" 
  	:no-caps="is_mobile_size"
  	label="Berminat" />
  <q-tab name="konsultasi" :style="{ width: tab_width }" icon="favorite_border" 
  	:class="tab == 'konsultasi' ? 'bg-primary' : 'bg-blue-6'"  
  	:no-caps="is_mobile_size"
  	label="Konsultasi" />
  <q-tab name="dibeli" :style="{ width: tab_width }" icon="star_border" 
  	:class="tab == 'dibeli' ? 'bg-primary' : 'bg-blue-6'"  
  	:no-caps="is_mobile_size"
  	label="Dibeli" />
</q-tabs>	
</template>

<script type="text/javascript">
import { mapFields } from 'vuex-map-fields'

export default {
	computed: {
		...mapFields({
			tab: 'riwayat.tab',
		}), 
		tab_width() {
			return this.is_mobile_size ? '' : 100/3+'px';
		} 
	},  
};	
</script>