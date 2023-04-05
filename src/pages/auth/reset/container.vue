<template>

    <q-form @submit="onSubmit" class="row flex justify-center items-start q-py-md">
      <div class="row col-11 q-col-gutter-y-lg text-center justify-center">

        <!-- <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space class="col-12" ref="old_password" v-model="user.old" clearable type="password" text-color="grey"
          error-message="wajib dilengkapi" bg-color="white" outlined placeholder="Old Password" lazy-rules
          :rules="[val => (!!val) || 'Password is not matched']">
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input> -->

        <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space class="col-12" ref="password" v-model="user.new" clearable type="password" text-color="grey"
          error-message="wajib dilengkapi" bg-color="white" outlined placeholder="New Password" lazy-rules @update:model-value="onCheck"
          :rules="[val => (!!val && val == user.confirm) || 'Password is not matched']">
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>


        <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space class="col-12" ref="password_confirmation" v-model="user.confirm" clearable
          error-message="wajib dilengkapi" type="password" text-color="grey" bg-color="white" outlined @update:model-value="onCheck"
          placeholder="New Password Confirmation" lazy-rules :rules="[val => (!!val && val == user.new) || 'Password is not matched']">
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>



        <div class="col-12 q-mt-xl q-mb-lg">
          <q-btn :disable="loading_create" :loading="loading_create"
            class="button-default full-width full-height text-subtitle2" type="submit" icon-right="check_circle"
            unelevated color="primary" label="Reset Password"></q-btn>
        </div>

      </div>

    </q-form>

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
    onCheck() {
      if(this.user.new == this.user.confirm) {
        this.$refs.password.resetValidation();
        this.$refs.password_confirmation.resetValidation();
      } else {
        this.$refs.password.validate();
        this.$refs.password_confirmation.validate();
      }
    },

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
