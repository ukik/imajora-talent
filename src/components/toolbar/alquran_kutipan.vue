<template>
    <div class="row q-pa-none text-grey">
      <slot name="created" />


      <q-btn flat color="grey" size="12px" round icon="chat_bubble_outline">
        <q-badge color="red" v-if="get_komentar > 0" floating> {{ get_komentar }} </q-badge>
      </q-btn>

      <q-btn class="q-mx-xs" size="12px" @click="onSubmitMenyukai" flat color="pink" round :icon="status_suka ? 'favorite' : 'favorite_border'">
        <q-badge color="red" v-if="total_suka > 0" floating> {{ total_suka }} </q-badge>
      </q-btn>

      <q-btn flat size="12px" color="grey" round icon="share" />
    </div>
  
</template>

<script type="text/javascript">


const Komentar = {
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
}  


const menyukai = {
  data() {
    return {
      total_suka: 0,
      status_suka: false,
    }
  },
  mounted() {   
    this.status_suka = this.get_menyukai
    this.total_suka = this.get_total('suka')
  },
  methods: {
    async onSubmitMenyukai() {

      const request = await this.dispatchVuex('aggregator/set_menyukai', this.form_menyukai)

      this.total_suka = request.data.total
      this.status_suka = request.value > 0 ? true : false
    },
  },
  computed: {
    get_menyukai() {
      if(!this.menyukai) return false
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


export default {
    mixins: [menyukai, Komentar],
    props: {
      index: {
        default: null
      },
      prop_total: {
        default: () => ({})
      },
      menyukai: {
        default: null,
      },
      form_menyukai: {
        default: () => ({})
      },
    },
};
</script>