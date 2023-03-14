<template>
<div>
	<q-toolbar>
		<q-btn dense unelevated size="10px" color="teal" text-color="white" round icon="play_arrow" @click="onSelect" />

		<q-item class="q-py-none">
			<q-item-section>
			  <q-item-label class="text-subtitle2 weight-500">{{ prop_data.surat.nama_id }}</q-item-label>
			</q-item-section>
			<q-item-section side>
				<q-badge color="light-blue" align="middle">{{ prop_data.id_alquran_surat }}: {{ index + 1 }}</q-badge>
			</q-item-section>
		</q-item>

		<q-toolbar-title class="q-pa-none" />
		<!-- <q-btn dense flat size="13px" color="grey-5" round icon="turned_in_not" /> -->
		<q-btn dense flat @click="onSubmitFavorit" color="grey-5" round :icon="status_favorit ? 'turned_in' : 'turned_in_not'" />

        <q-btn
        	@click="onDeskripsi"
			flat
			dense
			round
			class="q-mx-sm"
			size="13px"
			color="grey-5"
			icon="list_alt"
        />
		<q-checkbox size="32px" v-model="tajweed"></q-checkbox>
		<!-- <q-btn flat size="13px" color="grey-5" round icon="share" /> -->
	</q-toolbar>

	<!-- <div @click="tajweed = !tajweed" class="q-pt-md text-center flex flex-center">
		<q-checkbox size="30px" :value="tajweed"></q-checkbox>
		<span class="q-ml-sm" style="padding-top: 0px;"> Tadjweed</span>
	</div> -->

	<!-- <q-separator /> -->

	<div class="q-pa-sm q-pb-sm">


		<div class="text-right q-pb-md q-px-sm arabic_6" :style="is_mobile_size ? 'font-size:32px; line-height: 200%;' : 'font-size:32px; line-height: 300%;'">
			<span v-if="tajweed" v-html="prop_data.ayat_tajweed"></span>
			<span v-else v-html="prop_data.ayat"></span>
		</div>

		<div v-if="lengkap">
			{{ prop_data.terjemah }}
		</div>

		<div v-if="lengkap" class="text-grey-8 q-mt-md q-mb-sm">{{ prop_data.arti_id }}</div>

		<!-- <q-toolbar-title class="q-pa-sm">Doa Jika Bermimpi Buruk</q-toolbar-title> -->
		<!-- <div class="text-subtitle1">Doa Jika Bermimpi Buruk</div> -->
<!-- 		<div class="text-right q-py-md arabic_13" style="font-size:32px;">
			هُوَ اللهُ ، اَللهُ رَبِّيْ لَا شَرِيْكَ لَهُ. أَعُوْذُ بِكَلِمَاتِ اللهِ التَّامَّةِ مِنْ غَضَبِهِ وَمِنْ شَرِّ عِبَادِهِ وَمِنْ هَمَزَاتِ الشَّيَاطِيْنِ وَأَنْ يَحْضُرُوْنِ
		</div> -->
<!-- 		<div class="q-mt-md text-grey-7">
			Huwallahu, allahu rabbi, la syarika lahu. A‘udzu bikalimatillahit tammati min ghadhabihi wa min syarri ibadihi wamin hamazatis syayatini wa an yahdhuruni.
		</div>
		<div class="q-mt-md">
			Dialah Allah, Allah Tuhanku. Tiada sekutu bagi-Nya. Aku berlindung dengan kalimat Allah yang sempurna dari murka-Nya, kejahatan para hamba-Nya, dan godaan setan. Aku pun berlindung kepada-Nya dari kepungan setan itu.
		</div>		 -->
		<!-- <div class="q-mt-md text-light-blue">
			Ibnu Suni, Abu Dawud
		</div>	 -->
	</div>

	<q-separator class="q-py-sm" color="grey-3" />
</div>
</template>

<script type="text/javascript">
;


const favorit = {
  data() {
    return {
      status_favorit: false,
    }
  },
  mounted() {
    this.status_favorit = this.prop_data.favorit ? true : false
  },
  methods: {
    async onSubmitFavorit() {
        const form = {
          id_pemilik_postingan: this.prop_data.id_user,
          id_postingan: this.prop_data.id,
          type: 'Alquran_Ayat_Model',
          label: 'alquran',
        }

      const request = await this.dispatchVuex('aggregator/set_favorit', form)

      this.status_favorit = request.value > 0 ? true : false
    },
  },
  // computed: {
  //   get_favorit() {
  //     if(!this.data_1.favorit) return false
  //     return true
  //   },
  // }
}


export default {
  	computed: {
	    // ...mapFields({
	    //   	ayat_deskripsi_dialog: "alquran_index.ayat_deskripsi_dialog",
	    //   	ayat_player_display: "alquran_index.ayat_player_display",
	    //   	current_muratal: "alquran_index.current_muratal",
	    //   	lengkap: "alquran_detail.lengkap",
	    // }),
  	},
	mixins: [favorit],
	props: ['prop_data', 'index'],
	data() {
		return {
			tajweed: true
		}
	},
	methods: {
	    async onSelect() {
	      // this.dispatchVuex('alquran_index/action_alquran_ayat_deskripsi_dialog', this.ayat_player_display = !this.ayat_player_display)
	      await this.dispatchVuex('alquran_index/action_alquran_current_index', this.index)
	      await this.dispatchVuex('alquran_index/action_alquran_ayat_player_display', true)

	      var audio = document.getElementById('audio-player');
	      if(audio == undefined) return

	      // audio.load()
	      audio.src = this.prop_data.muratal[this.current_muratal.kode]
	      await this.$nextTick()
	      audio.play()

	      // DISPLAY PLAYER
	      this.dispatchVuex('alquran_index/is_not_player_real_closed', false)
	      this.dispatchVuex('alquran_index/action_alquran_ayat_player_display', true)

	    },
	    onDeskripsi() {
	      this.dispatchVuex('alquran_index/action_alquran_ayat_deskripsi_dialog', true)
	      setTimeout(() => {
		      this.dispatchVuex('alquran_index/action_alquran_current_index', this.index)
	      }, 500)
	    }
	}
};
</script>

