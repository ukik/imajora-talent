<template>

	<q-list class="q-pa-none"  separator>

      <q-item v-for="(item, index) in prop_data" :key="index" class="q-px-sm q-py-md">

        <q-item-section top>
          <q-item-label class="text-weight-bold">
            {{ item.kategori | capitalize }} 
          </q-item-label>
          <q-item-label caption>
            {{ item.status }}: {{ item.label }} 
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <div class="text-grey row">
            <q-avatar size="xs" class="q-mr-sm">
              <img src="~/assets/coins/8.png" />
            </q-avatar>
            <span style="font-size:14px;">{{ item.koin }}</span>
          </div>
          <q-item-label caption>
            {{ item.created_at }}
          </q-item-label>
        </q-item-section>
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