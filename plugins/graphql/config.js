export default (context) => {
  return {
    httpEndpoint: process.env.CTF_GRAPH_URL,
    getAuth: () => `Bearer ${process.env.CTF_CDA_ACCESS_TOKEN}`
  }
}
