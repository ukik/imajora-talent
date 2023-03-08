<template>
<fragment>

	<!-- <q-separator /> -->

	<!-- <ProfileUtama class="q-px-sm q-pt-sm q-pb-sm" /> 	 -->

	<!-- Simple -->
	<q-item v-if="prop_layout == 1" class="q-pa-none" v-ripple="{color: 'grey' }">

		<q-item-section class="q-px-sm">

		  <q-item class="q-pa-none">

		    <q-item-section>
		      <q-item-label class="text-weight-bold" v-html="textWrap(prop_content, 125, '...')"></q-item-label>
		    </q-item-section>

		    <!-- STYLE 1 -->
		    <!-- 
		    <q-item-section thumbnail top>
		      <img class="rounded-borders q-mr-sm q-mt-xs img-fit" style="width:115px;" src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg">
		    </q-item-section>  -->

		    <q-item-section top class="q-mt-md max-width-thumbnail col-5">
		        <q-img :ratio="16/9"
		          img-class="custom-image rounded-borders"
		          class="flex flex-end"
		          src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg"
		        />
		    </q-item-section> 

		  </q-item>

		</q-item-section>

	</q-item>


   	<!-- Fullsize Fixed Image Slideshow -->
	<q-card v-if="prop_layout == 2" flat v-ripple="{color: 'grey' }" class="q-pt-sm no-border-radius">

		<div class="q-px-sm q-mb-md text-weight-bold" v-html="textWrap(prop_content, 100, '...')"></div>

		<div class="swiper-container-component swiper-container-initialized swiper-container-horizontal">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="i in 1" :key="i + 'slick'">
					<q-img
					  loading="lazy"
					  class="no-outline"
					  src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg"
					  style="object-fit: cover;"
					/>
				</div>
			</div>
			<!-- Add Pagination -->
			<div class="swiper-pagination-component text-center"></div>
			<!-- Add Arrows -->
			<!-- <div class="swiper-button-next"></div> -->
			<!-- <div class="swiper-button-prev"></div> -->

		</div>

	</q-card>	  


	<!-- Fullsize LIVE -->
	<q-card v-if="prop_layout == 3" flat v-ripple="{color: 'grey' }"  class="q-px-sm q-pt-sm q-pb-xs no-border-radius">

	    <div class="q-mb-md text-weight-bold" v-html="textWrap(prop_content, 100, '...')"></div>

		<q-img
		  img-class="rounded-borders"
		  src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg"
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
	<q-card v-if="prop_layout == 4" flat v-ripple="{color: 'grey' }"  class="q-px-sm q-pt-sm no-border-radius">

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
	<q-card v-if="prop_layout == 5" flat v-ripple="{color: 'grey' }"  class="q-px-sm q-pt-sm q-pb-xs no-border-radius">

		<div class="q-mb-md text-weight-bold" v-html="textWrap(prop_content, 100, '...')"></div>

		<q-img
		img-class="rounded-borders"
		src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg"
		style="width: 100%"
		/>
	</q-card>	      

	<!-- 2 Column Image -->
	<q-card v-if="prop_layout == 6" flat v-ripple="{color: 'grey' }"  class="q-px-sm q-pt-sm q-pb-sm  no-border-radius">

		<div class="col-12 q-mb-md text-weight-bold" v-html="textWrap(prop_content, 100, '...')"></div>

		<div class="row q-gutter-xs">
			<q-img :ratio="4/3"
			  img-class="custom-image rounded-borders"
			  class="col"
			  src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg"
			/>
			<q-img :ratio="4/3"
			  img-class="custom-image rounded-borders"
			  class="col"
			  src="https://cdn.quasar.dev/img/parallax2.jpg"
			/>
		</div>
	</q-card>	 

	<!-- 3 Column Image -->
	<q-card v-if="prop_layout == 7" flat v-ripple="{color: 'grey' }"  class="q-px-sm q-pt-sm q-pb-sm  no-border-radius">

		<div class="col-12 q-mb-md text-weight-bold" v-html="textWrap(prop_content, 100, '...')"></div>

		<div class="row q-gutter-xs">
			<q-img :ratio="4/3"
			  img-class="custom-image rounded-borders"
			  class="col"
			  src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg"
			/>
			<q-img :ratio="4/3"
			  img-class="custom-image rounded-borders"
			  class="col"
			  src="https://cdn.quasar.dev/img/parallax2.jpg"
			/>
			<q-img :ratio="4/3"
			  img-class="custom-image rounded-borders"
			  class="col"
			  src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg"
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

</fragment>
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
			prop_layout: {
				default: Math.round(Math.random() * 6) + 1,
			},
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