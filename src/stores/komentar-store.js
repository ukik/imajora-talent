import { defineStore } from 'pinia';
import axios from 'axios'

const comments = {
	current_page: null,
  data:[],
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
    comments: comments,
    loading: false,
    init: false,
  }),
  getters: {
    // get_items: (state) => state.alamat,
    // get_reset_prefetch (state) {
    //   return state.reset_prefetch
    // },

    get_comments (state) {
      return state.comments.data
    },

    get_total (state) {
      return state.comments.total
    },

    // get_loading (state) {
    //   return state.loading
    // },
  },
  actions: {
    async request (payload = null) {
      if(this.loading) return

      this.loading = true
      const results = await axios.get("http://localhost:8000/api/comments")

      this.loading = false
      this.init = true
      if(!results) return

      this.comments = results.data.payload.comments
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
