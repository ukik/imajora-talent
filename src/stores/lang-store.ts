import { defineStore } from 'pinia';


export const useLangStore = defineStore('lang', {
  state: () => ({
    locale: 'en-US', // en-US || id-ID
  }),
  getters: {
    getLocale(state) {
      return state.locale;
    },
  },
  actions: {
    setLocale(value:string) {
      this.locale = value;
    },
  },
});
