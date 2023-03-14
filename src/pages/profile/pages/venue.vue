<template>
  <q-tabs align="center" no-caps outside-arrows :mobile-arrows="is_mobile_size && !is_cordova" dense inline-label
    v-model="tab" :breakpoint="0" class="text-primary col-12 text-weight-regular">
    <q-tab @click="init = true" name="1" icon="home">&nbsp;&nbsp;Detail</q-tab>
    <q-tab @click="init = true" name="2" icon="fa-regular fa-calendar">&nbsp;&nbsp;Agenda</q-tab>
    <q-tab @click="init = true" name="3" icon="fa-solid fa-location">&nbsp;&nbsp;Lokasi</q-tab>
  </q-tabs>
  <q-tab-panels class="col-12 q-mt-sm" v-model="tab" animated>
    <q-tab-panel name="1" class="q-pa-none" style="height: calc(100vh - 150px);">
      <TabContent :init="init"/>
    </q-tab-panel>

    <q-tab-panel name="2" class="q-pa-none" style="height: calc(100vh - 150px);">
      <TabContent :init="init"/>
    </q-tab-panel>

    <q-tab-panel name="3" class="q-pa-none" style="height: calc(100vh - 150px);">
      <TabContent :init="init"/>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script>
import TabContent from "./TabContent.vue"
export default {
  components: {
    TabContent
  },
  data() {
    return {
      tab: '1',
      init: false,
    }
  },
}
</script>
