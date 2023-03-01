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
//   slug:string
// }

export const useProductsStore = defineStore('products', {
  state: () => ({
    items: <ProductInterface> [
      {
        id: 1,
        name:'dominion dot rumble: original edition starter pack',
        price: 20,
        unit: 1,
        img: '/images/products/product_1.webp',
        weight:150,
        discount:7.5,
        stock:4,
        review:55,
        rating:4.5,
        created_by:'Megaman',
        year:2014,
        slug:'dominion'
      },
      {
        id: 2,
        name:'dominion dot rumble: booster pack',
        unit: 1,
        price: 10,
        img: '/images/products/product_2.webp',
        weight:150,
        discount:5,
        stock:100,
        review:49,
        rating:2.5,
        created_by:'Yuvoria',
        year:2020,
        slug:'dominion'
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
    real_price: (state) => (id:number) => {
      const items = state.items
      for (let i = 0; i < items.length; i++) {
        if(items[i].id == id) {
          return (items[i].price - items[i].discount)
        }
      }
    },
    real_subtotal_price: (state) => (id:number) => {
      const items = state.items
      for (let i = 0; i < items.length; i++) {
        if(items[i].id == id) {
          return (items[i].price - items[i].discount) * items[i].unit
        }
      }
    },
  },
  actions: {
    addItem(produk: any) {
    },
  },
});
