<template>

  <q-no-ssr>
    <q-form @submit="onSubmit" class="row flex flex-center q-py-xl">
      <div class="row col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 q-col-gutter-md q-col-gutter-y-lg text-center justify-center">
        <div class="col-12 text-h4 q-mb-md text-bold">
          My Password
        </div>

        <q-input class="col-12" ref="password" v-model="password" clearable type="password" text-color="grey"
          error-message="wajib dilengkapi" bg-color="white" outlined label="New Password" lazy-rules
          :rules="[val => (!!val) || 'Password is not matched']">
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>

        <q-input class="col-12" ref="password" v-model="password" clearable type="password" text-color="grey"
          error-message="wajib dilengkapi" bg-color="white" outlined label="Password" lazy-rules
          :rules="[val => (!!val && val == password_confirmation) || 'Password is not matched']">
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>

        <q-input class="col-12" ref="password_confirmation" v-model="password_confirmation" clearable
          error-message="wajib dilengkapi" type="password" text-color="grey" bg-color="white" outlined @update:model-value="$refs.password.validate();$refs.password_confirmation.validate();"
          label="Password Confirmation" lazy-rules :rules="[val => (!!val && val == password) || 'Password is not matched']">
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>

        <div class="col-12">
          <q-btn class="button-default full-width full-height text-subtitle2" type="submit" icon-right="check_circle"
            unelevated color="primary" label="Simpan"></q-btn>
        </div>

        <div class="col-12 col-md-6 text-center">
          <q-btn :to="{ name: 'ProfilePage' }" dense flat no-caps text-color="blue">
            Kembali ke profile
          </q-btn>
        </div>
      </div>
    </q-form>
  </q-no-ssr>

</template>


<script>
import { mapFields } from "vuex-map-fields";

export default {
props: {
  prop_style: {
    default: "height:calc(80vh)",
  },
},
// computed: {
//   ...mapFields({
//     country_selected: "auth.register.country_selected",
//     phone: "auth.register.phone",
//     password: "auth.register.password",
//     password_confirmation: "auth.register.password_confirmation",
//   }),
// },
data() {
  return {
    uuid: null,
    name: null,
    email: null,
    password: null,
    password_confirmation: null,
    gender: null,
    accept: false,
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
    if (!this.gender) return;
    if (!this.email) return;
    if (!this.password) return;
    if (!this.password_confirmation) return;

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
