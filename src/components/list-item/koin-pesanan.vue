<template>

	<q-list class="q-pa-none"  separator>

      <q-item v-for="(item, index) in prop_data" :key="index" class="q-px-sm q-py-md">

        <q-item-section top avatar>
          <q-avatar size="80px" rounded>
            <img :src="item.koin_produk.cuplikan">
            <q-badge v-if="item.hari_ini" floating color="pink">baru</q-badge>
          </q-avatar>
          <q-item-label class="text-caption text-center full-width text-grey q-pt-xs">
            {{ item.created_at | text_wrap(10, '') }}

            <!-- ID: <span class="float-right">{{ item.id }}</span> -->
          </q-item-label>          
        </q-item-section>

        <q-item-section top>
          <q-item-label class="text-grey-8 weight-500" v-html="textWrap(kataDicari(item.koin_produk.judul, keyword), 90, '...')"></q-item-label>

          <q-item-label class="text-grey-8 q-pt-sm" v-html="textWrap(kataDicari(item.koin_produk.deskripsi, keyword), 200, '...')"></q-item-label>


          <div class="text-grey q-mt-sm row flex-center">
            <q-avatar size="xs" class="q-mr-sm">
              <img src="~/assets/coins/8.png" />
            </q-avatar>
            <span style="font-size:14px;">{{ item.koin_produk.koin }} ({{ item.jumlah }})</span>
            <q-space />

            <q-chip v-if="item.koin_produk.kondisi == 'proses'" color="orange" text-color="white" label="Proses" size="11px" no-caps rounded  unelevated />
            <q-chip v-else-if="item.koin_produk.kondisi == 'selesai'" color="light-blue" text-color="white" label="Selesai" size="11px" no-caps rounded  unelevated />
            <q-chip v-else color="pink" text-color="white" label="Batal" size="11px" no-caps rounded  unelevated />
          </div>
        </q-item-section>
      </q-item>      
         
	</q-list>

</template>

<script type="text/javascript">
  export default {
    props: {
      keyword: {
        default: '',
      },
      prop_data: {
        default: () => ([]),
      }
    }
  };
</script>