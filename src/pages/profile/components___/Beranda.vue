<template>
<div>

	<!-- <q-separator /> -->

	<!-- <ProfileUtama class="q-px-sm q-pt-sm q-pb-sm" /> 	 -->

	<q-item :to="prop_route" clickable v-if="get_layout == 0" class="q-pa-none" v-ripple="{color: 'grey' }">

		<q-item-section class="q-pa-sm">

			<q-item-label class="text-weight-bold" v-html="textWrap(prop_content, 125, '...')"></q-item-label>

		</q-item-section>

	</q-item>


	<!-- Simple -->
	<q-item :to="prop_route" clickable v-if="get_layout == 1" class="q-pa-none" v-ripple="{color: 'grey' }">

		<q-item-section class="q-pa-sm">

		  <q-item class="q-pa-none">

		    <q-item-section>
		      <q-item-label class="text-weight-bold" v-html="textWrap(prop_content, 125, '...')"></q-item-label>
		    </q-item-section>

		    <!-- STYLE 1 -->
		    <!-- 
		    <q-item-section thumbnail top>
		      <img class="rounded-borders q-mr-sm q-mt-xs img-fit" style="width:115px;" src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg">
		    </q-item-section>  -->

		    <q-item-section v-if="prop_data.length > 0" top class="max-width-thumbnail col-5">
		        <q-img :ratio="16/11"
		          img-class="custom-image rounded-borders"
		          class="flex flex-end"
				  :src="get_file(0)"
		        />
		    </q-item-section> 

		  </q-item>

		</q-item-section>

	</q-item>



   	<!-- Fullsize Fixed Image Slideshow -->
	<q-card v-if="get_layout == 2" flat class="no-border-radius">

		<router-link class="unlink" :to="prop_route">

			<div class="hover q-px-sm q-pb-md q-pt-sm text-weight-bold" v-html="textWrap(prop_content, 100, '...')"></div>

		</router-link>

		<div v-if="prop_data.length > 0" >

			<div v-if="$q.screen.width <= 425 || $q.platform.is.mobile" >
				<router-link class="unlink" :to="prop_route">
					<div class="swiper-container swiper-container-initialized swiper-container-horizontal">
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
						<!-- Add Pagination -->
						<div class="swiper-pagination text-center"></div>
					</div>
				</router-link>
			</div>

		    <q-carousel v-else 
		    	class="my-panel"
				v-model="slide"
				arrows
				control-type="outline"
				infinite
				>
				<q-carousel-slide v-for="(item, index) in prop_data" :key="index + 'slick'" :name="index" :img-src="item.file">
			        <div class="absolute-bottom text-center q-px-sm" style="background-color: rgba(0, 0, 0, .65)">
			        	<q-btn :to="prop_route" dense class="full-width q-my-sm" rounded color="white" flat label="Selengkapnya" />
			        </div>
				</q-carousel-slide>
		    </q-carousel>
		</div>

	</q-card>	  


	<router-link class="unlink" :to="prop_route">


	<!-- Fullsize LIVE -->
	<q-card v-if="get_layout == 3" flat v-ripple="{color: 'grey' }"  class="hover q-px-sm q-pt-sm q-pb-xs no-border-radius">

	    <div class="q-mb-md text-weight-bold" v-html="textWrap(prop_content, 100, '...')"></div>

		<q-img v-if="prop_data.length > 0"
		  img-class="rounded-borders"
		  :src="get_file(0)"
		  style="width: 100%"
		>
		  <q-chip class="absolute-top-right q-ma-sm" color="orange" style="font-size:12px; padding:2px 10px;" text-color="white" icon="local_fire_department" label="LIVE" />

		  <q-item class="absolute-bottom rounded-borders">
		    <q-item-section avatar>
		      <q-avatar>
		        <img src="https://cdn.quasar.dev/img/boy-avatar.png" loading="lazy">
		      </q-avatar>
		    </q-item-section>

		    <q-item-section>
		      <q-item-label class="text-weight-bold text-subtitle1 q-mb-xs">Single line item</q-item-label>
		      <q-item-label class="text-white" caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
		    </q-item-section>

		    <q-item-section side >
		    	<div class="text-center text-white">
		    		<q-icon name="live_tv" size="sm" color="yellow-1" />
		    		<div>1000</div>
				</div>
		    </q-item-section>
		  </q-item>

		</q-img>
	</q-card>	     

	<!-- Fullsize Video -->
	<q-card v-if="get_layout == 4" flat v-ripple="{color: 'grey' }"  class="hover q-px-sm q-pt-sm no-border-radius">

		<div class="q-mb-md text-weight-bold" v-html="textWrap(prop_content, 100, '...')"></div>

		<div v-if="prop_data.length > 0">
			<q-img
			  :ratio="16/9"
			  img-class="custom-image rounded-borders"
			  class="q-my-sm"
			  :src="get_file(0)"
			  style="width: 100%"
			>
				<q-btn icon="play_arrow" size="md" disabled round outline class="absolute-center bg-black text-white"/>

					<!-- <q-item dense class="absolute-bottom rounded-borders" style="padding: 0px 10px 0px 5px;">
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
					</q-item> -->
			</q-img>
		</div>	      	
	</q-card>	      

	<!-- Fullsize Fixed Image -->
	<!-- <q-card v-if="prop_layout == 5" flat v-ripple="{color: 'grey' }"  class="q-pt-sm q-pb-xs no-border-radius">

	    <div class="q-px-sm q-mb-sm" v-html="textWrap(prop_content, 100, '...')"></div>

		<img
		  loading="lazy"
		  src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg"
		  style="width: 100%; object-fit: cover;"
		>
	</q-card> -->	     
 
	<!-- Fullsize Image -->
	<q-card v-if="get_layout == 5" flat v-ripple="{color: 'grey' }"  class="hover q-px-sm q-pt-sm q-pb-xs no-border-radius">

		<div class="q-mb-md text-weight-bold" v-html="textWrap(prop_content, 100, '...')"></div>

		<q-img v-if="prop_data.length > 0"
			img-class="rounded-borders"
		  	:src="get_file(0)"
			style="width: 100%"
			/>
	</q-card>	      

	<!-- 2 Column Image -->
	<q-card v-if="get_layout == 6" flat v-ripple="{color: 'grey' }"  class="hover q-px-sm q-pt-sm q-pb-sm  no-border-radius">

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
	<q-card v-if="get_layout == 7" flat v-ripple="{color: 'grey' }"  class="hover q-px-sm q-pt-sm q-pb-sm  no-border-radius">

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

	</router-link>

	<q-item dense class="q-pa-none q-px-sm text-grey">
		<q-item-section>
			<span class="vertical-middle" style="font-size:12px;">{{ created_at }}</span>
		</q-item-section>

		<q-item-section side>
			<div>
		        <q-btn @click="onSubmit" flat color="pink" size="12px" round :icon="status_suka ? 'favorite' : 'favorite_border'" />
		        <span style="font-size:12px;">{{ total_suka }}</span>
		    </div>
		</q-item-section>
	</q-item>

