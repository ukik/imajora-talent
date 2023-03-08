<template>
<fragment>
	<!-- <q-list class="q-pa-none"> -->

      <!-- <div v-for="i in prop_data" :key="i"> -->

      	  <q-separator />

      	  <ProfileContent class="q-px-sm q-pt-sm" /> 	

      	  <!-- Fullsize Video -->
	      <q-card flat v-ripple="{color: 'grey' }"  class="q-px-sm q-pt-sm no-border-radius">

	      	  <div class="q-mb-md text-weight-bold" v-html="textWrap(prop_content, 100, '...')"></div>
		      <div>
		        <q-img
		          img-class="custom-image rounded-borders"
		          class="q-my-sm"
		          src="https://cdn.quasar.dev/img/parallax2.jpg"
		          style="width: 100%"
		        >
		        	<q-btn icon="play_arrow" size="md" disabled round outline class="absolute-center bg-black text-white"/>

			 		<q-item dense class="absolute-bottom rounded-borders" style="padding: 0px 10px 0px 5px;">
			 			<q-item-section>
			 				<div>
					            <q-btn flat size="sm" round icon="play_circle_outline" />
					            <span style="font-size:12px;">2</span>
					        </div>
				        </q-item-section>

			 			<q-item-section side>
			 				<div>
					            <q-btn flat color="white" size="sm" round icon="access_time" />
					            <span style="font-size:12px;" class="text-white">04:12</span>
					        </div>
				        </q-item-section>
			 		</q-item>
		        </q-img>
		      </div>	      	
	      </q-card>	      


 		<!-- <q-item dense class="q-pa-none q-px-sm ">
 			<q-item-section>
	      		<span class="vertical-middle" style="font-size:12px;">20/20/2020 16:44</span>
 			</q-item-section>

 			<q-item-section side class="q-pa-none">
 				<div>
		            <q-btn flat color="grey" size="sm" round icon="chat_bubble_outline" />
		            <span style="font-size:12px;">Komentar</span>
		        </div>
	        </q-item-section>
 			<q-item-section side>
 				<div>
		            <q-btn flat color="grey" size="sm" round icon="favorite_border" />
		            <span style="font-size:12px;">2</span>
		        </div>
	        </q-item-section>
 			<q-item-section side>
	            <q-btn flat color="grey" size="sm" round icon="share" />
	        </q-item-section>	        
 		</q-item> -->

 		<ToolbarListVideo />

		<div class="q-px-sm q-mb-md">
			<Komentar :prop_data="3" />

	 		<q-item dense class="q-pa-none text-center">
	 			<q-item-section v-ripple>
		      		<div class="vertical-middle" style="font-size:14px;">Lihat semua 100 komentar</div>
	 			</q-item-section>
	 		</q-item>

			<!-- <q-btn unelevated style="width:100%;" no-caps align="left" text-color="grey-6" rounded dense class="bg-grey-2 q-my-md">
			    <q-icon size="20px" class="q-ma-xs q-mr-sm" name="edit" />
			    Tulis Komentar...
			</q-btn> -->

		</div>


	  <!-- </div> -->
	<!-- </q-list> -->
</fragment>
</template>

<script type="text/javascript">
	export default {
		props: {
	      // prop_data: {
	      //   default: 5,
	      // },      
			prop_content: {
				default: "X Learn about our RFC process, Open RFC meetings & more.Join in the discussion! » Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit."
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