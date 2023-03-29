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

				<div class="text-body2 q-pa-sm">Jawaban: {{ item.konsultasi.deskripsi }} </div>

				<div class="q-ma-sm set-border q-mb-md">
					<ItemProfileLayoutKonsultasi :prop_data="item.konsultasi.user_gambars" />
				</div>

				<q-separator />
			</div>
		</div>
	</transition> -->

    <div v-if="konten.length > 0" v-for="(item, index) in konten" :key="index" >
      <div>
        <Profile :prop_data="item.user" class="q-px-sm q-py-sm" />

		<!-- <div class="text-body2 q-pa-sm">Jawaban: {{ item.konsultasi.deskripsi }} </div> -->

		<div v-if="item.tipe == 'Jawaban_Konsultasi_Model'" >
	        <router-link class="unlink" :to="{
				name: 'konsultasi_jawaban_detail',
				params: {
					id_konsultasi: item.id_konsultasi,
					id: item.id,
				}
			}" >
				<div v-ripple="{color:'grey'}" class="relative-position text-body2 q-pa-sm hover" v-html="'Jawaban: '+textWrap(item.dukungan, 150, '...')"></div>
			</router-link>
		</div>

		<div class="q-ma-sm set-border q-mb-md">

	        <Item
	          :index="index"
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
	          :prop_total="item.user_totals"
	          :created_at="item.created_at"
	          :menyukai="item.menyukai"
	          :prop_content="item.deskripsi"
	          :prop_content_tambahan="item.tambahan"
	          :prop_gambar="item.konsultasi.user_gambars"
	          :prop_tipe="item.tipe" />


			<!-- <Item
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
				:menyukai="item.menyukai"
				:prop_content="item.konsultasi.deskripsi"
				:prop_data="item.konsultasi.user_gambars"
				:prop_tipe="item.tipe" /> -->


	          <Toolbar
	          	slot="toolbar"
	            :form_menyukai="{
	              id_pemilik_postingan: item.id_user,
	              id_postingan: item.id,
	              type: 'Jawaban_Konsultasi_Model',
	              label: 'jawaban_konsultasi',
	            }"
	            :form_favorit="{
	              id_pemilik_postingan: item.id_user,
	              id_postingan: item.id,
	              type: 'Jawaban_Konsultasi_Model',
	              label: 'jawaban_konsultasi',
	            }"
	            :form_dukungan="{
	              id_pemilik_postingan: item.id_user,
	              id_postingan: item.id,
	              type: 'Jawaban_Konsultasi_Model',
	              label: 'jawaban_konsultasi',
	            }"
	            :dukungan="item.dukungan"
	            :menyukai="item.menyukai"
	            :favorit="item.favorit"
	            :created_at="item.created_at"
	            :prop_total="item.user_totals" />

	      	</Item>
		</div>

      </div>
      <q-separator />
    </div>


</div>
</template>

<script type="text/javascript">
;

export default {
	computed: {
		// ...mapFields({
		//       konten: "profile.konten_jawaban_konsultasi",
		//       paginate: "profile.paginate_jawaban_konsultasi",
		//       loading: "profile.loading",
		//       current_tab: "profile.current_tab",
		// }),
	},
	data() {
		return {
			MOUNTED: false,
			height: "min-height:" + this.$q.screen.height + "px",
		}
	},
	components: {
		Profile: () => import('../components/Profile'),
		Item: () => import('../components/Konsultasi'),
		Toolbar: () => import('../components/ToolbarKonsultasi'),

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
		// 	if(val == 'jawaban_konsultasi') {
		// 		// if(this.loading) return
		// 		this.dispatchVuex('profile/action_payload_more', { alias: 'jawaban_konsultasi', page: 1 })
		// 		// this.dispatchVuex('beranda/action_payload', { pull_refresh: true })
		// 	}
		// }
	},
	mounted() {
	    setTimeout(() => {
			this.dispatchVuex('profile/action_payload_more', { alias: 'jawaban_konsultasi', page: 1, id: this.$route.params.id, tag: 'by_paginate'  })
	    }, 1000)

		this.height = "min-height:" + Number(this.$q.screen.height - 50 - 48) + "px"
	},

};
</script>
