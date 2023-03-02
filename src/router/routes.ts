import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/DynamicScroller', component: () => import('pages/DynamicScroller.vue') },
      { path: '/MansoryGridWall', component: () => import('pages/MansoryGridWall.vue') },
      { path: '/VirtualScrollGrid', component: () => import('pages/VirtualScrollGrid.vue') },

      {
        path: "/RegisterPage",
        name: "RegisterPage",
        meta: {
          ssr: true,
          title: 'RegisterPage',
        }, component: () => import("pages/RegisterPage.vue")
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
        path: "/account",
        name: "account",
        meta: {
          ssr: true,
          title: 'AccountPage',
        }, component: () => import("pages/AccountPage.vue"),
        children: [
          { path: '', name: 'account_profile', component: () => import('pages/AccountProfilePage.vue') },
          { path: 'password', name: 'account_password', component: () => import('pages/AccountPasswordPage.vue') },
          { path: 'biodata', name: 'account_biodata', component: () => import('pages/AccountBiodataPage.vue') },
          { path: 'avatar', name: 'account_avatar', component: () => import('pages/AccountAvatarPage.vue') },
          { path: 'social', name: 'account_social', component: () => import('pages/AccountSocialPage.vue') },
          { path: 'banner', name: 'account_banner', component: () => import('pages/AccountBannerPage.vue') },
          { path: 'carier', name: 'account_carier', component: () => import('pages/AccountCarierPage.vue') },
          { path: 'playlist', name: 'account_playlist', component: () => import('pages/AccountCarierPage.vue') },
          { path: 'agenda', name: 'account_agenda', component: () => import('pages/AccountCarierPage.vue') },
          { path: 'ciptaan', name: 'account_ciptaan', component: () => import('pages/AccountCarierPage.vue') },
          { path: 'cover', name: 'account_cover', component: () => import('pages/AccountCarierPage.vue') },
          { path: 'rates', name: 'account_rates', component: () => import('pages/AccountCarierPage.vue') },


        ]
      },

    ],


  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
