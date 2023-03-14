<template>
  <q-no-ssr>
    <div class="col-12 text-h4 q-mb-md text-bold q-mt-md">
      Request
    </div>
  <!-- <q-tabs
    v-model="tab"
    inline-label
    indicator-color="primary"
    :align="is_mobile_size ? 'justify' : 'justify'"
    active-color="white"
    class="bg-white text-white sticky"
  >
    <q-tab name="all"
      :class="tab == 'all' ? 'bg-primary' : 'bg-blue-6'" label="Berminat" />
    <q-tab name="pending"
      :class="tab == 'pending' ? 'bg-primary' : 'bg-blue-6'"  label="Konsultasi" />
    <q-tab name="process"
      :class="tab == 'process' ? 'bg-primary' : 'bg-blue-6'"  label="Dibeli" />
  </q-tabs> -->
  <q-input outlined class="q-mb-md" type="search" clearable debounce="750"  bg-color="bg-grey-2" dense
     placeholder="Pencarian..." standoutX="bg-blue text-white">
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
    <template v-slot:after>
      <q-btn round flat outline unelevated color="blue" icon="tune">
			  </q-btn>
    </template>
  </q-input>

  <q-tabs align="left"
    no-caps
    inline-label
    indicator-color="primary"
    active-color="white"
    class="bg-blue text-white shadow-2"
    active-class="bg-primary"
  >
    <q-route-tab :to="{ query: { tab: '1' } }" exact replace label="Semua" />
    <q-route-tab :to="{ query: { tab: '2' } }" exact replace label="Pending" />
    <q-route-tab :to="{ query: { tab: '3' } }" exact replace label="Process" />
    <!-- <q-route-tab :to="{ query: { tab: '3' } }" exact replace label="Perform" /> -->
    <q-route-tab :to="{ query: { tab: '4' } }" exact replace label="Complete"  />
  </q-tabs>

  <q-tab-panels swipeable infinite v-model="tab" animated>
    <q-tab-panel class="q-pa-none q-ma-none" name="all">
      <Screen1 />
    </q-tab-panel>
    <q-tab-panel class="q-pa-none q-ma-none" name="pending">
      <Screen1 />
    </q-tab-panel>
    <q-tab-panel class="q-pa-none q-ma-none" name="process">
      <Screen1 />
    </q-tab-panel>
    <q-tab-panel class="q-pa-none q-ma-none" name="complete">
      <Screen1 />
    </q-tab-panel>
  </q-tab-panels>
  </q-no-ssr>
  </template>

  <script>

  // import Tab1 from './riwayat/Screen_Berminat'
  // import Tab1 from './riwayat/Screen_Konsultasi'
  import Screen1 from './PencarianPage.vue'



  // import { riwayat } from 'src/api/prefetch'

  export default {
    // computed: {
    // 	...mapFields({
    // 		tab: 'riwayat.tab',
    // 	}),
    // },
    data() {
      return {
        tab: 'all',
      }
    },
    watch: {
      tab() {
        // riwayat(this.$store, this.$route)
      }
    },
    components: {
      Screen1,
    },
  };
  </script>

  <style type="text/css" >
  .sticky {
      position: -webkit-sticky;
      position: sticky;
      top: 100;
  }
  </style>
