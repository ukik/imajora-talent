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
