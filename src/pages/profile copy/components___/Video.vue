<template>
<div>

  <!-- <ProfileContent class="q-px-sm q-pt-sm" />    -->
  <router-link class="unlink" :to="prop_route">

  <!-- Fullsize Video -->
  <q-card flat v-ripple="{color: 'grey' }"  class="hover q-px-sm q-pt-sm no-border-radius">

    <div class="q-mb-md text-weight-bold" v-html="textWrap(prop_content, 250, '...')"></div>

    <div>
      <q-img
        img-class="custom-image rounded-borders"
        class="q-my-sm"
        :ratio="16/9"
        :src="item.cover"
        style="width: 100%"
      >
        <q-item dense class="absolute-full rounded-borders" style="padding: 0px 10px 0px 5px;">
          <q-item-section>
            <!-- <div>
              <q-btn @click="onSubmit" flat color="pink" size="sm" round :icon="status_suka ? 'favorite' : 'favorite_border'" />
              <span style="font-size:12px;">{{ total_suka }}</span>
            </div> -->
          </q-item-section>

          <!-- <q-item-section side>
              <div>
                  <q-btn flat color="white" size="sm" round icon="access_time" />
                  <span style="font-size:12px;" class="text-white">04:12</span>
              </div>
            </q-item-section> -->
        </q-item>
        <q-btn icon="play_arrow" size="md" round outline class="absolute-center bg-black text-white"/>
      </q-img>
    </div>          
  </q-card>       

  </router-link>

  <slot name="toolbar" /> 
  <!-- <ToolbarListVideo /> -->

  <!-- <ToolbarListVideo
    :index="index"
    :form_menyukai="{
      id_pemilik_postingan: item.id_user,
      id_postingan: item.id,
      type: 'Video_Model',
      label: 'video', 
    }" 
    :form_favorit="{
      id_pemilik_postingan: item.id_user,
      id_postingan: item.id,
      type: 'Video_Model',
      label: 'video', 
    }" 
    :menyukai="item.menyukai" 
    :favorit="item.favorit" 
    :created_at="item.created_at"
    :prop_total="item.user_totals" />  

  <q-separator /> -->
</div>
</template>

<script type="text/javascript">

// const menyukai = {
//   data() {
//     return {
//       total_suka: 0,
//       status_suka: false,
//     }
//   },
//   mounted() {   
//     this.status_suka = this.menyukai
//     this.total_suka = this.get_total('suka')
//   },
//   methods: {
//     async onSubmit() {
//       const request = await this.dispatchVuex('aggregator/set_menyukai', this.form)
//       if(!request.data) return
//       // this.total_suka += request.value
//       this.total_suka = request.data.total
//       this.status_suka = request.value > 0 ? true : false
//     },
//   },    
//   props: {
//     index: {
//       default: null
//     },
//     item: {
//       default: () => ({})
//     },
//     form: {
//       default: () => ({
//         user_sukaable_id: '',
//         user_sukaable_type: '',
//         label: '',
//       })
//     },
//     created_at: {
//       default: '',
//     },
//     menyukai: {
//       default: () => ({})
//     },
//     prop_total: {
//       default: () => ([]),
//     },            
//     prop_tipe: {
//       default: '',
//     },
//     prop_gambar: {
//       default: () => ([]),
//     },      
//     prop_content: {
//       default: ""
//     },
//   },  
//   computed: {
//     get_total() {
//       return function(label) {

//         if(this.prop_total.length <= 0) return 0

//         for (var i = this.prop_total.length - 1; i >= 0; i--) {
//           if(this.prop_total[i].label == label) {
//             return this.prop_total[i].total
//           }
//         }
//       }
//     },    
//   } 
// }


export default {
    // mixins: [menyukai],        
    props: {
      index: {
        default: null
      },
      item: {
        default: () => ({})
      },      
      prop_content: {
        default: '',
      },
      prop_gambar: {
        default: () => ([])
      },
      prop_route: {
        default: () => ({})
      }
    },   
  };
</script>

<style type="text/css" scoped>
.q-item__section--thumbnail img {
    width: auto;
    height: 65px;
}  
.custom-image {
  filter: brightness(75%);
}

</style>