<template>

	<q-list class="q-pa-none">

      <div on-interaction v-for="i in prop_data" :key="i">

      	  <q-separator />

      	  <ProfileActionbar class="q-px-sm q-pt-sm" /> 	


      	  <!-- Simple -->
	      <q-item v-if="prop_layout == 1" class="q-px-none" v-ripple="{color: 'grey' }">

	        <q-item-section class="q-px-sm">

	          <q-item class="q-pa-none">

	            <q-item-section>
	              <q-item-label v-html="textWrap(prop_content, 150, '...')"></q-item-label>
	            </q-item-section>

	            <!-- STYLE 1 -->
	            <!-- 
	            <q-item-section thumbnail top>
	              <img class="rounded-borders q-mr-sm q-mt-xs img-fit" style="width:115px;" src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg">
	            </q-item-section>  -->

	            <q-item-section class="max-width-thumbnail col-5">
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
		  <q-card v-if="prop_layout == 2" flat v-ripple="{color: 'grey' }" class="q-pt-sm q-pb-lg no-border-radius">

			<div class="q-px-sm q-mb-sm" v-html="textWrap(prop_content, 100, '...')"></div>

		  	<VueSlickCarousel id="carousel" ref="carousel" v-bind="slickOptions" style="border-right: 0px solid rgba(0, 0, 0, 0.10); border-left: 0px solid rgba(0, 0, 0, 0.10);">
			    <img
			      v-for="i in 5" :key="i + 'slick'"
		          loading="lazy"
		          class="no-outline"
		          src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg"
		          style="width: 100%; object-fit: cover;"
		        >
		  	</VueSlickCarousel>

		  </q-card>	  


      	  <!-- Fullsize LIVE -->
	      <q-card v-if="prop_layout == 3" flat v-ripple="{color: 'grey' }"  class="q-px-sm q-pt-sm q-pb-xs no-border-radius">

      	    <div class="q-mb-sm" v-html="textWrap(prop_content, 100, '...')"></div>

	        <q-img
	          img-class="rounded-borders"
	          src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg"
	          style="width: 100%"
	        >
		      <q-chip class="absolute-top-right" color="orange" style="font-size:12px;" text-color="white" icon="local_fire_department" label="LIVE" />
		      <q-item class="absolute-bottom">
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

	      	  <div v-html="textWrap(prop_content, 100, '...')"></div>
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
	      <q-card v-if="prop_layout == 5" flat v-ripple="{color: 'grey' }"  class="q-pt-sm q-pb-xs no-border-radius">

      	    <div class="q-px-sm q-mb-sm" v-html="textWrap(prop_content, 100, '...')"></div>

	        <img
	          loading="lazy"
	          src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg"
	          style="width: 100%; height: 300px; object-fit: cover;"
	        >
	      </q-card>	     
 
      	  <!-- Fullsize Image -->
	      <q-card v-if="prop_layout == 6" flat v-ripple="{color: 'grey' }"  class="q-px-sm q-pt-sm q-pb-xs no-border-radius">

      	    <div class="q-mb-sm" v-html="textWrap(prop_content, 100, '...')"></div>

	        <q-img
	          img-class="rounded-borders"
	          src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg"
	          style="width: 100%"
	        />
	      </q-card>	      

      	  <!-- 2 Column Image -->
	      <q-card v-if="prop_layout == 7" flat v-ripple="{color: 'grey' }"  class="q-px-sm q-pt-sm q-pb-xs row q-gutter-xs">

      	    <div class="col-12" v-html="textWrap(prop_content, 100, '...')"></div>

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
	      </q-card>	 

      	  <!-- 3 Column Image -->
	      <q-card v-if="prop_layout == 8" flat v-ripple="{color: 'grey' }"  class="q-px-sm q-pt-sm row q-gutter-xs no-border-radius">

      	    <div class="col-12" v-html="textWrap(prop_content, 100, '...')"></div>

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
	      </q-card>	  


      	  <!-- 4 Column Image [UNUSED] -->
      	  <!--
	      <q-card flat v-ripple="{color: 'grey' }"  class="q-px-sm q-pt-sm">

      	    <div v-html="textWrap(prop_content, 100, '...')"></div>

      	    <div class="row q-gutter-xs q-mb-xs">
		        <q-img :ratio="4/3"
		          loading="lazy"
		          img-class="custom-image rounded-borders"
		          class="col"
		          src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg"
		        />
		        <q-img :ratio="4/3"
		          loading="lazy"
		          img-class="custom-image rounded-borders"
		          class="col"
		          src="https://cdn.quasar.dev/img/parallax2.jpg"
		        />
		    </div>
      	    <div class="row q-gutter-xs">
		        <q-img :ratio="4/3"
		          loading="lazy"
		          img-class="custom-image rounded-borders"
		          class="col"
		          src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg"
		        />
		        <q-img :ratio="4/3"
		          loading="lazy"
		          img-class="custom-image rounded-borders"
		          class="col"
		          src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg"
		        />	        
		    </div>
	      </q-card>	
	  	  -->

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
			prop_layout: {
				default: Math.round(Math.random() * 8),
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
		      slickOptions: {
					"dots": true,
					"dotsClass": "slick-dots custom-dot-class bg-white",
					"edgeFriction": 0.35,
					"arrows": false,
					"infinite": true,
					"speed": 500,
					"rows": 1,
					"slidesToShow": 1,
					"slidesToScroll": 1,
					// "centerMode": true,
					// "focusOnSelect": false,
					// "touchThreshold": 5,
					"initialSlide": 0,
					// "lazyLoad": "ondemand",
				    "responsive": [
		              // {
		              //   "breakpoint": 1024,
		              //   "settings": {
		              //     "slidesToShow": 3,
		              //     "slidesToScroll": 3,
		              //     "infinite": true,
		              //     "dots": true
		              //   }
		              // },
		              {
		                "breakpoint": 769,
		                "settings": {
		                  "slidesToShow": 1,
						  "rows": 1,
		                  "slidesToScroll": 1,
		                  // "initialSlide": 2
		                }
		              },
		              {
		                "breakpoint": 425,
		                "settings": {
		                  "slidesToShow": 1,
		                }
		              }
		          ]                          
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