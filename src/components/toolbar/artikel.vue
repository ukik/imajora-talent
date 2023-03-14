<template>
  <q-toolbar>
<!--   	<q-btn unelevated no-caps text-color="grey" color="grey-2" rounded label="Beri Komentar..." />
    <q-toolbar-title class="q-pa-none" />
  	<q-btn flat color="grey-5" round icon="favorite_border" />
  	<div>2</div>
  	<q-btn flat color="grey-5" round icon="chat_bubble_outline" />
  	<div>2</div>
  	<q-btn flat color="grey-5" round icon="turned_in_not" />
  	<q-btn flat color="grey-5" round icon="share" />
 -->

    <q-btn class="col" @click="dialog = true; id_komentar = data_1.id;"  align="left" unelevated no-caps text-color="grey" color="grey-3" rounded label="Beri komentar..." />

    <!-- <q-toolbar-title class="q-pa-none" />        -->


    <q-btn @click="onSubmitMenyukai" flat color="pink" round :icon="status_suka ? 'favorite' : 'favorite_border'">
      <q-badge color="red" v-if="total_suka > 0" floating> {{ total_suka }} </q-badge>
    </q-btn>


    <q-btn flat color="grey-5" round icon="chat_bubble_outline">
      <q-badge color="red" floating> {{ total_komentar }} </q-badge>
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
        // user_sukaable_id: this.data_1.id,
        // user_sukaable_type: 'Artikel_Model',
        // label: 'artikel',

        id_pemilik_postingan: this.data_1.id_user,
        id_postingan: this.data_1.id,
        type: 'Artikel_Model',
        label: 'artikel',
      }

      console.log(this.data_1)

      const request = await this.dispatchVuex('aggregator/set_menyukai', form)

      this.total_suka = request.data.total
      this.status_suka = request.value > 0 ? true : false
    },
  },
  computed: {
    get_menyukai() {
      if(!this.data_1.menyukai) return false
      if(Object.keys(this.data_1.menyukai).length === 0) return false
      return true
    },
    get_total() {
      return function(label) {

        if(this.data_1.user_totals.length <= 0) return 0

        for (var i = this.data_1.user_totals.length - 1; i >= 0; i--) {
          if(this.data_1.user_totals[i].label == label) {
            return this.data_1.user_totals[i].total
          }
        }
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
          // user_favoritable_id: this.data_1.id,
          // user_favoritable_type: 'Artikel_Model',
          // label: 'artikel',

          id_pemilik_postingan: this.data_1.id_user,
          id_postingan: this.data_1.id,
          type: 'Artikel_Model',
          label: 'artikel',
        }

      const request = await this.dispatchVuex('aggregator/set_favorit', form)

      this.status_favorit = request.value > 0 ? true : false
    },
  },
  computed: {
    get_favorit() {
      if(!this.data_1.favorit) return false
      if(Object.keys(this.data_1.favorit).length === 0) return false
      return true
    },
  }
}


export default {
    computed: {
      // ...mapFields({
      //     dialog: "artikel_detail.dialog",
      //     id_komentar: "artikel_detail.id_komentar",
      //     text_komentar: "artikel_detail.text_komentar",

      //     total_komentar: "artikel_detail.total_komentar",

      //     data_1: "artikel_detail.data_1",
      // }),
      // komentar() {
      //   if(this.data_1.komentar_count == null) return 0
      //   return this.data_1.komentar_count >= 99 ? '+99' : this.data_1.komentar_count
      // },
      // suka() {
      //   if(this.data_1.suka_count == null) return 0
      //   return this.data_1.suka_count >= 99 ? '+99' : this.data_1.suka_count
      // }
    },
    mixins: [menyukai, favorit],
};
</script>

<style type="text/css" scoped>
/*.q-badge.flex.inline.items-center.no-wrap.q-badge--single-line.q-badge--floating {
  font-size: 12px;
  margin-top: 5px;
  background-color: transparent !important;
}   */
</style>
