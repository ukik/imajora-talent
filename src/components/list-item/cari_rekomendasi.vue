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

  </q-item>
</q-list>	
</template>

<script type="text/javascript">
  export default {
    props: {
      prop_data: {
        default: () => ([]),
      }
    },    
  };
</script>
