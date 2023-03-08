<style type="text/css" scoped>
  .cornflowerblue {
    color: cornflowerblue;
  };
</style>

<template>
<fragment>

  <q-item-label header>Fitur</q-item-label>

  <q-item clickable v-ripple :to="({ 
    name: 'cari',
  })">
    <q-item-section avatar top>
      <q-avatar icon="extension" color="grey-1" class="cornflowerblue" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Pencarian</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item>  


  <q-item clickable v-ripple :to="({ 
    name: 'lokasi',
  })">
    <q-item-section avatar top>
      <q-avatar icon="extension" color="grey-1" class="cornflowerblue" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Lokasi</q-item-label>
      <q-item-label caption>Atur posisi geografis anda</q-item-label>
    </q-item-section>
  </q-item>
  
  <q-item clickable v-ripple :to="({ 
    name: 'kiblat',
  })">
    <q-item-section avatar top>
      <q-avatar icon="extension" color="grey-1" class="cornflowerblue" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Kiblat</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item>
  <q-item clickable v-ripple :to="({ 
    name: 'saluran',
  })">
    <q-item-section avatar top>
      <q-avatar icon="extension" color="grey-1" class="cornflowerblue" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Saluran</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item>
  <q-item clickable v-ripple :to="({ 
    name: 'kalender',
  })">
    <q-item-section avatar top>
      <q-avatar icon="extension" color="grey-1" class="cornflowerblue" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Kalender</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item>

<!--   <q-item clickable v-ripple :to="({ 
    name: 'alquran',
  })">
    <q-item-section avatar top>
      <q-avatar icon="extension" color="grey-1" class="cornflowerblue" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Tagar</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item> -->
 
</fragment>

</template>