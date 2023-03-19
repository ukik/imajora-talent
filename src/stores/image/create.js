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


export const useImageListStore = defineStore('image-create', {
  state: () => ({
    id: '',
    description: '',
    cover: [],
    file_cover: [],
    status: '0',
    max: 5,
    loading: false,
    loading_create: false,

  }),
  actions: {

    async form_edit (payload = null) {

      if(this.loading) return

      if(!payload.id) return
      // const { parent_id } = route.getParams // gak support preFetch

      this.loading = true

      const results = await axios.get(`api/image/form/${payload.id}`)
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading = false

      // console.log(results)

      if(!results) return
      if(!results.data.payload.detail) {
        this.router.replace({ name:'image_create' })
        return false
      }

      // const file = results.data.payload.detail.file
      const images = results.data.payload.detail.images
      const description = results.data.payload.detail.description
      const id = results.data.payload.detail.id
      const status = results.data.payload.detail.status

      let arr = []
      images.forEach(element => {
        arr.push({
          file: host+element.file,
          id: element.id
        })
      });

      // this.media = file ? host+file : null
      this.cover = images.length > 0 ? arr : []
      this.description = description ? description : null
      this.id = id ? id : null
      this.status = status ? status : '0'
    },

    async form_create (payload = null) {

      if(this.loading_create) return

      let formData = new FormData();
      // formData.append('media', this.file_media)

      for (let i = 0; i < this.file_cover.length; i++) {
        formData.append('cover[]', this.file_cover[i]);
      }
      formData.append('description', this.description)

      this.loading_create = true

      const results = await axios({
        method: 'post',
        url: `api/image/form/create/${payload.id}`,
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
        // console.log(this.cover)
        // console.log(this.file_cover)
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
        url: `api/image/form/delete-cover/${payload.id}`,
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
        url: `http://localhost:8000/api/image/form/delete/${payload.id}`,
      })
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_create = false

      if(!results) return

      this.id = null
      this.description = null
      this.cover = null
      this.file_cover = null

      this.router.replace({
        name:'image_create'
      })

      successNotify()

      return true
    },

  },
});
