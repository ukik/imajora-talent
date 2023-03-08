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
      <q-item-label caption>{{ prop_data.created_at }}</q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-btn label="Sudah Diminta" outline class="flex flex-center" size="sm" color="green" no-caps rounded unelevated />
    </q-item-section>

  </q-toolbar>	
</template>

<script type="text/javascript">
  export default {
    props: {
      index: {
        default: null,
      },
      prop_data: {
        default: () => ({}) // user data
      }
    },
    data() {
      return {
        // following: false,
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