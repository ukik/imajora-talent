import { defineStore } from 'pinia';

import { ProductInterface } from 'src/models/product';

interface OrderDetail {
  id:number,
  kode:string,
  diterbitkan:string,
  // berat:number,
  // jumlah:number,
  // subtotal:number,
  // discount:number,
  shipping:number,
  taxes:number,
  jasa_pengiriman:string,
  asal:string,
  tujuan:string,
  // total:number,
  payment:string,
  status:string,
  products: ProductInterface,
}

export const useAccountOrderDetailStore = defineStore('account_order_detail', {
  state: () => ({
    items: <OrderDetail>{
      id:1,
      kode:'2346578',
      diterbitkan:'20/20/2022',
      // berat:number,
      // jumlah:number,
      // subtotal:number,
      // discount:1,
      shipping:0.025,
      taxes:1,
      jasa_pengiriman:'JNE',
      asal:'Jakarta',
      tujuan:'Samarinda',
      // total:number,
      payment:'BCA',
      status:'Settlement',
      products:[
        {
          id: 1,
          name: 'dominion dot rumble: original edition starter pack',
          price: 20,
          unit: 1,
          img: '/images/products/product_1.webp',
          weight: 150,
          discount: 7.5,
          stock: 4,
          review: 55,
          rating: 4.5,
          created_by: 'Megaman',
          year: 2014,
          slug: 'dominion',
          best_seller:true,
          age:'Usia 7+',
          players:'2-6',
          duration:'30 Min',
        },
        {
          id: 2,
          name: 'dominion dot rumble: booster pack',
          unit: 3,
          price: 10,
          img: '/images/products/product_2.webp',
          weight: 150,
          discount: 5,
          stock: 100,
          review: 49,
          rating: 2.5,
          created_by: 'Yuvoria',
          year: 2020,
          slug: 'dominion',
          best_seller:true,
          age:'Usia 7+',
          players:'2-6',
          duration:'30 Min',
        },
      ]
    },
  }),
  getters: {
    get_items:(state) => state.items,
    totalPrice: (state) => {
      let total = 0
      const items = state.items.products
      for (let i = 0; i < items.length; i++) {
        total += (items[i].price - items[i].discount) * items[i].unit
      }
      return total
    },
    totalDiscountPercent: (state)  => {
      let discount = 0
      const items = state.items.products
      for (let i = 0; i < items.length; i++) {
        discount += (items[i].discount / items[i].price) * 100
      }
      return discount
    },
    totalDiscount: (state)  => {
      let discount = 0
      const items = state.items.products
      for (let i = 0; i < items.length; i++) {
        discount += items[i].discount * items[i].unit
      }
      return discount
    },
    totalUnit: (state) => {
      let unit = 0
      const items = state.items.products
      for (let i = 0; i < items.length; i++) {
        unit += items[i].unit
      }
      return unit
    },
    totalWeight: (state) => {
      let weight = 0
      const items = state.items.products
      for (let i = 0; i < items.length; i++) {
        weight += items[i].unit * items[i].weight
      }
      return weight
    },
    countItems: (state) => state.items.products.length,

    subtotal_unit: (state) => (id:number) => {
      let unit = 0
      const items = state.items.products
      for (let i = 0; i < items.length; i++) {
        if(items[i].id == id) {
          unit += items[i].unit
        }
      }
      return unit
    },
    discount_percent: (state) => (id:number) => {
      const items = state.items.products
      for (let i = 0; i < items.length; i++) {
        if(items[i].id == id) {
          return (items[i].discount / items[i].price) * 100
        }
      }
    },
    real_price: (state) => (id:number) => {
      const items = state.items.products
      for (let i = 0; i < items.length; i++) {
        if(items[i].id == id) {
          return (items[i].price - items[i].discount)
        }
      }
    },
    real_subtotal_price: (state) => (id:number) => {
      const items = state.items.products
      for (let i = 0; i < items.length; i++) {
        if(items[i].id == id) {
          return (items[i].price - items[i].discount) * items[i].unit
        }
      }
    },

  },
  actions: {
    addItem(produk: any) {
      const items = this.items.products
      for (let i = 0; i < items.length; i++) {
        const el = items[i];
        if (el.id == produk.id) {
          el.unit += 1
          console.log(this.items)
          return
        }
      }
      console.log(this.items)
      produk['unit'] = 1
      items.push(produk)
    },
    subItem(produk: any) {
      const items = this.items.products
      for (let i = 0; i < items.length; i++) {
        const el = items[i];
        if (el.id == produk.id) {
          el.unit -= 1
          console.log(this.items)
          if(el.unit <= 0) {
            items.splice(i,1)
          }
          return
        }
      }
    },
    removeItem(id: any) {
      const items = this.items.products
      for (let i = 0; i < items.length; i++) {
        const el = items[i];
        if (el.id == id) {
          items.splice(i,1)
          return
        }
      }
    },
  },
});
