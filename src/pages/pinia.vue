<template>
  <div>
    {{ datea }}
    /////
    {{ dateb }}
  </div>
</template>

<script lang="ts">
import { useDemoAStore } from 'src/stores/demoa';
import { useDemoBStore } from 'src/stores/demob';
import { defineComponent } from 'vue';
import { preFetch } from 'quasar/wrappers';

export default defineComponent({
  preFetch: preFetch(async ({ store }) => {
    const demoAStore = useDemoAStore(store);
    const demoBStore = useDemoBStore(store);
    await demoAStore.fetch();
    await demoBStore.fetch();
  }),
});
</script>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

const demoAStore = useDemoAStore();
const demoBStore = useDemoBStore();

const { datea } = storeToRefs(demoAStore);
const { dateb } = storeToRefs(demoBStore);
</script>
