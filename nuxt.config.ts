import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
<<<<<<< HEAD
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
=======
/*
  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: ctfConfig.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID
  }
*/
>>>>>>> ed4ecf0 (initial commit after a bit of stubbing things out)
})
