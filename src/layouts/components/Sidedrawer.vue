<template>
  <div>
    <q-list class="rounded-borders text-white">
      <q-item
        v-if="is_logged"
        class="q-px-sm absolute-top"
        :class="[is_admin ? 'bg-red-8' : 'bg-primary']"
        style="z-index: 99"
      >
        <q-item-section avatar>
          <q-avatar size="xl">
            <img
              :src="img_checker(user?.foto)"
              loading="lazy"
              @error="handleError"
            />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-white text-capitalize" lines="1">
            {{ user?.nama }}
          </q-item-label>
          <q-item-label caption lines="1" class="text-white">{{
            role_name
          }}</q-item-label>
        </q-item-section>
      </q-item>
      <!-- <q-separator v-if="is_logged" style="margin-top:62px;" color="white" /> -->

      <!-- GCM -->
      <!--
    <q-item dense
            clickable
            v-ripple
            @click="onSendGCM"
            class="my-menu-link"
            active-class="my-menu-link-active">
      <q-item-section avatar>
        <q-icon name="o_notifications" />
      </q-item-section>
      <q-item-section>Send GCM</q-item-section>
    </q-item> -->
      <q-item
        dense
        :style="is_logged ? 'margin-top:75px' : ''"
        :to="{ name: 'main' }"
        clickable
        v-ripple
        class="my-menu-link"
        :active-class="route_name == 'main' ? 'my-menu-link-active' : ''"
      >
        <q-item-section avatar>
          <q-icon name="o_home" />
        </q-item-section>
        <q-item-section>Beranda</q-item-section>
      </q-item>
      <q-item
        v-if="is_logged"
        dense
        :to="{ name: 'profile', params: { id: '' } }"
        clickable
        v-ripple
        :active="route_name == 'profile'"
        :class="
          route_name == 'profile' ? 'my-menu-link-active' : 'my-menu-link'
        "
      >
        <q-item-section avatar>
          <q-icon name="o_person" />
        </q-item-section>
        <q-item-section>Profile</q-item-section>
      </q-item>
      <!-- <q-item dense
        clickable
        v-ripple
        :active="link === 'nearby'"
        @click="link = 'nearby'"
        class="my-menu-link"
        active-class="my-menu-link-active"
      >
        <q-item-section avatar>
          <q-icon name="o_room" />
        </q-item-section>

        <q-item-section>Terdekat</q-item-section>
      </q-item> -->
      <!-- <q-separator color="white" class="width" spaced /> -->
      <q-item
        v-if="is_logged"
        dense
        :to="{
          name: 'bookmark',
          params: {
            page: bookmark_page,
          },
        }"
        clickable
        v-ripple
        :active="route_name == 'bookmark'"
        class="my-menu-link"
        active-class="my-menu-link-active"
      >
        <q-item-section avatar>
          <q-icon name="bookmark_border" />
        </q-item-section>
        <q-item-section>Bookmark</q-item-section>
      </q-item>
      <q-item
        v-if="is_logged"
        dense
        :to="{
          name: 'riwayat',
          params: {
            page: riwayat_page,
          },
        }"
        clickable
        v-ripple
        :active="link === 'riwayat'"
        @click="link = 'riwayat'"
        class="my-menu-link"
        active-class="my-menu-link-active"
      >
        <q-item-section avatar>
          <q-icon name="o_assignment" />
        </q-item-section>
        <q-item-section>Riwayat</q-item-section>
      </q-item>
      <!-- <q-item dense :to="{ name: 'pesan', params: { slug: 123 } }"
        clickable
        v-ripple
        :active="route_name == 'pesan'"
        class="my-menu-link"
        active-class="my-menu-link-active"
      >
        <q-item-section avatar>
          <q-icon name="chat_bubble_outline" />
        </q-item-section>

        <q-item-section>Pesan</q-item-section>
      </q-item> -->
      <q-item
        dense
        :to="{
          name: 'pencarian',
          params: {
            page: pencarian_page,
          },
          query: {
            keyword: pencarian_keyword,
            min: pencarian_min,
            max: pencarian_max,
            regency: pencarian_regencies,
            kategori: pencarian_kategori,
          },
        }"
        clickable
        v-ripple
        :active="route_name == 'pencarian'"
        class="my-menu-link"
        active-class="my-menu-link-active"
      >
        <q-item-section avatar>
          <q-icon name="search" />
        </q-item-section>
        <q-item-section>Pencarian</q-item-section>
      </q-item>
      <q-item
        v-if="is_logged"
        dense
        :to="{
          name: 'aset',
          params: {
            tab: aset_tab,
            page: aset_page,
          },
        }"
        clickable
        v-ripple
        :active="route_name == 'aset'"
        class="my-menu-link"
        active-class="my-menu-link-active"
      >
        <q-item-section avatar>
          <q-icon name="bar_chart" />
        </q-item-section>
        <q-item-section>
          {{ is_admin ? "Aset User" : "Aset Saya" }}
        </q-item-section>
      </q-item>
      <q-item
        v-if="is_logged"
        dense
        :to="{ name: 'formulir', params: { id: form_id } }"
        clickable
        v-ripple
        :active="route_name == 'formulir'"
        class="my-menu-link"
        active-class="my-menu-link-active"
      >
        <q-item-section avatar>
          <q-icon name="edit" />
        </q-item-section>
        <q-item-section>Formulir</q-item-section>
      </q-item>
      <q-item
        dense
        :to="{ name: 'tentang' }"
        clickable
        v-ripple
        :active="route_name == 'tentang'"
        class="my-menu-link"
        active-class="my-menu-link-active"
      >
        <q-item-section avatar>
          <q-icon name="rss_feed" />
        </q-item-section>
        <q-item-section>Tentang Kami</q-item-section>
      </q-item>
      <q-item
        dense
        :to="{ name: 'bantuan' }"
        clickable
        v-ripple
        class="my-menu-link"
        :class="[
          route_name == 'bantuan' || route_name == 'bantuan_detail'
            ? 'my-menu-link-active'
            : '',
        ]"
      >
        <q-item-section avatar>
          <q-icon name="help_outline" />
        </q-item-section>
        <q-item-section>Bantuan</q-item-section>
      </q-item>
      <q-separator color="white" spaced />
      <!-- <q-item dense :to="{ name: 'bantuan' }"
        clickable
        v-ripple
        class="my-menu-link"
        :class="[ route_name == 'bantuan' || route_name == 'bantuan_detail' ? 'my-menu-link-active' : '' ]"
      >
        <q-item-section avatar>
          <q-icon name="help_outline" />
        </q-item-section>

        <q-item-section>Bantuan</q-item-section>
      </q-item> -->
      <q-item
        v-if="!is_logged"
        dense
        :to="{ name: 'login' }"
        clickable
        v-ripple
        :active="link === 'login'"
        @click="link = 'login'"
        class="my-menu-link"
        active-class="my-menu-link-active"
      >
        <q-item-section avatar>
          <q-icon name="login" />
        </q-item-section>
        <q-item-section>Login</q-item-section>
      </q-item>
      <q-item
        v-if="!is_logged"
        dense
        :to="{ name: 'register' }"
        clickable
        v-ripple
        :active="link === 'register'"
        @click="link = 'register'"
        class="my-menu-link"
        active-class="my-menu-link-active"
      >
        <q-item-section avatar>
          <q-icon name="o_perm_contact_calendar" />
        </q-item-section>
        <q-item-section>Register</q-item-section>
      </q-item>
      <q-item
        v-if="!is_logged"
        dense
        :to="{ name: 'lupa_sandi' }"
        clickable
        v-ripple
        :active="link === 'lupa_sandi'"
        @click="link = 'lupa_sandi'"
        class="my-menu-link"
        active-class="my-menu-link-active"
      >
        <q-item-section avatar>
          <q-icon name="o_https" />
        </q-item-section>
        <q-item-section>Lupa Sandi</q-item-section>
      </q-item>
      <q-item
        v-if="is_logged"
        dense
        :to="{ name: 'ganti_sandi' }"
        clickable
        v-ripple
        :active="link === 'ganti_sandi'"
        @click="link = 'ganti_sandi'"
        class="my-menu-link"
        active-class="my-menu-link-active"
      >
        <q-item-section avatar>
          <q-icon name="o_vpn_key" />
        </q-item-section>
        <q-item-section>Ganti Sandi</q-item-section>
      </q-item>
      <q-item
        v-if="is_logged"
        dense
        :to="{ name: 'verifikasi' }"
        clickable
        v-ripple
        :active="link === 'verifikasi'"
        @click="link = 'verifikasi'"
        class="my-menu-link"
        active-class="my-menu-link-active"
      >
        <q-item-section avatar>
          <q-icon name="o_verified_user" />
        </q-item-section>
        <q-item-section>Verifikasi</q-item-section>
      </q-item>
      <q-item
        v-if="is_logged"
        dense
        :to="{ name: 'ganti_telepon' }"
        clickable
        v-ripple
        :active="link === 'ganti_telepon'"
        @click="link = 'ganti_telepon'"
        class="my-menu-link"
        active-class="my-menu-link-active"
      >
        <q-item-section avatar>
          <q-icon name="o_perm_phone_msg" />
        </q-item-section>
        <q-item-section>Ganti Telepon</q-item-section>
      </q-item>
      <!-- <q-item dense :to="{ name: 'firebase_ui' }"
        clickable
        v-ripple
        :active="link === 'firebase_ui'"
        @click="link = 'firebase_ui'"
        class="my-menu-link"
        active-class="my-menu-link-active"
      >
        <q-item-section avatar>
          <q-icon name="person_add" />
        </q-item-section>

        <q-item-section>Firebase UI</q-item-section>
      </q-item>  -->
      <q-item
        v-if="is_logged"
        dense
        clickable
        v-ripple
        :active="link === 'logout'"
        @click="$store.dispatch('auth/logout')"
        class="my-menu-link"
        active-class="my-menu-link-active"
      >
        <q-item-section avatar>
          <q-icon name="power_settings_new" />
        </q-item-section>
        <q-item-section>Keluar</q-item-section>
      </q-item>

      <q-separator color="white" spaced />

      <div class="full-width q-mt-lg text-center">DOWNLOAD</div>
      <q-item @click="onPlaystore" clickable v-ripple>
        <q-card class="q-mx-lg bg-transparent" style="border-radius: 50px">
          <img
            style="width: auto; zoom: 2"
            src="~assets/images/googleplay.png"
          />
        </q-card>
      </q-item>
    </q-list>
  </div>
