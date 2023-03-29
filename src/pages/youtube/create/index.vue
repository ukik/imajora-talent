<template>
  <q-no-ssr>
    <q-form  @submit="onSubmit" class="bg-white col-xl-5 col-lg-5 col-md-6 col-sm-12 col-xs-12">
      <div class="row">
        <q-tabs inline-label :breakpoint="0"
          align="left" no-caps
          v-model="tab"
          class="text-primary"
        >
          <q-tab name="tab0" icon="upload_file" label="File"></q-tab>
          <q-tab name="tab1" icon="description" label="Description" />
          <q-tab name="tab2" icon="settings" label="Setting" />
        </q-tabs>
      </div>
      <q-separator color="primary" />

      <q-tab-panels keep-alive v-model="tab" animated
        :style="file ? 'height: calc(100vh - 50px - 108px)' : 'height: calc(100vh - 50px - 108px)'"
        class="scroll full-width">
        <q-tab-panel name="tab0"  >
          <div id="virtualListRef" ref="virtualListRef" class="full-width"></div>

          <YouTube v-if="clientWidth" :height="is_mobile_size ? 250 : 350" :width="clientWidth"
          :src="file" @ready="onReady" @error="onError" @api-change="onApiChange"
          id="video" ref="video" />

          <q-list bordered>
            <q-item
              clickable
              tag="a"
              target="_blank"
              :href="file"
            >
              <q-item-section
                avatar
              >
                <q-icon :color="is_error ? '' : 'red'" name="fa-brands fa-youtube" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Youtube Link: </q-item-label>
                <q-item-label caption>{{ file }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>

          <q-input class="q-pt-sm" input-class="q-pr-sm" :loading="loading" dense  :disable="loading || loading" v-model="link" clearable
            placeholder="Add youtube link" autogrow>
            <template v-if="link" v-slot:after>
              <q-btn @click="file = link" dense icon="done" outline round color="primary">
                <q-tooltip>Verified</q-tooltip>
              </q-btn>
            </template>
          </q-input>

        </q-tab-panel>
        <q-tab-panel name="tab1">
          <q-input class="q-pb-xl" input-class="q-pr-sm" :loading="loading" dense  :disable="loading || loading" v-model="description" maxlength="2500" counter clearable
            placeholder="Add description" autogrow>
          </q-input>
        </q-tab-panel>
        <q-tab-panel name="tab2">
          <q-option-group
            :options="options"
            type="radio"
            v-model="status"
          />
          <Tags @onBubbleEvent="tags = $event"  :tags="tags" />
          <q-field hide-bottom-space dense borderless class="q-pa-none row col-12 q-mt-md">
            <div class="row">
              <q-item-label class="col-12 q-pa-sm text-dark q-mb-sm" header>Genre Musik</q-item-label>
              <template v-for="(item, i) in songs">
                <q-checkbox class="col-6 text-dark text-capitalize" :val="item.value" :label="item.label" v-model="genre" />
              </template>
            </div>
          </q-field>

        </q-tab-panel>
      </q-tab-panels>

    </q-form>
  </q-no-ssr>

  <q-no-ssr>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="red" text-color="white" />
          <span class="q-ml-sm">Yakin menghapus form ini?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Yakin" @click="onDelete" color="primary" />
        </q-card-actions>
      </q-card>
    </q-dialog>


    <q-header bordered unelevated class="bg-white text-black text-center">
      <q-toolbar class="row">
        <q-btn flat dense round @click="onGotoBack" color="blue" icon="arrow_back_ios" />
        <q-toolbar-title class="col text-left">
          Tambah Youtube
        </q-toolbar-title>
        <q-btn dense style="height:30px;" flat round icon="more_vert" color="dark" />
        <q-btn @click="confirm = true" flat round dense color="red" icon="delete" />
      </q-toolbar>
    </q-header>

    <!-- <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="save" color="blue" />
    </q-page-sticky> -->

    <transition name="fade-global">
      <q-footer class="bg-transparent text-black row flex flex-center">
        <q-list  class="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-xs-12 bg-white">

          <q-banner flat class="bg-grey-2">
            <template v-if="!file" v-slot:avatar>
              <q-icon name="info" color="blue-4" />
            </template>
            <span v-if="!file">Please verified youtube link</span>


            <q-btn v-if="file && !is_error" :disable="loading" :loading="loading" @click="onSubmit" dense label="post" flat color="primary" />

          </q-banner>

          <!-- <q-toolbar v-if="id" class="bg-blue text-white">
            Delete this content?
            <q-space />
            <q-btn @click="onDelete" flat round dense icon="delete" />
          </q-toolbar> -->

          <q-item v-if="false" dense class="q-pt-md">
            <q-item-section>
              <q-item-label>
                <q-toolbar v-if="id" class="bg-red text-white">
                  Delete this content?
                  <q-space />
                  <q-btn @click="onDelete" flat round dense icon="delete" />
                </q-toolbar>
                <q-input v-if="false" :loading="loading" dense outlined :disable="loading || loading" v-model="description" maxlength="2500" counter clearable
                  placeholder="Add description" autogrow input-style="min-height: unset; max-height: 200px;">
                  <template v-if="description" v-slot:after>
                    <q-btn :disable="loading" :loading="loading" @click="onSubmit" dense label="post" flat color="primary" />
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
import { scroll } from 'quasar'
const { getScrollTarget, setVerticalScrollPosition } = scroll

import { mapState, mapWritableState, mapActions } from 'pinia'
import { useYoutubeListStore } from 'src/stores/youtube/create.js'
import { preFetch } from 'quasar/wrappers';

import songs from 'src/models/songs'

export default {
  computed: {
    ...mapState(useYoutubeListStore, {
      id: 'id',
      file: 'file',
      description: 'description',
      status: 'status',
      link: 'link',
      is_error: 'is_error',
      tags: 'tags',
      genre: 'genre',
      loading: 'loading',
      loading_create: 'loading_create',
    }),
    ...mapWritableState(useYoutubeListStore, {
      id: 'id',
      file: 'file',
      description: 'description',
      status: 'status',
      link: 'link',
      is_error: 'is_error',
      tags: 'tags',
      genre: 'genre',
      loading: 'loading',
      loading_create: 'loading_create',
    }),
  },
  preFetch: preFetch(async ({ store, currentRoute }) => {
    const mystore = useYoutubeListStore(store);
    await mystore.form_edit({
      id: currentRoute.params?.id
    })
  }),
  data() {
    return {
      confirm:false,
      tab:'tab0',
      songs,
      options: [
        { label: 'Public', value: '0' },
        { label: 'Private', value: '1', color: 'green' },
        // { label: 'Friends', value: '2', color: 'red' }
      ],
      clientWidth: null,
    }
  },
  watch: {
    route_name(val) {
      if(val == 'youtube_create') {
        this.id = ''
        this.file = ''
        this.description = null
        this.status = '0'
        this.link = null
        this.is_error = true
        this.tags = null
        this.genre = null
      }
    },
    clientWidth(val) {
      console.log(val)
    },
    screen_width() {
      this.$nextTick(() => {
        if(!document.getElementById('virtualListRef')) return
        this.clientWidth = document.getElementById('virtualListRef').clientWidth
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.clientWidth = document.getElementById('virtualListRef').clientWidth
    })
  },
  methods: {
    ...mapActions(useYoutubeListStore, [
      'form_create',
      'form_edit',
      'form_delete',
    ]),
    onError() {
      console.log('onError')
      this.$q.notify({
        message: 'Youtube Error',
        color: 'negative',
        icon: 'highlight_off',
        position: 'top',
      })
      this.is_error = true
    },
    onApiChange() {
      console.log('onApiChange')
      this.is_error = false
    },
    onReady() {
      // this.clientWidth = document.getElementById('virtualListRef').clientWidth
    },
    async onDelete() {
      const response = await this.form_delete({
        id: this.route_param?.id
      })
    },
    async onSubmit() {

      if(!this.route_param?.id) {
        if (this.is_error) return
      }

      const response = await this.form_create({
        id: this.route_param?.id == undefined ? '' : this.route_param?.id
      })

    },
  },
};
</script>
