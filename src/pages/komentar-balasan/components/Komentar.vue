<template>
  <q-item class="col-12 q-px-sm">
    <q-item-section avatar>
      <q-avatar>
        <img src="https://cdn.quasar.dev/img/boy-avatar.png">
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label lines="1" class="text-bold">{{ item.name }}</q-item-label>
      <!-- <q-item-label caption lines="1">
        <q-chip class="q-ma-none" color="primary" size="11px" text-color="white" icon="check">
          Follow
        </q-chip>
      </q-item-label> -->
      <!-- <router-link class="absolute-full"  to="/"></router-link> -->
    </q-item-section>

    <q-item-section side>
    </q-item-section>
    <q-btn @click="onMenu" dense style="height:30px;" flat round icon="more_vert" color="dark" />
  </q-item>

  <q-item class="col-12 q-px-sm">
    <q-item-section avatar>
      <q-avatar>

      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ item.konten }}</q-item-label>

      <q-item-label class="row">

        <q-item class="q-pa-none col-auto" clickable dense v-ripple>
          <q-item-section>
            <q-item-label caption>{{ item.created_at }}</q-item-label>
          </q-item-section>
        </q-item>

      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: {
    item: {
      default: () => ({
        id:'',
        id_user:'',
        parent_id:'',
        konten:'',
        diblokir:'',
        created_at:'',
        updated_at:'',
        name:'',
      })
    }
  }
}
</script>
