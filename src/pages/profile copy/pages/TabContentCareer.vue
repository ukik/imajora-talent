<template>
  <!-- <div class="text-left"> -->
    <q-list bordered  class="text-left">

      <q-item class="q-px-none text-center" clickable v-ripple>
        <!-- <q-item-section avatar top>
          <q-avatar color="light-blue" text-color="white" icon="date_range" />
        </q-item-section> -->

        <q-item-section>
          <q-item-label lines="1">Mulai Bermusik</q-item-label>
          <q-item-label caption>February 22nd, 2019</q-item-label>
        </q-item-section>

        <!-- <q-item-section side>
          <q-icon name="info" color="green" />
        </q-item-section> -->
      </q-item>

      <q-separator  />

      <q-item-label header class="text-center">Genre</q-item-label>

      <q-tabs no-caps
        inline-label
        :mobile-arrows="!is_mobile_size"
        v-model="tab"
        align="left"
        class="text-white"
        indicator-color="transparent"
        >
        <q-tab v-for="(item, index) in songs"  :key="index"
          class="q-pa-none q-ma-none border_radius_2"

          name="0">
          <q-img style="height:250px;width:220px;" :src="item.url">
            <div class="absolute-bottom flex flex-center">
              {{item.label}}
            </div>
          </q-img>
          </q-tab>
      </q-tabs>

      <q-item-label header class="text-center">Skill Instrument</q-item-label>

      <q-tabs no-caps
        inline-label
        :mobile-arrows="!is_mobile_size"
        v-model="tab"
        align="left"
        class="text-white"
        indicator-color="transparent"
        >
        <q-tab v-for="(item, index) in songs"  :key="index"
          class="q-pa-none q-ma-none border_radius_2"

          name="0">
          <q-img style="height:250px;width:220px;" :src="item.url">
            <div class="absolute-bottom">
              {{item.label}}
            </div>
          </q-img>
          </q-tab>
      </q-tabs>

      <q-tabs
        align="left"
        :breakpoint="0"
        v-model="tab_category"
        class="text-teal q-mb-sm"
      >
        <q-tab :name="0" label="Kolaborasi" />
        <q-tab :name="1" label="Featuring" />
        <q-tab :name="2" label="Ajang" />
        <q-tab :name="3" label="Festival" />
      </q-tabs>


      <q-virtual-scroll @virtual-scroll="onVirtualScroll" style="height: calc(100vh - 200px);" :items="heavyList" separator>
        <template v-slot="{ item, index }">

          <q-card bordered flat  class="text-left q-mx-xs q-mt-sm q-mb-md">
            <q-img style="height:250px;" src="https://upload.wikimedia.org/wikipedia/vi/f/f6/Final_Fantasy_Banner.jpg?20210321013852">
              <div class="absolute-bottom">
                <q-item-label><q-icon name="schedule"></q-icon> <span class="text-caption">29 Feb 2012</span></q-item-label>
                <q-item-label lines="2">
                  Scrolling in q-table with virtual-scroll is buggy when expansion ...https://github.com › quasarframework › quasar › issues
                Jan 25, 2020 — Describe the bug Scrolling down the items in a q-table with virtual-scroll is buggy whenever I add the line to the bottom of v-slot:body ...
                </q-item-label>
              </div>
            </q-img>
          </q-card>

        </template>
      </q-virtual-scroll>

    </q-list>
  <!-- </div> -->
</template>

<script>
import Songs from "src/models/songs.js"

const maxSize = 100
const heavyList = []

for (let i = 0; i < maxSize; i++) {
  heavyList.push({
    label: 'Option ' + (i + 1),
    inner: ["inner item 1", "inner item 2", "inner item 3"],
    banner: i % 5 === 0,
  })
}

Object.freeze(heavyList)

export default {
  props: {
    init: {
      default: false,
    }
  },
  data() {
    return {
      songs: Songs,
      heavyList,
      tab_category: 0,
    }
  },
  methods: {
    onVirtualScroll() {
    this.stopSound()
  },
    stopSound() {
      var audios = document.getElementsByTagName('audio');
      if(!audios) return
      for(var i = 0, len = audios.length; i < len;i++){
        audios[i].pause();
      }
    }
  },
  mounted() {
    if(!this.init) return
    this.$nextTick(() => {
      window.scrollTo(0, document.body.scrollHeight);
    })
  }
}
</script>
