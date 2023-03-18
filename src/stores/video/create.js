import { defineStore } from 'pinia';
import axios from 'axios'
import { useRouterStore } from 'src/stores/router-store'
import { Loading, Notify, Cookies, QSpinnerClock, Platform } from 'quasar'

import { host } from 'src/boot/common'

function errorNotify() {
  Notify.create({
    message: 'Proses Gagal',
    caption: 'something error happened',
    color: 'negative',
    icon: 'highlight_off',
    position: 'top',
  })
}

function successNotify() {
  Notify.create({
    message: 'Success',
    // caption: 'something error happened',
    color: 'positive',
    icon: 'done',
    position: 'top',
  })
}

const route = useRouterStore()


// const detail = {
//   id: '',
//   user_id: '',
//   file: '',
//   description: '',
//   created_at: '',
//   updated_at: '',
//   liked_total: null,
//   visited_total: null,
//   shared_total: null,
//   commented_total: null,
//   bookmarked_total: null,
//   liked: null,
//   visited: null,
//   shared: null,
//   commented: null,
//   bookmarked: null,
//   follow: null,
//   comments: [],
//   user: {
//     id: "",
//     name: "",
//     role: "",
//     avatar: null,
//     follow: null,
//   },
// }



export const useVideoListStore = defineStore('video-list', {
  state: () => ({
    id: '',

    description: '',

    media: null,
    cover: null,

    file_media: null,
    file_cover: null,

    // detail,

    loading: false,
    loading_create: false,

  }),
  // getters: {
  //   get_detail: (state) => state.detail,
  // },
  actions: {

    async form_edit (payload = null) {

      if(this.loading) return

      if(!payload.id) return
      // const { parent_id } = route.getParams // gak support preFetch

      this.loading = true

      const results = await axios.get(`http://localhost:8000/api/video/form/${payload.id}`)
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading = false

      // console.log(results)

      if(!results) return
      if(!results.data.payload.detail) {
        this.router.replace({ name:'video_create' })
        return false
      }

      const file = results.data.payload.detail.file
      const cover = results.data.payload.detail.cover
      const description = results.data.payload.detail.description
      const id = results.data.payload.detail.id

      this.media = file ? host+file : null
      this.cover = cover ? host+cover : null
      this.description = description ? description : null
      this.id = id ? id : null

    },

    async form_create (payload = null) {

      if(this.loading_create) return

      let formData = new FormData();
      formData.append('media', this.file_media)
      formData.append('cover', this.file_cover)
      formData.append('description', this.description)

      this.loading_create = true

      const results = await axios({
        method: 'post',
        url: `http://localhost:8000/api/video/form/create/${payload.id}`,
        data: formData
      })
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_create = false

      if(!results) return

      successNotify()

      return results.data.payload?.content
    },

    async form_delete_single (payload = null) {

      if(this.loading_create) return

      this.loading_create = true

      const results = await axios({
        method: 'post',
        url: `http://localhost:8000/api/video/form/delete-${payload.type}/${payload.id}`,
      })
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_create = false

      if(!results) return

      if(payload.type == 'media') {
        this.media = null
        this.file_media = null
      } else if (payload.type == 'cover') {
        this.cover = null
        this.file_cover = null
      }

      successNotify()

      return true
    },

    async form_delete (payload = null) {

      if(this.loading_create) return

      this.loading_create = true

      const results = await axios({
        method: 'post',
        url: `http://localhost:8000/api/video/form/delete/${payload.id}`,
      })
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_create = false

      if(!results) return

      this.id = null
      this.description = null
      this.media = null
      this.cover = null
      this.file_media = null
      this.file_cover = null

      this.router.replace({
        name:'video_create'
      })

      successNotify()

      return true
    },

  },
});
