<template>
<q-no-ssr>
  <q-form @submit="onProses">
    <q-layout view="lHr LpR lFr">
      <q-header bordered
                unelevated>
        <q-toolbar>
          <q-toolbar-title class="text-h5 text-white text-normal full-width">
            Filter
          </q-toolbar-title>
          <q-space />
          <q-btn @click="rightDrawerOpen = false"
                 icon="arrow_forward_ios"
                 round
                 color="white"
                 dense
                 flat />
        </q-toolbar>
      </q-header>
      <q-page-container>

        <div class="row q-col-gutter-sm q-px-md q-mt-sm">
          <div class="col-6">
            <q-chip class="full-width q-ma-none q-py-md"
                    square
                    v-model:selected="desert.rumah"
                    :color="desert.rumah ? 'primary' : 'blue-5'"
                    text-color="white">
              Rumah
            </q-chip>
          </div>
          <div class="col-6 ">
            <q-chip class="full-width q-ma-none q-py-md"
                    square
                    v-model:selected="desert.apartemen"
                    :color="desert.apartemen ? 'primary' : 'blue-5'"
                    text-color="white">
              Apartemen
            </q-chip>
          </div>
          <div class="col-6 ">
            <q-chip class="full-width q-ma-none q-py-md"
                    square
                    v-model:selected="desert.vila"
                    :color="desert.vila ? 'primary' : 'blue-5'"
                    text-color="white">
              Vila
            </q-chip>
          </div>
          <div class="col-6 ">
            <q-chip class="full-width q-ma-none q-py-md"
                    square
                    v-model:selected="desert.ruko"
                    :color="desert.ruko ? 'primary' : 'blue-5'"
                    text-color="white">
              Ruko
            </q-chip>
          </div>
          <div class="col-6 ">
            <q-chip class="full-width q-ma-none q-py-md"
                    square
                    v-model:selected="desert.kavling"
                    :color="desert.kavling ? 'primary' : 'blue-5'"
                    text-color="white">
              Kavling
            </q-chip>
          </div>
          <div class="col-6 ">
            <q-chip class="full-width q-ma-none q-py-md"
                    square
                    v-model:selected="desert.lahan"
                    :color="desert.lahan ? 'primary' : 'blue-5'"
                    text-color="white">
              Lahan
            </q-chip>
          </div>
        </div>

        <Regency class="q-px-md q-mt-md"
                 :dense="false" />
        <q-input class="q-px-md q-mt-md"
                 square
                 min="0"
                 ref="min"
                 unmasked-value
                 type="number"
                 clearable
                 v-model="min"
                 reverse-fill-mask
                 text-color="grey"
                 placeholder="0"
                 bg-color="white"
                 outlined
                 label="Harga Minimum"
                 :rules="[  ]">
        </q-input>
        <q-input class="q-px-md q-mt-md"
                 square
                 min="0"
                 ref="min"
                 unmasked-value
                 type="number"
                 clearable
                 v-model="max"
                 reverse-fill-mask
                 text-color="grey"
                 placeholder="0"
                 bg-color="white"
                 outlined
                 label="Harga Maksimum"
                 :rules="[  ]">
        </q-input>

          
        <div class="q-px-md q-mt-md">
          <div class="text-caption q-mb-xs">Ruang Tamu</div>
          <div class="q-col-gutter-sm row" align="left">
            <q-input class="col"
              square
              min="0"
              ref="min_ruang_tamu"
              unmasked-value
              type="number"
              clearable
              v-model="min_ruang_tamu"
              reverse-fill-mask
              text-color="grey"
              placeholder="0"
              bg-color="white"
              outlined
              label="Min"
              :rules="[  ]" />

            <q-input class="col"
              square
              min="0"
              ref="max_ruang_tamu"
              unmasked-value
              type="number"
              clearable
              v-model="max_ruang_tamu"
              reverse-fill-mask
              text-color="grey"
              placeholder="0"
              bg-color="white"
              outlined
              label="Max"
              :rules="[  ]" />
          </div>
        </div>

        <div class="q-px-md q-mt-md">
          <div class="text-caption q-mb-xs">Kamar Mandi</div>
          <div class="q-col-gutter-sm row" align="left">
            <q-input class="col"
              square
              min="0"
              ref="min_kamar_mandi"
              unmasked-value
              type="number"
              clearable
              v-model="min_kamar_mandi"
              reverse-fill-mask
              text-color="grey"
              placeholder="0"
              bg-color="white"
              outlined
              label="Min"
              :rules="[  ]" />

            <q-input class="col"
              square
              min="0"
              ref="max_kamar_mandi"
              unmasked-value
              type="number"
              clearable
              v-model="max_kamar_mandi"
              reverse-fill-mask
              text-color="grey"
              placeholder="0"
              bg-color="white"
              outlined
              label="Max"
              :rules="[  ]" />
          </div>
        </div>

        <div class="q-px-md q-mt-md">
          <div class="text-caption q-mb-xs">Kamar Tidur</div>
          <div class="q-col-gutter-sm row" align="left">
            <q-input class="col"
              square
              min="0"
              ref="min_kamar_tidur"
              unmasked-value
              type="number"
              clearable
              v-model="min_kamar_tidur"
              reverse-fill-mask
              text-color="grey"
              placeholder="0"
              bg-color="white"
              outlined
              label="Min"
              :rules="[  ]" />

            <q-input class="col"
              square
              min="0"
              ref="max_kamar_tidur"
              unmasked-value
              type="number"
              clearable
              v-model="max_kamar_tidur"
              reverse-fill-mask
              text-color="grey"
              placeholder="0"
              bg-color="white"
              outlined
              label="Max"
              :rules="[  ]" />
          </div>
        </div>

        <div class="q-px-md q-mt-md">
          <div class="text-caption q-mb-xs">Gudang</div>
          <div class="q-col-gutter-sm row" align="left">
            <q-input class="col"
              square
              min="0"
              ref="min_gudang"
              unmasked-value
              type="number"
              clearable
              v-model="min_gudang"
              reverse-fill-mask
              text-color="grey"
              placeholder="0"
              bg-color="white"
              outlined
              label="Min"
              :rules="[  ]" />

            <q-input class="col"
              square
              min="0"
              ref="max_gudang"
              unmasked-value
              type="number"
              clearable
              v-model="max_gudang"
              reverse-fill-mask
              text-color="grey"
              placeholder="0"
              bg-color="white"
              outlined
              label="Max"
              :rules="[  ]" />
          </div>
        </div>

        <div class="q-px-md q-mt-md">
          <div class="text-caption q-mb-xs">Lantai</div>
          <div class="q-col-gutter-sm row" align="left">
            <q-input class="col"
              square
              min="0"
              ref="min_lantai"
              unmasked-value
              type="number"
              clearable
              v-model="min_lantai"
              reverse-fill-mask
              text-color="grey"
              placeholder="0"
              bg-color="white"
              outlined
              label="Min"
              :rules="[  ]" />

            <q-input class="col"
              square
              min="0"
              ref="max_lantai"
              unmasked-value
              type="number"
              clearable
              v-model="max_lantai"
              reverse-fill-mask
              text-color="grey"
              placeholder="0"
              bg-color="white"
              outlined
              label="Max"
              :rules="[  ]" />
          </div>
        </div>

        <div class="q-px-md q-mt-md">
          <div class="text-caption q-mb-xs">Teras</div>
          <div class="q-col-gutter-sm row" align="left">
            <q-input class="col"
              square
              min="0"
              ref="min_teras"
              unmasked-value
              type="number"
              clearable
              v-model="min_teras"
              reverse-fill-mask
              text-color="grey"
              placeholder="0"
              bg-color="white"
              outlined
              label="Min"
              :rules="[  ]" />

            <q-input class="col"
              square
              min="0"
              ref="max_teras"
              unmasked-value
              type="number"
              clearable
              v-model="max_teras"
              reverse-fill-mask
              text-color="grey"
              placeholder="0"
              bg-color="white"
              outlined
              label="Max"
              :rules="[  ]" />
          </div>
        </div>

        <div class="q-px-md q-mt-md">
          <div class="text-caption q-mb-xs">Pintu</div>
          <div class="q-col-gutter-sm row" align="left">
            <q-input class="col"
              square
              min="0"
              ref="min_pintu"
              unmasked-value
              type="number"
              clearable
              v-model="min_pintu"
              reverse-fill-mask
              text-color="grey"
              placeholder="0"
              bg-color="white"
              outlined
              label="Min"
              :rules="[  ]" />

            <q-input class="col"
              square
              min="0"
              ref="max_pintu"
              unmasked-value
              type="number"
              clearable
              v-model="max_pintu"
              reverse-fill-mask
              text-color="grey"
              placeholder="0"
              bg-color="white"
              outlined
              label="Max"
              :rules="[  ]" />
          </div>
        </div>

        <div class="q-px-md q-mt-md">
          <div class="text-caption q-mb-xs">Jendela</div>
          <div class="q-col-gutter-sm row" align="left">
            <q-input class="col"
              square
              min="0"
              ref="min_jendela"
              unmasked-value
              type="number"
              clearable
              v-model="min_jendela"
              reverse-fill-mask
              text-color="grey"
              placeholder="0"
              bg-color="white"
              outlined
              label="Min"
              :rules="[  ]" />

            <q-input class="col"
              square
              min="0"
              ref="max_jendela"
              unmasked-value
              type="number"
              clearable
              v-model="max_jendela"
              reverse-fill-mask
              text-color="grey"
              placeholder="0"
              bg-color="white"
              outlined
              label="Max"
              :rules="[  ]" />
          </div>
        </div>

        <div class="q-px-md q-mt-md">
          <div class="text-caption q-mb-xs">Ventilasi</div>
          <div class="q-col-gutter-sm row" align="left">
            <q-input class="col"
              square
              min="0"
              ref="min_ventilasi"
              unmasked-value
              type="number"
              clearable
              v-model="min_ventilasi"
              reverse-fill-mask
              text-color="grey"
              placeholder="0"
              bg-color="white"
              outlined
              label="Min"
              :rules="[  ]" />

            <q-input class="col"
              square
              min="0"
              ref="max_ventilasi"
              unmasked-value
              type="number"
              clearable
              v-model="max_ventilasi"
              reverse-fill-mask
              text-color="grey"
              placeholder="0"
              bg-color="white"
              outlined
              label="Max"
              :rules="[  ]" />
          </div>
        </div>

        <div class="q-px-md q-mt-md">
          <div class="text-caption q-mb-xs">Taman</div>
          <div class="q-col-gutter-sm row" align="left">
            <q-input class="col"
              square
              min="0"
              ref="min_taman"
              unmasked-value
              type="number"
              clearable
              v-model="min_taman"
              reverse-fill-mask
              text-color="grey"
              placeholder="0"
              bg-color="white"
              outlined
              label="Min"
              :rules="[  ]" />

            <q-input class="col"
              square
              min="0"
              ref="max_taman"
              unmasked-value
              type="number"
              clearable
              v-model="max_taman"
              reverse-fill-mask
              text-color="grey"
              placeholder="0"
              bg-color="white"
              outlined
              label="Max"
              :rules="[  ]" />
          </div>
        </div>

        <!--
        <div class="q-px-md q-mt-md">
          <div class="text-caption q-mb-xs">Listrik</div>
          <div class="q-col-gutter-sm row" align="left">
            <q-select class="col"
              :options="['Ada', 'Tidak Ada']"
              square
              min="0"
              ref="listrik"
              unmasked-value
              type="number"
              clearable
              v-model="listrik"
              reverse-fill-mask
              text-color="grey"
              placeholder="0"
              bg-color="white"
              outlined
              label="Pilih"
              :rules="[  ]" />
          </div>
        </div>

        <div class="q-px-md q-my-md">
          <div class="text-caption q-mb-xs">Air</div>
          <div class="q-col-gutter-sm row" align="left">
            <q-select class="col"
              :options="['Ada', 'Tidak Ada']"
              square
              min="0"
              ref="air"
              unmasked-value
              type="number"
              clearable
              v-model="air"
              reverse-fill-mask
              text-color="grey"
              placeholder="0"
              bg-color="white"
              outlined
              label="Pilih"
              :rules="[  ]" />
          </div>
        </div> -->

      </q-page-container>
      <q-footer>
        <q-list class="bg-white">
          <q-separator />
          <div class="q-pa-md row">
            <q-btn type="submit" @click="rightDrawerOpen = false"
                   class="col q-mr-sm"
                   rounded
                   icon-right="search"
                   unelevated
                   color="blue"
                   label="Proses"></q-btn>
            <q-btn type="submit" @click="$store.commit('pencarian/clear_filter')"
                   class="col q-ml-sm"
                   rounded
                   icon-right="delete"
                   unelevated
                   color="red"
                   label="Bersihkan"></q-btn>
          </div>
        </q-list>
      </q-footer>
    </q-layout>
  </q-form>
