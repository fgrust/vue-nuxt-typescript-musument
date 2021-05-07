export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'js_challenge_jagaad_alik-ho',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      const urlloader = config.module.rules.find((rule) => {
        if (rule) {
          if (rule.loader && rule.loader.includes('url-loader')) {
            return true
          }

          if (
            rule.use &&
            rule.use.find((item) => item.loader.includes('url-loader'))
          ) {
            return true
          }
        }

        return false
      })
      urlloader.test = /\.(png|jpe?g|gif|webp|avif)$/i
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'svg-inline-loader',
        exclude: /node_modules/,
      })
    },
  },

  // Runtime Configuration
  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.API_URL,
      https: true,
    },
  },
}
