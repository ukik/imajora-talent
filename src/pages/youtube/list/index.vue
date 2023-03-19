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
import { useVideoListStore } from 'src/stores/video/list.js'
import { preFetch } from 'quasar/wrappers';

import Card from "./components/card.vue"

export default {
  components:{
    Card,
    Container,
  },
  computed: {
    ...mapState(useVideoListStore, {
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
    await mystore.request({
      page: currentRoute.params.page
    });
  }),
  methods: {
    ...mapActions(useVideoListStore, [
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
