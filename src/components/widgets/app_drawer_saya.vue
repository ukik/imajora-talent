<template>
<fragment>
  <q-item-label header>Profile</q-item-label>


  <div v-if='logged'>

    <q-item :to="{
      name: 'profile',
      params: {
        id: get_authentication_user.id
      }
    }" clickable v-ripple>
      <q-item-section avatar>
        <q-avatar >
          <img loading="lazy" :src="img_checker(get_authentication_user.foto)" @error="handleError" v-lazy-src="img_checker(get_authentication_user.foto)">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label line="1" class="text-subtitle1"> {{ get_authentication_user.nama | capitalize }} </q-item-label>
        <q-item-label caption> {{ get_authentication_user.email }} </q-item-label>
      </q-item-section>
    </q-item>

    <q-item v-if="!get_emailVerified" dense>
      <q-item-section top avatar>
      </q-item-section>

      <q-item-section>
        <q-btn @click="onChangeStep(2)" :to="{
          name: 'authentication_wajib',
          query: {
            id: 2
          }
        }" dense rounded align="between" unelevated no-caps class="q-pl-sm q-pr-md text-caption" color="orange" text-color="white" icon="mail">
          Email Unverified
          <q-tooltip anchor="center right" self="center left" >Email belum diverifikasi</q-tooltip>
        </q-btn>
      </q-item-section>

      <q-item-section side top>
        <q-icon name="" color="yellow" />
      </q-item-section>
    </q-item>
    <q-item  v-if="!get_phoneVerified" dense>
      <q-item-section top avatar>
      </q-item-section>

      <q-item-section>
        <q-btn @click="onChangeStep(3)" :to="{
          name: 'authentication_wajib',
          query: {
            id: 3
          }
        }" dense rounded align="between" unelevated no-caps class="q-pl-sm q-pr-md text-caption" color="cyan" text-color="white" icon="sms">
          Tambah OTP
          <q-tooltip anchor="center right" self="center left" >Disarankan aktifasi OTP</q-tooltip>
        </q-btn>
      </q-item-section>

      <q-item-section side top>
        <q-icon name="" color="yellow" />
      </q-item-section>
    </q-item>
    <q-item v-if="!lokasi.latitude && !lokasi.longitude" dense>
      <q-item-section top avatar>
      </q-item-section>

      <q-item-section>
        <q-btn @click="onChangeStep(4)" :to="{
          name: 'authentication_wajib',
          query: {
            id: 4
          }
        }" dense rounded align="between" unelevated no-caps class="q-pl-sm q-pr-md text-caption" color="pink-5" text-color="white" icon="gps_fixed">
          Data Lokasi
          <q-tooltip anchor="center right" self="center left" >Lengkapi data ini</q-tooltip>
        </q-btn>
      </q-item-section>

      <q-item-section side top>
        <q-icon name="" color="yellow" />
      </q-item-section>
    </q-item>
  </div>

  <q-item clickable v-ripple :to="{
    name: 'pengaturan_profile'
  }">
    <q-item-section avatar top>
      <q-avatar icon="person" color="grey-1" text-color="grey" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Biodata</q-item-label>
      <q-item-label caption>Isi informasi diri saya</q-item-label>
    </q-item-section>
  </q-item>

  <q-item clickable v-ripple :to="get_qrcode">
    <q-item-section avatar top>
      <q-avatar icon="person" color="grey-1" text-color="grey" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">QR Kode</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item>

</fragment>

</template>

<script type="text/javascript">

import { mapGetters } from "vuex";
;

export default {
  computed: {
    // ...mapFields({
    //   lokasi: "authentication.lokasi",
    //   user: "authentication.user",
    //   step: 'authentication.step',
    // }),
    ...mapGetters({
      logged: 'authentication/get_user_logged',
    }),
    get_qrcode() {
      let to;
      if(this.get_user_logged) {
        to = {
          name: 'profile_qrcode',
          params: {
            id: this.get_authentication_user.id
          }
        }

        return to
      }
      to = {
        name: 'login'
      }
      return to
    }
  },
  methods: {
    onChangeStep(step) {
      this.dispatchVuex('authentication/step', step)
    }
  }
};

</script>
