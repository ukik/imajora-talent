<template>
<fragment>

  <q-item-label header>Doa</q-item-label>

  <q-item clickable v-ripple :to="({ 
    name: 'doa',
  })">
    <q-item-section avatar top>
      <q-avatar icon="menu_book" color="grey-1" text-color="purple-5" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Baca Doa</q-item-label>
      <q-item-label caption>Amalkan doa pilihan </q-item-label>
    </q-item-section>
  </q-item>
  <q-item clickable v-ripple :to="({ 
    name: 'doa_favorit',
  })">
    <q-item-section avatar top>
      <q-avatar icon="menu_book" color="grey-1" text-color="purple-5" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Doa Favorit</q-item-label>
      <q-item-label caption>Arsip doa favorit</q-item-label>
    </q-item-section>
  </q-item>
<!--   <q-item clickable v-ripple :to="({ 
    name: 'doa_kategori',
  })">
    <q-item-section avatar top>
      <q-avatar icon="menu_book" color="grey-1" text-color="purple-5" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Kategori Doa</q-item-label>
      <q-item-label caption>Doa yang dikelompokkan</q-item-label>
    </q-item-section>
  </q-item> -->

</fragment>

</template>