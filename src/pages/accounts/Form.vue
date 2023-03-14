<template>

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
			<q-avatar @click="showSingle" size="150px">
				<img ref="foto" :src="img_checker(foto)" @error="handleError" loading="lazy" />
			</q-avatar>
		</q-item-label>
		<q-item-label>
			<q-btn @click="onPickerImage" class="q-mt-md" label="Ganti Foto" rounded unelevated color="primary" icon="photo_camera" />
		</q-item-label>
	</q-item-section>
</q-item>

<q-form @submit="onSubmit">

<div class="q-my-lg row q-col-gutter-md">
	<q-input class="col-12 q-py-none q-pb-md" v-model="nama"
		square ref="nama"
		clearable
		text-color="grey" bg-color="white"
		outlined label="Nama Lengkap"
		lazy-rules
		:rules="[ val => val && val.length > 0 || '']">
	</q-input>
	<q-input class="col-12 col-md-6 q-py-none q-pb-md"
		square ref="email" v-model="email" type="email"
		clearable
		text-color="grey" bg-color="white"
		outlined label="Email"
		lazy-rules
		:rules="[ val => val && val.length > 0 || '', isValidEmail]">
	</q-input>
	<q-input class="col-12 col-md-6 q-py-none q-pb-md"
		square ref="telepon"  v-model="telepon"
		clearable
		text-color="grey" bg-color="white"
		outlined label="Telepon (WA)"
		lazy-rules
		:rules="[ val => val && val.length > 0 || '']">
	</q-input>
	<q-input class="col-12 q-py-none"
		square ref="alamat"  v-model="alamat"
		clearable
		type="textarea"
		text-color="grey" bg-color="white"
		outlined label="Alamat"
		lazy-rules
		:rules="[ val => val && val.length > 0 || '']">
	</q-input>
</div>

<!-- <div class="text-left"> -->
	<q-btn type="submit" color="primary" rounded unelevated icon-right="send" label="Simpan"></q-btn>
<!-- </div> -->

</q-form>
</template>

<script>


	export default {
		computed: {
			...mapFields({
				uuid: 'profile.index.data.payload.uuid',
				nama: 'profile.index.data.payload.nama',
				email: 'profile.index.data.payload.email',
				// password: 'profile.index.data.payload.password',
				telepon: 'profile.index.data.payload.telepon',
				alamat: 'profile.index.data.payload.alamat',
				foto: 'profile.index.data.payload.foto',
			}),
		},
    data() {
      return {
        imgs: '',
        visible: false,
        index: 0, // default: 0,
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
      async onSubmit() {
      	this.$refs.nama.validate()
      	this.$refs.email.validate()
      	this.$refs.telepon.validate()
      	this.$refs.alamat.validate()

      	if(!this.nama) {
					return
      	}
      	else if(!this.email || !this.isValidEmail(this.email)) {
					return
      	}
      	else if(!this.telepon) {
					return
      	}
      	else if(!this.alamat) {
					return
      	}
      },
			async onSend(val) {

				let bodyFormData = new FormData()
				bodyFormData.append('foto', val)

				const response = await this.$axios({
					method: 'post',
					url: "/profile/upload?id=1",
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
					// this.img_collection = [ this.host +"/"+ callback.data.signiture.user.profile_image ]
				}

			},
			onFileChange(event){
		    let file = event.target.files[0];
		    this.onSend(file)
		    // return

	 	    // Preview jika mau, jadi base64
				let reader = new FileReader();

				if(file['size'] < 2111775) {

				    reader.onloadend = (file) => {
					    this.$refs.foto.src = reader.result
					    // this.imgs = reader.result
							//////console.log('RESULT', reader.result)
							// this.images_desktop = reader.result;
				    }
				    reader.readAsDataURL(file);

				}else{
				    alert('File size can not be bigger than 2 MB')
				}
			},
			onPickerImage() {
				this.$refs.file.click()
			}
    }
  };
</script>
