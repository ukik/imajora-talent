<template>
<fragment>

  <q-item-label header>Tanya Jawab</q-item-label>

  <q-item clickable v-ripple :to="({ 
    name: 'konsultasi_top',
  })">
    <q-item-section avatar top>
      <q-avatar icon="contact_support" color="grey-1" text-color="pink" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Top Konsultasi</q-item-label>
      <q-item-label caption>Paling banyak dijawab</q-item-label>
    </q-item-section>
  </q-item>
<!--   <q-item clickable v-ripple :to="({ 
    name: 'konsultasi_minta',
  })">
    <q-item-section avatar top>
      <q-avatar icon="contact_support" color="grey-1" text-color="pink" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Minta Jawaban</q-item-label>
      <q-item-label caption>Kirim permintaan jawaban</q-item-label>
    </q-item-section>
  </q-item> -->
  <q-item clickable v-ripple :to="({ 
    name: 'konsultasi_masuk',
  })">
    <q-item-section avatar top>
      <q-avatar icon="contact_support" color="grey-1" text-color="pink" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Pertanyaan Masuk</q-item-label>
      <q-item-label caption>Kumpulan tanya jawab</q-item-label>
    </q-item-section>
  </q-item>

</fragment>

</template>