<template>
<div>

	<q-item v-if="get_layout == 0" class="q-pa-none" v-ripple="{color: 'grey' }">

		<q-item-section class="q-px-sm q-py-md">

			<q-item-label class="text-weight-bold" v-html="textWrap(prop_content, 125, '...')"></q-item-label>

		</q-item-section>

	</q-item>			

	  <!-- Simple -->
	<q-item v-if="get_layout == 1" class="q-pa-none" v-ripple="{color: 'grey' }">

		<q-item-section class="q-px-sm">

		  <q-item class="q-pa-none">

		    <q-item-section>
		      <q-item-label class=" text-weight-bold" v-html="textWrap(prop_content, 125, '...')"></q-item-label>
		      <!-- <q-item-label v-if="is_not_mobile_size" class="q-pt-md" v-html="textWrap(prop_content, 125, '...')"></q-item-label> -->
		    </q-item-section>

		    <q-item-section class="max-width-thumbnail col-5">
		        <q-img :ratio="16/9"
		          img-class="custom-image rounded-borders"
		          class="flex flex-end"
		          :src="get_file(0)"
		        />
		    </q-item-section> 

		  </q-item>

		</q-item-section>

	</q-item>


	  <!-- Fullsize Fixed Image Slideshow -->
	<q-card v-if="get_layout == 2" flat v-ripple="{color: 'grey' }" class="q-pt-sm no-border-radius">

		<div class="q-px-sm q-mb-md text-weight-bold" v-html="textWrap(prop_content, 100, '...')"></div>

		<div class="swiper-container-component swiper-container-initialized swiper-container-horizontal">
		  	<div class="swiper-wrapper">
		    	<div class="swiper-slide" v-for="(item, index) in prop_data" :key="index + 'slick'">
					<q-img
					  loading="lazy"
					  class="no-outline"
					  :src="item.file"
					  style="object-fit: cover;"
					/>
		    	</div>
			</div>
		    <div class="swiper-pagination-component text-center"></div>
		</div>

	</q-card>	  

	  <!-- Fullsize Fixed Image -->
	<q-card v-if="get_layout == 5" flat v-ripple="{color: 'grey' }"  class="q-pt-sm q-pb-xs no-border-radius">

	    <div class="q-px-sm q-mb-md text-weight-bold" v-html="textWrap(prop_content, 100, '...')"></div>

		<img
		  loading="lazy"
		  :src="get_file(0)"
		  style="width: 100%; object-fit: cover;"
		>
	</q-card>	     

	<!-- Fullsize Image -->
	<q-card v-if="get_layout == 6" flat v-ripple="{color: 'grey' }"  class="q-px-sm q-pt-sm q-pb-xs no-border-radius">

	    <div class="q-mb-md text-weight-bold" v-html="textWrap(prop_content, 100, '...')"></div>

		<q-img
		  img-class="rounded-borders"
		  :src="get_file(0)"
		  style="width: 100%"
		/>
	</q-card>	      

	<!-- 2 Column Image -->
	<q-card v-if="get_layout == 7" flat v-ripple="{color: 'grey' }"  class="q-px-sm q-pt-sm q-pb-sm  no-border-radius">

	    <div class="col-12 q-mb-md text-weight-bold" v-html="textWrap(prop_content, 100, '...')"></div>

		    <div class="row q-gutter-xs">
		    <q-img :ratio="4/3"
		      img-class="custom-image rounded-borders"
		      class="col"
		      :src="get_file(0)"
		    />
		    <q-img :ratio="4/3"
		      img-class="custom-image rounded-borders"
		      class="col"
		      :src="get_file(1)"
		    />
		</div>
	</q-card>	 

	<!-- 3 Column Image -->
	<q-card v-if="get_layout == 8" flat v-ripple="{color: 'grey' }"  class="q-px-sm q-pt-sm q-pb-sm  no-border-radius">

	    <div class="col-12 q-mb-md text-weight-bold" v-html="textWrap(prop_content, 100, '...')"></div>

		    <div class="row q-gutter-xs">
			<q-img :ratio="4/3"
			  img-class="custom-image rounded-borders"
			  class="col"
			  :src="get_file(0)"
			/>
			<q-img :ratio="4/3"
			  img-class="custom-image rounded-borders"
			  class="col"
			  :src="get_file(1)"
			/>
			<q-img :ratio="4/3"
			  img-class="custom-image rounded-borders"
			  class="col"
			 :src="get_file(2)"
			/>
		</div>
	</q-card>	

	<q-item dense class="q-pa-none q-px-sm text-grey">
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

	<q-separator />

</div>
</template>

<script type="text/javascript">
	export default {
		mounted() {
		  	new Swiper('.swiper-container-component', {
		      slidesPerView: 1,
		      spaceBetween: 1.5,
		      loop: false,
		      pagination: {
		        el: '.swiper-pagination-component',
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
			// prop_layout: {
			// 	default: Math.round(Math.random() * 8),
			// },
			prop_data: {
				default: () => ([]),
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
	    //   prop_meta: {
	    //     default: "Learn about, 20/10/2020"
	    //   }
		},
		computed: {
			get_file() {
				return function(index) {
					if(this.prop_data.length <= 0) return
					if(this.prop_data[index] == undefined) return

					return this.prop_data[index]['file'];
				}
			},
			get_layout() {
				if(this.prop_data.length <= 0) {
					return 0
				} else if(this.prop_data.length == 1) {
					// Simple
					return 1
					// Fullsize Image
					const n = Math.round(Math.random() * 3)
					if( n == 1) {
						return 1
					} else if(n == 2) {
						return 5 
					} else {
						return 6
					}
				} else if (this.prop_data.length >= 2) {
					// 2 Column Image || Fullsize Fixed Image Slideshow
					return 7 //Math.round(Math.random() * 1) > 0 ? 6 : 2;
				} else {
					return 8
					// 3 Column Image || Fullsize Fixed Image Slideshow
					return Math.round(Math.random() * 1) > 0 ? 7 : 2;
				}

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