import { defineStore } from 'pinia';
import { BlogDetailInterface } from 'src/models/blog';

interface BlogItem {
  id:number,
  category:string,
  category_slug:string,
  // route_name:string,
  // route_param:string,
  total:number,
  blog:BlogDetailInterface,
}
interface BlogsInterface extends Array<BlogItem>{}

export const useBlogsStore = defineStore('blogs', {
  state: () => ({
    items:<BlogsInterface> [
      {
        id:0,
        category:'Card Games',
        category_slug:'card-games',
        // route_name:'blog_category',
        // route_param:'card_games',
        total:20,
        blog: {
          id:0,
          title:'Happy Salmon In A Box?!',
          slug:'happy-salmon-in-a-box',
          excerpt:'Greetings. You may have seen that we recently re-released Happy Salmon, one of our favorite games of all time. But it looks a little different.',
          category:'Card Games',
          created_at:'1 year ago',
          author:'Muhamad Duki',
          description:'Greetings. You may have seen that we recently re-released Happy Salmon, one of our favorite games of all time. But it looks a little different.',
          featured_img:'https://cdn.shopify.com/s/files/1/0345/9180/1483/articles/EVER_WONDER_MONSTERA_FB_TWITTER_1x1_f00a994f-4ce2-4fbe-98ac-c934d46ed511_x180@2x.png?v=1659988278',
        }
      },
      {
        id:1,
        category:'Board Games',
        category_slug:'board-games',
        // route_name:'blog_category',
        // route_param:'board_games',
        total:20,
        blog: {
          id:0,
          title:'Happy Salmon In A Box?!',
          slug:'happy-salmon-in-a-box',
          excerpt:'Greetings. You may have seen that we recently re-released Happy Salmon, one of our favorite games of all time. But it looks a little different.',
          category:'Board Games',
          created_at:'1 year ago',
          author:'Muhamad Duki',
          description:'Greetings. You may have seen that we recently re-released Happy Salmon, one of our favorite games of all time. But it looks a little different.',
          featured_img:'https://cdn.shopify.com/s/files/1/0345/9180/1483/articles/EVER_WONDER_MONSTERA_FB_TWITTER_1x1_f00a994f-4ce2-4fbe-98ac-c934d46ed511_x180@2x.png?v=1659988278',
        }
      },
      {
        id:2,
        category:'Greetings Card',
        category_slug:'greetings-cards',
        // route_name:'blog_category',
        // route_param:'greetings_cards',
        total:20,
        blog: {
          id:0,
          title:'Happy Salmon In A Box?!',
          slug:'happy-salmon-in-a-box',
          excerpt:'Greetings. You may have seen that we recently re-released Happy Salmon, one of our favorite games of all time. But it looks a little different.',
          category:'Board Games',
          created_at:'1 year ago',
          author:'Muhamad Duki',
          description:'Greetings. You may have seen that we recently re-released Happy Salmon, one of our favorite games of all time. But it looks a little different.',
          featured_img:'https://cdn.shopify.com/s/files/1/0345/9180/1483/articles/EVER_WONDER_MONSTERA_FB_TWITTER_1x1_f00a994f-4ce2-4fbe-98ac-c934d46ed511_x180@2x.png?v=1659988278',
        }
      },
    ],
  }),
  getters: {
    get_items: (state) => state.items,
  },
  actions: {
    // increment() {
    //   this.counter++;
    // },
  },
});
