<template>

	<fragment>

      <q-item class="q-px-sm position-relative" v-ripple="{color:'grey'}">
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
        </q-item-section>

        <q-item-section side >
            <div>
                <q-btn @click="onSubmit" flat color="pink" size="12px" round :icon="status_suka ? 'favorite' : 'favorite_border'" />
                <span style="font-size:12px;">{{ total_suka }}</span>
            </div>
        </q-item-section>
      </q-item>  

      <q-item class="q-px-sm q-pt-none">
        <q-item-section top avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="q-py-sm text-grey-8">{{ prop_data.konten }}</q-item-label>

          <div class="text-grey-6 q-mt-sm" style="font-size:12px;">
            {{ prop_data.created_at }}
          </div>
        </q-item-section>

      </q-item>  




	</fragment>

</template>

<script type="text/javascript">


  // import { menyukai } from "src/mixins/menyukai"
 const menyukai = {
    data() {
      return {
        total_suka: 0,
        status_suka: false,
      }
    },
    props: ['form','menyukai'],
    mounted() {   
      this.status_suka = this.get_menyukai
      this.total_suka = this.get_total('suka')
    },
    methods: {
      async onSubmit() {
        // const form = {
        //   id_pemilik_postingan: this.form.id_user,
        //   id_postingan: this.form.id,
        //   type: this.form.type,
        //   label: this.form.label,           
        // }
        console.log(this.form)

        const request = await this.dispatchVuex('aggregator/set_menyukai', this.form)
        if(!request.data) return

        this.total_suka = request.data.total
        this.status_suka = request.value > 0 ? true : false
      },
    },
    computed: {
      get_menyukai() {
        if(!this.menyukai) return false
        if(Object.keys(this.menyukai).length === 0) return false
        return true
      },
      get_total() {
        return function(label) {
          const temp = this.prop_total
          if(temp.length <= 0) return 0

          for (var i = temp.length - 1; i >= 0; i--) {
            if(temp[i].label == label) {
              return temp[i].total
            }
          }
        }
      }
    }
  }
  export default {
    mixins: [menyukai],
    props: {
      prop_data: {
        default: () => ([]),
      },
      prop_total: {
        default: () => ([]),
      },
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