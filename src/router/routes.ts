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
        path: "/video-list/:page?",
        name: "video-list",
        meta: {
          ssr: true,
          title: 'video-list',
        }, component: () => import("pages/video/list/index.vue")
      },
      {
        path: "/video-komentar-semua/:id?",
        name: "video-komentar-semua",
        meta: {
          ssr: true,
          title: 'video-komentar-semua',
        }, component: () => import("pages/video/komentar-semua/index.vue")
      },
      {
        path: "/video-komentar-balasan/:id/:page",
        name: "video-komentar-balasan",
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

      // {
      //   path: "/video-komentar-balasanx/:post_id?",
      //   name: "video-komentar-balasanx",
      //   meta: {
      //     ssr: true,
      //     title: 'video-komentar-balasan',
      //   }, component: () => import("pages/video/komentar-balasan/index.vue")
      // },




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
