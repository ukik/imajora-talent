<template>
  <q-no-ssr>
    <q-form @submit="onSubmit" class="row flex flex-center">
      <div class="row col-12 text-center justify-center q-gutter-y-lg">

        <div class="full-width absolute" style="height:200px;
            background-image: url(https://cdn.game.tv/game-tv-content/images_3/c5fe7911559e21c08f59d655593a20cc/Banners.jpg);
            background-size:cover;
            background-repeat: no-repeat;
            background-position: center;
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;">
        </div>

        <!-- <div class="col-12 text-h4 q-mb-md text-bold">
          My Biodata
        </div> -->

        <div class="col-12" style="margin-top:120px;">
          <Biodata />

          <a href="http://localhost:9100/profile">http://localhost:9100/profile</a>
        </div>

        <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12 ">
          <q-tabs style="height: 75px;" value="" no-caps inline-label align="justify" indicator-color="transparent"
            class="" content-class="text-weight-light">
            <q-route-tab :to="{
              name: 'mengikuti',
              params: {

              },
            }" style="width:50%;">
              <div>
                <b class="text-subtitle1 text-weight-bold">100</b>
                <br>
                <a class="text-body2 text-grey-7">Mengikuti</a>
              </div>
            </q-route-tab>

            <q-separator vertical color="grey-3" />

            <q-route-tab :to="{
              name: 'pengikut',
              params: {

              },
            }" style="width:50%;">
              <div>
                <b class="text-subtitle1 text-weight-bold">100</b>
                <br>
                <a class="text-body2 text-grey-7">Pengikut</a>
              </div>
            </q-route-tab>

            <q-separator vertical color="grey-3" />

            <q-route-tab :to="{
              name: 'disukai',
              params: {

              },
            }" style="width:50%;">
              <div>
                <b class="text-subtitle1 text-weight-bold">100</b>
                <br>
                <a class="text-body2 text-grey-7">Disukai</a>
              </div>
            </q-route-tab>

            <q-separator vertical color="grey-3" />

            <q-route-tab :to="{
              name: 'favorit',
              params: {

              },
            }" style="width:50%;">
              <div>
                <b class="text-subtitle1 text-weight-bold">100</b>
                <br>
                <a class="text-body2 text-grey-7">Favorit</a>
              </div>
            </q-route-tab>

          </q-tabs>
        </div>

        <!-- <div class="col-12">
          <Social />
        </div> -->

        <div class="row q-col-gutter-sm col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12">
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-6">
            <q-btn icon="fab fa-facebook" color="red" class="text-body2 full-width" style="" outline
              label="youtube"></q-btn>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-6">
            <q-btn icon="fab fa-facebook" color="blue" class="text-body2 full-width" outline label="facebook"></q-btn>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-6">
            <q-btn icon="fab fa-instagram" color="pink" class="text-body2 full-width" outline label="instagram"></q-btn>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-6">
            <q-btn icon="fab fa-tiktok" color="dark" class="text-body2 full-width" outline label="tiktok"></q-btn>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-6">
            <q-btn icon="fab fa-twitter" color="cyan" class="text-body2 full-width" outline label="twitter"></q-btn>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-6">
            <q-btn icon="fab fa-pinterest" color="purple" class="text-body2 full-width" outline label="pinterest"></q-btn>
          </div>
          <!-- <div class="col-12">
            <q-btn icon="fa fa-link" color="pink" class="text-body2 full-width"  outline  label="website"></q-btn>
          </div> -->
        </div>

        <!-- <div class="col-12 text-h6 text-weight-regular text-grey-8">
          Featured Video
        </div> -->

        <video ref="video" :height="is_mobile_size ? 250 : 350"
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" id="video-preview"
          class="col-12" controls>
          Your browser does not support HTML video.
        </video>

        <!-- <div class="col-12 text-h6 text-weight-regular text-grey-8">
          Featured Banner
        </div> -->

        <div class="col-12">
          <q-carousel :style="[is_mobile_size ? 'height:250px;' : 'height:350px;']" swipeable animated v-model="slide" autoplay arrows navigation
             infinite>
            <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
            <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
            <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
            <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
          </q-carousel>
        </div>

        <div class="col-12 row q-col-gutter-sm">
          <div class="col">
            <q-btn @click="tab_category = 'musisi'" color="pink" class="text-body2 full-width" style="" unelevated rounded :outline="tab_category != 'musisi'">
              Musisi
            </q-btn>
          </div>
          <div class="col">
            <q-btn @click="tab_category = 'studio'" color="teal" class="text-body2 full-width" style="" unelevated rounded :outline="tab_category != 'studio'">
              Studio
            </q-btn>
          </div>
          <div class="col">
            <q-btn @click="tab_category = 'venue'" color="primary" class="text-body2 full-width" style="" unelevated rounded :outline="tab_category != 'venue'">
              Venue
            </q-btn>
          </div>
        </div>

        <!--
        ROUTER VERSION
        <div class="col-12 row q-col-gutter-sm">
          <div class="col">
            <q-btn :to="{name:'profile_musisi'}" color="pink" class="text-body2 full-width" style="" unelevated rounded :outline="tab_category != 'musisi'">
              Musisi
            </q-btn>
          </div>
          <div class="col">
            <q-btn :to="{name:'profile_studio'}" color="teal" class="text-body2 full-width" style="" unelevated rounded :outline="tab_category != 'studio'">
              Studio
            </q-btn>
          </div>
          <div class="col">
            <q-btn :to="{name:'profile_venue'}" color="primary" class="text-body2 full-width" style="" unelevated rounded :outline="tab_category != 'venue'">
              Venue
            </q-btn>
          </div>
        </div>
        <router-view />
        -->


        <TabMusisi v-if="tab_category == 'musisi'" />
        <TabStudio v-if="tab_category == 'studio'" />
        <TabVenue v-if="tab_category == 'venue'" />

        <!-- <q-tabs v-if="tab_category == 'musisi'" no-caps outside-arrows :mobile-arrows="is_mobile_size && !$is_cordova" dense v-model="tab"
          class="text-pink col-12 text-weight-regular">
          <q-tab name="1"><q-icon size="sm" name="fa fa-drum" class="q-mb-xs"></q-icon>Perform</q-tab>
          <q-tab name="2"><q-icon size="sm" name="fa-solid fa-microphone-lines" class="q-mb-xs"></q-icon>Karir</q-tab>
          <q-tab name="3"><q-icon size="sm" name="fa-regular fa-calendar" class="q-mb-xs"></q-icon>Agenda</q-tab>
          <q-tab name="4"><q-icon size="sm" name="fa-solid fa-list" class="q-mb-xs"></q-icon>Playlist</q-tab>
          <q-tab name="5"><q-icon size="sm" name="fa-solid fa-user-check" class="q-mb-xs"></q-icon>Original</q-tab>
          <q-tab name="6"><q-icon size="sm" name="fa-solid fa-guitar" class="q-mb-xs"></q-icon>Cover</q-tab>
        </q-tabs>


        <q-tabs v-if="tab_category == 'studio'" align="center" no-caps outside-arrows :mobile-arrows="is_mobile_size && !$is_cordova" dense inline-label v-model="tab" :breakpoint="0"
          class="text-teal col-12 text-weight-regular">
          <q-tab name="2" icon="home">&nbsp;&nbsp;Detail</q-tab>
          <q-tab name="3" icon="fa-regular fa-calendar">&nbsp;&nbsp;Agenda</q-tab>
          <q-tab name="4" icon="fa-solid fa-location">&nbsp;&nbsp;Lokasi</q-tab>
        </q-tabs>

        <q-tabs v-if="tab_category == 'venue'" align="center" no-caps outside-arrows :mobile-arrows="is_mobile_size && !$is_cordova" dense inline-label v-model="tab" :breakpoint="0"
          class="text-primary col-12 text-weight-regular">
          <q-tab name="2" icon="home">&nbsp;&nbsp;Detail</q-tab>
          <q-tab name="3" icon="fa-regular fa-calendar">&nbsp;&nbsp;Agenda</q-tab>
          <q-tab name="4" icon="fa-solid fa-location">&nbsp;&nbsp;Lokasi</q-tab>
        </q-tabs> -->

      </div>
    </q-form>
  </q-no-ssr>
