import { boot } from 'quasar/wrappers'
export default boot( async ({ app, ssrContext, router, store }) => {

    const currency_singkat = (n, presisi=1) => {
        if (n < 900) {
            format_angka = number_format(n, presisi);
            simbol = '';
        } else if (n < 900000) {
            format_angka = number_format(n / 1000, presisi);
            simbol = 'ribu';
        } else if (n < 900000000) {
            format_angka = number_format(n / 1000000, presisi);
            simbol = 'juta';
        } else if (n < 900000000000) {
            format_angka = number_format(n / 1000000000, presisi);
            simbol = 'miliar';
        } else {
            format_angka = number_format(n / 1000000000000, presisi);
            simbol = 'triliun';
        }

        if ( presisi > 0 ) {
            pisah = '.' . str_repeat( '0', presisi );
            format_angka = str_replace( pisah, '', format_angka );
        }
        
        return format_angka . simbol;
    }

    const text_wrap = (str, limit = 100, append = "") => {
        let string = str == null ? "" : str
        if (string.length <= limit) return string.substring(0, limit)
        return string.substring(0, limit) + append

        // let string = str == null ? "" : str
        // return string.substring(0, limit)+append
    };

    const capitalize_all = str => {

        if (str == undefined)
            return str
        if (str == null)
            return str

        str = str.toString()

        var separateWord = str.toLowerCase().split(' ');
        for (var i = 0; i < separateWord.length; i++) {
          separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
          separateWord[i].substring(1);
        }
        return separateWord.join(' ');
    }

    const capitalize = str => {

        if (str == undefined)
            return str
        if (str == null)
            return str

        str = str.toString()

        var splitStr = str.toLowerCase().split(" ");
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        // Directly return the joined string
        return splitStr.join(" ");
    };

    const capitalize_slug = str => {

        if (str == undefined)
            return str
        if (str == null)
            return str

        str = str.toString()

        var splitStr = str.toLowerCase().split(" ");
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            
            if(i <= 0) splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        // Directly return the joined string
        try {
            if(splitStr.join(" ")) {
                return splitStr.join(" ").replaceAll('-', ' ');
            }
        } catch (err) {
            return splitStr.join(" ")
        }
    };

    const remove_html_tags = str => {

        if (str == undefined)
            return str
        if (str == null)
            return str

        str = str.toString()

        // Directly return the joined string
        str = str.replace(/<[^>]+>/g, '')
        return str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    };

    const uppercase = str => {

        if (str == undefined)
            return str
        if (str == null)
            return str

        str = str.toString()

        // Directly return the joined string
        return str.toUpperCase();
    };

    const limit = number => {
        if (number >= 99) {
            return 99;
        }
        return number;
    }

    const long_date = date => {
        const dt = new Date(date)
        const bulan = dt.toLocaleString('id-ID', { month: 'long' })
        return dt.getDate() + ' ' + bulan + ' ' + dt.getFullYear();
    }


    const currency = value => {

      const newValue = value == null ? 0 : value

      var    number_string = newValue.toString(),
          sisa     = number_string.length % 3,
          rupiah     = number_string.substr(0, sisa),
          ribuan     = number_string.substr(sisa).match(/\d{3}/g);

      if (ribuan) {
          let separator = sisa ? '.' : '';
          rupiah += separator + ribuan.join('.');
      }

      return "Rp. "+rupiah+",-";

    };

    const firs_capitalize = str => {

        if (str == undefined)
            return str
        if (str == null)
            return str

        str = str.toString()

        var splitStr = str.toLowerCase().split(" ");
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] =
                splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        // Directly return the joined string
        return splitStr.join(" ");
    };

    // how to use: this.$filters.capitalize_all(value)
    app.config.globalProperties.$filters = {
      text_wrap, 
      capitalize, 
      capitalize_slug, 
      remove_html_tags, uppercase, limit, long_date, currency, capitalize_all,
      firs_capitalize
    }
})