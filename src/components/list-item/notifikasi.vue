<template>
<fragment>
	<!-- <q-list class="q-pa-none" separator> -->

      <q-item clickable @click="onSubmit" class="relative-position q-pa-sm q-ma-none full-width" :class="[ prop_data.read_at ? 'bg-white' : 'bg-grey-2' ]" v-ripple="{color:'grey'}">

        <q-item-section top avatar style="padding:0px;" >
          <q-avatar>
            <img :src="img_checker(prop_data.foto)" @error="handleError" v-lazy-src="img_checker(prop_data.foto)" loading="lazy">
          </q-avatar>
        </q-item-section>

        <q-item-section top>
          <q-item-label class="text-weight-bold">{{ prop_data.user.nama }}</q-item-label>
          <q-item-label class="text-grey-8">{{ prop_data.keterangan }}: &nbsp
            <!-- {{ prop_data.id }} -->
            <!-- : {{ prop_data.user_notifikasiable_type.replace('_', ' ') }}  -->
            ID {{ prop_data.notifiable_id }}
          </q-item-label>

          <div class="text-grey-6 q-mt-sm" style="font-size:12px;">
            {{ prop_data.created_at | text-wrap(25) }} - dibaca: {{ prop_data.read_at }}
          </div>
        </q-item-section>

        <q-item-section side>
          <q-avatar size="45px" rounded class="q-mr-sm">          
            <!-- https://www.flaticon.com/svg/vstatic/svg/2918/2918054.svg?token=exp=1612900564~hmac=221cc122c90220c1c77587a2c31d650e -->
            <img style="opacity: 0.35" src="~/assets/flat/document.png" loading="lazy">
            <!-- <q-badge v-if="visited" class="round-radius" floating top color="pink-4"><q-icon name="done" color="white" /></q-badge> -->
          </q-avatar>
        </q-item-section>
      </q-item>      
      <q-separator />

	<!-- </q-list> -->
</fragment>
</template>

<script type="text/javascript">
  export default {
    
    props: {
      prop_data: {
        default: () => ([]),
      },
      index: {
        default: null,
      },
      module: {
        default: '',
      }
    },
    methods: {
      async onSubmit() {
        const request = await this.dispatchVuex(this.module, { index: this.index, id: this.prop_data.id })
        console.log(request)
      }
    }
  };
</script>