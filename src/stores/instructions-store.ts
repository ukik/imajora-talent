import { defineStore } from 'pinia';
import { ProductInterface } from 'src/models/product';

// export interface ProductInterface {
//   id: number;
//   name: string,
//   price?: number;
//   unit?: number;
//   img?: string,
//   weight?: number,
//   discount:number,
//   stock:number,
//   review:number,
//   rating:number,
//   created_by:string,
//   year:number,
// }

export const useInstructionsStore = defineStore('instructions', {
  state: () => ({
    items: <ProductInterface> [
      {
        id: 1,
        name:'dominion dot rumble: original edition starter pack',
        price: 20,
        unit: 1,
        img: '/images/instructions/playmate.png',
        weight:150,
        discount:7.5,
        stock:0,
        review:55,
        rating:4.5,
        created_by:'Megaman',
        year:2014
      },
    ],
  }),
  getters: {
    produk_dominion: (state) => state.items[0],
    produk_dominion_booster: (state) => state.items[1],
    discount_percent: (state) => (id:number) => {
      const items = state.items
      for (let i = 0; i < items.length; i++) {
        if(items[i].id == id) {
          return (items[i].discount / items[i].price) * 100
        }
      }
    },
  },
  actions: {
    addItem(produk: any) {
    },
  },
});
