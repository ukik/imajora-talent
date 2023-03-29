<template>

  <div class="col-12 bg-white" v-if="get_comments_data.length <= 0">

    <q-item v-if="get_detail?.id" class="q-pa-none q-ma-none q-mb-lg q-pl-md" dense>
      <Card :index="get_detail?.id" :item="get_detail" />
    </q-item>

    <q-separator color="grey-3" />

    <q-item-label lines="1" class="q-py-lg q-pl-md">Semua Komentar</q-item-label>
  </div>

  <q-virtual-scroll ref="virtualListRef" @virtual-scroll="onscroll" style="height: calc(100vh - 50px - 80px)"
    class="col-12 bg-white" :items="get_comments_data" separator v-slot="{ item, index }">
    <q-list>
      <q-pull-to-refresh class="bg-white" :disable="!is_mobile_size" v-if="index === 0" :key="index + 'C'" ref="pullToRefresh"
        @refresh="refresh">

        <q-item class="q-pa-none q-ma-none" dense>
          <Card :index="index" :item="get_detail" />
        </q-item>

        <q-item-label lines="1" class="q-pt-lg q-pl-md">Semua Komentar</q-item-label>

      </q-pull-to-refresh>

      <q-item class="q-pa-none q-ma-none q-pl-md bg-white" :key="index" dense>
        <Komentar @onBalas="reply = item" :index="index" :item="item" />
      </q-item>

      <q-item class="q-pa-none q-ma-none" v-if="index >= get_comments_data.length - 1" :key="index + 'A'" dense>
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
          Komentar semua
          <q-badge v-if="get_comments_data.length > 0" align="top" color="cyan">
            {{ get_comments_total }}
          </q-badge>
        </q-toolbar-title>
        <q-btn dense style="height:30px;" flat round icon="more_vert" color="dark" />
      </q-toolbar>
    </q-header>

    <transition name="fade-global">
      <q-footer class="bg-transparent text-black row flex flex-center">
        <q-list bordered class="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-xs-12  bg-white q-pt-md">
          <q-item dense>
            <q-item-section>
              <q-item-label v-if="reply">
                <q-item-label caption lines="1">Membalas</q-item-label>
                <q-chip size="12px" :disable="loading_komentar_semua_comment" class="q-mx-none" @remove="reply = null" removable color="red" text-color="white">
                  <q-avatar>
                    <img :src="img_checker(reply?.user?.avatar)" :placeholder-src="default_avatar">
                  </q-avatar>
                  <div class="ellipsis">
                    @{{ reply?.user?.name }}
                  </div>
                </q-chip>
              </q-item-label>
              <q-item-label>
                <q-input :loading="loading_komentar_semua_comment" dense outlined :disable="loading_komentar_semua_comment || loading_komentar_semua" v-model="text_komentar_semua" maxlength="2500" counter clearable
                  placeholder="Add a comment" autogrow input-style="min-height: unset; max-height: 200px;">
                  <template v-if="text_komentar_semua" v-slot:after>
                    <q-btn :disable="loading_komentar_semua_comment" :loading="loading_komentar_semua_comment" @click="onComment" dense label="post" flat color="primary" />
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
import { useAudioListStore } from 'src/stores/audio/list.js'

import Komentar from "./components/komentar.vue"
import Card from "./components/card.vue"

export default {
  components: {
    Komentar,
    Card,
  },
  computed: {
    ...mapState(useAudioListStore, {
      get_detail: 'get_detail',

      get_comments_current_page: 'get_comments_current_page',
      get_comments_data: 'get_comments_data',
      get_comments_first_page_url: 'get_comments_first_page_url',
      get_comments_from: 'get_comments_from',
      get_comments_last_page: 'get_comments_last_page',
      get_comments_last_page_url: 'get_comments_last_page_url',
      get_comments_links: 'get_comments_links',
      get_comments_next_page_url: 'get_comments_next_page_url',
      get_comments_path: 'get_comments_path',
      get_comments_per_page: 'get_comments_per_page',
      get_comments_prev_page_url: 'get_comments_prev_page_url',
      get_comments_to: 'get_comments_to',
      get_comments_total: 'get_comments_total',

      text_komentar_semua: 'text_komentar_semua',

      loading_komentar_semua: 'loading_komentar_semua',
      loading_komentar_semua_comment: 'loading_komentar_semua_comment',
    }),
    ...mapWritableState(useAudioListStore, {
      text_komentar_semua: "text_komentar_semua",
    }),
  },
  data() {
    return {
      reply: null,
    }
  },
  methods: {
    ...mapActions(useAudioListStore, [
      'komentar_semua',
      'komentar_semua_more',
      'komentar_semua_comment',
    ]),
    onscroll(event) {
    },
    async onComment() {
      const response = await this.komentar_semua_comment({
        index: this.index,
        post_id: this.route_param?.id,
        parent_id: this.reply?.id == undefined ? '' : this.reply?.id,
        replied_id: this.reply?.user_id == undefined ? '' : this.reply?.user_id,
      })
      console.log('onComment', response)
      if(response) {
        this.reply = null
      }
    },
    async refresh(done) {
      await this.komentar_semua({
        post_id: this.route_param?.post_id,
        page: this.route_param?.page,
      });
      this.$refs.infiniteScroll.resume()
      done() // required
    },
    async onLoad(index, done) {

      if (!this.get_comments_next_page_url) {
        done(true)
        return
      }

      const request = await this.komentar_semua_more({
        id: this.route_param?.id,
        page: this.route_param?.page,
      });

      if (!request) {
        done(true) //= stop infinite-scroll
      }

      if (!this.get_comments_next_page_url) {
        done(true) //= stop infinite-scroll
      } else {
        done()
      }

    }
  }
}
</script>