</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				slide: 1,
				total_suka: 0,
				status_suka: false,
			}
		},
		mounted() {		
			this.status_suka = this.menyukai
			this.total_suka = this.get_total('suka')

			if(this.$q.screen.width <= 425 || this.$q.platform.is.mobile) {
				setTimeout(() => {
				  	const mySwiper = new Swiper('.swiper-container', {
				      slidesPerView: 1,
				      spaceBetween: 1.5,
				      loop: false,
				      pagination: {
				        el: '.swiper-pagination',
				        type: 'fraction',
				        // clickable: true,
				      },
				    });			
				}, 1000)
			}
		},
		methods: {
			async onSubmit() {
				const request = await this.dispatchVuex('aggregator/set_menyukai', this.form)
				if(!request.data) return
				// this.total_suka += request.value
				this.total_suka = request.data.total
				this.status_suka = request.value > 0 ? true : false
			},
		},
		props: {
			form: {
				default: () => ({
					user_sukaable_id: '',
					user_sukaable_type: '',
					label: '',
				})
			},
			created_at: {
				default: '',
			},
			menyukai: {
				default: () => ({})
			},
			prop_total: {
				default: () => ([]),
			},      			
			prop_tipe: {
				default: '',
			},
			prop_data: {
				default: () => ([]),
			},      
			prop_content: {
				default: ""
			},
			prop_route: {
				default: () => ({})
			}
		},
		computed: {		
			get_total() {
				return function(label) {

					if(this.prop_total.length <= 0) return 0

					for (var i = this.prop_total.length - 1; i >= 0; i--) {
						if(this.prop_total[i].label == label &&  this.prop_total[i]['user_totalable_type'] == this.prop_tipe) {
							return this.prop_total[i].total
						}
					}
				}
			},
			get_file() {
				return function(index) {
					if(this.prop_data.length <= 0) return
					if(this.prop_data[index] == undefined) return

					return this.prop_data[index]['file'];
				}
			},
			get_layout() {
				if(this.prop_tipe === 'Status_Model') {
					return 0 // No Image
				}

				if(this.prop_tipe === 'Video_Model') {
					return 4 // Fullsize Video
				}

				if(this.prop_tipe === 'Artikel_Model') {
					if(this.prop_data.length == 1) {
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
						return 6 //Math.round(Math.random() * 1) > 0 ? 6 : 2;
					} else {
						// 3 Column Image || Fullsize Fixed Image Slideshow
						return Math.round(Math.random() * 1) > 0 ? 7 : 2;
					}
				}

				if(this.prop_data.length <= 1 && this.prop_tipe === 'Gambar_Model') {
					// Fullsize Image
					return 5			
				}

				if(this.prop_data.length >= 2 && this.prop_tipe === 'Gambar_Model') {
					// Fullsize Fixed Image Slideshow
					return 2
				} 

				if(this.prop_data.length <= 1 && this.prop_tipe === 'Konsultasi_Model' || this.prop_tipe === 'Jawaban_Konsultasi_Model') {
					// Simple
					return 1
				}			

				if(this.prop_data.length == 2 && this.prop_tipe !== 'Gambar_Model' || this.prop_tipe !== 'Video_Model' ) {
					return 6 // 2 Column Image
				}

				if(this.prop_data.length >= 3 && this.prop_tipe !== 'Gambar_Model' || this.prop_tipe !== 'Video_Model' ) {
					return 7 // 3 Column Image
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