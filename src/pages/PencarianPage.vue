<template>
  <!-- <SkeletonTwitch class="q-pa-md" v-if="!init || loading && data.length <= 0" />
<SkeletonTwitch class="q-pa-md" v-if="!init || loading && data.length <= 0" />
<SkeletonTwitch class="q-pa-md" v-if="!init || loading && data.length <= 0" /> -->

  <!-- v-if="data.length > 0" -->
  <q-no-ssr>
        <!-- <q-input type="search" @clear="onGoto" clearable v-model="keyword" debounce="750" dense bg-color="bg-grey-2"
          rounded placeholder="cari properti..." standout="bg-blue text-white">
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input> -->

    <!-- <Empty v-if="init && !loading && data.length <= 0" /> -->

    <q-list bordered separator>

      <q-item class="q-px-sm" v-ripple v-for="(item, index) in data" :key="index" clickable :to="{
        name: 'detail', params: {
          id: item?.id, slug: item?.slug
        }
      }">

        <q-item-section side>

          <q-img class="border_radius_2 bg-dark"
            :style="is_mobile_size ? 'height: 80px; width: 80px;' : 'height: 100px; width:100px;'"
            :src="img_checker(item?.featured?.big_image)" :placeholder-src="default_avatar">

            <Top_Left_Ribbon v-if="item?.blokir" class="absolute-top-left" />

            <template v-slot:error>
              <div class="absolute-full flex flex-center bg-negative text-white">
                <Top_Left_Ribbon v-if="item?.blokir" class="absolute-top-left" />
                Cannot load image
              </div>

              <span v-if="item?.soldout" class="absolute-bottom text-center my_chip q-pa-sm">
                SOLD OUT
              </span>

            </template>

            <span v-if="item?.soldout" class="absolute-bottom text-center my_chip q-pa-sm">
              SOLD OUT
            </span>
          </q-img>

        </q-item-section>

        <q-item-section v-if="is_mobile_size">
            <!-- {{ item?.judul }} -->
          <!-- <q-item-label class="row text-subtitle1" lines="1">

          </q-item-label> -->

          <div class="absolute-top-right q-pa-xs">
            <q-chip class="q-mx-none" color="teal" size="sm" text-color="white" >
              Complete
            </q-chip>
            <!-- <q-chip class="q-mx-none" outline color="primary" size="12px" text-color="white" icon-right="schedule">
              Process
            </q-chip>
            <q-chip class="q-mx-none" outline color="orange" size="12px" text-color="white" icon-right="history">
              Pending
            </q-chip> -->
          </div>

          <q-item-label caption lines="1">
            Order: 14456778, (Rp. 2.000.000)
          </q-item-label>
          <q-item-label caption class="text-dark" lines="1">
            Talent / Client: {{ item?.kategori }} xxxxx xxxxx xxxx xxxx
          </q-item-label>
          <q-item-label caption class="text-dark" lines="1">
            Venue: xxxxxxx, 12:00 sd 13:15
          </q-item-label>
          <q-item-label caption class="text-dark" lines="1">
            Schedule: 12:00 sd 13:15
          </q-item-label>

          <!-- <q-item-label caption lines="1">
            Alamat: {{ item?.alamat }}
          </q-item-label>

          <q-item-label v-if="is_mobile_size" caption lines="1" class="text-capitalize">
            {{ item?.kategori }} / {{ item?.regencies }}
          </q-item-label>

          <q-item-label class="text-subtitle2 text-primary q-pt-sm" lines="1">
            <OwnedLabel v-if="user.id == item?.properti?.user_id" class="text-caption" dense /> {{
              $filters.currency(item?.harga) }}
          </q-item-label> -->
        </q-item-section>

        <q-item-section v-else>
          <!-- <q-item-label v-if="user.id == item?.properti?.user_id" lines="1">
            <OwnedLabel class="text-caption" />
          </q-item-label> -->
          <q-item-label class="text-h6 text-primary " lines="1">
            <!-- {{ $filters.currency(item?.harga) }} -->
          </q-item-label>

          <div class="absolute-top-right q-pa-xs">
            <q-item-label lines="1" class="text-capitalize">
              <q-chip class="q-mx-none"  color="teal" size="12px" text-color="white" icon-right="check_circle_outline">
                Complete
              </q-chip>
              <!-- <q-chip class="q-mx-none" outline color="pink" size="12px" text-color="white" icon-right="music_note">
                Perform
              </q-chip> -->
              <q-chip class="q-mx-none"  color="primary" size="12px" text-color="white" icon-right="schedule">
                Process
              </q-chip>
              <q-chip class="q-mx-none"  color="orange" size="12px" text-color="white" icon-right="history">
                Pending
              </q-chip>
            </q-item-label>
          </div>

          <q-item-label caption lines="1">
            Order: 14456778, (Rp. 2.000.000)
          </q-item-label>
          <q-item-label class="text-body2" lines="1">
            Talent / Client: {{ item?.kategori }}
          </q-item-label>
          <q-item-label class="text-body2" lines="1">
            Venue: xxxxxxx, 12:00 sd 13:15
          </q-item-label>
          <q-item-label class="text-body2" lines="1">
            Schedule: xxxxxxx, 12:00 sd 13:15
          </q-item-label>

          <!-- <q-item-label class="text-subtitle1" lines="1">
            {{ item?.judul }}
          </q-item-label> -->

          <!-- <q-item-label caption lines="1">
            Alamat: {{ item?.alamat }}
          </q-item-label> -->

          <!-- <q-item-label caption lines="1" class="text-capitalize">
            {{ item?.regencies }}
          </q-item-label> -->

        </q-item-section>

      </q-item>


    </q-list>

    <Paginate_Aset />
  </q-no-ssr>
</template>

<script type="text/javascript">



import { demo } from "src/modal.js"

export default {
  computed: {
    ...mapFields({
      // rightDrawerOpen: 'layout.local.rightDrawerOpen',

      // init: 'pencarian.index.meta.init',
      // loading: 'pencarian.index.meta.loading',

      // data: 'pencarian.index.data.payload.data',

      // page: 'pencarian.index.data.payload.current_page',
      // keyword: 'pencarian.local.keyword',
      // min: 'pencarian.local.min',
      // max: 'pencarian.local.max',
      // regencies: 'layout.local.regency',
      // kategori: 'pencarian.local.kategori',
    }),
  },
  methods: {
    onGoto() {
      this.$router.replace({
        name: 'pencarian',
        params: {
          page: this.page
        },
        query: {
          keyword: this.keyword,
          min: this.min,
          max: this.max,
          regency: this.regencies,
          kategori: this.kategori,
        }
      })
    }
  },
  data() {
    return {
      rightDrawerOpen: false,

      init: false,
      loading: false,

      page: demo.current_page,
      keyword: '',
      min: 0,
      max: 0,
      regencies: 'layout.local.regency',
      kategori: 'pencarian.local.kategori',

      data: demo.data
    }
  }

};

</script>
