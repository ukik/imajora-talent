<template>
  <div class="col-12 row">
    <!--  @left="onLeft" @right="onRight" -->
    <!-- <q-slide-item class="col-12 " left-color="red" right-color="purple">
      <template v-slot:left>
        <q-btn @click="$emit('onDelete')" round outline icon="delete" />
      </template> -->

      <q-item class="col-12 q-px-none">
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
        <q-btn dense style="height:30px;" flat round icon="more_vert" color="dark">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item @click="$emit('onDelete')" clickable v-close-popup>
                <q-item-section avatar><q-icon name="delete"></q-icon></q-item-section>
                <q-item-section>Delete</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-item>
    <!-- </q-slide-item> -->

    <q-item class="col-12 q-px-none">
      <q-item-section avatar>
        <q-avatar>

        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ item.comment }}</q-item-label>

        <!-- <q-item-label caption lines="1" class="text-left q-py-sm">
        <q-btn icon="replay" flat size="sm" label="Balas" dense></q-btn>
      </q-item-label> -->

      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      default: () => ({
        id: '',
        user_id: '',
        post_id: '',
        parent_id: '',
        comment: '',
        diblokir: '',
        created_at: '',
        updated_at: '',
        name: '',
      })
    }
  },
  methods: {
    onLeft({ reset }) {
      this.$q.notify('Left action triggered. Resetting in 1 second.')
      // setTimeout(() => {
      //   // reset()
      // }, 2000)
    },

    onRight({ reset }) {
      this.$q.notify('Right action triggered. Resetting in 1 second.')
      // setTimeout(() => {
      //   // reset()
      // }, 2000)
    }
  }
}
</script>
