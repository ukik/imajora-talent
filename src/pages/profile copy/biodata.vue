<template>
<div>

	<div class="q-pt-md">
    <div class="row flex-center q-mb-lg" @click="$refs.lottie.play()">
      <Vue3Lottie ref="lottie" class="absolute" :autoPlay="false" animationLink="https://assets9.lottiefiles.com/temp/lf20_fUJGYM.json" :height="280" :width="280" @onComplete="onComplete" :loop="2"/>
      <q-avatar size="98px" @click="onZoom" style="width: 170px; height: 170px; ">

        <img ref="foto_profile" loading="lazy" :src="img_checker(user.foto)" @error="handleError" style="border-radius:50px;">

        <q-icon name="task_alt" v-if="user.terverifikasi == 'ya'" size="20px" style="padding:5px; left: -0px; border-radius: 50%;" color="white" class="absolute-top-left bg-green" />
      </q-avatar>
    </div>

    <q-btn class="q-mr-sm" color="primary" icon="check" label="Follow" unelevated rounded />
    <!-- <q-btn class="q-mr-sm" color="primary" icon="mail" label="Message" unelevated rounded /> -->
    <q-btn :to="{ name:'account' }" class="q-mr-sm" color="primary" icon="settings" unelevated round />

		<div id="nama" class="text-h6 text-center text-capitalize q-mt-md">{{ user.nama }}</div>
		<div class="text-body2 text-grey-6 text-center">
		ID: {{ user.qrcode }}
		</div>

		<div class="text-caption" :class="[ user.terverifikasi == 'ya' ? 'text-green' : 'text-red' ]">
			{{ user.terverifikasi == 'ya' ? 'Sudah' : 'Belum' }} Terverifikasi
		</div>

		<div class="q-pa-md">{{ user.biodata }}</div>

		<q-btn @click="onSubmit" outline v-if="user.id != user.id"
			:label="mengikuti ? 'Sudah Berteman' : 'Belum Mengikuti'" dense
			class="q-px-sm q-mb-sm"
			rounded no-caps unelevated
			:color="mengikuti ? 'blue' : 'green'" />

	</div>

  <q-dialog v-model="confirm" persistent>
    <q-card style="width: 700px; max-width: 80vw;">
      <q-card-section style="font-size:14px;">
        Apakah berhenti mengikuti?
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Batal" color="teal" v-close-popup />
        <q-btn flat @click="onRequest" label="Berhenti Mengikuti" color="teal" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>


  <q-no-ssr>
      <!-- <CoolLightBox
        :items="img_collection"
        :index="img_zoom_index"
        @close="img_zoom_index = null">
      </CoolLightBox> -->
  </q-no-ssr>


</div>
</template>


<script type="text/javascript">

;
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

import AstronautJSON from 'src/assets/lotties/5483-loading-circle.json'

export default {
  computed: {
    // ...mapFields({
    //   // user: "profile.profile",
    //   // mengikuti: "profile.profile.mengikuti",
    //   // loading: "aggregator.loading",
    // }),
  },
  components: {
    Vue3Lottie,
  },
  methods: {
    onComplete() {
      alert(1)
    },
    async onSubmit() {

    	if(this.mengikuti) {
	    	this.confirm = true
	    	return
    	}

    	this.onRequest()
    },
    async onRequest() {
  		const form = {
  			id_user_teman: this.user.id,
  		}

  		const request = await this.dispatchVuex('aggregator/set_teman', form)
  		this.dispatchVuex('profile/set_mengikuti', request.data)

  		console.log(request)
    },

    onZoom() {
      const foto_profile = this.$refs.foto_profile.src


      this.img_collection.length = 0
      this.img_collection.push(foto_profile)

      this.img_zoom_index = 0

      console.log(this.img_collection, this.img_zoom_index)
    },
  },
  data() {
  	return {
      AstronautJSON,

  		confirm: false,

      img_collection: [],
      img_zoom_index: null,

      user: {
          id: "fcaa08c2-8a15-302f-ba53-18c7761db1ae",
          qrcode: "fcaa08c2-8a15-302f-ba53-18c7761db1ae",
          email: null,
          telepon: null,
          terverifikasi: 'ya',
          versi: null,
          diblokir: null,
          foto: null,
          nama: "Valdiandi Elekton",
          gender: null,
          tanggal_lahir: null,
          kota: null,
          biodata: `Quod voluptatem repellendus est quo dignissimos minus. Ipsa ullam sit perspiciatis cupiditate neque. Velit vero aut nesciunt cumque repellendus adipisci culpa dolorum. Sunt cumque asperiores in recusandae aut doloremque.`,
          created_at: null,
          updated_at: null,
          view_total_1: {
              total_teman_pengikut: 0,
              total_teman_mengikuti: 0
          },
          view_total_2: {
              total_suka: 0
          },
          view_total_5: {
              total_favorit_artikel: 0,
              total_favorit_doa: 0,
              total_favorit_alquran: 0,
              total_favorit_gambar: 0,
              total_favorit_konsultasi: 0,
              total_favorit_status: 0,
              total_favorit_video: 0
          }
      },
      mengikuti: true,
      loading: false,
  	}
  }
};
</script>

