<template>
<!-- <q-card flat bordered square > -->
<q-banner  class="bg-white">
  <template v-slot:avatar>
  	<img loading="lazy" src="https://cdn-icons.flaticon.com/png/512/4757/premium/4757447.png?token=exp=1639197015~hmac=0dbd55cb16158eaa3ea6f69dcdc6dfe7" >
  </template>
	<q-item-section>
		<q-item-label class="text-subtitle2">
			{{ title }}
		</q-item-label>
		<q-item-label>
			{{ subtitle }}
		</q-item-label>
	</q-item-section>
</q-banner>
<!-- </q-card>	 -->
</template>

<script type="text/javascript">
export default {
	props: {
		src: {
			default: require('src/assets/flaticon/house.png')
		},
		title: {
			default: 'Tips'
		},
		subtitle: {
			default: 'Segera miliki aset Anda sekarang untuk mendapatkan nilai investasi yang terus meningkat. Minimal 10% bisa Anda peroleh dari kenaikan properti & tanah setiap tahunnya.'
		}
	},
	methods: { 
		onBubbleEvent(value) {
			this.$emit('onBubbleEvent', { key: value })			
		}
	}
};
</script>