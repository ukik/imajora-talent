<template>
<div>	

		<!-- Fullsize Image -->
		<q-card flat v-ripple="{color: 'grey' }" class="q-px-sm q-pt-sm q-pb-xs no-border-radius">

			<q-item-label class="text-weight-bold q-my-sm" v-html="textWrap(kataDicari(prop_data.judul, ''), 100, '...')"></q-item-label>

	        <!-- <q-item-label class="q-pa-none artikel-list-item" style="line-height: 150% !important;"  v-html="textWrap(remove_image_tag(prop_data.deskripsi), 220, '...')"></q-item-label> -->

			<q-img v-if="prop_data.user_gambars.length > 0 && MOUNTED"
				img-class="rounded-borders q-my-sm"
				:src="get_file(0)"
				style="width: 100%">

	        	<div v-if="prop_data.user_gambars.length > 1" class="absolute-top-right bg-transparent q-mt-md">
			    	<q-icon size="24px" name="layers" />
		        </div>
			</q-img>

		</q-card>	      


		<ToolbarAlquranKutipan class="q-pa-sm"
		  :form_menyukai="{
		    id_pemilik_postingan: prop_data.id_user,
		    id_postingan: prop_data.id,
		    type: prop_data.tipe,
		    label: prop_data.tipe_to_label, 
		  }" 
		  :menyukai="prop_data.menyukai" 
		  :prop_total="prop_data.user_totals">

			<q-item-section slot="created">
			    <span class="vertical-middle" style="font-size:12px;">{{ prop_data.created_at }}</span>
			</q-item-section>

		 </ToolbarAlquranKutipan>       


		<!-- <div class="row q-py-sm q-pl-sm q-pr-xs text-grey">

		    <q-item-section>
		        <span class="vertical-middle" style="font-size:12px;">{{ prop_data.created_at }}</span>
		    </q-item-section>

			<ToolbarAlquranKutipan 
			  :form_menyukai="{
			    id_pemilik_postingan: prop_data.id_user,
			    id_postingan: prop_data.id,
			    type: 'Alquran_Ayat_Model',
			    label: 'alquran', 
			  }" 
			  :form_favorit="{
			    id_pemilik_postingan: prop_data.id_user,
			    id_postingan: prop_data.id,
			    type: 'Alquran_Ayat_Model',
			    label: 'alquran', 
			  }" 
			  :id_postingan="prop_data.id"
			  :id_pemilik_postingan="prop_data.id_user"
			  :menyukai="prop_data.menyukai" 
			  :prop_total="prop_data.user_totals"/>            

		</div> -->

		<q-separator />

</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				// belum dibenchmark apakah pakai ini, atau preFetch 
				MOUNTED: false,
			}
		},
		beforeDestroy() {
			this.MOUNTED = false
		},
		deactivated() {
			this.MOUNTED = false
		},
		activated() {
			setTimeout(() => {
				this.MOUNTED = true
			}, 500)
		},
		mounted() {
			setTimeout(() => {
				this.MOUNTED = true
			}, 500)
		},
		props: {
		      prop_data: {
		        default: () => ({
		        	judul: '',
		        	user_gambars: [],
					user: {
						user_komentars_count: 0,
						user_sukas_count: 0,
					}
		        }),
		      },      

		},
		computed: {
			get_file() {
				return function(index) {
					if(this.prop_data.user_gambars.length <= 0) return
					if(this.prop_data.user_gambars[index] == undefined) return

					return this.prop_data.user_gambars[index]['file'];
				}
			},
			get_layout() {
				if(this.prop_data.length <= 0) {
					return 0
				} else if(this.prop_data.length == 1) {
					// Simple
					return 1
					// Fullsize Image
					const n = Math.round(Math.random() * 3)
					if( n == 1) {
						return 1
					} else if(n == 2) {
						return 5 
					} else {
						return 6
					}
				} else if (this.prop_data.length >= 2) {
					// 2 Column Image || Fullsize Fixed Image Slideshow
					return 7 //Math.round(Math.random() * 1) > 0 ? 6 : 2;
				} else {
					return 8
					// 3 Column Image || Fullsize Fixed Image Slideshow
					return Math.round(Math.random() * 1) > 0 ? 7 : 2;
				}

			}
		}
	};
</script>
