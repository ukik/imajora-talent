<style type="text/css" scoped>
  .darkturquoise {
    color: darkturquoise;
  };
</style>


<template>
<fragment>

  <q-item-label header>Formulir</q-item-label>


  <q-item @click="showNotif" clickable v-ripple>
    <q-item-section avatar top>
      <q-avatar icon="edit" color="grey-1" class="darkturquoise" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Buat Artikel</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item>
  <q-item @click="showNotif" clickable v-ripple>
    <q-item-section avatar top>
      <q-avatar icon="edit" color="grey-1" class="darkturquoise" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Buat Video</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item>
  <q-item @click="showNotif" clickable v-ripple>
    <q-item-section avatar top>
      <q-avatar icon="edit" color="grey-1" class="darkturquoise" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Buat Pertanyaan</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item>
  <q-item @click="showNotif" clickable v-ripple>
    <q-item-section avatar top>
      <q-avatar icon="edit" color="grey-1" class="darkturquoise" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Buat Status</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item>
  <q-item @click="showNotif" clickable v-ripple>
    <q-item-section avatar top>
      <q-avatar icon="edit" color="grey-1" class="darkturquoise" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1" class="weight-500">Buat Live</q-item-label>
      <q-item-label caption>Status penukaran koin</q-item-label>
    </q-item-section>
  </q-item>
  
</fragment>

</template>

<script type="text/javascript">
export default {
  methods: {
    showNotif () {
      this.$router.push({ name: 'formulir_status' })
      return
      this.$q.notify({
        message: 'Akses Ekslusif',
        caption: 'hubungi admin kami',
        icon: 'announcement'
      })
    }
  }
};
</script>