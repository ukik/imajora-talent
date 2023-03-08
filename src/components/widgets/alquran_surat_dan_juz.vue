<style type="text/css" scoped>
@supports (position: sticky) {
  .is_sticky {
    z-index:999;
    position: sticky;
    top: 50px; 
  }
}
</style>

<template>
	<q-no-ssr>
      <!--  v-if="data_1.length > 0" -->
      <q-expansion-item dense        
        class=""
        header-class="bg-light-blue text-white "
        expand-icon-class="text-white"
        expand-separator
        @before-show="onExpend"
        @hide="onExpendHide"
      >

        <template v-slot:header>
          <q-item-section class="text-subtitle1 weight-500">Pilih {{ tipe | capitalize }} </q-item-section>
          <q-item-section side v-if="expend_loading">
            <q-spinner-oval
              color="white"
            />    
          </q-item-section>     

        </template>        

        <q-virtual-scroll v-if="expend_enable"
          :style="'height:'+ ($q.screen.height - 50 - 32 - (ayat_player_display ? 71 : 0)) +'px;'"
          class="bg-white"
          :items="Object.freeze(expanded_items)"
          separator
        >
          <template v-slot="{ item, index }">
            <q-item v-if="tipe == 'surat'" clickable @click="onSelect(index+1, 'surat')" :class="last_ayat_or_juz == (index + 1) ? 'bg-light-blue-1' : ''" v-ripple="{color:'grey'}">
              <q-item-section>
                <span class="text-blue weight-500" style="font-size:17px;">
                  {{ item.nama_id }} 
                  <sup class="text-light-blue-4" style="font-size:14px;">
                    ({{ item.total_ayat }})
                  </sup>
                </span>
                <div class="text-caption text-grey" style="margin-top:-5px;">
                  {{ item.arti_id }} 
                </div>
              </q-item-section>
              <q-item-section side class="q-pa-none Diwanltr" style="font-size:35px;">
                {{ item.nama_ar }}
                </q-item-section>
            </q-item>

      			<q-item v-else-if="tipe == 'juz'" clickable @click="onSelect(index+1, 'juz')" :class="last_ayat_or_juz == (index + 1) ? 'bg-light-blue-1' : ''" v-ripple="{color:'grey'}">
      			  <q-item-section>
      			    <span class="text-blue weight-500" style="font-size:16px;">Juz {{ item.id }}</span>
      			    <div class="text-caption text-grey" style="margin-top:-5px;">Ayat ke: {{ item.ayat }}</div>
      			  </q-item-section>
      			  <q-item-section side>
      			    <span class=" text-blue weight-500" style="font-size:24px;" v-if="item.surats != undefined">
      			      {{ item.surats.nama_ar }}
      			    </span>
      			    <div class="text-caption text-grey" style="margin-top:-9px;" v-if="item.surats != undefined">
      			      {{ item.surats.arti_id }} 
      			    </div>        
      			  </q-item-section>
      			</q-item>            
          </template>
        </q-virtual-scroll>
        <q-separator />
      </q-expansion-item>
    </q-no-ssr>	
</template>

<script>
import { mapFields } from 'vuex-map-fields';

import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll

export default {
  computed: {
    ...mapFields({
      data_1: "alquran_index.ayat", 
      expanded_items: "alquran_index.expanded_items", 
      lengkap: "alquran_detail.lengkap",
      ayat_dialog: "alquran_index.ayat_dialog", 
      current_index: "alquran_index.current_index", 
      current_page: "alquran_index.paginate.current_page",
      paginate: "alquran_index.paginate",       
      ayat_player_display: "alquran_index.ayat_player_display", 
      ayat_deskripsi_dialog: "alquran_index.ayat_deskripsi_dialog",
      ayat_drawer: "alquran_index.ayat_drawer",
      last_ayat_or_juz: "alquran_index.last_ayat_or_juz",
      tipe: "alquran_index.tipe",

      loading: "alquran_detail.loading",
    }),
  },  
  data() {
    return {   
      expend_enable: false,
      expend_loading: false,   
    }
  },  
  watch: {
  	"$route.name": function(val) {
  		switch(val) {
  			case "alquran_detail_juz":
	  			this.dispatchVuex('alquran_index/action_alquran_juz');
  				return
  			case "alquran_detail":
        default:
      			this.dispatchVuex('alquran_index/action_alquran_surat');
  				return
  		}
  	}
  },
  methods: {
    async onExpend() {
      this.expend_loading = true
      // await this.dispatchVuex('alquran_index/action_alquran_surat');
  		switch(this.$route.name) {
  			case "alquran_detail_juz":
  				await this.dispatchVuex('alquran_index/action_alquran_juz');
  				break
  			case "alquran_detail":
        default:
  				await this.dispatchVuex('alquran_index/action_alquran_surat');
          break            
  		}
      this.expend_enable = true
      this.expend_loading = false
    },
    onExpendHide() {
      this.expend_enable = false
    },
    async onSelect(index, tipe) {
      await this.dispatchVuex('alquran_index/action_alquran_current_index', 0)
      await this.action_alquran_detail({ pull_refresh: true, id: index })
      await this.dispatchVuex('alquran_index/action_alquran_ayat_player_display', true)
    },
  }
};

</script>