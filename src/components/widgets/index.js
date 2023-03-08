import { boot } from 'quasar/wrappers'

export default boot( async ({ app, ssrContext, router, store }) => {

app.component("DesktopCameraVideo", () => import('./desktop-camera-video.vue'))
app.component("DesktopCamera", () => import('./desktop-camera.vue'))
// app.component("Disarankan", () => import('./disarankan.vue'))

app.component("AudioPlayerAyatFavorit", () => import('./audio_player_ayat_favorit.vue'))
app.component("AudioPlayer", () => import('./audio_player.vue'))
app.component("MainFooter", () => import('./main_footer.vue'))
app.component("AyatHeader", () => import('./ayat_header.vue'))

app.component("SpinnerOrbit", () => import('./spinner_orbit.vue'))

app.component("AyatDrawerMuratal", () => import('./ayat_drawer_muratal.vue'))

app.component("AppLeftDrawer", () => import('./app_left_drawer.vue'))
app.component("AppRightDrawer", () => import('./app_right_drawer.vue'))
app.component("ActionbarMenu", () => import('./Actionbar_Menu.vue'))
// app.component("MobileChunkRender", () => import('./Mobile_Chunk_Render.vue'))

})
