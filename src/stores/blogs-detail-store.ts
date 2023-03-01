import { defineStore } from 'pinia';
import { BlogDetailInterface } from 'src/models/blog';

interface BlogsInterface extends Array<BlogDetailInterface>{}

export const useBlogDetailStore = defineStore('blogs_detail', {
  state: () => ({
    blog:<BlogDetailInterface> {
      id:0,
      title:'',
      slug:'',
      excerpt:'',
      category:'',
      created_at:'Jun 8 2022',
      author:'muhamad duki',
      description:`<div class="row">
      <meta charset="utf-8">
<p>This is a comic explaining the science of how tall a LEGO tower could get before the bottom brick gets squished.&nbsp; It was based on <a href="https://www.bbc.com/news/magazine-20578627">this article </a>from the BBC.</p>
<p>&nbsp;</p>
<p><img style="width:100%; border: 1px solid #333;" src="https://cdn.shopify.com/s/files/1/0345/9180/1483/files/2_480x480.png?v=1628107742" alt=""></p>
<p><img style="width:100%;border: 1px solid #333;" src="https://cdn.shopify.com/s/files/1/0345/9180/1483/files/3_480x480.png?v=1628107750" alt=""></p>
<p><img style="width:100%;border: 1px solid #333;" src="https://cdn.shopify.com/s/files/1/0345/9180/1483/files/4_480x480.png?v=1628107757" alt=""></p>
<p><img style="width:100%;border: 1px solid #333;" src="https://cdn.shopify.com/s/files/1/0345/9180/1483/files/5_480x480.png?v=1628107766" alt=""></p>
<p><img style="width:100%;border: 1px solid #333;" src="https://cdn.shopify.com/s/files/1/0345/9180/1483/files/6_480x480.png?v=1628107772" alt=""></p>
<p><img style="width:100%;border: 1px solid #333;" src="https://cdn.shopify.com/s/files/1/0345/9180/1483/files/7_480x480.png?v=1628107786" alt=""></p>
<p><img style="width:100%;border: 1px solid #333;" src="https://cdn.shopify.com/s/files/1/0345/9180/1483/files/8_480x480.png?v=1628107794" alt=""></p>
<p><img style="width:100%;border: 1px solid #333;" src="https://cdn.shopify.com/s/files/1/0345/9180/1483/files/9_480x480.png?v=1628107801" alt=""></p>
    </div>`,
    },
    blog_related:<BlogsInterface> [
      {
        id:0,
        title:'Happy Salmon In A Box?!',
        slug:'happy-salmon-in-a-box',
        excerpt:'Greetings. You may have seen that we recently re-released Happy Salmon, one of our favorite games of all time. But it looks a little different.',
        category:'Card Games',
        created_at:'1 year ago',
        author:'Muhamad Duki',
        description:'Greetings. You may have seen that we recently re-released Happy Salmon, one of our favorite games of all time. But it looks a little different.',
        featured_img:'https://cdn.shopify.com/s/files/1/0345/9180/1483/articles/EVER_WONDER_MONSTERA_FB_TWITTER_1x1_f00a994f-4ce2-4fbe-98ac-c934d46ed511_x180@2x.png?v=1659988278',
      },
      {
        id:1,
        title:'Happy Salmon In A Box?!',
        slug:'happy-salmon-in-a-box',
        excerpt:'Greetings. You may have seen that we recently re-released Happy Salmon, one of our favorite games of all time. But it looks a little different.',
        category:'Board Games',
        created_at:'1 year ago',
        author:'Muhamad Duki',
        description:'Greetings. You may have seen that we recently re-released Happy Salmon, one of our favorite games of all time. But it looks a little different.',
        featured_img:'https://cdn.shopify.com/s/files/1/0345/9180/1483/articles/EVER_WONDER_MONSTERA_FB_TWITTER_1x1_f00a994f-4ce2-4fbe-98ac-c934d46ed511_x180@2x.png?v=1659988278',
      },
      {
        id:2,
        title:'Happy Salmon In A Box?!',
        slug:'happy-salmon-in-a-box',
        excerpt:'Greetings. You may have seen that we recently re-released Happy Salmon, one of our favorite games of all time. But it looks a little different.',
        category:'Board Games',
        created_at:'1 year ago',
        author:'Muhamad Duki',
        description:'Greetings. You may have seen that we recently re-released Happy Salmon, one of our favorite games of all time. But it looks a little different.',
        featured_img:'https://cdn.shopify.com/s/files/1/0345/9180/1483/articles/EVER_WONDER_MONSTERA_FB_TWITTER_1x1_f00a994f-4ce2-4fbe-98ac-c934d46ed511_x180@2x.png?v=1659988278',
      },
    ],
    pagination: {
      last_page: 2,
      current_page: 1,
    },
  }),
  getters: {
    get_blog: (state) => state.blog,
    get_blog_related: (state) => state.blog_related,
    get_pagination: (state) => state.pagination,
  },
  actions: {
    // increment() {
    //   this.counter++;
    // },
  },
});
