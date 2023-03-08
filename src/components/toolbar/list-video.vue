<template>
<div class="row q-pa-none q-px-sm text-grey">
    <q-item-section>
        <span class="vertical-middle" style="font-size:12px;">{{ created_at }}</span>
    </q-item-section>

    <div class="row q-pa-none">
        <div class="q-mr-sm">
            <q-btn flat color="grey" size="12px" round icon="chat_bubble_outline" />
            <span style="font-size:12px;">{{ get_komentar }}</span>
        </div>

        <div class="q-mr-sm">
            <q-btn @click="onSubmitMenyukai" flat color="red-5"  size="12px" round :icon="status_suka ? 'favorite' : 'favorite_border'" />
            <span style="font-size:12px;">{{ total_suka }}</span>
        </div>
        <q-btn flat color="grey" size="sm" round icon="share" />
    </div>
</div>
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
  props: ['form_menyukai','menyukai'],
  mounted() {   
    this.status_suka = this.get_menyukai
    this.total_suka = this.get_total('suka')
  },
  methods: {
    async onSubmitMenyukai() {
      const request = await this.dispatchVuex('aggregator/set_menyukai', this.form_menyukai)
      if(!request.data) return

      this.total_suka = request.data.total
      this.status_suka = request.value > 0 ? true : false

      // await this.dispatchVuex('cari_detail/action_update', { payload: request.data, alias: this.current_tab })      
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
      if(!request.data) return

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
    computed: {
      ...mapFields({
        current_tab: "cari_detail.current_tab",
      }),
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
    mixins: [menyukai, favorit],
    props: {
      index: {
        default: null
      },
      created_at: {
        default: ''
      },
      prop_total: {
        default: () => ({})
      },
      prop_data: {
        default: () => ({})
      },         

    },
};
</script>