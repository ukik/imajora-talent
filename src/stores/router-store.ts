import { defineStore } from 'pinia';


export const useRouterStore = defineStore('router', {
  state: () => ({
    route: {
      name:'',
      path:'',
      query:{
        lang:'',
      },
      params:'',
    },
  }),
  getters: {
    getRouter(state) {
      return state.route;
    },
    getName(state) {
      return state.route.name;
    },
    getPath(state) {
      return state.route.path;
    },
    getQuery(state) {
      return state.route.query;
    },
    getParams(state) {
      return state.route.params;
    },
  },
  actions: {
    setRouter(value:any) {
      this.route = value
    },
    whateverAction (value:any) {
      setTimeout(() => {
        // this.router.push(value)
      }, 5000);
    }
  },
});
