<template>
  <q-toolbar @click="$emit('onBubbleEvent')">

    <q-btn class="col" 
      align="left" unelevated no-caps text-color="grey" color="grey-3" rounded label="Beri komentar..." />

    <q-btn flat readonly color="grey-5" round icon="send" />

  </q-toolbar>  
</template>


<script type="text/javascript">

import { mapFields } from 'vuex-map-fields';

export default {
    computed: {
      ...mapFields({
          // dialog: "konsultasi_detail.dialog",
      }),
    },  
};
</script>

<style type="text/css" scoped>
/*.q-badge.flex.inline.items-center.no-wrap.q-badge--single-line.q-badge--floating {
  font-size: 12px;
  margin-top: 5px;
  background-color: transparent !important;
}   */
</style>