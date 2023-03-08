<template>
<fragment>

	<masonry
	  class="q-mr-xs"
	  :cols="$q.screen.width < 768 ? 2 : 3"
	  :gutter="10"
	  >
	  <div 
	  	@click="() => onSubmit(item)" 
	  	v-ripple="{ color:'white' }" 
	  	class="relative-position q-mb-md q-mt-sm q-ml-xs  shadow-2 rounded-borders" 
	  	v-for="(item, index) in prop_data" :key="index">
	  	
	  	<q-item :to="{ 
	  		name:'alquran_jelajah_detail', 
	  		params: {
	  			keyword: item.deskripsi.replaceAll(' ', '-')
		  	}
	  	 }" class="q-pa-none">
	        <q-img 
	        	:ratio="4/4.5" 
		        class="rounded-borders" 
		        :src="images[images.length * Math.random() | 0]" >

				<div class="absolute-bottom flex flex-center q-pa-none q-ma-none shadow-2">
					<span class="text-subtitle1">{{ item.deskripsi }}</span>  
				</div>

	        </q-img>	    
	    </q-item>
        <!-- <div class="text-grey-8 q-py-md q-px-sm text-center bg-white rounded-borders">{{ item.label }}</div> -->
	  </div>

	</masonry>
</fragment>
</template>

<script type="text/javascript">
import { mapFields } from 'vuex-map-fields';

export default {
  	computed: {
		...mapFields({
			images: "alquran_jelajah.images", 
		    // loading: "aggregator.loading",
    	}),
  	},
	props: {
		prop_data: {
			default: () => ([])
		}			
	},
	methods: {
		onSubmit(val) {
			console.log(val)
		}
	}
};
</script>