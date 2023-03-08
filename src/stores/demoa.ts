import { defineStore, PiniaCustomProperties } from 'pinia';
import { ref } from 'vue';

export const useDemoAStore = defineStore('demoa', () => {
  const datea = ref('');

  async function fetch(this: StoreDemoA) {
    const { data } = await this.api.get('/ping');
    datea.value = data.date;
  }
  return {
    datea,
    fetch,
  };
});
type StoreDemoA = ReturnType<typeof useDemoAStore>;
