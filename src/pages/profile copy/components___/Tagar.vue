<template>

    <q-item :to="{
          name: 'hashtag',
          params: {
            tagar: prop_data.tagar.replaceAll('#','')
          } 
        }" class="q-px-sm" v-ripple="{color: 'grey' }">

	    <q-item-section>
	      <q-item-label>{{ prop_data.tagar }}</q-item-label>
	      <q-item-label caption>{{ prop_data.total }} postingan</q-item-label>
	    </q-item-section>

    </q-item>

</template>

<script type="text/javascript">
  export default {
    props: {
      prop_data: {
        default: () => ({}),
      }
    }
  };
</script>