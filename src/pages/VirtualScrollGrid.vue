<template>
  <!--
  Forked from:
  https://quasar.dev/vue-components/virtual-scroll#Example--Different-templates-for-items
-->
  <div id="q-app">
    <div class="q-pa-md">
      <q-virtual-scroll style="max-height: 90vh;" :items="heavyList" separator>
        <template v-slot="{ item, index }">
          <q-banner v-if="item.banner === true" class="bg-black text-white q-py-xl" :key="index">
            #{{ index }} - {{ item.label }}
          </q-banner>

          <q-item v-else :key="index+'A'" dense clickable>
            <q-item-section>
              <div class="row q-col-gutter-md">
                <div v-for="i in item.inner" class="col-4">
                  <q-card class="q-my-md">
                    <q-card-section>
                      <div class="text-h6">Our Changing Planet {{ index }}</div>
                      <div class="text-subtitle2">by John Doe</div>
                    </q-card-section>

                    <q-card-section>
                      {{ i }}
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </q-item-section>
          </q-item>
        </template>
      </q-virtual-scroll>
    </div>
  </div>
</template>

<script>
const maxSize = 10000
const heavyList = []

for (let i = 0; i < maxSize; i++) {
  heavyList.push({
    label: 'Option ' + (i + 1),
    inner: ["inner item 1", "inner item 2", "inner item 3"],
    banner: i % 5 === 0
  })
}

Object.freeze(heavyList)

export default {

  el: '#q-app',
  data() {
    return {
      heavyList
    }
  }

}
</script>
