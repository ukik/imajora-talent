<template>

  <q-pull-to-refresh v-if="get_reply_data.length > 0" @refresh="refresh" class="scroll">
    <q-scroll-area ref="scrollAreaRef" class="q-pa-md" style="height: calc(100vh - 50px - 80px)">
    <!-- <div v-if="comment.length <= 0 && loading" class="text-center" :style="'min-height' + ($q.screen.height - 50) + 'px'">
      <SkeletonTwitter />

      https://assets8.lottiefiles.com/packages/lf20_z9ed2jna.json
    </div> -->

    <!-- <SpinnerOrbit v-if="loading && comment.length > 0" /> -->

    <!-- <q-page v-if="comment.length <= 0 && !loading" class="flex flex-center">
      <BlankKomentar />
    </q-page> -->

    <q-item-label lines="1" class="q-py-lg">Komentar</q-item-label>

    <Komentar :item="get_comment" class="q-mb-md" />

    <q-separator color="grey-3" />

    <q-item-label ref="replyRef" lines="1" class="q-py-lg">Komentar Balasan</q-item-label>

    <q-list>
      <q-slide-item @left="onSlideReset" @right="onSlideReset" v-for="(item, index) in get_reply_data" :key="item.id" left-color="red" right-color="purple">
        <template v-slot:left>
          <q-btn @click="onDelete(index, item.id)" round outline icon="delete" />
        </template>

        <transition name="fade-global">
          <Komentar @onDelete="onDelete(index, item.id)" :index="index" :item="item" />
        </transition>
        <!-- <q-separator color="grey-3" /> -->

      </q-slide-item>

      <q-infinite-scroll :debounce="200" ref="infiniteScroll" @load="onLoad" :offset="250">
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px" />
          </div>
        </template>
      </q-infinite-scroll>

    </q-list>

  </q-scroll-area>
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
              <q-input :loading="loading_post" dense outlined :disable="get_comment.id || loading_post || loading ? false : true" v-model="text_komentar" maxlength="2500" counter
                placeholder="Add a comment" autogrow input-style="min-height: unset; max-height: 200px;">
                <template v-if="text_komentar" v-slot:after>
                  <q-btn :disable="loading_post" :loading="loading_post" @click="onSubmitComment" dense label="post" flat color="primary" />
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
import { useKomentarSemuaStore } from 'src/stores/komentar-semua-store.js'
import { preFetch } from 'quasar/wrappers';

import Komentar from "./components/Komentar.vue"

export default {
  computed: {
    ...mapState(useKomentarSemuaStore, {
      get_comment: 'get_comment',
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

      loading: 'loading',
      loading_post: 'loading_post',
    }),
    ...mapWritableState(useKomentarSemuaStore, {
      text_komentar: "text_komentar",
    }),
  },
  preFetch: preFetch(async ({ store, currentRoute }) => {
    const mystore = useKomentarSemuaStore(store);
    await mystore.request({
      post_id: currentRoute.params.post_id,
      parent_id: currentRoute.params.parent_id });
  }),
  components: {
    Komentar,
  },
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    ...mapActions(useKomentarSemuaStore, [
      'request',
      'request_more',
      'request_reset',
      'request_delete',
      'request_input',
      // 'clean',
      // 'paginate_total',
      // 'update',
    ]),
    onDelete(index = null, id = null) {
      // this.reply.data.splice(index, 1)
      this.request_delete({index, id})
    },
    async onSubmitComment() {
      await this.request_input(this.text_komentar)
      this.$refs.scrollAreaRef.setScrollPosition('vertical', this.$refs.replyRef.getScrollTarget, 300)
    },
    onSlideReset({reset}) {
      this.$q.notify('Left action triggered. Resetting in 1 second.')
      setTimeout(() => {
        try { reset() } catch (e) {}
      }, 1500);
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
