<template>
  <q-no-ssr>
    <q-toolbar class="text-primary">
      <q-btn flat round dense icon="fa-solid fa-chevron-left" />
      <q-toolbar-title>
        Social Media
      </q-toolbar-title>
      <!-- <q-btn flat round dense icon="more_vert" /> -->
    </q-toolbar>
    <q-form @submit="onSubmit" class="row flex justify-center items-start q-py-md">
      <div class="row col-11 q-col-gutter-md q-col-gutter-y-lg text-center justify-center">

        <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space class="col-12" ref="facebook" v-model="user.facebook" clearable  text-color="grey"
          error-message="wajib dilengkapi" bg-color="white" outlined placeholder="Facebook">
          <template v-slot:prepend>
            <q-icon name="fa-brands fa-facebook" />
          </template>
        </q-input>

        <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space class="col-12" ref="tiktok" v-model="user.tiktok" clearable  text-color="grey"
          error-message="wajib dilengkapi" bg-color="white" outlined placeholder="Tiktok">
          <template v-slot:prepend>
            <q-icon name="fa-brands fa-tiktok" />
          </template>
        </q-input>

        <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space class="col-12" ref="youtube" v-model="user.youtube" clearable  text-color="grey"
          error-message="wajib dilengkapi" bg-color="white" outlined placeholder="Youtube">
          <template v-slot:prepend>
            <q-icon name="fa-brands fa-youtube" />
          </template>
        </q-input>

        <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space class="col-12" ref="twitter" v-model="user.twitter" clearable  text-color="grey"
          error-message="wajib dilengkapi" bg-color="white" outlined placeholder="Twitter">
          <template v-slot:prepend>
            <q-icon name="fa-brands fa-twitter" />
          </template>
        </q-input>

        <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space class="col-12" ref="instagram" v-model="user.instagram" clearable  text-color="grey"
          error-message="wajib dilengkapi" bg-color="white" outlined placeholder="Instagram">
          <template v-slot:prepend>
            <q-icon name="fa-brands fa-instagram" />
          </template>
        </q-input>

        <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space class="col-12" ref="pinterest" v-model="user.pinterest" clearable  text-color="grey"
          error-message="wajib dilengkapi" bg-color="white" outlined placeholder="Pinterest">
          <template v-slot:prepend>
            <q-icon name="fa-brands fa-pinterest" />
          </template>
        </q-input>

        <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space class="col-12" ref="website" v-model="user.website" clearable  text-color="grey"
          error-message="wajib dilengkapi" bg-color="white" outlined placeholder="Website">
          <template v-slot:prepend>
            <q-icon name="fa-solid fa-globe" />
          </template>
        </q-input>

        <div class="col-12">
          <q-btn :disable="loading_create" :loading="loading_create" class="button-default full-width full-height text-subtitle2" type="submit" icon-right="check_circle"
            unelevated color="primary" label="Simpan"></q-btn>
        </div>

        <!-- <div class="col-12 col-md-6 text-center">
          <q-btn :to="{
            name: 'form_accounts_password',
            params: {
              id: route_param?.id
            }
          }" dense flat no-caps text-color="blue">
            Ganti Password
          </q-btn>
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
import { useFormStore } from 'src/stores/forms/accounts/social.js'

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
      if(val == 'form_accounts_social') {
        this.user = {
          id: '',
          facebook: '',
          tiktok: '',
          youtube: '',
          twitter: '',
          instagram: '',
          pinterest: '',
          website: '',
        }
      }
    }
  },
  components: {
    // Form_Foto
  },
  data() {
    return {
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
    // async onCheck() {
    //   if (this.password) this.$refs.password.validate();
    //   if (this.password_confirmation) this.$refs.password_confirmation.validate();
    // },
    async onSubmit() {
      // this.allValidate(this.$refs)

      // this.$refs.facebook.validate();
      // this.$refs.tiktok.validate();
      // this.$refs.youtube.validate();
      // this.$refs.twitter.validate();
      // this.$refs.instagram.validate();
      // this.$refs.pinterest.validate();
      // this.$refs.website.validate();

      // if (!this.user.facebook) return;
      // if (!this.user.tiktok) return;
      // if (!this.user.youtube) return;
      // if (!this.user.twitter) return;
      // if (!this.user.instagram) return;
      // if (!this.user.pinterest) return;
      // if (!this.user.website) return;

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
