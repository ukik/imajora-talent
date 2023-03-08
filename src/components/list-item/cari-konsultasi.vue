<template>
  <div>
        <!--
        <ProfileUtama class="q-pa-sm" />
        -->

        <q-item v-if="get_layout == 4" class="q-pa-none" v-ripple="{color: 'grey' }">

          <q-item-section class="q-px-sm  q-py-md">

            <q-item-label class="text-weight-bold" v-html="textWrap(prop_deskripsi, 125, '...')"></q-item-label>

          </q-item-section>

        </q-item>

        <!-- 2 Column Image -->
        <q-card v-if="get_layout == 0" flat v-ripple="{color: 'grey' }"  class="q-px-sm q-pt-sm q-pb-sm  no-border-radius">

          <q-item-label class="q-mb-md text-weight-bold" v-html="textWrap(prop_deskripsi, 125, '...')"></q-item-label>

          <q-item-label class="q-pa-none q-pb-md" caption v-html="textWrap(prop_tambahan, 220, '...')"></q-item-label>

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

          <!-- 3 Column Image -->
        <q-card v-if="get_layout == 1" flat v-ripple="{color: 'grey' }"  class="q-px-sm q-pt-sm q-pb-sm  no-border-radius">

          <q-item-label class="q-mb-md text-weight-bold" v-html="textWrap(prop_deskripsi, 125, '...')"></q-item-label>

          <q-item-label class="q-pa-none q-pb-md" caption v-html="textWrap(prop_tambahan, 220, '...')"></q-item-label>

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

        <!-- Simple -->
        <q-item v-if="get_layout == 3" class="q-pa-none" v-ripple="{color: 'grey' }">

          <q-item-section class="q-px-sm">

            <q-item class="q-pa-none">

              <q-item-section>
                <q-item-label class="text-weight-bold" v-html="textWrap(prop_deskripsi, 125, '...')"></q-item-label>
              </q-item-section>

              <q-item-section v-if="prop_data.length > 0"  class="max-width-thumbnail col-5">
                  <q-img :ratio="16/9"
                    img-class="custom-image rounded-borders"
                    class="flex flex-end"
                    :src="get_file(0)"
                  />
              </q-item-section> 

            </q-item>

          </q-item-section>

        </q-item>


        <!--
        <q-item-section v-if="prop_layout == 2" class="q-px-sm q-py-sm  relative-position" v-ripple="{color: 'grey' }">

          <q-item-label class="q-mb-md text-weight-bold" v-html="title"></q-item-label>

          <q-item class="q-pa-none">

            <q-item-section>
              <q-item-label caption v-html="textWrap(content, 220, '...')"></q-item-label>
            </q-item-section>

            <q-item-section top class="col-5" v-if=" Math.random() * 10 > 5 ? true : false">
              <q-img :ratio="16/9"
                img-class="custom-image rounded-borders"
                src="https://cdn.quasar.dev/img/mountains.jpg"
              />
            </q-item-section> 

          </q-item>

          <div class="text-grey-6 q-mt-sm" style="font-size:12px;">{{ prop_meta }}</div>

        </q-item-section>


        <q-item-section v-if="prop_layout == 3" class="q-px-sm q-py-sm  relative-position" v-ripple="{color: 'grey' }">

          <q-item-label class="q-mb-md text-weight-bold" v-html="title"></q-item-label>

          <q-item-label class="q-pa-none q-pb-md" caption v-html="textWrap(content, 220, '...')"></q-item-label>

          <div class="text-grey-6 q-mt-sm" style="font-size:12px;">{{ prop_meta }}</div>

        </q-item-section>

        -->

        <div class="q-pb-xs">
          <!-- <ToolbarDibawahUtamaKonsultasi /> -->

          <ToolbarDibawahUtamaKonsultasi
            :index="index"
            :form_menyukai="{
              id_pemilik_postingan: item.id_user,
              id_postingan: item.id,
              type: 'Konsultasi_Model',
              label: 'konsultasi', 
            }" 
            :form_favorit="{
              id_pemilik_postingan: item.id_user,
              id_postingan: item.id,
              type: 'Konsultasi_Model',
              label: 'konsultasi', 
            }" 
            :form_dukungan="{
              id_pemilik_postingan: item.id_user,
              id_postingan: item.id,
              type: 'Konsultasi_Model',
              label: 'konsultasi', 
            }" 
            :dukungan="item.dukungan" 
            :menyukai="item.menyukai" 
            :favorit="item.favorit" 
            :created_at="item.created_at"
            :prop_total="item.user_totals" />            
        </div>

        <q-separator />

  </div>
</template>

<script type="text/javascript">

export default {
    // mixins: [menyukai],        
    props: {
      index: {
        default: null
      },
      item: {
        default: () => ({})
      },    
      prop_data: {
        default: () => ([]),
      },     
      prop_deskripsi: {
        default: ""
      },
      prop_tambahan: {
        default: ""
      },
    },
    computed: {
      get_file() {
        return function(index) {
          if(this.prop_data.length <= 0) return
          if(this.prop_data[index] == undefined) return

          return this.prop_data[index]['file'];
        }
      },
      get_layout() {

          if(this.prop_data.length <= 0) {
            return 4
          } else if(this.prop_data.length == 1) {
            return 3
          } else if (this.prop_data.length == 2) {
            // 2 Column Image || Fullsize Fixed Image Slideshow
            return 0
          } else {
            // 3 Column Image || Fullsize Fixed Image Slideshow
            return 1
          }
        

      }
    },    
  };
</script>