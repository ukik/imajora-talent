<template>
  <q-form @submit="onSubmit">
    <q-input
      class=""
      v-model="nama"
      square
      ref="nama"
      clearable
      text-color="grey"
      bg-color="white"
      outlined
      label="Nama Lengkap"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || '']"
    >
    </q-input>
    <q-input
      class="q-pb-md"
      square
      ref="email"
      v-model="email"
      text-color="grey"
      bg-color="white"
      outlined
      label="Email"
      clearable
      lazy-rules
      :rules="[]"
    >
    </q-input>

    <div class="row q-col-gutter-sm">
      <CountryCode
        ref="country_selected"
        :country_selected="country_selected"
        @onBubbleEvent="country_selected = $event"
        class="col-3"
      />
      <q-input
        class="col"
        square
        ref="telepon"
        v-model="telepon"
        :mask="`(${country_selected})  #################`"
        clearable
        unmasked-value
        text-color="grey"
        bg-color="white"
        outlined
        label="Telepon (WA)"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || '']"
      >
        <template v-slot:before> </template>
      </q-input>
    </div>
    <q-input
      class=""
      square
      ref="alamat"
      v-model="alamat"
      text-color="grey"
      bg-color="white"
      clearable
      outlined
      label="Alamat"
      autogrow
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || '']"
    >
    </q-input>
    <q-input
      class=""
      square
      ref="pesan"
      v-model="pesan"
      type="textarea"
      text-color="grey"
      bg-color="white"
      clearable
      outlined
      label="Pesan"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || '']"
    >
    </q-input>
  </q-form>
</template>


<script>
export default {
  data() {
    return {
      nama: "",
      email: "",
      telepon: "",
      alamat: "",
      pesan: "",
      country_selected: "",
    };
  },
  emits: ["onBubbleEvent"],
  methods: {
    async onSyncFromUser() {
      this.nama = this.user.nama;
      this.email = this.user.email;
      this.country_selected = this.user.country_selected;
      this.telepon = this.user.telepon;
      this.alamat = this.user.alamat;
      this.pesan = this.user.pesan;
    },
    async onSubmit() {
      this.$refs.nama.validate();
      // this.$refs.email.validate()
      this.$refs.telepon.validate();
      this.$refs.alamat.validate();
      this.$refs.pesan.validate();
      this.$refs.country_selected.onValidate();

      if (
        !this.nama ||
        !this.telepon ||
        !this.alamat ||
        !this.pesan ||
        !this.country_selected
      ) {
        this.$q.notify({
          message: "Lengkapi Formulir",
          color: "orange",
          icon: "close",
          position: "top",
        });
        return;
      }

      // const telp = this.telepon.indexOf('+62') > -1 ? this.telepon : ('+62'+this.telepon)
      const telp =
        this.telepon.indexOf(this.country_selected) > -1
          ? this.telepon
          : this.country_selected + this.telepon;

      let formData = new FormData();
      formData.append("nama", this.nama);
      formData.append("email", this.email);
      formData.append("country_selected", this.country_selected);
      formData.append("telepon", this.telepon);
      formData.append("alamat", this.alamat);
      formData.append("pesan", this.pesan);

      const response = await this.$axios({
        method: "post",
        url: "/kontak_kami/pesan",
        data: formData,
      })
        .then((res) => {
          const data = res.data;
          if (data?.meta?.status == "error") {
            for (const obj in data.payload) {
              const caption = `${data.payload[obj].toString()}`;
              this.$q.notify({
                message: "Proses Gagal",
                caption: caption,
                color: "negative",
                // icon: 'close',
                position: "top",
              });
            }

            return false;
          }

          return true;
        })
        .catch((err) => {
          this.$q.notify({
            message: "Proses Gagal",
            color: "negative",
            icon: "highlight_off",
            position: "top",
          });

          this.$q.loading.hide();
          return null;
        });

      if (!response) return;

      const num = this.whatsapp;
      const msg =
        `*Kontak Kami* %0D%0A` +
        `Halo! *Cubix* senang menerima pesan Anda. %0D%0A %0D%0A` +
        `Pesan: ${this.pesan}. %0D%0A %0D%0A` +
        `Bagaimana kami menyapa Anda? %0D%0A` +
        `Nama: ${this.nama} %0D%0A` +
        `Telepon: ${telp} %0D%0A %0D%0A` +
        `Alamat: ${this.alamat} %0D%0A %0D%0A` +
        `Terimakasih sudah menyapa kami. Salam & Sukses`;

      if (this.$q.platform.is.cordova) {
        cordova.InAppBrowser.open(
          `https://api.whatsapp.com/send?phone=${num}&text=${msg}`,
          "_system",
          ""
        );
      }

      window.open(
        `https://api.whatsapp.com/send?phone=${num}&text=${msg}`,
        "_blank"
      );

      this.$emit("onBubbleEvent", false);
    },
  },
};
</script>