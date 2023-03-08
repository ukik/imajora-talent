<template>
  <div>
        <!--
        <ProfileUtama class="q-pa-sm" />
        -->
        <q-item v-if="get_layout == 4" class="q-pa-none" v-ripple="{color: 'grey' }">

          <q-item-section class="q-px-sm q-py-md">

            <q-item-label class="weight-500" v-html="textWrap(prop_content, 125, '...')"></q-item-label>

            <q-item-label v-if="is_not_mobile_size && prop_gambar.length > 0" class="text-body2 q-pt-md" v-html="textWrap(prop_content_tambahan, 200, '...')"></q-item-label>

          </q-item-section>

        </q-item>     


        <!-- 2 Column Image -->
        <q-card v-if="get_layout == 0" flat v-ripple="{color: 'grey' }"  class="q-px-sm q-pt-sm q-pb-sm  no-border-radius">

            <div class="col-12 weight-500" v-html="textWrap(prop_content, 100, '...')"></div>

          <q-item-label v-if="is_not_mobile_size" class="text-body2 q-pt-md q-mb-md " v-html="textWrap(prop_content_tambahan, 200, '...')"></q-item-label>

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

            <div class="col-12 weight-500" v-html="textWrap(prop_content, 100, '...')"></div>

          <q-item-label v-if="is_not_mobile_size" class="text-body2 q-pt-md q-mb-md " v-html="textWrap(prop_content_tambahan, 200, '...')"></q-item-label>

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
                <q-item-label class=" weight-500" v-html="textWrap(prop_content, 125, '...')"></q-item-label>
                <!-- <q-item-label v-if="is_not_mobile_size" class="q-pt-md" v-html="textWrap(prop_content, 125, '...')"></q-item-label> -->

              <q-item-label v-if="is_not_mobile_size" class="text-body2 q-pt-md" v-html="textWrap(prop_content_tambahan, 200, '...')"></q-item-label>
              </q-item-section>

              <q-item-section class="max-width-thumbnail col-5">
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

        <div class="q-mt-sm">
          <!-- <ToolbarDibawahUtamaKonsultasi /> -->
          <slot name="toolbar" />        
        </div>

        <!-- <q-separator /> -->

  </div>
</template>

<script type="text/javascript">

const menyukai = {
  data() {
    return {
      total_suka: 0,
      status_suka: false,
    }
  },
  mounted() {   
    this.status_suka = this.menyukai
    this.total_suka = this.get_total('suka')
  },
  methods: {
    async onSubmit() {
      const request = await this.dispatchVuex('aggregator/set_menyukai', this.form)
      if(!request.data) return
      // this.total_suka += request.value
      this.total_suka = request.data.total
      this.status_suka = request.value > 0 ? true : false
    },
  },    
  props: {
    form: {
      default: () => ({
        user_sukaable_id: '',
        user_sukaable_type: '',
        label: '',
      })
    },
    created_at: {
      default: '',
    },
    menyukai: {
      default: () => ({})
    },
    prop_total: {
      default: () => ([]),
    },            
    prop_tipe: {
      default: '',
    },     
    prop_gambar: {
      default: () => ([]),
    },      
    prop_content: {
      default: ""
    },
    prop_content_tambahan: {
      default: ""
    },
  },
  computed: {
    get_total() {
      return function(label) {

        if(this.prop_total.length <= 0) return 0

        for (var i = this.prop_total.length - 1; i >= 0; i--) {
          if(this.prop_total[i].label == label) {
            return this.prop_total[i].total
          }
        }

        return 0
      }
    },    
  } 
}


export default {
  mixins: [menyukai], 
		// props: {

		// 	prop_data: {
		// 		default: () => ([]),
		// 	},     
		// 	prop_content: {
		// 		default: "Learn about our RFC process, Open RFC meetings & more.Join in the discussion! » Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit."
		// 	},
  //     prop_title: {
  //       default: "Learn about our RFC process, Open RFC meetings & more.Join in the discussion! »"
  //     },
  //     prop_meta: {
  //       default: "20/10/2020"
  //     }
		// },
		computed: {
      get_file() {
        return function(index) {
          if(this.prop_gambar.length <= 0) return
          if(this.prop_gambar[index] == undefined) return

          return this.prop_gambar[index]['file'];
        }
      },
			get_layout() {
          console.log(this.prop_gambar)
          // return
          if(this.prop_gambar.length <= 0) {
            return 4
          } else if(this.prop_gambar.length == 1) {
            return 3
					} else if (this.prop_gambar.length == 2) {
						// 2 Column Image || Fullsize Fixed Image Slideshow
						return 0
					} else {
						// 3 Column Image || Fullsize Fixed Image Slideshow
						return 1
					}
				

			}
		},    
    // data() {
    //   return {
    //     content: "",
    //     title: "",
    //     // meta: "",
    //   }
    // },
    // mounted() {
    //   let _content = this.prop_content
    //   _content = _content.replaceAll(new RegExp('learn', 'gi'), '<span class="text-blue text-weight-bold">Learn</span>')

    //   let _title = this.prop_title
    //   _title = _title.replaceAll(new RegExp('learn', 'gi'), '<span class="text-blue text-weight-bold">Learn</span>')

    //   // let _meta = this.prop_meta
    //   // _meta = _meta.replaceAll(new RegExp('learn', 'gi'), '<span class="text-blue text-weight-bold">Learn</span>')

    //   this.content = _content
    //   this.title = _title
    //   // this.meta = _meta
    // }
	};
</script>