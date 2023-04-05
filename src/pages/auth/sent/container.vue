<template>
  <q-no-ssr>

    <q-form @submit="onSubmit" class="row flex justify-center items-start q-py-md">
      <div class="row col-11 q-col-gutter-y-lg text-center justify-center">

        <q-input :disable="loading || loading_create" :loading="loading_create" class="col-12" hide-bottom-space
          v-model="user.birth_place" ref="email" clearable text-color="grey" bg-color="white" outlined placeholder="Email"
          lazy-rules :rules="[(val) => !!val || '']" error-message="wajib dilengkapi">
          <template v-slot:prepend>
            <q-icon name="email" />
          </template>
        </q-input>

        <div class="col-12">
          <q-btn :disable="loading_create" :loading="loading_create"
            class="button-default full-width full-height text-subtitle2" type="submit" icon-right="check_circle"
            unelevated color="primary" label="Login"></q-btn>
        </div>

        <div class="col-12 text-center">
          <q-btn :to="{
            name: 'auth_login',
            params: {
              id: route_param?.id
            }
          }" dense flat no-caps text-color="blue">
            Ganti Password
          </q-btn>
        </div>

      </div>

      <q-list bordered class="col-11 text-center q-mt-lg q-py-md">
            Don't have an account?
            <q-btn :to="{
              name: 'auth_login',
              params: {
                id: route_param?.id
              }
            }" dense flat no-caps text-color="blue">
              Sign up
            </q-btn>
        </q-list>

    </q-form>
  </q-no-ssr>
</template>


<script>
import { scroll } from 'quasar'
const { getScrollTarget, setVerticalScrollPosition } = scroll

// import Form_Foto from 'src/pages/accounts/Form_Foto.vue'

import { mapState, mapWritableState, mapActions } from 'pinia'
import { useFormStore } from 'src/stores/forms/accounts/biodata.js'

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
      if (val == 'form_accounts_biodata') {
        this.user = {
          id: '',
          birth_place: formattedString,
          birth_date: formattedString,
          address: '',
          bio: '',
        }
      }
    }
  },
  components: {
    // Form_Foto
  },
  data() {
    return {
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
