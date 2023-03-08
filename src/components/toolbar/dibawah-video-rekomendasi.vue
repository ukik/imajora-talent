<template>

  <div class="text-center q-py-sm">

    <q-btn @click="onSubmitMenyukai" unelevated color="grey-1" text-color="red-4" size="md" class="col q-pa-xs q-mx-xs" round :icon="status_suka ? 'favorite' : 'favorite_border'">
      <q-badge color="pink-4" style="font-size:14px;" v-if="total_suka" floating>{{ total_suka }}</q-badge>
    </q-btn>    

    <q-btn unelevated color="grey-1" text-color="grey" size="md" class="q-pa-xs q-mx-xs" round icon="chat_bubble_outline">
      <q-badge color="light-blue-4" style="font-size:14px;" v-if="get_komentar" floating>{{ get_komentar }}</q-badge>
    </q-btn>

    <q-btn @click="onSubmitFavorit" unelevated color="grey-1" text-color="grey" class="q-pa-xs q-mx-xs" size="md" round :icon="status_favorit ? 'turned_in' : 'turned_in_not'"></q-btn>    

    <q-btn unelevated color="grey-1" text-color="grey" class="q-pa-xs q-mx-xs" size="md" round icon="share"></q-btn>

    <q-btn v-if="is_cordova" unelevated color="grey-1" text-color="grey" class="q-pa-xs q-mx-xs" size="md" round icon="fullscreen"></q-btn> 

    <q-btn unelevated @click="$emit('onBubbleEvent_ResetVideo')" color="grey-1" text-color="grey" class="q-pa-xs q-mx-xs" size="md" round icon="refresh"></q-btn>    

    <q-separator class="q-mt-sm" />
  </div>

</template>

<script type="text/javascript">



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

      const request = await this.dispatchVuex('aggregator/set_menyukai', this.form_menyukai)

      this.total_suka = request.data.total
      this.status_suka = request.value > 0 ? true : false

      await this.dispatchVuex('video_detail/action_update', request.data)      
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

    props: {
      prop_total: {
        default: () => ([])
      },
      // prop_data: {
      //   default: () => ([])
      // },         

    },  
    computed: {
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