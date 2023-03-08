<template>
<div class="q-mt-md">
    <!-- <div class="text-body2 text-grey-7 q-mb-md">Misi Harian</div> -->

    <!-- MEMBACA -->
    <q-list bordered padding class="bg-white shadow-0 rounded-borders">


      <q-item  v-for="(item, index) in get_koin_bonus_harian_target_membaca_condition" :key="'A'+index" v-if="item.status == 'tersedia'">
        <q-item-section top avatar>
          <q-avatar :class="[item.status == 'tersedia' ? 'zoomX' : '']">
            <img src="~/assets/coins/8.png" />
            <q-badge rounded color="blue-5" style="font-size:10px;padding:2px;" class="absolute-top-left" dense>{{ item.koin_reward }}</q-badge>
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <b class="">Sesi {{ index + 1 }}</b> -- Membaca
            <!-- {{ item.status | capitalize }} -->
          </q-item-label>
          <q-item-label class="text-grey" style="font-size:12px;">{{ item.buka }} - {{ item.tutup }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-item-label>{{ item.target }}/{{ item.batas }}</q-item-label>              
          <q-icon :name="item.status == 'maksimal' ? 'check_circle_outline' : 'history'" :color="item.status == 'tutup' ? 'red-3' : 'light-blue-3'" />
        </q-item-section>
      </q-item>

      <q-item  v-for="(item, index) in get_koin_bonus_harian_target_kontribusi_condition" :key="'C'+index" v-if="item.status == 'tersedia'">
        <q-item-section top avatar>
          <q-avatar :class="[item.status == 'tersedia' ? 'zoomX' : '']">
            <img src="~/assets/coins/8.png" />
            <q-badge rounded color="blue-5" style="font-size:10px;padding:2px;" class="absolute-top-left" dense>{{ item.koin_reward }}</q-badge>
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <b class="">Sesi {{ index + 1 }}</b> -- Kontribusi
            <!-- {{ item.status | capitalize }} -->
          </q-item-label>
          <q-item-label class="text-grey" style="font-size:12px;">{{ item.buka }} - {{ item.tutup }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-item-label>{{ item.target }}/{{ item.batas }}</q-item-label>              
          <q-icon :name="item.status == 'maksimal' ? 'check_circle_outline' : 'history'" :color="item.status == 'tutup' ? 'red-3' : 'light-blue-3'" />
        </q-item-section>
      </q-item>


      <q-item  v-for="(item, index) in get_koin_bonus_harian_target_menjawab_condition" :key="'B'+index" v-if="item.status == 'tersedia'">
        <q-item-section top avatar>
          <q-avatar :class="[item.status == 'tersedia' ? 'zoomX' : '']">
            <img src="~/assets/coins/8.png" />
            <q-badge rounded color="blue-5" style="font-size:10px;padding:2px;" class="absolute-top-left" dense>{{ item.koin_reward }}</q-badge>
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <b class="">Sesi {{ index + 1 }}</b> -- Menjawab
            <!-- {{ item.status | capitalize }} -->
          </q-item-label>
          <q-item-label class="text-grey" style="font-size:12px;">{{ item.buka }} - {{ item.tutup }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-item-label>{{ item.target }}/{{ item.batas }}</q-item-label>              
          <q-icon :name="item.status == 'maksimal' ? 'check_circle_outline' : 'history'" :color="item.status == 'tutup' ? 'red-3' : 'light-blue-3'" />
        </q-item-section>
      </q-item>

      <div class="text-center">
        <q-btn color="blue-5" dense label="Selengkapnya" flat :to="({ 
          name: 'koin',
        })"/>
      </div>      
    </q-list>

</div>
</template>

<script>

import { mapFields } from 'vuex-map-fields';

const vuex = {
  computed: {
    ...mapFields({
      koin_banner: "koin.koin_banner",
      user: "koin.user",
    })
  },  
}

export default {
  mixins: [vuex],
  mounted() {
    this.$store.dispatch('koin/action_payload')    
  },
  data() {
    return {
      slide: 0,
      autoplay: true
    }
  },     
  computed: {
    computed_get_koin_bonus_harian_target_membaca_condition() {
      let total = 0
      for (var i = this.get_koin_bonus_harian_target_membaca_condition.length - 1; i >= 0; i--) {
        total += this.get_koin_bonus_harian_target_membaca_condition[i]['koin']
      }
      return total
    },
    computed_get_koin_bonus_harian_target_kontribusi_condition() {
      let total = 0
      for (var i = this.get_koin_bonus_harian_target_kontribusi_condition.length - 1; i >= 0; i--) {
        total += this.get_koin_bonus_harian_target_kontribusi_condition[i]['koin']
      }
      return total
    },
    computed_get_koin_bonus_harian_target_menjawab_condition() {
      let total = 0
      for (var i = this.get_koin_bonus_harian_target_menjawab_condition.length - 1; i >= 0; i--) {
        total += this.get_koin_bonus_harian_target_menjawab_condition[i]['koin']
      }
      return total
    }            
  },
  methods: {
    async refresh (done) {
      await this.action_koin({ pull_refresh: true })
      done() // required
    },
  }
};
</script>

<style type="text/css" scoped>
.gradient-2 {
  background-image: linear-gradient(to bottom right, rgb(0, 223, 142), rgb(0,210,181) , rgb(0,193,234)); 
}    


.zoom {
  animation: scale 1s linear infinite;
}

.zoom-2 {
  animation: scale 5s linear infinite;
}

@keyframes scale {
  50% {
    -webkit-transform:scale(1.2);
    -moz-transform:scale(1.2);
    -ms-transform:scale(1.2);
    -o-transform:scale(1.2);
    transform:scale(1.2);
  }
}


</style>