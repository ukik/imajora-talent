<template>
  <div>
    <div v-for="i in prop_data" :key="i">

        <ProfileUtama class="q-pa-sm" />

        <!-- 2 Column Image -->
        <q-card v-if="prop_layout == 0" flat v-ripple="{color: 'grey' }"  class="q-px-sm q-pt-sm q-pb-sm  no-border-radius">

          <q-item-label class="q-mb-md text-weight-bold" v-html="title"></q-item-label>

          <q-item-label class="q-pa-none q-pb-md" caption v-html="textWrap(content, 220, '...')"></q-item-label>

            <div class="row q-gutter-xs">
                <q-img :ratio="4/3"
                  img-class="custom-image rounded-borders"
                  class="col"
                  src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg"
                />
                <q-img :ratio="4/3"
                  img-class="custom-image rounded-borders"
                  class="col"
                  src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
            </div>
        </q-card>  

          <!-- 3 Column Image -->
        <q-card v-if="prop_layout == 1" flat v-ripple="{color: 'grey' }"  class="q-px-sm q-pt-sm q-pb-sm  no-border-radius">

          <q-item-label class="q-mb-md text-weight-bold" v-html="title"></q-item-label>

          <q-item-label class="q-pa-none q-pb-md" caption v-html="textWrap(content, 220, '...')"></q-item-label>

            <div class="row q-gutter-xs">
              <q-img :ratio="4/3"
                img-class="custom-image rounded-borders"
                class="col"
                src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg"
              />
              <q-img :ratio="4/3"
                img-class="custom-image rounded-borders"
                class="col"
                src="https://cdn.quasar.dev/img/parallax2.jpg"
              />
              <q-img :ratio="4/3"
                img-class="custom-image rounded-borders"
                class="col"
                src="https://www.animeprintz.com/image/cache/s/star-ocean-ex-7908-76034-wd-800x500.jpg"
              />
            </div>
        </q-card> 


        <q-item-section v-if="prop_layout == 2" class="q-px-sm q-py-sm  relative-position" v-ripple="{color: 'grey' }">

          <q-item-label class="q-mb-md text-weight-bold" v-html="title"></q-item-label>

          <q-item class="q-pa-none">

            <q-item-section>
              <q-item-label caption v-html="textWrap(content, 220, '...')"></q-item-label>
            </q-item-section>

            <!-- <q-item-section thumbnail top v-if=" Math.random() * 10 > 5 ? true : false">
              <img class="rounded-borders q-mr-sm q-mt-xs" src="https://cdn.quasar.dev/img/mountains.jpg">
            </q-item-section>    -->      

            <q-item-section top class="col-5" v-if=" Math.random() * 10 > 5 ? true : false">
              <q-img :ratio="16/9"
                img-class="custom-image rounded-borders"
                src="https://cdn.quasar.dev/img/mountains.jpg"
              />
            </q-item-section> 

          </q-item>

          <div class="text-grey-6 q-mt-sm" style="font-size:12px;">{{ prop_meta }}</div>

        </q-item-section>

        <q-item-section v-if="prop_layout == 3" class="q-px-sm q-py-sm  relative-position" v-ripple="{color: 'grey' }">

          <q-item-label class="q-mb-md text-weight-bold" v-html="title"></q-item-label>

          <q-item-label class="q-pa-none q-pb-md" caption v-html="textWrap(content, 220, '...')"></q-item-label>

          <div class="text-grey-6 q-mt-sm" style="font-size:12px;">{{ prop_meta }}</div>

        </q-item-section>

        <div class="q-pb-xs">
          <ToolbarDibawahUtamaKonsultasi />
        </div>

        <q-separator />

    </div>

  </div>
</template>

<script type="text/javascript">

const prop_image = Math.random() * 10 > 5 ? true : false

console.log(prop_image)

	export default {
		props: {
      prop_layout: {
        default: Math.round(Math.random() * 3),
      },      
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
        default: "20/10/2020"
      }
		},
    data() {
      return {
        content: "",
        title: "",
        // meta: "",
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