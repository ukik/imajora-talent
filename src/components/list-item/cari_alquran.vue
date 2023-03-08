<template>
<q-list class="q-pa-none" separator>

  <q-item clickable v-for="(item, index) in prop_data" :key="index" class="q-pa-none">

    <q-item-section class="q-pl-sm" v-ripple="{color: 'grey' }" @click="$emit('onBubbleEvent', item.pencarian)">

      <q-item class="q-pa-none">

        <q-item-section avatar>
          <q-icon name="history" color="grey"/>
        </q-item-section>

        <q-item-section class="q-pr-xl">
          <q-item-label>{{ item.pencarian }}</q-item-label>
        </q-item-section>

      </q-item> 

    </q-item-section>


    <q-item-section side class="absolute-right q-mr-sm">
      <q-btn icon="close" @click="() => onDelete(item.id, index)" size="md" text-color="pink" dense no-caps round  unelevated/>
    </q-item-section>

  </q-item>
</q-list>	
</template>

<script type="text/javascript">
import { mapFields } from "vuex-map-fields"

export default {
    computed: {
      ...mapFields({
        reset_prefetch: "cari.reset_prefetch",    
        data_1: "cari.data_1",    
        loading: "cari.loading",    
        keyword: "cari.keyword",    
      }),
    },  
    props: {
      prop_data: {
        default: () => ([]),
      }
    },    
    methods: {
      onDelete(value, index) {
        this.dispatchVuex('alquran_cari/action_delete', { id: value, index: index })
      },      
    }
  };
</script>