</template>

<style scoped="">
.my-menu-link {
  width: 85%;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  color: white;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.my-menu-link-active {
  width: 85%;
  background: white;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  color: #0a8ed9;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.width {
  width: 85%;
}
</style>


<script>
import { ref } from "vue";



export default {
  computed: {
    // ...mapFields({
    //   bookmark_page: "bookmark.index.data.payload.current_page",
    //   riwayat_page: "riwayat.index.data.payload.current_page",

    //   aset: "aset",
    //   aset_tab: "aset.tab",

    //   form_id: "formulir.param_id",

    //   // pencarian
    //   pencarian_page: "pencarian.index.data.payload.current_page",
    //   pencarian_keyword: "pencarian.local.keyword",
    //   pencarian_min: "pencarian.local.min",
    //   pencarian_max: "pencarian.local.max",
    //   pencarian_regencies: "layout.local.regency",
    //   pencarian_kategori: "pencarian.local.kategori",
    // }),
    aset_page() {
      return this.aset[this.aset_tab].data.payload.current_page;
    },
  },
  setup() {
    return {
      link: ref("inbox"),
    };
  },
  watch: {
    route_query() {
      this.link = this.route_name;
      console.log(this.route_name);
    },
  },
  mounted() {
    this.link = this.route_name;
  },
  methods: {
    onSendGCM() {
      this.$axios.get("/notifikasi/send_gcm");
    },
    onPlaystore() {
      window.open(`${this.server_host}mobile.apk`, "_blank");
    },
  },
};
</script>
