<template>
<div>
	<q-page v-if="!loading && konten.length <= 0 && MOUNTED" class="flex flex-center">
		<BlankArtikel />
	</q-page>   

	<SpinnerOrbit v-if="loading" />

	<!-- <transition name="fade-global">		
		<div v-if="MOUNTED && get_profile_konten_beranda.length > 0">
			<div v-for="(item, index) in get_profile_konten_beranda" :key="index" >
				<ProfileUtama class="q-px-sm q-pt-sm q-pb-sm" />

				<div v-if="item.tipe == 'Jawaban_Konsultasi_Model'" class="text-body2 q-pa-sm">Jawaban: {{ item.konsultasi.deskripsi }} </div>

				<div v-if="item.tipe == 'Jawaban_Konsultasi_Model'" class="q-ma-sm set-border q-mb-md">
					<ItemProfileLayoutBeranda :prop_data="item.konsultasi.user_gambars" :prop_tipe="item.tipe" />
				</div>
				<div v-else>
					<ItemProfileLayoutBeranda :prop_data="item.user_gambars" :prop_tipe="item.tipe" />
				</div>

				<q-separator />
			</div>
		</div>	  
	</transition> -->

    <div v-if="konten.length > 0" v-for="(item, index) in konten" :key="index" >
      <div>
        <!-- <Profile :prop_data="item.user" class="q-px-sm q-py-sm" />

		<div v-if="item.tipe == 'Jawaban_Konsultasi_Model'" v-ripple="{color:'grey'}" class="postion-relative text-body2 q-pa-sm" v-html="'Jawaban: '+textWrap(item.deskripsi, 150, '...')"></div>

		<div v-if="item.tipe == 'Jawaban_Konsultasi_Model'" class="q-ma-sm set-border q-mb-md">
			<Beranda 
				:form="{
			        id_pemilik_postingan: item.id_user,
			        id_postingan: item.id,
			        type: item.user_morph_type,
			        label: item.tipe_to_label,    							
				}"
				:created_at="item.created_at"
				:menyukai="item.menyukai"
				:prop_content="item.deskripsi" 
				:prop_data="item.konsultasi.user_gambars" 
				:prop_tipe="item.tipe" />
		</div>
		<div v-else>
			<Beranda 
				:form="{
			        id_pemilik_postingan: item.id_user,
			        id_postingan: item.id,
			        type: item.user_morph_type,
			        label: item.tipe_to_label,    							
				}"
				:created_at="item.created_at"
				:menyukai="item.menyukai"
				:prop_total="item.user_totals" 
				:prop_content="item.judul" 
				:prop_data="item.user_gambars" 
				:prop_tipe="item.tipe" />
		</div>

      	   
      	<q-separator /> -->
      	<Profile :prop_data="item.user" class="q-px-sm q-py-sm" />
      	
		<div v-if="item.tipe == 'Jawaban_Konsultasi_Model'" >
		    <router-link class="unlink" :to="{
				name: 'konsultasi_jawaban_detail',
				params: {
					id_konsultasi: item.id_konsultasi,
					id: item.id,
				}
			}" >
				<div v-ripple="{color:'grey'}" class="relative-position text-body2 q-pa-sm hover" v-html="'Jawaban: '+textWrap(item.judul, 150, '...')"></div>
			</router-link>
		</div>


		<div v-if="item.tipe == 'Jawaban_Konsultasi_Model'" class="q-ma-sm set-border q-mb-md">
			<Item 
				:form="{
			        id_pemilik_postingan: item.id_user,
			        id_postingan: item.id,
			        type: item.tipe,
			        label: onLabelModel(item.tipe),   					
				}"
				:prop_route="{
					name: 'konsultasi_detail',
					params: {
						id: item.id_konsultasi
					}
				}"						
				:created_at="item.created_at"
				:prop_total="item.user_totals" 
				:menyukai="item.menyukai"
				:prop_content="item.konsultasi.deskripsi" 
				:prop_data="item.konsultasi.user_gambars" 
				:prop_tipe="item.tipe" />
				
		</div>
		<div v-else>
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
				:created_at="item.created_at"
				:menyukai="item.menyukai"
				:prop_total="item.user_totals" 
				:prop_content="item.judul" 
				:prop_data="item.user_gambars" 
				:prop_tipe="item.tipe" />
		</div>

      	<q-separator /> 
      </div>
    </div>  



</div>
</template>

<script type="text/javascript">
import { mapFields } from 'vuex-map-fields';

export default {
	computed: {
		...mapFields({
		      konten: "profile.konten_beranda",
		      paginate: "profile.paginate_beranda",
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
		Item: () => import("../components/Beranda"),
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
		// 	if(val == 'beranda') {
		// 		// if(this.loading) return
		// 		this.dispatchVuex('profile/action_payload_more', { alias: 'beranda', page: 1 })
		// 		// this.dispatchVuex('beranda/action_payload', { pull_refresh: true })
		// 	}
		// }
	},	
	mounted() {

		if(this.loading) return
		if(this.konten.length > 0) return
		this.dispatchVuex('profile/action_payload_more', { alias: 'beranda', page: 1, id: this.$route.params.id, tag: 'by_paginate'  })

		this.height = "min-height:" + Number(this.$q.screen.height - 50 - 48) + "px"

	},

};
</script>