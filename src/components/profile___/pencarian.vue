<template>
  <q-toolbar class="q-pa-none">

    <q-item-section top avatar style="padding:0px;">
        <q-avatar size="xl">
          <img loading="lazy" :src="img_checker(prop_data.foto)" @error="handleError" v-lazy-src="img_checker(prop_data.foto)">  
          <q-icon name="star" style="font-size:14px; padding:1.5px;" color="white" class="absolute-top-left bg-green rounded-borders" />
        </q-avatar>
    </q-item-section>

    <q-item-section no-wrap>
      <q-item-label class="text-weight-bold" v-html="kataDicari(prop_data.nama, prop_keyword)"></q-item-label>
      <q-item-label caption class="limit" v-html="kataDicari(prop_data.biodata, prop_keyword)"></q-item-label>
    </q-item-section>

    <q-item-section side v-if="tombol_mengikuti">
      <q-btn @click="onSubmit" label="Ikuti" class="flex flex-center" size="sm" color="light-blue" no-caps rounded  unelevated />
    </q-item-section>
    <q-item-section side v-else>
      <q-btn @click="onSubmit" outline class="flex flex-center" icon="person" size="sm" color="red" no-caps rounded unelevated />
    </q-item-section>  
  </q-toolbar>	
</template>

<script type="text/javascript">
  export default {
    props: {
      prop_keyword: {
        default: '',
      },
      form: {
        default: () => ({
          id_user_teman: null, //item.id,
        })
      },
      mengikuti: {
        default: () => ({}) // empty or not (any)
      },
      prop_data: {
        default: () => ({}) // user data
      }
    },
    mounted() {
      this.tombol_mengikuti = this.mengikuti == null ? true : false
    },
    data() {
      return {
        // following: false,

        tombol_mengikuti: false,
      }
    },
    methods: {
      async onSubmit() {
        console.log(this.form)
        // const form = {
        //   id_user_teman: this.prop_data.id,
        //   label: 'mengikuti',
        // }
        const request = await this.dispatchVuex('aggregator/set_teman', this.form)
        console.log(request)
        // this.total_suka += request.value
        // this.total_suka = request.data.total
        this.tombol_mengikuti = request.value > 0 ? false : true
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