<style type="text/css">
  .gradient-2 {
    /*background-image: linear-gradient(to top right, rgb(0, 223, 142), rgb(0,210,181) , rgb(0,193,234), rgb(88,151,255), rgb(88,151,255)); */
    background-image: linear-gradient(to bottom right, rgb(0, 223, 142), rgb(88,151,255));
  }
</style>
<template>
  <q-header id="ayat_header" unelevated :class="[ayat_pilih_display ? 'shadow-0' : '']" class="text-black bg-white" >

    <q-toolbar v-if="data_1.length > 0" class="q-pl-md  gradient-2">
        <q-item-section>
          <span class="text-white weight-500" style="font-size:17px;">
            Juz {{ data_1[current_index].juz }} / {{ data_1[current_index].surat.nama_id }}
          </span>
          <div class="text-white" style="margin-top: -5px;">
            Ayat ke {{ data_1[current_index].ayat_urutan }}
          </div>
        </q-item-section>
        <q-space />
        <q-item-section side class="text-white Diwanltr" style="font-size:30px; margin-top: -5px;">
          {{ data_1[current_index].surat.nama_ar }}
        </q-item-section>

        <q-btn class="q-ml-md" @click="ayat_pilih_display = !ayat_pilih_display" dense flat size="13px" color="white" round :icon="ayat_pilih_display? 'expand_more' : 'expand_less'" />

        <q-btn size="13px" color="white" @click="pilihan_ayat_player = false" flat round icon="close" />

      </q-item>
    </q-toolbar>

    <q-toolbar v-if="ayat_pilih_display" class="q-px-none bg-white">
      <q-virtual-scroll ref="virtualList"
        :style="'height: '+($q.screen.height - 71)+'px'"
        class="bg-white full-width q-pb-sm"
        :items="Object.freeze(data_1)"
        separator
      >
        <template v-slot="{ item, index }">
            <q-item dense v-ripple :active="current_index == index"  active-class="bg-teal-1 text-grey-8" clickable @click="onAudioRefresh(index)">
              <q-item-section>Ayat {{ item.ayat_urutan }}</q-item-section>
              <q-item-section side>
                <q-chip outline color="teal-5" text-color="white">
                  {{ data_1[current_index].surat.nama_id }}
                </q-chip>
              </q-item-section>
            </q-item>
        </template>
      </q-virtual-scroll>
    </q-toolbar>

    <!-- {{ paginate }} -->
    <q-toolbar class="bg-grey-1 full-width shadow-2 q-px-sm">
      <q-pagination dense class="q-px-sm" color="primary" input-class="text-primary"
        v-model="current_page"
        :max="paginate.last_page"
        :input="true"
        @input="onInput"
      />
      <q-space />
      <!-- <q-btn
        v-if="data_1.length > 0"
        @click="lengkap = !lengkap"
        flat
        dense
        size="15px"
        round
        :color="lengkap ? 'blue' : 'red'"
        icon="remove_red_eye"
      />
 -->
      <q-btn
        @click="ayat_drawer = !ayat_drawer"
        flat
        dense
        size="16px"
        round
        color="blue"
        icon="person_search"
      />


    </q-toolbar>

<!--
                <q-chip outline color="primary" text-color="white">
                  Ayat {{ item.ayat_urutan }}
                </q-chip>
                <q-space />
                <q-chip outline color="teal-5" text-color="white">
                  {{ data_1[current_index].surat.nama_id }}
                </q-chip> -->
    <!-- <q-scroll-area ref="scrollArea" class="bg-white no-border-radius" style="height: 300px;">

      <q-list>
        <q-item dense v-ripple :active="current_index == index + 1" active-class="bg-teal-1 text-grey-8" :id="'ayat-item'+index" v-for="(k, index) in 300" :key="index+'C'" @click="current_index = index">
          <q-item-section>Ayat {{ index + 1 }}</q-item-section>
        </q-item>
      </q-list>

    </q-scroll-area> -->
  </q-header>
</template>

<script type="text/javascript">
;

import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll

export default {
  computed: {
    // ...mapFields({
    //   expanded_items: "alquran_index.expanded_items", //"alquran_detail.data_1",
    //   lengkap: "alquran_detail.lengkap",
    //   ayat_deskripsi_dialog: "alquran_index.ayat_deskripsi_dialog",
    //   data_1: "alquran_index.ayat", //"alquran_detail.data_1",
    //   ayat_dialog: "alquran_index.ayat_dialog",
    //   current_index: "alquran_index.current_index",
    //   ayat_player_display: "alquran_index.ayat_player_display",
    //   ayat_pilih_display: "alquran_index.ayat_pilih_display",
    //   paginate: "alquran_index.paginate",
    //   current_muratal: "alquran_index.current_muratal",
    //   current_page: "alquran_index.paginate.current_page",
    //   last_ayat_or_juz: "alquran_index.last_ayat_or_juz",
    //   pilihan_ayat_player: "alquran_index.pilihan_ayat_player",
    //   ayat_drawer: "alquran_index.ayat_drawer",
    //   // loading: "alquran_detail.loading",
    // }),
  },
  data() {
    return {
      value: 0,
    }
  },
  watch: {
    loading() {
      // this.value = n == null ? 0 : n
      // this.$refs.virtualList.reset()
      // console.log(this.$refs.virtualList.reset())
    },
    ayat_pilih_display(val) {
      if(this.$refs.virtualList == undefined) return
      if(!val) return

      this.$nextTick()
      setTimeout(() => {
        this.$refs.virtualList.scrollTo(this.current_index)
      }, 500)
    }
  },
  methods: {
    onPlay(audio) {
      this.$nextTick()
      try {
        audio.play()
        this.dispatchVuex('alquran_index/is_muratal_play', true)
      } catch (err) { }
    },
    async onAudioRefresh(index) {

      this.dispatchVuex('alquran_index/action_alquran_current_index', index)
      var audio = document.getElementById('audio-player');
      if(audio == undefined) return

      // audio.load()
      audio.src = this.data_1[index].muratal[this.current_muratal.kode]

      this.onPlay(audio)
    },
    onSelect(index) {
      this.dispatchVuex('alquran_index/action_alquran_current_index', index)
      // this.action_alquran_index_current_index(index)
    },
    async onInput(val) {
      console.log(val)
      await this.dispatchVuex('alquran_index/action_alquran_current_index', 0)
      await this.dispatchVuex('alquran_detail/action_payload',
        { pull_refresh: true, id: this.$route.params.id, page: val }
      )
    }
  }
};
</script>



