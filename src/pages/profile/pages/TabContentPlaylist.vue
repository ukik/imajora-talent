<template>

      <q-virtual-scroll @virtual-scroll="onVirtualScroll" class="full-height" :items="heavyList" separator>
        <template v-slot="{ item, index }">

              <q-banner inline-actions v-if="index <= 0" class="bg-grey-1 text-left flex items-bottom">
                <q-icon size="sm" name="fas fa-music" color="pink-3" class="q-mr-sm" />
                Lagu yang biasa dimainkan
                <template v-slot:action>
                  <!-- <q-btn flat color="primary" dense icon="fa-solid fa-pen-to-square" round /> -->
                  <q-btn flat color="primary" dense icon="add" round />
                </template>
              </q-banner>

              <q-card v-else bordered flat class="text-left q-mx-xs q-mt-sm q-mb-md">

                <q-card-section class="q-pa-sm">
                  <q-item-label class="q-mb-sm">
                    <audio style="height:40px;" class="full-width" controls
                      src="https://vgmsite.com/soundtracks/megaman-8-original-soundtrack-saturn-version/wohpqjpj/01%20-%20opening.mp3"></audio>
                  </q-item-label>
                  <q-item-label>Jikustik</q-item-label>
                  <q-item-label caption lines="1">Melangkah Lagi</q-item-label>
                  <q-item-label class="q-mb-sm">genre: <router-link to="#">#pop</router-link></q-item-label>
                  <q-item-label class="flex flex-center">
                    <!-- <q-chip size="sm" class="q-ma-none q-mr-xs" color="red" text-color="white" icon="fab fa-youtube" label="youtube"></q-chip>
                        <q-chip size="sm" class="q-ma-none" color="blue" text-color="white" icon="fa-solid fa-paperclip" label="external"></q-chip> -->

                    <q-btn @click="fixed = true" size="12px" unelevated rounded class="q-ma-none q-mr-xs" color="red" text-color="white"
                      icon="fab fa-youtube" label="youtube"></q-btn>

                    <q-btn unelevated rounded size="12px" class="q-ma-none" color="blue" text-color="white"
                      icon="fa-solid fa-paperclip" label="external"></q-btn>
                  </q-item-label>
                </q-card-section>

              </q-card>

              <!-- <div :key="index+'A'" class="row q-col-gutter-xs q-mb-xs">
                <div v-for="i in item.inner" class="col-4">
                  <q-card flat bordered square>
                    <img style="min-height:100px;" src="https://cdn.quasar.dev/img/parallax2.jpg">

                    <q-list>
                      <q-item clickable>
                        <q-item-section>
                          <q-item-label>Bar XYZ</q-item-label>
                          <q-item-label caption>Have a drink.</q-item-label>
                        </q-item-section>
                      </q-item>

                    </q-list>
                  </q-card>
                </div>
              </div> -->

        </template>
      </q-virtual-scroll>

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
  props: {
    init: {
      default: false,
    }
  },
  data() {
    return {
      heavyList
    }
  },
  methods: {
    onVirtualScroll() {
    },
  },
  mounted() {
    if(!this.init) return
    this.$nextTick(() => {
      window.scrollTo(0, document.body.scrollHeight);
    })
  }
}
</script>
