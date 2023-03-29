import { defineStore } from 'pinia';
import axios from 'axios'
import { useRouterStore } from 'src/stores/router-store'
import { Loading, Notify, Cookies, QSpinnerClock, Platform } from 'quasar'

import { host } from 'src/boot/common'

function errorNotify(caption = 'something error happened') {
  Notify.create({
    message: 'Proses Gagal',
    caption: caption,
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

export const useFormStore = defineStore('forms-accounts-social', {
  state: () => ({
    user: {
      id: '',
      facebook: '',
      tiktok: '',
      youtube: '',
      twitter: '',
      instagram: '',
      pinterest: '',
      website: '',
    },
    loading: false,
    loading_create: false,
  }),
  getters: {
    get_user: (state) => state.user,
  },
  actions: {

    async form_edit (payload = null) {

      if(this.loading) return

      if(!payload.id) return
      // const { parent_id } = route.getParams // gak support preFetch

      this.loading = true

      const results = await axios.get(`api/accounts/social/${payload.id}`)
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading = false

      // console.log(results)

      if(!results) return
      if(!results.data.payload.user) return

      this.user = results.data.payload.user
    },

    async form_create (payload = null) {

      if(this.loading_create) return

      let formData = new FormData();
      // formData.append('user', this.user)
      formData.append('id', !this.user.id ? '' : this.user.id)
      formData.append('facebook', !this.user.facebook ? '' : this.user.facebook)
      formData.append('tiktok', !this.user.tiktok ? '' : this.user.tiktok)
      formData.append('youtube', !this.user.youtube ? '' : this.user.youtube)
      formData.append('twitter', !this.user.twitter ? '' : this.user.twitter)
      formData.append('instagram', !this.user.instagram ? '' : this.user.instagram)
      formData.append('pinterest', !this.user.pinterest ? '' : this.user.pinterest)
      formData.append('website', !this.user.website ? '' : this.user.website)

      this.loading_create = true

      const type = payload.id ? `/${payload.id}` : ''

      const results = await axios({
        method: 'post',
        url: `api/accounts/social/create${type}`,
        data: formData
      })
      .catch(err => {
        console.log(err.response.data?.meta?.message)
        try {
          errorNotify(Object.values(err.response.data?.meta?.message))
        } catch (error) {
          errorNotify()
        }
        return null
      })

      this.loading_create = false

      if(!results) return

      successNotify()

      this.router.replace({
        name:'form_accounts_social',
        params: {
          id: results.data.payload?.user.id
        }
      })

      // return results.data.payload?.content
    },

    async form_delete (payload = null) {

      if(this.loading_create) return

      this.loading_create = true

      const results = await axios({
        method: 'post',
        url: `api/social/form/delete/${payload.id}`,
      })
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading_create = false

      if(!results) return

      this.user = {
        id: '',
        facebook: '',
        tiktok: '',
        youtube: '',
        twitter: '',
        instagram: '',
        pinterest: '',
        website: '',
      }

      this.router.replace({
        name:'form_accounts_social'
      })

      successNotify()

      return true
    },

  },
});
