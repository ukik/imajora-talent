<template>
<q-list class="q-pa-none" separator>
    
    <q-item v-for="i in prop_data" :key="i" class="q-pa-sm" v-ripple="{color: 'grey' }">

      <q-item-section class="q-pl-sm q-pt-xs" >
        <!-- <q-item-label class="text-weight-medium q-mb-sm" v-html="title"></q-item-label> -->

        <q-item class="q-pa-none">

          <q-item-section top avatar>
            <q-avatar size="xl">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">  
              <q-icon name="star" style="font-size:14px; padding:1.5px;" color="white" class="absolute-top-left bg-green rounded-borders" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label v-html="nama"></q-item-label>
            <q-item-label caption>100 Pengikut</q-item-label>
            <q-item-label caption>ID: 648577HHRR</q-item-label>
          </q-item-section>

          <q-item-section v-if="!following" side top>
            <q-btn @click="following = !following" icon="person_add" label="Ikuti" size="sm" color="light-blue" dense no-caps rounded outline unelevated class="q-px-xs"/>
          </q-item-section>

        </q-item>

        <div class="q-mt-sm q-mb-xs" style="font-size:12px;" v-html="textWrap(salam, 150, '')"></div>

      </q-item-section>

    </q-item>	

</q-list>
</template>

<script type="text/javascript">
  export default {
    props: {
      prop_data: {
        default: 5,
      },
      prop_nama: {
        default: "Learn about our RFC process, Open RFC meetings & more.Join in the discussion! »"
      },  
      prop_salam: {
        default: "Learn about our RFC process, Open RFC meetings & more.Join in the discussion! »"
      },  
    },    
    mounted() {
      let _nama = this.prop_nama
      _nama = _nama.replaceAll(new RegExp('learn', 'gi'), '<span class="text-blue text-weight-bold">XXX</span>')

      let _salam = this.prop_salam
      _salam = _salam.replaceAll(new RegExp('learn', 'gi'), '<span class="text-blue text-weight-bold">XXX</span>')

      this.nama = _nama
      this.salam = _salam
    },    
    data() {
      return {
        following: false,
        nama: '',
        salam: '',
      }
    }
  };
</script>

<style type="text/css" scoped>

.limit {
  text-overflow: ellipsis;
  overflow: hidden;  
  /*max-width:200px;*/
}

</style>