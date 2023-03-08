<template>
<q-page class="bg-white" style="padding:0px 0px;">
<!-- <q-page class="bg-white rounded-borders" :style="komentar.id ? 'padding-bottom:50px;' : ''"> -->

    <q-header bordered unelevated class="bg-white text-black text-left">
      <q-toolbar>
        <q-btn
          flat
          dense
          @click="onGotoBack"
          round
          color="blue"
          icon="arrow_back_ios"
        />
        <q-toolbar-title>Balasan 
          <q-badge v-if="paginate.total" align="top" color="cyan">{{ paginate.total }}</q-badge>
        </q-toolbar-title>
        <q-space />
        <ActionbarMenu /> 
      </q-toolbar>
    </q-header>

    <q-pull-to-refresh @refresh="refresh">

      <div v-if="!komentar.id && loading" class="text-center" :style="'min-height'+($q.screen.height - 50) + 'px'" >
        <SkeletonTwitter />
      </div>  

      <Konten v-if="komentar.id" 
          :form="{
            id_pemilik_postingan: komentar.id_user,
            id_postingan: komentar.id,
            type: get_type,
            label: 'komentar',                
          }" 
          :prop_total="komentar.user_totals_komentar_balasan"
          :menyukai="komentar.menyukai"
          :prop_data="komentar" />


      <q-separator v-if="komentar.id" padding class="q-py-sm bg-grey-3" />

      <div v-if="komentar_balasan.length <= 0 && !loading">
        <div class="text-center q-mt-xl">
          <q-btn unelevated disabled color="grey-2" round class="q-pa-xl">
            <q-avatar size="75px" square>
              <img style="" src="~assets/blank/komentar.png" loading="lazy" />
            </q-avatar>     
          </q-btn>
          <div class="text-grey text-subtitle2 q-mt-md">Tidak ada konten tersedia</div>
        </div>
      </div>

      <!-- <Komentar v-if="komentar_balasan.length > 0" :prop_data="komentar_balasan" /> -->
      <div v-if="is_desktop && komentar_balasan.length > 0" v-for="(item, index) in komentar_balasan" :key="index" >
        <Balasan           
          :form="{
            id_pemilik_postingan: item.id_user,
            id_postingan: item.id,
            type: get_type,
            label: 'komentar',
          }" 
          :prop_total="item.user_totals_komentar_balasan"
          :menyukai="item.menyukai" 
          :prop_data="item"/>

         <q-separator color="grey-3" />               
      </div>
      <div v-if="!is_desktop && MOUNTED && komentar_balasan.length > 0" v-for="(item, index) in komentar_balasan" :key="index" >
        <Balasan           
          :form="{
            id_pemilik_postingan: item.id_user,
            id_postingan: item.id,
            type: get_type,
            label: 'komentar',
          }" 
          :prop_total="item.user_totals_komentar_balasan"
          :menyukai="item.menyukai" 
          :prop_data="item"/>

         <q-separator color="grey-3" />               
      </div>


      <q-infinite-scroll v-if="is_desktop && MOUNTED && $route.name == 'komentar_balasan'" :debounce="200" ref="infiniteScroll" @load="onLoad" :offset="250">
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px" />
          </div>
        </template>
      </q-infinite-scroll>

    </q-pull-to-refresh>      

    <transition name="fade-global" v-if="MOUNTED" >
      <q-footer v-if="is_not_player_real_closed" unelevated class="bg-white text-black">
        <q-toolbar v-if="komentar_balasan.length > 0" class="bg-white"
          >
          <div class="text-body1">Halaman: </div>
          <q-space />
          <q-pagination dense class="q-px-sm" color="primary" input-class="text-primary"
            :disable="!is_paginate_ready"
            v-model="current_page"
            :max="paginate.last_page"
            :input="true"
            @input="onInput"
          />
        </q-toolbar>

        <Toolbar @onBubbleEvent="dialog = true" v-if="komentar.id" /> 
      </q-footer>
    </transition>

    <q-dialog v-model="dialog" v-if="MOUNTED"  position="bottom" class="q-pa-sm" full-width maximized >

      <q-list class="bg-white">
        <q-item>
         
          <q-item-section>
            <q-input 
             :disable="is_loading"
              ref="komentar"
              v-model="text_komentar"
              bg-color="grey-4"
              standout="bg-grey-2 text-black"        
              dense 
              autofocus
              rounded
              borderless
              autogrow
              hint="Wajib diisi"
              class="full-width bevel-radius" 
              placeholder="Tuliskan komentar anda..."
              input-class="q-pl-sm"
              maxlength="200" 
              counter :rules="[val => !!val || 'komentar kosong']" lazy-rules
              >

              <template v-slot:append>
                <q-icon v-if="text_komentar !== ''" name="close" @click="text_komentar = ''" class="cursor-pointer q-mr-sm" />
              </template>
         
            </q-input>
          </q-item-section>


          <q-item-section avatar top>
            <q-btn
              @click="onSubmit"
              style="margin-top:2.5px;"
              class="justify-top"
              flat
              dense
              round
              color="blue"
              icon="send"
              :disable="is_loading"
            />
          </q-item-section>
        </q-item>
      </q-list>

    </q-dialog>

