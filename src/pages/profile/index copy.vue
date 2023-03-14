<template>
<q-page class="bg-white">

    <!-- <q-header v-if="!profile" bordered unelevated class="bg-white">
      <q-toolbar id="toolbar">
        <q-btn
          flat
          dense
          round
          color="blue"
          icon="arrow_back_ios"
          @click="onGotoBack"
        />
        <q-space />
        <ActionbarMenu />
      </q-toolbar>
    </q-header>

    <q-header v-if="profile" unelevated class="bg-white">
      <q-toolbar id="toolbar">
        <q-btn
          flat
          dense
          round
          color="blue"
          icon="arrow_back_ios"
          @click="onGotoBack"
        />
        <transition-group name="fade" class="col ">
        	<div key="0" v-if="snippet_actionbar_trigger" class="text-black">
        		{{ textWrap(profile.nama, 14, '...') | capitalize }}
        	</div>
    			<q-toolbar-title key="1" v-if="!snippet_actionbar_trigger" />
    		</transition-group>
        <q-btn
          flat
          dense
          round
          color="blue"
          icon="loyalty"
        />
        <q-btn v-if="get_authentication_user.id != profile.id"
          flat
          dense
          round
          color="blue"
          icon="settings"
          :to="{
            name: 'pengaturan_profile',
            params: {
              id: get_authentication_user.id
            }
          }"
        />

        <q-btn
          flat
          dense
          round
          color="blue"
          icon="qr_code"
          :to="{
            name: 'profile_qrcode',
            params: {
              id: get_authentication_user.id
            }
          }"
        />
        <q-btn
          flat
          dense
          round
          color="blue"
          icon="share"
        />
        <ActionbarMenu />

	    </q-toolbar>

    </q-header> -->

    <q-pull-to-refresh>
      <!-- <q-page v-if="!loading && !profile" class="flex flex-center">
        <BlankProfil />
      </q-page>    -->

      <!-- <SpinnerOrbit v-if="loading" /> -->

      <div v-if="profile">

      	<Biodata class="text-center q-py-md" />

      	<q-separator color="grey-2" />

        <q-tabs style="height: 75px;"
  				value=""  no-caps
  				inline-label align="justify"
  				indicator-color="transparent"
  				class=""
  				content-class="text-weight-light"
  				>
              <q-route-tab :to="{
                name: 'mengikuti',
                params: {
                  id: profile.id
                },
              }" style="width:50%;" >
                <div>
                  <b class="text-subtitle1 text-weight-bold">{{ get_null_checker(profile.view_total_1, 'total_teman_mengikuti') }}</b>

                  <a class="text-body2 text-grey-7">Mengikuti</a>
                </div>
              </q-route-tab>

            	<q-separator vertical color="grey-3"/>

              <q-route-tab :to="{
                name: 'pengikut',
                params: {
                  id: profile.id
                },
              }" style="width:50%;" >
                <div>
                  <b class="text-subtitle1 text-weight-bold">{{ get_null_checker(profile.view_total_1, 'total_teman_pengikut') }}</b>

                  <a class="text-body2 text-grey-7">Pengikut</a>
                </div>
              </q-route-tab>

              <!-- <q-tab class="q-py-xs" style="width:50%;">
              	<div>
              		<span class="text-subtitle1 text-weight-bold">{{ profile.view_total_1.total_teman_pengikut }}</span>
                	</br>
              		<span class="text-caption text-grey-7">Pengikut</span>
              	</div>
              </q-tab> -->

              <q-separator vertical color="grey-3"/>

              <q-route-tab :to="{
                name: 'disukai',
                params: {
                  id: profile.id
                },
              }" style="width:50%;" >
                <div>
                  <b class="text-subtitle1 text-weight-bold">{{ get_null_checker(profile.view_total_2, 'total_suka') }}</b>
                  </br>
                  <a class="text-body2 text-grey-7">Disukai</a>
                </div>
              </q-route-tab>

              <!-- <q-tab class="q-py-xs" style="width:50%;">
              	<div>
                  <span class="text-subtitle1 text-weight-bold">{{ profile.view_total_2.total_suka }}</span>
                	</br>
              		<span class="text-caption text-grey-7">Disukai</span>
              	</div>
              </q-tab> -->

              <q-separator vertical color="grey-3"/>

              <q-route-tab :to="{
                name: 'favorit',
                params: {
                  id: profile.id
                },
              }" style="width:50%;" >
                <div>
                  <b class="text-subtitle1 text-weight-bold">{{ total_favorit }}</b>
                  </br>
                  <a class="text-body2 text-grey-7">Favorit</a>
                </div>
              </q-route-tab>

              <!-- <q-tab class="q-py-xs" style="width:50%;">
              	<div>
                  <span class="text-subtitle1 text-weight-bold">
                    {{ total_favorit }}</span>
                	</br>
              		<span class="text-caption text-grey-7">Favorit</span>
              	</div>
              </q-tab> -->

        </q-tabs>

      	<q-separator class="q-py-sm bg-grey-2" />

        <Content :isSwipeableTab="isSwipeableTab" />

        <q-infinite-scroll v-if="is_desktop && MOUNTED && $route.name == 'profile'" :debounce="200" ref="infiniteScroll" @load="onLoad" :offset="250">
          <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px" />
          </div>
          </template>
        </q-infinite-scroll>

      </div>
    </q-pull-to-refresh>


    <!-- <q-footer unelevated v-if="MOUNTED && paginate_trigger"class="bg-white text-black">

      <q-toolbar v-if="current_tab == 'beranda' && konten_beranda.length > 0 && paginate_beranda_current_page" class="bg-white">
        <div class="text-body1">Halaman: </div>
        <q-space />
        <q-pagination dense class="q-px-sm" color="primary" input-class="text-primary"
          :disable="!is_paginate_ready"
          v-model="paginate_beranda_current_page"
          :max="paginate_beranda.last_page"
          :input="true"
          @input="onInput"
        />
      </q-toolbar>


      <q-toolbar v-if="current_tab == 'artikel' && konten_artikel.length > 0 && paginate_artikel_current_page" class="bg-white">
        <div class="text-body1">Halaman: </div>
        <q-space />
        <q-pagination dense class="q-px-sm" color="primary" input-class="text-primary"
          :disable="!is_paginate_ready"
          v-model="paginate_artikel_current_page"
          :max="paginate_artikel.last_page"
          :input="true"
          @input="onInput"
        />
      </q-toolbar>

      <q-toolbar v-if="current_tab == 'gambar' && konten_gambar.length > 0 && paginate_gambar_current_page" class="bg-white">
        <div class="text-body1">Halaman: </div>
        <q-space />
        <q-pagination dense class="q-px-sm" color="primary" input-class="text-primary"
          :disable="!is_paginate_ready"
          v-model="paginate_gambar_current_page"
          :max="paginate_gambar.last_page"
          :input="true"
          @input="onInput"
        />
      </q-toolbar>

      <q-toolbar v-if="current_tab == 'jawaban_konsultasi' && konten_jawaban_konsultasi.length > 0 && paginate_jawaban_konsultasi_current_page" class="bg-white">
        <div class="text-body1">Halaman: </div>
        <q-space />
        <q-pagination dense class="q-px-sm" color="primary" input-class="text-primary"
          :disable="!is_paginate_ready"
          v-model="paginate_jawaban_konsultasi_current_page"
          :max="paginate_jawaban_konsultasi.last_page"
          :input="true"
          @input="onInput"
        />
      </q-toolbar>

      <q-toolbar v-if="current_tab == 'konsultasi' && konten_konsultasi.length > 0 && paginate_konsultasi_current_page" class="bg-white">
        <div class="text-body1">Halaman: </div>
        <q-space />
        <q-pagination dense class="q-px-sm" color="primary" input-class="text-primary"
          :disable="!is_paginate_ready"
          v-model="paginate_konsultasi_current_page"
          :max="paginate_konsultasi.last_page"
          :input="true"
          @input="onInput"
        />
      </q-toolbar>

      <q-toolbar v-if="current_tab == 'live' && konten_live.length > 0 && paginate_live_current_page" class="bg-white">
        <div class="text-body1">Halaman: </div>
        <q-space />
        <q-pagination dense class="q-px-sm" color="primary" input-class="text-primary"
          :disable="!is_paginate_ready"
          v-model="paginate_live_current_page"
          :max="paginate_live.last_page"
          :input="true"
          @input="onInput"
        />
      </q-toolbar>

      <q-toolbar v-if="current_tab == 'video' && konten_video.length > 0 && paginate_video_current_page" class="bg-white">
        <div class="text-body1">Halaman: </div>
        <q-space />
        <q-pagination dense class="q-px-sm" color="primary" input-class="text-primary"
          :disable="!is_paginate_ready"
          v-model="paginate_video_current_page"
          :max="paginate_video.last_page"
          :input="true"
          @input="onInput"
        />
      </q-toolbar>
    </q-footer> -->

