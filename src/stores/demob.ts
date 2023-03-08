import { defineStore } from 'pinia';

export const useDemoBStore = defineStore('demob', {
  state: () => ({
    dateb: '',
  }),
  actions: {
    async fetch() {
      const { data } = await this.api.get('/ping');
      this.dateb = data.date;
    },
  },
});
