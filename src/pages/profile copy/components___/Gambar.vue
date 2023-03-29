<template>
<div>

  <!-- <ProfileUtama class="q-px-sm q-pt-sm q-pb-sm" />    -->

  <!-- No Image -->
  <q-item :to="prop_route" clickable v-if="get_layout == 2" class="q-pa-none " v-ripple="{color: 'grey' }">

    <q-item-section class="q-px-sm">

      <q-item-label class="text-weight-bold" v-html="textWrap(prop_content, 125, '...')"></q-item-label>

    </q-item-section>

  </q-item>

  <router-link class="unlink" :to="prop_route">

  <!-- Fullsize Fixed Image Slideshow -->
  <q-card v-if="get_layout == 0" flat class="hover q-pt-sm q-mx-sm no-border-radius ">

    <div v-ripple="{color: 'grey' }" class="q-px-sm q-mb-md text-weight-bold" v-html="textWrap(prop_content, 100, '...')"></div>

    <div v-if="prop_gambar.length > 0" >
      <!-- di HP cukup lagging -->
      <!-- <div v-if="$q.screen.width <= 425 || $q.platform.is.mobile" class="swiper-container swiper-container-initialized swiper-container-horizontal">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in prop_gambar" :key="index + 'slick'">
            <q-img
              loading="lazy"
              class="no-outline"
              :src="item.file"
              style="object-fit: cover;"
            />
          </div>
        </div>
        <div class="swiper-pagination text-center"></div>
      </div> -->


        <q-carousel
          :swipeable="thumbnails == !fullscreen"
          class="my-panel q-pa-sm"
          :class="[ fullscreen ? 'bg-black' : 'bg-white' ]"
        v-model="slide"
        arrows
        infinite
        :fullscreen.sync="fullscreen"
        :thumbnails="thumbnails == fullscreen"
        :navigation="thumbnails == !fullscreen"
        >

        <q-carousel-slide  class="q-pa-none q-ma-none rounded-borders"  v-for="(item, index) in prop_gambar" :key="index + 'slick'" :name="index" :img-src="item.file">
          <v-zoomer style="height:500px;">
            <div :class="[fullscreen ? '' : 'fit']">
              <q-img @click="onZoom(item.file)" class="rounded-borders full-height" :src="item.file" />
            </div>
          </v-zoomer>
        </q-carousel-slide>       

        <template v-slot:control>
          <q-carousel-control
            :position="fullscreen ? 'bottom' : 'top-right'"
            :offset="fullscreen ? [($q.screen.width / 2) - 15, 90] : [18, 18]"
          >
            <q-btn
              unelevated round dense color="white" text-color="primary"
              :icon="fullscreen ? 'close' : 'fullscreen'"
              @click="fullscreen = !fullscreen"
            />
          </q-carousel-control>
        </template>       
        </q-carousel>
    </div>

<!--    <div class="swiper-container-component swiper-container-initialized swiper-container-horizontal">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in prop_gambar" :key="index + 'slick'">
          <q-img
            loading="lazy"
            class="no-outline"
            :src="item.file"
            style="object-fit: cover;"
          />
        </div>
      </div>

      <div class="swiper-pagination-component text-center"></div>
    </div> -->

  </q-card>   


  <!-- Fullsize Fixed Image -->
  <q-card v-if="get_layout == 1" flat v-ripple="{color: 'grey' }"  class="hover q-pt-sm q-pb-xs no-border-radius">

    <div class="q-px-sm q-mb-md text-weight-bold" v-html="textWrap(prop_content, 100, '...')"></div>

    <img
      loading="lazy"
      :src="get_file(0)"
      style="width: 100%; object-fit: cover;"
      >
  </q-card>      

  <!-- Fullsize Image -->
  <!-- <q-card v-if="prop_layout == 2" flat v-ripple="{color: 'grey' }"  class="q-px-sm q-pt-sm q-pb-xs no-border-radius">

    <div class="q-mb-sm" v-html="textWrap(prop_content, 100, '...')"></div>

    <q-img
    img-class="rounded-borders"
    src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg"
    style="width: 100%"
    />
  </q-card> -->       


  <!-- 2 Column Image -->
  <q-card v-if="get_layout == 6" flat v-ripple="{color: 'grey' }"  class="hover q-px-sm q-pt-sm q-pb-sm  no-border-radius">

    <div class="col-12 q-mb-md text-weight-bold" v-html="textWrap(prop_content, 100, '...')"></div>

    <div v-if="prop_gambar.length > 0" class="row q-gutter-xs">
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
  <q-card v-if="get_layout == 7" flat v-ripple="{color: 'grey' }"  class="hover q-px-sm q-pt-sm q-pb-sm  no-border-radius">

    <div class="col-12 q-mb-md text-weight-bold" v-html="textWrap(prop_content, 100, '...')"></div>

    <div v-if="prop_gambar.length > 0" class="row q-gutter-xs">
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

  </router-link>


  <q-item dense class="q-pa-none q-px-sm text-grey">
    <q-item-section>
      <span class="vertical-middle" style="font-size:12px;">{{ created_at }}</span>
    </q-item-section>

    <q-item-section side>
        <div>
          <q-btn @click="onSubmit" flat color="pink" size="12px" round :icon="status_suka ? 'favorite' : 'favorite_border'" />
          <span style="font-size:12px;">{{ total_suka }}</span>
        </div>
    </q-item-section>
  </q-item>

  <q-separator />

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
      }
    },    
  } 
}


export default {
    mixins: [menyukai],    
    data() {
      return {
        slide: 1,
        fullscreen: false,
        thumbnails: true,
      }
    },
    props: {
      prop_route: {
        default: () => ({})
      }
    },     
    watch: {
      async fullscreen(val) {
        if(val) {
          // const parent = (document.getElementById('my-carousel'))
          // parent.querySelector('.q-carousel__slide').style = ""

          await this.$nextTick()
          var all = document.getElementsByClassName('q-carousel__slide');
          for (var i = 0; i < all.length; i++) {
            all[i].style = '';
          }       

          var el = document.getElementsByClassName('q-carousel__navigation-inner');
          // console.log(el)
          for (var j = 0; j < el.length; j++) {
            console.log(el[j].style)
            el[j].style = 'overflow: auto !important;';
          }       
        }
      },
      async slide(val) {
        if(!this.fullscreen) return

        await this.$nextTick()
        var all = document.getElementsByClassName('q-carousel__slide');
        for (var i = 0; i < all.length; i++) {
          all[i].style = '';
        }       
        console.log(all)
      }
    },
    // props: {
    //   prop_gambar: {
    //     default: () => ([]),
    //   },      
    //   prop_content: {
    //     default: ""
    //   },
    // },
    methods: {
      onZoom(file) {

      }
    },
    computed: {
      get_file() {
        return function(index) {
          if(this.prop_gambar.length <= 0) return
          if(this.prop_gambar[index] == undefined) return

          return this.prop_gambar[index]['file'];
        }
      },
      get_layout() {
        if(this.prop_gambar.length == 1) {
          return 1 // Fullsize Fixed Image
        } else if(this.prop_gambar.length == 2) {
          return 6
        } else if(this.prop_gambar.length >= 3) {
          return 7         
        } else if(this.prop_gambar.length <= 0) {
          return 2
        }
      }
    }   
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