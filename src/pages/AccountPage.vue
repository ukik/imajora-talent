<template>
  <div  style="" class="row">
    <q-list separator bordered class="col-3 rounded-borders text-primary">
      <q-item clickable v-ripple :active="route_name === 'account_avatar'" :to="{ name:'account_avatar' }" active-class="my-menu-link">
        <q-item-section>Avatar</q-item-section>
      </q-item>

      <q-item clickable v-ripple :active="route_name === 'account_social'" :to="{ name:'account_social' }" active-class="my-menu-link">
        <q-item-section>Social</q-item-section>
      </q-item>

      <q-item clickable v-ripple :active="route_name === 'account_profile'" :to="{ name:'account_profile' }" active-class="my-menu-link">
        <q-item-section>Profile</q-item-section>
      </q-item>

      <q-item clickable v-ripple :active="route_name === 'account_biodata'" :to="{ name:'account_biodata' }" active-class="my-menu-link">
        <q-item-section>Biodata</q-item-section>
      </q-item>

      <q-item clickable v-ripple :active="route_name === 'account_password'" :to="{ name:'account_password' }" active-class="my-menu-link">
        <q-item-section>Password</q-item-section>
      </q-item>

      <q-item clickable v-ripple :active="link === 'trash'" @click="link = 'trash'" active-class="my-menu-link">
        <q-item-section avatar>
          <q-icon name="delete" />
        </q-item-section>

        <q-item-section>Trash</q-item-section>
      </q-item>

      <q-separator spaced />

      <q-item clickable v-ripple :active="link === 'settings'" @click="link = 'settings'" active-class="my-menu-link">
        <q-item-section avatar>
          <q-icon name="settings" />
        </q-item-section>

        <q-item-section>Settings</q-item-section>
      </q-item>

      <q-item clickable v-ripple :active="link === 'help'" @click="link = 'help'" active-class="my-menu-link">
        <q-item-section avatar>
          <q-icon name="help" />
        </q-item-section>

        <q-item-section>Help</q-item-section>
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
