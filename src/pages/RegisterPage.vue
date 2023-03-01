<template>

    <q-no-ssr>
      <q-form @submit="onSubmit" class="row flex flex-center">
        <div class="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-xs-12 q-col-gutter-y-lg text-center justify-center">
          <div class="text-h4 q-mb-md text-bold q-mt-md">
            Register
          </div>
          <!-- <div class="col-12 q-my-xl">
          <img
            loading="lazy"
            style="min-width: 100px; max-width: 150px"
            :src="img_register"
          />
        </div> -->

          <!-- <CountryCode
          ref="country_selected"
          @onBubbleEvent="country_selected = $event"
          class="col-4 q-py-none q-pb-md"
        /> -->
          <!-- <q-input class="col-8" v-model="phone"  ref="phone" :mask="`(${country_selected})  #################`"
          unmasked-value clearable text-color="grey" bg-color="white" outlined label="phone (WA)" lazy-rules
          :rules="[(val) => (val && val.length > 0) || '']">
        </q-input> -->


          <q-input class="col-12 col-md-6" v-model="name" ref="name" unmasked-value clearable text-color="grey"
            bg-color="white" outlined label="Nama Lengkap" lazy-rules :rules="[(val) => !!val || '']"
            error-message="wajib dilengkapi">
            <template v-slot:prepend>
              <q-icon name="account_circle" />
            </template>
          </q-input>

          <q-input class="col-12 col-md-6" v-model="email" ref="email" type="email" error-message="wajib dilengkapi"
            unmasked-value clearable text-color="grey" bg-color="white" outlined label="Email" lazy-rules
            :rules="[(val, rules) => rules.email(val) || 'Please enter a valid email address']">
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>

          <q-select emit-value map-options options-selected-class="text-deep-orange" class="col-12 col-md-6"
            v-model="gender" clearable :options="options" text-color="grey" hint="Pilih jenis kelamin"
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

          <q-input class="col-12 col-md-6" ref="password" v-model="password" clearable type="password" text-color="grey"
            error-message="wajib dilengkapi" bg-color="white" outlined label="password" lazy-rules
            :rules="[val => (!!val && val == password_confirmation) || 'Password is not matched']">
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>

          <q-input class="col-12 col-md-6" ref="password_confirmation" v-model="password_confirmation" clearable
            error-message="wajib dilengkapi" type="password" text-color="grey" bg-color="white" outlined @update:model-value="$refs.password.validate();$refs.password_confirmation.validate();"
            label="password confirmation" lazy-rules :rules="[val => (!!val && val == password) || 'Password is not matched']">
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>

          <div class="col-12 col-md-6 text-left">
            <q-list bordered separator>
              <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label class="text-grey" caption>Mohon dibaca</q-item-label>
                  <q-item-label>Ketentuan Penggunaan IMAJORA</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label class="text-grey" caption>Mohon dibaca</q-item-label>
                  <q-item-label>Kebijakan Privasi IMAJORA</q-item-label>
                </q-item-section>
              </q-item>

            </q-list>
          </div>

          <div class="col-12 col-md-6 text-left">
            <q-field borderless dense v-model="accept" lazy-rules no-error-icon :rules="[val => !!val || 'Field is required']">
              <template v-slot:control>
                <q-list bordered separator>

                  <q-item tag="label" dense class="q-pa-none q-pa-md">
                    <q-item-section class="col-auto" avatar top>
                      <q-checkbox dense v-model="accept" :val="1" color="primary" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Dengan melanjutkan, Anda menyetujui Ketentuan Penggunaan IMAJORA dan Kebijakan
                        Privasi
                        IMAJORA
                      </q-item-label>
                    </q-item-section>
                  </q-item>

                </q-list>
              </template>
            </q-field>
          </div>

          <div class="col-12 col-md-6">
            <q-btn class="button-default full-width full-height text-subtitle2" type="submit" icon-right="check_circle"
              unelevated color="primary" label="Daftar"></q-btn>
          </div>

          <div class="col-12 col-md-6 text-center q-pb-md">
            Sudah memiliki akun? <q-btn :to="{ name: 'LoginPage' }" dense flat no-caps text-color="blue">
              Masuk disini
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
