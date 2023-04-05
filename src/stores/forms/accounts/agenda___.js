import { defineStore } from 'pinia';
import axios from 'axios'
import { useRouterStore } from 'src/stores/router-store'
import { Loading, Notify, Cookies, QSpinnerClock, Platform } from 'quasar'

import { host } from 'src/boot/common'

import { date } from 'quasar'
const timeStamp = Date.now()
const formattedString = '' //date.formatDate(timeStamp, 'YYYY-MM-DD')

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

export const useFormStore = defineStore('forms-accounts-biodata', {
  state: () => ({
    user: {
      id: '',
      birth_place: formattedString,
      birth_date: formattedString,
      address: '',
      bio: '',
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

      const results = await axios.get(`api/accounts/biodata/${payload.id}`)
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
      formData.append('birth_place', !this.user.birth_place ? '' : this.user.birth_place)
      formData.append('birth_date', !this.user.birth_date ? '' : this.user.birth_date)
      formData.append('address', !this.user.address ? '' : this.user.address)
      formData.append('bio', !this.user.bio ? '' : this.user.bio)

      this.loading_create = true

      const type = payload.id ? `/${payload.id}` : ''

      const results = await axios({
        method: 'post',
        url: `api/accounts/biodata/create${type}`,
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
        name:'form_accounts_biodata',
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
        birth_place: formattedString,
        birth_date: formattedString,
        address: '',
        bio: '',
      }

      this.router.replace({
        name:'form_accounts_biodata'
      })

      successNotify()

      return true
    },

  },
});
