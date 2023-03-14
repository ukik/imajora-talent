<template>
<div id="container_disarankan">
	<q-scroll-area
	:thumb-style="thumbStyle"
    :bar-style="barStyle"
	horizontal
	style="height: 147px; width: auto;"
	class="bg-white rounded-borders q-mt-lg">

		<div class="row text-center no-wrap  q-gutter-sm q-px-sm">

			<div style="width:100px;height:134px;" v-ripple="{color:'grey'}" class="relative-position set-border-pink rounded-borders shadow-0 hover">
			  <q-avatar class="q-my-md" square size="65px" >
			    <img src="~/assets/beranda/doa.png" />
			  </q-avatar>
			  <div class="bg-pink text-body2 rounded-borders text-white q-py-xs" style="font-size:13px;">DOA-DOA</div>
			</div>
			<div style="width:100px;height:134px;" v-ripple="{color:'grey'}" class="relative-position set-border-green rounded-borders shadow-0 hover">
			  <q-avatar class="q-my-md" square size="65px" >
			    <q-img src="~/assets/beranda/sholat.png" />
			  </q-avatar>
			  <div class="bg-positive text-body2 rounded-borders text-white q-py-xs" style="font-size:13px;">SHOLAT</div>
			</div>
			<div style="width:100px;height:134px;" v-ripple="{color:'grey'}" class="relative-position set-border-orange rounded-borders shadow-0 hover">
			  <q-avatar class="q-my-md" square size="65px" >
			    <q-img src="~/assets/beranda/mosque.png" />
			  </q-avatar>
			  <div class="bg-orange text-body2 rounded-borders text-white q-py-xs" style="font-size:13px;">QIBLAT</div>
			</div>
			<div style="width:100px;height:134px;" v-ripple="{color:'grey'}" class="relative-position set-border rounded-borders shadow-0 hover">
			  <q-avatar class="q-my-md" square size="65px" >
			    <q-img src="~/assets/beranda/quran.png" />
			  </q-avatar>
			  <div class="bg-light-blue rounded-borders text-white q-py-xs" style="font-size:13px;">QURAN</div>
			</div>

		</div>
	</q-scroll-area>

    <!-- <q-separator color="grey-3" class="q-mt-md q-py-sm" /> -->

		<!-- <q-separator color="grey-2" /> -->
	<div class="bg-white q-mt-lg q-py-sm rounded-borders">
		<div class="row q-px-sm">
			<span class="text-subtitle1 text-light-blue weight-400">Hi-Class: </span>
			<q-space />
	    	<q-btn label="Lihat Semua" no-caps size="13px" dense color="blue" flat  />
			<!-- <span class="text-h6 text-primary weight-bold">Pilihan</span> -->
			</div>
		<div class="q-px-sm text-grey q-mb-md">Dapatkan ilmu pilihan terbaik dari narasumber kami</div>

		<!-- MOBILE -->
		<div class="swiper-kelas swiper-container-initialized swiper-container-horizontal">
		  <div class="swiper-wrapper q-px-xs">
			<div v-for="(item, index) in konten_index_3" :key="index" class="swiper-slide">
				<q-img :style="'width: '+container_disarankan/3.2+'px; height:'+ (is_mobile_size ? 150 : 250) +'px;'" :src="item.sampul" loading="lazy" v-ripple="{color:'grey'}" class="relative-position rounded-borders" />
			</div>

		  </div>
		</div>
	</div>

    <!-- <q-separator color="grey-3" class="q-mt-md q-py-sm" /> -->

	<div class="bg-white q-mt-lg q-py-sm rounded-borders">
	    <div class="q-px-sm row q-mb-sm">
	    	<span class="text-subtitle1 weight-400 text-grey-6">Terbaru</span>
	    	<q-space />
	    	<q-btn label="Lihat Semua" no-caps size="13px" dense color="blue" flat  />
	    </div>


		<!-- MOBILE -->
	    <div class="swiper-disarankan swiper-container-initialized swiper-container-horizontal">
	      <div class="swiper-wrapper q-px-xs">

			<div v-for="(item, index) in konten_index_5" :key="index" class="swiper-slide">
				<div class="row no-wrap">
					<div v-ripple="{color:'grey'}" style="width:140px;" class="relative-position flex flex-center text-center bg-white q-pb-md q-pt-sm hover">

						<div class="text-center" style="width:100px;">
							<q-avatar size="64px">

	      					<img loading="lazy" :src="img_checker(item.user_view.foto)" @error="handleError" v-lazy-src="img_checker(item.user_view.foto)">

							  <!-- <img src="https://i.pinimg.com/originals/61/5e/bc/615ebc862ad3aceecc7b607b13fdbf10.jpg" loading="lazy" style="width: 100px; height: 100px; border-radius:50px;"> -->

							</q-avatar>

							<q-chip outline style="padding: 5px 10px" text-color="white" class="q-px-sm bg-white" dense size="10px" color="pink-5">{{ item.tipe_to_label.split('_')[0] | capitalize }}</q-chip>

	<!-- 						<div style="font-size:10px;border-radius:50px;margin-top:-5px;position: relative;" class="text-center bg-orange q-mx-sm text-white">

							</div> -->
						</div>
						<div class="text-grey q-mt-sm text-caption full-width">{{ item.user_view.nama | text-wrap(12, '...') }}</div>
					</div>
				</div>
			</div>

	      </div>
	  	</div>
	</div>
    <!-- <q-separator color="grey-3" class="q-pt-xs" /> -->

    <div class="bg-white q-mt-lg q-py-sm rounded-borders">
	    <div class="q-px-sm row q-mb-sm">
	    	<span class="text-subtitle1 weight-400 text-grey-6">Rekomendasi</span>
	    	<q-space />
	    	<q-btn label="Lihat Semua" no-caps size="13px" dense color="blue" flat  />
	    </div>

	    <div class="swiper-rekomendasi swiper-container-initialized swiper-container-horizontal">
	      <div class="swiper-wrapper q-pl-xs">

			<div v-for="(item, index) in konten_index_6" :key="index" class="swiper-slide">
				<div class="row no-wrap">
					<q-card style="width:140px;" flat bordered class="text-center bg-white q-pb-sm q-mr-xs hover">
						<q-card-actions vertical v-ripple="{color:'grey'}" class="relative-position">

							<div class="text-center q-pt-sm" style="width:auto;">
						        <q-avatar size="60px">

		      					<img loading="lazy" :src="img_checker(item.foto)" @error="handleError" v-lazy-src="img_checker(item.foto)">

						          <!-- <img src="https://cdn.quasar.dev/img/boy-avatar.png">   -->
						          <q-icon name="star" style="font-size:14px; padding:1.5px;" color="white" class="absolute-top-left bg-green rounded-borders" />
						        </q-avatar>
							</div>

							<div v-if="item.nama" class="text-grey q-mt-sm text-caption">
								{{ item.nama | text-wrap(12, '...') }}
							</div>
							<div v-else class="text-grey q-mt-sm text-caption">
								???
							</div>

							<!-- <q-btn icon="person_add" label="Ikuti" size="sm" color="light-blue" dense no-caps rounded outline unelevated class="q-pl-xs q-pr-sm q-mt-sm"/> -->
						</q-card-actions>

						<Mengikuti :form="{
							id_user_teman: item.id,
						}" :mengikuti="item.mengikuti" />
	<!-- 					<div v-if="tombol_mengikuti" class="flex flex-center" >
		     				<q-btn @click="onSubmit" label="Ikuti" class="flex flex-center" size="sm" color="light-blue" no-caps rounded unelevated />
		     			</div> -->

					</q-card>
				</div>
			</div>

	      </div>
	  	</div>
	</div>

    <!-- DESIGN 1 -->
    <!--
    <div class="q-px-sm row q-mt-md q-mb-sm">
    	<span class="text-subtitle1 weight-400 text-grey-6">Rekomendasi</span>
    	<q-space />
    	<q-btn label="Lihat Semua" no-caps size="13px" dense color="blue" flat  />
    </div>

    <div class="swiper-disarankan swiper-container-initialized swiper-container-horizontal q-mb-md">
      <div class="swiper-wrapper q-px-xs">

		<div v-for="n in 10" :key="n" class="swiper-slide">
			<div class="row no-wrap q-gutter-xs">
				<div style="width:140px; border:1px solid rgba(0,0,0,0.00)" class="flex flex-center text-center bg-white q-py-md rounded-borders">
					<div class="text-center" style="max-width:100px;">
				        <q-avatar size="60px">
				          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
				          <q-icon name="star" style="font-size:14px; padding:1.5px;" color="white" class="absolute-top-left bg-green rounded-borders" />
				        </q-avatar>
					</div>
					<span class="text-grey q-mt-sm text-caption">{{ 'Diterjemahkan dari bahasa Inggris-Quasar' | text-wrap(15, '...') }}</span>

					<q-btn icon="person_add" label="Ikuti" size="sm" color="light-blue" dense no-caps rounded outline unelevated class="q-pl-xs q-pr-sm q-mt-sm"/>
				</div>
			</div>
		</div>

      </div>
  	</div>
	-->

    <!-- <q-separator color="grey-3" class="q-py-sm" /> -->


