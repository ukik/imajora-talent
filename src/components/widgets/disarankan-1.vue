<template>
<div>
	<!-- MOBILE -->
    <div v-if="$q.platform.is.mobile" class="swiper-container swiper-container-initialized swiper-container-horizontal">
      <div class="swiper-wrapper">

		<div v-for="n in 10" :key="n" class="swiper-slide">
			<div class="row no-wrap">
				<div v-for="m in 3" :key="m" style="width:140px;" class="flex flex-center text-center bg-white q-pb-md q-pt-md">
					<div class="text-center" style="max-width:100px;">
						<q-avatar size="60px">
						  <img src="https://i.pinimg.com/originals/61/5e/bc/615ebc862ad3aceecc7b607b13fdbf10.jpg" loading="lazy" style="width: 100px; height: 100px; border-radius:50px;">
						</q-avatar>				    
						<div style="font-size:10px;border-radius:50px;margin-top:-5px;position: relative;" class="text-center bg-orange q-mx-sm text-white">
						Video
						</div>
					</div>
					<span class="text-grey q-mt-sm text-caption">{{ 'Diterjemahkan dari bahasa Inggris-Quasar' | text-wrap(15, '...') }}</span>
				</div>		
			</div>
		</div>				      	

      </div>
  	</div>				

  	<!-- DESKTOP -->
    <q-scroll-area v-else
      horizontal
      style="height: 130px; width: 100%;"
      class="bg-white rounded-borders"
    >
      <div class="row no-wrap">
			<div v-for="n in 10" :key="n" style="width:140px;" class="flex flex-center text-center bg-white q-pb-sm q-pt-md">
				<div class="text-center" style="max-width:100px;">
					<q-avatar size="60px">
					  <img src="https://i.pinimg.com/originals/61/5e/bc/615ebc862ad3aceecc7b607b13fdbf10.jpg" loading="lazy" style="width: 100px; height: 100px; border-radius:50px;">
					</q-avatar>				    
					<div style="font-size:10px;border-radius:50px;margin-top:-5px;position: relative;" class="text-center bg-orange q-mx-sm text-white">
					Video
					</div>
				</div>
				<span class="text-grey q-mt-sm text-caption">{{ 'Diterjemahkan dari bahasa Inggris-Quasar' | text-wrap(15, '...') }}</span>
			</div>		
      </div>
    </q-scroll-area>

    <q-separator color="grey-2" />

    <div class="q-px-sm row q-mt-md q-mb-sm">
    	<span class="text-subtitle1 weight-400 text-grey-6">Disarankan x</span>
    	<q-space />
    	<q-btn label="Lihat Semua" no-caps size="13px" dense color="blue" flat  />
    </div>

    <!-- MOBILE -->
    <div v-if="$q.platform.is.mobile" class="swiper-container swiper-container-initialized swiper-container-horizontal  q-mb-md">
      <div class="swiper-wrapper">

		<div v-for="n in 10" :key="n" class="swiper-slide">
			<div class="row no-wrap q-gutter-xs">
				<div v-for="m in 3" :key="m" style="width:140px; border:1px solid rgba(0,0,0,0.05)" class="flex flex-center text-center bg-white q-py-md rounded-borders">
					<div class="text-center" style="max-width:100px;">
				        <q-avatar size="60px">
				          <img src="https://cdn.quasar.dev/img/boy-avatar.png">  
				          <q-icon name="star" style="font-size:14px; padding:1.5px;" color="white" class="absolute-top-left bg-green rounded-borders" />
				        </q-avatar>
					</div>
					<span class="text-grey q-mt-sm text-caption">{{ 'Diterjemahkan dari bahasa Inggris-Quasar' | text-wrap(15, '...') }}</span>

					<q-btn icon="person_add" label="Ikuti" size="sm" color="light-blue" dense no-caps rounded outline unelevated class="q-pl-xs q-pr-sm q-mt-sm"/>
				</div>		
			</div>
		</div>				      	

      </div>
  	</div>				    

  	<!-- DESKTOP -->
    <q-scroll-area v-else
      horizontal
      style="height: 180px; width: 100%;"
      class="bg-white rounded-borders"
    >
      <div class="row no-wrap q-gutter-md">
			<div v-for="n in 10" :key="n" style="width:140px; border:1px solid rgba(0,0,0,0.1)" class="flex flex-center text-center bg-white q-py-md rounded-borders">
				<div class="text-center" style="max-width:100px;">
			        <q-avatar size="60px">
			          <img src="https://cdn.quasar.dev/img/boy-avatar.png">  
			          <q-icon name="star" style="font-size:14px; padding:1.5px;" color="white" class="absolute-top-left bg-green rounded-borders" />
			        </q-avatar>
				</div>
				<span class="text-grey q-mt-sm text-caption">{{ 'Diterjemahkan dari bahasa Inggris-Quasar' | text-wrap(15, '...') }}</span>

				<q-btn icon="person_add" label="Ikuti" size="sm" color="light-blue" dense no-caps rounded outline unelevated class="q-pl-xs q-pr-sm q-mt-sm"/>
			</div>		
      </div>
    </q-scroll-area>	
</div>	
</template>

<script type="text/javascript">
	export default {
		beforeDestroy() {
			delete window.swiper
		},
		deactivated() {
			delete window.swiper
		},		
		mounted() {
		  var swiper = new Swiper('.swiper-container', {
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
	};
</script>