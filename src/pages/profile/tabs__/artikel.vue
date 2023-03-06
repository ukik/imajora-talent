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

				<ItemProfileLayoutArtikel :prop_data="item.user_gambars" :prop_tipe="item.tipe" />

				<q-separator />
			</div>
		</div>	  
	</transition> -->

    <div v-if="konten.length > 0" v-for="(item, index) in konten" :key="index" >
      <div>
        <!-- <Profile :prop_data="item.user" class="q-px-sm q-py-sm" />

        <Item 
          :index="index"
          :form="{
                id_pemilik_postingan: item.id_user,
                id_postingan: item.id,
                type: 'Artikel_Model',
                label: 'artikel',                 
          }"
          :prop_total="item.user_totals"
          :created_at="item.created_at"
          :menyukai="item.menyukai"
          :prop_content="item.judul" 
          prop_content_tambahan="" 
          :prop_gambar="item.user_gambars"
          prop_tipe="Artikel_Model" /> -->




		<Profile :prop_data="item.user" class="q-px-sm q-py-sm" />

		<Item 
			:form="{
			    id_pemilik_postingan: item.id_user,
			    id_postingan: item.id,
			    type: item.tipe,
			    label: onLabelModel(item.tipe),   					
			}"
			:prop_route="{
				name: onDetailRoute(item.tipe),
				params: {
					id: item.id
				}
			}"				
			:prop_total="item.user_totals"
			:created_at="item.created_at"
			:menyukai="item.menyukai"
			:prop_content="item.judul" 
			prop_content_tambahan="" 
			:prop_gambar="item.user_gambars"
			:prop_tipe="item.tipe" />


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
		      konten: "profile.konten_artikel",
		      paginate: "profile.paginate_artikel",
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
		Item: () => import("../components/Artikel"),
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
		// 	if(val == 'artikel') {
		// 		// if(this.loading) return
		// 		this.dispatchVuex('profile/action_payload_more', { alias: 'artikel', page: 1 })
		// 		// this.dispatchVuex('beranda/action_payload', { pull_refresh: true })
		// 	}
		// }
	},	
	mounted() {
	    setTimeout(() => {
			this.dispatchVuex('profile/action_payload_more', { alias: 'artikel', page: 1, id: this.$route.params.id, tag: 'by_paginate' })
	    }, 1000)

		this.height = "min-height:" + Number(this.$q.screen.height - 50 - 48) + "px"
	},				

};
</script>