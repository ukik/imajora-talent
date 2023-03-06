<template>
  <q-no-ssr>
    <q-form @submit="onSubmit" class="row flex flex-center q-py-xl">
      <div class="row col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 q-col-gutter-md q-col-gutter-y-lg text-center justify-center">
        <div class="col-12 text-h4 q-mb-md text-bold">
          My Biodata
        </div>

        <q-input class="col-12" hide-bottom-space v-model="name" ref="name" unmasked-value clearable text-color="grey"
          bg-color="white" outlined label="Tempat Lahir" lazy-rules :rules="[(val) => !!val || '']"
          error-message="wajib dilengkapi">
          <template v-slot:prepend>
            <q-icon name="account_circle" />
          </template>
        </q-input>

        <q-input hide-bottom-space @click="$refs.date.show()" class="col-12" v-model="name" ref="name" unmasked-value clearable text-color="grey" label="Tanggal Lahir" readonly
          bg-color="white" outlined lazy-rules :rules="[(val) => !!val || '']"
          error-message="wajib dilengkapi">
          <template v-slot:prepend>
            <!-- <q-icon name="date_range" /> -->
            <q-icon name="date_range" >
              <q-popup-proxy ref="date" @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
                <q-date v-model="proxyDate">
                  <div class="row items-center justify-end q-gutter-sm">
                    <q-btn label="Cancel" color="primary" flat v-close-popup />
                    <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-input hide-bottom-space class="col-12" maxlength="200" counter input-style="min-height: 100px;" v-model="name" ref="name" type="textarea" autogrow clearable text-color="grey"
          bg-color="white" outlined label="Alamat" >
          <template v-slot:prepend>
            <q-icon name="place" />
          </template>
        </q-input>

        <q-input hide-bottom-space class="col-12" maxlength="200" counter input-style="min-height: 150px;" v-model="name" ref="name" type="textarea" autogrow clearable text-color="grey" label="Bio"
          bg-color="white" outlined placeholder="Write about you here..." >
          <template v-slot:prepend>
            <q-icon name="contact_page" />
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
    updateProxy () {
      this.proxyDate = this.date
      },

      save () {
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
