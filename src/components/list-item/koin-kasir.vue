<template>

	<q-list class="q-pa-none"  separator>

      <q-item v-for="(item, index) in prop_data" :key="index" class="q-px-sm q-py-md">

        <q-item-section top avatar>
          <q-avatar size="70px" rounded>
            <img :src="item.cuplikan">
          </q-avatar>

          <q-item-label class="text-caption text-grey full-width q-pt-xs">
            <!-- ID: <span class="float-right">{{ item.id }}</span> -->
          </q-item-label>
        </q-item-section>

        <q-item-section top>
          <q-item-label class="text-grey-8">{{ item.deskripsi | text-wrap(150, '...') }}</q-item-label>

          <div class="text-grey q-mt-sm row flex-center">
            <q-avatar size="xs" class="q-mr-sm">
              <img src="~/assets/coins/8.png" />
            </q-avatar>
            <span style="font-size:14px;">{{ item.koin }}</span>
            <q-space />
            <q-btn :to="{ name: 'koin_kasir_produk', params: { id: item.id } }" icon="shopping_cart" label="Tukar" size="12px" color="light-blue" dense no-caps rounded outline unelevated class="q-px-xs"/>
          </div>
        </q-item-section>

        <!-- <q-item-section side top>
          <q-avatar size="70px" rounded>
            <img src="https://cdn.quasar.dev/img/avatar.png">
          </q-avatar>
        </q-item-section> -->
      </q-item>      
         
	</q-list>

</template>

<script type="text/javascript">
  export default {
    props: {
      prop_data: {
        default: () => ([]),
      }
    }
  };
</script>