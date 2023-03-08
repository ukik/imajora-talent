<template>
<div>
	

	<!-- <ProfileContent class="q-px-sm q-pt-sm" /> 	 -->

	<!-- Fullsize Video -->
	<q-card flat v-ripple="{color: 'grey' }"  class="q-px-sm q-pt-sm no-border-radius">

	    <div class="q-mb-md text-weight-bold" v-html="textWrap(prop_content, 250, '...')"></div>

	    <div>
	      <q-img
	        img-class="custom-image rounded-borders"
	        class="q-my-sm"
	        :ratio="1"
	        :src="get_file(0)"
	        style="width: 100%"
	      >
				<q-item dense class="absolute-full rounded-borders" style="padding: 0px 10px 0px 5px;">
					<!-- <q-item-section>
						<div>
			            <q-btn flat size="sm" round icon="play_circle_outline" />
			            <span style="font-size:12px;">2</span>
			        </div>
			        </q-item-section>

						<q-item-section side>
							<div>
				            <q-btn flat color="white" size="sm" round icon="access_time" />
				            <span style="font-size:12px;" class="text-white">04:12</span>
				        </div>
			        </q-item-section> -->
				</q-item>
				
				<q-btn icon="play_arrow" size="md" round outline class="absolute-center bg-black text-white"/>

			</q-img>
		</div>	      	
	</q-card>	      

	<slot name="toolbar" /> 
	<!-- <ToolbarListVideo /> -->

	<!-- <q-separator /> -->
</div>
</template>

<script type="text/javascript">

const menyukai = {
  data() {
    return {
      total_suka: 0,
      status_suka: false,
    }
  },
  mounted() {   
    this.status_suka = this.menyukai
    this.total_suka = this.get_total('suka')
  },
  methods: {
    async onSubmit() {
      const request = await this.dispatchVuex('aggregator/set_menyukai', this.form)
      if(!request.data) return
      // this.total_suka += request.value
      this.total_suka = request.data.total
      this.status_suka = request.value > 0 ? true : false
    },
  },    
  props: {
    form: {
      default: () => ({
        user_sukaable_id: '',
        user_sukaable_type: '',
        label: '',
      })
    },
    created_at: {
      default: '',
    },
    menyukai: {
      default: () => ({})
    },
    prop_total: {
      default: () => ([]),
    },            
    prop_tipe: {
      default: '',
    },     
	prop_gambar: {
		default: () => ([]),
	},      
	prop_content: {
		default: ""
	},
	prop_content_tambahan: {
		default: ""
	},
  },
  computed: {
    get_total() {
      return function(label) {

        if(this.prop_total.length <= 0) return 0

        for (var i = this.prop_total.length - 1; i >= 0; i--) {
          if(this.prop_total[i].label == label) {
            return this.prop_total[i].total
          }
        }

        return 0
      }
    },    
  } 
}


export default {
	mixins: [menyukai], 
		computed: {
			get_file() {
				return function(index) {
					if(this.prop_gambar.length <= 0) return
					if(this.prop_gambar[index] == undefined) return

					return this.prop_gambar[index]['file'];
				}
			},
		}
	};
</script>

<style type="text/css" scoped>
.q-item__section--thumbnail img {
    width: auto;
    height: 65px;
}  
.custom-image {
  filter: brightness(75%);
}

</style>