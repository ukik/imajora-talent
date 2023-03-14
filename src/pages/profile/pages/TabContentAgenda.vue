<template>
  <div class="q-ma-sm">
    <q-dialog v-model="fixed">
      <q-card>
        <q-card-section>
          <div class="text-h6">Tambah Agenda</div>
        </q-card-section>
        <q-separator />

        <q-card-section style="max-height: 70vh; margin-top:0px;" class="scroll row q-col-gutter-y-lg q-col-gutter-md">
          <q-input class="col-12" v-model="name" ref="name" unmasked-value clearable text-color="grey" bg-color="white"
            outlined label="Nama Agenda" lazy-rules :rules="[(val) => !!val || '']" error-message="wajib dilengkapi">
            <template v-slot:prepend>
              <q-icon name="calendar_today" />
            </template>
          </q-input>

          <q-input @click="$refs.date.show()" class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12" v-model="name" ref="name" unmasked-value clearable text-color="grey" label="Tanggal Mulai"
            bg-color="white" outlined lazy-rules :rules="[(val) => !!val || '']"
            error-message="wajib dilengkapi">
            <template v-slot:prepend>
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

          <q-input @click="$refs.date.show()" class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12" v-model="name" ref="name" unmasked-value clearable text-color="grey" label="Tanggal Selesai"
            bg-color="white" outlined lazy-rules :rules="[(val) => !!val || '']"
            error-message="wajib dilengkapi">
            <template v-slot:prepend>
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



          <q-input @click="$refs.date.show()" class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12" v-model="date" ref="name" unmasked-value clearable text-color="grey" label="Jam Mulai" readonly
            bg-color="white" outlined lazy-rules :rules="[(val) => !!val || '']"
            error-message="wajib dilengkapi">
            <template v-slot:prepend>
              <q-icon name="access_time" >
                <q-popup-proxy ref="date" @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
                  <q-time v-model="date" mask="HH:mm" format24h>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-input @click="$refs.date.show()" class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12" v-model="date" ref="name" unmasked-value clearable text-color="grey" label="Jam Selesai" readonly
            bg-color="white" outlined lazy-rules :rules="[(val) => !!val || '']"
            error-message="wajib dilengkapi">
            <template v-slot:prepend>
              <q-icon name="access_time" >
                <q-popup-proxy ref="date" @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
                  <q-time v-model="date" mask="HH:mm" format24h>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-input class="col-12" maxlength="200" counter input-style="min-height: 100px;" v-model="name" ref="name" type="textarea" autogrow clearable text-color="grey"
          bg-color="white" outlined label="Deskripsi" placeholder="Berikan penjelasan singkat">
          <template v-slot:prepend>
            <q-icon name="description" />
          </template>
        </q-input>

        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn label="Tambahkan" rounded unelevated color="primary" icon="add" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <AgendaDate />

    <div>
      <q-btn @click="fixed = true" class="q-mt-md" label="Tambah Agenda" rounded unelevated color="primary"
        icon="event" />
    </div>

    <AgendaTimeline />
  </div>
</template>


<script>
import { scroll } from 'quasar'
const { getScrollTarget, setVerticalScrollPosition } = scroll


import AgendaTimeline from './AgendaTimeline.vue'
import AgendaDate from './AgendaDate.vue'
import { ref } from 'vue'
export default {
  props: {
    init: {
      default: false,
    }
  },
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
    if(!this.init) return
    this.$nextTick(() => {
      window.scrollTo(0, document.body.scrollHeight);
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
