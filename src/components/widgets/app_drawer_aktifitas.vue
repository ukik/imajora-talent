<template>
<fragment>

  <q-item-label header>Aktifitas</q-item-label>

  <q-item clickable v-ripple :to="({ 
    name: 'notifikasi',
  })">
    <q-item-section avatar top>
      <q-avatar icon="supervisor_account" color="grey-1" text-color="cyan" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Notifikasi</q-item-label>
      <q-item-label caption>Tukar koin hiqma</q-item-label>
    </q-item-section>
  </q-item>
  <q-item v-if="get_authentication_user" clickable v-ripple :to="({ 
    name: 'disukai',
    params: {
      id: get_authentication_user.id,
    }
  })">
    <q-item-section avatar top>
      <q-avatar icon="supervisor_account" color="grey-1" text-color="cyan" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Disukai</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item>
  <q-item v-if="get_authentication_user" clickable v-ripple :to="({ 
    name: 'favorit',
    params: {
      id: get_authentication_user.id,
    }    
  })">
    <q-item-section avatar top>
      <q-avatar icon="supervisor_account" color="grey-1" text-color="cyan" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Favorit</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item>
  <q-item v-if="get_authentication_user" clickable v-ripple :to="({ 
    name: 'mengikuti',
    params: {
      id: get_authentication_user.id,
    }    
  })">
    <q-item-section avatar top>
      <q-avatar icon="supervisor_account" color="grey-1" text-color="cyan" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Mengikuti</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item>

  <q-item v-if="get_authentication_user" clickable v-ripple :to="({ 
    name: 'pengikut',
    params: {
      id: get_authentication_user.id,
    }    
  })">
    <q-item-section avatar top>
      <q-avatar icon="supervisor_account" color="grey-1" text-color="cyan" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Pengikut</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item>  
</fragment>

</template>