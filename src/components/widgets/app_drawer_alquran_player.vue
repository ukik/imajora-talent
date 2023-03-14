<template>
<div class="q-mt-md rounded-borders">

    <q-card bordered flat class="bg-white q-pa-md">

      <q-item class="q-pa-none">
        <q-item-section avatar>
          <q-checkbox :value="!is_not_player_real_closed" :label="get_player"
          @input="ayat_player_display = true, is_not_player_real_closed = !is_not_player_real_closed"
          />
        </q-item-section>
        <q-item-section side>
          <q-item-label>{{ !this.is_not_player_real_closed ? 'Show' : 'Hide' }}</q-item-label>
        </q-item-section>
      </q-item>

    	<!-- <q-checkbox class="full-width"
        :value="!is_not_player_real_closed"
        @input="ayat_player_display = true, is_not_player_real_closed = !is_not_player_real_closed"
        :label="get_player" /> -->

    	<!-- <q-checkbox class="full-width"
        v-if="data_1.length > 0"
        keep-color
        :disable="data_1.length <= 0"
        v-model="is_muratal_play"
        :label="get_muratal"
        color="positive">
      </q-checkbox> -->

      <q-item class="q-pa-none" v-if="data_1.length > 0">
        <q-item-section avatar>
          <q-checkbox v-if="data_1.length > 0"
          keep-color
          :disable="data_1.length <= 0"
          v-model="is_muratal_play"
          :label="get_muratal"
          color="positive" />
        </q-item-section>
        <q-item-section side class="text-right">
          <q-item-label>{{ is_muratal_play ? 'Play' : 'Pause' }}</q-item-label>
        </q-item-section>
      </q-item>

    </q-card>

</div>
</template>

<script>

;

export default {
  computed: {
    // ...mapFields({
    //   data_1: "alquran_index.ayat", //"alquran_detail.data_1",
    //   ayat_player_display: "alquran_index.ayat_player_display",
    //   is_muratal_play: "alquran_index.is_muratal_play",
    //   is_not_player_real_closed: "alquran_index.is_not_player_real_closed",
    // }),
  	get_muratal() {
  		if(this.data_1.length <= 0) return "Muratal Kosong"
  		return this.is_muratal_play ? 'Muratal' : 'Muratal'
  	},
  	get_player() {
  		return !this.is_not_player_real_closed ? 'Alquran Player' : 'Alquran Player'
  	},
  },
  watch: {
  	is_muratal_play(val) {
  		if(!val) {
			if(document.getElementById('audio-player')) {
				const audio = document.getElementById('audio-player')
				audio.pause();
				// audio.currentTime = 0;
			}
  		} else {
			if(document.getElementById('audio-player')) {
				const audio = document.getElementById('audio-player')
				audio.play()
			}
  		}
  	}
  }

};
</script>
