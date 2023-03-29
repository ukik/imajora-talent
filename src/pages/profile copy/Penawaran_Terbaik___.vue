<template>
  <!-- <Empty_Mini v-if="init && !loading && penawaran.length <= 0" /> -->


  <q-tabs v-if="penawaran.length > 0" id="property_image_slider" no-caps inline-label :mobile-arrows="!is_mobile_size"
    v-model="tab" align="left" class="text-white" indicator-color="transparent">
    <q-tab v-for="(item, index) in penawaran" :key="index" class="q-pa-none q-ma-none border_radius_2"
      :class="[index == 0 ? 'q-ml-md' : '']" name="0">

      <q-item dense v-ripple class="q-pa-none q-ma-none" :to="{
        name: 'detail',
        params: { id: item?.properti_id, slug: item?.properti?.slug }
      }">

        <q-img class="q-mr-md border_radius_2 bg-dark" style="width: 300px; height: 350px;"
          :src="img_checker(item?.properti?.featured?.big_image)" @error="handleError">

          <div class="absolute-bottom text-left">
            <!-- <OwnedLabel v-if="user.id == item?.properti?.user_id" class="q-mb-sm" /> -->
            <q-item class="q-pa-none q-ma-none">
              <q-item-section>
                <q-item-label class="text-subtitle2 text-normal" lines="1">
                  {{ item?.properti?.judul }}
                </q-item-label>
                <q-item-label class="text-white" lines="1">
                  Alamat: {{ item?.properti?.alamat }}
                </q-item-label>
                <q-item-label caption class="text-white text-capitalize" lines="1">
                  {{ item?.properti?.regencies }}
                </q-item-label>
                <q-item-label class="text-body2 text-white text-bold" lines="1">
                  <!-- {{ $filters.currency(item?.properti?.harga) }} -->
                </q-item-label>

              </q-item-section>
            </q-item>
          </div>

          <q-chip class="absolute-top-right q-ma-sm my_chip text-capitalize" text-color="white" icon="room">{{
            item?.properti?.kategori }}</q-chip>

          <template v-slot:error>
            <div class="absolute-full flex flex-center bg-negative text-white">
              Cannot load image
            </div>

            <q-chip class="absolute-top-right q-ma-sm my_chip text-capitalize" text-color="white" icon="room">{{
              item?.properti?.kategori }}</q-chip>

            <q-item class="absolute-bottom q-pa-none q-ma-none">
              <!-- <OwnedLabel v-if="user.id == item?.properti?.user_id" class="q-mb-sm" /> -->
              <q-item-section>
                <q-item-label class="text-subtitle2 text-normal" lines="1">
                  {{ item?.properti?.judul }}
                </q-item-label>
                <q-item-label caption class="text-white" lines="1">
                  Alamat: {{ item?.properti?.alamat }}
                </q-item-label>
                <q-item-label caption class="text-white text-capitalize" lines="1">
                  {{ item?.properti?.regencies }}
                </q-item-label>
                <q-item-label class="text-body2 text-white text-bold" lines="1">
                  <!-- {{ $filters.currency(item?.properti?.harga) }} -->
                </q-item-label>

              </q-item-section>
            </q-item>
          </template>

        </q-img>
      </q-item>

    </q-tab>

  </q-tabs>

  <!-- <q-scroll-area style="height: 320px;">
  <div class="row no-wrap">
	<div v-for="(item, index) in 5"
		class="q-pa-none q-ma-none border_radius_2"
		:class="[ index == 0 ? '' : 'q-ml-md']"
		name="0">
        <q-img class="border_radius_2" style="width: 300px; height: 300px;" src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom text-subtitle1 text-center">
            Caption
          </div>
        </q-img>
	</div>
  </div>
</q-scroll-area> -->
</template>

<script type="text/javascript">


export default {
  computed: {
    // ...mapFields({
    //   // init: 'beranda.index.meta.init',
    //   // loading: 'beranda.index.meta.loading',

    //   // penawaran: 'beranda.index.data.payload.penawaran',
    // }),
  },
  data() {
    return {
      tab: '0',
      init: true,
      loading: false,

      penawaran: [
        {
          "id": 394,
          "properti_id": "1550",
          "created_at": "2022-01-05T01:47:15.000000Z",
          "updated_at": "2022-01-05T01:47:15.000000Z",
          "properti": {
            "id": 1550,
            "user_id": "9",
            "judul": "Qui quo earum voluptatem dicta ratione qui. Cumque rerum sit qui qui et qui. Est corporis ipsa est nostrum.",
            "slug": "qui-quo-earum-voluptatem-dicta-ratione-qui.-cumque-rerum-sit-qui-qui-et-qui.-est-corporis-ipsa-est-nostrum.-0683e326-c673-3fe0-87d9-9e6cd34749a4",
            "kategori": "rumah",
            "alamat": "4439 Jovanny Burgs Lake Mittieburgh, MI 32068-3237",
            "regencies": "kabupaten berau",
            "harga": "413217041",
            "visibility": true,
            "stok": 1,
            "validasi": true,
            "blokir": false,
            "submit": true,
            "soldout": false,
            "featured": {
              "properti_id": "1550",
              "big_image": "https://picsum.photos/id/240/1080/1000"
            }
          }
        },
        {
          "id": 75,
          "properti_id": "329",
          "created_at": "2022-01-05T01:46:58.000000Z",
          "updated_at": "2022-01-05T01:46:58.000000Z",
          "properti": {
            "id": 329,
            "user_id": "2",
            "judul": "Commodi expedita voluptates eaque enim eveniet odio debitis. Quia vel incidunt quia non fugiat ea. Non suscipit aut sunt adipisci deserunt incidunt.",
            "slug": "commodi-expedita-voluptates-eaque-enim-eveniet-odio-debitis.-quia-vel-incidunt-quia-non-fugiat-ea.-non-suscipit-aut-sunt-adipisci-deserunt-incidunt.-ed9bf7f1-c860-3b06-b9db-dd2e17afc5ed",
            "kategori": "rumah",
            "alamat": "84297 London Loaf Apt. 094 Port Ron, UT 97680",
            "regencies": "kabupaten paser",
            "harga": "992305650",
            "visibility": true,
            "stok": 1,
            "validasi": true,
            "blokir": false,
            "submit": true,
            "soldout": false,
            "featured": {
              "properti_id": "329",
              "big_image": "https://picsum.photos/id/840/1080/1000"
            }
          }
        },

      ],
    }
  }

};
</script>

<style type="text/css" scoped>
.my_chip {
  background: #00000047;
  color: white;
}
</style>

<style type="text/css">
#property_image_slider .q-tab__icon {
  background: #ffffff6b;
  height: 50px;
  width: 50px;
  position: absolute;
  top: 40%;
  border-radius: 50%;
  margin: 0px 12px;
}
</style>
