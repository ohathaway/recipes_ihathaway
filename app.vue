<template>
  <div>
    <!-- render posts -->
    <ul>
      <li v-for="post in data.posts">{{ post.fields.title}}</li>
    </ul>
  </div>
</template>

<script setup>
import * as contentful from '~/plugins/contentful.js'

const client = contentful.default.createClient()

const { data } = await useAsyncData( 'person', ()  => {
  // console.debug('env keys from app.vue: ', Object.keys(env))
  return Promise.all([
    // fetch the owner of the blog
    client.getEntries({
      'sys.id': process.env.CTF_PERSON_ID
    }),
    // fetch all blog posts sorted by creation date
    client.getEntries({
      content_type: process.env.CTF_BLOG_POST_TYPE_ID,
      order: '-sys.createdAt'
    })
  ]).then(([entries, posts]) => {
    console.debug('entries: ', entries)
    // return data
    return {
      person: entries.items[0],
      posts: posts.items
    }
  }).catch(console.error)
})

console.debug('data: ', JSON.stringify(data, null, 2))
</script>
