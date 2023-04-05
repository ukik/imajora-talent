<template>
  <div class="col-12 bg-white" v-if="get_reply_data.length <= 0">
    <q-item-label lines="1" class="q-py-lg q-pl-md">Komentar</q-item-label>

    <q-item v-if="get_comment?.id" class="q-pa-none q-ma-none q-mb-lg q-pl-md" dense>
      <KomentarTop :index="get_comment?.id" :item="get_comment" />
    </q-item>

    <q-separator color="grey-3" />

    <q-item-label lines="1" class="q-py-lg q-pl-md">Komentar Balasan</q-item-label>
  </div>

  <q-virtual-scroll ref="virtualListRef" @virtual-scroll="onscroll" style="height: calc(100vh - 50px - 80px)"
    class="col-12 bg-white" :items="get_reply_data" separator v-slot="{ item, index }">
    <q-list>
      <q-pull-to-refresh class="bg-white" :disable="!is_mobile_size" v-if="index === 0" :key="index + 'C'" ref="pullToRefresh"
        @refresh="refresh">

        <q-item-label lines="1" class="q-py-lg q-pl-md">Komentar</q-item-label>

        <q-item class="q-pa-none q-ma-none q-mb-lg q-pl-md" dense>
          <KomentarTop :index="get_comment?.id" :item="get_comment" />
        </q-item>

        <q-separator color="grey-3" />

        <q-item-label lines="1" class="q-py-lg q-pl-md">Komentar Balasan</q-item-label>

      </q-pull-to-refresh>

      <q-item class="q-pa-none q-ma-none q-pl-md bg-white" :key="index" dense>
        <Komentar :index="index" :item="item" />
      </q-item>

      <q-item class="q-pa-none q-ma-none" v-if="index >= get_reply_data.length - 1" :key="index + 'A'" dense>
        <q-infinite-scroll class="full-width" :debounce="200" ref="infiniteScroll" @load="onLoad" :offset="250">
          <template v-slot:loading>
            <div class="row justify-center q-my-md">
              <q-spinner-dots color="primary" size="40px" />
            </div>
          </template>
        </q-infinite-scroll>
      </q-item>

    </q-list>

  </q-virtual-scroll>

  <q-no-ssr>
    <q-header bordered unelevated class="bg-white text-black text-center">
      <q-toolbar class="row">
        <q-btn flat dense round @click="onGotoBack" color="blue" icon="arrow_back_ios" />
        <q-toolbar-title class="col text-left">
          Komentar Balasan
          <q-badge v-if="get_reply_data.length > 0" align="top" color="cyan">
            {{ get_reply_total }}
          </q-badge>
        </q-toolbar-title>
        <q-btn dense style="height:30px;" flat round icon="more_vert" color="dark" />
      </q-toolbar>
    </q-header>

    <transition v-if="get_comment?.id" name="fade-global">
      <q-footer class="bg-transparent text-black row flex flex-center">
        <q-list bordered class="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-xs-12  bg-white q-pt-md">
          <q-item dense>
            <q-item-section>
              <q-item-label v-if="reply">
                <q-item-label caption lines="1">Membalas</q-item-label>
                <q-chip size="12px" :disable="loading_komentar_balasan_comment" class="q-mx-none" @remove="reply = null" removable color="red" text-color="white">
                  <q-avatar>
                    <img @error="handleError" :src="imageSync(reply?.user?.avatar)" :placeholder-src="default_avatar">
                  </q-avatar>
                  <div class="ellipsis">
                    @{{ reply?.user?.name }}
                  </div>
                </q-chip>
              </q-item-label>
              <q-item-label>
                <q-input :loading="loading_komentar_balasan_comment" dense outlined :disable="loading_komentar_balasan_comment || loading_komentar_balasan" v-model="text_komentar_balasan" maxlength="2500" counter clearable
                  placeholder="Add a comment" autogrow input-style="min-height: unset; max-height: 200px;">
                  <template v-if="text_komentar_balasan" v-slot:after>
                    <q-btn :disable="loading_komentar_balasan_comment" :loading="loading_komentar_balasan_comment" @click="onComment" dense label="post" flat color="primary" />
                  </template>
                </q-input>
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-footer>
    </transition>
  </q-no-ssr>


</template>

<script>

import { mapState, mapWritableState, mapActions } from 'pinia'
import { useVideoListStore } from 'src/stores/video/list.js'
import { preFetch } from 'quasar/wrappers';

import Komentar from "./components/komentar.vue"
import KomentarTop from "./components/komentar-top.vue"

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)

  );
}

export default {
  components: {
    Komentar,
    KomentarTop,
  },
  computed: {
    ...mapState(useVideoListStore, {
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

      text_komentar_balasan: 'text_komentar_balasan',

      loading_komentar_balasan: 'loading_komentar_balasan',
      loading_komentar_balasan_comment: 'loading_komentar_balasan_comment',
    }),
    ...mapWritableState(useVideoListStore, {
      text_komentar_balasan: "text_komentar_balasan",
    }),
  },
  data() {
    return {
      reply: null,
    }
  },
  methods: {
    ...mapActions(useVideoListStore, [
      'komentar_balasan',
      'komentar_balasan_more',
      'komentar_balasan_comment',
    ]),
    onscroll(event) {
    },
    async onComment() {
      const response = await this.komentar_balasan_comment({
        index: this.index,
        post_id: this.get_comment?.post_id,
        parent_id: this.route_param?.id,
        replied_id: this.get_comment?.user_id,
      })
      console.log('response', response)
      if(response) {
        this.reply = null
      }
    },
    async refresh(done) {
      await this.komentar_balasan({
        post_id: this.route_param?.post_id,
        page: this.route_param?.page,
      });
      this.$refs.infiniteScroll.resume()
      done() // required
    },
    async onLoad(index, done) {

      if (!this.get_reply_next_page_url) {
        done(true)
        return
      }

      const request = await this.komentar_balasan_more({
        id: this.route_param?.id,
        page: this.route_param?.page,
      });

      if (!request) {
        done(true) //= stop infinite-scroll
      }

      if (!this.get_reply_next_page_url) {
        done(true) //= stop infinite-scroll
      } else {
        done()
      }

    }
  }
}
</script>
