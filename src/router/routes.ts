import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [


  { path: '/pinia', component: () => import('pages/pinia.vue') },
  { path: '/SlideItem', component: () => import('pages/SlideItem.vue') },

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/IndexPage.vue') },
      // { path: '/DynamicScroller', component: () => import('pages/DynamicScroller.vue') },
      // { path: '/MansoryGridWall', component: () => import('pages/MansoryGridWall.vue') },
      // { path: '/VirtualScrollGrid', component: () => import('pages/VirtualScrollGrid.vue') },
      {
        path: "",
        name: "RegisterPage",
        meta: {
          ssr: true,
          title: 'RegisterPage',
        }, component: () => import("pages/RegisterPage.vue")
        // }, component: () => import("pages/komentar/index.vue")

      },

      {
        path: "/LoginPage",
        name: "LoginPage",
        meta: {
          ssr: true,
          title: 'LoginPage',
        }, component: () => import("pages/LoginPage.vue")
      },
      {
        path: "/ForgetPage",
        name: "ForgetPage",
        meta: {
          ssr: true,
          title: 'ForgetPage',
        }, component: () => import("pages/ForgetPage.vue")
      },
      {
        path: "/ProfilePage",
        name: "ProfilePage",
        meta: {
          ssr: true,
          title: 'ProfilePage',
        }, component: () => import("pages/ProfilePage.vue")
      },
      {
        path: "/password",
        name: "ProfilePasswordPage",
        meta: {
          ssr: true,
          title: 'ProfilePasswordPage',
        }, component: () => import("pages/ProfilePasswordPage.vue")
      },
      {
        path: "/PencarianPage",
        name: "PencarianPage",
        meta: {
          ssr: true,
          title: 'PencarianPage',
        }, component: () => import("pages/PencarianPage.vue")
      },
      {
        path: "/RequestPage",
        name: "RequestPage",
        meta: {
          ssr: true,
          title: 'RequestPage',
        }, component: () => import("pages/RequestPage.vue")
      },

      {
        path: "/DetailVideo",
        name: "DetailVideo",
        meta: {
          ssr: true,
          title: 'DetailVideo',
        }, component: () => import("pages/lists/DetailVideo.vue")
      },
      {
        path: "/DetailYoutube",
        name: "DetailYoutube",
        meta: {
          ssr: true,
          title: 'DetailYoutube',
        }, component: () => import("pages/lists/DetailYoutube.vue")
      },
      {
        path: "/DetailImage",
        name: "DetailImage",
        meta: {
          ssr: true,
          title: 'DetailImage',
        }, component: () => import("pages/lists/DetailImage.vue")
      },
      {
        path: "/DetailAudio",
        name: "DetailAudio",
        meta: {
          ssr: true,
          title: 'DetailAudio',
        }, component: () => import("pages/lists/DetailAudio.vue")
      },


      {
        path: "/komentar",
        name: "komentar",
        meta: {
          ssr: true,
          title: 'komentar',
        }, component: () => import("pages/komentar/index.vue")
      },
      {
        path: "/komentar-semua/:id?",
        name: "komentar-semua",
        meta: {
          ssr: true,
          title: 'komentar-semua',
        }, component: () => import("pages/komentar-semua/index.vue")
      },
      {
        path: "/komentar-balasan/:post_id/:parent_id?",
        name: "komentar-balasan",
        meta: {
          ssr: true,
          title: 'komentar-balasan',
        }, component: () => import("pages/komentar-balasan/index.vue")
      },








      {
        path: "/video-list/:page",
        name: "video_list",
        meta: {
          ssr: true,
          title: 'video-list',
        }, component: () => import("pages/video/list/index.vue")
      },
      {
        path: "/video-komentar-semua/:id/:page",
        name: "video_komentar_semua",
        meta: {
          ssr: true,
          title: 'video-komentar-semua',
        }, component: () => import("pages/video/komentar-semua/index.vue")
      },
      {
        path: "/video-komentar-balasan/:id/:page",
        name: "video_komentar_balasan",
        meta: {
          ssr: true,
          title: 'video-komentar-balasan',
        }, component: () => import("pages/video/komentar-balasan/index.vue"),
        // beforeEnter: (to, from, next) => {
        //   if(to.query?.parent_id === undefined) {
        //     next({ name:'not_found' })
        //   } else {
        //     next()
        //   }
        // }
      },
      {
        path: "/video-create/:id?",
        name: "video_create",
        meta: {
          ssr: true,
          title: 'video-create',
        }, component: () => import("pages/video/create/index.vue")
      },
      // {
      //   path: "/video-edit/:id",
      //   name: "video_edit",
      //   meta: {
      //     ssr: true,
      //     title: 'video-edit',
      //   }, component: () => import("pages/video/create/index.vue")
      // },
      // {
      //   path: "/video-komentar-balasanx/:post_id?",
      //   name: "video-komentar-balasanx",
      //   meta: {
      //     ssr: true,
      //     title: 'video-komentar-balasan',
      //   }, component: () => import("pages/video/komentar-balasan/index.vue")
      // },







      {
        path: "/youtube-list/:page",
        name: "youtube_list",
        meta: {
          ssr: true,
          title: 'youtube-list',
        }, component: () => import("pages/youtube/list/index.vue")
      },
      {
        path: "/youtube-komentar-semua/:id/:page",
        name: "youtube_komentar_semua",
        meta: {
          ssr: true,
          title: 'youtube-komentar-semua',
        }, component: () => import("pages/youtube/komentar-semua/index.vue")
      },
      {
        path: "/youtube-komentar-balasan/:id/:page",
        name: "youtube_komentar_balasan",
        meta: {
          ssr: true,
          title: 'youtube-komentar-balasan',
        }, component: () => import("pages/youtube/komentar-balasan/index.vue"),
      },
      {
        path: "/youtube-create",
        name: "youtube_create",
        meta: {
          ssr: true,
          title: 'youtube-create',
        }, component: () => import("pages/youtube/create/index.vue")
      },
      {
        path: "/youtube-create/:id",
        name: "youtube_edit",
        meta: {
          ssr: true,
          title: 'youtube-edit',
        }, component: () => import("pages/youtube/create/edit.vue")
      },



      {
        path: "/audio-list/:page",
        name: "audio_list",
        meta: {
          ssr: true,
          title: 'audio-list',
        }, component: () => import("pages/audio/list/index.vue")
      },
      {
        path: "/audio-komentar-semua/:id/:page",
        name: "audio_komentar_semua",
        meta: {
          ssr: true,
          title: 'audio-komentar-semua',
        }, component: () => import("pages/audio/komentar-semua/index.vue")
      },
      {
        path: "/audio-komentar-balasan/:id/:page",
        name: "audio_komentar_balasan",
        meta: {
          ssr: true,
          title: 'audio-komentar-balasan',
        }, component: () => import("pages/audio/komentar-balasan/index.vue"),
      },
      {
        path: "/audio-create/:id?",
        name: "audio_create",
        meta: {
          ssr: true,
          title: 'audio-create',
        }, component: () => import("pages/audio/create/index.vue")
      },


      {
        path: "/image-list/:page",
        name: "image_list",
        meta: {
          ssr: true,
          title: 'image-list',
        }, component: () => import("pages/image/list/index.vue")
      },
      {
        path: "/image-komentar-semua/:id/:page",
        name: "image_komentar_semua",
        meta: {
          ssr: true,
          title: 'image-komentar-semua',
        }, component: () => import("pages/image/komentar-semua/index.vue")
      },
      {
        path: "/image-komentar-balasan/:id/:page",
        name: "image_komentar_balasan",
        meta: {
          ssr: true,
          title: 'image-komentar-balasan',
        }, component: () => import("pages/image/komentar-balasan/index.vue"),
      },
      {
        path: "/image-create/:id?",
        name: "image_create",
        meta: {
          ssr: true,
          title: 'image-create',
        }, component: () => import("pages/image/create/index.vue")
      },





      {
        path: "/forms/accounts/profile/:id",
        name: "form_accounts_profile",
        meta: {
          ssr: true,
          title: 'form-accounts-profile',
        }, component: () => import("pages/forms/accounts/profile/index.vue")
      },
      {
        path: "/forms/accounts/password/:id",
        name: "form_accounts_password",
        meta: {
          ssr: true,
          title: 'form-accounts-password',
        }, component: () => import("pages/forms/accounts/password/index.vue")
      },
      {
        path: "/forms/accounts/biodata/:id",
        name: "form_accounts_biodata",
        meta: {
          ssr: true,
          title: 'form-accounts-biodata',
        }, component: () => import("pages/forms/accounts/biodata/index.vue")
      },
      {
        path: "/forms/accounts/social/:id",
        name: "form_accounts_social",
        meta: {
          ssr: true,
          title: 'form-accounts-social',
        }, component: () => import("pages/forms/accounts/social/index.vue")
      },
      {
        path: "/forms/accounts/avatar/:id",
        name: "form_accounts_avatar",
        meta: {
          ssr: true,
          title: 'form-accounts-avatar',
        }, component: () => import("pages/forms/accounts/avatar/index.vue")
      },
      {
        path: "/forms/accounts/banner/:id",
        name: "form_accounts_banner",
        meta: {
          ssr: true,
          title: 'form-accounts-banner',
        }, component: () => import("pages/forms/accounts/banner/index.vue")
      },



      // ORANG KALO NGOMONG MUTER-MUTER, WAJAH-WAJAH KENCING DI CELANA, AUTO KETAR-KETIR




      {
        path: "/account",
        name: "account",
        redirect: { name: 'account_profile' },
        meta: {
          ssr: true,
          title: 'AccountPage',
        }, component: () => import("pages/AccountPage.vue"),
        children: [
          { path: '', name: 'account_profile', component: () => import('pages/AccountProfilePage.vue') },
          { path: 'password', name: 'account_password', component: () => import('pages/AccountPasswordPage.vue') },
          { path: 'biodata', name: 'account_biodata', component: () => import('pages/AccountBiodataPage.vue') },
          { path: 'avatar', name: 'account_avatar', component: () => import('pages/AccountAvatarPage.vue') },
          { path: 'preview', name: 'account_preview', component: () => import('pages/AccountPreviewPage.vue') },


          { path: 'social', name: 'account_social', component: () => import('pages/AccountSocialPage.vue') },
          { path: 'banner', name: 'account_banner', component: () => import('pages/AccountBannerPage.vue') },
          { path: 'carier', name: 'account_carier', component: () => import('pages/AccountCarierPage.vue') },
          { path: 'playlist', name: 'account_playlist', component: () => import('pages/AccountPlaylistPage.vue') },
          { path: 'agenda', name: 'account_agenda', component: () => import('pages/AccountAgendaPage.vue') },
          { path: 'original', name: 'account_original', component: () => import('pages/AccountOriginalPage.vue') },
          { path: 'cover', name: 'account_cover', component: () => import('pages/AccountCoverPage.vue') },
          { path: 'rates', name: 'account_rates', component: () => import('pages/AccountRatesPage.vue') },
          { path: 'perform', name: 'account_perform', component: () => import('pages/AccountPerformPage.vue') },

          { path: 'bank', name: 'account_bank', component: () => import('pages/AccountBankPage.vue') },
          { path: 'wallet', name: 'account_wallet', component: () => import('pages/AccountWalletPage.vue') },
        ]
      },
      {
        path: "/profile",
        name: "profile",
        meta: {
          ssr: true,
          title: 'profile',
        }, component: () => import("pages/profile/index.vue"),
        redirect: { name: 'profile_musisi' },
        children: [
          { path: '/profile/musisi', name: 'profile_musisi', component: () => import('pages/profile/pages/musisi.vue') },
          { path: '/profile/studio', name: 'profile_studio', component: () => import('pages/profile/pages/studio.vue') },
          { path: '/profile/venue', name: 'profile_venue', component: () => import('pages/profile/pages/venue.vue') },
        ]
      },
    ],


  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    name: 'not_found',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
