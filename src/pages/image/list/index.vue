<template>
  <q-pull-to-refresh ref="pullToRefresh" :disable="is_mobile_size"  @refresh="refresh" class="
    col-xl-5 col-lg-5 col-md-6 col-sm-12 col-xs-12
    scroll">
    <Container ref="container" />
  </q-pull-to-refresh>

</template>

<script>
import Container from "./container.vue"

import { mapState, mapWritableState, mapActions } from 'pinia'
import { useImageListStore } from 'src/stores/image/list.js'
import { preFetch } from 'quasar/wrappers';

export default {
  components:{
    Container,
  },
  preFetch: preFetch(async ({ store, currentRoute }) => {
    const mystore = useImageListStore(store);
    await mystore.request({
      page: currentRoute.params.page
    });
  }),
  methods: {
    ...mapActions(useImageListStore, [
      'request',
    ]),
    async refresh(done) {
      await this.request({ page: this.route_param?.page });
      done() // required
      this.$refs.container.$refs.virtualListRef.scrollTo(0, 'center-force')
    },
  }
}
</script>
