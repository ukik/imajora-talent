<template>
  <q-no-ssr>

    <q-list class="row">
      <q-item class="col-12 q-px-sm">
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label lines="1">contact.name contact.name contact.name contact.name contact.name</q-item-label>
          <q-item-label caption lines="1">
            <!-- contact.email -->
            <q-chip class="q-ma-none" color="primary" size="11px" text-color="white" icon="check">
              Follow
            </q-chip>
            <!-- <router-link to="/">Follow</router-link> -->
          </q-item-label>
          <!-- <router-link class="absolute-full"  to="/"></router-link> -->
        </q-item-section>

        <q-item-section side>
        </q-item-section>
        <q-btn @click="onMenu" dense style="height:30px;" flat round icon="more_vert" color="dark" />
      </q-item>

      <div class="col-12">
        <q-carousel :style="[is_mobile_size ? 'height:250px;' : 'height:350px;']" swipeable animated v-model="slide" autoplay arrows navigation
            infinite>
          <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
          <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
        </q-carousel>
      </div>

      <q-item class="col-12 q-pa-sm" dense>
        <q-item-section>
          <q-item-label class="row q-gutter-col-sm">
            <div class="col-auto">
              <q-btn @click="onMenu" flat round icon="fa-regular fa-heart" color="dark" />
            </div>
            <div class="col-auto">
              <q-btn @click="onMenu" flat round icon="fa-regular fa-comment" color="dark" />
            </div>
            <div class="col-auto">
              <q-btn @click="onMenu" flat round icon="fa-regular fa-paper-plane" color="dark" />
            </div>
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-btn @click="onMenu" flat round icon="fa-regular fa-bookmark" color="dark" />
        </q-item-section>
      </q-item>

      <q-item class="col-12" clickable dense>
        <q-item-section>
          <q-item-label class="text-bold" lines="1">123 Likes</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="col-12" dense>
        <q-item-section>
          <q-item-label><span class="text-bold">@123 Likes: </span> asahpolapikir 🙏🏻🙏🏻🙏🏻🙏🏻 setengah triliun If you are using version 1.x of vue3-lottie you
            should upgrade to version 2.x. You can do this by running the Installation and Usage command below. This adds
            TS support for the component. There are some new imports so take a look at the new
            documentation.</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="col-12" clickable dense>
        <q-item-section>
          <q-item-label caption lines="1">View all 85 comments</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="col-12" v-for="(item, index) in 5">
        <q-item-section>
          <q-item-label class="text-caption"><span class="text-bold">@123 Likes: </span> <span>asahpolapikir
              🙏🏻🙏🏻🙏🏻🙏🏻 setengah triliun If you are using version 1.x of vue3-lottie you should upgrade to version
              2.x. You can do this by running the Installation and Usage command below. This adds TS support for the
              component. There are some new imports so take a look at the new documentation.</span></q-item-label>
        </q-item-section>
      </q-item>


      <q-item class="col-12" dense>
        <q-item-section>
          <q-input v-model="text" maxlength="2500" counter autogrow placeholder="Add a comment">
            <!-- <template v-slot:append>
          <q-icon name="flight_takeoff" />
        </template> -->

            <template v-if="text" v-slot:append>
              <q-btn dense label="post" flat color="primary" />
            </template>
          </q-input>
        </q-item-section>
      </q-item>
    </q-list>
  </q-no-ssr>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      slide: 1,
    }
  },
  methods: {
    onMenu() {
      console.log(123)
    }
  }
}
</script>
