<style type="text/css">
.q-drawer__content.fit.scroll {
  background: #eeeeee !important;
  overflow: hidden;
}
</style>

<style type="text/css" scoped>
@supports (position: sticky) {
  .is_sticky {
    z-index:8000;
    position: sticky;
    top: 50px;
  }
}
@supports (position: sticky) {
  .is_sticky_drawer_beranda {
    z-index:8000;
    position: sticky;
    top: 0px;
  }
}
</style>


<template>
  <q-drawer style="z-index:8000" show-if-above :breakpoint="768" v-model="left_drawer" side="left" :width="$q.screen.width < 1100 && $q.screen.width > 1014 ? 250 : 300">



    <q-no-ssr>
<!-- <div :style="'max-height:'+($q.screen.height - 51 - ayat_player)+'px; overflow: auto'" class="col"> -->
      <!-- <div :visible="false" class="fit column"> -->
  <!-- stuff you put here will be scrollable. You can adjust the max-height depending on your components -->

    <!-- <q-scroll-area style="height: calc(100% - 50px); margin-top: 50px; border-right: 1px solid #ddd"> -->
    <q-scroll-area v-show="left_drawer" class=" bg-grey-3 " :class="[ screen_width > 1014 ? 'is_sticky' : '' ]" :style="height">
      <q-list>
        <q-item clickable class="bg-white is_sticky_drawer_beranda" v-ripple :to="({
          name: 'main',
        })">
          <q-item-section avatar top>
            <q-avatar icon="home" color="primary" text-color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1" class="weight-500">HIQMA</q-item-label>
            <q-item-label caption>Langkah Menuju Taqwa</q-item-label>
          </q-item-section>
        </q-item>
        <!-- <q-separator spaced /> -->
        <!-- <q-item-label header>List Header</q-item-label> -->
        <!-- <q-separator spaced inset="item" /> -->



        <!-- <q-item-label header>Aktivitas</q-item-label>

        <q-item clickable v-ripple>
          <q-item-section avatar top>
            <q-avatar icon="favorite" color="pink" text-color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1" class="weight-500">Menyukai</q-item-label>
            <q-item-label caption>February 22nd, 2019</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar top>
            <q-avatar icon="bookmark" color="orange" text-color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1" class="weight-500">Favorit</q-item-label>
            <q-item-label caption>March 1st, 2019</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar top>
            <q-avatar icon="speaker_notes" color="cyan" text-color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1" class="weight-500">Menjawab</q-item-label>
            <q-item-label caption>January 15th, 2019</q-item-label>
          </q-item-section>
        </q-item> -->

        <!-- Saya -->
        <Saya />

        <!-- AKTIFITAS -->
        <Aktifitas v-if="get_user_logged" />

        <!-- KOIN -->
        <Koin />

        <!-- ALQURAN -->
        <Alquran />

        <!-- DOA -->
        <Doa />

        <!-- KONSULTASI -->
        <Konsultasi />

        <!-- FORMULIR -->
        <Formulir />

        <!-- FITUR -->
        <Fitur />

        <!-- LAINNYA -->
        <Lainnya />

        <!-- <slot /> -->
        <div style="margin-bottom:20px;" />
      </q-list>
    </q-scroll-area>
 <!-- </div> -->
<!-- </div> -->
    </q-no-ssr>
  </q-drawer>
</template>

<script type="text/javascript">


export default {
  computed: {
    // ...mapFields({
    //   left_drawer: "drawer.left_drawer",
    //   ayat_terakhir_dibaca: "alquran.ayat_terakhir_dibaca",
    //   ayat_player_display: "alquran_index.ayat_player_display",
    //   is_not_player_real_closed: "alquran_index.is_not_player_real_closed",
    // })
  },
  data() {
    return {
      // drawer: true,
      ayat_player: 0,

      height: '',
      add_height: 51,
    }
  },
  mounted() {
    this.height = 'height:'+(this.$q.screen.height -  this.add_height)+'px;  margin-top: 0px;'
    // this.height = 'height:'+(this.$q.screen.height -  51 - 50 - this.ayat_player)+'px;  margin-top: 0px;'

    if(this.is_not_player_real_closed) {
      this.ayat_player = 0
    } else {
      this.ayat_player = 71
    }
  },
  created() {
    // this.$store.dispatch('drawer', { key: 'left_drawer', value: this.screen_width > 1024 })
    this.add_height = this.screen_width > 768 ? 51 : 0
  },
  watch: {
    screen_width(val) {
      this.$store.dispatch('drawer', { key: 'left_drawer', value: this.screen_width > 1024 })
      this.add_height = val > 768 ? 51 : 0
    },
    is_not_player_real_closed(val) {
      if(val) {
        this.ayat_player = 0
      } else {
        this.ayat_player = 71
      }
    },
    left_drawer(val) {
      if(val) {
        // this.$store.dispatch('drawer', { key: 'left_drawer', value: this.screen_width > 1024 })
      }
    }
  },
  components: {
    Kanal: () => import("src/pages/saluran"),
    Koin: () => import("./app_drawer_koin"),
    Alquran: () => import("./app_drawer_alquran"),
    Doa: () => import("./app_drawer_doa"),
    Konsultasi: () => import("./app_drawer_konsultasi"),
    Fitur: () => import("./app_drawer_fitur"),
    Lainnya: () => import("./app_drawer_lainnya"),
    Saya: () => import("./app_drawer_saya"),
    Aktifitas: () => import("./app_drawer_aktifitas"),
    Formulir: () => import("./app_drawer_formulir"),
  }
};
</script>
