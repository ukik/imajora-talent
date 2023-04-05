<template>
  <q-no-ssr>
    <q-toolbar class="text-primary">
      <q-btn flat round dense icon="fa-solid fa-chevron-left" />
      <q-toolbar-title>
        Agenda
      </q-toolbar-title>
      <!-- <q-btn flat round dense icon="more_vert" /> -->
    </q-toolbar>

    <q-form @submit="onSubmit" class="row flex justify-center items-start q-py-md">
      <div class="row col-11 q-col-gutter-md q-col-gutter-y-lg text-center justify-center">

        <!-- <q-input :disable="loading || loading_create" :loading="loading_create" class="col-12" hide-bottom-space
          v-model="user.birth_place" ref="birth_place" clearable text-color="grey" bg-color="white" outlined placeholder="Tempat Lahir"
          lazy-rules :rules="[(val) => !!val || '']" error-message="wajib dilengkapi">
          <template v-slot:prepend>
            <q-icon name="account_circle" />
          </template>
        </q-input> -->

        <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space
          @click="$refs.date.show()" class="col-12" v-model="user.start_career" ref="start_career" clearable
          text-color="grey" placeholder="Tanggal Lahir" bg-color="white" outlined lazy-rules :readonly="user.start_career ? true : false"
          :rules="[(val) => !!val || '']" error-message="wajib dilengkapi">
          <template v-slot:prepend>
            <q-icon name="date_range">
              <q-popup-proxy ref="date" cover transition-show="scale" transition-hide="scale">
                <q-date mask="YYYY-MM-DD"  v-model="user.start_career">
                  <div class="row items-center justify-end q-gutter-sm">
                    <q-btn label="close" color="primary" flat v-close-popup />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>


        <q-field hide-bottom-space dense borderless class="row col-12 q-pa-sm q-mt-md">
          <div class="row">
            <q-item-label class="col-12 q-pa-sm text-dark q-mb-sm" header>Genre Musik</q-item-label>
            <template v-for="(item, i) in songs">
              <q-checkbox class="col-6 text-dark text-capitalize" :val="item.value" :label="item.label" v-model="user.genres" />
            </template>
          </div>
        </q-field>


        <q-field hide-bottom-space dense borderless class="row col-12 q-pa-sm q-mt-md">
          <div class="row">
            <q-item-label class="col-12 q-pa-sm text-dark q-mb-sm" header>Skill Musik</q-item-label>
            <template v-for="(item, i) in skills">
              <q-checkbox class="col-6 text-dark text-capitalize" :val="item.value" :label="item.label" v-model="user.skills" />
            </template>
          </div>
        </q-field>


        <q-field hide-bottom-space dense borderless class="row col-12 q-pa-sm q-mt-md">
          <div class="row">
            <q-item-label class="col-12 q-pa-sm text-dark q-mb-sm" header>Vocal</q-item-label>
            <template v-for="(item, i) in vocals">
              <q-checkbox class="col-6 text-dark text-capitalize" :val="item.value" :label="item.label" v-model="user.vocals" />
            </template>
          </div>
        </q-field>

        <q-field hide-bottom-space dense borderless class="row col-12 q-pa-sm q-mt-md">
          <div class="row">
            <q-item-label class="col-12 q-pa-sm text-dark q-mb-sm" header>Suara</q-item-label>
            <template v-for="(item, i) in voices">
              <q-checkbox class="col-6 text-dark text-capitalize" :val="item.value" :label="item.label" v-model="user.voices" />
            </template>
          </div>
        </q-field>


        <q-field hide-bottom-space dense borderless class="row col-12 q-pa-sm q-mt-md">
          <div class="row">
            <q-item-label class="col-12 q-pa-sm text-dark q-mb-sm" header>Grup Vokal</q-item-label>
            <template v-for="(item, i) in groups">
              <q-checkbox class="col-6 text-dark text-capitalize" :val="item.value" :label="item.label" v-model="user.groups" />
            </template>
          </div>
        </q-field>


        <!-- <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space class="col-12"
          maxlength="200" counter input-style="min-height: 100px;" v-model="user.address" ref="address" type="textarea" :rules="[(val) => !!val || '']" error-message="wajib dilengkapi"
          autogrow clearable text-color="grey" bg-color="white" outlined placeholder="Alamat">
          <template v-slot:prepend>
            <q-icon name="place" />
            <q-icon name="supervisor_account" />
          </template>
        </q-input> -->

        <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space class="col-12"
          maxlength="200" counter input-style="min-height: 150px;" v-model="user.collab" ref="bio" type="textarea" autogrow error-message="wajib dilengkapi"
          clearable text-color="grey" bg-color="white" outlined placeholder="Write about your kolaborasi here...">
          <template v-slot:prepend>
            <q-icon name="supervisor_account" />
          </template>
        </q-input>

        <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space class="col-12"
          maxlength="200" counter input-style="min-height: 150px;" v-model="user.featuring" ref="bio" type="textarea" autogrow error-message="wajib dilengkapi"
          clearable text-color="grey" bg-color="white" outlined placeholder="Write about your featuring here...">
          <template v-slot:prepend>
            <q-icon name="supervisor_account" />
          </template>
        </q-input>

        <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space class="col-12"
          maxlength="200" counter input-style="min-height: 150px;" v-model="user.performance" ref="bio" type="textarea" autogrow error-message="wajib dilengkapi"
          clearable text-color="grey" bg-color="white" outlined placeholder="Write about your peformance here...">
          <template v-slot:prepend>
            <q-icon name="supervisor_account" />
          </template>
        </q-input>


        <!-- <div class="col-12">
          <q-btn :disable="loading_create" :loading="loading_create"
            class="button-default full-width full-height text-subtitle2" type="submit" icon-right="check_circle"
            unelevated color="primary" label="Simpan"></q-btn>
        </div> -->
      </div>

    </q-form>
  </q-no-ssr>
