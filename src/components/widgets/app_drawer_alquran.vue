<template>
<fragment>

  <q-item-label header>Alquran</q-item-label>

  <q-item clickable v-ripple :to="({ 
    name: 'alquran',
  })">
    <q-item-section avatar top>
      <q-avatar icon="local_library" color="grey-1" text-color="orange" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Baca Alquran</q-item-label>
      <q-item-label caption>Pilih juz atau surat </q-item-label>
    </q-item-section>
  </q-item>
  <q-item clickable v-ripple :to="({ 
    name: 'alquran_jelajah',
  })">
    <q-item-section avatar top>
      <q-avatar icon="local_library" color="grey-1" text-color="orange" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Jelajah Alquran</q-item-label>
      <q-item-label caption>Klasifikasi tema alquran</q-item-label>
    </q-item-section>
  </q-item>
  <q-item clickable v-ripple :to="({ 
    name: 'alquran_cari',
  })">
    <q-item-section avatar top>
      <q-avatar icon="local_library" color="grey-1" text-color="orange" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Cari Ayat Alquran</q-item-label>
      <q-item-label caption>Lihat ayat lebih sepesifik</q-item-label>
    </q-item-section>
  </q-item>
  <q-item clickable v-ripple :to="({ 
    name: 'alquran_kutipan',
  })">
    <q-item-section avatar top>
      <q-avatar icon="local_library" color="grey-1" text-color="orange" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Kutipan Alquran</q-item-label>
      <q-item-label caption>Temukan inspirasi alquran</q-item-label>
    </q-item-section>
  </q-item>

</fragment>

</template>