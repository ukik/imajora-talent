<template>
  <!-- <q-layout view="lHh Lpr lFf" > -->
  <q-layout view="lHr LpR lfr">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title @click="$router.push({name:'profile'})">
          IMAJORA
        </q-toolbar-title>

        <q-btn :to="{ name:'profile' }"
          flat
          dense
          round
          icon="fas fa-user"
          aria-label="Menu"
        />

      </q-toolbar>
    </q-header>

    <q-drawer :behavior="dynamic_drawer"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="row items-center justify-evenly bg-grey-1">
      <q-page class="q-pa-md col-sm-12 col-xs-12 bg-white"
        :class="[ dynamic_layout ]">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  computed: {
    dynamic_layout() {
      const width = this.$q.screen.width
      if(this.leftDrawerOpen) {
        return 'col-xl-9 col-lg-9 col-md-9'
      } else if(width <= 1024) {
        return 'col-xl-9 col-lg-9 col-md-9'
      } else {
        return 'col-xl-7 col-lg-7 col-md-7'
      }
    },
    dynamic_drawer() {
      const width = this.$q.screen.width
      if(width <= 1024) {
        return 'mobile'
      } else {
        return 'desktop'
      }
    }
  }
});
</script>
