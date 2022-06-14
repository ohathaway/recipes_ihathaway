import { ApolloClient,
         InMemoryCache,
         createHttpLink,
        } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
/**
 * This plugin will connect @nuxt/apollojs with @vue/apollo-composable
 */

const httpLink = createHttpLink({
  uri: process.env.CTF_GRAPH_URL
})
const cache = new InMemoryCache()

const config = {
  link: httpLink,
  getAuth: () => `Bearer ${process.env.CTF_CDA_ACCESS_TOKEN}`,
  cache
}
console.debug('CTF_GRAPH_URL: ', process.env.CTF_GRAPH_URL)
// console.debug('httpLink: ', JSON.stringify(httpLink, null, 2))

const client = new ApolloClient(config)
// console.debug('client: ', client)

/*
export default defineNuxtPlugin(nuxtApp => {
  // return provideApolloClient(app.apolloProvider?.defaultClient)
  nuxtApp.vueApp.use(DefaultApolloClient, client)
})
*/

import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'GA_MEASUREMENT_ID'
    }
  })
})
