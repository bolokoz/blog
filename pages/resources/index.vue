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

const { data: resources } = await useAsyncData('equal', () => {
  return queryContent('/resources').find()
})

// const directories = computed(() => {
//   return resources.map((d) => d._dir)
// })

useHead({
  title: 'Resources',
  meta: [
    {
      name: 'description',
      content:
        'Blow All the topics are listed on which either I have written a blog or will write a blog in near future.',
    },
  ],
  titleTemplate: "Boloko's resources - %s",
})
</script>
<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <MainHero title="Resources" subtitle="resources de interesse geral" />
    <div class="flex flex-wrap px-6 mt-12 gap-3">
      <template v-for="topic in resources?.map((d) => d._dir)" :key="topic">
        <ResourceCard :title="makeFirstCharUpper(topic)" />
      </template>
    </div>

    <div class="space-y-5 my-5">
      <template v-for="post in resources" :key="post.title">
        <ArchiveCard
          :path="post.path"
          :title="post.title"
          :date="post.date"
          :description="post.description"
          :image="post.image"
          :alt="post.alt"
          :ogImage="post.ogImage"
          :provider="post.provider"
          :tags="post.tags"
          :published="post.published"
        />
      </template>
    </div>
  </main>
</template>
