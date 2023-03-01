import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout_store', {
  state: () => ({
    announce: false,
  }),
  getters: {
    getAnnounce: (state) => state.announce,
  },
  actions: {
    onAnnounce(val:boolean) {
      this.announce = val
      // console.log('xx',this.announce)
    },
  },
});
