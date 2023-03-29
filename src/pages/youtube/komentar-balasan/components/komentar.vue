<template>
  <div class="col-12 row q-mt-md">
    <q-item class="col-12 q-px-none">
      <q-item-section avatar>
        <q-avatar>
          <img :src="img_checker(item.user?.avatar)" :placeholder-src="default_avatar">
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label lines="1">{{ item.user?.name }}</q-item-label>
        <q-item-label caption lines="1">
          <q-chip :disable="loading_komentar_balasan_follow" clickable @click="onFollow" class="q-ma-none" :color="!item.user.follow ? 'positive' : 'primary'"
            size="11px" text-color="white" icon="check">
            {{ !item.user.follow ? 'Mengikuti' : 'Berhenti Mengikuti' }}
          </q-chip>
        </q-item-label>
      </q-item-section>
      <q-item-section side>
      </q-item-section>
      <q-btn :disable="loading_komentar_balasan_delete_comment" :loading="loading_komentar_balasan_delete_comment" dense style="height:30px;" flat round icon="more_vert" color="dark">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item @click="onDeletePost" clickable v-close-popup>
              <q-item-section avatar><q-icon name="delete"></q-icon></q-item-section>
              <q-item-section>Delete</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-item>
    <q-item v-touch-hold.mouse="onHold" class="col-12 q-px-none q-pr-md" :class="[ item.pressed ? 'bg-red' : '']">
      <q-item-section avatar>
        <q-avatar>

        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-caption" lines="1"></q-item-label>
        <q-item-label class="text-caption">
          <!-- <span v-if="item.replied">
            <span class="text-bold">@{{ item.user?.name }}</span> membalas <span class="text-bold">@{{ item.replied?.name }}</span>:
          </span>
          <span v-else-if="!item.replied" class="text-bold">@{{ item.user?.name }}: </span> -->
          <span>{{ item.comment }}</span>

          <!-- OPSI 1 -->
          <!-- <q-menu
          :touch-position="!loading_komentar_balasan_delete_comment"
          :context-menu="!loading_komentar_balasan_delete_comment"
          >
            <q-list style="min-width: 100px">
              <q-item @click="() => onDeleteComment({
                index,
                post_id: item.id
              })" clickable v-close-popup>
                <q-item-section avatar><q-icon name="delete"></q-icon></q-item-section>
                <q-item-section>Delete</q-item-section>
              </q-item>
            </q-list>
          </q-menu> -->
        </q-item-label>
      </q-item-section>
    </q-item>
    <!-- <q-item class="col-auto q-ml-xl q-px-sm" clickable dense>
      <q-item-section>
        <q-item-label caption lines="1">Balas</q-item-label>
      </q-item-section>
    </q-item> -->

  </div>
</template>

<script>

import { user_list, comment_list } from "src/models/video.js"
import { mapState, mapWritableState, mapActions } from 'pinia'
import { useYoutubeListStore } from 'src/stores/youtube/list.js'

export default {
  props: {
    index: {
      default: null
    },
    item: {
      default: () => (comment_list)
    }
  },
  computed: {
    ...mapState(useYoutubeListStore, {
      loading_komentar_balasan_follow: 'loading_komentar_balasan_follow',
      loading_komentar_balasan_delete_comment: 'loading_komentar_balasan_delete_comment',
    }),
    lines() {
      return this.collapsible ? 0 : 3
    }
  },
  data() {
    return {
      reply: null,
      collapsible: false,
    }
  },
  methods: {
    ...mapActions(useYoutubeListStore, [
      'komentar_balasan_follow',
      'komentar_balasan_delete_comment',
    ]),
    onFollow() {
      this.komentar_balasan_follow({
        index: this.index,
        user_id: this.item?.user_id,
      })
    },
    onDeletePost(value) {
      this.komentar_balasan_delete_comment({
        index: this.index,
        id: this.item.id,
      })
    },
    onHold() {
      // switch (this.item.comments[index].pressed) {
      //   case 0:
      //     this.item.comments[index].pressed = true
      //     break;
      //   default:
      //     this.item.comments[index].pressed = false
      //     break;
      // }
      console.log('on hold')
    },

  }
}
</script>
