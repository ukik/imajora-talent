<template>
  <div class="text-left">
    <!-- <q-list bordered  class="rounded-borders"> -->

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

      <!-- <q-separator  /> -->

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

      <!-- <q-separator  /> -->

      <!-- <q-item-label header class="text-left">Kolaborasi</q-item-label> -->

      <!-- <div v-for="(item, index) in songs"  :key="index"
        class="q-pa-none q-ma-none border_radius_2"
        name="0">
        <q-img style="height:250px;" :src="item.url">
          <div class="absolute-bottom">
            <q-item-label><q-icon name="schedule"></q-icon> <span class="text-caption">29 Feb 2012</span></q-item-label>
            <q-item-label lines="2">
              Scrolling in q-table with virtual-scroll is buggy when expansion ...https://github.com › quasarframework › quasar › issues
            Jan 25, 2020 — Describe the bug Scrolling down the items in a q-table with virtual-scroll is buggy whenever I add the line to the bottom of v-slot:body ...
            </q-item-label>

          </div>
        </q-img>
      </div> -->

      <!-- <div class="row q-col-gutter-sm full-width q-mt-sm">
        <div class="col-auto">
          <q-btn @click="tab_category = 0" color="primary" class="text-body2 full-width" style="" unelevated rounded :outline="tab_category != 0">
            Kolaborasi
          </q-btn>
        </div>
        <div class="col-auto">
          <q-btn @click="tab_category = 1" color="primary" class="text-body2 full-width" style="" unelevated rounded :outline="tab_category != 1">
            Featuring
          </q-btn>
        </div>
        <div class="col-auto">
          <q-btn @click="tab_category = 2" color="primary" class="text-body2 full-width" style="" unelevated rounded :outline="tab_category != 2">
            Ajang
          </q-btn>
        </div>
        <div class="col-auto">
          <q-btn @click="tab_category = 3" color="primary" class="text-body2 full-width" style="" unelevated rounded :outline="tab_category != 3">
            Festival
          </q-btn>
        </div>
      </div> -->

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

      <!-- <q-separator  /> -->
      <!-- <q-item-label header class="text-left">Kolaborasi</q-item-label> -->

      <q-virtual-scroll style="height: calc(100vh - 200px);" :items="heavyList" separator>
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



      <!-- <q-separator  /> -->

      <!-- <q-item-label header class="text-left">Kolaborasi</q-item-label>

      <q-item clickable v-ripple>
        <q-item-section avatar top>
          <q-avatar icon="supervisor_account" color="grey" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Places to visit</q-item-label>
          <q-item-label caption>February 22, 2019</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator  />

      <q-item-label header class="text-left">Featuring</q-item-label>

      <q-item clickable v-ripple>
        <q-item-section avatar top>
          <q-avatar icon="supervisor_account" color="grey" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">My favorite song</q-item-label>
          <q-item-label caption>Singing it all day</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator  />

      <q-item-label header class="text-left">Ajang Festival</q-item-label>

      <q-item clickable v-ripple>
        <q-item-section avatar top>
          <q-avatar icon="supervisor_account" color="grey" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">My favorite song</q-item-label>
          <q-item-label caption>Singing it all day</q-item-label>
        </q-item-section>
      </q-item> -->

    <!-- </q-list> -->
  </div>
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
  mounted() {
    if(!this.init) return
    this.$nextTick(() => {
      window.scrollTo(0, document.body.scrollHeight);
    })
  }
}
</script>
