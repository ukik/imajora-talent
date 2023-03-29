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


export const useAudioListStore = defineStore('audio-create', {
  state: () => ({
    id: '',
    description: '',
    media: null,
    cover: null,
    file_media: null,
    file_cover: null,
    status: '0',
    tags: null,
    genre: null,
    title: null,
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

      const results = await axios.get(`api/audio/form/${payload.id}`)
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
      const status = results.data.payload.detail.status
      const title = results.data.payload.detail.title

      const tags = results.data.payload.detail.tagged
      let arr = []
      tags.forEach(element => {
        arr.push(element.tag_name.toLowerCase())
      });
      this.tags = arr.length > 0 ? arr : []

      const genre = results.data.payload.detail.music_genre_tagged
      let genres = []
      genre.forEach(element => {
        genres.push(element.tag_name.toLowerCase())
      });
      this.genre = genres.length > 0 ? genres : []


      this.media = file ? host+file : null
      this.cover = cover ? host+cover : null
      this.description = description ? description : null
      this.id = id ? id : null
      this.status = status ? status : '0'
      this.title = title ? title : null
    },

    async form_create (payload = null) {


      if(!this.file_media) return

      if(this.loading_create) return

      let formData = new FormData();
      formData.append('media', !this.file_media ? '' : this.file_media)
      formData.append('cover', !this.file_cover ? '' : this.file_cover)
      formData.append('description', !this.description ? '' : this.description)
      formData.append('tags', !this.tags ? [] : this.tags)
      formData.append('genre', !this.genre ? [] : this.genre)
      formData.append('title', !this.title ? '' : this.title)

      this.loading_create = true

      const results = await axios({
        method: 'post',
        url: `api/audio/form/create/${payload.id}`,
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
      if(!this.id) { // form CREATE
        if(payload.type == 'media') {
          this.media = null
          this.file_media = null
        } else if (payload.type == 'cover') {
          this.cover = null
          this.file_cover = null
        }
        return true
      }

      if(this.loading_create) return

      this.loading_create = true

      const results = await axios({
        method: 'post',
        url: `api/audio/form/delete-${payload.type}/${payload.id}`,
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
        url: `api/audio/form/delete/${payload.id}`,
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
      this.tags = null
      this.genre = null
      this.title = null

      this.router.replace({
        name:'video_create'
      })

      successNotify()

      return true
    },

  },
});
