// import { BlogDetailInterface } from 'src/models/blog';

const reply = {
	current_page: null,
  data:[],
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

const comment = {
  id:'',
  id_user:'',
  parent_id:'',
  konten:'',
  diblokir:'',
  created_at:'',
  updated_at:'',
  name:'',
}

export default function () {
  return {
    comment: comment,
    reply: reply,
    loading: false,
    init: false,
  }
}
