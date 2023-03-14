<template>
  <q-no-ssr>
    <q-form @submit="onSubmit" class="row flex flex-center q-py-xl">
      <div class="row col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 q-col-gutter-md q-col-gutter-lg text-center justify-center">
        <div class="col-12 text-h4 q-mb-md text-bold">
          My Bank
        </div>

        <q-input class="col-12" hide-bottom-space v-model="name" ref="name" unmasked-value clearable text-color="grey"
          bg-color="white" outlined label="BNI" >
          <template v-slot:prepend>
            <q-icon name="account_balance" />
          </template>
        </q-input>

        <q-input class="col-12" hide-bottom-space v-model="name" ref="name" unmasked-value clearable text-color="grey"
          bg-color="white" outlined label="BCA" >
          <template v-slot:prepend>
            <q-icon name="account_balance" />
          </template>
        </q-input>

        <q-input class="col-12" hide-bottom-space v-model="name" ref="name" unmasked-value clearable text-color="grey"
          bg-color="white" outlined label="MANDIRI" >
          <template v-slot:prepend>
            <q-icon name="account_balance" />
          </template>
        </q-input>

        <q-input class="col-12" hide-bottom-space v-model="name" ref="name" unmasked-value clearable text-color="grey"
          bg-color="white" outlined label="BRI" >
          <template v-slot:prepend>
            <q-icon name="account_balance" />
          </template>
        </q-input>

        <q-input class="col-12" hide-bottom-space v-model="name" ref="name" unmasked-value clearable text-color="grey"
          bg-color="white" outlined label="BSI" >
          <template v-slot:prepend>
            <q-icon name="account_balance" />
          </template>
        </q-input>


        <div class="col-12">
          <q-btn class="button-default full-width full-height text-subtitle2" type="submit" icon-right="check_circle"
            unelevated color="primary" label="Simpan"></q-btn>
        </div>

      </div>
    </q-form>
  </q-no-ssr>
</template>


<script>
import { scroll } from 'quasar'
const { getScrollTarget, setVerticalScrollPosition } = scroll


import Form_Foto from './profiles/Form_Foto.vue'
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
