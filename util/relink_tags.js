#!/usr/bin/env node
const fs = require('fs')
const contentfulManagement = require('../node_modules/contentful-management')

const tagsString = fs.readFileSync('./doc/tags.json', 'utf8')
const tags = JSON.parse(tagsString)
const tagsImport = []

const mgmtClient = contentfulManagement.createClient({
  accessToken: 'CFPAT-OPgsAnqUELnD75dsQrB93Llky2D9vXfRjU-vCwRucRo',
  space: process.env.CTF_SPACE_ID,
  environment: 'master'
})


const run = async () => {
  const space = await mgmtClient.getSpace(process.env.CTF_SPACE_ID)
  const env = await space.getEnvironment('master')
  const entries = await env.getEntries({ content_type: 'post' })
  // console.debug('posts: ', entries)
  entries.items[0].fields.tags['en-US'].map( async ({ sys }) => {
    const wpTag = await env.getEntry(sys.id)
    console.debug('this tag id: ', wpTag.fields.nicename['en-US'])
    entries.items[0].metadata.tags = [ wpTag.fields.nicename['en-US'] ]
  })
  // console.debug('fields: ', entries.items[0].fields.tags['en-US'])

}

run()
