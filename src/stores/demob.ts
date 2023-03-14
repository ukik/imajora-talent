import { defineStore } from 'pinia';
import axios from 'axios'
export const useDemoBStore = defineStore('demob', {
  state: () => ({
    dateb: '',
  }),
  actions: {
    async fetch() {
      const { data } = await axios.get('http://localhost:8000/api/comments/reply');
      this.dateb = data;
      console.log(data)
    },
  },
});
