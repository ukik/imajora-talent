<template>
<q-card v-ripple="{ color: 'grey' }" bordered
	class="relative-position  bg-white shadow-0 q-pa-sm q-mt-md"
	:class="[ is_not_mobile_size ? 'q-mt-md' : '' ]"
	style="width:100%; border-radius:5px;"
	>

  <div
    class="q-px-sm"
    style="font-size:12px;"
  >
    <span v-if="data_sekarang" class="text-grey"
      >Sudah absen {{ data_sekarang["sholat"] }} di
      <b>Hiqma</b> ?</span
    >
  </div>

  <!-- <q-separator color="grey-2" /> -->

	<q-item class="q-pl-sm q-pr-xs bg-white">

    <q-item-section v-if="data_sekarang">
      <q-item-label class="weight-500"> 
        {{ data_sekarang["sholat"] | capitalize }}
      </q-item-label>
      <q-item-label caption> 
        {{ data_sekarang["waktu_1"] }}
      </q-item-label>
    </q-item-section>

	  <q-item-section>

      <q-item-label side class="text-right">
        <q-chip
          size="12px"
          outline
          color="pink"
          icon="alarm"
          :label="detik_ke_time"
        />      
      </q-item-label>

	  </q-item-section>

	</q-item>


</q-card>	
</template>

<script type="text/javascript">

import { mapFields } from "vuex-map-fields";

const jadwal_misi = {
  async created() {
    this.onCreate()
  },
  watch: {
    async waktu_selisih(val) {
      if(val <= 0) {
        await clearInterval(this.interval_5);
        await this.onCreate()
        await this.onInit();
      }
    }
  },
  // deactivated() {
  //   clearTimeout(this.timeout_5);
  //   clearInterval(this.interval_5);
  //   console.log("deactivated");
  // },
  beforeDestroy() {
    // clearTimeout(this.timeout_5);
    clearInterval(this.interval_5);
    console.log("beforeDestroy");
  },
  // activated() {
  //   this.onInit();
  // },
  mounted() {
    setTimeout(() => {
      this.onInit();
    }, 500)
  },
  data() {
    return {
    	// interval_5: null,
    	// timeout_5: null,

      data_sekarang: null,
      //
      persen_selisih: null,
      selisih: null,
      waktu_selisih: null,
      waktu_sekarang: null,
      jadwal_selanjutnya: {
        nama: null,
        waktu: null,
        detik: null
      },
      kordinat: null,
      aktual_detik: 0,
      expand: true
    };
  },
  computed: {
    ...mapFields({
    	konten_index_8: "beranda.konten_index_8",

  		// Sholat
  		sholat: "sholat.sholat",
  		jadwal_sholat: "sholat.jadwal_sholat",
  		tanggal_hijriah: "sholat.tanggal_hijriah",
  		koin_sholat: "sholat.koin_sholat",
  		date: "sholat.date",
  		hari: "sholat.hari",
  		referensi_koin: "sholat.referensi_koin",
  		data_sholat: "sholat.data_sholat",
  		is_hari_ini: "sholat.is_hari_ini"
    }),
    detik_ke_time() {
      // this.waktu_selisi = 300 = 5 menit
      if (this.waktu_selisih == undefined || isNaN(this.waktu_selisih)) return;

      return new Date(this.waktu_selisih * 1000).toISOString().substr(11, 8);
    }
  },
  methods: {
    async onCreate() {

      const today = new Date(this.date); // new Date().toLocaleDateString('id-ID'),
      console.log(today);
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

      await this.dispatchVuex("sholat/action_payload", { date: date });

      this.setup();

      for (var i = this.get_sholat_koin_sholat.length - 1; i >= 0; i--) {
        if (
          this.get_sholat_koin_sholat[i]["sholat"] ==
          this.jadwal_selanjutnya["sholat"]
        ) {
          this.data_sekarang = this.get_sholat_koin_sholat[i];
          console.log(
            "get_sholat_koin_sholat",
            this.get_sholat_koin_sholat[i],
            this.get_sholat_koin_sholat[i]["sholat"],
            this.jadwal_selanjutnya["sholat"]
          );
        }
      }    
    },
    onInit() {
      clearInterval(this.interval_5)
      this.interval_5 = setInterval(() => {
        this.detik_selisih();

        this.waktu_sekarang = new Date().toLocaleTimeString();

        this.persen_selisih = (this.waktu_selisih / this.selisih) * 100;

        // console.log(vm.jadwal_selanjutnya, vm.waktu_selisih, vm.selisih)
        this.aktual_detik = Math.floor(this.jadwal_selanjutnya.detik / 1000);
      }, 1000);
    },
    setup() {
      const vm = this;

      let date = new Date();
      // date.addDays(vm.get_sholat_hari);

      const sekarang = Math.floor(date / 1000);

      for (var i = 0; i < vm.get_sholat_jadwal_sholat.length; i++) {
        const _item = vm.get_sholat_jadwal_sholat[i];

        if (_item["detik"] > sekarang) {
          console.log(sekarang, _item["detik"], _item);

          vm.jadwal_selanjutnya = _item;
          break;
        }
      }

      for (var j = 0; j < vm.get_sholat_jadwal_sholat_selisih.length; j++) {
        if (
          vm.get_sholat_jadwal_sholat_selisih[j]["nama"] ==
          vm.jadwal_selanjutnya["nama"]
        ) {
          console.log(
            vm.get_sholat_jadwal_sholat_selisih[j],
            vm.jadwal_selanjutnya
          );

          vm.selisih = vm.get_sholat_jadwal_sholat_selisih[j]["selisih"];
        }
      }
    },
    async detik_selisih() {
      const vm = this;

      const waktu = new Date();
      const hms =
        waktu.getHours() + ":" + waktu.getMinutes() + ":" + waktu.getSeconds();

      const waktu_mulai = new Date(`${vm.get_sholat_esok} ${hms}`);
      const waktu_akhir = new Date(
        `${vm.get_sholat_esok} ${vm.jadwal_selanjutnya.waktu}`
      );

      vm.waktu_selisih = Math.abs(
        Math.round((waktu_akhir - waktu_mulai) / 1000)
      );

      // console.log(vm.waktu_selisih, hms, vm.jadwal_selanjutnya.waktu)
    }
  }
};

export default {
  mixins: [jadwal_misi],
};

</script>