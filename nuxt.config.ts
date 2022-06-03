import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/apollo'
  ],
  vite: {
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
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },
  apollo: {
    clientConfigs: {
      default: '@/plugins/graphql/config',
    }
  }
})
