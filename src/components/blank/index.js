import { boot } from 'quasar/wrappers'

export default boot( async ({ app, ssrContext, router, store }) => {
  app.component("BlankArtikel", () => import('./artikel.vue'))
  app.component("BlankCari", () => import('./cari.vue'))
  app.component("BlankFavorit", () => import('./favorit.vue'))
  app.component("BlankKomentar", () => import('./komentar.vue'))
  app.component("BlankProfil", () => import('./profil.vue'))
  app.component("BlankSuka", () => import('./suka.vue'))
})

