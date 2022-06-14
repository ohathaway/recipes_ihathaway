import { InMemoryCache } from '@apollo/client/core'

const cache = new InMemoryCache()

export default () => {
  return {
    httpEndpoint: process.env.CTF_GRAPH_URL,
    getAuth: () => `Bearer ${process.env.CTF_CDA_ACCESS_TOKEN}`,
    cache
  }
}
