import { boot } from 'quasar/wrappers'

export default boot( async ({ app, ssrContext, router, store }) => {

app.component("ToolbarKomentar", () => import('./komentar.vue'))
app.component("ToolbarArtikel", () => import('./artikel.vue'))
app.component("ToolbarKonsultasi", () => import('./konsultasi.vue'))
app.component("ToolbarKonsultasiJawaban", () => import('./konsultasi_jawaban.vue'))
app.component("ToolbarKonsultasiJawaban2", () => import('./konsultasi_jawaban_2.vue'))

app.component("ToolbarDibawahVideo", () => import('./dibawah-video.vue'))
app.component("ToolbarDibawahVideoRekomendasi", () => import('./dibawah-video-rekomendasi.vue'))

app.component("ToolbarDibawahStatus", () => import('./dibawah-status.vue'))
app.component("ToolbarDibawahStatusRekomendasi", () => import('./dibawah-status-rekomendasi.vue'))
app.component("ToolbarDibawahUtamaKonsultasi", () => import('./dibawah-konsultasi.vue'))

app.component("ToolbarDibawahUtamaKonsultasiJawab1", () => import('./dibawah-konsultasi-jawab-1.vue'))
app.component("ToolbarDibawahUtamaKonsultasiJawab2", () => import('./dibawah-konsultasi-jawab-2.vue'))

app.component("ToolbarListVideo", () => import('./list-video.vue'))

app.component("ToolbarNotifikasiResmi", () => import('./notifikasi-resmi.vue'))


app.component("ToolbarAlquranKutipan", () => import('./alquran_kutipan.vue'))

})
// <ToolbarKomentar />
// <ToolbarContent />
// <ToolbarKonsultasi />
// <ToolbarDibawahVideo />
// <ToolbarDibawahStatus />
// <ToolbarDibawahUtamaKonsultasi />
// <ToolbarDibawahUtamaKonsultasiJawab1 />
// <ToolbarDibawahUtamaKonsultasiJawab2 />
// <ToolbarListVideo />
