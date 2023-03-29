<template>
  <q-pull-to-refresh ref="pullToRefresh" :disable="is_mobile_size"  @refresh="refresh" class="
    col-xl-5 col-lg-5 col-md-6 col-sm-12 col-xs-12 bg-white
    scroll">

    <Container ref="container" />

    <!-- <div class="col-12">
      <q-btn :disable="loading_create" :loading="loading_create"
        class="button-default full-width full-height text-subtitle2" type="submit" icon-right="check_circle"
        unelevated color="primary" label="Simpan"></q-btn>
    </div> -->
  </q-pull-to-refresh>
</template>


<script>
import { scroll } from 'quasar'

import Container from './components/form.vue'

import { mapState, mapWritableState, mapActions } from 'pinia'
import { useFormStore } from 'src/stores/forms/accounts/avatar.js'
import { preFetch } from 'quasar/wrappers';

export default {
  components:{
    Container,
  },
  computed: {
    ...mapState(useFormStore, {
      loading: 'loading',
      loading_create: 'loading_create',
      user: 'user',
    }),
    ...mapWritableState(useFormStore, {
      loading: 'loading',
      loading_create: 'loading_create',
      user: 'user',
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
    ]),
    async refresh(done) {
      await this.form_edit({ id: this.route_param?.id });
      done() // required
      // this.$refs.container.$refs.virtualListRef.scrollTo(0, 'center-force')
    },
  }
}
</script>
