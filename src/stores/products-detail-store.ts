import { defineStore } from 'pinia';
import { ProductInterface, ReviewInterface } from 'src/models/product-detail';

export const useProductsDetailStore = defineStore('products_detail', {
  state: () => ({
    item: <ProductInterface> {
      carousal: {
        title:`<div class="text-h2 text-bold q-px-md">
      DOMINION DOT RUMBLE: <br> ORIGINAL EDITION
    </div>
    <div class="text-h6 q-mt-lg q-px-md text-weight-regular">
      Like UNO game which is combined with ACTION cards and unique original gameplay
      <div class="text-h2 q-mt-md text-red font_bebas">"I am addicted to"</div>
    </div>
    <div class="text-h2 q-mt-lg ">
      $19.99 USD
    </div>`,
        image_xs:'/images/products-slide/dominion-xs.webp',
        image_md:'/images/products-slide/dominion-md.webp',
        image_lg:'/images/products-slide/dominion-lg.webp',
        image_alt:'Card Game Dominion Dot Rumble',
      },
      manual: {
        video:'https://www.youtube.com/embed/Z2EbW7EQvOQ',
        step: [
          '/images/presentasi-dominion/Slide1.PNG',
          '/images/presentasi-dominion/Slide2.PNG',
          '/images/presentasi-dominion/Slide3.PNG',
          '/images/presentasi-dominion/Slide4.PNG',
          '/images/presentasi-dominion/Slide5.PNG',
          '/images/presentasi-dominion/Slide6.PNG',
        ],
        route_name:'instruction_slug',
        route_param:'dominion',
      },
      description: {
        tab1_img:'/images/products-description/image_card_container_1.webp',
        tab2_img:'/images/products-description/image_card_container_2.webp',
        tab1_text:`<div class="text-h4 font_bebas">Ulasan Singkat</div>
        <div class="text-18 q-mt-md">
          DOMINION DOT RUMBLE adalah versi fusion terbaik antara Yu-Gi-Oh & Domino & Uno yang sangat strategis dan
          penuh kejutan. Pemain berlomba menghabiskan kartu di tangan secepat mungkin, melempar dadu untuk
          mementukan takdir permainan, gunakan kartu aksi untuk menciptakan kekacauan, provokasi musuhmu agar dia
          memihakmu dan menguntungkanmu, kadang menjadi jahat diperlukan agar menang, tapi keberuntungan bisa saja
          terjadi.
          <br><br>
          Saat ini "DOMINION DOT RUMBLE" sudah tersedia untuk dimainkan.
        </div>`,
        tab2_text:`<div class="text-h4 font_bebas">Daftar Isi</div>
        <div class="text-h6 q-mt-md">
          <ul>
            <li>
              64 DOT Cards
            </li>
            <li>
              4 RAINBOW Even/Odd Cards
            </li>
            <li>
              26 ACTION Cards (Random)
            </li>
            <li>
              2 Dices
            </li>
            <li>
              1 Playmate (Dayak Ornament)
            </li>
            <li>
              1 Tuck Box
            </li>
          </ul>
        </div>`,
      },
      information:[
        {
          id:0,
          title:`PRODUK APA YANG KOMPATIBEL DENGAN GAME INI?`,
          description:`Anda dapat membeli ACTION BOOSTER PACK untuk ditambahkan dalam permainan.`,
        },
        {
          id:1,
          title:`BAHASA APA YANG TELAH DITERJEMAHKAN GAME INI?`,
          description:`Tersedia: Indonesia, English.
          <br>
          Rencana: Prancis (Kanada), Prancis (Eropa), Spanyol, Italia, Portugis Brasil, Portugis (Eropa), Belanda,
          Jerman, Polandia, Ceko/Slowakia, Rumania, Nordik, Tionghoa Sederhana, Tionghoa Tradisional, Korea,
          Lituania, Latvia, Estonia, Bulgaria, Hongaria, Afrikaans/Inggris, Jepang, Thailand, Yunani, Serbia,
          Kroasia, dan Slovenia.
          <br>
          Periksa pengecer lokal Anda.`,
        },
      ],
      testimonial: {
        video:'https://www.youtube.com/embed/hEg5R9bkkgs',
        text:'"Ini mudah dimainkan seperti Uno, tapi butuh strategi & taktik untuk menang, ada banyak kartu ACTION penuh kejutan. Lucu, seru, baru..."',
      },
      id: 1,
      name:'dominion dot rumble: original edition starter pack',
      price: 20,
      unit: 1,
      img: '/images/products/product_1.webp',
      weight:150,
      discount:7.5,
      stock:4,
      review:55,
      rating:4.5,
      created_by:'Megaman',
      year:2014,
      slug:'dominion',
      best_seller:true,
      age:'Usia 7+',
      players:'2-6',
      duration:'30 Min',
    },
    review: <ReviewInterface> [
      {
        id: 0,
        title: 'GREAT',
        description: 'Love it tons of fun',
        rating: 3,
        created_at: '2 days ago',
        like: 4,
        dislike: 2,
        verified: true,
        profile: {
          name: 'Ashley G.',
          email: '',
          about: '',
          avatar: '',
        },
        images: [],
      }
    ],
    total_rating:4.3,
    pagination: {
      last_page: 2,
      current_page: 1,
    },
    story:`<div data-v-6f8ae8a8="">
    <div class="text-h1 font_bebas bg-dark text-center text-white q-py-xl">Our Story</div>
    <div class="q-mb-xl bg-image-repeat-y-1x bg-black" style="border: 1px solid white;">
      <div class="bg-image-dayak-2 flex flex-center q-py-xl">
        <div class="row flex flex-center text-white text-center">
          <div class="col-10 text-h3"> Halo semua, apa kabar? </div>
          <div class="col-10 text-h5 q-mt-md"> Selamat datang di toko resmi <b>
              <em>Dominion Dot Rumble</em>
            </b>
          </div>
        </div>
      </div>
      <div class="bg-black flex flex-center" data-v-bd70e204="">
        <img loading="lazy" alt="Card Game Dominion Dot Rumble" src="/src/assets/playmate.png" data-v-bd70e204="" style="height: auto; width: 85%;">
      </div>
      <div class="bg-image-3xx flex flex-center" data-v-15ddb1e8="" style="min-height: 450px;">
        <div class="row flex flex-center text-center q-my-xl" data-v-15ddb1e8="">
          <div class="text-white q-mb-sm col-12 text-h3" data-v-15ddb1e8="">Visi Misi</div>
          <h2 class="text-white q-mb-sm col-12 text-h3" data-v-15ddb1e8="">Dominion Dot Rumble</h2>
          <div class="q-item__label q-item__label--header text-white col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-11" data-v-15ddb1e8="">Ingin membawa nuansa kekeluargaan dalam permainan nyata</div>
          <div class="text-white col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-11 text-h4 q-mt-sm" data-v-15ddb1e8=""> "Pilihan baru mendapatkan hiburan tanpa layar gadget, dan bersenang-senang sambil berinteraksi" </div>
          <div class="text-white col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-11 text-h6 q-mt-lg" data-v-15ddb1e8=""> Langsung tatap muka melihat senyum keceriaan yang nyata </div>
          <div class="text-white col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-11 q-mt-md" data-v-15ddb1e8=""> Membawa keceriaan bersama dalam canda tawa pertemanan &amp; kekeluargaan, bagi kami adalah mimpi yang patut diperjuangkan </div>
          <div class="col-7 col-sm-6 col-xs-10 flex flex-center q-mt-lg" data-v-15ddb1e8="">
            <div class="q-img q-img--menu" role="img" aria-label="Card Game Dominion Dot Rumble" data-v-15ddb1e8="">
              <div style="padding-bottom: 64.4567%;"></div>
              <div class="q-img__container absolute-full">
                <img class="q-img__image q-img__image--with-transition q-img__image--loaded" loading="lazy" fetchpriority="auto" aria-hidden="true" draggable="false" src="/src/assets/cat_1.webp" style="object-fit: cover; object-position: 50% 50%;">
              </div>
              <div class="q-img__content absolute-full q-anchor--skip"></div>
            </div>
          </div>
          <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-11 q-pa-lg text-white bg-negative text-h6" data-v-15ddb1e8=""> "Hidup adalah pilihan, menjadi cerdik untuk menang atau berharap keberuntungan kecil..." <br data-v-15ddb1e8="">
            <em class="text-body1" data-v-15ddb1e8="">cat's quote</em>
          </div>
        </div>
      </div>
      <div class="my_border"></div>
      <div class="bg-image-3xx flex flex-center" data-v-166a9cf2="" style="min-height: 450px;">
        <div class="row flex flex-center text-center" data-v-166a9cf2="">
          <h2 class="text-white q-mt-none col-12" data-v-166a9cf2="">Dominion Dot Rumble</h2>
          <div class="text-white col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-10 text-h6" data-v-166a9cf2=""> Ini adalah permainan yang penuh dengan tipu daya, provokasi, kebohongan, taktik, politik untuk bisa menang. Siapa paling cepat menghabiskan kartu di tangan adalah pemenangnya. Tentu saja itu tidak mudah, karena takdir pemenang tidak pernah bisa ditebak. Jangan bergantung pada keberuntungan, itu sulit akan terjadi di <b data-v-166a9cf2="">
              <em data-v-166a9cf2="">Dominion Dot Rumble</em>
            </b> ini. Atur rencana licikmu, itu adalah pilihan yang tepat. Mudah dimainkan sulit dimenangkan. </div>
        </div>
      </div>
      <div class="my_border"></div>
      <div class="flex flex-center bg-image-xx" data-v-1686cbf4="" style="min-height: 450px;">
        <div class="row flex flex-center text-white text-center" data-v-1686cbf4="">
          <h4 class="col-md-8 col-sm-9 col-xs-11" data-v-1686cbf4=""> Fakta tentang <em data-v-1686cbf4="">
              <b data-v-1686cbf4="">Dominion Dot Rumble</b>
            </em> yang kamu harus tahu: </h4>
          <div class="col-md-8 col-sm-9 col-xs-10 flex flex-center" data-v-1686cbf4="">
            <div class="q-card" data-v-1686cbf4="" style="width: 400px;">
              <div class="q-img q-img--menu" role="img" aria-label="Card Game Dominion Dot Rumble" data-v-1686cbf4="">
                <div style="padding-bottom: 100%;"></div>
                <div class="q-img__container absolute-full">
                  <img class="q-img__image q-img__image--with-transition q-img__image--loaded" loading="lazy" fetchpriority="auto" aria-hidden="true" draggable="false" src="/src/assets/do_you_know.webp" style="object-fit: cover; object-position: 50% 50%;">
                </div>
                <div class="q-img__content absolute-full q-anchor--skip"></div>
              </div>
            </div>
          </div>
          <div class="text-18 col-md-8 col-sm-8 col-xs-12 text-left q-pr-lg" data-v-1686cbf4="">
            <ul data-v-1686cbf4="">
              <li data-v-1686cbf4="">
                <span class="" data-v-1686cbf4="">Diciptakan tahun 2012 oleh maniak Card Game Yu-Gi-Oh &amp; TCG lainnya</span>
              </li>
              <li data-v-1686cbf4="">
                <span class="" data-v-1686cbf4="">Dia seoarang Programmer Web &amp; Mobile yang ingin seru-seruan bareng</span>
              </li>
              <li data-v-1686cbf4="">
                <span class="" data-v-1686cbf4="">Lolos ajang kompetisi bisnis mahasiswa indonesia (KBMI) 2019 nasional</span>
              </li>
              <li data-v-1686cbf4="">
                <span class="" data-v-1686cbf4="">Jadi peserta EXPO KBMI 2019 Batam</span>
              </li>
              <li data-v-1686cbf4="">
                <span class="" data-v-1686cbf4="">Sudah dimainkan banyak komunitas di Samarinda</span>
              </li>
              <li data-v-1686cbf4="">
                <span class="" data-v-1686cbf4="">Review positif, penuh kegilanaan, penuh kejutan, penuh keceriaan</span>
              </li>
              <li data-v-1686cbf4="">
                <span class="" data-v-1686cbf4="">Tentukan siapa yang berkuasa dengan permainan ini</span>
              </li>
            </ul>
          </div>
          <h5 class="col-md-8 col-sm-9 col-xs-11" data-v-1686cbf4=""> ...fakta akan terus berlanjut, kami baru saja launching (official release)... </h5>
        </div>
      </div>
      <div class="my_border"></div>
      <div class="flex flex-center bg-image-2xx" data-v-16160fec="" style="min-height: 450px;">
        <div class="row flex flex-center text-white text-center" data-v-16160fec="">
          <h4 class="col-md-8 col-sm-9 col-xs-11 q-px-md" data-v-16160fec=""> Apa target <em data-v-16160fec="">
              <b data-v-16160fec="">Dominion Dot Rumble</b>
            </em> yang kamu harus tahu: </h4>
          <div class="col-md-8 col-sm-9 col-xs-10 flex flex-center" data-v-16160fec="">
            <div class="q-card q-pa-xl" data-v-16160fec="" style="width: 400px;">
              <div class="q-img q-img--menu" role="img" aria-label="Card Game Dominion Dot Rumble" data-v-16160fec="">
                <div style="padding-bottom: 100%;"></div>
                <div class="q-img__container absolute-full">
                  <img class="q-img__image q-img__image--with-transition q-img__image--loaded" loading="lazy" fetchpriority="auto" aria-hidden="true" draggable="false" src="/src/assets/target.webp" style="object-fit: cover; object-position: 50% 50%;">
                </div>
                <div class="q-img__content absolute-full q-anchor--skip"></div>
              </div>
            </div>
          </div>
          <div class="text-18 col-md-8 col-sm-8 col-xs-12 text-left q-pr-lg" data-v-16160fec="">
            <ul data-v-16160fec="">
              <li data-v-16160fec="">
                <span class="" data-v-16160fec="">Melakukan fundraising di Kickstarter menuju pasar internasional</span>
              </li>
              <li data-v-16160fec="">
                <span class="" data-v-16160fec="">Bekerjasama dengan TheGameCrafter.com untuk menjangkau pasar Amerika</span>
              </li>
              <li data-v-16160fec="">
                <span class="" data-v-16160fec="">Membuka jaringan penjualan online di Amazon.com dan e-commerce global lainnya</span>
              </li>
              <li data-v-16160fec="">
                <span class="" data-v-16160fec="">Mencetak penjualan 1 juta kopi pertama</span>
              </li>
              <li data-v-16160fec="">
                <span class="" data-v-16160fec="">Melakukan update fitur-fitur terbaru</span>
              </li>
              <li class="flex items-start" data-v-16160fec="">
                <span class="q-pr-md" data-v-16160fec="">Mendapatkan ulasan positif 4-5 bintang</span>
              </li>
              <li data-v-16160fec="">
                <span class="" data-v-16160fec="">Menjadi salah satu permainan kasual &amp; keluarga paling diminati</span>
              </li>
              <li data-v-16160fec="">
                <span class="" data-v-16160fec="">Mengembangkan <b data-v-16160fec="">Dominion Dot Rumble</b> versi mobile/desktop game </span>
              </li>
            </ul>
          </div>
          <h5 class="col-md-7 col-sm-9 col-xs-11" data-v-16160fec=""> ...terus dukung industri permainan Indonesia dengan membeli <b data-v-16160fec="">Dominion Dot Rumble</b> asli di website resmi, kami membutuhkan sumber daya finansial untuk mewujudkan mimpi-mimpi besar... </h5>
        </div>
      </div>
      <div class="my_border"></div>
      <div class="bg-image-3xx flex flex-center" data-v-775af1e8="">
        <div class="row flex flex-center text-center q-py-xl" data-v-775af1e8="">
          <h2 class="text-white q-mt-none col-12" data-v-775af1e8="">How it works</h2>
          <div class="text-white col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-10 text-h6" data-v-775af1e8=""> Ini adalah permainan yang penuh dengan tipu daya, provokasi, kebohongan, taktik, politik untuk bisa menang. Siapa paling cepat menghabiskan kartu di tangan adalah pemenangnya. Tentu saja itu tidak mudah, karena takdir pemenang tidak pernah bisa ditebak. Jangan bergantung pada keberuntungan, itu sulit akan terjadi di <b data-v-775af1e8="">
              <em data-v-775af1e8="">Dominion Dot Rumble</em>
            </b> ini. Atur rencana licikmu, itu adalah pilihan yang tepat. Mudah dimainkan sulit dimenangkan. </div>
        </div>
      </div>
      <div class="bg-image-dayak-3 flex flex-center" style="min-height: 200px;">
        <div class="flex flex-center text-white text-center q-mb-xl">
          <div class="q-mx-lg text-h3 q-mb-xl">Tunggu apa lagi!!! Yuk mainkan...</div>
        </div>
      </div>
    </div>
  </div>`
  }),
  getters: {
    get_total_rating:(state) => state.total_rating,
    get_best_seller:(state) => state.item.best_seller,
    get_out_of_stock:(state) => state.item.stock <= 0,
    get_stock:(state) => state.item.stock,

    get_item:(state) => state.item,
    get_item_carousal:(state) => state.item.carousal,
    get_item_manual:(state) => state.item.manual,
    get_item_description:(state) => state.item.description,
    get_item_information:(state) => state.item.information,
    get_item_testimonial:(state) => state.item.testimonial,

    get_pagination:(state) => state.pagination,
    get_review:(state) => state.review,
    get_story:(state) => state.story,
  },
  actions: {
    addItem(produk: any) {
    },
  },
});
