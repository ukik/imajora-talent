import { defineStore } from 'pinia';
import axios from 'axios'
// import { BlogDetailInterface } from 'src/models/blog';

const paginate = {
	current_page: null,
	first_page_url: null,
	from: null,
	last_page: null,
	last_page_url: null,
	links: null,
	next_page_url: null,
	path: null,
	per_page: null,
	prev_page_url: null,
	to: null,
	total: null,
}


export const useKomentarStore = defineStore('komentar', {
  state: () => ({
    reset_prefetch: 0,
    komentar: [],
    paginate,
    loading: false,
    last_id: null,
    init: false,

    // alamat: <AddressInterface> [
    //   {
    //     id:0,
    //     first_name:'xxx',
    //     last_name:'xxxx',
    //     email:'xxxxxx',
    //     phone_number:'xxxx',
    //     company:'xxxx',
    //     address_1:'xxxx',
    //     address_2:'xxxx',
    //     country:'xxxx',
    //     region:'xxxx',
    //     kota_asal:'xxxx',
    //     kode_pos:1245,
    //   }
    // ],
  }),
  getters: {
    // get_items: (state) => state.alamat,
    get_reset_prefetch (state) {
      return state.reset_prefetch
    },

    get_komentar (state) {
      return state.komentar
    },

    get_paginate (state) {
      return state.paginate
    },

    get_loading (state) {
      return state.loading
    },


  },
  actions: {
    async action_payload () {

      // Reset data hasil prefetch
      // if(!pull_refresh) {
      //   if(state.reset_prefetch > 0) {
      //     let reset_prefetch = state.reset_prefetch

      //     reset_prefetch--

      //     await commit('reset_prefetch', reset_prefetch)
      //     return
      //   }
      // }

      // default options
      // Loading.show()

      this.loading = true
      const results = await axios.get("http://localhost:8000/api/comments")

      this.loading = false
      this.init = true
      if(!results) return

      const response = results.data.payload

      const paginate = {
        current_page: response.current_page,
        first_page_url: response.first_page_url,
        from: response.from,
        last_page: response.last_page,
        last_page_url: response.last_page_url,
        links: response.links,
        next_page_url: response.next_page_url,
        path: response.path,
        per_page: response.per_page,
        prev_page_url: response.prev_page_url,
        to: response.to,
        total: response.total,
      }

      // this.last_id = id
      this.komentar = response.data
      this.paginate = paginate
      // this.reset_prefetch = prefetch_refresh

      console.log('xxxxxxxxx', this.komentar)
      // Loading.hide()
    },

    async action_payload_more ({ page, segment, id, tag }) {

      const results = await axios.get("http://localhost:8000/api/comments")

      const response = results.data.data_1

      const paginate = {
        current_page: response.current_page,
        first_page_url: response.first_page_url,
        from: response.from,
        last_page: response.last_page,
        last_page_url: response.last_page_url,
        links: response.links,
        next_page_url: response.next_page_url,
        path: response.path,
        per_page: response.per_page,
        prev_page_url: response.prev_page_url,
        to: response.to,
        total: response.total,
      }

      response.data['tag'] = tag

      // await commit('set_komentar_more', response.data)
      // const tag = response.data.tag

      // delete payload['tag']

      // if(tag == 'by_scroll') {
      // const data = [
      //   ...state.komentar,
      //   ...payload
      // ]
      // state.komentar = data
      // } else if(tag == 'by_paginate') {
      //     state.komentar = payload
      // }

      this.paginate = paginate
    },

    async clean () {
      this.komentar = []
    },

    async paginate_total (payload) {
      this.paginate.total = payload
    },

    async update (payload) {
      this.komentar.unshift(payload)
    },
  },
});
