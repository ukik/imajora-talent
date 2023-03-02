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

<vue-easy-lightbox
  scrollDisabled
  escDisabled
  moveDisabled
  :visible="visible"
  :imgs="foto"
  :index="index"
  @hide="handleHide"
></vue-easy-lightbox>

<!-- max-file-size="5000000" capture -->
<input v-show="false" multiple type="file" name="picture" accept="image/*" ref="file" id="file" @change="onFileChange">

<div class="row q-col-gutter-y-md">
  <div class="col-12" v-for="(item, index) in foto">
  <q-img
    :src="item"
    style="height: 140px; width: 100%"
  >
    <div class="absolute-full bg-transparent">
      <q-btn @click="onRemove(index)" class="absolute-top-right" flat icon="close" dense />
      <div class="full-width full-height bg-transparent" @click="onLightBox(index)"></div>
    </div>
    <template v-slot:error>
      <div class="absolute-full flex flex-center bg-negative text-white">
        <q-btn class="absolute-top-right" flat icon="close" dense />
        Cannot load image
      </div>
    </template>
  </q-img>
</div>
</div>

<q-item v-if="foto.length < 3">
	<q-item-section class="text-center">
		<q-item-label>
			<q-btn @click="onDialogOption" class="q-mt-md" label="Tambah Foto" rounded unelevated color="primary" icon="photo_camera" />
		</q-item-label>
	</q-item-section>
</q-item>

</template>

<script>
import { mapFields } from 'vuex-map-fields'

	export default {
		// computed: {
		// 	...mapFields({
		// 		foto: 'profile.index.data.payload.foto',
		// 	}),
		// },
    data() {
      return {
        foto:[],
        imgs: '',
        visible: false,
        index: 0, // default: 0,

        dialog_option: false,
        option: '',
        max: 3,
      }
    },
    methods: {
      onLightBox(val) {
        this.index = val;
        this.visible = true;
      },
      onRemove(val) {
        this.foto.splice(val,1)
        this.max++
      },
      showSingle() {
        // this.imgs = this.foto // 'https://cdn.quasar.dev/img/cat.jpg'
        this.visible = true
      },
      handleHide() {
        this.visible = false
      },
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
		    let file = event.target.files;

        // if(file.length > 0) {
        //   this.foto = []
        // }

        for (let i = 0; i < file.length; i++) {
          if(this.max <= 0) return
          this.max--

          const element = file[i];

          // Preview jika mau, jadi base64
          let reader = new FileReader();

          if(element['size'] < 2111775) {

              reader.onloadend = (file) => {
                // console.log('onFileChange', reader.result)
                // this.$refs.foto.src = reader.result
                // this.foto = reader.result
                this.foto.push(reader.result)
                // this.imgs = reader.result
              }
              reader.readAsDataURL(element);

          }else{
              alert('File size can not be bigger than 2 MB')
              return
          }

          console.log('file', this.foto.length)
        };

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

<style lang="sass" scoped>
.my-menu-link
  color: white
  background: #F2C037
</style>
