import { defineStore } from 'pinia';
import { BlogDetailInterface } from 'src/models/blog';

interface AddressItem {
  id:number,
  first_name:string,
  last_name:string,
  email:string,
  phone_number:string,
  company:string,
  address_1:string,
  address_2:string,
  country:string,
  region:string,
  kota_asal:string,
  kode_pos:number | null | undefined,
}

interface AddressInterface extends Array<AddressItem>{}

export const useAccountAddressStore = defineStore('account_address', {
  state: () => ({
    alamat: <AddressInterface> [
      {
        id:0,
        first_name:'xxx',
        last_name:'xxxx',
        email:'xxxxxx',
        phone_number:'xxxx',
        company:'xxxx',
        address_1:'xxxx',
        address_2:'xxxx',
        country:'xxxx',
        region:'xxxx',
        kota_asal:'xxxx',
        kode_pos:1245,
      }
    ],
  }),
  getters: {
    get_items: (state) => state.alamat,
  },
  actions: {
    removeItem(id: number) {
      for (let i = 0; i < this.alamat.length; i++) {
        const el = this.alamat[i];
        if (el.id == id) {
          this.alamat.splice(i,1)
          return
        }
      }
    },
  },
});
