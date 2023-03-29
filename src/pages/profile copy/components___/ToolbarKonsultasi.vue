<template>


    <q-toolbar class="q-pa-none text-grey">

        <div class="q-mr-sm">
            <!-- Jawaban -->
            <q-btn :to="{
              name: 'konsultasi_jawaban',
              params: {
                id: form_favorit.id_postingan
              },
            }" flat color="grey" size="12px" round icon="content_paste" />
            <span style="font-size:12px;">{{ jawaban }}</span> 
        </div >
        <div class="q-mr-sm">
            <!-- Dukungan -->
            <q-btn @click="onSubmitDukungan" size="12px" flat :color="status_dukungan ? 'positive' : 'grey'" round :icon="status_dukungan ? 'thumb_up' : 'thumb_up_off_alt'" />
            <span style="font-size:12px;">{{ total_dukungan }}</span>
        </div>        
        <div>
            <!-- Komentar -->
            <q-btn :to="{
              name: 'komentar',
              params: {
                segment: 'konsultasi', 
                id: form_favorit.id_postingan
              },
              query: {
                id_pemilik_postingan: form_favorit.id_pemilik_postingan,
              }               
            }" flat color="grey" size="12px" round icon="chat_bubble_outline" />
            <span style="font-size:12px;">{{ get_komentar }}</span>
        </div>

        <q-space />

        <q-btn @click="onSubmitFavorit" size="12px" flat color="grey-7" round :icon="status_favorit ? 'turned_in' : 'turned_in_not'" />
        <q-btn flat size="12px" color="grey" round icon="share" />
    </q-toolbar>
  
</template>

<script type="text/javascript">

const dukungan = {
  data() {
    return {
      total_dukungan: 0,
      status_dukungan: false,
    }
  },
  props: ['form_dukungan','dukungan'],
  mounted() {   
    this.status_dukungan = this.get_dukungan
    this.total_dukungan = this.get_total('dukungan') 
  },
  methods: {
    async onSubmitDukungan() {
      const request = await this.dispatchVuex('aggregator/set_dukungan', this.form_dukungan)
      if(!request.data) return

      this.total_dukungan = request.data.total
      this.status_dukungan = request.value > 0 ? true : false
    },
  },
  computed: {
    get_dukungan() {
      if(!this.dukungan) return false
      if(Object.keys(this.dukungan).length === 0) return false
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
        return 0
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

  
const jawaban = {
    computed: {
        get_jawaban() {
          if(this.prop_total.length <= 0) return 0

          for (var i = this.prop_total.length - 1; i >= 0; i--) {
            if(this.prop_total[i].label == 'jawaban') {
              return this.prop_total[i].total
            }
          }

          return 0
        }         
    },      
}  
    
export default {
    mixins: [favorit, Komentar, dukungan, jawaban],
    props: {
      jawaban: {
        default: 0
      },      
      index: {
        default: null
      },
      created_at: {
        default: ''
      },
      prop_total: {
        default: () => ({})
      },
      // prop_data: {
      //   default: () => ({})
      // },         

    },
};
</script>