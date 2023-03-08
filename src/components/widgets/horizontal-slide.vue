<template>
  <div class="swiper-container-component swiper-container-initialized swiper-container-horizontal">
    <div class="swiper-wrapper">
      <div v-for="n in 10" :key="n" class="swiper-slide">
        <div class="row no-wrap">
          <q-img src="~/assets/images/slide_1.png" loading="lazy" />
          <q-img src="~/assets/images/slide_2.png" loading="lazy" />
        </div>
      </div>                 
    </div>
  </div>      
</template>