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

export default function () {
  return {
    // reset_prefetch: 0,
    komentar: [],
    paginate,
    loading: false,
    last_id: null,
    init: false,
  }
}
