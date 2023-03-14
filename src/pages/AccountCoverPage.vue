<template>
  <q-no-ssr>
    <q-dialog v-model="fixed">
      <q-card>
        <q-card-section>
          <div class="text-h6">Tambah Lagu</div>
        </q-card-section>
        <q-separator />

        <q-card-section style="max-height: 70vh; margin-top:0px;" class="scroll row q-col-gutter-lg q-pt-none">
          <q-input class="col-12" hide-bottom-space v-model="name" ref="name" unmasked-value clearable text-color="grey" bg-color="white"
            outlined label="Judul Track" lazy-rules :rules="[(val) => !!val || '']" error-message="wajib dilengkapi">
            <template v-slot:prepend>
              <q-icon name="description" />
            </template>
          </q-input>

          <q-input class="col-12" hide-bottom-space v-model="name" ref="name" unmasked-value clearable text-color="grey" bg-color="white"
            outlined label="Pencipta" lazy-rules :rules="[(val) => !!val || '']" error-message="wajib dilengkapi">
            <template v-slot:prepend>
              <q-icon name="account_circle" />
            </template>
          </q-input>


          <q-input class="col-12" v-model="name" ref="name" unmasked-value clearable text-color="grey" bg-color="white"
            outlined label="Link Youtube" >
            <template v-slot:prepend>
              <q-icon name="fab fa-youtube" />
            </template>
          </q-input>

          <q-input class="col-12" v-model="name" ref="name" unmasked-value clearable text-color="grey" bg-color="white"
            outlined label="Link Eksternal" >
            <template v-slot:prepend>
              <q-icon name="language" />
            </template>
          </q-input>

          <Form_Audio />
          <!-- <div class="col-12">
            <q-date class="full-width" v-model="range" range />
          </div> -->
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn label="Tambahkan" rounded unelevated color="primary" icon="add" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-form @submit="onSubmit" class="row flex flex-center q-pt-xl">
      <div
        class="row col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 q-col-gutter-md q-col-gutter-y-lg text-center justify-center">
        <div class="col-12 text-h4 q-mb-md text-bold">
          My Cover
        </div>

        <!-- <q-input hide-bottom-space class="col-12" v-model="name" ref="name" clearable text-color="grey" bg-color="white"
          outlined placeholder="Cari lagu">
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>

        <div>
          <q-btn @click="fixed = true" label="Tambah Lagu" rounded unelevated color="primary"
            icon="fa fa-music" />
        </div> -->

        <q-input hide-bottom-space class="col-12" dense rounded v-model="name" ref="name" clearable text-color="grey" bg-color="white"
          outlined placeholder="Cari lagu">
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>

          <template v-slot:after>
            <q-btn @click="fixed = true" flat unelevated round color="primary"
            icon="add" />
          </template>
        </q-input>

        <div  class="text-left col-12">
          <q-list bordered separator >

            <q-item v-for="(item, index) in 10" :key="index" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fas fa-music" color="light-blue" />
                <!-- <q-avatar color="light-blue" text-color="white">
                  <q-icon name="fas fa-music" />
                </q-avatar> -->
              </q-item-section>

              <q-item-section>
                <q-item-label>Jikustik</q-item-label>
                <q-item-label caption lines="1">Melangkah Lagi</q-item-label>
              </q-item-section>

              <!-- <q-item-section side>
                <q-icon name="fa fa-music-note" color="green" />
              </q-item-section> -->
            </q-item>
          </q-list>
        </div>
        <!-- <AgendaTimeline /> -->
        <Paginate_Aset />
      </div>
    </q-form>
  </q-no-ssr>
</template>


<script>
import { scroll } from 'quasar'
const { getScrollTarget, setVerticalScrollPosition } = scroll


import AgendaTimeline from './accounts/AgendaTimeline.vue'
import AgendaDate from './accounts/AgendaDate.vue'
import Form_Audio from './accounts/Form_Audio.vue'

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
    AgendaTimeline,
    AgendaDate,
    Form_Audio,
  },
  data() {
    return {
      date: ref('2019/03/01'),
      proxyDate: ref('2019/03/01'),
      fixed: false,
      range: { from: '2020/07/08', to: '2020/07/17' },
      date: '12:44',
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
