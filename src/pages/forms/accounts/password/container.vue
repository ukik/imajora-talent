<template>
  <q-no-ssr>
    <q-toolbar class="text-primary">
      <q-btn flat round dense icon="fa-solid fa-chevron-left" />
      <q-toolbar-title>
        Ganti Password
      </q-toolbar-title>
      <!-- <q-btn flat round dense icon="more_vert" /> -->
    </q-toolbar>
    <q-form @submit="onSubmit" class="row flex justify-center items-start q-py-md">
      <div class="row col-11 q-col-gutter-md q-col-gutter-y-lg text-center justify-center">

        <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space class="col-12" ref="old_password" v-model="user.old" clearable type="password" text-color="grey"
          error-message="wajib dilengkapi" bg-color="white" outlined placeholder="Old Password" lazy-rules
          :rules="[val => (!!val) || 'Password is not matched']">
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>

        <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space class="col-12" ref="password" v-model="user.new" clearable type="password" text-color="grey"
          error-message="wajib dilengkapi" bg-color="white" outlined placeholder="New Password" lazy-rules @update:model-value="onCheck"
          :rules="[val => (!!val && val == user.confirm) || 'Password is not matched']">
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>

        <!-- $refs.password.validate();$refs.password_confirmation.validate(); -->
        <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space class="col-12" ref="password_confirmation" v-model="user.confirm" clearable
          error-message="wajib dilengkapi" type="password" text-color="grey" bg-color="white" outlined @update:model-value="onCheck"
          placeholder="New Password Confirmation" lazy-rules :rules="[val => (!!val && val == user.new) || 'Password is not matched']">
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>


        <div class="col-12">
          <q-btn :disable="loading_create" :loading="loading_create" class="button-default full-width full-height text-subtitle2" type="submit" icon-right="check_circle"
            unelevated color="primary" label="Simpan"></q-btn>
        </div>

        <div class="col-12 col-md-6 text-center">
          <q-btn :to="{
            name: 'form_accounts_profile',
            params: {
              id: route_param?.id
            }
          }" dense flat no-caps text-color="blue">
            Kembali ke profile
          </q-btn>
        </div>
      </div>
    </q-form>
  </q-no-ssr>
</template>


<script>
import { scroll } from 'quasar'
const { getScrollTarget, setVerticalScrollPosition } = scroll

import { mapState, mapWritableState, mapActions } from 'pinia'
import { useFormStore } from 'src/stores/forms/accounts/password.js'

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
      if(val == 'form_accounts_') {
        this.user = {
          id: '',
          old: '',
          new: '',
          confirm: '',
        }
      }
    }
  },
  components: {
  },
  data() {
    return {
      options: [
        {
          label: 'Female',
          value: 'female',
          description: 'Search engine',
          icon: 'female'
        },
        {
          label: 'Male',
          value: 'male',
          description: 'Social media',
          icon: 'male'
        },
      ],
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
    async onSubmit() {
      this.$refs.old_password.validate();
      this.$refs.password.validate();
      this.$refs.password_confirmation.validate();

      if (!this.user.new) return;
      if (!this.user.confirm) return;
      if (!this.user.old) return;

      const response = await this.form_create({
        id: this.route_param?.id
      })
    },
  },
};
</script>
