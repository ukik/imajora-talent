<template>
<q-list class="q-pa-none" separator>  
  <q-item  v-for="(item, index) in prop_data" :key="index" class="q-pa-sm" v-ripple="{color: 'grey' }">
    <q-item-section avatar class="q-pa-none">
        <q-avatar>
          <img :src="img_checker(item.foto)" @error="handleError" v-lazy-src="img_checker(item.foto)" @load="onLoad" loading="lazy">
          <!-- <img src="https://cdn.quasar.dev/img/boy-avatar.png">   -->
          <q-icon name="star" style="font-size:14px; padding:1.5px;" color="white" class="absolute-top-left bg-green rounded-borders" />
        </q-avatar>
    </q-item-section>

<!--     <q-item-section no-wrap>
      <q-item-label class="text-weight-bold">{{ item.user_teman.nama }}</q-item-label>
      <q-item-label caption class="limit">
        {{ item.user_teman.created_at | text-wrap(25) }}
      </q-item-label>
    </q-item-section>

    <q-item-section v-if="!following" side >
      <q-btn @click="following = !following" icon="person_add" label="Ikuti" size="sm" color="light-blue" dense no-caps rounded outline unelevated class="q-px-xs"/>
    </q-item-section> -->

  </q-item>
</q-list>	
</template>

<script type="text/javascript">

  var default_avatar = 'https://secure.gravatar.com/avatar?d=wavatar';

  export default {
    computed: {
      // img_checker() {
      //   return function(val) {
      //     if(!val) {
      //       return default_avatar
      //     }
      //     return val
      //   }
      // }
    },
    props: {    
      prop_data: {
        default: () => ([]),
      }
    }, 
    methods: { 
      // handleError(e) {
      //   console.log(e)
      //   e.target.src = default_avatar
      // },
      onLoad() {
        console.log('trigger me when image has fully loaded');
      },            
    },   
    data() {
      return {
        // following: false,
      }
    }
  };
</script>

<style type="text/css" scoped>

.limit {
  text-overflow: ellipsis;
  overflow: hidden;  
  /*max-width:200px;*/
}

</style>