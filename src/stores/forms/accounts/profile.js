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

export const useFormStore = defineStore('forms-accounts-profile', {
  state: () => ({
    user: {
      id: '',
      username: '',
      name: '',
      email: '',
      phone: '',
      gender: '',
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

      const results = await axios.get(`api/accounts/profile/${payload.id}`)
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
      formData.append('username', !this.user.username ? '' : this.user.username)
      formData.append('name', !this.user.name ? '' : this.user.name)
      formData.append('email', !this.user.email ? '' : this.user.email)
      formData.append('phone', !this.user.phone ? '' : this.user.phone)
      formData.append('gender', !this.user.gender ? '' : this.user.gender)

      this.loading_create = true

      const type = payload.id ? `/${payload.id}` : ''

      const results = await axios({
        method: 'post',
        url: `api/accounts/profile/create${type}`,
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
        name:'form_accounts_profile',
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
        username: '',
        name: '',
        email: '',
        phone: '',
        gender: '',
      }

      this.router.replace({
        name:'form_accounts_profile'
      })

      successNotify()

      return true
    },

  },
});
