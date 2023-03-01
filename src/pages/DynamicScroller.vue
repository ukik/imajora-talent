<template>
  <q-page class="">
    <template v-if="isShow">
      <div v-for="(item, index) in itemsSSR">
        <q-item :key="index" class="animate__swing">
          <q-item-section>
            <q-item-label>xxxxxxxxx</q-item-label>
            <q-item-label caption lines="2">xxxxxxxxxx
              elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
            <q-icon name="star" color="yellow" />
          </q-item-section>
        </q-item>
      </div>
    </template>
    <DynamicScroller :prerender="10" page-mode :items="items" :min-item-size="54" class="scroller">
      <template v-slot="{ item, index, active }">
        <DynamicScrollerItem :item="item" :active="active" :size-dependencies="[
          item.message,
        ]" :data-index="index">

          <transition-group :key="index" appear enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut">
            <q-item :key="index" class="animate__swing">
              <q-item-section>
                <q-item-label>Single line item</q-item-label>
                <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit
                  elit.</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>5 min ago</q-item-label>
                <q-icon name="star" color="yellow" />
              </q-item-section>
            </q-item>
          </transition-group>

        </DynamicScrollerItem>
      </template>
    </DynamicScroller>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  // props: {
  //   items: Array,
  // },
  // data() {
  //   let items = []

  //   for (let i = 0; i < 10; i++) {
  //     items.push({
  //       id: i,
  //       label: 'Title',
  //       size: i,
  //     })
  //   }
  //   return {
  //     items: items
  //   }
  // },
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
      for (let i = 1; i <= 10000; i++) {
        elems.push({
          id: i,
          title: `Item ${i}`,
          size: i,
        });
      }
      return elems;
    },
    itemsSSR() {
      let elems = [];
      for (let i = 1; i <= 10; i++) {
        elems.push({
          id: i,
          title: `Item ${i}`,
          size: i,
        });
      }
      return elems;
    }
  }
})
</script>

<style scoped>
.scroller {
  height: 100%;
}
</style>
