<template>

  <!-- <q-page-container> -->
  <q-pull-to-refresh @refresh="refresh">

    <!-- <div v-if="konten.length <= 0 && loading" class="text-center" :style="'min-height' + ($q.screen.height - 50) + 'px'">
      <SkeletonTwitter />
    </div> -->

    <!-- <SpinnerOrbit v-if="loading && konten.length > 0" /> -->

    <!-- <q-page v-if="konten.length <= 0 && !loading" class="flex flex-center">
      <BlankKomentar />
    </q-page> -->

    <!-- <q-item-label lines="1" class="q-py-lg">Komentar Balasan</q-item-label> -->

    <q-list bordered v-if="get_comments.length > 0">
      <template v-for="(item, index) in get_comments" :key="index">
        <Komentar :item="item" />

        <q-item class="q-px-sm" v-for="(item2, index2) in item.childs" clickable v-ripple>
          <q-item-section class="q-mx-none" avatar></q-item-section>
          <q-item-section>
            <q-item-label class="text-caption"><span class="text-bold">@123 Likes: </span> <span>{{ item2.konten }}</span></q-item-label>
          </q-item-section>
        </q-item>

        <div class="row flex justify-end q-my-md">
          <q-item clickable dense>
            <q-item-section>
              <q-item-label caption lines="1">View all {{ item.childs_count }} comments</q-item-label>
            </q-item-section>
          </q-item>
        </div>

        <q-separator color="grey-3" />

      </template>

      <!-- <q-infinite-scroll v-if="is_desktop && MOUNTED && $route.name == 'komentar'" :debounce="200" ref="infiniteScroll" @load="onLoad" :offset="250">
    <template v-slot:loading>
      <div class="row justify-center q-my-md">
        <q-spinner-dots color="primary" size="40px" />
      </div>
    </template>
  </q-infinite-scroll> -->

    </q-list>
  </q-pull-to-refresh>

  <!-- </q-page-container> -->


  <q-header bordered unelevated class="bg-white text-black text-center">
    <q-toolbar>
      <q-btn flat dense round @click="onGotoBack" color="blue" icon="arrow_back_ios" />
      <q-toolbar-title>
        Komentar
        <q-badge align="top" color="cyan">
          {{ get_reply_paginate_total }}
        </q-badge>

      </q-toolbar-title>
      <q-space />
      <!-- <ActionbarMenu /> -->
    </q-toolbar>
  </q-header>



  <transition name="fade-global" >
    <q-footer class="bg-transparent text-black row flex flex-center">
      <q-list bordered class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12 bg-white q-pt-md">
        <q-item dense>
          <q-item-section>
            <q-input dense outlined :disable="get_comments.length > 0" v-model="text" maxlength="2500" counter autogrow placeholder="Add a comment">
              <template v-if="text" v-slot:append>
                <q-btn dense label="post" flat color="primary" />
              </template>
            </q-input>
          </q-item-section>
        </q-item>
      </q-list>
    </q-footer>
  </transition>

  <!-- <q-dialog v-model="dialog" v-if="MOUNTED" position="bottom" class="q-pa-sm" full-width maximized>

    <q-list class="bg-white">
      <q-item>
        <q-item-section>
          <q-input :disable="is_loading" ref="komentar" v-model="text_komentar" bg-color="grey-4"
            standout="bg-grey-2 text-black" dense autofocus rounded borderless autogrow hint="Wajib diisi"
            class="full-width bevel-radius" placeholder="Tuliskan komentar anda..." input-class="q-pl-sm" maxlength="200"
            counter :rules="[val => !!val || 'komentar kosong']" lazy-rules>

            <template v-slot:append>
              <q-icon v-if="text_komentar !== ''" name="close" @click="text_komentar = ''"
                class="cursor-pointer q-mr-sm" />
            </template>

          </q-input>
        </q-item-section>


        <q-item-section avatar top>
          <q-btn @click="onSubmit" style="margin-top:2.5px;" class="justify-top" flat dense round color="blue" icon="send"
            :disable="is_loading" />
        </q-item-section>
      </q-item>
    </q-list>

  </q-dialog> -->

</template>

<script>

import { mapFields } from 'vuex-map-fields';
import { mapState, mapWritableState, mapActions } from 'pinia'
import { useKomentarBalasanStore } from 'src/stores/komentar-balasan-store.js'

import Toolbar from "./components/Toolbar.vue"
import Komentar from "./components/Komentar.vue"


