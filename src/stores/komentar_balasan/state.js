const paginate = {
	current_page: null, 
	first_page_url: null,
	from: null,
	last_page: null,
	last_page_url: null,
	links: null,
	next_page_url: null,
	path: null,
	per_page: null,
	prev_page_url: null,
	to: null,
	total: null,
}

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

export default function () {
  return {
    reset_prefetch: 0,    
    komentar,
    komentar_balasan: [],
    paginate,
    loading: false,

    segment: '',
    // model: 'User_Komentar_Model', // mengikuti sumber postingan // wajib ada untuk filter morph
    init: false,    
  }
}
