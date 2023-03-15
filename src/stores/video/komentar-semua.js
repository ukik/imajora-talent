import { defineStore } from 'pinia';
import axios from 'axios'
import { useRouterStore } from 'src/stores/router-store'
import { Loading, Notify, Cookies, QSpinnerClock, Platform } from 'quasar'

const route = useRouterStore()

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
  user_id:'',
  post_id:'',
  parent_id:'',
  comment:'',
  diblokir:'',
  created_at:'',
  updated_at:'',
  name:'',
}

export const useKomentarSemuaStore = defineStore('komentar-semua', {
  state: () => ({
    text_komentar: null,
    comment: comment,
    reply: reply,
    loading: false,
    loading_post: false,
    init: false,
  }),
  getters: {
    get_comment: (state) => state.comment,

    get_reply_current_page: (state) => state.reply?.current_page,
    get_reply_data: (state) => state.reply?.data,
    get_reply_first_page_url: (state) => state.reply?.first_page_url,
    get_reply_from: (state) => state.reply?.from,
    get_reply_last_page: (state) => state.reply?.last_page,
    get_reply_last_page_url: (state) => state.reply?.last_page_url,
    get_reply_links: (state) => state.reply?.links,
    get_reply_next_page_url: (state) => state.reply?.next_page_url,
    get_reply_path: (state) => state.reply?.path,
    get_reply_per_page: (state) => state.reply?.per_page,
    get_reply_prev_page_url: (state) => state.reply?.prev_page_url,
    get_reply_to: (state) => state.reply?.to,
    get_reply_total: (state) => state.reply?.total,

    // get_text_komentar: (state) => state.text_komentar
  },
  actions: {

    async request (payload = null) {
      console.log(route.getParams)
      if(this.loading) return

      // const { parent_id } = route.getParams // gak support preFetch

      this.loading = true
      const results = await axios.get(`http://localhost:8000/api/video/komentar-semua/${payload.post_id}/${payload.parent_id}`)

      this.loading = false
      this.init = true
      if(!results) return

      if(results.data.payload.reply.data.length > 0) this.reply = results.data.payload.reply
      if(results.data.payload.comment) this.comment = results.data.payload.comment
    },

    async request_more () {
      if(this.loading) return

      const { post_id, parent_id } = route.getParams

      const next_page = this.reply.last_page > this.reply.current_page ? (Number(this.reply.current_page) + 1) : this.reply.last_page

      this.loading = true
      const results = await axios.get(`http://localhost:8000/api/video/komentar-semua/${post_id}/${parent_id}/more?page=${next_page}`)
      this.loading = false
      if(!results) return


      const response = results.data.payload.reply

      this.reply = {
        current_page: response.current_page,
        first_page_url: response.first_page_url,
        data: [
          ...this.reply.data,
          ...response.data,
        ],
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

      console.log(this.reply)
      // this.reply.data.push(response.data)
    },

    async request_reset (payload = null) {
      if(this.loading) return

      const { post_id, parent_id } = route.getParams

      this.loading = true
      const results = await axios.get(`http://localhost:8000/api/video/komentar-semua/${post_id}/${parent_id}?page=1`)

      this.loading = false
      if(!results) return

      if(results.data.payload.reply.data.length > 0) this.reply = results.data.payload.reply
      // if(results.data.payload.comment) this.comment = results.data.payload.comment
    },

    async request_delete (payload = null) {
      console.log(payload)

      if(this.loading_post) return

      this.loading_post = true

      const results = await axios({
        method: 'post',
        url: `http://localhost:8000/api/video/komentar-semua/${payload.id}/delete`,
      })
      .catch(err => {
        Notify.create({
          message: 'Proses Gagal',
          color: 'negative',
          icon: 'highlight_off',
          position: 'top',
        })
        return null
      })

      this.loading_post = false

      if(!results) return

      this.reply.data.splice(payload.index, 1)
      this.reply.total--

    },

    async request_input (payload = null) {
      console.log(this.loading_post)

      if(this.loading_post) return

      const { post_id, parent_id } = route.getParams

      let formData = new FormData();
      formData.append('comment', this.text_komentar) // ambil langsung dari this.text_komentar hasilnya kosong
      // formData.append('post_id', post_id)
      // formData.append('parent_id', parent_id)
      // formData.append('sandi', sandi)
      // formData.append('sandi_konfirmasi', sandi_konfirmasi)

      this.loading_post = true
      const results = await axios({
        method: 'post',
        url: `http://localhost:8000/api/video/komentar-semua/${post_id}/${parent_id}/input`,
        data: formData
      })
      .catch(err => {
        Notify.create({
          message: 'Proses Gagal',
          color: 'negative',
          icon: 'highlight_off',
          position: 'top',
        })
        // Loading.hide()
        return null
      })
      this.loading_post = false

      if(!results) return

      this.text_komentar = ""

      this.reply.data.unshift(results.data.payload.reply)
      this.reply.total++
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
