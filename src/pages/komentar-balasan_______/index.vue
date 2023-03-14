<template>
  <q-pull-to-refresh v-if="get_reply_data.length > 0" @refresh="refresh" class="scroll"
    style="height: calc(100vh - 50px - 115px)">

    <!-- <div v-if="konten.length <= 0 && loading" class="text-center" :style="'min-height' + ($q.screen.height - 50) + 'px'">
      <SkeletonTwitter />

      https://assets8.lottiefiles.com/packages/lf20_z9ed2jna.json
    </div> -->

    <!-- <SpinnerOrbit v-if="loading && konten.length > 0" /> -->

    <!-- <q-page v-if="konten.length <= 0 && !loading" class="flex flex-center">
      <BlankKomentar />
    </q-page> -->

    <q-item-label lines="1" class="q-py-lg">Komentar</q-item-label>

    <Komentar :item="get_comment" class="q-mb-md" />

    <q-separator color="grey-3" />

    <q-item-label lines="1" class="q-py-lg">Komentar Balasan</q-item-label>

    <q-list>

      <template v-for="(item, index) in get_reply_data" :key="index">
        <Komentar :item="item" />
        <!-- <q-separator color="grey-3" /> -->

      </template>

      <q-infinite-scroll :debounce="200" ref="infiniteScroll" @load="onLoad" :offset="250">
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px" />
          </div>
        </template>
      </q-infinite-scroll>

    </q-list>
  </q-pull-to-refresh>

  <q-no-ssr>
    <q-header bordered unelevated class="bg-white text-black text-center">
      <q-toolbar>
        <q-btn flat dense round @click="onGotoBack" color="blue" icon="arrow_back_ios" />
        <q-toolbar-title>
          Komentar Balasan
          <q-badge align="top" color="cyan">
            {{ get_reply_total }}
          </q-badge>
        </q-toolbar-title>
        <q-btn dense style="height:30px;" flat round icon="more_vert" color="dark" />
        <!-- <q-space /> -->
        <!-- <ActionbarMenu /> -->
      </q-toolbar>
    </q-header>
  </q-no-ssr>

  <q-no-ssr>
    <transition name="fade-global">
      <q-footer class="bg-transparent text-black row flex flex-center">
        <q-list bordered class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12 bg-white q-pt-md">
          <q-item dense>
            <q-item-section>
              <q-input dense outlined :disable="get_comment.id ? false : true" v-model="text" maxlength="2500" counter
                placeholder="Add a comment" autogrow input-style="min-height: unset; max-height: 200px;">
                <template v-if="text" v-slot:append>
                  <q-btn @click="onInput" dense label="post" flat color="primary" />
                </template>
              </q-input>
            </q-item-section>
          </q-item>
        </q-list>
      </q-footer>
    </transition>
  </q-no-ssr>
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

import { mapState, mapWritableState, mapActions } from 'pinia'
import { useKomentarBalasanStore } from 'src/stores/komentar-balasan-store.js'
import { preFetch } from 'quasar/wrappers';

import Komentar from "./components/Komentar.vue"

export default {
  computed: {
    ...mapState(useKomentarBalasanStore, {
      get_comment: 'get_comment',
      // get_reply_data: 'get_reply_data',
      // get_reply_total: 'get_reply_total',

      get_reply_current_page: 'get_reply_current_page',
      get_reply_data: 'get_reply_data',
      get_reply_first_page_url: 'get_reply_first_page_url',
      get_reply_from: 'get_reply_from',
      get_reply_last_page: 'get_reply_last_page',
      get_reply_last_page_url: 'get_reply_last_page_url',
      get_reply_links: 'get_reply_links',
      get_reply_next_page_url: 'get_reply_next_page_url',
      get_reply_path: 'get_reply_path',
      get_reply_per_page: 'get_reply_per_page',
      get_reply_prev_page_url: 'get_reply_prev_page_url',
      get_reply_to: 'get_reply_to',
      get_reply_total: 'get_reply_total',


      get_loading: 'loading',
    }),
    ...mapWritableState(useKomentarBalasanStore, [
      // "reset_prefetch",
      // "komentar",
      // "paginate",
      // "loading",
      // "last_id",
      // "init",
    ]),
  },
  preFetch: preFetch(async ({ store, currentRoute }) => {
    const mystore = useKomentarBalasanStore(store);
    await mystore.request(currentRoute.params.parent_id);
  }),
  components: {
    Komentar,
  },
  data() {
    return {
      text: '',
      dialog: false,
      text_komentar: '',
    }
  },
  methods: {
    ...mapActions(useKomentarBalasanStore, [
      'request',
      'request_more',
      'request_reset',
      // 'clean',
      // 'paginate_total',
      // 'update',
    ]),

    onInput(val) {
      window.scrollTo({
        top: 0,
        left: 0,
      });
    },

    async refresh(done) {
      await this.request_reset();
      this.$refs.infiniteScroll.resume()
      done() // required
    },
    alert() {
      this.$q.notify({
        message: "no more data"
      })
    },
    async onLoad(index, done) {

      if (!this.get_reply_next_page_url) {
        this.alert()
        done(true)
        return
      }

      await this.request_more();

      if (!this.get_reply_next_page_url) {
        this.alert()
        done(true) //= stop infinite-scroll
      } else {
        done()
      }

    }
  },
};
</script>
