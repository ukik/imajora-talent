import { scroll, date, Notify, Platform, Screen, Cookies } from "quasar";

var default_avatar = "https://secure.gravatar.com/avatar?d=wavatar";

export const host = "https://api.properti.labsnip.com/"; // 'http://properti-backend.local/'; //

export const default_title =
  "Cubix - Marketing & Agency | wujudkan impianmu - miliki aset idaman";
export const default_description =
  "Pusat jual beli aset properti, ruko, kavling, lahan, material, jasa yang terintegrasi & terpercaya";
export const default_alt =
  "Cubix - Marketing & Agency | wujudkan impianmu - miliki aset idaman";
export const default_footer_mark = `${new Date().getFullYear()} © CUBIX - All Rights Reserved`;

import { boot } from "quasar/wrappers";

import { mapGetters } from "vuex";

export default boot(async ({ app, ssrContext, router, store }) => {
  app.mixin({
    data() {
      return {
        default_avatar,
        server_host: host,

        default_title,
        default_description,
        default_alt,
        default_footer_mark,

        whatsapp: +6289616432187,
      };
    },
    computed: {
      ...mapGetters({
        is_verified: "auth/is_verified",
        is_logged: "auth/is_logged",
        role_name: "auth/role_name",
        auth: "auth/auth",
        user: "auth/user",
        is_admin: "auth/is_admin",
        is_user: "auth/is_user",
      }),

      DIALOG_OPEN() {
        return this.$store.getters.DIALOG_OPEN;
      },

      route_meta() {
        return this.$route.meta;
      },
      route_path() {
        return this.$route.path;
      },
      route_param() {
        return this.$route.params;
      },
      route_name() {
        return this.$route.name;
      },
      route_query() {
        return this.$route.query;
      },

      is_platform() {
        if (process.env.CLIENT) {
          return Platform.is.platform; // PRODUCTION UNLOCKED
        }
      },
      is_ssr() {
        return process.env.SERVER;
      },
      screen_width() {
        return Screen.width;
      },
      screen_height() {
        return Screen.height;
      },
      is_desktop() {
        if (process.env.CLIENT) {
          return Platform.is.desktop; // PRODUCTION UNLOCKED
        }
      },
      is_mobile() {
        if (process.env.CLIENT) {
          return Platform.is.mobile; // PRODUCTION UNLOCKED
        }
      },
      is_cordova() {
        if (process.env.CLIENT) {
          return Platform.is.cordova; // PRODUCTION UNLOCKED
        }
      },
      is_browser() {
        if (process.env.CLIENT) {
          return Platform.is.browser; // PRODUCTION UNLOCKED
        }
      },
      is_mobile_size() {
        return Screen.width <= 425;
      },
      is_higher_mobile_size() {
        return Screen.width > 425;
      },
      is_higher_ipad_size() {
        return Screen.width > 768;
      },
      is_ipad_size() {
        return Screen.width <= 768 && Screen.width >= 425;
      },
      is_lower_ipad_size() {
        return Screen.width <= 768;
      },
      is_lower_laptop_size() {
        return Screen.width <= 1024;
      },
      is_higher_ipad_size_route() {
        return Screen.width > 768 ? "" : "";
      },
      is_mobile_size_route() {
        return Screen.width <= 425 ? "" : "";
      },
      is_higher_desktop_size() {
        return Screen.width > 1440;
      },

      img_checker_galeri() {
        return function (val) {
          try {
            if (val == null || val == undefined) {
              return "";
            }

            let n = val.substring(0, 5);
            let result = n.includes("http" || "https");

            return result ? val : host + val;
          } catch (error) {
            return "";
          }
        };
      },
    },
    methods: {
      img_checker(val) {
        // ////console.log('img_checker', ifImageExist(val))
        // if(!ifImageExist(val)) return default_avatar
        try {
          if (val == null || val == undefined) {
            return default_avatar;
          }

          return val;

          // let n = val.substring(0, 5);
          // let result = n.includes("http");

          // return result ? val : this.server_host+'/'+val
        } catch (error) {
          return default_avatar;
        }
      },
      removeslug(str) {
        if (str == undefined) return str;
        if (str == null) return str;

        try {
          let n = str.toString();
          if (n) {
            n.replaceAll("-", " ");
          }
        } catch (err) {
          return str.toString();
        }
      },
      isValidEmail(val) {
        const emailPattern =
          /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailPattern.test(val) || ""; //'Invalid email';
      },
      handleError(e) {
        // console.log(e)
        e.target.src = default_avatar;
      },
      random_boolean() {
        return Math.round(Math.random() * 10) < 5 ? true : false;
      },
      onEmit(payload) {
        this.$global.$emit(this.route_name, payload);
      },
      onOrder() {
        const num = this.whatsapp;
        const msg =
          `*Pesan Konsultasi* %0D%0A` +
          `Halo! *Cubix* senang menerima pesan Anda. %0D%0A %0D%0A` +
          `Perkenalkan saya adalah: %0D%0A` +
          `Nama: Abi %0D%0A` +
          `Telepon: 089457551445 %0D%0A` +
          `Email: Abi@gmail.com %0D%0A` +
          `Alamat: jl. bukit pinang seribut Rt. 19 %0D%0A %0D%0A` +
          `Saya tertarik dengan aset berikut ini: %0D%0A` +
          `https://properti.labsnip.com/detail/123 %0D%0A %0D%0A` +
          `Catatan tambahan saya: %0D%0A` +
          `target elements with the "draggable" class interact('.draggable') .draggable({ // enable inertial throwing inertia: true, // keep the %0D%0A %0D%0A %0D%0A` +
          `Dengan mengirim pesan ini maka: %0D%0A` +
          `- Saya berkenan untuk mendapatkan follow-up, penawaran, dan konsultasi gratis %0D%0A` +
          `- Saya bisa menggunakan jasa jual-beli di Cubix %0D%0A` +
          `- Saya bisa mendapatkan informasi seputar pelatihan, dan seminar properti %0D%0A %0D%0A` +
          `Kami (Cubix) senang bisa berbagi informasi terlengkap dan terkini seputar aset bangunan, properti, lahan, tanah, kavling, dan sebagainya . %0D%0A` +
          `Jika Anda membutuhkan layanan kami, bisa melalui telepon, online, dan offline. %0D%0A` +
          `Terimakasih sudah menyapa kami. Salam & Sukses`;

        if (this.$q.platform.is.cordova) {
          cordova.InAppBrowser.open(
            `https://api.whatsapp.com/send?phone=${num}&text=${msg}`,
            "_system",
            ""
          );

          // cordova.plugin.media.to.whatsapp.shareMedia(num,num,"com.whatsapp",function(){
          //     console.log("Media To Whatsapp Success")
          // },function(e){
          //     console.log("Media To Whatsapp Error" + e)
          // });
          return;
        }

        window.open(
          `https://api.whatsapp.com/send?phone=${num}&text=${msg}`,
          "_self"
        );

        // Selamat datang di Cubix
        // Halo! Senang menerima pesan dari Anda.
        // Kami adalah jasa agen jual-beli aset bangunan, properti, lahan, tanah, kavling, dan sebagainya.

        // Perkenalkan saya adalah:
        // Nama:
        // Telepon:
        // Email:
        // Alamat:

        // Sangat tertarik dengan aset berikut ini:
        // https://.....

        // Catatan tambahan saya adalah:
        // ....

        // Saya berkenan untuk mendapatkan follow-up layanan dan konsultasi.

        // Kami (Cubix) senang bisa berbagi informasi terlengkap dan terkini seputar aset bangunan, properti, lahan, tanah, kavling, dan sebagainya

        // Terimakasih dari kami - sehat dan sukses selalu untuk kita bersama.
      },
      onKontak() {
        // %0a = newline

        // _Cubix_
        // *Cubix*
        // ~Cubix~

        // Spaces uses this command: %20 (but not necessary if inside a PHP variable)

        // Line breaks: %0A or %0D%0A (Totally required)

        // Links: No special character needed

        const num = this.whatsapp;
        // const name = "Megaman 8"
        const msg =
          // `Selamat datang di *Cubix* %0D%0A %0D%0A`+
          `*Pesan Umum* %0D%0A` +
          `Halo! *Cubix* senang menerima pesan Anda. %0D%0A %0D%0A` +
          `Kami adalah jasa agen jual-beli aset bangunan, properti, lahan, tanah, kavling, dan sebagainya. %0D%0A %0D%0A` +
          `Jika Anda membutuhkan layanan kami, bisa melalui telepon, online, dan offline. %0D%0A %0D%0A` +
          `Bagaimana kami menyapa Anda? %0D%0A` +
          `Nama: %0D%0A` +
          `Alamat: %0D%0A %0D%0A` +
          `Terimakasih sudah menyapa kami. Salam & Sukses`;

        if (this.$q.platform.is.cordova) {
          cordova.InAppBrowser.open(
            `https://api.whatsapp.com/send?phone=${num}&text=${msg}`,
            "_system",
            ""
          );
          // cordova.plugin.media.to.whatsapp.shareMedia(num,num,"com.whatsapp",function(){
          //     console.log("Media To Whatsapp Success")
          // },function(e){
          //     console.log("Media To Whatsapp Error" + e)
          // });
          // return
        }

        // encodeURIComponent
        // (
        // `Selamat Datang di _*Cubix*_ %0D%0A %0D%0A %0D%0A`
        // +
        // `Ini adalah aplikasi jual beli properti, tanah, dan aset %0D%0A %0D%0A`
        // +
        // `Kami agen jual beli terbesar di Kaltim %0D%0A %0D%0A`
        // +
        // `Jika ada yang ingin ditanyakan, jangan sungkan...`
        // )
        // window.open(`https://wa.me/${num}?text=I%27m%20api%20msg%20hello%20${name}%20friend%20${msg}`, '_blank');
        window.open(
          `https://api.whatsapp.com/send?phone=${num}&text=${msg}`,
          "_blank"
        );
      },
    },
  });
});
