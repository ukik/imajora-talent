<template>
  <q-pull-to-refresh ref="pullToRefresh" :disable="is_mobile_size" @refresh="refresh" class="
      col-xl-5 col-lg-5 col-md-6 col-sm-12 col-xs-12 bg-white
      scroll">

    <Container ref="container" />

    <!-- <div class="col-12">
      <q-btn :disable="loading_create" :loading="loading_create"
        class="button-default full-width full-height text-subtitle2" type="submit" icon-right="check_circle"
        unelevated color="primary" label="Simpan"></q-btn>
    </div> -->
  </q-pull-to-refresh>

  <transition name="fade-global">
    <q-footer class="bg-transparent text-black row flex flex-center">
      <q-list v-if="file_cover.length > 0" class="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-xs-12 bg-white">

        <q-banner flat class="bg-grey-2">
          <template v-slot:avatar>
            <q-icon name="info" color="blue-4" />
          </template>
          <div class="row flex items-center">
            <span>Upload up to 5 images</span>
            <q-space />
            <q-btn @click="onSubmit" :disable="loading || loading_create" :loading="loading || loading_create" dense label="post" unelevated class="q-px-sm"
              icon="done" color="primary" />
          </div>
        </q-banner>

      </q-list>
    </q-footer>
  </transition>
</template>


<script>
import { scroll } from 'quasar'

import Container from './components/form.vue'

import { mapState, mapWritableState, mapActions } from 'pinia'
import { useFormStore } from 'src/stores/forms/accounts/banner.js'
import { preFetch } from 'quasar/wrappers';

export default {
  components: {
    Container,
  },
  computed: {
    ...mapState(useFormStore, {
      loading: 'loading',
      loading_create: 'loading_create',
      // user: 'user',
      file_cover: 'file_cover',
    }),
    ...mapWritableState(useFormStore, {
      loading: 'loading',
      loading_create: 'loading_create',
      // user: 'user',
      file_cover: 'file_cover',
    }),
  },
  preFetch: preFetch(async ({ store, currentRoute }) => {
    console.log(currentRoute)
    const mystore = useFormStore(store);
    await mystore.form_edit({
      id: currentRoute.params.id
    });
  }),
  methods: {
    ...mapActions(useFormStore, [
      'form_edit',
      'form_create',
    ]),
    async onSubmit() {
      if (!this.route_param?.id) {
        // if (!this.file_media) return;
        if (this.file_cover.length <= 0) return;
      }

      const response = await this.form_create({
        id: this.route_param?.id
      })
    },
    async refresh(done) {
      await this.form_edit({ id: this.route_param?.id });
      done() // required
      // this.$refs.container.$refs.virtualListRef.scrollTo(0, 'center-force')
    },
  }
}
</script>
