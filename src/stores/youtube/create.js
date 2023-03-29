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


export const useYoutubeListStore = defineStore('youtube-create', {
  state: () => ({
    id: null,
    file: '',
    description: null,
    status: '0',
    link: null,
    is_error: true,
    tags: null,
    genre: null,
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

      const results = await axios.get(`api/youtube/form/${payload.id}`)
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading = false

      // console.log(results)

      if(!results) return
      if(!results.data.payload.detail) {
        this.router.replace({ name:'youtube_create' })
        return false
      }

      const file = results.data.payload.detail.file
      const description = results.data.payload.detail.description
      const id = results.data.payload.detail.id
      const status = results.data.payload.detail.status

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


      this.file = file ? file : ''
      this.link = file ? file : null
      this.is_error = file ? false : true
      this.description = description ? description : null
      this.id = id ? id : null
      this.status = status ? status : '0'
    },

    async form_create (payload = null) {

      if(!this.file) return

      if(this.loading_create) return

      let formData = new FormData();
      formData.append('file', !this.file ? '' : this.file)
      formData.append('description', !this.description ? '' : this.description)
      formData.append('tags', !this.tags ? [] : this.tags)
      formData.append('genre', !this.genre ? [] : this.genre)

      this.loading_create = true

      const results = await axios({
        method: 'post',
        url: `api/youtube/form/create/${payload.id}`,
        data: formData
      })
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_create = false

      if(!results) return

      successNotify()

      // this.id = null
      // this.file = ''
      // this.description = null
      // this.status = '0'
      // this.link = null
      // this.is_error = true

      console.log('CREATE', results.data.payload?.content.id)

      this.router.replace({
        name:'youtube_edit',
        params: {
          id: results.data.payload?.content.id
        }
      })

      // return results.data.payload?.content
    },

    async form_delete (payload = null) {

      if(this.loading_create) return

      this.loading_create = true

      const results = await axios({
        method: 'post',
        url: `api/youtube/form/delete/${payload.id}`,
      })
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_create = false

      if(!results) return

      this.id = null
      this.file = ''
      this.description = null
      this.status = '0'
      this.link = null
      this.is_error = true
      this.tags = null
      this.genre = null

      this.router.replace({
        name:'youtube_create'
      })

      successNotify()

      return true
    },

  },
});
