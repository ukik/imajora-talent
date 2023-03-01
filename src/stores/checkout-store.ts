import { defineStore } from 'pinia';

export const useCheckoutStore = defineStore('checkout', {
  state: () => ({
    taxes: 11.5,
    shipping:0.015,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    // increment() {
    //   this.counter++;
    // },
  },
});
