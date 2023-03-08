<style type="text/css">
.gradient-1 {
  background-image: linear-gradient(to right, rgb(0, 223, 142), rgb(88,151,255), rgb(88,151,255));  
}   
</style>
<template>
  <q-footer bordered unelevated class="bg-white text-black">
    <q-toolbar v-if="$route.name == 'formulir_gambar'">
      <q-space />
      <q-btn
        @click="show"
        flat
        dense
        round
        color="blue"
        icon="image_search"
      />      
    </q-toolbar>

    <q-toolbar v-show="ayat_player_display" class="bg-grey-2 q-py-sm">

      <q-btn :disable="current_index <= 1" @click="current_index -= 1" color="black" flat round icon="skip_previous" />

      <q-btn :disable="current_index >= data_1.length" @click="current_index += 1" color="black" flat round icon="skip_next" />

      <audio id="audio-player" controls @ended="onAudioComplete" style="outline:none;" class="full-width">
        <source v-if="data_1.length > 0" :src="data_1[!current_index ? 0 : current_index].muratal[current_muratal.kode]" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>

      <q-btn color="black" @click="pilihan_ayat_player = !pilihan_ayat_player" flat round icon="reorder" />

      <q-btn color="black" @click="ayat_player_display = false; is_not_player_real_closed = !is_not_player_real_closed" flat round icon="close" />
    </q-toolbar>
  </q-footer>
</template>

<script type="text/javascript">
import { mapFields } from 'vuex-map-fields';

export default {
  computed: {
    ...mapFields({
      data_1: "alquran_index.ayat", //"alquran_detail.data_1", 
      ayat_dialog: "alquran_index.ayat_dialog", 
      current_index: "alquran_index.current_index", 
      current_muratal: "alquran_index.current_muratal", 
      ayat_player_display: "alquran_index.ayat_player_display", 
      pilihan_ayat_player: "alquran_index.pilihan_ayat_player", 

      loading1: "alquran_detail.loading", 
      loading2: "alquran_detail_juz.loading", 

      paginate: "alquran_index.paginate", 
      tipe: "alquran_index.tipe", 
      last_ayat_or_juz: "alquran_index.last_ayat_or_juz", 

      is_not_player_real_closed: "alquran_index.is_not_player_real_closed", 
    }),
  },  
  watch: {
    async is_not_player_real_closed(val) {
      // alert(this.current_index +" = "+ this.last_ayat_or_juz)

      await this.dispatchVuex('alquran_index/action_alquran_current_index', this.current_index)
      await this.action_alquran_detail({ pull_refresh: true, id: this.last_ayat_or_juz })
      await this.dispatchVuex('alquran_index/action_alquran_ayat_player_display', true)

    },
    async current_muratal(val) {
      // this.onAudioRefresh(this.current_index, val.kode)
    },
    loading1(val) {
      if(val) return
      var audio = document.getElementById('audio-player');
      if(audio == undefined) return

      console.log('loading1', this.data_1, this.current_index)

      if(this.data_1.length <= 0) return
      if(this.current_index == undefined) return

      setTimeout(() => {
        audio.src = this.data_1[this.current_index].muratal[this.current_muratal.kode]
        // alert('loading1')
        this.onPlay(audio)
      }, 1000)
    },
    loading2(val) {
      if(val) return
      var audio = document.getElementById('audio-player');
      if(audio == undefined) return

      console.log('loading2', this.data_1, this.current_index)

      if(this.data_1.length <= 0) return
      if(this.current_index == undefined) return

      setTimeout(() => {
        audio.src = this.data_1[this.current_index].muratal[this.current_muratal.kode]
        // alert('loading1')
        this.onPlay(audio)
      }, 1000)
    }
  },
  mounted() {
    var audio = document.getElementById('audio-player');
    if(audio == undefined) return

    audio.pause()
    audio.currentTime = 0;
  },
  methods: {
    onPlay(audio) {
      this.dispatchVuex('alquran_index/action_alquran_ayat_player_display', true)
      this.$nextTick()
      try {
        audio.load()
        audio.play()
        this.dispatchVuex('alquran_index/is_muratal_play', true)
      } catch (err) { } 
    },
    async onAudioRefresh(value1, value2) {
      // alert(123)
      // this.dispatchVuex('alquran_index/action_alquran_ayat_player_display', true)
      
      const audio = document.getElementById('audio-player');

      if(audio == undefined) return

      console.log('onAudioRefresh', this.data_1, this.current_index)

      // audio.load()
      if(this.data_1.length <= 0) return
      if(this.current_index == undefined) return
      audio.src = this.data_1[value1].muratal[value2]

      this.onPlay(audio)
    },
    async onAudioComplete() {
      if(this.current_index < this.data_1.length - 1) {
        console.log(this.current_index, this.data_1.length)
        await this.dispatchVuex('alquran_index/action_alquran_current_index', Number(this.current_index) + 1)
        await this.onAudioRefresh(this.current_index, this.current_muratal.kode)
      }

      console.log('onAudioComplete', this.data_1, this.current_index)
      if(this.data_1.length <= 0) return
      if(this.current_index == undefined) {
        await this.dispatchVuex('alquran_index/action_alquran_current_index', 0)
        await this.onAudioRefresh(this.current_index, this.current_muratal.kode)
        return
      }

      // UPADE table: alquran_ayat_terakhir_dibaca
      const response = await this.dispatchVuex('alquran_index/ayat_terakhir_dibaca', { 
        id_alquran_ayat: this.data_1[this.current_index].id_ayat,
        pagination_page: this.paginate.current_page,
        current_index: this.current_index,
        tipe: this.tipe,
        last_ayat_or_juz: this.last_ayat_or_juz
      })
      console.log('main_footer', response)
      if(response.data) this.$store.dispatch('alquran/ayat_terakhir_dibaca', response.data.data_1)



      if(this.current_index < this.data_1.length - 1) return
      if(this.paginate.current_page >= this.paginate.last_page) return

      // NEXT PAGINATION
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });           

      await this.dispatchVuex('alquran_detail/action_payload', { 
        pull_refresh: true, 
        id: this.last_ayat_or_juz, 
        page: Number(this.paginate.current_page)+1 
      })

      await this.dispatchVuex('alquran_index/action_alquran_current_index', 0)        

    },
  }  
};

</script>