</q-no-ssr>

</template>

<script type="text/javascript">

import { reactive, computed } from 'vue'

import { mapFields } from 'vuex-map-fields'

export default {
  computed: {
    ...mapFields({
      rightDrawerOpen: 'layout.local.rightDrawerOpen',

      // pencarian
      page: 'pencarian.index.data.payload.current_page',
      keyword: 'pencarian.local.keyword',
      min: 'pencarian.local.min',
      max: 'pencarian.local.max',
      regencies: 'layout.local.regency',
      kategori: 'pencarian.local.kategori',

      min_ruang_tamu :'pencarian.local.min_ruang_tamu',
      max_ruang_tamu :'pencarian.local.max_ruang_tamu',

      min_kamar_mandi :'pencarian.local.min_kamar_mandi',
      max_kamar_mandi :'pencarian.local.max_kamar_mandi',

      min_kamar_tidur :'pencarian.local.min_kamar_tidur',
      max_kamar_tidur :'pencarian.local.max_kamar_tidur',

      min_gudang :'pencarian.local.min_gudang',
      max_gudang :'pencarian.local.max_gudang',

      min_lantai :'pencarian.local.min_lantai',
      max_lantai :'pencarian.local.max_lantai',

      min_teras :'pencarian.local.min_teras',
      max_teras :'pencarian.local.max_teras',

      min_pintu :'pencarian.local.min_pintu',
      max_pintu :'pencarian.local.max_pintu',

      min_jendela :'pencarian.local.min_jendela',
      max_jendela :'pencarian.local.max_jendela',

      min_ventilasi :'pencarian.local.min_ventilasi',
      max_ventilasi :'pencarian.local.max_ventilasi',

      min_taman :'pencarian.local.min_taman',
      max_taman :'pencarian.local.max_taman',

      listrik :'pencarian.local.listrik',
      air :'pencarian.local.air',
    }),  
  },
  watch: {
    // selection(val) {
    //  this.$store.commit('pencarian/kategori', val)
   //    this.onProses()
    // },
    'route_query.kategori': {
      handler(val) {
        this.onKategoriOption()
      }
    }
  },
  mounted() {
    this.onKategoriOption()
  },
  emits: ["onBubbleEvent"], // wajib agar gak warning
  setup (_,{ emit }) {
    const desert = reactive({
      rumah: false,
      apartemen: false,
      vila: false,
      ruko: false,
      kavling: false,
      lahan: false,
    })
    return {
      desert,
      selection: computed(() => {
        return Object.keys(desert)
          .filter(type => desert[ type ] === true)
          .join(',')
      })
    }
  },
  methods: {
    onKategoriOption() {
      const kategori = this.kategori?.split(',')
      for (var i = 0; i < kategori.length; i++) {
        // kategori[i]
        this.desert[kategori[i]] = true
      }    
    },
    onBubbleEvent() {
      this.$emit('onBubbleEvent')
    },
    onProses() {
      this.$store.commit('pencarian/kategori', this.selection)

      this.$router.replace({ name: 'pencarian', 
        params: { 
          page: this.page 
        },
        query: {
          keyword: this.keyword,
          min: this.min,
          max: this.max,
          regency: this.regencies,
          kategori: this.kategori,

          min_ruang_tamu :this.min_ruang_tamu,
          max_ruang_tamu :this.max_ruang_tamu,
        
          min_kamar_mandi :this.min_kamar_mandi,
          max_kamar_mandi :this.max_kamar_mandi,
        
          min_kamar_tidur :this.min_kamar_tidur,
          max_kamar_tidur :this.max_kamar_tidur,
        
          min_gudang :this.min_gudang,
          max_gudang :this.max_gudang,
        
          min_lantai :this.min_lantai,
          max_lantai :this.max_lantai,
        
          min_teras :this.min_teras,
          max_teras :this.max_teras,
        
          min_pintu :this.min_pintu,
          max_pintu :this.max_pintu,
        
          min_jendela :this.min_jendela,
          max_jendela :this.max_jendela,
        
          min_ventilasi :this.min_ventilasi,
          max_ventilasi :this.max_ventilasi,
        
          min_taman :this.min_taman,
          max_taman :this.max_taman,
        
          listrik :this.listrik,
          air :this.air,
                  
        } 
      })      
    }   
  }
};
</script>