import { defineStore } from 'pinia';

interface OrderItem {
  id:number,
  kode:string,
  diterbitkan:string,
  jumlah:number,
  total:number,
  status:string,
}
interface OrderItems extends Array<OrderItem>{}

export const useAccountOrderStore = defineStore('account_order', {
  state: () => ({
    items: <OrderItems>[
      {
        id:1,
        kode:'2346578',
        diterbitkan:'20/20/2022',
        jumlah:2,
        total:400,
        status:'Settlement',
      },
      {
        id:2,
        kode:'2346578',
        diterbitkan:'20/20/2022',
        jumlah:2,
        total:400,
        status:'Settlement',
      },
      {
        id:3,
        kode:'2346578',
        diterbitkan:'20/20/2022',
        jumlah:2,
        total:400,
        status:'Settlement',
      },
    ]
  }),
  getters: {
    get_items:(state) => state.items,
  },
  actions: {},
});
