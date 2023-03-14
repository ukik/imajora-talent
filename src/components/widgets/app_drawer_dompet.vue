<template>
<div class="q-mt-md rounded-borders">

    <q-card v-pointer class="q-py-sm bg-white shadow-0">
      <q-toolbar>
        <q-avatar class="bg-white">
          <img src="~/assets/coins/8.png" />
        </q-avatar>
        <q-space />
        <div class="text-right">
          <div class="text-h6 text-white text-weight-bold text-orange">{{ koin.total }}</div>
          <div style="font-size:10px; margin-top:-2px" class="text-grey">Total Koin HIQMA</div>
        </div>
      </q-toolbar>
    </q-card>

</div>
</template>

<script>

;

export default {
  computed: {
    // ...mapFields({
    //   koin: "koin_dompet.koin",
    // })
  },
  mounted () {
    setTimeout(() => {
      if(this.get_authentication_user) {
        this.$store.dispatch('koin_dompet/action_payload', { pull_refresh: true, id: this.get_authentication_user.id })
      }
    }, 1000)
  },
};
</script>

<style type="text/css" scoped>
.gradient-2 {
  background-image: linear-gradient(to  right, rgb(0,193,234), rgb(88,151,255), rgb(88,151,255));
}
</style>
