<template>

  <q-list class="row bg-white">
    <q-item class="col-12 q-px-sm">
      <q-item-section avatar>
        <q-avatar>
          <img :src="imageSync(item.user?.avatar)" @error="handleError" :placeholder-src="default_avatar">
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label lines="1">{{ item.user?.name }}</q-item-label>
        <q-item-label caption lines="1">
          <q-chip :disable="loading_follow" clickable @click="onFollow" class="q-ma-none" :color="!item.user.follow ? 'positive' : 'primary'"
            size="11px" text-color="white" icon="check">
            {{ !item.user.follow ? 'Mengikuti' : 'Berhenti Mengikuti' }}
          </q-chip>
        </q-item-label>
      </q-item-section>

      <q-item-section side>
      </q-item-section>
      <q-btn :disable="loading_delete" :loading="loading_delete" dense style="height:30px;" flat round icon="more_vert" color="dark">
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

    <!-- <video :id="`video${index}`" ref="video" :height="is_mobile_size ? 250 : 350"
      :style="is_mobile_size ? 'height:250px' : 'height:300px'" :src="item.file" id="video-preview" class="col-12"
      controls autoplay muted>
      Your browser does not support HTML video.
    </video> -->

    <q-carousel class="col-12" :style="[is_mobile_size ? 'height:250px;' : 'height:350px;']" swipeable animated v-model="slide"  arrows navigation infinite>
        <q-carousel-slide class="no-scroll q-pa-none" v-for="(el, index) in item.images" :key="index" :name="index">
            <q-img @click="() => $emit('onZoom', index)" :src="imageSync(el.file)" alt="mountains" class="fit" style="object-fit: cover;">
              <template v-slot:error>
                <div class="absolute-full flex flex-center bg-negative text-white">
                  Cannot load image
                </div>
              </template>
            </q-img>
        </q-carousel-slide>
    </q-carousel>

    <i class=""></i>
    <q-item class="col-12 q-pa-sm" dense>
      <q-item-section>
        <q-item-label class="row q-gutter-col-sm">
          <div class="col-auto">
            <q-btn :disable="loading_liked" :loading="loading_liked" @click="liked({ post_id: item.id, index })" flat round
              :icon="item.liked ? 'fa-solid fa-heart' : 'fa-regular fa-heart'" :color="item.liked ? 'pink' : 'dark'">
              <q-badge align="top" color="red" floating v-if="item.liked_total?.total > 0">{{ item.liked_total?.total
              }}</q-badge>
            </q-btn>
          </div>
          <div class="col-auto">
            <q-btn flat round icon="fa-regular fa-comment" color="dark">
              <q-badge align="top" color="green" floating v-if="item.commented_total?.total > 0">{{
                item.commented_total?.total }}</q-badge>
            </q-btn>
          </div>
          <div class="col-auto">
            <q-btn flat round icon="fa-regular fa-share-from-square" color="dark">
              <q-badge align="top" color="orange" floating v-if="item.shared_total?.total > 0">{{ item.shared_total?.total
              }}</q-badge>
            </q-btn>
          </div>
        </q-item-label>
      </q-item-section>

      <q-item-section side>
        <q-btn :disable="loading_bookmarked" :loading="loading_bookmarked" @click="bookmarked({ post_id: item.id, index })" flat round
          :icon="item.bookmarked ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark'"
          :color="item.bookmarked ? 'primary' : 'dark'">
          <q-badge align="top" color="cyan" floating v-if="item.bookmarked_total?.total > 0">{{
            item.bookmarked_total?.total
          }}</q-badge>
        </q-btn>
      </q-item-section>
    </q-item>

    <q-item v-if="item.liked_total?.total" class="col-auto" clickable dense>
      <q-item-section>
        <q-item-label class="text-bold" lines="1">{{ item.liked_total?.total }} Likes</q-item-label>
      </q-item-section>
    </q-item>

    <q-item @click="collapsible = !collapsible" class="col-12" clickable dense>
      <q-item-section>
        <q-item-label :lines="lines"><span class="text-bold">@{{ item.user.name }} Likes: </span>{{ item.description
        }}</q-item-label>
      </q-item-section>
    </q-item>

  </q-list>
</template>

<script>

import { user_list, comment_list } from "src/models/video.js"
import { mapState, mapWritableState, mapActions } from 'pinia'
import { useImageListStore } from 'src/stores/image/list.js'

export default {
  props: {
    index: {
      default: null
    },
    item: {
      default: () => ({
        id: '',
        user_id: '',
        // file: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        images: [],
        description: '',
        created_at: '',
        updated_at: '',
        liked_total: null,
        visited_total: null,
        shared_total: null,
        commented_total: null,
        bookmarked_total: null,
        liked: null,
        visited: null,
        shared: null,
        commented: null,
        bookmarked: null,
        follow: null,
        comments: [], // comment_list,
        user: user_list,
      })
    }
  },
  computed: {
    ...mapState(useImageListStore, {

      loading_follow: 'loading_follow',
      loading_liked: 'loading_liked',
      loading_bookmarked: 'loading_bookmarked',
      loading_comment: 'loading_comment',
      loading_delete: 'loading_delete',
      loading_delete_comment: 'loading_delete_comment',
      loading: 'loading',
    }),
    lines() {
      return this.collapsible ? 0 : 3
    }
  },
  data() {
    return {
      reply: null,
      collapsible: false,
      slide: 0,
    }
  },
  methods: {
    ...mapActions(useImageListStore, {
      follow:'komentar_semua_follow',
      liked:'komentar_semua_liked',
      bookmarked:'komentar_semua_bookmarked',
    }),
    onCollapse(index) {
      switch (this.item.comments[index].lines) {
        case 0:
          this.item.comments[index].lines = 2
          break;
        default:
          this.item.comments[index].lines = 0
          break;
      }
    },
    onFollow() {
      this.follow({
        index: this.index,
        user_id: this.item?.user_id,
      })
    },
    onDeletePost(value) {
      this.delete({
        index: this.index,
        post_id: this.item.id,
      })
    },
    onHold(index) {
      switch (this.item.comments[index].pressed) {
        case 0:
          this.item.comments[index].pressed = true
          break;
        default:
          this.item.comments[index].pressed = false
          break;
      }
      console.log('on hold')
    },
  },
}
</script>
