<template>
  <q-toolbar v-ripple="{color:'grey'}" class="relative-position q-pa-sm bg-white">
    <q-item-section  avatar style="padding:0px;">
        <q-avatar size="xl">
          <img loading="lazy" :src="img_checker(user.foto)" @error="handleError" v-lazy-src="img_checker(user.foto)">  
          <q-icon name="star" style="font-size:14px; padding:1.5px;" color="white" class="absolute-top-left bg-green rounded-borders" />
        </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-weight-bold">{{ user.nama }}</q-item-label>
      <q-item-label caption>{{ user.biodata | text-wrap(35, '...') }}</q-item-label>
    </q-item-section>

    <q-item-section side v-if="!mengikuti">
      <q-btn @click="onSubmit" label="Ikuti" class="flex flex-center" size="sm" color="light-blue" no-caps rounded  unelevated />
    </q-item-section>
    <q-item-section side v-else>
      <q-btn @click="onSubmit" outline class="flex flex-center" icon="person" size="sm" color="red" no-caps rounded unelevated />
    </q-item-section>  

  </q-toolbar>	
</template>


<script type="text/javascript">

import { mapFields } from 'vuex-map-fields';

export default {
  computed: {
    ...mapFields({
      user: "video_detail.data_1.user", 
      mengikuti: "video_detail.data_1.mengikuti", 
    }),
  },
  methods: {   
    async onSubmit() {

      const form = {
        id_user_teman: this.user.id,
      }

      const request = await this.dispatchVuex('aggregator/set_teman', form)
      this.dispatchVuex('video_detail/set_mengikuti', request.data)      
      console.log(request)
    } 
  }
};
</script>

