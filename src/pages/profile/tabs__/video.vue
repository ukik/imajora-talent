<template>
 <div>	
	<q-page v-if="!loading && konten.length <= 0 && MOUNTED" class="flex flex-center">
		<BlankArtikel />
	</q-page>   

	<SpinnerOrbit v-if="loading" />

	<!-- <transition name="fade-global">		
		<div v-if="MOUNTED && konten.length > 0">
			<div v-for="(item, index) in konten" :key="index" >
				<ProfileUtama class="q-px-sm q-pt-sm q-pb-sm" />

				<ItemProfileLayoutVideo :prop_data="item.user_gambars" />

				<q-separator />
			</div>
		</div>	  
	</transition> -->

    <div v-if="konten.length > 0" v-for="(item, index) in konten" :key="index" >
      <div>
        <Profile :prop_data="item.user" class="q-px-sm q-py-sm" />


        <Item 
          :index="index"
          :form="{
            id_pemilik_postingan: item.id_user,
            id_postingan: item.id,
            type: 'Video_Model',
            label: 'video',                 
          }"
          :prop_route="{
            name: 'video_detail',
            params: {
              id: item.id
            }
          }"              
          :prop_total="item.user_totals"
          :created_at="item.created_at"
          :menyukai="item.menyukai"
          :prop_content="item.judul" 
          prop_content_tambahan="" 
          :item="item"
          prop_tipe="Video_Model">

          <Toolbar
          	slot="toolbar"
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
            :form_dukungan="{
              id_pemilik_postingan: item.id_user,
              id_postingan: item.id,
              type: 'Video_Model',
              label: 'video', 
            }" 
            :dukungan="item.dukungan" 
            :menyukai="item.menyukai" 
            :favorit="item.favorit" 
            :created_at="item.created_at"
            :prop_total="item.user_totals" />    

      	</Item>


      </div>      
      <q-separator />
    </div>  

</div>
 </template>

<script type="text/javascript">
import { mapFields } from 'vuex-map-fields';

export default {
	computed: {
		...mapFields({
		      konten: "profile.konten_video",
		      paginate: "profile.paginate_video",
		      loading: "profile.loading",     
          current_tab: "profile.current_tab",  
    }),
  }, 
  data() {
    return {
      MOUNTED: false,
      height: "min-height:" + this.$q.screen.height + "px",
    }
  },
  components: {
    Profile: () => import("../components/Profile"),
    Toolbar: () => import('../components/ToolbarVideo'),    
    Item: () => import("../components/Video"),
  },  
  watch: {
    loading(val) {
      if(!val) {
        setTimeout(() => {
          this.MOUNTED = true
        }, 1000)
      }
    },
    // current_tab(val) {
    //   if(val == 'video') {
    //     // if(this.loading) return
    //     this.dispatchVuex('profile/action_payload_more', { alias: 'video', page: 1 })
    //     // this.dispatchVuex('beranda/action_payload', { pull_refresh: true })
    //   }
    // }
  },
  mounted() {

    setTimeout(() => {
      this.dispatchVuex('profile/action_payload_more', { alias: 'video', page: 1, id: this.$route.params.id, tag: 'by_paginate'  })
    }, 1000)

    this.height = "min-height:" + Number(this.$q.screen.height - 50 - 48) + "px"
  },  

};
</script>