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
  const tagsString = fs.readFileSync('./doc/tags.json', 'utf8')
  const tags = JSON.parse(tagsString)

  const space = await client.getSpace(process.env.CTF_SPACE_ID)
  const env = await space.getEnvironment('master')
  console.debug('environment response: ', env)
  tags.map((tag) => {
    env.createTag(tag.nicename, tag.name, 'public')
  })
}

run()
