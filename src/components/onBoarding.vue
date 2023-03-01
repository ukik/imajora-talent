<template>
    <q-card :style="!is_mobile_size ? 'width: 800px; max-width: 80vw; height: 90vh;' : ''" 
      class="q-pa-none q-ma-none" >

      <q-btn v-close-popup class="absolute-top-right q-ma-md" style="z-index:99;" 
        icon="close" flat round unelevated >
      </q-btn>

      <q-card-section class="q-pa-none q-ma-none scroll">

        <!-- <a href='https://www.freepik.com/vectors/business'>Business vector created by pch.vector - www.freepik.com</a> -->

        <!-- prev-icon="arrow_left" -->
        <!-- next-icon="arrow_right" -->
        <q-carousel
          v-model="slide"
          transition-prev="jump-right"
          transition-next="jump-left"
          animated
          control-color="blue"
          navigation
          swipeable
          height="90vh"
          arrows
          class="bg-white">
          <q-carousel-slide name="1" class="text-center">
            <div class="text-h4 q-mt-lg text-primary">CUBIX</div>
            <div class="text-h6 q-mb-xl text-blue">SATU</div>
            <q-img :style="is_mobile_size ? 'width:325px;' : 'width:425px;'" loading="lazy" 
              src="~/assets/images/onboarding_1.jpg" />

            <div style="min-height:80px;" class="border_radius_2 text-center q-pa-sm text-white bg-blue flex flex-center text-subtitle2 weight_400">
              Menjadi pusat jual-beli (marketplace) aset properti seperti: rumah, ruko, kavling, lahan, dan sebagainya.
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="2" class="text-center">
            <div class="text-h4 q-mt-lg text-primary">CUBIX</div>
            <div class="text-h6 q-mb-xl text-blue">DUA</div>
            <q-img :style="is_mobile_size ? 'width:325px;' : 'width:425px;'" loading="lazy" 
              src="~/assets/images/onboarding_2.jpg" />

            <div style="min-height:80px;" class="border_radius_2 text-center q-pa-sm text-white bg-blue flex flex-center text-subtitle2 weight_400">
              Menjadi pusat penyedia jasa seperti: desain, arsitek, tukang, renovasi, dan sebagainya.
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="3" class="text-center">
            <div class="text-h4 q-mt-lg text-primary">CUBIX</div>
            <div class="text-h6 q-mb-xl text-blue">TIGA</div>
            <q-img :style="is_mobile_size ? 'width:325px;' : 'width:425px;'" loading="lazy" 
              src="~/assets/images/onboarding_3.jpg" />

            <div style="min-height:80px;" class="border_radius_2 text-center q-pa-sm text-white bg-blue flex flex-center text-subtitle2 weight_400">                 
              Menjadi pusat penyedia kebutuhan seperti: perlengkapan konstruksi, material, legal standing, KPR, dan sebagainya.
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="4" class="text-center">
            <div class="text-h4 q-mt-lg text-primary">CUBIX</div>
            <div class="text-h6 q-mb-xl text-blue">EMPAT</div>


            <q-list bordered padding style="min-height:80px; height:350px;" class=" border_radius_2 text-white text-left bg-blue weight_400 scroll">

              <q-item-label class="col-12 text-white" header>Misi </q-item-label>

              <q-item dense>
                <q-item-section>Membuka lapangan kerja seluas-luasnya</q-item-section>
              </q-item>

              <q-item dense>
                <q-item-section>Memudahkan masyarakat melakukan promosi</q-item-section>
              </q-item>

              <q-item dense>
                <q-item-section>Membantu transparansi transaksi jual-beli</q-item-section>
              </q-item>

              <q-item dense>
                <q-item-section>Menyediakan kebutuhan legalitas hukum</q-item-section>
              </q-item>

              <q-item dense>
                <q-item-section>Menciptakan peluang bisnis baru </q-item-section>
              </q-item>

              <q-item dense>
                <q-item-section>Forum solidaritas industri properti, konstruksi, dan investasi</q-item-section>
              </q-item>

              <q-item dense>
                <q-item-section>Turut memajukan bangsa dan negara tercinta</q-item-section>
              </q-item>

              <q-item dense>
                <q-item-section>Menjadi Start-Up yang bermanfaat untuk Kaltim & Indonesia</q-item-section>
              </q-item>
            </q-list>

          </q-carousel-slide>
        </q-carousel>

      </q-card-section>
    </q-card>	
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      slide: '1',
    }
  },	
};
</script>