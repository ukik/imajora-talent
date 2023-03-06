<template>

<div class="q-mb-md row q-col-gutter-md">
	<q-input class="col-12" v-model="form.nama_lengkap" 
		square ref="min"
		
		text-color="grey" bg-color="white" 
		 outlined label="Nama Lengkap"  :rules="[  ]">
	</q-input>	
	<q-input class="col-12 col-md-6" 
		square ref="min" v-model="form.email"
		
		text-color="grey" bg-color="white" 
		 outlined label="Email"  :rules="[  ]">
	</q-input>	
	<q-input class="col-12 col-md-6" 
		square ref="min"  v-model="form.telepon"
		
		text-color="grey" bg-color="white" 
		 outlined label="Telepon (WA)"  :rules="[  ]">
	</q-input>	
	<q-input class="col-12" 
		square ref="min"  v-model="form.alamat"
		
		type="textarea"
		text-color="grey" bg-color="white" 
		 outlined label="Alamat"  :rules="[  ]">
	</q-input>		
</div>

</template>

<script>

  export default {
    data() {
      return {

        form: {
        	nama_lengkap: null,
        	email: null,
        	telepon: null,
        	alamat: null,
        }
      }
    },

  };
</script>