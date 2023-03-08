import axios from 'axios'

export async function request ({ commit, state }, payload) {
  if(state.loading) return

  state.loading = true
  const results = await axios.get("http://localhost:8000/api/comments/reply")

  state.loading = false
  state.init = true
  if(!results) return

  state.reply = results.data.payload.reply
  state.comment = results.data.payload.comment
}
