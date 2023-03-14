<template>
<q-item class="q-px-sm">
  <q-item-section side>
    <q-item-label>
      <!-- <q-btn v-if="!is_mobile_size && !leftDrawerOpen" @click="leftDrawerOpen = !leftDrawerOpen" flat color="grey" round icon="menu"></q-btn>       		 -->
      <q-avatar class="q-ml-sm" @click="leftDrawerOpen = !leftDrawerOpen">
        <img :src="img_renewable">
      </q-avatar>
    </q-item-label>
  </q-item-section>
  <q-item-section>
    <q-item-label class="">
      <Regency />
    </q-item-label>
  </q-item-section>
  <q-item-section side>
    <q-item-label>
      <q-btn :to="{ name: 'riwayat',
		          params: {
		            page: riwayat_page
		          }
		        }"
            color="grey"
            flat
            round
            icon="o_assignment">
          <!-- <q-badge floating color="red" rounded /> -->
      </q-btn>
      <!-- <q-btn v-if="!is_mobile_size" @click="leftDrawerOpen = !leftDrawerOpen" flat color="grey" round icon="menu"></q-btn>       		 -->
    </q-item-label>
  </q-item-section>
</q-item>

</template>

<script type="text/javascript">


export default {
	computed: {
	    // ...mapFields({
			// leftDrawerOpen: 'layout.local.leftDrawerOpen',

      //       riwayat_page: 'riwayat.index.data.payload.current_page',
	    // }),
  	},
};

</script>