</div>
</template>

<script type="text/javascript">

;

export default {
	components: {
		Mengikuti: () => import('./disarankan-mengikuti')
	},
		computed: {
			// ...mapFields({
		  //   	current_tab: "beranda.current_tab",

		  //       reset_prefetch: "beranda.reset_prefetch",

		  //       konten_index_1: "beranda.konten_index_1",
		  //       konten_index_2: "beranda.konten_index_2",
		  //       konten_index_3: "beranda.konten_index_3",
		  //       konten_index_4: "beranda.konten_index_4",
		  //       konten_index_5: "beranda.konten_index_5",
		  //       konten_index_6: "beranda.konten_index_6",
		  //       konten_index_7: "beranda.konten_index_7",

		  //       paginate_index_7: "beranda.paginate_index_7",


		  //       loading: "beranda.loading",
		  //       keyword: "beranda.keyword",
			// }),
		},
		data() {
			return {
				container_disarankan: 0,

				thumbStyle: {
					right: '4px',
					borderRadius: '5px',
					backgroundColor: '#027be3',
					height: '5px',
					opacity: 0.75
				},

				barStyle: {
					right: '2px',
					borderRadius: '9px',
					backgroundColor: '#027be3',
					height: '5px',
					opacity: 0.2
				}
			}
		},
		beforeDestroy() {
			delete window.swiper
		},
		deactivated() {
			delete window.swiper
		},
		watch: {
			is_mobile_size() {
				if(document.getElementById('container_disarankan')) {
					this.container_disarankan = document.getElementById('container_disarankan').offsetWidth
				}
			},
			konten_index_3(){
				this.$nextTick();
			}
		},
		mounted() {
			if(document.getElementById('container_disarankan')) {
				this.container_disarankan = document.getElementById('container_disarankan').offsetWidth
			}

			setTimeout(() => {
				new Swiper('.swiper-disarankan', {
					slidesPerView: this.is_mobile_size ? 3 : 5,
					// centeredSlides: true,
					spaceBetween: 1.5,
					loop: false,
				});

				new Swiper('.swiper-rekomendasi', {
					slidesPerView: this.is_mobile_size ? 3 : 5,
					// centeredSlides: true,
					spaceBetween: 2,
					loop: false,
				});

				new Swiper('.swiper-kelas', {
					slidesPerView: 3,
					// centeredSlides: true,
					spaceBetween: 0,
					loop: false,
				});
			}, 250)


		 //  var swiper = new Swiper('.swiper-shortcut', {
			// slidesPerView: this.is_mobile_size ? 3 : 5,
			// // centeredSlides: true,
		 //    spaceBetween: 1.5,
		 //    loop: true,
		 //  });
		},
		methods: {
			imgURL(id) {
				console.log(`assets/images/slide_${id}.png`)
				return require(`assets/images/slide_${id}.png`)
			},
	  	}
	};
</script>

<style type="text/css" scoped>
.swiper-disarankan, .swiper-kelas, .swiper-rekomendasi {
	overflow: hidden;
}

img {
  max-width: 100vw;
}

.tron-shader {
  height: 65px;
  margin-top: -65px;
  position: relative;
}

.tron-shader-2 {
  height: 60px;
  background: rgba(0,0,0,0.25);
  position: relative;
}


.set-border {
  padding:3px;
  border:0px rgb(49 204 236 / 33%) solid;
}

.set-border-orange {
  padding:3px;
  border:0px rgb(236 204 49 / 33%) solid;
}

.set-border-green {
  padding:3px;
  border:0px rgb(49 236 98 / 33%) solid;
}

.set-border-pink {
  padding:3px;
  border:0px rgb(236 49 144 / 33%) solid;
}


</style>
