<template>
	<div>
      
      <div v-for="i in prop_data" :key="i" class="q-px-none relative-position" v-ripple="{color: 'grey' }">

        <q-item class="q-px-sm q-pt-md">
          <q-item-section>
            <span class="text-blue weight-500" style="font-size:16px;">Al-Baqaroh</span>
            <div class="text-caption text-black" style="margin-top:-5px;">Al-Fatihah: Ayat 1</div>
          </q-item-section>
          <q-item-section side>
            <span class=" text-blue weight-500" style="font-size:24px;">{{ "البقرة" }}</span>
            <div class="text-caption text-black" style="margin-top:-9px;">1-2</div>        
          </q-item-section>
        </q-item>

        <q-item-section class="q-px-sm q-pb-md q-mb-xs">
          <q-item-label caption v-html="textWrap(content, 220, '...')"></q-item-label>
        </q-item-section>

        <q-separator color="grey-2" />
      </div>

	</div>
</template>

<script type="text/javascript">

const prop_image = Math.random() * 10 > 5 ? true : false

console.log(prop_image)

	export default {
		props: {
      prop_image: {
        default: Math.random() * 10 > 5 ? true : false,
      },
      prop_data: {
        default: 5,
      },         
			prop_content: {
				default: "Learn about our RFC process, Open RFC meetings & more.Join in the discussion! » Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit."
			},
      prop_title: {
        default: "Learn about our RFC process, Open RFC meetings & more.Join in the discussion! »"
      },
      prop_meta: {
        // default: "Learn about, 20/10/2020"
      }
		},
    data() {
      return {
        content: "",
        title: "",
        // meta: "",

        thumbnail: Math.random() * 10,
      }
    },
    mounted() {
      let _content = this.prop_content
      _content = _content.replaceAll(new RegExp('learn', 'gi'), '<span class="text-blue text-weight-bold">Learn</span>')

      let _title = this.prop_title
      _title = _title.replaceAll(new RegExp('learn', 'gi'), '<span class="text-blue text-weight-bold">Learn</span>')

      // let _meta = this.prop_meta
      // _meta = _meta.replaceAll(new RegExp('learn', 'gi'), '<span class="text-blue text-weight-bold">Learn</span>')

      this.content = _content
      this.title = _title
      // this.meta = _meta
    }
	};
</script>