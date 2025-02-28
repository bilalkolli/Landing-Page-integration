<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'Landing Page integration',
  meta: [
    { name: 'description', content: 'Integration of a Figma Design of Landing Page' }
  ],
  link: [
    {
      rel: 'preload',
      href: '/fonts/Inter_18pt-Regular.ttf',
      as: 'font',
      type: 'font/ttf',
      crossorigin: 'anonymous'
    },
    {
      rel: 'preload',
      href: '/fonts/Gilroy-Bold.ttf',
      as: 'font',
      type: 'font/ttf',
      crossorigin: 'anonymous'
    }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
</script>