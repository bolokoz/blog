<script setup>
import { makeFirstCharUpper } from '@/utils/helper'
// import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import FoodRatingCard from '~~/components/resource/FoodRatingCard.vue'

const { data: resources } = await useAsyncData('resources', () => {
  return queryContent('resources', 'foodrating').sort({ date: 1 }).find()
})

const { $notion } = useNuxtApp()
// const { data } = await useAsyncData('notion', () =>
//   $notion.getPageBlocks('c7ca4eca35ee4f8ebe2665a7be719c36')
// )
const { data } = await useAsyncData('notion2', () =>
  $notion.getPageTable('c7ca4eca35ee4f8ebe2665a7be719c36')
)

// const sorted = computed(() => {
//   return data.value?.sort((a,b) => a.last_nom - b.last_nom)
// })

const sorted = computed(() => {
  let formated = data.value?.map((articles) => {
    return {
      id: articles.id,
      prato: articles.Prato || 'sem nome do prato',
      restaurante: articles.Restaurante || 'sem restaurante',
      imagens: articles.fotos || [
        { url: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp' },
      ],
      dia: articles.Dia || '2000-01-01',
      sabor: articles.Sabor || '0/0',
      preco: articles.Preco || 'sem preco',
      // ogImage: articles.ogImage || '/nuxt-blog/no-image_cyyits.png',
      // provider: articles.provider,
      // date: articles.date || 'not-date-available',
      tipo: articles.Tipo || [],
      // published: articles.published || false,
    }
  })
  // return [
  //   ...chunks(
  //     formated.sort((a, b) => a.dia - b.dia),
  //     6
  //   ),
  // ]
  return formated.sort((a, b) => a.dia - b.dia)
})

function* chunks(arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n)
  }
}

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
      <!-- <template v-for="topic in [...new Set(resources?.map((d) => d.category))]" :key="topic">
        <ResourceHero :title="makeFirstCharUpper(topic)" />
      </template> -->
    </div>

    <iframe
      src="https://5n4pewjexnr297.embednotionpage.com/c7ca4eca35ee4f8ebe2665a7be719c36"
      style="width: 100%; height: 800px; border: 2px solid #d6d3d1; border-radius: 4px; padding: 0"
    ></iframe>

    <div class="space-y-5 my-5">
      <!-- <template v-for="post in resources" :key="post.title">
        <FoodRatingCard v-bind="post" />
      </template> -->
      <!-- <FoodCard v-for="item in sorted" :item="item"></FoodCard> -->
      <!-- <PhotoGrid v-for="chunk in sorted" :items="chunk"></PhotoGrid> -->
      <!-- <FoodTable :items="sorted"></FoodTable> -->
    </div>
  </main>
</template>
