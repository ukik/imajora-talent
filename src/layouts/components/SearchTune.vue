<template>
  <q-item>
    <q-item-section>
      <q-item-label>
        <q-input type="search" @clear="onGoto" clearable v-model="keyword" debounce="750" dense bg-color="bg-grey-2"
          rounded placeholder="cari properti..." standout="bg-blue text-white">
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-item-label>
    </q-item-section>
    <slot name="side">
    </slot>
  </q-item>
</template>


<script type="text/javascript">
import { mapFields } from 'vuex-map-fields'

export default {
  computed: {
    ...mapFields({

      // page: 'pencarian.index.data.payload.current_page',
      // keyword: 'pencarian.local.keyword',
      // min: 'pencarian.local.min',
      // max: 'pencarian.local.max',
      // regencies: 'layout.local.regency',
      // kategori: 'pencarian.local.kategori',
    }),
  },
  emits: ["onBubbleEvent"], // wajib agar gak warning
  watch: {
    keyword(val) {
      console.log(val)
      this.onGoto()
    }
  },
  data() {
    return {
      page: 'pencarian.index.data.payload.current_page',
      keyword: 'pencarian.local.keyword',
      min: 'pencarian.local.min',
      max: 'pencarian.local.max',
      regencies: 'layout.local.regency',
      kategori: 'pencarian.local.kategori',
    }
  },
  methods: {
    onGoto() {
      // this.$router.push({
      //   name: 'pencarian',
      //   params: {
      //     page: this.page
      //   },
      //   query: {
      //     keyword: this.keyword,
      //     min: this.min,
      //     max: this.max,
      //     regency: this.regencies,
      //     kategori: this.kategori,
      //   }
      // })
    }
  }
};
</script>
