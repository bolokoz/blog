<script lang="ts" setup>
import { makeFirstCharUpper } from '@/utils/helper'
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import FoodRatingCard from '~~/components/resource/FoodRatingCard.vue'

const { data: resources } = await useAsyncData('resources', () => {
  return queryContent('resources', 'foodrating').sort({ date: 1 }).find()
})

// const directories = computed(() => {
//   return resources.map((d) => d._dir)
// })

useHead({
  title: 'Interesses',
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
    <MainHero title="Avaliação de comidas" subtitle="Não tenho nenhuma qualificação" />
    <div class="flex flex-wrap px-6 mt-12 gap-3">
      <template v-for="topic in [...new Set(resources?.map((d) => d.category))]" :key="topic">
        <ResourceHero :title="makeFirstCharUpper(topic)" />
      </template>
    </div>

    <div class="space-y-5 my-5">
      <template v-for="post in resources" :key="post.title">
        <FoodRatingCard v-bind="post" />
      </template>
    </div>
  </main>
</template>
