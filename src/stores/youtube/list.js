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

const comment = {
  id: '',
  post_id: '',
  user_id: '',
  parent_id: '',
  replied_id: '',
  comment: '',
  diblokir: '',
  created_at: '',
  updated_at: '',
  pressed: false,
  lines: 0,
  user: {
    id: '',
    name: "",
    role: "",
    avatar: null,
    follow: null,
  },
  replied: {
    id: '',
    name: "",
    role: "",
    avatar: null
  }
}

const detail = {
  id: '',
  user_id: '',
  file: '',
  description: '',
  created_at: '',
  updated_at: '',
  liked_total: null,
  visited_total: null,
  shared_total: null,
  commented_total: null,
  bookmarked_total: null,
  liked: null,
  visited: null,
  shared: null,
  commented: null,
  bookmarked: null,
  follow: null,
  comments: [],
  user: {
    id: "",
    name: "",
    role: "",
    avatar: null,
    follow: null,
  },
}



export const useYoutubeListStore = defineStore('youtube-list', {
  state: () => ({
    text_komentar_balasan:'',
    text_komentar_semua: '',

    balasan_comment: comment,
    detail,

    content,
    comments,
    reply,

    loading: false,
    loading_post: false,
    loading_follow: false,
    loading_liked: false,
    loading_bookmarked: false,
    loading_comment: false,
    loading_delete: false,
    loading_delete_comment: false,

    loading_komentar_balasan: false,
    loading_komentar_balasan_follow: false,
    loading_komentar_balasan_comment: false,
    loading_komentar_balasan_delete: false,
    loading_komentar_balasan_delete_comment: false,


    loading_komentar_semua: false,
    loading_komentar_semua_follow: false,
    loading_komentar_semua_comment: false,
    loading_komentar_semua_delete: false,
    loading_komentar_semua_delete_comment: false,
  }),
  getters: {
    get_comment: (state) => state.balasan_comment,
    get_detail: (state) => state.detail,

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

    get_comments_current_page: (state) => state.comments?.current_page,
    get_comments_data: (state) => state.comments?.data,
    get_comments_first_page_url: (state) => state.comments?.first_page_url,
    get_comments_from: (state) => state.comments?.from,
    get_comments_last_page: (state) => state.comments?.last_page,
    get_comments_last_page_url: (state) => state.comments?.last_page_url,
    get_comments_links: (state) => state.comments?.links,
    get_comments_next_page_url: (state) => state.comments?.next_page_url,
    get_comments_path: (state) => state.comments?.path,
    get_comments_per_page: (state) => state.comments?.per_page,
    get_comments_prev_page_url: (state) => state.comments?.prev_page_url,
    get_comments_to: (state) => state.comments?.to,
    get_comments_total: (state) => state.comments?.total,
  },
  actions: {

    async request (payload = null) {

      if(this.loading) return

      // const { parent_id } = route.getParams // gak support preFetch

      this.loading = true

      const results = await axios.get(`api/audio?page=${payload.page}`)
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading = false

      if(!results) return

      if(results.data.payload.content?.data.length > 0) this.content = results.data.payload.content
    },
    async request_more () {
      if(this.loading) return

      const next_page = this.content.last_page > this.content.current_page ? (Number(this.content.current_page) + 1) : this.content.last_page

      this.loading = true

      const results = await axios.get(`api/audio?page=${next_page}`)
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
    async follow (payload = null) {

      if(this.loading_follow) return

      this.loading_follow = true

      const results = await axios({
        method: 'post',
        url: `api/audio/follow/${payload.user_id}`,
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

      if(this.loading_bookmarked) return

      this.loading_bookmarked = true

      const results = await axios({
        method: 'post',
        url: `api/audio/bookmarked/${payload.post_id}`,
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

      if(this.loading_liked) return

      this.loading_liked = true

      const results = await axios({
        method: 'post',
        url: `api/audio/liked/${payload.post_id}`,
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

      if(this.loading_comment) return

      let formData = new FormData();
      formData.append('comment', payload.input_comment)
      formData.append('post_id', payload.post_id)
      formData.append('parent_id', payload.parent_id)
      formData.append('replied_id', payload.replied_id)

      this.loading_comment = true

      const results = await axios({
        method: 'post',
        url: `api/audio/comment`,
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
    },
    async delete (payload = null) {

      if(this.loading_delete) return

      this.loading_delete = true

      const results = await axios({
        method: 'post',
        url: `api/audio/delete/${payload.post_id}`,
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
        url: `api/audio/delete-comment/${payload.post_id}`,
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



    async komentar_balasan (payload = null) {

      if(this.loading_komentar_balasan) return

      // const { parent_id } = route.getParams // gak support preFetch

      this.loading_komentar_balasan = true

      const results = await axios.get(`api/audio/komentar-balasan/${payload.id}?page=${payload.page}`)
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_komentar_balasan = false
      if(!results) return

      if(results.data.payload.reply?.data.length > 0) this.reply = results.data.payload.reply
      if(results.data.payload.comment) this.balasan_comment = results.data.payload.comment
    },
    async komentar_balasan_more (payload = null) {
      if(this.loading_komentar_balasan_more) return

      const next_page = this.reply.last_page > this.reply.current_page ? (Number(this.reply.current_page) + 1) : this.reply.last_page

      this.loading_komentar_balasan_more = true

      const results = await axios.get(`api/audio/komentar-balasan-more/${payload.id}?page=${next_page}`)
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_komentar_balasan_more = false

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
    },
    async komentar_balasan_follow (payload = null) {
      if(this.loading_komentar_balasan_follow) return

      this.loading_komentar_balasan_follow = true

      const results = await axios({
        method: 'post',
        url: `api/audio/follow/${payload.user_id}`,
      })
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_komentar_balasan_follow = false

      if(!results) return

      const comment = this.balasan_comment

      if(comment.user_id == results.data.payload.check.user_id) {
        switch (results.data.payload.status) {
          case 'add':
            this.balasan_comment.user.follow = true
            break;
          case 'remove':
            this.balasan_comment.user.follow = false
            break;
        }
      }

      const content = this.reply.data

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
    async komentar_balasan_comment (payload = null) {

      if(this.loading_komentar_balasan_comment) return

      let formData = new FormData();
      formData.append('comment', this.text_komentar_balasan)
      formData.append('post_id', payload.post_id)
      formData.append('parent_id', payload.parent_id)
      formData.append('replied_id', payload.replied_id)

      this.loading_komentar_balasan_comment = true

      const results = await axios({
        method: 'post',
        url: `api/audio/komentar-balasan-comment`,
        data: formData
      })
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_komentar_balasan_comment = false

      if(!results) return

      const content = this.reply.data
      content.unshift(results.data.payload.comment)

      this.text_komentar_balasan = ''

      return true
    },
    async komentar_balasan_delete (payload = null) {

      if(this.loading_komentar_balasan_delete) return

      this.loading_komentar_balasan_delete = true

      const results = await axios({
        method: 'post',
        url: `api/audio/komentar-balasan-delete/${payload.id}`,
      })
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_komentar_balasan_delete = false

      if(!results) return

      this.reply = reply
      this.balasan_comment = comment
    },
    async komentar_balasan_delete_comment (payload = null) {
      console.log(payload)

      if(this.loading_komentar_balasan_delete_comment) return

      this.loading_komentar_balasan_delete_comment = true

      const results = await axios({
        method: 'post',
        url: `api/audio/komentar-balasan-delete/${payload.id}`,
      })
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_komentar_balasan_delete_comment = false

      if(!results) return

      const content = this.reply.data
      content.splice(payload.index, 1)
    },







    async komentar_semua_follow (payload = null) {

      if(this.loading_follow) return

      this.loading_follow = true

      const results = await axios({
        method: 'post',
        url: `api/audio/follow/${payload.user_id}`,
      })
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_follow = false

      if(!results) return

      const detail = this.detail

      if(detail.user_id == results.data.payload.check.user_id) {
        switch (results.data.payload.status) {
          case 'add':
            this.detail.user.follow = true
            break;
          case 'remove':
            this.detail.user.follow = false
            break;
        }
      }

      const content = this.comments.data

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
    async komentar_semua_bookmarked (payload = null) {

      if(this.loading_bookmarked) return

      this.loading_bookmarked = true

      const results = await axios({
        method: 'post',
        url: `api/audio/bookmarked/${payload.post_id}`,
      })
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_bookmarked = false

      if(!results) return

      const content = this.detail
      content.bookmarked = results.data.payload.bookmarked
      content.bookmarked_total = results.data.payload.bookmarked_total
    },
    async komentar_semua_liked (payload = null) {

      if(this.loading_liked) return

      this.loading_liked = true

      const results = await axios({
        method: 'post',
        url: `api/audio/liked/${payload.post_id}`,
      })
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_liked = false

      if(!results) return

      const content = this.detail
      content.liked = results.data.payload.liked
      content.liked_total = results.data.payload.liked_total
    },
    async komentar_semua (payload = null) {

      if(this.loading_komentar_semua) return

      // const { parent_id } = route.getParams // gak support preFetch

      this.loading_komentar_semua = true

      const results = await axios.get(`api/audio/komentar-semua/${payload.id}?page=${payload.page}`)
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_komentar_semua = false
      if(!results) return

      if(results.data.payload.comments?.data.length > 0) this.comments = results.data.payload.comments
      if(results.data.payload.detail) this.detail = results.data.payload.detail
    },
    async komentar_semua_more (payload = null) {
      if(this.loading_komentar_semua_more) return

      const next_page = this.comments.last_page > this.comments.current_page ? (Number(this.comments.current_page) + 1) : this.comments.last_page

      this.loading_komentar_semua_more = true

      const results = await axios.get(`api/audio/komentar-semua/${payload.id}?page=${next_page}`)
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_komentar_semua_more = false

      if(!results) return

      const response = results.data.payload.comments

      this.comments = {
        current_page: response.current_page,
        first_page_url: response.first_page_url,
        data: [
          ...this.comments.data,
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

    async komentar_semua_comment (payload = null) {

      if(this.loading_komentar_semua_comment) return

      let formData = new FormData();
      formData.append('comment', this.text_komentar_semua)
      formData.append('post_id', payload.post_id)
      formData.append('parent_id', payload.parent_id)
      formData.append('replied_id', payload.replied_id)

      this.loading_komentar_semua_comment = true

      const results = await axios({
        method: 'post',
        url: `api/audio/komentar-semua-comment`,
        data: formData
      })
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_komentar_semua_comment = false

      if(!results) return

      const content = this.comments.data
      content.unshift(results.data.payload.comment)

      this.text_komentar_semua = ''

      return true
    },
    async komentar_semua_delete (payload = null) {
      console.log(payload)

      if(this.loading_komentar_semua_delete_comment) return

      this.loading_komentar_semua_delete_comment = true

      const results = await axios({
        method: 'post',
        url: `api/audio/komentar-semua-delete/${payload.id}`,
      })
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_komentar_semua_delete_comment = false

      if(!results) return

      const content = this.comments.data
      content.splice(payload.index, 1)
    },




  },
});
