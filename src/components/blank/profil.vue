<template>
<q-page class="flex flex-center">
	<div class="text-center ">

		<q-btn unelevated disabled color="grey-2" round class="q-pa-xl">
			<q-avatar size="75px" square>
				<img style="" src="~assets/blank/profil.png" loading="lazy" />
			</q-avatar>			
		</q-btn>

		<div class="q-mt-md text-h6">Kosong</div>

		<div class="q-mt-md text-grey text-body2">Tidak ada konten tersedia</div>

		<slot />
		<!-- <q-btn class="q-mt-lg" rounded color="cyan" icon="login" label="LOGIN" /> -->
		<!-- <q-btn class="q-mt-lg" @click="onReload" rounded color="cyan" icon="refresh" label="RESET" /> -->
	</div>
</q-page>   
</template>

<script type="text/javascript">

export default {
	methods: {
		onReload() {
			location.reload();			
		}
	}
};
	
</script>