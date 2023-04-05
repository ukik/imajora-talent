<template>
  <q-no-ssr>
    <q-form @submit="onSubmit" class="bg-white col-xl-5 col-lg-5 col-md-6 col-sm-12 col-xs-12">
      <div class="row">
        <q-tabs inline-label :breakpoint="0"
          align="left" no-caps
          v-model="tab"
          class="text-primary"
        >
          <q-tab name="tab0" icon="description" label="Description" />
          <q-tab name="tab1" icon="upload_file" label="Banner"></q-tab>
          <q-tab name="tab2" icon="settings" label="Setting" />
        </q-tabs>
      </div>
      <q-separator color="primary" />

      <q-tab-panels keep-alive v-model="tab" animated
        :style="cover.length > 0 ? 'height: calc(100vh - 50px - 108px)' : 'height: calc(100vh - 50px - 108px)'"
        class="scroll">
        <q-tab-panel name="tab0" class="q-col-gutter-y-lg">
          <!-- {{ get_time_start >= get_time_end }} -->

          <q-input class="col-12" input-class="" :loading="loading" dense  :disable="loading || loading" hide-bottom-space v-model="title" clearable
            placeholder="Judul" autogrow lazy-rules ref="title"
          :rules="[(val) => !!val || '']" error-message="wajib dilengkapi">
          </q-input>

          <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space
          @click="$refs?.date_start_picker.show()" class="col-12" v-model="date_start" ref="date_start" clearable
          text-color="grey" placeholder="Tanggal Mulai" bg-color="white"  lazy-rules :error="get_date_start > get_date_end"
          :rules="[(val) => !!val || '']" error-message="wajib dilengkapi & lebih besar dari Tanggal Selesai">
            <template v-slot:prepend>
              <q-icon name="date_range">
                <q-popup-proxy ref="date_start_picker" cover transition-show="scale" transition-hide="scale">
                  <q-date mask="YYYY-MM-DD"  v-model="date_start">
                    <div class="row items-center justify-end q-gutter-sm">
                      <q-btn label="close" color="primary" flat v-close-popup />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space
          @click="$refs?.date_end_picker.show()" class="col-12" v-model="date_end" ref="date_end" clearable
          text-color="grey" placeholder="Tanggal Selesai" bg-color="white"  lazy-rules :error="get_date_start > get_date_end"
          :rules="[(val) => !!val || '']" error-message="wajib dilengkapi & lebih kecil dari Tanggal Mulai">
            <template v-slot:prepend>
              <q-icon name="date_range">
                <q-popup-proxy ref="date_end_picker" cover transition-show="scale" transition-hide="scale">
                  <q-date mask="YYYY-MM-DD"  v-model="date_end">
                    <div class="row items-center justify-end q-gutter-sm">
                      <q-btn label="close" color="primary" flat v-close-popup />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>


          <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space
          @click="$refs.time_start_picker.show()" class="col-12" v-model="time_start" ref="time_start" clearable
          text-color="grey" placeholder="Jam Mulai" bg-color="white"  lazy-rules :error="get_time_start >= get_time_end"
          :rules="[(val) => !!val || '']" error-message="wajib dilengkapi & lebih kecil dari Jam Selesai">
            <template v-slot:prepend>
              <q-icon name="access_time">
                <q-popup-proxy ref="time_start_picker" cover transition-show="scale" transition-hide="scale">
                  <q-time mask="HH:mm" format24h v-model="time_start">
                    <div class="row items-center justify-end q-gutter-sm">
                      <q-btn label="close" color="primary" flat v-close-popup />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space
          @click="$refs.time_end_picker.show()" class="col-12" v-model="time_end" ref="time_end" clearable
          text-color="grey" placeholder="Jam Selesai" bg-color="white"  lazy-rules :error="get_time_start >= get_time_end"
          :rules="[(val) => !!val || '']" error-message="wajib dilengkapi & lebih besar dari Jam Mulai">
            <template v-slot:prepend>
              <q-icon name="access_time">
                <q-popup-proxy ref="time_end_picker" cover transition-show="scale" transition-hide="scale">
                  <q-time mask="HH:mm" format24h v-model="time_end">
                    <div class="row items-center justify-end q-gutter-sm">
                      <q-btn label="close" color="primary" flat v-close-popup />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-input class="col-12" input-class="q-pr-sm" :loading="loading" dense  :disable="loading || loading" v-model="description" maxlength="2500" counter clearable
            placeholder="Add description" autogrow>
          </q-input>
        </q-tab-panel>

        <q-tab-panel name="tab1">
          <div class="full-width row flex justify-center">
            <Form_Image ref="myform" />
          </div>
        </q-tab-panel>
        <q-tab-panel name="tab2">
          <q-option-group
            :options="options"
            type="radio"
            v-model="status"
          />
          <Tags @onBubbleEvent="tags = $event"  :tags="tags" />

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
          Tambah Agenda
        </q-toolbar-title>
        <q-btn dense style="height:30px;" flat round icon="more_vert" color="dark" />
        <q-btn @click="confirm = true" flat round dense color="red" icon="delete" />
      </q-toolbar>
    </q-header>

    <transition name="fade-global">
      <q-footer class="bg-transparent text-black row flex flex-center">
        <q-list  class="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-xs-12 bg-white">

          <q-banner flat class="bg-grey-2">
            <template v-slot:avatar>
              <q-icon name="info" color="blue-4" />
            </template>
            <div class="row flex items-center">
              <span>Upload up to 5 images</span>
              <q-space />
              <!-- <q-btn :disable="loading" :loading="loading" @click="onSubmit" dense label="post" flat color="primary" /> -->
              <q-btn @click="onSubmit" :disable="loading || loading_create" :loading="loading || loading_create" dense label="post" unelevated class="q-px-sm"
              icon="done" color="primary" />
            </div>
          </q-banner>

        </q-list>
      </q-footer>
    </transition>
  </q-no-ssr>


