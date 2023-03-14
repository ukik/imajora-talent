<template>
  <q-drawer v-model="ayat_drawer"
    :side="is_not_mobile_size ? 'left' : 'right'"
    overlay
    class="bg-white"
    behavior="mobile"
    :width="300"
    elevated>
    	<!-- drawer content -->
    <SpinnerOrbit v-if="muratal.length <= 0" />

		<q-item clickable class="is-sticky-top bg-white" v-ripple>
			<q-item-section avatar>
			  <q-icon size="md" color="primary" name="face" />
			</q-item-section>
			<q-item-section>
				<b>Pilih Muratal</b>
				<q-item-label caption>
					Tersedia {{ muratal.length }} muratal
				</q-item-label>
			</q-item-section>
			<q-item-section side>
					<!-- {{ current_muratal.id_user_alquran_audio }} -->
				<q-avatar size="30px" color="pink-4" text-color="white">
					{{ current_muratal.id }}
				</q-avatar>
			</q-item-section>
		</q-item>

    <q-scroll-area class="content" :style="'height:'+($q.screen.height - 50)+'px;'">
      <q-list  v-if="muratal.length > 0" class="bg-white" bordered >
        <q-item v-for="(item, index) in muratal"
          @click="() => onSubmit(item)"
          :key="index"
          :class="current_muratal.id == item.id ? 'bg-blue-1 text-weight-bold' : ''"
          clickable v-ripple>
          <q-item-section>
          {{ index + 1 }}.
          {{ item.nama_id }}
          </q-item-section>
          <q-item-section side>
          <q-badge :color="colorBahasa(item.bahasa)" text-color="white" size="12px" dense outline>{{ item.bahasa }}</q-badge>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script type="text/javascript">
;

export default {
  computed: {
    // ...mapFields({
    //   data_1: "alquran_index.ayat",
    //   ayat_drawer: "alquran_index.ayat_drawer",
    //   muratal: "alquran_index.muratal",
    //   current_muratal: "alquran_index.current_muratal",
    //   current_index: "alquran_index.current_index",

    //   is_not_player_real_closed: "alquran_index.is_not_player_real_closed",
    // }),
  },
  async mounted() {
    // await this.$store.dispatch('alquran_index/muratal')
    // this.link = this.current_muratal.id_user_alquran_audio
  },
  watch: {
  	async ayat_drawer(val) {
      console.log(val)
  		if(!val) return
  		if(this.muratal.length > 0) return

	    await this.$store.dispatch('alquran_index/muratal')
	  	// this.link = this.current_muratal.id_user_alquran_audio
  	},
    current_muratal: {
      deep: true,
      handler(value) {

        if(!this.ayat_drawer) return
        setTimeout(() => {
          var audio = document.getElementById('audio-player');
          if(audio == undefined) return

          audio.src = this.data_1[this.current_index].muratal[this.current_muratal.kode]

          this.onPlay(audio)
        }, 500)
      }
    }
  },
  data() {
  	return {
  		link: 0
  	}
  },
  methods: {
    onPlay(audio) {
      this.$nextTick()

      audio.play()
      this.dispatchVuex('alquran_index/is_muratal_play', true)

      // DISPLAY PLAYER
      this.dispatchVuex('alquran_index/is_not_player_real_closed', false)
      this.dispatchVuex('alquran_index/action_alquran_ayat_player_display', true)

    },
  	async onSubmit(item) {
  		this.link = item.id
  		const request = await this.dispatchVuex('alquran_index/muratal_update', {
  			id: item.id,
  			kode: item.kode,
  		})

      // DISPLAY PLAYER
      this.dispatchVuex('alquran_index/is_not_player_real_closed', false)
      this.dispatchVuex('alquran_index/action_alquran_ayat_player_display', true)

  	},
  	colorBahasa(value) {
  		switch(value) {
  			case "ar":
  				return 'primary'
  			case "en":
  				return 'purple'
  			case "fa":
  				return 'orange'
  			case "ur":
  				return 'brown'
  			case "zh":
  				return 'negative'
  		}
  	}
  }
};
</script>