</q-page>

</template>

<script>

import { mapFields } from 'vuex-map-fields';

export default {
  computed: {
    ...mapFields({
      komentar: "komentar_balasan.komentar",     
      komentar_balasan: "komentar_balasan.komentar_balasan",     
      loading: "komentar_balasan.loading",     
      paginate: "komentar_balasan.paginate",     
      current_page: "komentar_balasan.paginate.current_page",     
      is_not_player_real_closed: "alquran_index.is_not_player_real_closed",      
    }),  
    get_type() {
      let tipe = null
      switch(this.$route.params.segment) {
        case 'artikel':
          tipe = 'Artikel_Model'
          break
        case 'gambar':
          tipe =  'Gambar_Model'
          break
        case 'jawaban_konsultasi':
          tipe =  'Jawaban_Konsultasi_Model'
          break
        case 'konsultasi':
          tipe =  'Konsultasi_Model'
          break
        case 'status':
          tipe =  'Status_Model'
          break
        case 'video':
          tipe =  'Video_Model'
          break
      }      

      return tipe
    }
  },  
  async preFetch ({ store, currentRoute }) {

    let pull_refresh = false
    if(store.state.komentar_balasan.komentar.id != currentRoute.params.id) {
      pull_refresh = true
    } else if(store.state.komentar_balasan.segment != currentRoute.params.segment) {
      pull_refresh = true
    }

    // console.log('preFetch', store.state.komentar_balasan.komentar.id, currentRoute.params.id)
    // console.log('preFetch', store.state.komentar_balasan.segment, currentRoute.params.segment)

    await store.dispatch('komentar_balasan/segment', currentRoute.params.segment)

    return store.dispatch('komentar_balasan/action_payload', { 
      pull_refresh: pull_refresh, 
      segment: currentRoute.params.segment,
      id_komentar: currentRoute.params.id, 
    }) 
  }, 
  data() {
    return {
      dialog: false,
      text_komentar: '',
      is_loading: false,

      is_paginate_ready: true,
      MOUNTED: false,           
    }
  },
  components: {
    Toolbar: () => import("./components/Toolbar"),
    Konten: () => import("./components/Konten"),
    Balasan: () => import("./components/Balasan"),
  },
  watch: {
    paginate: {
      deep: true,
      handler(val) {
        setTimeout(() => {
          if(this.$refs.infiniteScroll !== undefined) this.$refs.infiniteScroll.resume()
        }, 250)
      }
    },
    loading(val) {
      if(!val) {
        setTimeout(() => {
          this.is_paginate_ready = true
          return
        }, 2000)
      }
      this.is_paginate_ready = false
    }         
  },
  mounted() {
    setTimeout(() => {
      this.MOUNTED = true
    }, 2500)   
  },
  activated(){
  },
  deactivated(){
    window.clearInterval()
  },
  methods: {
    async onInput(val) {
      if(this.is_desktop) {
        window.scrollTo({
          top: 0,
          left: 0,
        });      
      }
      await this.action_komentar_balasan_more({ page: val, segment: this.$route.params.segment, id_komentar: this.$route.params.id, tag: 'by_paginate' }) 
    },     
    onBack() {
      if(this.$router.back() == undefined) this.$router.push({ name: 'main' })
      console.log(this.$router.back());
    },
    async onSubmit() {

      if(!this.$refs.komentar.validate()) {
        this.$q.notify({
          message: 'Wajib isi komentar',
          icon: 'announcement',
          color: 'red',
          position: 'top',
        })
        return
      }

      // const id_pemilik_postingan = this.$route.query.id_pemilik_postingan
      // // const id_postingan = this.$route.params.id

      // if(!id_pemilik_postingan 
      //   // || !id_postingan
      //   ) {
      //   this.$q.notify({
      //     message: 'Data tidak lengkap',
      //     icon: 'announcement',
      //     color: 'red',
      //     position: 'top',
      //   })
      //   return
      // }

      this.is_loading = true


      let tipe = ''
      switch(this.$route.params.segment) {
        case 'artikel':
          tipe = 'Artikel_Model'
          break
        case 'gambar':
          tipe =  'Gambar_Model'
          break
        case 'jawaban_konsultasi':
          tipe =  'Jawaban_Konsultasi_Model'
          break
        case 'konsultasi':
          tipe =  'Konsultasi_Model'
          break
        case 'status':
          tipe =  'Status_Model'
          break
        case 'video':
          tipe =  'Video_Model'
          break
      }

      // name: 'komentar',
      // params: {
      //   segment: 'jawaban_konsultasi',
      //   id: item.id
      // },
      // query: {
      //   id_pemilik_postingan: item.id_user,
      //   id_postingan: $route.params.id,
      // }

      // jawaban_konsultasi/249?id_pemilik_postingan=26&id_postingan=10

      const form = {
        'id_pemilik_postingan': this.komentar.id_user,
        'id_postingan': this.$route.params.id,
        'parent_id': this.$route.params.id,
        'type': tipe,
        'text_komentar': this.text_komentar,            
        'label': this.$route.params.segment,
      }

      const response = await this.dispatchVuex('aggregator/set_komentar', form)
      if(!response.data) return
      console.log(response.data)

      this.$q.notify({
        message: response.result,
        // caption: res.data.data_1.updated_at,
        color: response.value == 1 ? 'positive' : 'orange',
        icon: 'done',
        position: 'top',
      })    

      this.is_loading = false

      await this.dispatchVuex('komentar_balasan/update', response.data)
      await this.dispatchVuex('komentar_balasan/paginate_total', response.total_komentar.total)

      this.text_komentar = ''
    },

    async refresh (done) {
      await this.action_komentar_balasan({ pull_refresh: true, segment: this.$route.params.segment, id_komentar: this.$route.params.id }) 

      if(this.$refs.infiniteScroll !== undefined) this.$refs.infiniteScroll.stop()
      done() // required
    },    
    async onLoad (index, done) {
      const paginate = this.paginate

      if(!paginate.next_page_url) {
        done(true)
        return
      }

      await this.action_komentar_balasan_more({ page: paginate.current_page + 1, segment: this.$route.params.segment, id_komentar: this.$route.params.id, tag: 'by_scroll' }) 

      if(paginate.next_page_url) {
        done(true) //= stop infinite-scroll
      } else {
        done()
      }

    }
  },
};
</script>
