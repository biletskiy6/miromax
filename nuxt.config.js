import webpack from 'webpack'

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Material+Icons"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  // loading: { color: "#fff" },

  // loading: '@/components/Loading.vue',

  /*
   ** Global CSS
   */
  css: ["@/theme/index.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "@/plugins/vue-swiper", ssr: false },
    { src: "@/plugins/perfect-scrollbar", ssr: false },
    { src: "@/plugins/vue-countdown", ssr: false },
    { src: "@/plugins/youtube-embed", ssr: false },
    { src: "@/plugins/qrcode", ssr: false },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        // global modules

        _: 'lodash'
      })
    ],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
