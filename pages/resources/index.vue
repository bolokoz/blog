<script lang="ts" setup>
import { makeFirstCharUpper } from '@/utils/helper'
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const topics = [
  'javascript',
  'typescript',
  'git',
  'docker',
  'kubernetes',
  'vue',
  'nuxt',
  'pinia',
  'vuex',
  'firebase',
  'supabse',
  'cypress',
]
const query: QueryBuilderParams = { path: '/areas', limit: 5 }

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(query))

useHead({
  title: 'Categories',
  meta: [
    {
      name: 'description',
      content:
        'Blow All the topics are listed on which either I have written a blog or will write a blog in near future.',
    },
  ],
  titleTemplate: "Boloko's areas - %s",
})
</script>
<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <CategoryHero />
    <pre>{{ navigation }}</pre>
  </main>
</template>
