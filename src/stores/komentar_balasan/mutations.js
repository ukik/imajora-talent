export function reset_prefetch (state, data) {
  	state.reset_prefetch = data
}

export function set_komentar (state, payload) {
	state.komentar = payload
}

export function set_komentar_balasan (state, payload) {
	state.komentar_balasan = payload
}

export function set_komentar_balasan_more (state, payload) {
    const tag = payload.tag

    delete payload['tag']

    if(tag == 'by_scroll') {
		const data = [
			...state.komentar_balasan,
			...payload
		]
		state.komentar_balasan = data
    } else if(tag == 'by_paginate') {
        state.komentar_balasan = payload
    }
	
	// const data = [
	// 	...state.komentar_balasan,
	// 	...payload
	// ]
	// state.komentar_balasan = data	
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

export function update (state, payload) {
	state.komentar_balasan.unshift(payload)
	console.log('mutation', state.komentar_balasan)
}

export function segment (state, payload) {
	state.segment = payload
}

export function init (state, data) {
  	state.init = data
}
