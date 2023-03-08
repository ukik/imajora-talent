<template>
<div>

	<!-- <ProfileUtama class="q-px-sm q-pt-sm q-pb-sm" /> 	 -->

	<!-- No Image -->
	<q-item v-if="get_layout == 2" class="q-pa-none" v-ripple="{color: 'grey' }">

		<q-item-section class="q-px-sm">

			<q-item-label class="text-weight-bold" v-html="textWrap(prop_content, 125, '...')"></q-item-label>

		</q-item-section>

	</q-item>

	<!-- Fullsize Fixed Image Slideshow -->
	<q-card v-if="get_layout == 0" flat class="q-pt-sm no-border-radius">

		<div v-ripple="{color: 'grey' }" class="q-px-sm q-mb-md text-weight-bold" v-html="textWrap(prop_content, 100, '...')"></div>

		<div v-if="prop_data.length > 0" >
			<!-- di HP cukup lagging -->
			<!-- <div v-if="$q.screen.width <= 425 || $q.platform.is.mobile" class="swiper-container swiper-container-initialized swiper-container-horizontal">
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
				<div class="swiper-pagination text-center"></div>
			</div> -->


		    <q-carousel
		    	:swipeable="thumbnails == !fullscreen"
		    	class="my-panel q-pa-sm"
		    	:class="[ fullscreen ? 'bg-black' : 'bg-white' ]"
				v-model="slide"
				arrows
				infinite
				:fullscreen.sync="fullscreen"
				:thumbnails="thumbnails == fullscreen"
				:navigation="thumbnails == !fullscreen"
				>

				<q-carousel-slide  class="q-pa-none q-ma-none rounded-borders"  v-for="(item, index) in prop_data" :key="index + 'slick'" :name="index" :img-src="item.file">
					<v-zoomer style="height:500px;">
						<div :class="[fullscreen ? '' : 'fit']">
							<q-img @click="onZoom(item.file)" class="rounded-borders full-height" :src="item.file" />
						</div>
					</v-zoomer>
				</q-carousel-slide>				

				<template v-slot:control>
					<q-carousel-control
					  :position="fullscreen ? 'bottom' : 'top-right'"
					  :offset="fullscreen ? [($q.screen.width / 2) - 15, 90] : [18, 18]"
					>
					  <q-btn
					    unelevated round dense color="white" text-color="primary"
					    :icon="fullscreen ? 'close' : 'fullscreen'"
					    @click="fullscreen = !fullscreen"
					  />
					</q-carousel-control>
				</template>				
		    </q-carousel>
		</div>

<!-- 		<div class="swiper-container-component swiper-container-initialized swiper-container-horizontal">
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
		</div> -->

	</q-card>	  


	<!-- Fullsize Fixed Image -->
	<q-card v-if="get_layout == 1" flat v-ripple="{color: 'grey' }"  class="q-pt-sm q-pb-xs no-border-radius">

		<div class="q-px-sm q-mb-md text-weight-bold" v-html="textWrap(prop_content, 100, '...')"></div>

		<img
			loading="lazy"
			:src="get_file(0)"
			style="width: 100%; object-fit: cover;"
			>
	</q-card>	     

	<!-- Fullsize Image -->
	<!-- <q-card v-if="prop_layout == 2" flat v-ripple="{color: 'grey' }"  class="q-px-sm q-pt-sm q-pb-xs no-border-radius">

		<div class="q-mb-sm" v-html="textWrap(prop_content, 100, '...')"></div>

		<q-img
		img-class="rounded-borders"
		src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg"
		style="width: 100%"
		/>
	</q-card> -->	      


	<!-- 2 Column Image -->
	<q-card v-if="get_layout == 6" flat v-ripple="{color: 'grey' }"  class="q-px-sm q-pt-sm q-pb-sm  no-border-radius">

		<div class="col-12 q-mb-md text-weight-bold" v-html="textWrap(prop_content, 100, '...')"></div>

		<div v-if="prop_data.length > 0" class="row q-gutter-xs">
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
	<q-card v-if="get_layout == 7" flat v-ripple="{color: 'grey' }"  class="q-px-sm q-pt-sm q-pb-sm  no-border-radius">

		<div class="col-12 q-mb-md text-weight-bold" v-html="textWrap(prop_content, 100, '...')"></div>

		<div v-if="prop_data.length > 0" class="row q-gutter-xs">
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
		data() {
			return {
				slide: 1,
				fullscreen: false,
				thumbnails: true,
			}
		},
		watch: {
			async fullscreen(val) {
				if(val) {
					// const parent = (document.getElementById('my-carousel'))
					// parent.querySelector('.q-carousel__slide').style = ""

					await this.$nextTick()
					var all = document.getElementsByClassName('q-carousel__slide');
					for (var i = 0; i < all.length; i++) {
						all[i].style = '';
					}				

					var el = document.getElementsByClassName('q-carousel__navigation-inner');
					// console.log(el)
					for (var j = 0; j < el.length; j++) {
						console.log(el[j].style)
						el[j].style = 'overflow: auto !important;';
					}				
				}
			},
			async slide(val) {
				if(!this.fullscreen) return

				await this.$nextTick()
				var all = document.getElementsByClassName('q-carousel__slide');
				for (var i = 0; i < all.length; i++) {
					all[i].style = '';
				}				
				console.log(all)
			}
		},
		mounted() {		
			// if(this.$q.screen.width <= 425 || this.$q.platform.is.mobile) {
			// 	setTimeout(() => {
			// 	  	new Swiper('.swiper-container', {
			// 	      slidesPerView: 1,
			// 	      spaceBetween: 1.5,
			// 	      loop: false,
			// 	      pagination: {
			// 	        el: '.swiper-pagination',
			// 	        type: 'fraction',
			// 	        // clickable: true,
			// 	      },
			// 	    });			
			// 	}, 1000)
			// }
		},
		props: {
			// prop_tipe: {
			// 	default: '',
			// },
			prop_data: {
				default: () => ([]),
			},      
			prop_content: {
				default: "Learn about our RFC process, Open RFC meetings & more.Join in the discussion! » Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit."
			},
		},
		methods: {
			onZoom(file) {

			}
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
				if(this.prop_data.length == 1) {
					return 1 // Fullsize Fixed Image
				} else if(this.prop_data.length == 2) {
					return 6
				} else if(this.prop_data.length >= 3) {
					return 7				 
				} else if(this.prop_data.length <= 0) {
					return 2
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