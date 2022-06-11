import { provideApolloClient } from '@vue/apollo-composable'

/**
 * This plugin will connect @nuxt/apollojs with @vue/apollo-composable
 */

export default defineNuxtPlugin(() => {
  return provideApolloClient(app.apolloProvider?.defaultClient)
})
