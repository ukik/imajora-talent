<template>
  <q-pull-to-refresh ref="pullToRefresh" @refresh="refresh" class="
    col-xl-5 col-lg-5 col-md-6 col-sm-12 col-xs-12">
    <Container ref="container" />
  </q-pull-to-refresh>
</template>

<script>
import Container from "./container.vue"

import { mapState, mapWritableState, mapActions } from 'pinia'
import { useAudioListStore } from 'src/stores/audio/list.js'
import { preFetch } from 'quasar/wrappers';

export default {
  components:{
    Container,
  },
  computed: {
    ...mapState(useAudioListStore, {
    }),
  },
  preFetch: preFetch(async ({ store, currentRoute }) => {
    const mystore = useAudioListStore(store);
    await mystore.komentar_semua({
      id: currentRoute.params.id,
      page: currentRoute.params.page,
    });
  }),
  methods: {
    ...mapActions(useAudioListStore, [
      'komentar_semua',
    ]),
    async refresh(done) {
      await this.komentar_semua({
        id: this.route_param?.id,
        page: this.route_param?.page,
      });
      done() // required
      this.$refs.container.$refs.virtualListRef.scrollTo(0, 'center-force')
    },
  }
}
</script>
