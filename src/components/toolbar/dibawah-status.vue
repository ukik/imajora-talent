<template>
  <q-toolbar class="q-px-sm">

    <q-avatar style="font-size:28px;" v-for="(item, index) in prop_data" :key="index">
      <img loading="lazy" :src="img_checker(item.user.foto)" @error="handleError" v-lazy-src="img_checker(item.user.foto)">
    </q-avatar>

    <div class="q-ml-sm text-grey-6">{{ get_total('suka') }} Suka</div>
    
    <q-toolbar-title class="q-pa-none"></q-toolbar-title>       

    <!-- <q-btn flat color="grey-7" round icon="favorite_border" /> -->
    <q-btn @click="onSubmitMenyukai" flat color="pink" round :icon="status_suka ? 'favorite' : 'favorite_border'" />

    <!-- <q-btn flat color="grey-7" round icon="chat_bubble_outline" /> -->

    <q-btn flat color="grey-7" round icon="chat_bubble_outline">
      <q-badge color="red-5" style="font-size:14px;" floating v-if="get_komentar">{{ get_komentar }}</q-badge>
    </q-btn>    

    <!-- turned_in_not -->
    <q-btn @click="onSubmitFavorit" flat color="grey-7" round :icon="status_favorit ? 'turned_in' : 'turned_in_not'" />

    <q-btn flat color="grey-7" round icon="share" />
  </q-toolbar>  
</template>


<script type="text/javascript">

// import { menyukai } from "src/mixins/menyukai"
// import { favorit } from "src/mixins/favorit"

import { mapFields } from 'vuex-map-fields';


const menyukai = {
  data() {
    return {
      total_suka: 0,
      status_suka: false,
    }
  },
  props: ['form_menyukai', 'menyukai'],
  mounted() {   
    this.status_suka = this.get_menyukai
    this.total_suka = this.get_total('suka')
  },
  methods: {
    async onSubmitMenyukai() {

      const request = await this.dispatchVuex('aggregator/set_menyukai_status', this.form_menyukai)
      // const request = await this.dispatchVuex('aggregator/set_menyukai_status', this.form_menyukai)

      this.total_suka = request.data.total
      this.status_suka = request.value > 0 ? true : false

      await this.dispatchVuex('status_detail/action_update', request.data)      
    },
  },
  computed: {
    get_menyukai() {
      if(!this.menyukai) return false
      if(Object.keys(this.menyukai).length === 0) return false
      return true
    },
    get_total() {
      return function(label) {
        console.log('get_total', this.prop_total)

        if(this.prop_total.length <= 0) return 0

        for (var i = this.prop_total.length - 1; i >= 0; i--) {
          if(this.prop_total[i].label == label) {
            return this.prop_total[i].total
          }
        }
      }
    }
  }
}

const favorit = {
  data() {
    return {
      status_favorit: false,
    }
  },
  props: ['form_favorit','favorit'],
  mounted() {   
    this.status_favorit = this.get_favorit
  },
  methods: {
    async onSubmitFavorit() {

      const request = await this.dispatchVuex('aggregator/set_favorit', this.form_favorit)

      this.status_favorit = request.value > 0 ? true : false
    },
  },
  computed: {
    get_favorit() {
      if(!this.favorit) return false
      if(Object.keys(this.favorit).length === 0) return false
      return true
    },
  }
}


export default {
    mixins: [menyukai, favorit],
    // methods: {
    //   async onSubmitMenyukaiStatus() {
    //     const request = await this.dispatchVuex('aggregator/set_menyukai_status', this.form)
    //     console.log('mixins menyukai request', request.data)
    //     // this.total_suka += request.value
    //     this.total_suka = request.data.total
    //     this.status_suka = request.value > 0 ? true : false
        
    //     await this.dispatchVuex('status_detail/action_update', request.data)
    //   },    
    // },
    props: {
      prop_total: {
        default: () => ([])
      },
      prop_data: {
        default: () => ([])
      },         
      // suka_count: {
      //   default: 0,
      // },
      // komentar_count: {
      //   default: 0
      // },
    },  
    computed: {
      ...mapFields({
        // data_1: "status_detail.data_1",
      }),
      // komentar() {
      //   if(this.komentar_count == null) return 0
      //   return this.komentar_count >= 99 ? '+99' : this.komentar_count
      // }

      get_komentar() {
          if(this.prop_total.length <= 0) return 0

          for (var i = this.prop_total.length - 1; i >= 0; i--) {
            if(this.prop_total[i].label == 'komentar') {
              return this.prop_total[i].total
            }
          }

          return 0
      }         
    },  

};
</script>