export default {
  computed: {
    ...mapFields({
      get_comments:'komentar.comments.data',
      get_paginate_total:'komentar.comments.total',
      get_loading:'komentar.loading',
    }),
  },
  async preFetch({ store, currentRoute, previousRoute, redirect, ssrContext, urlPath, publicPath }) {
    return store.dispatch('komentar/request')
  },
  components: {
    Toolbar,
    Komentar,

  },
  data() {
    return {
      text:'',
      dialog: false,
      text_komentar: '',
      is_loading: false,

      is_paginate_ready: true,
      MOUNTED: false,
    }
  },
  watch: {
    paginate: {
      deep: true,
      handler(val) {
        setTimeout(() => {
          if (this.$refs.infiniteScroll !== undefined) this.$refs.infiniteScroll.resume()
        }, 250)
      }
    },
    loading(val) {
      if (!val) {
        setTimeout(() => {
          this.is_paginate_ready = true
          return
        }, 2000)
      }
      this.is_paginate_ready = false
    }
  },
  async deactivated() {
    // this.dispatchVuex('komentar/clean')
  },
  mounted() {
    // console.log(this.$store)

    setTimeout(() => {
      this.MOUNTED = true
    }, 2500)
  },
  // activated(){
  // },
  // deactivated(){
  //   window.clearInterval()
  // },
  methods: {
    onInput(val) {
      if (this.is_desktop) {
        window.scrollTo({
          top: 0,
          left: 0,
        });
      }
      this.action_komentar_more({ page: val, segment: this.$route.params.segment, id: this.$route.params.id, tag: 'by_paginate' }) // artikel|gambar|jawaban_konsultasi|konsultasi|status|video
    },
    async onSubmit() {

      if (!this.$refs.komentar.validate()) {
        this.$q.notify({
          message: 'Wajib isi komentar',
          icon: 'announcement',
          color: 'red',
          position: 'top',
        })
        return
      }

      const id_pemilik_postingan = this.$route.query.id_pemilik_postingan
      const id_postingan = this.$route.params.id

      if (
        !id_pemilik_postingan ||
        !id_postingan
      ) {
        this.$q.notify({
          message: 'Data tidak lengkap',
          icon: 'announcement',
          color: 'red',
          position: 'top',
        })
        return
      }

      this.is_loading = true


      let tipe = ''
      switch (this.$route.params.segment) {
        case 'artikel':
          tipe = 'Artikel_Model'
          break
        case 'gambar':
          tipe = 'Gambar_Model'
          break
        case 'jawaban_konsultasi':
          tipe = 'Jawaban_Konsultasi_Model'
          break
        case 'konsultasi':
          tipe = 'Konsultasi_Model'
          break
        case 'status':
          tipe = 'Status_Model'
          break
        case 'video':
          tipe = 'Video_Model'
          break
      }

      const form = {
        'id_pemilik_postingan': id_pemilik_postingan,
        'id_postingan': id_postingan,
        'type': tipe,
        'text_komentar': this.text_komentar,
        'label': this.$route.params.segment,
      }

      const response = await this.dispatchVuex('aggregator/set_komentar', form)
      if (!response.data) return
      console.log(response.data)

      this.$q.notify({
        message: response.result,
        // caption: res.data.data_1.updated_at,
        color: response.value == 1 ? 'positive' : 'orange',
        icon: 'done',
        position: 'top',
      })

      this.is_loading = false

      await this.dispatchVuex('komentar/update', response.data)

      await this.dispatchVuex('komentar/paginate_total', response.total_komentar.total)

      this.text_komentar = ''
    },

    async refresh(done) {
      await this.action_komentar({ pull_refresh: true, segment: this.$route.params.segment, id: this.$route.params.id }) // artikel|gambar|jawaban_konsultasi|konsultasi|status|video
      if (this.$refs.infiniteScroll !== undefined) this.$refs.infiniteScroll.stop()
      done() // required
    },
    async onLoad(index, done) {
      const paginate = this.paginate

      if (!paginate.next_page_url) {
        done(true)
        return
      }

      await this.action_komentar_more({ page: paginate.current_page + 1, segment: this.$route.params.segment, id: this.$route.params.id, tag: 'by_scroll' }) // artikel|gambar|jawaban_konsultasi|konsultasi|status|video

      if (paginate.next_page_url) {
        done(true) //= stop infinite-scroll
      } else {
        done()
      }

    }
  },
};
</script>
