<template>
<!-- <div class="col-12 row flex flex-center"> -->
  <q-pull-to-refresh ref="pullToRefresh" @refresh="refresh" class="
    col-xl-5 col-lg-5 col-md-6 col-sm-12 col-xs-12">
    <Container ref="container" />
  </q-pull-to-refresh>
<!-- </div> -->
</template>

<script>
import Container from "./container.vue"

import { mapState, mapWritableState, mapActions } from 'pinia'
import { useVideoListStore } from 'src/stores/video/list.js'
import { preFetch } from 'quasar/wrappers';

export default {
  components:{
    Container,
  },
  computed: {
    ...mapState(useVideoListStore, {
      // get_comment: 'get_comment',
      // comment:'balasan_comment',
      // get_comment: 'get_comment',
      // get_current_page: 'get_current_page',
      // get_data: 'get_data',
      // get_first_page_url: 'get_first_page_url',
      // get_from: 'get_from',
      // get_last_page: 'get_last_page',
      // get_last_page_url: 'get_last_page_url',
      // get_links: 'get_links',
      // get_next_page_url: 'get_next_page_url',
      // get_path: 'get_path',
      // get_per_page: 'get_per_page',
      // get_prev_page_url: 'get_prev_page_url',
      // get_to: 'get_to',
      // get_total: 'get_total',

      // loading: 'loading',
    }),
  },
  preFetch: preFetch(async ({ store, currentRoute }) => {
    const mystore = useVideoListStore(store);
    await mystore.komentar_balasan({
      id: currentRoute.params.id,
      page: currentRoute.params.page,
    });
  }),
  methods: {
    ...mapActions(useVideoListStore, [
      'komentar_balasan',
    ]),
    async refresh(done) {
      await this.komentar_balasan({
        id: this.route_param?.id,
        page: this.route_param?.page,
      });
      done() // required
      this.$refs.container.$refs.virtualListRef.scrollTo(0, 'center-force')
    },
  }
}
</script>
