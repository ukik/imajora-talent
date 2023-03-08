<template>
<fragment>
	<div v-for="(item1, i) in dataGroups" :key="i+'A'">
		<div v-for="(item, index) in payload.slice(i * itemsPerRow, (i + 1) * itemsPerRow)" :key="index">
			<!-- <Ayat :item="item" :index="index" /> -->
			<!-- <q-separator /> -->
			<!-- <slot name="item" /> -->
			<slot v-bind="{ item, index }"></slot>
		</div>
	</div>	
</fragment>
</template>

<script type="text/javascript">
	export default {

		props: ['payload','itemsPerRow'],
		computed: {
		    dataGroups () {
		      return Array.from(Array(Math.ceil(this.payload.length / this.itemsPerRow)).keys())
		    }    			
		}
	};
</script>