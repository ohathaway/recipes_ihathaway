#!/usr/bin/env node
const fs = require('fs')
const contentful = require('../node_modules/contentful-management')

const tagsString = fs.readFileSync('./doc/tags.json', 'utf8')
const tags = JSON.parse(tagsString)
const tagsImport = []

const client = contentful.createClient({
  // accessToken: 'CFPAT-v4X-d8J9Y2BKQXCY2et-Bat4tLa8BQiZUIXOFpu5Nek',
  accessToken: 'CFPAT-OPgsAnqUELnD75dsQrB93Llky2D9vXfRjU-vCwRucRo',
  space: process.env.CTF_SPACE_ID,
  environment: 'master',
})


const run = async () => {
  const space = await client.getSpace(process.env.CTF_SPACE_ID)
  const env = await space.getEnvironment('master')
  const entries = await env.getEntries({ content_type: 'tag' })
  console.debug('Tag entries: ', entries)
  // console.debug('fields: ', entries.items[0].fields)

}

run()
