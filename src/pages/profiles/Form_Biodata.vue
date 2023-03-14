<template>
  <q-form @submit="onSubmit">
    <q-list class="q-mb-md">
      <div class="row q-col-gutter-md q-mt-md">
        <q-input
          class="col-12 q-py-none q-pb-md"
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
          class="col-12 col-md-6 q-py-none q-pb-md"
          square
          ref="email"
          v-model="email"
          type="email"
          clearable
          text-color="grey"
          bg-color="white"
          outlined
          label="Email"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || '', isValidEmail]"
        >
        </q-input>
        <q-input
          class="col-12 col-md-6 q-py-none q-pb-md"
          @click="$router.push({ name: 'ganti_telepon' })"
          square
          ref="telepon"
          v-model="telepon"
          :mask="`#################`"
          unmasked-value
          text-color="grey"
          bg-color="white"
          outlined
          label="Telepon (WA)"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || '']"
        >
        </q-input>
        <q-input
          class="col-12 q-py-none"
          square
          ref="alamat"
          v-model="alamat"
          clearable
          type="textarea"
          text-color="grey"
          bg-color="white"
          outlined
          label="Alamat"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || '']"
        >
        </q-input>
      </div>
    </q-list>

    <!-- <div class="text-left"> -->
    <q-btn
      type="submit"
      color="primary"
      unelevated
      icon-right="send"
      label="Simpan"
    ></q-btn>
    <!-- </div> -->
  </q-form>
</template>

<script>


export default {
  computed: {
    // ...mapFields({
    //   // uuid: 'profile.index.data.payload.uuid',
    //   nama: "profile.index.data.payload.nama",
    //   email: "profile.index.data.payload.email",
    //   country_selected: "profile.index.data.payload.country_selected",
    //   telepon: "profile.index.data.payload.telepon",
    //   alamat: "profile.index.data.payload.alamat",
    // }),
  },
  methods: {
    async onSubmit() {
      this.$refs.nama.validate();
      this.$refs.email.validate();
      this.$refs.telepon.validate();
      this.$refs.alamat.validate();

      if (!this.nama) return;
      else if (!this.email || !this.isValidEmail(this.email)) return;
      else if (!this.telepon) return;
      else if (!this.alamat) return;

      const telp =
        this.telepon.indexOf("+62") > -1 ? this.telepon : "+62" + this.telepon;

      this.$store.dispatch("profile/update_biodata", {
        nama: this.nama,
        email: this.email,
        telepon: telp,
        alamat: this.alamat,
      });
    },
  },
};
</script>
