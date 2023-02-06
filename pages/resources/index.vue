<script lang="ts" setup>
import { makeFirstCharUpper } from '@/utils/helper'
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const { data: foodrating } = await useAsyncData('foodrating', () => {
  return queryContent('resources', 'foodrating').sort({ date: 1 }).find()
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
      <template v-for="topic in [...new Set(foodrating?.map((d) => d._dir))]" :key="topic">
        <ResourceHero :title="makeFirstCharUpper(topic)" />
      </template>
    </div>

    <div class="space-y-5 my-5">
      <template v-for="post in foodrating" :key="post.title">
        <ResourceFoodRatingCard v-bind="post" />
      </template>
    </div>
  </main>
</template>