</template>


<script>
import { scroll } from 'quasar'

import Form_Image from './components/form.vue'

import { mapState, mapWritableState, mapActions } from 'pinia'
import { useAgendaListStore } from 'src/stores/agenda/create.js'
import { preFetch } from 'quasar/wrappers';

import { date } from 'quasar'
const timeStamp = Date.now()
const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD')

export default {
  computed: {
    ...mapState(useAgendaListStore, {
      description: 'description',
      title: 'title',
      date_start: 'date_start',
      date_end: 'date_end',
      time_start: 'time_start',
      time_end: 'time_end',
      cover: 'cover',
      id: 'id',
      file_cover: 'file_cover',
      tags: 'tags',
      // genre: 'genre',
      status: 'status',
      loading: 'loading',
      loading_create: 'loading_create',
    }),
    ...mapWritableState(useAgendaListStore, {
      description: 'description',
      title: 'title',
      date_start: 'date_start',
      date_end: 'date_end',
      time_start: 'time_start',
      time_end: 'time_end',
      cover: 'cover',
      id: 'id',
      file_cover: 'file_cover',
      tags: 'tags',
      // genre: 'genre',
      status: 'status',
      loading: 'loading',
      loading_create: 'loading_create',
    }),
    get_date_start() {
      if(!this.date_start) return
      // const n = (this.date_start?.split("-"))
      // const newDate = date.buildDate({ years: n[0], months: n[1], days: n[2] })
      const newDate = new Date(`${this.date_start} 00:00:00`);
      return newDate
    },
    get_date_end() {
      if(!this.date_end) return
      // const n = (this.date_end?.split("-"))
      // const newDate = date.buildDate({ years: n[0], months: n[1], days: n[2] })
      const newDate = new Date(`${this.date_end} 00:00:00`);
      return newDate
    },
    get_time_start() {
      if(!this.time_start) return
      const target = new Date(`${formattedString} ${this.time_start}`);
      return target;
    },
    get_time_end() {
      if(!this.time_end) return
      const target = new Date(`${formattedString} ${this.time_end}`);
      return target;
    },
  },
  preFetch: preFetch(async ({ store, currentRoute }) => {
    const mystore = useAgendaListStore(store);
    await mystore.form_edit({
      id: currentRoute.params?.id
    })
  }),
  watch: {
    route_name(val) {
      if(val == 'agenda_create') {
        this.description = ''
        this.title = ''
        this.date_start = ''
        this.date_end = ''
        this.time_start = ''
        this.time_end = ''

        this.cover = []
        this.id = ''
        this.file_cover = []
        this.tags = null
        // this.genre = null
        this.status = '0'
        this.$refs.myform.onClearInput()
      }
    },
    // date_start() {
    //   this.onCheckDate()
    // },
    // date_end() {
    //   this.onCheckDate()
    // },
  },
  data() {
    return {
      confirm:false,
      tab:'tab0',

      options: [
        { label: 'Public', value: '0' },
        { label: 'Private', value: '1', color: 'green' },
        // { label: 'Friends', value: '2', color: 'red' }
      ]
    }
  },
  components: {
    Form_Image
  },
  methods: {
    ...mapActions(useAgendaListStore, [
      'form_create',
      'form_edit',
      'form_delete',
    ]),
    // onCheckDate() {
    //   console.log(this.get_date_start > this.get_date_end)
    //   if(this.get_date_start > this.get_date_end) {
    //     this.$refs.date_start.resetValidation();
    //   } else if(this.get_date_start < this.get_date_end) {
    //     this.$refs.date_end.resetValidation();
    //   } else if(this.get_date_start > this.get_date_end && this.get_date_start < this.get_date_end) {
    //     this.$refs.date_start.resetValidation();
    //     this.$refs.date_end.resetValidation();
    //   }
    // },
    async onDelete() {
      const response = await this.form_delete({
        id: this.route_param?.id
      })
    },
    async onSubmit() {
      this.allValidate(this.$refs)

      if (!this.title) return;
      if (!this.date_start) return;
      if (!this.date_end) return;
      if (!this.time_start) return;
      if (!this.time_end) return;

      if(this.get_time_start > this.get_time_end) return
      if(this.get_date_start > this.get_date_end) return

      const response = await this.form_create({
        id: this.route_param?.id
      })

    },
  },
};
</script>
