<template>
<div :class="[ visited ? 'bg-white' : 'bg-grey-2' ]">

  <slot name="profile" />

  <q-item @click="onSubmit" v-if="get_layout == 0" class="q-pa-none" v-ripple="{color: 'grey' }">

    <q-item-section class="q-px-sm q-py-md">

      <q-item-label class="weight-500" v-html="textWrap(prop_content, 125, '...')"></q-item-label>

      <q-item-label v-if="is_not_mobile_size && prop_gambar.length > 0" class="text-body2 q-pt-md" v-html="textWrap(prop_content_tambahan, 200, '...')"></q-item-label>

    </q-item-section>

  </q-item>     

    <!-- Simple -->
  <q-item @click="onSubmit" v-if="get_layout == 1" class="q-pa-none" v-ripple="{color: 'grey' }">

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


    <!-- Fullsize Fixed Image Slideshow -->
  <q-card @click="onSubmit" v-if="get_layout == 2" flat v-ripple="{color: 'grey' }" class="bg-transparent q-pt-sm no-border-radius">

    <div class="q-px-sm weight-500" v-html="textWrap(prop_content, 100, '...')"></div>

    <q-item-label v-if="is_not_mobile_size" class="text-body2 q-pt-md q-mb-md " v-html="textWrap(prop_content_tambahan, 200, '...')"></q-item-label>

    <div class="swiper-container-component swiper-container-initialized swiper-container-horizontal">
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
    </div>

  </q-card>   

    <!-- Fullsize Fixed Image -->
  <q-card @click="onSubmit" v-if="get_layout == 5" flat v-ripple="{color: 'grey' }"  class="bg-transparent q-pt-sm q-pb-xs no-border-radius">

      <div class="q-px-sm weight-500" v-html="textWrap(prop_content, 100, '...')"></div>

    <q-item-label v-if="is_not_mobile_size" class="text-body2 q-pt-md q-mb-md " v-html="textWrap(prop_content_tambahan, 200, '...')"></q-item-label>

    <img
      loading="lazy"
      :src="get_file(0)"
      style="width: 100%; object-fit: cover;"
    >
  </q-card>      

  <!-- Fullsize Image -->
  <q-card v-if="get_layout == 6" flat v-ripple="{color: 'grey' }"  class="bg-transparent q-px-sm q-pt-sm q-pb-xs no-border-radius">

      <div class="weight-500" v-html="textWrap(prop_content, 100, '...')"></div>

    <q-item-label v-if="is_not_mobile_size" class="text-body2 q-pt-md q-mb-md " v-html="textWrap(prop_content_tambahan, 200, '...')"></q-item-label>

    <q-img
      img-class="rounded-borders"
      :src="get_file(0)"
      style="width: 100%"
    />
  </q-card>       

  <!-- 2 Column Image -->
  <q-card @click="onSubmit" v-if="get_layout == 7" flat v-ripple="{color: 'grey' }"  class="bg-transparent q-px-sm q-pt-sm q-pb-sm  no-border-radius">

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
  <q-card @click="onSubmit" v-if="get_layout == 8" flat v-ripple="{color: 'grey' }"  class="bg-transparent q-px-sm q-pt-sm q-pb-sm  no-border-radius">

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

  <q-item dense class="q-pa-none q-px-sm text-grey q-mt-sm">
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

const visited = {
  data() {
    return {
      visited: 0
    }
  },
  props: {
    uuid: {
      default: ''
    },
    read_at: {
      default: ''
    },
  },
  watch: {
    read_at(val) {
      console.log(val)
      this.visited = val ? 1 : 0
    }
  },
  mounted() {
    this.visited = this.read_at ? 1 : 0
  },
  methods: {
    async onSubmit() {
      // this.visited = 1

      const request = await this.dispatchVuex('notifikasi_resmi/request_update', { id: this.uuid })
      console.log(request)
      if(!request) return

      this.visited = 1 //request.value
    },  
    // onLoad() {
    //   console.log('trigger me when image has fully loaded');
    // },            
  }
};

export default {
  mixins: [menyukai, visited], 
    mounted() {

        new Swiper('.swiper-container-component', {
          slidesPerView: 1,
          spaceBetween: 1.5,
          loop: false,
          pagination: {
            el: '.swiper-pagination-component',
            type: 'fraction',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });     
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
        if(this.prop_gambar.length <= 0) {
          return 0
        } else if(this.prop_gambar.length == 1) {
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
        } else if (this.prop_gambar.length >= 2) {
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

<style type="text/css" scoped>
.q-item__section--thumbnail img {
    width: auto;
    height: 65px;
}  
.custom-image {
  filter: brightness(75%);
}

</style>