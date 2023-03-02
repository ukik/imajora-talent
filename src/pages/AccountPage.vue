<template>
  <div  style="" class="row">

    <q-list  bordered class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 rounded-borders text-primary">
      <q-item-label header>Musician</q-item-label>

      <q-item dense clickable v-ripple :active="route_name === 'account_carier'" :to="{ name:'account_carier' }" active-class="my-menu-link">
        <q-item-section>Carier</q-item-section>
      </q-item>

      <q-item dense clickable v-ripple :active="route_name === 'account_agenda'" :to="{ name:'account_agenda' }" active-class="my-menu-link">
        <q-item-section>Agenda</q-item-section>
      </q-item>

      <q-item dense clickable v-ripple :active="route_name === 'account_playlist'" :to="{ name:'account_playlist' }" active-class="my-menu-link">
        <q-item-section>Playlist</q-item-section>
      </q-item>

      <q-item dense clickable v-ripple :active="route_name === 'account_ciptaan'" :to="{ name:'account_ciptaan' }" active-class="my-menu-link">
        <q-item-section>Original</q-item-section>
      </q-item>

      <q-item dense clickable v-ripple :active="route_name === 'account_cover'" :to="{ name:'account_cover' }" active-class="my-menu-link">
        <q-item-section>Cover</q-item-section>
      </q-item>

      <q-item dense clickable v-ripple :active="route_name === 'account_cover'" :to="{ name:'account_cover' }" active-class="my-menu-link">
        <q-item-section>Perform</q-item-section>
      </q-item>

      <q-item-label header>Payment</q-item-label>

      <q-item dense clickable v-ripple :active="route_name === 'account_rates'" :to="{ name:'account_rates' }" active-class="my-menu-link">
        <q-item-section>Rates</q-item-section>
      </q-item>

      <q-item dense clickable v-ripple :active="route_name === 'account_carier'" :to="{ name:'account_carier' }" active-class="my-menu-link">
        <q-item-section>Bank</q-item-section>
      </q-item>

      <q-item dense clickable v-ripple :active="route_name === 'account_carier'" :to="{ name:'account_carier' }" active-class="my-menu-link">
        <q-item-section>E-Wallet</q-item-section>
      </q-item>

      <q-item-label header>Accounts</q-item-label>

      <q-item dense clickable v-ripple :active="route_name === 'account_avatar'" :to="{ name:'account_avatar' }" active-class="my-menu-link">
        <q-item-section>Avatar</q-item-section>
      </q-item>

      <q-item dense clickable v-ripple :active="route_name === 'account_avatar'" :to="{ name:'account_avatar' }" active-class="my-menu-link">
        <q-item-section>Video</q-item-section>
      </q-item>

      <q-item dense clickable v-ripple :active="route_name === 'account_banner'" :to="{ name:'account_banner' }" active-class="my-menu-link">
        <q-item-section>Banner</q-item-section>
      </q-item>

      <q-item dense clickable v-ripple :active="route_name === 'account_social'" :to="{ name:'account_social' }" active-class="my-menu-link">
        <q-item-section>Social</q-item-section>
      </q-item>

      <q-item dense clickable v-ripple :active="route_name === 'account_profile'" :to="{ name:'account_profile' }" active-class="my-menu-link">
        <q-item-section>Profile</q-item-section>
      </q-item>

      <q-item dense clickable v-ripple :active="route_name === 'account_biodata'" :to="{ name:'account_biodata' }" active-class="my-menu-link">
        <q-item-section>Biodata</q-item-section>
      </q-item>

      <q-item dense clickable v-ripple :active="route_name === 'account_password'" :to="{ name:'account_password' }" active-class="my-menu-link">
        <q-item-section>Password</q-item-section>
      </q-item>

    </q-list>
    <q-list separator bordered class="col">
      <router-view />
    </q-list>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      link: ref('inbox')
    }
  }
}
</script>

<style lang="sass">
.my-menu-link
  color: white
  background: #F2C037
</style>
