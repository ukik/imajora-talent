<template>
<fragment>
	

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


	<ToolbarListVideo />

	<q-separator />
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