</template>


<script>
import { mapFields } from "vuex-map-fields";
// import Form_Foto from './Form_Foto.vue'
import Biodata from './biodata.vue'
// import Social from './Penawaran_Terbaik.vue'
import TabMusisi from './pages/musisi.vue'
import TabStudio from './pages/studio.vue'
import TabVenue from './pages/venue.vue'

export default {
  // computed: {
  //   ...mapFields({
  //     country_selected: "auth.register.country_selected",
  //     phone: "auth.register.phone",
  //     password: "auth.register.password",
  //     password_confirmation: "auth.register.password_confirmation",
  //   }),
  // },
  components: {
    // Form_Foto,
    Biodata,
    // Social,
    TabMusisi,
    TabStudio,
    TabVenue,
  },
  data() {
    return {
      tab_category: 'musisi',
      tab: '1',
      slide: 1,
      uuid: null,
      name: null,
      email: null,
      phone: null,
      gender: null,
      options: [
        {
          label: 'Female',
          value: 'female',
          description: 'Search engine',
          icon: 'female'
        },
        {
          label: 'Male',
          value: 'male',
          description: 'Social media',
          icon: 'male'
        },
      ],
    }
  },
  methods: {
    allValidate(value = this.$refs) {
      let keys = []
      setTimeout(() => {
        for (let [key, value] of Object.entries(this.$refs)) {
          try {
            console.log('auto validate')
            value.validate();
          } catch (e) { }
          // console.log(key)
          // keys.push(value)
          // if (/^tenure/.test(key)) {
          //     keys.push({ key: value })
          // }
        }
      }, 2500)
      // console.log('all refs', this.$refs)
    },
    async onCheck() {
      if (this.password) this.$refs.password.validate();
      if (this.password_confirmation) this.$refs.password_confirmation.validate();
    },
    async onSubmit() {
      this.allValidate(this.$refs)

      // this.$refs.name.validate();
      // this.$refs.gender.validate();
      // this.$refs.email.validate();
      // this.$refs.password.validate();
      // this.$refs.password_confirmation.validate();

      if (!this.name) return;
      if (!this.email) return;
      if (!this.gender) return;
      if (!this.phone) return;
      if (!this.password) return;

      // const telp = this.phone.indexOf('+62') > -1 ? this.phone : ('+62'+this.phone)
      // const telp =
      //   this.phone.indexOf(this.country_selected) > -1
      //     ? this.phone
      //     : this.country_selected + this.phone;

      // this.$store.dispatch("auth/register", {
      //   country_selected: this.country_selected,
      //   phone: telp,
      //   password: this.password,
      //   password_confirmation: this.password_confirmation,
      // });
    },
  },
};
</script>
