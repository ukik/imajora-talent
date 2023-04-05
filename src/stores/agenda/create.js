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


export const useAgendaListStore = defineStore('agenda-create', {
  state: () => ({
    id: '',
    description: '',
    title: '',
    date_start: '',
    date_end: '',
    time_start: '',
    time_end: '',

    cover: [],
    file_cover: [],
    status: '0',
    tags: null,
    // genre: null,
    max: 5,
    loading: false,
    loading_create: false,

  }),
  getters: {
    get_lightbox: (state) => {
      let imgs = []
      state.cover.forEach(element => {
        imgs.push(element.file)
      });
      return imgs
    }
  },
  actions: {

    async form_edit (payload = null) {

      if(this.loading) return

      if(!payload.id) return
      // const { parent_id } = route.getParams // gak support preFetch

      this.loading = true

      const results = await axios.get(`api/agenda/form/${payload.id}`)
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading = false

      // console.log(results)

      if(!results) return
      if(!results.data.payload.detail) {
        this.router.replace({ name:'agenda_create' })
        return false
      }

      // const file = results.data.payload.detail.file
      const images = results.data.payload.detail.images
      const description = results.data.payload.detail.description
      const title = results.data.payload.detail.title
      const date_start = results.data.payload.detail.date_start
      const date_end = results.data.payload.detail.date_end
      const time_start = results.data.payload.detail.time_start
      const time_end = results.data.payload.detail.time_end
      const id = results.data.payload.detail.id
      const status = results.data.payload.detail.status

      let arr = []
      images.forEach(element => {
        if(element.file.includes("http")) {
          arr.push({
            file: element.file,
            id: element.id
          })
        } else {
          arr.push({
            file: host+element.file,
            id: element.id
          })
        }
      });

      const tags = results.data.payload.detail.agenda_tagged
      let arr1 = []
      tags.forEach(element => {
        arr1.push(element.tag_name.toLowerCase())
      });
      this.tags = arr1.length > 0 ? arr1 : []

      // const genre = results.data.payload.detail.music_genre_tagged
      // let genres = []
      // genre.forEach(element => {
      //   genres.push(element.tag_name.toLowerCase())
      // });
      // this.genre = genres.length > 0 ? genres : []

      // this.media = file ? host+file : null
      this.cover = images.length > 0 ? arr : []
      this.description = description ? description : null
      this.title = title ? title : null
      this.date_start = date_start ? date_start : null
      this.date_end = date_end ? date_end : null
      this.time_start = time_start ? time_start : null
      this.time_end = time_end ? time_end : null
      this.id = id ? id : null
      this.status = status ? status : '0'
    },

    async form_create (payload = null) {

      // if(this.file_cover.length <= 0) return
      if (!this.title) return;
      if (!this.date_start) return;
      if (!this.date_end) return;
      if (!this.time_start) return;
      if (!this.time_end) return;

      if(this.loading_create) return

      let formData = new FormData();
      // formData.append('media', this.file_media)

      console.log(this.file_cover)

      for (let i = 0; i < this.file_cover.length; i++) {
        formData.append('cover[]', this.file_cover[i].file);
      }
      formData.append('description', !this.description ? '' : this.description)
      formData.append('title', !this.title ? '' : this.title)
      formData.append('date_start', !this.date_start ? '' : this.date_start)
      formData.append('date_end', !this.date_end ? '' : this.date_end)
      formData.append('time_start', !this.time_start ? '' : this.time_start)
      formData.append('time_end', !this.time_end ? '' : this.time_end)
      formData.append('tags', !this.tags ? [] : this.tags)
      // formData.append('genre', !this.genre ? [] : this.genre)

      this.loading_create = true

      const results = await axios({
        method: 'post',
        url: `api/agenda/form/create/${payload.id}`,
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
      // this.description = null
      // this.cover = null
      // this.file_cover = null

      this.router.replace({
        name:'agenda_create',
        params: {
          id: results.data.payload?.content.id
        }
      })

      // return results.data.payload?.content
    },

    async form_delete_single (payload = null) {
      if(!this.id) { // form CREATE
        this.cover.splice(payload.index, 1)
        this.file_cover.splice(payload.index, 1)
        return true
      }

      if(this.loading_create) return

      this.loading_create = true

      let formData = new FormData();
      formData.append('user_image_file_id', payload?.selected?.id)

      const results = await axios({
        method: 'post',
        url: `api/agenda/form/delete-cover/${payload.id}`,
        data: formData,
      })
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_create = false

      if(!results) return

      this.cover.splice(payload.index, 1)
      this.file_cover.splice(payload.index, 1)

      successNotify()

      return true
    },

    async form_delete (payload = null) {

      if(this.loading_create) return

      this.loading_create = true

      const results = await axios({
        method: 'post',
        url: `api/agenda/form/delete/${payload.id}`,
      })
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_create = false

      if(!results) return

      this.id = null
      this.description = null
      this.title = null
      this.date_start = null
      this.date_end = null
      this.time_end = null
      this.description = null
      this.cover = null
      this.file_cover = null
      this.tags = null
      // this.genre = null

      this.router.replace({
        name:'agenda_create'
      })

      successNotify()

      return true
    },

  },
});
