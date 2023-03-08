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

    <q-item-section side v-if="prop_data.sudah_diminta">
      <q-btn @click="onSubmit" label="Sudah Diminta" outline class="flex flex-center" size="sm" color="grey" no-caps rounded unelevated />
    </q-item-section>
    <q-item-section side v-else>
      <q-btn @click="onSubmit" label="Minta" class="flex flex-center" size="sm" color="light-blue" no-caps rounded  unelevated />
    </q-item-section>  

  </q-toolbar>	
</template>

<script type="text/javascript">
  export default {
    props: {
      form: {
        default: () => ({
          id_user_teman: null, //item.id,
          id_konsultasi: null,
        })
      },
      current_tab: {
        default: null,
      },
      index: {
        default: null,
      },
      mengikuti: {
        default: () => ({}) // empty or not (any)
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
    methods: {
      async onSubmit() {
        console.log(this.form)
        // const form = {
        //   id_user_teman: this.prop_data.id,
        //   label: 'mengikuti',
        // }
        if(this.prop_data.sudah_diminta) {
          this.$q.notify({
            message: 'Sudah dikirim',
            color: 'orange',
            icon: 'done',
            position: 'top',
          })
          return
        }

        const request = await this.dispatchVuex('aggregator/set_minta', this.form)
        console.log(request)

        this.dispatchVuex('konsultasi_minta/update', { alias: this.current_tab, index: this.index, data: request.data })
      },
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