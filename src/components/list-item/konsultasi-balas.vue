<template>
	<div>

 		<!-- <q-item dense class="q-pa-none q-px-sm ">
 			<q-item-section>
	      		<div class="vertical-middle text-grey-7" style="font-size:12px;">Tayangan: 10,1K</div>
 			</q-item-section>
 			<q-item-section side>
	      		<span class="vertical-middle" style="font-size:12px;">20/20/2020 16:44</span>
 			</q-item-section>
 		</q-item> -->

        <q-item-section class="q-px-sm">

          <!-- <q-item-label class="text-black text-weight-bold text-subtitle1 q-py-sm">Learn about our RFC process, Open RFC meetings & more</q-item-label> -->
    
          <q-item-label class="text-body2 q-pb-md q-pt-md" v-html="prop_content"></q-item-label>

        </q-item-section>

		<img v-if="prop_layout == 2"
		  loading="lazy"
		  src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg"
		  style="width: 100%; object-fit: cover;"
		>

        <!-- 2 Column Image -->
        <q-card v-if="prop_layout == 3" flat class="q-px-sm q-pb-sm  no-border-radius">

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
        <q-card v-if="prop_layout == 4" flat class="q-px-sm q-pb-sm  no-border-radius">

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

 
        <div style="font-size:13px" class="q-mb-sm q-ml-sm q-pr-sm text-grey-6 weight-400">
          3 Jawaban XXXXXXXXXX
        </div>

        <div class="q-pb-sm">
          <ToolbarDibawahUtamaKonsultasi />
      	</div>
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
			prop_layout: {
				default: 4//Math.round(Math.random() * 4),
			},
			prop_data: {
				default: 1,
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