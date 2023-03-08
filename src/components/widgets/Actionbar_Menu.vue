<template>
<fragment>

    <q-btn
      flat
      dense
      round
      color="blue"
      icon="more_vert"
    >
		<q-menu v-if="!is_desktop" content-style="width:200px;" anchor="bottom left" self="top start" auto-close
		  :offset="[0, 0]"
		  transition-show="jump-down"
		  transition-hide="jump-up">
		  <q-list>
	          
		    <q-item dense @click="onGotoBeranda" clickable v-ripple>
		      <q-item-section>
		        <q-item-label lines="1" class="">Beranda</q-item-label>
		      </q-item-section>
		    </q-item>             

			<!-- <q-separator  color="grey-3 q-my-sm" /> -->

			<q-item dense v-if="!get_user_logged"  :to="{
				name: 'register'								
			}" clickable v-ripple>
				<q-item-section>
				  <q-item-label lines="1" class="">Buat Akun</q-item-label>
				</q-item-section>
			</q-item>							


			<q-item dense v-if="!get_user_logged"  :to="{
				name: 'login'								
			}" clickable v-ripple>
				<q-item-section>
				  <q-item-label lines="1" class="">Masuk Akun</q-item-label>
				</q-item-section>
			</q-item>							

			<q-item dense @click="left_drawer = true"  clickable v-ripple>
				<q-item-section class="">Menu</q-item-section>
			</q-item>					

			<!-- <q-separator  color="grey-3 q-my-sm" /> -->

			<q-item dense class="q-px-xs q-py-none q-ma-none" >
				<q-item-section avatar>
				  <q-checkbox :value="!is_not_player_real_closed" :label="get_player"
				  @input="ayat_player_display = true, is_not_player_real_closed = !is_not_player_real_closed" 
				  />
				</q-item-section>
			</q-item>
      		
			<q-item dense class="q-px-xs q-py-none q-ma-none"  v-if="data_1.length > 0">
				<q-item-section avatar>
				  <q-checkbox v-if="data_1.length > 0" 
				  keep-color 
				  :disable="data_1.length <= 0" 
				  v-model="is_muratal_play" 
				  :label="get_muratal" 
				  color="positive" />
				</q-item-section>
			</q-item>


		  </q-list>
		</q-menu>        


		<q-menu v-else content-style="width:250px;" anchor="bottom left" self="top start" auto-close
		  :offset="[0, 0]"
		  transition-show="jump-down"
		  transition-hide="jump-up">
		  <q-list>
	          
			<q-item  @click="onGotoBeranda" clickable v-ripple>
				<q-item-section avatar top>
				  <q-avatar icon="home" color="grey-2" text-color="grey-7" />
				</q-item-section>

			  <q-item-section>
			    <q-item-label lines="1" class="">Beranda</q-item-label>
			  </q-item-section>
			</q-item>             

			<!-- <q-separator  color="grey-3 q-my-sm" /> -->

			<q-item  v-if="!get_user_logged"  :to="{
				name: 'register'								
			}" clickable v-ripple>
				<q-item-section avatar top>
				  <q-avatar icon="person" color="grey-2" text-color="grey-7" />
				</q-item-section>
				<q-item-section>
				  <q-item-label lines="1" class="">Buat Akun</q-item-label>
				</q-item-section>
			</q-item>							


			<q-item  v-if="!get_user_logged"  :to="{
				name: 'login'								
			}" clickable v-ripple>
				<q-item-section avatar top>
				  <q-avatar icon="login" color="grey-2" text-color="grey-7" />
				</q-item-section>
				<q-item-section>
				  <q-item-label lines="1" class="">Masuk Akun</q-item-label>
				</q-item-section>
			</q-item>							

			<!-- <q-item  @click="left_drawer = true"  clickable v-ripple>
				<q-item-section avatar top>
				  <q-avatar icon="menu" color="grey-2" text-color="grey-7" />
				</q-item-section>
				<q-item-section class="">Menu</q-item-section>
			</q-item> -->					

			<q-separator  color="grey-3" />

			<q-item >
				<q-item-section avatar>
				  <q-checkbox :value="!is_not_player_real_closed" :label="get_player"
				  @input="ayat_player_display = true, is_not_player_real_closed = !is_not_player_real_closed" 
				  />
				</q-item-section>
			</q-item>
				
			<q-item  v-if="data_1.length > 0">
				<q-item-section avatar>
				  <q-checkbox v-if="data_1.length > 0" 
				  keep-color 
				  :disable="data_1.length <= 0" 
				  v-model="is_muratal_play" 
				  :label="get_muratal" 
				  color="positive" />
				</q-item-section>
			</q-item>


		  </q-list>
		</q-menu> 


    </q-btn>        

</fragment>
</template>

<script type="text/javascript">
	import { mapFields } from "vuex-map-fields";

	export default {
	  	computed: {
	    	...mapFields({
				right_drawer: "drawer.right_drawer",
				left_drawer: "drawer.left_drawer",

				data_1: "alquran_index.ayat", //"alquran_detail.data_1",
				ayat_player_display: "alquran_index.ayat_player_display",
				is_muratal_play: "alquran_index.is_muratal_play",
				is_not_player_real_closed: "alquran_index.is_not_player_real_closed", 
		    }),
		  	get_muratal() {
		  		if(this.data_1.length <= 0) return "Muratal Kosong"
		  		return this.is_muratal_play ? 'Muratal' : 'Muratal'
		  	},
		  	get_player() {
		  		return !this.is_not_player_real_closed ? 'Alquran Player' : 'Alquran Player'
		  	},
		},  
		watch: {
			is_muratal_play(val) {
				if(!val) {
				if(document.getElementById('audio-player')) {
					const audio = document.getElementById('audio-player')
					audio.pause();
					// audio.currentTime = 0;
				} 			
				} else {
				if(document.getElementById('audio-player')) {
					const audio = document.getElementById('audio-player')
					audio.play()
				} 			
				}
			}
		}
	};
</script>