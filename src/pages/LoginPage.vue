<template>

  <q-no-ssr>
    <q-form @submit="onSubmit"  class="row flex flex-center">
      <div class="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-xs-12 q-col-gutter-y-lg text-center justify-center">
        <div class="text-h4 q-mb-md text-bold q-mt-md">
          Sign In
        </div>

        <q-input hide-bottom-space class="col-8" v-model="email" ref="email" type="email" error-message="wajib dilengkapi" unmasked-value
          clearable text-color="grey" bg-color="white" outlined label="Email" lazy-rules
          :rules="[(val, rules) => rules.email(val) || 'Please enter a valid email address']">
          <template v-slot:prepend>
            <q-icon name="email" />
          </template>
        </q-input>

        <q-input hide-bottom-space class="col-12 col-md-6" ref="password" v-model="password" clearable type="password" text-color="grey"
          error-message="wajib dilengkapi" bg-color="white" outlined label="password" lazy-rules
          :rules="[(val) => !!val || '']">
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>

        <div  class="col-12 col-md-6 text-right q-mb-md">
          <q-btn :to="{ name: 'ForgetPage' }" dense flat no-caps text-color="blue">
            Forgot Password?
          </q-btn>
        </div>

        <div class="col-12">
          <q-btn :to="{ name:'profile' }" class="button-default full-width full-height text-subtitle2" type="submit" icon-right="login" unelevated
            color="primary" label="Login"></q-btn>
        </div>

        <div  class="col-12 col-md-6 text-center q-mb-md">
          Don't have an account? <q-btn :to="{ name: 'RegisterPage' }" dense flat no-caps text-color="blue">
            Register Here
          </q-btn>
        </div>
      </div>
    </q-form>
  </q-no-ssr>

</template>


<script>


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
      email: '11@gmail.com',
      password: null,
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
    async onSubmit() {
      this.allValidate(this.$refs)

      // this.$refs.email.validate();
      // this.$refs.password.validate();

      if (!this.email) return;
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
