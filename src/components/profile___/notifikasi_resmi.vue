<template>
  <q-toolbar class="q-pa-none">

    <q-item-section top avatar style="padding:0px;">
        <q-avatar size="xl">
          <img loading="lazy" :src="img_checker(prop_data.foto)" @error="handleError" v-lazy-src="img_checker(prop_data.foto)">  
          <q-icon name="star" style="font-size:14px; padding:1.5px;" color="white" class="absolute-top-left bg-green rounded-borders" />
        </q-avatar>
    </q-item-section>


    <q-item-section>
      <q-item-label class="text-weight-bold">{{ prop_data.nama }}</q-item-label>
      <q-item-label caption>{{ prop_data.biodata | text-wrap(35, '...') }}</q-item-label>
    </q-item-section>    

    <!-- tidak diperlukan karena user yang sama akan muncul berulang kali, sehingga harus mengubah di vuex banyak sekali ketika seorang user di follow agar tombol dari semua user yang sama menjadi hilang saat bersamaan, too much edit di vuex, jadi di disable saja -->

    <!-- <q-item-section side v-if="tombol_mengikuti">
      <q-btn @click="onSubmit" label="Ikuti" class="flex flex-center" size="sm" color="light-blue" no-caps rounded  unelevated />
    </q-item-section> -->

    <slot name="more_button" />

  </q-toolbar>	
</template>

<script type="text/javascript">
  export default {
    props: {
      prop_data: {
        default: () => ({})
      }
    },
    data() {
      return {
        tombol_mengikuti: false,
      }
    }, 
  };
</script>

<style type="text/css" scoped>

.limit {
  text-overflow: ellipsis;
  overflow: hidden;  
  /*max-width:200px;*/
}

</style>