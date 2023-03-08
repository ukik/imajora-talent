<template>
<fragment>

  <q-item-label header>Koin</q-item-label>

  <q-item clickable v-ripple :to="get_koin_dompet">
    <q-item-section avatar top>
      <q-avatar icon="local_activity" color="grey-1" text-color="positive" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Dompet Hiqma</q-item-label>
      <q-item-label caption>Lihat arus koin</q-item-label>
    </q-item-section>
  </q-item>
  <q-item clickable v-ripple :to="({ name: 'koin' })">
    <q-item-section avatar top>
      <q-avatar icon="local_activity" color="grey-1" text-color="positive" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Misi Harian</q-item-label>
      <q-item-label caption>Ambil bonus koin harian</q-item-label>
    </q-item-section>
  </q-item>
  <q-item clickable v-ripple :to="({ name: 'sholat' })">
    <q-item-section avatar top>
      <q-avatar icon="local_activity" color="grey-1" text-color="positive" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Waktu Sholat</q-item-label>
      <q-item-label caption>Hadiah koin dari sholat</q-item-label>
    </q-item-section>
  </q-item>  
  <q-item clickable v-ripple :to="({ name: 'koin_kasir' })">
    <q-item-section avatar top>
      <q-avatar icon="local_activity" color="grey-1" text-color="positive" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Outlet Penukaran</q-item-label>
      <q-item-label caption>Tukar koin hiqma</q-item-label>
    </q-item-section>
  </q-item>
  <q-item clickable v-ripple :to="({ name: 'koin_kasir_pesanan' })">
    <q-item-section avatar top>
      <q-avatar icon="local_activity" color="grey-1" text-color="positive" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Riwayat Penukaran</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item>

</fragment>

</template>

<script type="text/javascript">

export default {
  computed: {
    get_koin_dompet() {
      let to; 
      if(this.get_user_logged) {
        to = { 
          name: 'koin_dompet',
          params: {
            id: this.get_authentication_user.id
          }
        }  
                      
        return to      
      } 
      to = {
        name: 'login'
      }
      return to      
    }
  },
};

</script>