<template>
  <q-page class="q-pa-md">
    <!-- <q-no-ssr> -->
      <masonry-wall scroll-container :items="items" :ssr-columns="1" :column-width="300" :gap="16">
        <template #default="{ item, index }">
          <!--  :style="{ height: `${index * 100}px` }" -->
          <div>
            <div>{{ item.title }}</div>
            <span>{{ item.description.substring(Math.round(Math.random()*150)) }}</span>
          </div>
        </template>
      </masonry-wall>
    <!-- </q-no-ssr> -->
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      isShow:true,
    }
  },
  mounted() {
    this.isShow = false;
  },
  computed: {
    items() {
      let elems = [];
      for (let i = 1; i <= 100; i++) {
        elems.push({
          id: i,
          title: `Item ${i}`,
          description: `paulcollett/vue-masonry-css - GitHubhttps://github.com › paulcollett › vue-masonry-css
vue-masonry-css Is a Vue Component with a simple interface to order items into the desired columns at specified breakpoints. With minimal CSS this leads to ...
`,
        });
      }
      return elems;
    },
  }
})
</script>

<style scoped>
.scroller {
  height: 100%;
}
</style>
