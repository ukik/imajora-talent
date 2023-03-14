<template>
  <q-form @submit="onSubmit">
    <q-list class="">
      <div class="row q-col-gutter-md q-mt-md">
        <q-input
          class="col-12 q-py-none"
          v-model="old_sandi"
          type="password"
          square
          ref="old_sandi"
          clearable
          text-color="grey"
          bg-color="white"
          outlined
          label="Sandi Lama"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || '']"
        >
        </q-input>
        <q-input
          class="col-12 col-md-6 q-py-none q-pt-md"
          type="password"
          square
          ref="new_sandi"
          v-model="new_sandi"
          clearable
          text-color="grey"
          bg-color="white"
          outlined
          label="Sandi Baru"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || '', rule_konfirmasi]"
        >
        </q-input>
        <q-input
          class="col-12 col-md-6 q-py-none q-pt-md"
          type="password"
          square
          ref="new_sandi_konfirmasi"
          v-model="new_sandi_konfirmasi"
          clearable
          text-color="grey"
          bg-color="white"
          outlined
          label="Sandi Baru Konfirmasi"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || '', rule_konfirmasi]"
        >
        </q-input>
      </div>
    </q-list>

    <!-- <div class="text-left"> -->
    <q-btn
      class="q-mt-md"
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
    ...mapFields({
      old_sandi: "profile.form_sandi.old_sandi",
      new_sandi: "profile.form_sandi.new_sandi",
      new_sandi_konfirmasi: "profile.form_sandi.new_sandi_konfirmasi",
    }),
  },
  methods: {
    rule_konfirmasi(val) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (this.new_sandi !== this.new_sandi_konfirmasi) {
            resolve(false);
          }
          resolve(true);

          // call
          //  resolve(true)
          //     --> content is valid
          //  resolve(false)
          //     --> content is NOT valid, no error message
          //  resolve(error_message)
          //     --> content is NOT valid, we have error message
          // resolve(!!val || '* Required')

          // calling reject(...) will also mark the input
          // as having an error, but there will not be any
          // error message displayed below the input
          // (only in browser console)
        }, 1000);
      });
    },
    async onSubmit() {
      this.$refs.old_sandi.validate();
      this.$refs.new_sandi.validate();
      this.$refs.new_sandi_konfirmasi.validate();

      if (!this.old_sandi) {
        return;
      } else if (!this.new_sandi) {
        return;
      } else if (!this.new_sandi_konfirmasi) {
        return;
      } else if (this.new_sandi !== this.new_sandi_konfirmasi) {
        return;
      }

      this.$store.dispatch("profile/update_sandi", {
        old_sandi: this.old_sandi,
        new_sandi: this.new_sandi,
        new_sandi_konfirmasi: this.new_sandi_konfirmasi,
      });
    },
  },
};
</script>
