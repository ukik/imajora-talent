<template>
  <!--
  Forked from:
  https://quasar.dev/vue-components/virtual-scroll#Example--Different-templates-for-items
-->
  <!-- <div id="q-app"> -->
    <!-- <div class="q-pa-md"> -->
      <!-- style="height: calc(100vh - 170px);"  -->
      <q-virtual-scroll @virtual-scroll="onVirtualScroll" class="full-height" :items="heavyList" separator>
        <template v-slot="{ item, index }">
          <!-- <q-banner v-if="item.banner === true" class="bg-black text-white" :key="index">
            #{{ index }} - {{ item.label }}
          </q-banner> -->

          <!-- v-else  -->
          <!-- <q-item :key="index+'A'" dense clickable>
            <q-item-section> -->
              <div :key="index+'A'" class="row q-col-gutter-xs q-mb-xs">
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
              </div>
            <!-- </q-item-section>
          </q-item> -->
        </template>
      </q-virtual-scroll>
    <!-- </div> -->
  <!-- </div> -->
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
