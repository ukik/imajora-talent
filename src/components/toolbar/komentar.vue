<template>
<!-- DESIGN 1 -->
  <q-item dense class="q-px-sm">
	<q-btn flat color="primary" round icon="person_pin" class="q-mt-xs" size="md" style="height:40px;" />
    <q-item-section>
	    <q-input autofocus
	    	borderless
	    	bg-color="grey-3"
		    standout="bg-grey-2 text-black"
  			dense 
  			rounded 
  			class="q-pa-xs input-radius"
  			input-class="q-pa-sm"
  			v-model="model"			
  			placeholder="Tulis Komentar..."
  			autogrow
  	    >
          <template v-slot:append>
            <q-icon class="q-mr-xs" v-if="model !== ''" name="clear" @click="model = ''" />
          </template>
		</q-input>
    </q-item-section>
	<q-btn flat color="primary" round icon="send" class="q-mt-xs" size="md" style="height:40px;" />
  </q-item>	

<!--  DESIGN II -->
<!-- 
  <q-input 
    bottom-slots 
    v-model="text" 
    bg-color="grey-1"
    standout="bg-grey-2 text-black"        
    dense 
    rounded
    borderless
    class="q-pa-xs q-mx-xs" 
    placeholder="Cari pengikut..."
    input-class="q-pa-sm">

    <template v-slot:before>
      <q-icon name="search" />
    </template>

    <template v-slot:append>
      <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer q-mr-xs" />
    </template>

    <template v-slot:after>
      <q-btn round dense flat icon="send" />
    </template>        
  </q-input>

 -->
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				model: "",
			}
		}
	};
</script>