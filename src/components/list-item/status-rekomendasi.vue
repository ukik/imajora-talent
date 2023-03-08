<template>
	<fragment>

		<q-separator v-if="prop_id > 0" />
			
		<ProfileActionbar class="q-px-sm q-pt-sm q-pb-sm" /> 	

		<!-- Fullsize Fixed Image Slideshow -->
		<q-card v-if="prop_layout == 1" flat v-ripple="{color: 'grey' }" class="no-border-radius">

			<div class="swiper-container swiper-container-initialized swiper-container-horizontal">

				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="i in 1" :key="i + 'slick'">
						<img
						  loading="lazy"
						  class="no-outline"
						  src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg"
						  style="width: inherit; object-fit: cover;"
						>
					</div>
				</div>
				<!-- Add Pagination -->
				<div class="swiper-pagination text-center"></div>
				<!-- Add Arrows -->
				<!-- <div class="swiper-button-next"></div> -->
				<!-- <div class="swiper-button-prev"></div> -->

			</div>

		</q-card>	  


		  <!-- Fullsize Fixed Image -->
		<q-card v-if="prop_layout == 2" flat v-ripple="{color: 'grey' }"  class="q-pb-xs no-border-radius">

		    <!-- <div class="q-px-sm q-mb-sm" v-html="textWrap(prop_content, 100, '...')"></div> -->

			<img
			  loading="lazy"
			  src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg"
			  style="width: 100%; object-fit: cover;"
			>
		</q-card>	     

		<ToolbarDibawahStatus />


 		<q-item dense class="q-pa-none q-px-sm ">
 			<q-item-section>
	      		<div class="vertical-middle text-grey" style="font-size:12px;">Tayangan: 10,1K</div>
 			</q-item-section>
 			<q-item-section side>
	      		<span class="vertical-middle" style="font-size:12px;">20/20/2020 16:44</span>
 			</q-item-section>
 			<!-- <q-item-section side>
 				<div>
		            <q-btn flat color="pink" size="sm" round icon="favorite_border" />
		            <span style="font-size:12px;">2</span>
		        </div>
	        </q-item-section> -->
 		</q-item>


        <q-item-section class="q-px-sm" >
          <q-item-label class="text-black text-weight-bold text-subtitle1 q-py-sm">Learn about our RFC process, Open RFC meetings & more</q-item-label>
    
          <q-item-label class="text-body2 q-pt-sm q-pb-lg" v-html="prop_content"></q-item-label>
        </q-item-section>

		<div class="q-px-sm">
			<Komentar :prop_data="3" />

	 		<q-item dense class="q-pa-none text-center">
	 			<q-item-section v-ripple>
		      		<div class="vertical-middle" style="font-size:14px;">Lihat semua 100 komentar</div>
	 			</q-item-section>
	 		</q-item>

			<q-btn unelevated style="width:100%;" no-caps align="left" text-color="grey-6" rounded dense class="bg-grey-2 q-my-md">
			    <q-avatar size="28px" class="q-ma-xs q-mr-sm">
			      <img src="https://cdn.quasar.dev/img/boy-avatar.png">
			    </q-avatar>
			    Tulis Komentar...
			</q-btn>

		</div>

	</fragment>
</template>

<script type="text/javascript">
	export default {
		mounted() {
		  	new Swiper('.swiper-container', {
		      slidesPerView: 1,
		      spaceBetween: 1.5,
		      loop: false,
		      pagination: {
		        el: '.swiper-pagination',
		        type: 'fraction',
		        clickable: true,
		      },
		      navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
		      },
		    });			
		},
		props: {
			prop_id: {
				default: 0
			},
			prop_layout: {
				default: Math.round(Math.random() * 1) + 1,
			},
			prop_data: {
				default: 1,
			},      
			prop_content: {
				default: "Learn about our RFC process, Open RFC meetings & more.Join in the discussion! » Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit."
			},
			// prop_thumbnail: {
			// 	default: 3
			// },
	      // prop_title: {
	      //   default: "Learn about our RFC process, Open RFC meetings & more.Join in the discussion! »"
	      // },
	      // prop_meta: {
	      //   default: "Learn about, 20/10/2020"
	      // }
		},
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