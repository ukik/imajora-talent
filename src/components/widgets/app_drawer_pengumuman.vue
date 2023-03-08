<style type="text/css">
#sidebar_pengumuman .q-carousel__navigation {
	bottom: 10px !important;
}	

</style>
<template>
<div class="q-mt-md">
    <!-- <div class="text-body2 text-grey-7 q-my-md">Pengumuman</div> -->

    <q-card flat bordered>
		<q-item>
			<q-item-section avatar>
			  <q-avatar>
			    <img src="https://cdn.quasar.dev/img/avatar2.jpg">
			  </q-avatar>
			</q-item-section>

			<q-item-section>
			  <q-item-label>Title</q-item-label>
			  <q-item-label caption>Subhead</q-item-label>
			</q-item-section>
		</q-item>

      	<q-separator />

		<q-carousel
			id="sidebar_pengumuman"
		    v-model="slide"
		    transition-prev="scale"
		    transition-next="scale"
		    swipeable
		    animated
		    control-color="light-blue"
		    navigation
		    padding
		    height="250px"
		    class="bg-white text-black"
		  >

			<template v-slot:navigation-icon="{ active, btnProps, onClick }">
				<q-btn v-if="active" size="10px" :icon="btnProps.icon" color="grey" flat round dense @click="onClick" />
				<q-btn v-else size="xs" :icon="btnProps.icon" color="grey-4" flat round dense @click="onClick" />
			</template>

			<q-carousel-slide name="style" class="q-pa-none">
				<q-scroll-area class="fit">
				  <div class="q-carousel--padding">
				    <!-- <q-icon name="style" size="56px" /> -->
					{{ lorem }}
				  </div>
				</q-scroll-area>
			</q-carousel-slide>
			<q-carousel-slide name="style2" class="q-pa-none">
				<q-scroll-area class="fit">
				  <div class="q-carousel--padding">
				    <!-- <q-icon name="style" size="56px" /> -->
					{{ lorem }}
				  </div>
				</q-scroll-area>
			</q-carousel-slide>
		</q-carousel>    
    </q-card>

</div>
</template>

<script>
export default {
  data () {
    return {
      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
};
</script>