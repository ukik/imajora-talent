<template>
  <!-- <q-layout view="lHh Lpr lFf" > -->
  <q-layout view="hHr lpR lFr">
    <q-no-ssr>
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
  </q-no-ssr>

  <q-no-ssr>
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

    <q-dialog seamless v-model="dialog" position="bottom">
      <q-card style="width: 350px">
        <!-- <q-linear-progress :value="0.6" color="pink" /> -->
        <q-btn flat round icon="fast_rewind" v-close-popup />
        <q-card-section class="row items-center no-wrap">
          <audio id="audio" ref="audio" style="height:40px;" class="full-width" controls :src="audio"></audio>
          <!-- <div>
            <div class="text-weight-bold">The Walker</div>
            <div class="text-grey">Fitz & The Tantrums</div>
          </div>

          <q-space />

          <q-btn flat round icon="fast_rewind" />
          <q-btn flat round icon="pause" />
          <q-btn flat round icon="fast_forward" /> -->
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-no-ssr>

    <q-page-container class="items-center justify-evenly bg-grey-1">
      <!-- {{ get_komentar }} -->
      <q-page class="col-12 row flex justify-center"
        :class="[ dynamic_layout ]">
        <router-view />
      </q-page>
      <!-- <q-item v-for="(item, index) in get_komentar">
        <q-item-section>
          {{ item.konten }}
        </q-item-section>
      </q-item> -->
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, onServerPrefetch, ref } from 'vue';
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

import { mapState, mapWritableState, mapActions } from 'pinia'
import { useKomentarStore } from 'src/stores/komentar-store.js'

export default defineComponent({
  name: 'MainLayout',
  async preFetch({ store }) {
    // store.dispatch('koment/GET')
    // const mystore = useKomentarStore()
    // return mystore.action_payload()
    // console.log(mystore.komentar, '333333333333')
  },
  computed: {
    ...mapState(useKomentarStore, {
      komentar: "komentar",
      konten: "komentar",
      paginate: "paginate",
      loading: "loading",
      last_id: "last_id",
      init: "init",
      get_komentar: "get_komentar",
      // getPageHeight: 'getPageHeight',
      // get_is_navigate: 'get_is_navigate',
      // get_bottomsheet_index_list_comment: 'get_bottomsheet_index_list_comment',
    }),
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
  },

  components: {
    EssentialLink
  },
  data() {
    return {
      dialog: false,
      audio: '',
    }
  },
  watch: {
    audio(val) {
      if(!val) return
    }
  },
  mounted() {
    // console.log(this.komentar, 'xxxxxxxxxxx')
    // this.$global.$on('audioplayer', (event) => {
    //   this.dialog = true;
    //   this.audio = event
    //   this.$nextTick(() => {
    //     this.$refs.audio.src = event
    //     this.$refs.audio.play()
    //   })
    // });
  },
  setup () {
    const leftDrawerOpen = ref(false)

    // const mystore = useKomentarStore()
    // onServerPrefetch(async () => {
    //   // ✅ this will work
    //   await mystore.action_payload()
    // })

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },

});
</script>
