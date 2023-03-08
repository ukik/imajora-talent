<template>
	<masonry
	  :cols="2"
	  :gutter="10"
	  >
	  <div class="q-my-sm shadow-1 rounded-borders" v-for="(item, index) in images" :key="index">

        <q-img v-ripple-x class="rounded-borders" :src="item" style="border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;">
        	<!-- <q-icon name="content_copy" /> -->
        	<div class="absolute-top-right bg-transparent q-ma-sm" style="padding:0px;">
		    	<q-icon size="20px" name="layers" />
	        </div>
        </q-img>	     
        <div class="q-px-sm q-pt-sm weight-500 text-caption">{{ 'Dalam surat ini, Allah memerintahkan Nabi Muhammad saw. untuk kembali dan berlindung kepada-Nya dalam mencegah kejahatan yang besar,' | text-wrap(40,'...') }} </div>
        <ProfileGambarUtama />
	  </div>

	</masonry>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				images: [
					"https://images.alphacoders.com/232/thumb-1920-232381.jpg",
					"https://i.pinimg.com/originals/89/f6/17/89f6175d8e6731fe72c5f1f4547683e1.jpg",
					"https://images7.alphacoders.com/332/332404.jpg",
					"https://www.wallpaperup.com/uploads/wallpapers/2014/06/23/376376/f30f2e4b1049637ced41592507f942c2.jpg",
					"https://www.gematsu.com/wp-content/uploads/2015/12/Star-Ocean-Integrity-and-Faithlessness_2015_12-28-15_001.jpg",
					"https://images.alphacoders.com/232/thumb-1920-232381.jpg",
					"https://i.pinimg.com/originals/89/f6/17/89f6175d8e6731fe72c5f1f4547683e1.jpg",
					"https://images7.alphacoders.com/332/332404.jpg",
					"https://www.wallpaperup.com/uploads/wallpapers/2014/06/23/376376/f30f2e4b1049637ced41592507f942c2.jpg",
					"https://www.gematsu.com/wp-content/uploads/2015/12/Star-Ocean-Integrity-and-Faithlessness_2015_12-28-15_001.jpg",
					"https://images.alphacoders.com/232/thumb-1920-232381.jpg",
					"https://i.pinimg.com/originals/89/f6/17/89f6175d8e6731fe72c5f1f4547683e1.jpg",
					"https://images7.alphacoders.com/332/332404.jpg",
					"https://www.wallpaperup.com/uploads/wallpapers/2014/06/23/376376/f30f2e4b1049637ced41592507f942c2.jpg",
					"https://www.gematsu.com/wp-content/uploads/2015/12/Star-Ocean-Integrity-and-Faithlessness_2015_12-28-15_001.jpg",
				]
			}
		}
	};
</script>