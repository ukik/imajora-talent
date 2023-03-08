<template>

  <fragment>

      <q-item class="q-pa-sm">
        <q-item-section top avatar>
          <q-avatar>
             <img :src="img_checker(prop_data.user)" @error="handleError" v-lazy-src="img_checker(prop_data.user)" @load="onLoad" loading="lazy">

              <q-icon name="star" style="font-size:14px; padding:1.5px;" color="white" class="absolute-top-left bg-green rounded-borders" />             
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="q-mt-sm text-weight-bold">{{ prop_data.nama }}</q-item-label>
          <div class="text-grey-6" style="font-size:12px;">
            {{ prop_data.created_at }}
          </div>

          <q-item-label class="q-py-sm text-grey-8">{{ prop_data.konten }}</q-item-label>

          <div class="text-grey-6 q-mt-sm" style="font-size:12px;">
            {{ prop_data.created_at }}
          </div>
        </q-item-section>

        <q-item-section side top>
            <div>
                <q-btn @click="onSubmit" flat color="pink" size="sm" round :icon="status_suka ? 'favorite' : 'favorite_border'" />
                <span style="font-size:12px;">{{ total_suka }}</span>
            </div>
        </q-item-section>
      </q-item>  


  </fragment>

</template>

<script type="text/javascript">


  import { menyukai } from "src/mixins/menyukai"

  export default {
    mixins: [menyukai],
    props: {
      prop_data: {
        default: () => ([]),
      }
    },
    methods: {
      onLoad() {
        console.log('trigger me when image has fully loaded');
      },            
    },   
    data() {
      return {
        following: false,
      }
    }
  };
</script>