<style type="text/css" scoped>
  .salmon {
    color: salmon;
  };
</style>

<template>
<fragment>

  <q-item-label header>Lainnya</q-item-label>

<!--   <q-item clickable v-ripple>
    <q-item-section avatar top>
      <q-avatar icon="workspaces" color="grey-1" text-color="salmon" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Lokasi</q-item-label>
      <q-item-label caption>Atur posisi geografis anda</q-item-label>
    </q-item-section>
  </q-item> -->
<!--   <q-item clickable v-ripple>
    <q-item-section avatar top>
      <q-avatar icon="workspaces" color="grey-1" text-color="salmon" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Formulir Masukkan</q-item-label>
      <q-item-label caption>Ambil bonus koin harian</q-item-label>
    </q-item-section>
  </q-item> -->
<!--   <q-item clickable v-ripple>
    <q-item-section avatar top>
      <q-avatar icon="workspaces" color="grey-1" text-color="salmon" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Notifikasi</q-item-label>
      <q-item-label caption>Tukar koin hiqma</q-item-label>
    </q-item-section>
  </q-item> -->
<!--   <q-item clickable v-ripple>
    <q-item-section avatar top>
      <q-avatar icon="workspaces" color="grey-1" text-color="salmon" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Kiblat</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item> -->
<!--   <q-item clickable v-ripple>
    <q-item-section avatar top>
      <q-avatar icon="workspaces" color="grey-1" text-color="salmon" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Saluran</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item> -->
<!--   <q-item clickable v-ripple>
    <q-item-section avatar top>
      <q-avatar icon="workspaces" color="grey-1" text-color="salmon" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Kalender</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item> -->
<!--   <q-item clickable v-ripple>
    <q-item-section avatar top>
      <q-avatar icon="workspaces" color="grey-1" text-color="salmon" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Sholat</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item> -->
<!--   <q-item clickable v-ripple>
    <q-item-section avatar top>
      <q-avatar icon="workspaces" color="grey-1" text-color="salmon" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Edit Profile</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item> -->
  <q-item clickable v-ripple :to="({ 
    name: 'pengaturan',
  })">
    <q-item-section avatar top>
      <q-avatar icon="miscellaneous_services" color="grey-1" class="salmon" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Pengaturan</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item>

  <q-item clickable v-ripple :to="({ 
    name: 'pengaturan_bantuan_feedback',
  })">
    <q-item-section avatar top>
      <q-avatar icon="miscellaneous_services" color="grey-1" class="salmon" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Masukkan</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item>

  <q-item clickable v-ripple :to="({ 
    name: 'pengaturan_tentang',
  })">
    <q-item-section avatar top>
      <q-avatar icon="miscellaneous_services" color="grey-1" class="salmon" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Tentang</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item>

<!--   <q-item clickable v-ripple>
    <q-item-section avatar top>
      <q-avatar icon="workspaces" color="grey-1" text-color="salmon" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Profile QR Kode</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item>
 -->
<!--   <q-item clickable v-ripple>
    <q-item-section avatar top>
      <q-avatar icon="workspaces" color="grey-1" text-color="salmon" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Profile </q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item> -->
<!-- 
  <q-item clickable v-ripple>
    <q-item-section avatar top>
      <q-avatar icon="workspaces" color="grey-1" text-color="salmon" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Disukai</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item>
 -->
<!--   <q-item clickable v-ripple>
    <q-item-section avatar top>
      <q-avatar icon="workspaces" color="grey-1" text-color="salmon" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Tagar</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item> -->

<!--   <q-item clickable v-ripple>
    <q-item-section avatar top>
      <q-avatar icon="workspaces" color="grey-1" text-color="salmon" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Favorit</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item> -->

<!--   <q-item clickable v-ripple>
    <q-item-section avatar top>
      <q-avatar icon="workspaces" color="grey-1" text-color="salmon" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Pencarian</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item>  
 -->
<!--   <q-item clickable v-ripple>
    <q-item-section avatar top>
      <q-avatar icon="workspaces" color="grey-1" text-color="salmon" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Suka</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item>
 -->
<!--   <q-item clickable v-ripple>
    <q-item-section avatar top>
      <q-avatar icon="workspaces" color="grey-1" text-color="salmon" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Mengikuti</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item> -->

<!--   <q-item clickable v-ripple>
    <q-item-section avatar top>
      <q-avatar icon="workspaces" color="grey-1" text-color="salmon" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Pengikut</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item>   -->
</fragment>

</template>