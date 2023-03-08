import axios from 'axios'
import { api, prefetch_refresh } from '../config'

import { RouteStore } from "src/router"

import {
  Loading,

  // optional!, for example below
  // with custom spinner
  QSpinnerGears
} from 'quasar'

export async function action_payload ({ commit, state }, { pull_refresh, segment, id }) {

  // Reset data hasil prefetch
  if(!pull_refresh) {
    if(state.reset_prefetch > 0) {
      let reset_prefetch = state.reset_prefetch

      reset_prefetch--

      await commit('reset_prefetch', reset_prefetch)
      return
    }
  }

  // default options
  // Loading.show()

  await commit('set_loading', true)
  // const results = await axios.get(api.endpoint['komentar']+'/'+segment+"/"+id+"?model="+state.model)  
  const results = await axios.get(api.endpoint['komentar']+'/'+segment+"/"+id)  
  await commit('set_loading', false)
  await commit('init', true)
  if(!results) return

  const response = results.data.data_1

  const paginate = {
    current_page: response.current_page, 
    first_page_url: response.first_page_url, 
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

  await commit('last_id', id)

  await commit('set_komentar', response.data)
  await commit('set_paginate', paginate)
  await commit('reset_prefetch', prefetch_refresh)  

  // Loading.hide()
}

export async function action_payload_more ({ commit, state }, { page, segment, id, tag }) {

  const results = await axios.get(api.endpoint['komentar']+"/"+segment+"/"+id+"?page="+page) 
  // const results = await axios.get(api.endpoint['komentar']+"/"+segment+"/"+id+"?page="+page+"&model="+state.model) 

  const response = results.data.data_1

  const paginate = {
    current_page: response.current_page, 
    first_page_url: response.first_page_url, 
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

  response.data['tag'] = tag

  await commit('set_komentar_more', response.data)
  await commit('set_paginate', paginate)
}

export async function clean ({ commit, state }) {
  await commit('clean')
}

export async function paginate_total ({ commit, state }, payload) {
  await commit('paginate_total', payload)
}

export async function update ({ commit, state }, payload) {
  await commit('update', payload)
}