</q-page>
</template>

<script>



;


const mixin_paginate = {
  mounted(){
    setTimeout(() => {
      this.MOUNTED = true
    }, 2500)
  },
  methods: {
    async onInput(val) {
      console.log('onInput', val)
      if(this.is_desktop) {
        if (document.getElementById('swiper-kanal')) {
          await this.scrollToElement(document.getElementById('swiper-kanal'), 50, 0);
        }
        // window.scrollTo({
        //   top: 0,
        //   left: 0,
        // });
      }
      await this.dispatchVuex('profile/action_payload_more', { page: val, alias: this.current_tab, id: this.$route.params.id, tag: 'by_paginate' })
    },
  },
  data () {
    return {
      is_paginate_ready: true,
      MOUNTED: false,
    }
  },
  watch: {
    loading(val) {
      if(!val) {
        setTimeout(() => {
          this.is_paginate_ready = true
          return
        }, 2000)
      }
      this.is_paginate_ready = false
    }
  },
}

export default {
  mixins: [mixin_paginate],
  computed: {
    // ...mapFields({
    //   // paginate_beranda: "profile.paginate_beranda",
    //   // paginate_live: "profile.paginate_live",
    //   // paginate_gambar: "profile.paginate_gambar",
    //   // paginate_video: "profile.paginate_video",
    //   // paginate_konsultasi: "profile.paginate_konsultasi",
    //   // paginate_jawaban_konsultasi: "profile.paginate_jawaban_konsultasi",
    //   // paginate_artikel: "profile.paginate_artikel",

    //   konten_beranda: "profile.konten_beranda",
    //   paginate_beranda: "profile.paginate_beranda",
    //   paginate_beranda_current_page: "profile.paginate_beranda.current_page",

    //   konten_artikel: "profile.konten_artikel",
    //   paginate_artikel: "profile.paginate_artikel",
    //   paginate_artikel_current_page: "profile.paginate_artikel.current_page",

    //   konten_gambar: "profile.konten_gambar",
    //   paginate_gambar: "profile.paginate_gambar",
    //   paginate_gambar_current_page: "profile.paginate_gambar.current_page",

    //   konten_jawaban_konsultasi: "profile.konten_jawaban_konsultasi",
    //   paginate_jawaban_konsultasi: "profile.paginate_jawaban_konsultasi",
    //   paginate_jawaban_konsultasi_current_page: "profile.paginate_jawaban_konsultasi.current_page",

    //   konten_konsultasi: "profile.konten_artikel",
    //   paginate_konsultasi: "profile.paginate_konsultasi",
    //   paginate_konsultasi_current_page: "profile.paginate_konsultasi.current_page",

    //   konten_live: "profile.konten_live",
    //   paginate_live: "profile.paginate_live",
    //   paginate_live_current_page: "profile.paginate_live.current_page",

    //   konten_video: "profile.konten_video",
    //   paginate_video: "profile.paginate_video",
    //   paginate_video_current_page: "profile.paginate_video.current_page",

    //   profile: "profile.profile",
    //   // paginate: "profile.paginate",
    //   current_tab: "profile.current_tab",
    //   loading: "aggregator.loading",
    // }),
    total_favorit() {
      return Math.round(
        this.get_null_checker(this.profile.view_total_5, 'total_favorit_artikel') +
        this.get_null_checker(this.profile.view_total_5, 'total_favorit_doa') +
        this.get_null_checker(this.profile.view_total_5, 'total_favorit_alquran') +
        this.get_null_checker(this.profile.view_total_5, 'total_favorit_gambar') +
        this.get_null_checker(this.profile.view_total_5, 'total_favorit_konsultasi') +
        this.get_null_checker(this.profile.view_total_5, 'total_favorit_status') +
        this.get_null_checker(this.profile.view_total_5, 'total_favorit_video')
      )
    },
    get_null_checker() {
      return function(val, key) {
        return (!val || val == undefined) ? 0 : Number(val[key])
      }
    },
    get_null_variable() {
      return function(val) {
        return (!this[val] || this[val] == undefined) ? false : true
      }
    },
  },
  preFetch ({ store, currentRoute }) {
    let pull_refresh = false
    if(store.state.profile.profile.id != currentRoute.params.id) {
      pull_refresh = true
    }

    return store.dispatch('profile/action_payload', { pull_refresh: pull_refresh, id: currentRoute.params.id })
  },
	mounted(){
		const vm = this
		window.addEventListener('scroll', vm.onScroll);

		setTimeout(() => {
      if(document.getElementById("nama") == undefined) return
			vm.snippet_actionbar_y = document.getElementById("nama").getBoundingClientRect().top + 10
		}, 500)
	},
	deforeDestroy () {
		window.removeEventListener('scroll', this.onScroll);
		window.clearTimeout()
	},
	components: {
		Biodata: () => import('./biodata.vue'),
		Content: () => import('./content.vue'),
	},
  watch: {
    paginate_artikel(val) {
      // console.log('paginate', val)
      setTimeout(() => {
        if(this.$refs.infiniteScroll !== undefined) this.$refs.infiniteScroll.resume()
      }, 250)
    },
    paginate_beranda(val) {
      // console.log('paginate', val)
      setTimeout(() => {
        if(this.$refs.infiniteScroll !== undefined) this.$refs.infiniteScroll.resume()
      }, 250)
    },
    paginate_gambar(val) {
      // console.log('paginate', val)
      setTimeout(() => {
        if(this.$refs.infiniteScroll !== undefined) this.$refs.infiniteScroll.resume()
      }, 250)
    },
    paginate_jawaban_konsultasi(val) {
      // console.log('paginate', val)
      setTimeout(() => {
        if(this.$refs.infiniteScroll !== undefined) this.$refs.infiniteScroll.resume()
      }, 250)
    },
    paginate_konsultasi(val) {
      // console.log('paginate', val)
      setTimeout(() => {
        if(this.$refs.infiniteScroll !== undefined) this.$refs.infiniteScroll.resume()
      }, 250)
    },
    paginate_live(val) {
      // console.log('paginate', val)
      setTimeout(() => {
        if(this.$refs.infiniteScroll !== undefined) this.$refs.infiniteScroll.resume()
      }, 250)
    },
    paginate_video(val) {
      // console.log('paginate', val)
      setTimeout(() => {
        if(this.$refs.infiniteScroll !== undefined) this.$refs.infiniteScroll.resume()
      }, 250)
    },

  },
	methods: {

		onScroll() {
			const vm = this
			// console.log(window.scrollY)
			if(window.scrollY >= vm.snippet_actionbar_y) {
				vm.snippet_actionbar_trigger = true
			} else {
				vm.snippet_actionbar_trigger = false
			}

      if (window.scrollY >= 450) {
        vm.paginate_trigger = true;
        // vm.beranda = false
      } else {
        vm.paginate_trigger = false;
      }
		},
    async refresh (done) {

      await this.dispatchVuex('profile/action_payload', { pull_refresh: true, id: this.$route.params.id })
      if(this.$refs.infiniteScroll !== undefined) this.$refs.infiniteScroll.stop()
      done() // required
    },
    async onLoad (index, done) {
      // console.log('onLoad', this['paginate_'+this.current_tab])
      const paginate = this['paginate_'+this.current_tab]
      // const paginate = this.paginate //this['paginate_'+this.current_tab]

      if(!paginate.next_page_url) {
        done(true)
        return
      }

      await this.dispatchVuex('profile/action_payload_more', { page: paginate.current_page + 1, alias: this.current_tab, id: this.$route.params.id, tag: 'by_scroll' })

      if(paginate.next_page_url) {
        done(true) //= stop infinite-scroll
      } else {
        done()
      }

    }
	},
	data () {
		return {
      isSwipeableTab: false,
			snippet_actionbar_y: 100,
			snippet_actionbar_trigger: false,
      paginate_trigger: false,

		}
 	},
};
</script>

<style type="text/css" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
