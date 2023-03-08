<template>
  <q-toolbar class="q-px-sm">
      <q-avatar size="sm">
        <img src="https://cdn.quasar.dev/img/boy-avatar.png">
      </q-avatar>

      <q-space />

      <q-item-section no-wrap>
        <q-item-label caption class="limit">Single line item Single line item</q-item-label>
      </q-item-section>

      <div>
          <q-btn flat color="pink" size="sm" round icon="favorite_border" />
          <span style="font-size:12px;">2</span>
      </div>
  </q-toolbar>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        
      }
    }
  };
</script>

<style type="text/css" scoped>

.limit {
  text-overflow: ellipsis;
  overflow: hidden;  
  /*max-width:100%;*/
  padding-left: 5px;
}

</style>