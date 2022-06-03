<template>
  <TheHeader></TheHeader>
  <!-- render posts -->
  <NuxtPage />
</template>

<script setup>
const route = useRoute()

useHead({
  // titleTemplate: `${route.meta.title} Cooking with the Hathaways`,
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  title: `${route.meta.title} - Cooking with the Hathaways`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'A recipe blog for folks half a bubble off' },
    { name: 'og:title', content: `Cooking with the Hathaways - ${route.meta.title}` }
  ]
})
</script>
