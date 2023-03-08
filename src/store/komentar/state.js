// import { BlogDetailInterface } from 'src/models/blog';

const comments = {
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


export default function () {
  return {
    comment: comments,
    loading: false,
    init: false,
  }
}
