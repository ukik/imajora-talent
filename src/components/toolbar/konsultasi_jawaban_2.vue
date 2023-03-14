<template>
  <q-toolbar>

    <q-btn class="col" @click="dialog = true; id_komentar = data_0.id; sumber_aksi = 'konten'; id_pemilik_postingan = data_0.id_user"  align="left" unelevated no-caps text-color="grey" color="grey-3" rounded label="Beri komentar..." />


<!--     <div class="q-mr-sm">
        <q-btn flat color="grey" size="12px" round icon="content_paste" />
        <span style="font-size:12px;">{{ data_0.count_jawaban }}</span>
    </div >
 -->
    <div class="q-mr-sm">
        <q-btn @click="onSubmitDukungan" size="12px" flat :color="status_dukungan ? 'positive' : 'grey'" round :icon="status_dukungan ? 'thumb_up' : 'thumb_up_off_alt'" />
        <span style="font-size:12px;">{{ total_dukungan }}</span>
    </div>

    <!-- <q-toolbar-title class="q-pa-none" />        -->

    <q-btn @click="onSubmitMenyukai" flat color="pink" round :icon="status_suka ? 'favorite' : 'favorite_border'">
      <q-badge color="red" v-if="total_suka > 0" floating> {{ total_suka }} </q-badge>
    </q-btn>


    <q-btn flat color="grey-5" round icon="chat_bubble_outline">
      <q-badge color="red" v-if="total_komentar" floating> {{ total_komentar }} </q-badge>
    </q-btn>

    <!-- <q-btn flat color="grey-5" round icon="turned_in_not" /> -->
    <q-btn @click="onSubmitFavorit" flat color="grey-7" round :icon="status_favorit ? 'turned_in' : 'turned_in_not'" />

    <q-btn flat color="grey-5" round icon="share" />

  </q-toolbar>
</template>


<script type="text/javascript">

// import { menyukai } from "src/mixins/menyukai"
// import { favorit } from "src/mixins/favorit"

;

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
      const form = {
        // user_sukaable_id: this.data_0.id,
        // user_sukaable_type: 'Artikel_Model',
        // label: 'artikel',

        id_pemilik_postingan: this.data_0.id_user,
        id_postingan: this.data_0.id,
        type: 'Jawaban_Konsultasi_Model',
        label: 'jawaban_konsultasi',
      }

      console.log(this.data_0)

      const request = await this.dispatchVuex('aggregator/set_menyukai', form)

      this.total_suka = request.data.total
      this.status_suka = request.value > 0 ? true : false
    },
  },
  computed: {
    get_menyukai() {
      if(!this.data_0.menyukai) return false
      if(Object.keys(this.data_0.menyukai).length === 0) return false
      return true
    },
    get_total() {
      return function(label) {

        if(this.data_0.user_totals.length <= 0) return 0

        for (var i = this.data_0.user_totals.length - 1; i >= 0; i--) {
          if(this.data_0.user_totals[i].label == label) {
            return this.data_0.user_totals[i].total
          }
        }

        return 0
      }
    }
  }
}


// const komentar = {
//   computed: {
//     get_komentar() {
//       if(this.get_total('komentar') == null) return 0
//       return this.get_total('komentar') >= 99 ? '+99' : this.get_total('komentar')
//     },
//   }
// }

const favorit = {
  data() {
    return {
      status_favorit: false,
    }
  },
  mounted() {
    this.status_favorit = this.get_favorit
  },
  methods: {
    async onSubmitFavorit() {
      const form = {
        id_pemilik_postingan: this.data_0.id_user,
        id_postingan: this.data_0.id,
        type: 'Jawaban_Konsultasi_Model',
        label: 'jawaban_konsultasi',
      }

      const request = await this.dispatchVuex('aggregator/set_favorit', form)

      this.status_favorit = request.value > 0 ? true : false
    },
  },
  computed: {
    get_favorit() {
      if(!this.data_0.favorit) return false
      if(Object.keys(this.data_0.favorit).length === 0) return false
      return true
    },
  }
}


const dukungan = {
  data() {
    return {
      total_dukungan: 0,
      status_dukungan: false,
    }
  },
  mounted() {
    this.status_dukungan = this.get_dukungan
    this.total_dukungan = this.get_total('dukungan')
  },
  methods: {
    async onSubmitDukungan() {
      const form = {
        id_pemilik_postingan: this.data_0.id_user,
        id_postingan: this.data_0.id,
        type: 'Jawaban_Konsultasi_Model',
        label: 'jawaban_konsultasi',
      }

      const request = await this.dispatchVuex('aggregator/set_dukungan', form)
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

        if(this.user_totals.length <= 0) return 0

        for (var i = this.user_totals.length - 1; i >= 0; i--) {
          if(this.user_totals[i].label == label) {
            return this.user_totals[i].total
          }
        }
        return 0
      }
    }
  }
}

const komentar = {
    computed: {
        // get_komentar() {
        //   if(this.user_totals.length <= 0) return 0

        //   for (var i = this.user_totals.length - 1; i >= 0; i--) {
        //     if(this.user_totals[i].label == 'komentar') {
        //       return this.user_totals[i].total
        //     }
        //   }

        //   return 0
        // }
    },
}


// const jawaban = {
//     computed: {
//         get_jawaban() {
//           if(this.user_totals.length <= 0) return 0

//           for (var i = this.user_totals.length - 1; i >= 0; i--) {
//             if(this.user_totals[i].label == 'jawaban') {
//               return this.user_totals[i].total
//             }
//           }

//           return 0
//         }
//     },
// }

export default {
    computed: {
      // ...mapFields({
      //     dialog: "konsultasi_jawaban.dialog",

      //     total_komentar: "konsultasi_jawaban.total_komentar",

      //     id_pemilik_postingan: "konsultasi_jawaban.id_pemilik_postingan",
      //     id_komentar: "konsultasi_jawaban.id_komentar",
      //     text_komentar: "konsultasi_jawaban.text_komentar",
      //     sumber_aksi: "konsultasi_jawaban.sumber_aksi",

      //     data_0: "konsultasi_jawaban.data_0",
      //     user_totals: "konsultasi_jawaban.data_0.user_totals",
      //     menyukai: "konsultasi_jawaban.data_0.menyukai",
      //     favorit: "konsultasi_jawaban.data_0.favorit",
      //     dukungan: "konsultasi_jawaban.data_0.dukungan",
      // }),
      get_komentar() {
          if(this.user_totals.length <= 0) return 0

          for (var i = this.user_totals.length - 1; i >= 0; i--) {
            if(this.user_totals[i].label == 'komentar') {
              return this.user_totals[i].total
            }
          }

          return 0
      }
      // komentar() {
      //   if(this.data_0.komentar_count == null) return 0
      //   return this.data_0.komentar_count >= 99 ? '+99' : this.data_0.komentar_count
      // },
      // suka() {
      //   if(this.data_0.suka_count == null) return 0
      //   return this.data_0.suka_count >= 99 ? '+99' : this.data_0.suka_count
      // }
    },
    mixins: [menyukai, favorit, dukungan, komentar],
};
</script>

<style type="text/css" scoped>
/*.q-badge.flex.inline.items-center.no-wrap.q-badge--single-line.q-badge--floating {
  font-size: 12px;
  margin-top: 5px;
  background-color: transparent !important;
}   */
</style>
