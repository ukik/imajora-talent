<template>
	<div>
 		<q-item dense class="q-pa-none q-px-sm ">
 			<q-item-section>
	      		<div class="vertical-middle text-grey-7" style="font-size:12px;">Tayangan: {{ get_tayang }}
	      		</div>
 			</q-item-section>
 			<q-item-section side>
	      		<span class="vertical-middle" style="font-size:12px;">{{ prop_data.created_at }}</span>
 			</q-item-section>
 		</q-item>

    <q-item-section class="q-px-sm">

      <q-item-label class="text-black text-weight-bold text-subtitle1 q-py-sm">{{ prop_data.deskripsi }}</q-item-label>

      <q-item-label class="text-body2 q-pb-md" v-html="prop_data.tambahan"></q-item-label>

    </q-item-section>

		<img v-if="get_layout == 1"
		  loading="lazy"
		  :src="get_file(0)"
		  style="width: 100%; object-fit: cover;" >

        <q-card v-if="get_layout == 2" flat class="q-px-sm q-pb-sm  no-border-radius">

            <div class="row q-gutter-xs">
                <q-img :ratio="4/3"
                  img-class="custom-image rounded-borders"
                  class="col"
                  :src="get_file(0)"
                />
                <q-img :ratio="4/3"
                  img-class="custom-image rounded-borders"
                  class="col"
                  :src="get_file(1)"
                />
            </div>
        </q-card>  

        <q-card v-if="get_layout == 3" flat class="q-px-sm q-pb-sm  no-border-radius">

            <div class="row q-gutter-xs">
              <q-img :ratio="4/3"
                img-class="custom-image rounded-borders"
                class="col"
                :src="get_file(0)"
              />
              <q-img :ratio="4/3"
                img-class="custom-image rounded-borders"
                class="col"
                :src="get_file(1)"
              />
              <q-img :ratio="4/3"
                img-class="custom-image rounded-borders"
                class="col"
                :src="get_file(2)"
              />
            </div>
        </q-card> 

        <div style="font-size:13px" class="q-mb-md q-ml-sm q-pr-sm text-grey-6 weight-400">
          {{ get_jawaban }} Jawaban
        </div>

        <!-- <div class="q-pb-xs">
          <ToolbarDibawahUtamaKonsultasiJawab1
            :form_menyukai="{
              id_pemilik_postingan: prop_data.id_user,
              id_postingan: prop_data.id,
              type: 'Konsultasi_Model',
              label: 'konsultasi', 
            }" 
            :form_favorit="{
              id_pemilik_postingan: prop_data.id_user,
              id_postingan: prop_data.id,
              type: 'Konsultasi_Model',
              label: 'konsultasi', 
            }" 
            :form_dukungan="{
              id_pemilik_postingan: prop_data.id_user,
              id_postingan: prop_data.id,
              type: 'Konsultasi_Model',
              label: 'konsultasi', 
            }" 
            :dukungan="prop_data.dukungan" 
            :menyukai="prop_data.menyukai" 
            :favorit="prop_data.favorit" 
            :created_at="prop_data.created_at"
            :prop_total="prop_data.user_totals" />            
        </div> -->

        <q-separator />

	</div>
</template>

<script type="text/javascript">
	export default {
		computed: {
      get_jawaban() {
        if(!this.prop_data.count_jawaban) return 0

        return this.prop_data.count_jawaban

      },      			
      get_tayang() {
        if(!this.prop_data.count_tayang) return 0

        return this.prop_data.count_tayang
      },      			
			get_file() {
				return function(index) {
					if(this.prop_data.user_gambars.length <= 0) return
					if(this.prop_data.user_gambars[index] == undefined) return

					return this.prop_data.user_gambars[index]['file'];
				}
			},
			get_layout() {
				if(this.prop_data.user_gambars == undefined) return
				if(this.prop_data.user_gambars.length == 1) {
					return 1 
				} else if(this.prop_data.user_gambars.length == 2) {
					return 2
				} else if(this.prop_data.user_gambars.length >= 3) {
					return 3				 
				} 
			}
		},			
		props: {
			prop_data: {
				default: () => ([]),
			},      
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