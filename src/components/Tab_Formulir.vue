<template>
<q-tabs
  v-model="tab"
  inline-label
  indicator-color="primary"
  :align="is_mobile_size ? 'justify' : 'justify'"
  active-color="white"
  class="bg-white text-white"
>
  <q-tab name="1" :style="{ width: tab_width }"
  	:no-caps="is_mobile_size"
  	:class="tab == '1' ? 'bg-primary' : 'bg-blue-6'" 
  	icon="o_local_mall" 
  	label="Produk" />
  <q-tab name="2" :style="{ width: tab_width }"
  	:no-caps="is_mobile_size"
  	:class="tab == '2' ? 'bg-primary' : 'bg-blue-6'"  
  	icon="o_settings" 
  	label="Pengaturan" />
</q-tabs>	
</template>

<script type="text/javascript">
import { mapFields } from 'vuex-map-fields'

export default {
	computed: {
		...mapFields({
			tab: 'formulir.tab',
		}), 
		tab_width() {
			return this.is_mobile_size ? '' : 100/2+'px';
		} 
	},  
};	
</script>