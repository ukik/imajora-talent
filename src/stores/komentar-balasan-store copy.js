import { defineStore } from 'pinia';
import axios from 'axios'
import { init } from './komentar/mutations';
// import { BlogDetailInterface } from 'src/models/blog';

const reply = {
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

const comment = {
  id:'',
  id_user:'',
  parent_id:'',
  konten:'',
  diblokir:'',
  created_at:'',
  updated_at:'',
}

// interface AddressItem {
//   id:number,
//   first_name:string,
//   last_name:string,
//   email:string,
//   phone_number:string,
//   company:string,
//   address_1:string,
//   address_2:string,
//   country:string,
//   region:string,
//   kota_asal:string,
//   kode_pos:number | null | undefined,
// }

// interface AddressInterface extends Array<AddressItem>{}

export const useKomentarBalasanStore = defineStore('komentar-balasan', {
  state: () => ({

    comment: comment,
    reply: reply,

    // komentar: [],
    // paginate,
    loading: false,
    // last_id: null,
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
    get_reply_data (state) {
      return state.reply?.data
    },
    get_comment (state) {
      return state.comment
    },
    get_reply_paginate_total (state) {
      return state.reply?.total
    },
    get_loading (state) {
      return state.loading
    },
  },
  actions: {
    async init ({ comment, reply }) {
      this.comment = comment
      this.reply = reply
    },
    async request () {

      if(this.loading) return

      this.loading = true
      const results = await axios.get("http://localhost:8000/api/comments/reply")

      this.loading = false
      this.init = true
      if(!results) return

      this.reply = results.data.payload.reply
      this.comment = results.data.payload.comment
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
