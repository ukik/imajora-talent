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
<input v-show="false" type="file" name="picture" accept="image/*" ref="file" id="file" @change="onFileChange">

<q-item>
	<q-item-section class="text-center">
		<q-item-label>
			<q-avatar @click="showSingle" :size="is_mobile_size ? '150px' : '200px'">
				<img ref="foto" style="object-fit: cover;" :src="img_checker(foto)" @error="handleError" loading="lazy" />
			</q-avatar>
		</q-item-label>
		<q-item-label>
			<q-btn @click="onDialogOption" class="q-mt-md" label="Ganti Foto" rounded unelevated color="primary" icon="photo_camera" />
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
        foto:'',
        imgs: '',
        visible: false,
        index: 0, // default: 0,

        dialog_option: false,
        option: '',
      }
    },
    methods: {
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
		    let file = event.target.files[0];

	 	    // Preview jika mau, jadi base64
				let reader = new FileReader();

				if(file['size'] < 2111775) {

				    reader.onloadend = (file) => {
					    this.$refs.foto.src = reader.result
              this.foto = reader.result
              console.log('onFileChange', reader.result)

					    // this.imgs = reader.result
				    }
				    reader.readAsDataURL(file);

				}else{
				    alert('File size can not be bigger than 2 MB')
				    return
				}

		    this.onSend(file)
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
