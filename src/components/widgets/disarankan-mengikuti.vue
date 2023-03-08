<template>
<div>
	<div v-if="tombol_mengikuti" class="flex flex-center" >
		<q-btn @click="onSubmit" label="Ikuti" class="flex flex-center" size="sm" color="light-blue" no-caps rounded unelevated />
	</div>
	<div v-else class="flex flex-center" >
		<q-btn @click="onSubmit" outline icon="person" class="flex flex-center" size="sm" color="red" no-caps rounded unelevated />
	</div>	
</div>
</template>

<script type="text/javascript">
  export default {
    props: {
      form: {
        default: () => ({
          id_user_teman: null, //item.id,
        })
      },
      mengikuti: {
        default: () => ({}) // empty or not (any)
      },
    },
    mounted() {
      this.tombol_mengikuti = this.mengikuti == null ? true : false
    },
    data() {
      return {
        tombol_mengikuti: false,
      }
    },
    methods: {
      async onSubmit() {
        console.log(this.form)

        // const form = {
        //   id_user_teman: this.prop_data.id,
        // }
        const request = await this.dispatchVuex('aggregator/set_teman', this.form)
        console.log(request)
        // this.total_suka += request.value
        // this.total_suka = request.data.total
        this.tombol_mengikuti = request.value > 0 ? false : true
      },
    },    
  };
</script>
