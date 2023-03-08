<template>
      
<div :id="'video-rekomendasi-'+prop_id">

    <!-- <ProfileContent v-intersection="onIntersection" /> -->
    <ProfileVideo :prop_data="prop_data.user" class="q-pa-sm" />

    <!-- <q-intersection once transition="scale"> -->

    <q-no-ssr>
      <iframe 
        :id="'iframeid-rekomendasi-'+prop_id" 
        :src="youtubeCheck(prop_data.user_video.file)+'?enablejsapi=1&rel=0&autoplay=0&modestbranding=1&autohide=0&controls=1'" :height="$q.screen.width > 425 ? 550 : 350" 
        width="100%" 
        title="" 
        frameBorder="0" 
        allowfullscreen="true" 
        allowscriptaccess="always"></iframe>
    <!-- </q-intersection> -->
    </q-no-ssr>

    <!-- <ToolbarDibawahVideo @onBubbleEvent_ResetVideo="onBubbleEvent_ResetVideo" /> -->

    <ToolbarDibawahVideoRekomendasi @onBubbleEvent_ResetVideo="onBubbleEvent_ResetVideo"
      :form_menyukai="{
        id_pemilik_postingan: prop_data.id_user,
        id_postingan: prop_data.id,
        type: 'Video_Model',
        label: 'video', 
      }" 
      :form_favorit="{
        id_pemilik_postingan: prop_data.id_user,
        id_postingan: prop_data.id,
        type: 'Video_Model',
        label: 'video', 
      }" 
      :menyukai="prop_data.menyukai" 
      :favorit="prop_data.favorit" 

      :prop_total="prop_data.user_totals"/>            


    <div v-ripple v-ripple="{color:'grey'}" class="relative-position q-px-sm" >
      <q-item-label class="text-black text-weight-bold text-subtitle1 q-py-sm" v-html="kataDicari(prop_data.judul, '')"></q-item-label>

      <q-item-label class="text-body2 q-pt-sm q-pb-lg" v-html="textWrap(kataDicari(prop_data.deskripsi, ''), 100, '...')"></q-item-label>
    </div>

    <q-separator />

</div>

</template>

<script type="text/javascript">
	export default {
		props: {
      prop_id: {
        default: null,
      },
			prop_data: {
        default: () => ({
          judul: '',
          deskripsi: '',
        })
			}
		},
    data() {
      return {
      }
    },
    methods: {
      onIntersection(entry) {
        console.log(entry.isIntersecting)
        if(!entry.isIntersecting) {
          this.stopVideo('iframeid-rekomendasi-'+this.prop_id)
        }
      },
      onBubbleEvent_ResetVideo() {
        var frame = document.getElementById('iframeid-rekomendasi-'+this.prop_id);
        frame.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
      }
    },
    mounted() {
      const vm = this
      console.log(vm.prop_id)
      // create youtube player
      var player = new YT.Player('iframeid-rekomendasi-'+vm.prop_id, {
        events: {
          'onReady': function (event) {
            // event.target.playVideo();
          },
          'onStateChange': function (event) {        
            if(event.data === 0) {            
              // alert('done'+Number(vm.prop_id+1));
              setTimeout(() => {
                var frame = document.getElementById('iframeid-rekomendasi-'+Number(vm.prop_id+1));
                if(frame) {
                  vm.scrollToElement(frame, 50)
                  frame.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
                }
              }, 500)
            }
          }
        }
      });      
    }
	};
</script>