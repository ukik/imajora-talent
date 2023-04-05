<template>
  <q-pull-to-refresh ref="pullToRefresh" :disable="is_mobile_size"  @refresh="refresh" class="
    col-xl-5 col-lg-5 col-md-6 col-sm-12 col-xs-12 bg-white flex flex-center
    scroll">
    <div class="row col-12 flex flex-center">
      <q-list bordered class="col-11 q-pt-xl">
        <div class="text-h6 text-center text-grey q-px-lg q-pb-lg">
          <q-icon size="90px" color="pink-4" name="https" />
        </div>
        <div class="text-h6 text-center text-dark q-px-lg ">
          Trouble logging in?
        </div>
        <div class="text-text text-center text-grey q-px-lg q-pb-lg">
          Enter your email and we'll send you a link to get back into your account.
        </div>
        <Container ref="container" />
      </q-list>
    </div>
  </q-pull-to-refresh>

</template>

<script>
import Container from "./container.vue"

import { mapState, mapWritableState, mapActions } from 'pinia'
import { useFormStore } from 'src/stores/forms/accounts/biodata.js'
import { preFetch } from 'quasar/wrappers';

export default {
  components:{
    Container,
  },
  computed: {
    ...mapState(useFormStore, {
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
