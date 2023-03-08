<template>
  <q-toolbar v-ripple="{color:'grey'}" class="relative-position q-pa-none text-black">  
    <q-item-section avatar style="padding:0px;">
        <q-avatar size="lg">
          <img loading="lazy" :src="img_checker(prop_data.foto)" @error="handleError" v-lazy-src="img_checker(prop_data.foto)">
          <q-icon name="star" style="font-size:14px; padding:1.5px;" color="white" class="absolute-top-left bg-green rounded-borders" />
        </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-weight-bold">{{ prop_data.nama }}</q-item-label>
      <q-item-label caption>{{ prop_data.created }}</q-item-label>
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
      setTombolDariParent(val) {
        this.tombol_mengikuti = val
      },
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
        // this.$emit('onBubbleEventRequest', request)        
      },
    },    
  };
</script>

<style type="text/css" scoped>

.limit {
  text-overflow: ellipsis;
  overflow: hidden;  
  /*max-width:100%;*/
}

</style>