<template>
  <q-list class="row bg-white">
    <q-item class="col-12 q-px-sm">
      <q-item-section avatar>
        <q-avatar>
          <img :src="img_checker(item.user?.avatar)" :placeholder-src="default_avatar">
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

    <audio @canplay="oncanply" :id="`video${index}`" ref="video"
      style="height:60px" :src="item.file" id="video-preview" class="col-12 q-px-sm"
      controls autoplay >
      Your browser does not support HTML video.
    </audio>

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

    <q-item v-if="item.commented_total?.total" class="col-auto" clickable dense>
      <q-item-section>
        <q-item-label caption lines="1">View all {{ item.commented_total?.total }} comments</q-item-label>
      </q-item-section>
    </q-item>

    <template v-for="(value, index) in item.comments">
      <q-item v-touch-hold.mouse="() => onHold(index)" class="col-12 q-pr-sm" :class="[ value.pressed ? 'bg-red' : '']" clickable>
        <q-item-section @click="() => onCollapse(index)">
          <q-item-label class="text-caption" lines="1"></q-item-label>
          <q-item-label class="text-caption" :ref="`comment${index}`" :lines="value.lines">
            <span v-if="value.replied">
              <span class="text-bold">@{{ value.user?.name }}</span> membalas <span class="text-bold">@{{ value.replied?.name }}</span>:
            </span>
            <span v-else-if="!value.replied" class="text-bold">@{{ value.user?.name }}: </span>
            <span>{{ value.comment }}</span>

            <!-- OPSI 1 -->
            <q-menu
            :touch-position="!loading_delete_comment"
            :context-menu="!loading_delete_comment"
            >
              <q-list style="min-width: 100px">
                <q-item @click="() => onDeleteComment({
                  index,
                  post_id: value.id
                })" clickable v-close-popup>
                  <q-item-section avatar><q-icon name="delete"></q-icon></q-item-section>
                  <q-item-section>Delete</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-item-label>
        </q-item-section>

        <!-- OPSI 2 -->
        <q-item-section side />
        <q-btn :disable="loading_delete_comment" :loading="loading_delete_comment" dense style="height:30px;" flat round icon="more_vert" color="dark">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item @click="() => onDeleteComment({
                index,
                post_id: value.id
              })" clickable v-close-popup>
                <q-item-section avatar><q-icon name="delete"></q-icon></q-item-section>
                <q-item-section>Delete</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-item>

      <div class="col-12 row flex justify-start">
        <q-item @click="reply = value" class="col-auto" clickable dense>
          <q-item-section>
            <q-item-label caption lines="1">Balas</q-item-label>
          </q-item-section>
        </q-item>
      </div>

    </template>


    <q-item class="col-12 q-pb-md q-pt-lg" dense>
      <q-item-section>
        <q-item-label v-if="reply">
          <q-item-label caption lines="1">Membalas</q-item-label>
          <q-chip size="12px" :disable="loading_comment" class="q-mx-none" @remove="reply = null" removable color="red" text-color="white">
            <q-avatar>
              <img :src="img_checker(reply?.user?.avatar)" :placeholder-src="default_avatar">
            </q-avatar>
            <div class="ellipsis">
              @{{ reply?.user?.name }}
            </div>
          </q-chip>
        </q-item-label>
        <q-item-label>
          <q-input dense :disable="loading_comment" v-model="input_comment" maxlength="2500" counter autogrow placeholder="Add a comment">
            <template v-if="input_comment" v-slot:append>
              <q-btn :disable="loading_comment" :loading="loading_comment" @click="onComment" dense label="POST" flat color="primary" />
            </template>
            <template v-if="input_comment && !loading_comment" v-slot:after>
              <q-btn @click="input_comment = ''" dense flat color="red" icon="close" round />
            </template>
          </q-input>
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>

import { user_list, comment_list } from "src/models/video.js"
import { mapState, mapWritableState, mapActions } from 'pinia'
import { useAudioListStore } from 'src/stores/audio/list.js'

export default {
  props: {
    index: {
      default: null
    },
    item: {
      default: () => ({
        id: '',
        user_id: '',
        file: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
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
    ...mapState(useAudioListStore, {

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
      input_comment: '',
      reply: null,
      collapsible: false,
    }
  },
  methods: {
    ...mapActions(useAudioListStore, [
      'follow',
      'liked',
      'bookmarked',
      'comment',
      'delete',
      'delete_comment',
    ]),
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
    onDeleteComment(value) {
      this.delete_comment({
        parent_index: this.index,
        parent_id: this.item.id,
        ...value
      })
    },
    async onComment() {
      const response = await this.comment({
        index: this.index,
        post_id: this.item?.id,
        parent_id: this.reply?.id == undefined ? '' : this.reply?.id,

        replied_id: this.reply?.user_id == undefined ? '' : this.reply?.user_id,

        input_comment: this.input_comment,
      })
      console.log('onComment', response)
      if(response) {
        this.reply = null
        this.input_comment = ''
      }
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
    oncanply() {
      // WARNING!!!!
      // ERROR: Uncaught (in promise) : DOMException: play() failed because the user didn't interact with the document first in console
      // SOLUTION: https://stackoverflow.com/questions/49930680/how-to-handle-uncaught-in-promise-domexception-play-failed-because-the-use
      // SOLUTION: https://stackoverflow.com/questions/70403305/uncaught-in-promise-domexception-play-failed-because-the-user-didnt-inte
      // EXPLAINATION:
      // 1. pasang "autoplay muted" di html video/audio
      // 2. pasang code ini di html video/audio

      // POLICY Unmuting failed and the element was paused instead because the user didn't interact with the document before. https://goo.gl/xX8pDD
      // gak ada solusi kecuali user melakukan scroll/tapi/etc
      // this.$nextTick(() => { document.getElementById(`video${this.index}`).muted = false })

      // PERCUMA
      // setTimeout(() => {
      //   this.$nextTick(() => { document.getElementById(`video${this.index}`).muted = false })
      // }, 1000);
    }
  },
}
</script>
