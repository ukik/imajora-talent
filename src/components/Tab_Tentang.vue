<template>
<q-tabs
  v-model="tab"
  inline-label
  indicator-color="primary"
  align="justify"
  active-color="white"
  class="bg-white text-white"
>
  <q-tab name="1" :style="{ width: tab_width }"
  	:no-caps="is_mobile_size"
  	:class="tab == '1' ? 'bg-primary' : 'bg-blue-6'" 
  	icon="local_florist" 
  	label="Visi Misi" />
  <q-tab name="2" :style="{ width: tab_width }"
  	:no-caps="is_mobile_size"
  	:class="tab == '2' ? 'bg-primary' : 'bg-blue-6'"  
  	icon="supervisor_account" 
  	label="Tim Kerja" />
</q-tabs>		
</template>

<script type="text/javascript">
import { mapFields } from 'vuex-map-fields'

export default {
	computed: {
		...mapFields({
			tab: 'tentang_kami.tab',
		}), 
		tab_width() {
			return this.is_mobile_size ? '' : 100/2+'px';
		} 
	},  
};	
</script>