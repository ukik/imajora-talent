<template>

	<fragment>

        <ProfileKomentar

          class="q-pa-sm"
          :form="{
            id_user_teman: prop_data.user.id,
          }" :prop_data="prop_data.user">

          <q-item-section side top slot="more_button">
            <div>
                <q-btn @click="onSubmit" flat color="pink" size="12px" round :icon="status_suka ? 'favorite' : 'favorite_border'" />
                <span style="font-size:12px;">{{ total_suka }}</span>
            </div>
          </q-item-section>

        </ProfileKomentar>


        <q-item-section >
          <router-link class="unlink" :to="{
            name: 'komentar_balasan',
            params: {
              segement: '',
              id: prop_data.id,
            }
          }">
            <q-item-label v-ripple="{color: 'grey' }" class="hover relative-position text-grey-8 q-pa-sm">
              {{ prop_data.konten }}
            </q-item-label>
          </router-link>

          <q-toolbar class="text-grey-6 q-px-none q-mx-none" style="font-size:12px;">
            <q-space />
            <!-- {{ '20/20/2020 16:44' | text-wrap(25) }} -->
            {{ prop_data.created_at }}
            <q-btn :to="{
            name: 'komentar_balasan',
            params: {
              segement: '',
              id: prop_data.id,
            }
          }" dense class="q-px-sm" flat no-caps style="font-size:12px;" color="primary" label="Balas" />

<!--             <q-btn flat color="pink" size="sm" round icon="favorite_border" />
            <span style="font-size:12px;">2</span> -->
          </q-toolbar>

        </q-item-section>


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
    props: ['form'],
    mounted() {   
      this.status_suka = this.get_menyukai
      this.total_suka = this.prop_data.count_suka // this.get_total('suka')
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
        if(!this.prop_data.menyukai) return false
        if(Object.keys(this.prop_data.menyukai).length === 0) return false
        return true
      },
      get_total() {
        return function(label) {
          const temp = this.prop_data.user_totals_komentar_balasan
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