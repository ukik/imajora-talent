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
      <!-- <div>Please complete this content to able to show public</div> -->

      <!-- <q-toolbar v-if="id" class="bg-red text-white">
        Delete this content?
        <q-space />
        <q-btn @click="onDelete" flat round dense icon="delete" />
      </q-toolbar> -->

      <!-- <q-banner class="bg-grey-2 q-mx-md q-mt-md">
        <template v-slot:avatar>
          <q-icon name="info" color="blue-4" />
        </template>
        Please complete this form by upload 1 video
      </q-banner> -->

      <q-tab-panels keep-alive v-model="tab" animated
        :style="media ? 'height: calc(100vh - 50px - 108px)' : 'height: calc(100vh - 50px - 108px)'"
        class="scroll">
        <q-tab-panel name="tab0">
          <div class="full-width row flex justify-center">
            <Form_Video />
          </div>
        </q-tab-panel>
        <q-tab-panel name="tab1">
          <q-input class="q-pb-xl" input-class="q-pr-sm" :loading="loading" dense  :disable="loading || loading" v-model="description" maxlength="2500" counter clearable
            placeholder="Add description" autogrow>
            <!-- <template v-if="description" v-slot:after>
              <q-btn :disable="loading" :loading="loading" @click="onSubmit" dense label="post" flat color="primary" />
            </template> -->
          </q-input>
          <!-- <q-item-label class="q-pa-md">{{ description }}</q-item-label> -->
        </q-tab-panel>
        <q-tab-panel name="tab2">
          <q-option-group
            :options="options"
            type="radio"
            v-model="status"
          />
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

    <!-- <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="save" color="blue" />
    </q-page-sticky> -->

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

import Form_Video from './components/form.vue'

import { mapState, mapWritableState, mapActions } from 'pinia'
import { useVideoListStore } from 'src/stores/video/create.js'
import { preFetch } from 'quasar/wrappers';

export default {
  computed: {
    ...mapState(useVideoListStore, {
      description: 'description',
      media: 'media',
      cover: 'cover',
      id: 'id',

      file_media: 'file_media',
      file_cover: 'file_cover',

      status: 'status',

      loading: 'loading',
      loading_create: 'loading_create',
    }),
    ...mapWritableState(useVideoListStore, {
      description: 'description',

      file_media: 'file_media',
      file_cover: 'file_cover',

      media: 'media',
      cover: 'cover',
      status: 'status',
    }),
  },
  preFetch: preFetch(async ({ store, currentRoute }) => {
    const mystore = useVideoListStore(store);
    await mystore.form_edit({
      id: currentRoute.params?.id
    })
  }),
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
    Form_Video
  },
  methods: {
    ...mapActions(useVideoListStore, [
      'form_create',
      'form_edit',
      'form_delete',
    ]),
    allValidate(value = this.$refs) {
      let keys = []
      setTimeout(() => {
        for (let [key, value] of Object.entries(this.$refs)) {
          try {
            console.log('auto validate')
            value.validate();
          } catch (e) { }
          // console.log(key)
          // keys.push(value)
          // if (/^tenure/.test(key)) {
          //     keys.push({ key: value })
          // }
        }
      }, 2500)
      // console.log('all refs', this.$refs)
    },
    async onDelete() {
      const response = await this.form_delete({
        id: this.route_param?.id
      })

      this.cover = null;
      this.$refs.cover.value = null;
      this.media = null;
      this.$refs.media.value = null;
    },
    async onSubmit() {
      // this.allValidate(this.$refs)
      console.log(this.description)
      if (!this.description) return;

      if(!this.route_param?.id) {
        if (!this.file_media) return;
        // if (!this.file_cover) return;
      }

      const response = await this.form_create({
        id: this.route_param?.id
      })

      if(response?.id) {
        this.$router.replace({
          name:'video_create',
          params: {
            id: response.id
          }
        })
      }

      // if (!this.email) return;
      // if (!this.gender) return;
      // if (!this.phone) return;
      // if (!this.password) return;

      // const telp = this.phone.indexOf('+62') > -1 ? this.phone : ('+62'+this.phone)
      // const telp =
      //   this.phone.indexOf(this.country_selected) > -1
      //     ? this.phone
      //     : this.country_selected + this.phone;

      // this.$store.dispatch("auth/register", {
      //   country_selected: this.country_selected,
      //   phone: telp,
      //   password: this.password,
      //   password_confirmation: this.password_confirmation,
      // });
    },
  },
};
</script>
