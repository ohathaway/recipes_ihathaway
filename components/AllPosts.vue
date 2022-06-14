<template>
  <div>
    <h1>All Recipes</h1>
    <p>
    </p>
    <section class="all-posts flex-container">
    </section>
  </div>
</template>

<script setup>
/*
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default {
  setup () {
    const { result } = useQuery(gql`
      query AllPosts {
        postCollection (limit: 10) {
        	items {
            title
            wordpressUrl
            attachment {
              title
              description
              contentType
              fileName
              size
              url
              width
              height
            }
            categoriesCollection {
              items{
                ... on Category {
                  nicename
                  name
                }
              }
            }
            tagsCollection {
              items {
              	... on Tag {
                  nicename
                  name
                }
              }
            }
          }
      	}
      }
    `)
  }
}

*/
</script>
