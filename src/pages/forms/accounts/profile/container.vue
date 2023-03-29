<template>
  <q-no-ssr>
    <q-toolbar class="text-primary">
      <q-btn flat round dense icon="fa-solid fa-chevron-left" />
      <q-toolbar-title>
        Profile
      </q-toolbar-title>
      <!-- <q-btn flat round dense icon="more_vert" /> -->
    </q-toolbar>
    <q-form @submit="onSubmit" class="row flex justify-center items-start q-py-md">
      <div class="row col-11 q-col-gutter-md q-col-gutter-y-lg text-center justify-center">

        <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space class="col-12" v-model="user.username" ref="username" unmasked-value clearable text-color="grey"
          bg-color="white" outlined placeholder="Username" lazy-rules :rules="[(val) => !!val || '']"
          error-message="wajib dilengkapi">
          <template v-slot:prepend>
            <q-icon name="admin_panel_settings" />
          </template>
        </q-input>

        <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space class="col-12" v-model="user.name" ref="name" unmasked-value clearable text-color="grey"
          bg-color="white" outlined placeholder="Nama Lengkap" lazy-rules :rules="[(val) => !!val || '']"
          error-message="wajib dilengkapi">
          <template v-slot:prepend>
            <q-icon name="account_circle" />
          </template>
        </q-input>

        <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space class="col-12" v-model="user.email" ref="email" type="email" error-message="wajib dilengkapi"
          unmasked-value clearable text-color="grey" bg-color="white" outlined placeholder="Email" lazy-rules
          :rules="[(val, rules) => rules.email(val) || 'Please enter a valid email address']">
          <template v-slot:prepend>
            <q-icon name="email" />
          </template>
        </q-input>

        <q-input :disable="loading || loading_create" :loading="loading_create" hide-bottom-space class="col-12" ref="phone" v-model="user.phone" clearable mask="###############" unmasked-value
          text-color="grey" error-message="wajib dilengkapi" bg-color="white" outlined placeholder="phone" lazy-rules
          :rules="[val => !!val || 'Password is not matched']">
          <template v-slot:prepend>
            <q-icon name="phone" />
          </template>
        </q-input>

        <q-select :disable="loading || loading_create" :loading="loading_create" hide-bottom-space emit-value map-options options-selected-class="text-deep-orange" class="col-12" ref="gender"
          v-model="user.gender" clearable :options="options" text-color="grey"
          error-message="wajib dilengkapi" bg-color="white" outlined placeholder="Gender" lazy-rules
          :rules="[val => !!val || 'wajib dilengkapi']">
          <template v-slot:prepend>
            <q-icon name="face" />
          </template>
          <template v-slot:append>
            <q-icon :name="user.gender" />
          </template>

          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section avatar>
                <q-icon :name="scope.opt.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ scope.opt.label }}</q-item-label>
                <q-item-label caption>{{ scope.opt.description }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>

        <div class="col-12">
          <q-btn :disable="loading_create" :loading="loading_create" class="button-default full-width full-height text-subtitle2" type="submit" icon-right="check_circle"
            unelevated color="primary" label="Simpan"></q-btn>
        </div>

        <div class="col-12 col-md-6 text-center">
          <q-btn :to="{
            name: 'form_accounts_password',
            params: {
              id: route_param?.id
            }
          }" dense flat no-caps text-color="blue">
            Ganti Password
          </q-btn>
        </div>
      </div>
    </q-form>
  </q-no-ssr>
</template>


<script>
import { scroll } from 'quasar'
const { getScrollTarget, setVerticalScrollPosition } = scroll

// import Form_Foto from 'src/pages/accounts/Form_Foto.vue'

import { mapState, mapWritableState, mapActions } from 'pinia'
import { useFormStore } from 'src/stores/forms/accounts/profile.js'

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
      if(val == 'form_accounts_profile') {
        this.user = {
          id: '',
          username: '',
          name: '',
          email: '',
          phone: '',
          gender: '',
        }
      }
    }
  },
  components: {
    // Form_Foto
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
    // async onCheck() {
    //   if (this.password) this.$refs.password.validate();
    //   if (this.password_confirmation) this.$refs.password_confirmation.validate();
    // },
    async onSubmit() {
      // this.allValidate(this.$refs)

      this.$refs.username.validate();
      this.$refs.name.validate();
      this.$refs.email.validate();
      this.$refs.gender.validate();
      this.$refs.phone.validate();
      // this.$refs.password.validate();
      // this.$refs.password_confirmation.validate();

      if (!this.user.username) return;
      if (!this.user.name) return;
      if (!this.user.email) return;
      if (!this.user.gender) return;
      if (!this.user.phone) return;

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
