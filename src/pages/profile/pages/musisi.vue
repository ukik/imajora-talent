<template>
  <q-tabs no-caps outside-arrows :mobile-arrows="is_mobile_size && !$is_cordova" dense v-model="tab"
    class="text-pink col-12 text-weight-regular">
    <q-tab @click="init = true" name="4"><q-icon size="sm" name="fa-solid fa-list"
        class="q-mb-xs"></q-icon>Playlist</q-tab>
    <q-tab @click="init = true" name="1"><q-icon size="sm" name="fa fa-drum" class="q-mb-xs"></q-icon>Perform</q-tab>
    <q-tab @click="init = true" name="2"><q-icon size="sm" name="fa-solid fa-microphone-lines"
        class="q-mb-xs"></q-icon>Karir</q-tab>
    <q-tab @click="init = true" name="3"><q-icon size="sm" name="fa-regular fa-calendar"
        class="q-mb-xs"></q-icon>Agenda</q-tab>
    <q-tab @click="init = true" name="5"><q-icon size="sm" name="fa-solid fa-user-check"
        class="q-mb-xs"></q-icon>Original</q-tab>
    <q-tab @click="init = true" name="6"><q-icon size="sm" name="fa-solid fa-guitar"
        class="q-mb-xs"></q-icon>Cover</q-tab>
  </q-tabs>

  <q-tab-panels class="col-12" v-model="tab" animated>
    <q-tab-panel name="1" class="q-pa-none" style="height: calc(100vh - 170px);">
      <TabContent :init="init"/>
    </q-tab-panel>

    <q-tab-panel name="2" class="q-pa-none" style="height: calc(100vh - 170px);">
      <TabContent :init="init"/>
    </q-tab-panel>

    <q-tab-panel name="3" class="q-pa-none" style="height: calc(100vh - 170px);">
      <TabContent :init="init"/>
    </q-tab-panel>

    <q-tab-panel name="4" class="q-pa-none" style="height: calc(100vh - 170px);">
      <TabContent :init="init"/>
    </q-tab-panel>

    <q-tab-panel name="5" class="q-pa-none" style="height: calc(100vh - 170px);">
      <TabContent :init="init"/>
    </q-tab-panel>

    <q-tab-panel name="6" class="q-pa-none" style="height: calc(100vh - 170px);">
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
