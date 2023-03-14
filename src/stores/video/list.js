import { defineStore } from 'pinia';
import axios from 'axios'
import { useRouterStore } from 'src/stores/router-store'
import { Loading, Notify, Cookies, QSpinnerClock, Platform } from 'quasar'

function errorNotify() {
  Notify.create({
    message: 'Proses Gagal',
    caption: 'something error happened',
    color: 'negative',
    icon: 'highlight_off',
    position: 'top',
  })
}

const route = useRouterStore()

const content = {
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

export const useVideoListStore = defineStore('video-list', {
  state: () => ({
    content,
    loading: false,
    loading_post: false,
    loading_follow: false,
    loading_liked: false,
    loading_bookmarked: false,
    loading_comment: false,
    loading_delete: false,
    loading_delete_comment: false,
    init: false,
  }),
  getters: {
    get_current_page: (state) => state.content?.current_page,
    get_data: (state) => state.content?.data,
    get_first_page_url: (state) => state.content?.first_page_url,
    get_from: (state) => state.content?.from,
    get_last_page: (state) => state.content?.last_page,
    get_last_page_url: (state) => state.content?.last_page_url,
    get_links: (state) => state.content?.links,
    get_next_page_url: (state) => state.content?.next_page_url,
    get_path: (state) => state.content?.path,
    get_per_page: (state) => state.content?.per_page,
    get_prev_page_url: (state) => state.content?.prev_page_url,
    get_to: (state) => state.content?.to,
    get_total: (state) => state.content?.total,
  },
  actions: {

    async request (payload = null) {
      console.log(route.getParams)
      if(this.loading) return

      // const { parent_id } = route.getParams // gak support preFetch

      this.loading = true
      const results = await axios.get(`http://localhost:8000/api/video?page=${payload.page}`)
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading = false
      this.init = true
      if(!results) return

      if(results.data.payload.content.data.length > 0) this.content = results.data.payload.content
    },

    async follow (payload = null) {

      if(this.loading_follow) return

      this.loading_follow = true

      const results = await axios({
        method: 'post',
        url: `http://localhost:8000/api/video/follow/${payload.user_id}`,
      })
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_follow = false

      if(!results) return

      const content = this.content.data

      for (let i = 0; i < content.length; i++) {
        const element = content[i];
        if(element.user_id == results.data.payload.check.user_id) {
          if(results.data.payload.status == 'add') {
            element.user.follow = true
          }
          if(results.data.payload.status == 'remove') {
            element.user.follow = false
          }
        }
      }
    },
    async bookmarked (payload = null) {
      console.log(payload)
      if(this.loading_bookmarked) return

      this.loading_bookmarked = true

      const results = await axios({
        method: 'post',
        url: `http://localhost:8000/api/video/bookmarked/${payload.post_id}`,
      })
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_bookmarked = false

      if(!results) return

      const content = this.content.data
      content[payload.index].bookmarked = results.data.payload.bookmarked
      content[payload.index].bookmarked_total = results.data.payload.bookmarked_total
    },
    async liked (payload = null) {
      console.log(payload)
      if(this.loading_liked) return

      this.loading_liked = true

      const results = await axios({
        method: 'post',
        url: `http://localhost:8000/api/video/liked/${payload.post_id}`,
      })
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_liked = false

      if(!results) return

      const content = this.content.data
      content[payload.index].liked = results.data.payload.liked
      content[payload.index].liked_total = results.data.payload.liked_total
    },
    async comment (payload = null) {
      console.log(payload)

      if(this.loading_comment) return

      // const { post_id, parent_id } = route.getParams

      let formData = new FormData();
      formData.append('comment', payload.input_comment)
      formData.append('post_id', payload.post_id)
      formData.append('parent_id', payload.parent_id)
      formData.append('replied_id', payload.replied_id)

      this.loading_comment = true

      const results = await axios({
        method: 'post',
        url: `http://localhost:8000/api/video/comment`,
        data: formData
      })
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_comment = false

      if(!results) return

      const content = this.content.data
      content[payload.index].comments.unshift(results.data.payload.comment)
      content[payload.index].commented_total = results.data.payload.commented_total

      return true
      // this.content.data.unshift(results.data.payload.reply)
      // this.content.total++
    },
    async delete (payload = null) {

      if(this.loading_delete) return

      this.loading_delete = true

      const results = await axios({
        method: 'post',
        url: `http://localhost:8000/api/video/delete/${payload.post_id}`,
      })
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_delete = false

      if(!results) return

      const content = this.content.data
      content.splice(payload.index, 1)

    },

    async delete_comment (payload = null) {

      if(this.loading_delete_comment) return

      this.loading_delete_comment = true

      let formData = new FormData();
      formData.append('parent_index', payload.parent_index)
      formData.append('parent_id', payload.parent_id)

      const results = await axios({
        method: 'post',
        url: `http://localhost:8000/api/video/delete-comment/${payload.post_id}`,
        data: formData
      })
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_delete_comment = false

      if(!results) return

      const content = this.content.data
      if(content[payload.parent_index].comments.length <= 3) {
        content[payload.parent_index].comments = results.data.payload.comment
      } else {
        content[payload.parent_index].comments.splice(payload.index, 1)
      }
      content[payload.parent_index].commented_total = results.data.payload.commented_total
    },














    async request_more () {
      if(this.loading) return

      const next_page = this.content.last_page > this.content.current_page ? (Number(this.content.current_page) + 1) : this.content.last_page

      this.loading = true

      const results = await axios.get(`http://localhost:8000/api/video?page=${next_page}`)
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading = false
      if(!results) return

      const response = results.data.payload.content

      this.content = {
        current_page: response.current_page,
        first_page_url: response.first_page_url,
        data: [
          ...this.content.data,
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
    },












    // async request_reset (payload = null) {
    //   if(this.loading) return

    //   const { post_id, parent_id } = route.getParams

    //   this.loading = true
    //   const results = await axios.get(`http://localhost:8000/api/video/komentar-semua/${post_id}/${parent_id}?page=1`)

    //   this.loading = false
    //   if(!results) return

    //   if(results.data.payload.content.data.length > 0) this.reply = results.data.payload.reply
    //   // if(results.data.payload.comment) this.comment = results.data.payload.comment
    // },

    // async request_delete (payload = null) {
    //   console.log(payload)

    //   if(this.loading_post) return

    //   this.loading_post = true

    //   const results = await axios({
    //     method: 'post',
    //     url: `http://localhost:8000/api/video/komentar-semua/${payload.id}/delete`,
    //   })
    //   .catch(err => {
    //     Notify.create({
    //       message: 'Proses Gagal',
    //       color: 'negative',
    //       icon: 'highlight_off',
    //       position: 'top',
    //     })
    //     return null
    //   })

    //   this.loading_post = false

    //   if(!results) return

    //   this.content.data.splice(payload.index, 1)
    //   this.content.total--

    // },

    // async request_input (payload = null) {
    //   console.log(this.loading_post)

    //   if(this.loading_post) return

    //   const { post_id, parent_id } = route.getParams

    //   let formData = new FormData();
    //   formData.append('comment', this.text_komentar) // ambil langsung dari this.text_komentar hasilnya kosong
    //   // formData.append('post_id', post_id)
    //   // formData.append('parent_id', parent_id)
    //   // formData.append('sandi', sandi)
    //   // formData.append('sandi_konfirmasi', sandi_konfirmasi)

    //   this.loading_post = true
    //   const results = await axios({
    //     method: 'post',
    //     url: `http://localhost:8000/api/video/komentar-semua/${post_id}/${parent_id}/input`,
    //     data: formData
    //   })
    //   .catch(err => {
    //     Notify.create({
    //       message: 'Proses Gagal',
    //       color: 'negative',
    //       icon: 'highlight_off',
    //       position: 'top',
    //     })
    //     // Loading.hide()
    //     return null
    //   })
    //   this.loading_post = false

    //   if(!results) return

    //   this.text_komentar = ""

    //   this.content.data.unshift(results.data.payload.reply)
    //   this.content.total++
    // },


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
