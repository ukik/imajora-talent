import { defineStore } from 'pinia';

import { ProductInterface } from 'src/models/product';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: <ProductInterface> [],
  }),
  getters: {
    totalPrice: (state) => {
      let total = 0
      const items = state.items
      for (let i = 0; i < items.length; i++) {
        total += (items[i].price - items[i].discount) * items[i].unit
      }
      return total
    },
    totalDiscount: (state)  => {
      let discount = 0
      const items = state.items
      for (let i = 0; i < items.length; i++) {
        discount += (items[i].discount / items[i].price) * 100
      }
      return discount
    },
    totalUnit: (state) => {
      let unit = 0
      const items = state.items
      for (let i = 0; i < items.length; i++) {
        unit += items[i].unit
      }
      return unit
    },
    totalWeight: (state) => {
      let weight = 0
      const items = state.items
      for (let i = 0; i < items.length; i++) {
        weight += items[i].unit * items[i].weight
      }
      return weight
    },
    countItems: (state) => state.items.length,

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
      for (let i = 0; i < this.items.length; i++) {
        const el = this.items[i];
        if (el.id == produk.id) {
          el.unit += 1
          console.log(this.items)
          return
        }
      }
      console.log(this.items)
      produk['unit'] = 1
      this.items.push(produk)
    },
    subItem(produk: any) {
      for (let i = 0; i < this.items.length; i++) {
        const el = this.items[i];
        if (el.id == produk.id) {
          el.unit -= 1
          console.log(this.items)
          if(el.unit <= 0) {
            this.items.splice(i,1)
          }
          return
        }
      }
    },
    removeItem(id: any) {
      for (let i = 0; i < this.items.length; i++) {
        const el = this.items[i];
        if (el.id == id) {
          this.items.splice(i,1)
          return
        }
      }
    },
  },
});
