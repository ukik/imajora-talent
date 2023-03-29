<template>
    <q-dialog full-width v-model="fixed">
      <q-card>
        <q-video :style="[ is_mobile_size ? 'height:300px;' : 'height:500px;' ]" src="https://www.youtube.com/embed/VTIHy84Fwnc?rel=0" />
      </q-card>
    </q-dialog>

  <q-virtual-scroll @virtual-scroll="onVirtualScroll"  class="full-height" :items="heavyList" separator>
    <template v-slot="{ item, index }">

      <q-banner inline-actions v-if="index <= 0" class="bg-grey-1 text-left flex items-bottom">
        <q-icon size="sm" name="fas fa-music" color="pink-3" class="q-mr-sm" />
        Lagu ciptaan (original)
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


    </template>
  </q-virtual-scroll>
</template>

<script>
const maxSize = 100
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
      heavyList,
      fixed: false,
    }
  },
  methods: {
    onVirtualScroll() {
    this.stopSound()
  },
  stopSound() {
    var audios = document.getElementsByTagName('audio');
    if(!audios) return
    for(var i = 0, len = audios.length; i < len;i++){
      audios[i].pause();

    }
  }
},
  mounted() {
    if (!this.init) return
    this.$nextTick(() => {
      window.scrollTo(0, document.body.scrollHeight);
    })
  }
}
</script>