</template>


<script>
import { scroll } from 'quasar'
const { getScrollTarget, setVerticalScrollPosition } = scroll

// import Form_Foto from 'src/pages/accounts/Form_Foto.vue'

import { mapState, mapWritableState, mapActions } from 'pinia'
import { useFormStore } from 'src/stores/forms/accounts/career.js'

import groups from 'src/models/groups'
import skills from 'src/models/skills'
import songs from 'src/models/songs'
import vocals from 'src/models/vocals'
import voices from 'src/models/voices'


import { date } from 'quasar'
const timeStamp = Date.now()
const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD')

export default {
  computed: {
    ...mapState(useFormStore, {
      loading: 'loading',
      loading_create: 'loading_create',
      user: 'user',
    }),
    ...mapWritableState(useFormStore, {
      loading: 'loading',
      loading_create: 'loading_create',
      user: 'user',
    }),
  },
  watch: {
    route_name(val) {
      if (val == 'form_accounts_career') {
        this.user = {
          id: '',
          start_career: formattedString,
          collab: '',
          featuring: '',
          performance: '',
          groups: [],
          skills: [],
          genres: [],
          vocals: [],
          voices: [],
        }
      }
    }
  },
  components: {
    // Form_Foto
  },
  data() {
    return {
      groups,
      skills,
      songs,
      vocals,
      voices,
      // date: formattedString,
      // proxyDate: ('2019/03/01'),
    }
  },
  mounted() {
    // this.$nextTick(() => {
    //   const el = document.getElementById("children_account");
    //   const target = getScrollTarget(el)
    //   const offset = el.offsetTop
    //   const duration = 500
    //   setVerticalScrollPosition(target, offset, duration)
    // })
  },

  methods: {
    ...mapActions(useFormStore, [
      'form_create',
    ]),
    // updateProxy() {
    //   this.user.birth_date = this.date
    // },

    // save() {
    //   this.date = this.user.birth_place
    //   // this.user.birth_place = this.proxyDate
    // },
    // async onCheck() {
    //   if (this.password) this.$refs.password.validate();
    //   if (this.password_confirmation) this.$refs.password_confirmation.validate();
    // },
    async onSubmit() {

      this.$refs.birth_place.validate();
      this.$refs.birth_date.validate();
      this.$refs.address.validate();
      this.$refs.bio.validate();
      // this.$refs.phone.validate();
      // this.$refs.password.validate();
      // this.$refs.password_confirmation.validate();

      if (!this.user.birth_place) return;
      if (!this.user.birth_date) return;
      if (!this.user.address) return;
      if (!this.user.bio) return;

      const response = await this.form_create({
        id: this.route_param?.id
      })

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
