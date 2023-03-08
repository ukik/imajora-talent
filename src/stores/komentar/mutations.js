export function reset_prefetch (state, data) {
  	state.reset_prefetch = data
}

export function set_komentar (state, payload) {
	state.komentar = payload
}

export function set_komentar_more (state, payload) {

    const tag = payload.tag

    delete payload['tag']

    if(tag == 'by_scroll') {
		const data = [
			...state.komentar,
			...payload
		]
		state.komentar = data	
    } else if(tag == 'by_paginate') {
        state.komentar = payload
    }
	
	// const data = [
	// 	...state.komentar,
	// 	...payload
	// ]
	// state.komentar = data	
}

export function set_paginate (state, payload) {
	state.paginate = payload
}

export function paginate_total (state, payload) {
	state.paginate.total = payload
}

export function set_loading (state, payload) {
	state.loading = payload
}


export function clean (state, payload) {
	state.komentar = []
}

export function last_id (state, payload) {
	state.last_id = payload
}

export function update (state, payload) {
	state.komentar.unshift(payload)
	console.log('mutation', state.komentar)
}

export function init (state, data) {
  	state.init = data
}
