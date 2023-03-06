<template>
  <q-no-ssr>
    <q-form @submit="onSubmit" class="row flex flex-center q-py-xl">
      <div
        class="row col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 q-col-gutter-md q-col-gutter-y-lg text-center justify-center">
        <div class="col-12 text-h4 q-mb-md text-bold">
          My Karir
        </div>

        <q-field hide-bottom-space dense borderless class="q-pa-none row col-12">
          <div class="row q-pa-sm">
            <q-item-label class="col-12 q-pa-sm text-dark q-mb-sm" header>Genre Musik</q-item-label>
            <template v-for="(item, i) in options">
              <q-checkbox class="col-12 text-dark" :val="item.value" :label="item.label" v-model="group" />
            </template>
          </div>
        </q-field>


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

import { mapFields } from "vuex-map-fields";
import Form_Foto from './accounts/Form_Foto.vue'
import { ref } from 'vue'
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
      date: ref('2019/03/01'),
      proxyDate: ref('2019/03/01'),
      uuid: null,
      name: null,
      email: null,
      phone: null,
      gender: null,
      group: ([]),
      options: [
        { label: 'Solo', value: 'solo' },
        { label: 'Group (Band)', value: 'group' },
        { label: 'Extension', value: 'extension' },
        { label: 'Additional', value: 'additional' },
      ]
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
    updateProxy() {
      this.proxyDate = this.date
    },

    save() {
      this.date = this.proxyDate
      this.name = this.proxyDate
    },

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
