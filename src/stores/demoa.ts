import { defineStore, PiniaCustomProperties } from 'pinia';
import { ref } from 'vue';
import axios from 'axios'
export const useDemoAStore = defineStore('demoa', () => {
  const datea = ref('');

  async function fetch(this: StoreDemoA) {
    const { data } = await axios.get('http://localhost:8000/api/comments/reply');
    datea.value = data;
  }
  return {
    datea,
    fetch,
  };
});
type StoreDemoA = ReturnType<typeof useDemoAStore>;
