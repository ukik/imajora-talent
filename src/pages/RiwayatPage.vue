<template>

<!-- <q-tabs
  v-model="tab"
  inline-label
  indicator-color="primary"
  :align="is_mobile_size ? 'justify' : 'justify'"
  active-color="white"
  class="bg-white text-white sticky"
>
  <q-tab name="1"
  	:class="tab == '1' ? 'bg-primary' : 'bg-blue-6'" label="Berminat" />
  <q-tab name="2"
  	:class="tab == '2' ? 'bg-primary' : 'bg-blue-6'"  label="Konsultasi" />
  <q-tab name="3"
  	:class="tab == '3' ? 'bg-primary' : 'bg-blue-6'"  label="Dibeli" />
</q-tabs> -->
<q-no-ssr>
<q-tab-panels swipeable infinite v-model="tab" animated>
  <q-tab-panel class="q-pa-none q-ma-none" name="all">
		<Screen1 />
  </q-tab-panel>
  <q-tab-panel class="q-pa-none q-ma-none" name="pending">
		<Screen1 />
  </q-tab-panel>
  <q-tab-panel class="q-pa-none q-ma-none" name="proses">
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
// import Tab1 from './riwayat/Screen_Dibeli'



import { riwayat } from 'src/api/prefetch'

export default {
	// computed: {
	// 	...mapFields({
	// 		tab: 'riwayat.tab',
	// 	}),
	// },
  data() {
    return {
      tab: 'berminat',
    }
  },
  watch: {
    tab() {
      riwayat(this.$store, this.$route)
    }
  },
	components: {
		Screen1: () => import("./PencarianPage.vue"),
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
