import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
   // '@nuxtjs/apollo'
  ],
  head: {
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
    ],
    meta: [
      { name: 'msapplication-TileColor', content: '#00aba9' },
      { name: 'theme-color', content: '#ffffff' }
    ]
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },
  vite: {
    mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
    vue: {
      isProduction: process.env.NODE_ENV === 'development' ? false : true
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/colors.scss";'
        }
      }
    }
  },
  css: [
    '@/assets/styles/main.scss'
  ],
  apollo: {
    clientConfigs: {
      default: '@/plugins/graphql/config',
    }
  }
})
