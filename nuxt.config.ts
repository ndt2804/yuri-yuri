// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    "@nuxtjs/google-fonts",
    "nuxt-swiper",
  ],
  googleFonts: {
    families: {
      Inter: [400, 700],

      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  },
  swiper: {
    modules: ["autoplay", "effect-creative"],
  },
})
