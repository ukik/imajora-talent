import { defineStore } from 'pinia';
import axios from 'axios'
import { useRouterStore } from 'src/stores/router-store'
import { Loading, Notify, Cookies, QSpinnerClock, Platform } from 'quasar'

import { host } from 'src/boot/common'

import { date } from 'quasar'
const timeStamp = Date.now()
const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD')

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

export const useFormStore = defineStore('forms-accounts-career', {
  state: () => ({
    user: {
      id: '',
      start_career: formattedString,
      collab: '',
      featuring: '',
      performance: '',
      groups: [],
      skills: [],
      genres: [],
      vocals: [],
      voices: [],
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

      const results = await axios.get(`api/accounts/career/${payload.id}`)
      .catch(err => {
        errorNotify()
        return null
      })

      this.loading = false

      // console.log(results)

      if(!results) return
      if(!results.data.payload.user) return

      this.user = results.data.payload.user

      const group_tagged = results.data.payload.user.group_tagged
      let arr1 = []
      group_tagged.forEach(element => {
        arr1.push(element.tag_name.toLowerCase())
      });
      this.user.groups = arr1.length > 0 ? arr1 : []

      const skill_tagged = results.data.payload.user.skill_tagged
      let arr2 = []
      skill_tagged.forEach(element => {
        arr2.push(element.tag_name.toLowerCase())
      });
      this.user.skills = arr2.length > 0 ? arr2 : []

      const user_music_genre_tagged = results.data.payload.user.user_music_genre_tagged
      let arr3 = []
      user_music_genre_tagged.forEach(element => {
        arr3.push(element.tag_name.toLowerCase())
      });
      this.user.genres = arr3.length > 0 ? arr3 : []

      const vocal_tagged = results.data.payload.user.vocal_tagged
      let arr4 = []
      vocal_tagged.forEach(element => {
        arr4.push(element.tag_name.toLowerCase())
      });
      this.user.vocals = arr4.length > 0 ? arr4 : []

      const voice_tagged = results.data.payload.user.voice_tagged
      let arr5 = []
      voice_tagged.forEach(element => {
        arr5.push(element.tag_name.toLowerCase())
      });
      this.user.voices = arr5.length > 0 ? arr5 : []

    },

    async form_create (payload = null) {

      if(this.loading_create) return

      let formData = new FormData();
      // formData.append('user', this.user)
      formData.append('id', payload.id)
      formData.append('start_career', !this.user.start_career ? '' : this.user.start_career)
      formData.append('collab', !this.user.collab ? '' : this.user.collab)
      formData.append('featuring', !this.user.featuring ? '' : this.user.featuring)
      formData.append('performance', !this.user.performance ? '' : this.user.performance)

      formData.append('groups', !this.user.groups ? [] : this.user.groups)
      formData.append('skills', !this.user.skills ? [] : this.user.skills)
      formData.append('genres', !this.user.genres ? [] : this.user.genres)
      formData.append('vocals', !this.user.vocals ? [] : this.user.vocals)
      formData.append('voices', !this.user.voices ? [] : this.user.voices)

      this.loading_create = true

      const type = payload.id ? `/${payload.id}` : ''

      const results = await axios({
        method: 'post',
        url: `api/accounts/career/create${type}`,
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

      // this.router.replace({
      //   name:'form_accounts_career',
      //   params: {
      //     id: results.data.payload?.user.id
      //   }
      // })

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
        start_career: '',
        collab: '',
        featuring: '',
        performance: '',
        groups: [],
        skills: [],
        genres: [],
        vocals: [],
        voices: [],
      }

      this.router.replace({
        name:'form_accounts_career'
      })

      successNotify()

      return true
    },

  },
});
