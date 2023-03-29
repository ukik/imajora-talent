<template>
  <q-no-ssr>
    <q-form @submit="onSubmit" class="bg-white col-xl-5 col-lg-5 col-md-6 col-sm-12 col-xs-12">
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
        :style="media ? 'height: calc(100vh - 50px - 108px)' : 'height: calc(100vh - 50px - 108px)'"
        class="scroll">
        <q-tab-panel name="tab0">
          <div class="full-width row flex justify-center">
            <MyForm />
          </div>
        </q-tab-panel>
        <q-tab-panel name="tab1">
          <q-input class="q-pb-xl" input-class="q-pr-sm" :loading="loading" dense  :disable="loading || loading" v-model="description" maxlength="2500" counter clearable
            placeholder="Add description" autogrow>
          </q-input>
        </q-tab-panel>
        <q-tab-panel name="tab2">
          <q-option-group class=""
            :options="options"
            type="radio"
            v-model="status"
          />
          <Tags @onBubbleEvent="tags = $event" :tags="tags" />
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
          <span class="q-ml-sm">Yakin menghapus file ini?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Yakin" @click="onConfirm" color="primary" />
        </q-card-actions>
      </q-card>
    </q-dialog>


    <q-header bordered unelevated class="bg-white text-black text-center">
      <q-toolbar class="row">
        <q-btn flat dense round @click="onGotoBack" color="blue" icon="arrow_back_ios" />
        <q-toolbar-title class="col text-left">
          Tambah Video
        </q-toolbar-title>
        <q-btn dense style="height:30px;" flat round icon="more_vert" color="dark" />
        <q-btn @click="onDelete" flat round dense color="red" icon="delete" />
      </q-toolbar>
    </q-header>

    <transition name="fade-global">
      <q-footer class="bg-transparent text-black row flex flex-center">
        <q-list  class="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-xs-12 bg-white">

          <q-banner flat class="bg-grey-2">
            <template v-if="!media" v-slot:avatar>
              <q-icon name="info" color="blue-4" />
            </template>
            <span v-if="!media">Please complete this form by upload 1 video</span>

            <q-btn v-if="media" :disable="loading" :loading="loading" @click="onSubmit" dense label="post" flat color="primary" />

          </q-banner>

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

import MyForm from './components/form.vue'

import { mapState, mapWritableState, mapActions } from 'pinia'
import { useAudioListStore } from 'src/stores/audio/create.js'
import { preFetch } from 'quasar/wrappers';

import songs from 'src/models/songs'

export default {
  computed: {
    ...mapState(useAudioListStore, {
      description: 'description',
      media: 'media',
      cover: 'cover',
      id: 'id',
      file_media: 'file_media',
      file_cover: 'file_cover',
      tags: 'tags',
      genre: 'genre',
      status: 'status',
      loading: 'loading',
      loading_create: 'loading_create',
    }),
    ...mapWritableState(useAudioListStore, {
      description: 'description',
      media: 'media',
      cover: 'cover',
      id: 'id',
      file_media: 'file_media',
      file_cover: 'file_cover',
      tags: 'tags',
      genre: 'genre',
      status: 'status',
      loading: 'loading',
      loading_create: 'loading_create',
    }),
  },
  preFetch: preFetch(async ({ store, currentRoute }) => {
    const mystore = useAudioListStore(store);
    await mystore.form_edit({
      id: currentRoute.params?.id
    })
  }),
  watch: {
    route_name(val) {
      if(val == 'audio_create') {
        this.description = ''
        this.media = null
        this.cover = null
        this.id = ''
        this.file_cover = null
        this.file_media = null
        this.tags = null
        this.genre = null
        this.status = '0'
        this.$refs.myform.onClearInput()
      }
    }
  },
  data() {
    return {
      confirm:false,
      tab:'tab0',
      songs,
      options: [
        { label: 'Public', value: '0' },
        { label: 'Private', value: '1', color: 'green' },
        // { label: 'Friends', value: '2', color: 'red' }
      ]
    }
  },
  components: {
    MyForm
  },
  methods: {
    ...mapActions(useAudioListStore, [
      'form_create',
      'form_edit',
      'form_delete',
    ]),
    async onDelete() {
      const response = await this.form_delete({
        id: this.route_param?.id
      })

      // this.cover = null;
      // this.$refs.cover.value = null;
      // this.media = null;
      // this.$refs.media.value = null;
    },
    async onSubmit() {

      // console.log(this.description)
      // if (!this.description) return;

      if(!this.route_param?.id) {
        if (!this.file_media) return;
        // if (!this.file_cover) return;
      }

      const response = await this.form_create({
        id: this.route_param?.id
      })

      // if(response?.id) {
      //   this.$router.replace({
      //     name:'video_create',
      //     params: {
      //       id: response.id
      //     }
      //   })
      // }

    },
  },
};
</script>
