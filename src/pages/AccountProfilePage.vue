<template>
  <q-no-ssr>
    <q-form @submit="onSubmit" class="row flex flex-center q-py-xl">
      <div class="row col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 q-col-gutter-md q-col-gutter-y-lg text-center justify-center">
        <div class="col-12 text-h4 q-mb-md text-bold">
          My Profile
        </div>


        <q-input hide-bottom-space class="col-12" v-model="name" ref="name" unmasked-value clearable text-color="grey"
          bg-color="white" outlined label="Username" lazy-rules :rules="[(val) => !!val || '']"
          error-message="wajib dilengkapi">
          <template v-slot:prepend>
            <q-icon name="admin_panel_settings" />
          </template>
        </q-input>

        <q-input hide-bottom-space class="col-12" v-model="name" ref="name" unmasked-value clearable text-color="grey"
          bg-color="white" outlined label="Nama Lengkap" lazy-rules :rules="[(val) => !!val || '']"
          error-message="wajib dilengkapi">
          <template v-slot:prepend>
            <q-icon name="account_circle" />
          </template>
        </q-input>

        <q-input hide-bottom-space class="col-12" v-model="email" ref="email" type="email" error-message="wajib dilengkapi"
          unmasked-value clearable text-color="grey" bg-color="white" outlined label="Email" lazy-rules
          :rules="[(val, rules) => rules.email(val) || 'Please enter a valid email address']">
          <template v-slot:prepend>
            <q-icon name="email" />
          </template>
        </q-input>

        <q-input hide-bottom-space class="col-12" ref="phone" v-model="phone" clearable mask="(+62) ##### ##########" unmasked-value
          text-color="grey" error-message="wajib dilengkapi" bg-color="white" outlined label="phone" lazy-rules
          :rules="[val => !!val || 'Password is not matched']">
          <template v-slot:prepend>
            <q-icon name="phone" />
          </template>
        </q-input>

        <q-select hide-bottom-space emit-value map-options options-selected-class="text-deep-orange" class="col-12"
          v-model="gender" clearable :options="options" text-color="grey"
          error-message="wajib dilengkapi" bg-color="white" outlined label="Gender" lazy-rules
          :rules="[val => !!val || 'wajib dilengkapi']">
          <template v-slot:prepend>
            <q-icon name="face" />
          </template>
          <template v-slot:append>
            <q-icon :name="gender" />
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
          <q-btn class="button-default full-width full-height text-subtitle2" type="submit" icon-right="check_circle"
            unelevated color="primary" label="Simpan"></q-btn>
        </div>

        <div class="col-12 col-md-6 text-center">
          <q-btn :to="{ name: 'ProfilePasswordPage' }" dense flat no-caps text-color="blue">
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


import Form_Foto from './accounts/Form_Foto.vue'
export default {
  // computed: {
  //   ...mapFields({
  //     country_selected: "auth.register.country_selected",
  //     phone: "auth.register.phone",
  //     password: "auth.register.password",
  //     password_confirmation: "auth.register.password_confirmation",
  //   }),
  // },
  components: {
    Form_Foto
  },
  data() {
    return {
      uuid: null,
      name: null,
      email: null,
      phone: null,
      gender: null,
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
    this.$nextTick(() => {
      const el = document.getElementById("children_account");
      const target = getScrollTarget(el)
      const offset = el.offsetTop
      const duration = 500
      setVerticalScrollPosition(target, offset, duration)
    })
  },

  methods: {
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
    async onCheck() {
      if (this.password) this.$refs.password.validate();
      if (this.password_confirmation) this.$refs.password_confirmation.validate();
    },
    async onSubmit() {
      this.allValidate(this.$refs)

      // this.$refs.name.validate();
      // this.$refs.gender.validate();
      // this.$refs.email.validate();
      // this.$refs.password.validate();
      // this.$refs.password_confirmation.validate();

      if (!this.name) return;
      if (!this.email) return;
      if (!this.gender) return;
      if (!this.phone) return;
      if (!this.password) return;

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
