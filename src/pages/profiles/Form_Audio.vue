<template>

  <q-dialog position="bottom" v-model="dialog_option">
    <q-list :style="is_mobile_size ? ('width:'+$q.screen.width+'px') : ('width:300px')" class="bg-white">
      <q-item
        clickable
        v-ripple
        :active="option === 'camera'"
        @click="onPickerImage_Camera"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="camera" />
        </q-item-section>

        <q-item-section>Camera</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="option === 'galeri'"
        @click="onPickerImage_Galeri"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="image" />
        </q-item-section>

        <q-item-section>Galeri</q-item-section>
      </q-item>
    </q-list>
  </q-dialog>


  <!-- max-file-size="5000000" capture -->
  <input v-show="false" type="file" name="picture" accept="audio/*" ref="file" id="file" @change="onFileChange">

  <q-file accept="audio/*" type="file" class="col-12" label="Upload Track" outlined v-model="audio_ref">
    <template v-slot:prepend>
      <q-icon name="attach_file" />
    </template>
  </q-file>

  <div v-show="audio_ref" class="col-12">
    <audio ref="audio" id="audio-preview" class="full-width" controls></audio>
  </div>
  <!-- @click="onDialogOption"  -->

  </template>

  <script>


    export default {
      // computed: {
      // 	...mapFields({
      // 		foto: 'profile.index.data.payload.foto',
      // 	}),
      // },
      data() {
        return {
          audio:null,
          audio_ref:null,
          dialog_option: false,
          option: '',
        }
      },
      watch: {
        audio_ref(val) {
          // this.onFileChange(val)
          let audio = document.getElementById('audio-preview');
          let reader = new FileReader();

          reader.readAsDataURL( val );
          reader.addEventListener('load', function(){
            // console.log(reader.result)
            audio.src = reader.result;
            // vm.audio = reader.result
          });
        }
      },
      methods: {
        async onSend(val) {

          let bodyFormData = new FormData()
          bodyFormData.append('foto', val)

          console.log('onSend', val)

          const response = await this.$axios({
            method: 'post',
            url: "/profile/upload",
            data: bodyFormData,
          }).then(res => {

            console.log(res)
            this.$q.notify({
              message: 'Proses Selesai',
              caption: "berhasil ganti foto profil",
              color: 'positive',
              icon: 'done',
              position: 'top',
            })

            return res
          }).catch(err => {
            // console.log(err)

            this.$q.loading.hide();

            this.$q.notify({
              message: 'Proses Gagal',
              caption: "gagal ganti foto profil",
              color: 'negative',
              icon: 'close',
              position: 'top',
            })
            return null
          })

          if(response) {
            this.$store.commit('profile/index', response.data)
            this.$store.commit('auth/user', response.data)
            this.$store.commit('order/form_profile', response.data)
          }

        },
        onFileChange(event){
          const vm = this
          let file = event //event.target.files[0];

          let audio = document.getElementById('audio-preview');
          let reader = new FileReader();

          reader.readAsDataURL( file );
          reader.addEventListener('load', function(){
            audio.src = reader.result;
            // vm.audio = reader.result
          });

          // this.$refs.video.src = file

           // // Preview jika mau, jadi base64
          // let reader = new FileReader();

          // if(file['size'] < 2111775) {

          //     reader.onloadend = (file) => {
          // 	    // this.$refs.foto.src = reader.result
          //       // this.foto = reader.result
          //       console.log('onFileChange', reader.result)

          // 	    // this.imgs = reader.result
          //     }
          //     reader.readAsDataURL(file);

          // }else{
          //     alert('File size can not be bigger than 2 MB')
          //     return
          // }

          // this.onSend(file)
        },
        onDialogOption() {
          if(this.is_cordova) {
            this.dialog_option = true
            return
          }
          this.onPickerImage()
        },
        onPickerImage_Galeri() {
          this.option = 'galeri'
          this.onPickerImage()
        },
        onPickerImage_Camera() {
          this.onToastBottom('buka camera')

          this.option = 'camera'
          // this.$refs.file1.click()

          // document.getElementById('file').setAttribute('capture', 'capture');
          // setTimeout(() => {
          // 	this.onPickerImage()
          // }, 500)

          // return

          // capture callback
          var captureSuccess = function(mediaFiles) {
            this.onToastBottom('upload dari galeri')
          };

          // capture error callback
          var captureError = function(error) {
          };

          // start audio capture
          navigator.device.capture.captureImage(captureSuccess, captureError, {limit:2});

        },
        onPickerImage() {
          this.$refs.file.click()
        }
      }
    };
  </script>
