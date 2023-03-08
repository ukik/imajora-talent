import axios from 'axios'
import { api, prefetch_refresh } from '../config'

const komentar = {
  id: null,
  id_user: null,
  parent_id: null,
  user_komentarable_id: null,
  user_komentarable_type: null,
  label: null,
  konten: null,
  diblokir: null,
  created_at: null,
  updated_at: null,  
  user: null,
}


export async function action_payload ({ commit, state }, { pull_refresh, id_komentar, segment }) {

  // Reset data hasil prefetch

  if(!pull_refresh) {
    if(state.reset_prefetch > 0) {
      let reset_prefetch = state.reset_prefetch

      reset_prefetch--

      await commit('reset_prefetch', reset_prefetch)
      return
    }
  }

  await commit('set_loading', true)
  await commit('set_komentar_balasan', []) // RESET
  await commit('set_komentar', komentar)

  const results = await axios.get(api.endpoint['komentar_balasan']+"/index/"+segment+"/"+id_komentar) 
  // const results = await axios.get(api.endpoint['komentar_balasan']+"/"+id_komentar+"?model="+state.model) 
  await commit('set_loading', false)
  await commit('init', true)
  if(!results) return
    
  const response = results.data.data_2

  if(!results.data.data_1) return

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

  await commit('set_komentar', results.data.data_1)
  await commit('set_komentar_balasan', response.data)
  await commit('set_paginate', paginate)
  await commit('reset_prefetch', prefetch_refresh)  
}

export async function action_payload_more ({ commit, state }, { page, id_komentar, segment, tag }) {

  // const results = await axios.get(api.endpoint['komentar_balasan']+"/more/"+id_komentar+"?page="+page+"&model="+state.model)  
  const results = await axios.get(api.endpoint['komentar_balasan']+"/more/"+segment+"/"+id_komentar+"?page="+page)  

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
  await commit('set_komentar_balasan_more', response.data)
  await commit('set_paginate', paginate)
}

export async function update ({ commit, state }, payload) {
  await commit('update', payload)
}

export async function paginate_total ({ commit, state }, payload) {
  await commit('paginate_total', payload)
}

export async function segment ({ commit, state }, payload) {
  await commit('segment', payload)
}