<template>

	<q-list class="q-pa-none">

      <div v-for="i in prop_data" :key="i">

      	  <q-separator />

      	  <ProfileActionbar class="q-px-sm q-pt-sm" /> 	


      	  <!-- Fullsize Fixed Image -->
	      <!-- 
	      <q-card flat v-ripple="{color: 'grey' }"  class="q-pt-sm q-pb-xs no-border-radius">

      	    <div class="q-px-sm q-mb-sm" v-html="textWrap(prop_content, 100, '...')"></div>

	        <img
	          loading="lazy"
	          src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg"
	          style="width: 100%; object-fit: cover;"
	        >
	      </q-card>	      -->
 
      	  <!-- Fullsize Image -->

	      <q-card flat v-ripple="{color: 'grey' }"  class="q-px-sm q-pt-sm q-pb-xs no-border-radius">

      	    <div class="q-mb-md text-weight-bold" v-html="textWrap(prop_content, 100, '...')"></div>

	        <q-img
	          img-class="rounded-borders"
	          src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg"
	          style="width: 100%"
	        />
	      </q-card>	      

 		<q-item dense class="q-pa-none q-px-sm ">
 			<q-item-section>
	      		<span class="vertical-middle" style="font-size:12px;">20/20/2020 16:44</span>
 			</q-item-section>

 			<q-item-section side>
 				<div>
		            <q-btn flat color="pink" size="sm" round icon="favorite_border" />
		            <span style="font-size:12px;">2</span>
		        </div>
	        </q-item-section>
 		</q-item>

	  </div>
	</q-list>


</template>

<script type="text/javascript">
	export default {
		props: {
	      prop_data: {
	        default: 5,
	      },      
			prop_content: {
				default: "Learn about our RFC process, Open RFC meetings & more.Join in the discussion! » Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit."
			},
			prop_thumbnail: {
				default: 3
			},
	      // prop_title: {
	      //   default: "Learn about our RFC process, Open RFC meetings & more.Join in the discussion! »"
	      // },
	      prop_meta: {
	        default: "Learn about, 20/10/2020"
	      }
		},
		data(){
			return {
		      
			}
		}
	};
</script>

<style type="text/css" scoped>
.q-item__section--thumbnail img {
    width: auto;
    height: 65px;
}  
.custom-image {
  filter: brightness(75%);
}

</style>