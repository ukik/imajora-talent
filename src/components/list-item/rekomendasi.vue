<template>
<!-- <div > -->
	<!-- <div class="q-pt-sm q-pl-sm q-pb-sm text-h6">Rekomendasi</div> -->

	<q-list class="q-pa-none" v-if="prop_data.length > 0" separator>
      <q-item v-for="(item, index) in prop_data" :key="index" class="q-px-none" v-ripple="{color: 'grey' }">

        <q-item-section class="q-pl-sm">
          <q-item-label class="weight-500">{{ item.judul | text-wrap(100, '...') }}</q-item-label>

          <!-- <q-item-label class="q-pt-md" caption v-if="is_not_mobile_size">
          	{{ item.konten | text-wrap(250, '...') }}
          </q-item-label> -->

          <div class="text-grey-6 q-mb-xs" :class="[ is_not_mobile_size ? 'q-mt-lg' : 'q-mt-sm' ]" style="font-size:12px;">
            {{ item.sumber | text-wrap(25) }}
          </div>
        </q-item-section>

        <!-- 
        <q-item-section thumbnail top>
          <img class="rounded-borders q-mr-sm" src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section> -->

        <!-- {{ item.user_gambar }} -->

        <q-item-section class="max-width-thumbnail col-5 q-pr-sm" >
          <q-img :ratio="16/9"
            img-class="custom-image rounded-borders"
            :src="img_checker_postingan(item.user_gambar, 'file')"
          />    
        </q-item-section>    
      </q-item>

	</q-list>
<!-- </div> -->
</template>

<script type="text/javascript">
	export default {
		props: {
      prop_data: {
        default: () => ([])
      },
			// prop_content: {
			// 	default: "Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit."
			// }
		}
	};
</script>