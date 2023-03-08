<template>
  <div>

        <q-item-section class="q-px-sm q-pt-sm">

          <q-item-label class="text-black text-weight-bold text-subtitle1 q-py-sm">{{ deskripsi | text-wrap(100, '...') }}</q-item-label>

        </q-item-section>


        <q-item v-if="get_layout == 0" class="q-pa-none">

          <q-item-label class="text-body2 q-pa-sm" v-html="textWrap(tambahan, 125, '...')"></q-item-label>

        </q-item>


        <q-card flat v-if="get_layout == 4" class="q-pa-none q-ma-none">

          <q-card-section horizontal class="q-pa-sm flex flex-center">
              <q-item-section class=" q-py-none">
                <q-item-label class="text-body2" v-html="textWrap(tambahan, 125, '...')"></q-item-label>
              </q-item-section>

              <q-item-section v-if="prop_data.length > 0" top class="max-width-thumbnail col-5">
                  <q-img :ratio="16/9"
                    img-class="custom-image rounded-borders"
                    class="flex flex-end"
                    :src="get_file(0)"
                  />
              </q-item-section> 


          </q-card-section>

        </q-card>


        <q-card v-if="get_layout == 1" flat class="q-pa-sm no-border-radius">

          <q-item-label class="text-body2 q-mb-sm" v-html="textWrap(tambahan, 125, '...')"></q-item-label>

          <img class="rounded-borders" 
            loading="lazy"
            :src="get_file(0)"
            style="width: 100%; object-fit: cover;"
            >
        </q-card> 


        <!-- 2 Column Image -->
        <q-card v-if="get_layout == 2" flat class="q-pa-sm no-border-radius">

          <q-item-label class="text-body2 q-mb-sm" v-html="textWrap(tambahan, 125, '...')"></q-item-label>

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
        <q-card v-if="get_layout == 3" flat class="q-pa-sm no-border-radius">

          <q-item-label class="text-body2 q-mb-sm" v-html="textWrap(tambahan, 125, '...')"></q-item-label>

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

  </div>
</template>

<script type="text/javascript">

	export default {
		props: {

      prop_data: {
        default: () => ([]),
      },         
			prop_tambahan: {
				default: "Learn about our RFC process, Open RFC meetings & more.Join in the discussion! » Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit."
			},
      prop_deskripsi: {
        default: "Learn about our RFC process, Open RFC meetings & more.Join in the discussion! »"
      },
      // prop_meta: {
      //   default: "20/10/2020"
      // }
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
        if(this.prop_data.length == 0) {
          return 0         
        } else if(this.prop_data.length == 1) {
          const m = Math.round(Math.random()*5)
          return m > 2 ? 4 : 1 // 4 // 1 
        } else if(this.prop_data.length == 2) {
          return 2
        } else if(this.prop_data.length >= 3) {
          return 3         
        } 
      }
    },    

    data() {
      return {
        tambahan: "",
        deskripsi: "",
        // meta: "",

        thumbnail: Math.random() * 10,
      }
    },
    mounted() {
      let _tambahan = this.prop_tambahan
      _tambahan = _tambahan.replaceAll(new RegExp('learn', 'gi'), '<span class="text-blue text-weight-bold">Learn</span>')

      let _deskripsi = this.prop_deskripsi
      _deskripsi = _deskripsi.replaceAll(new RegExp('learn', 'gi'), '<span class="text-blue text-weight-bold">Learn</span>')

      // let _meta = this.prop_meta
      // _meta = _meta.replaceAll(new RegExp('learn', 'gi'), '<span class="text-blue text-weight-bold">Learn</span>')

      this.tambahan = _tambahan
      this.deskripsi = _deskripsi
      // this.meta = _meta
    }
	};
</script>