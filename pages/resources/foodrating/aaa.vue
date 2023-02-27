<script setup lang="ts">
import type { BlogPost } from '@/types/blog'
const { path } = useRoute()
const articles = await queryContent(path).findOne()

interface Review {
  path: string
  title: string
  date: string
  description: string
  image: string
  alt: string
  ogImage: string
  tags: Array<string>
  published: boolean
  restaurante: string
  prato: string
  nota_sentimental: number
  type: string
  coordenadas: string
  category: string
  valor: number
  nota_tecnica: number
  delivery: boolean
  periodo: string
  _path: string
}

const data = computed(() => {
  return {
    title: articles.prato || 'no-title available',
    description: articles.restaurante || 'not available',
    image: articles.image || '/nuxt-blog/no-image_cyyits.png',
    alt: articles.title || 'sem foto',
    ogImage: articles.image || '/nuxt-blog/no-image_cyyits.png',
    provider: articles.provider || 'cloudinary',
    date: articles.date || 'not-date-available',
    tags: articles.tags || [],
    published: articles.published || false,
    restaurante: articles.restaurante || 'sem-nome',
    prato: articles.prato || 'sem-nome-prato',
    coordenadas: articles.coordenadas || 'sem-coordenada',
    category: articles.category || '',
    valor: articles.valor || 1,
    nota_sentimental: articles.nota_sentimental || 1,
    nota_tecnica: articles.nota_tecnica || 2,
    delivery: articles.delivery || false,
    periodo: articles.periodo || 'almoço',
    _path: articles.path || '/',
  }
})

useHead({
  title: data.value.title || '',
  meta: [
    { name: 'description', content: data.value.description },
    {
      name: 'description',
      content: data.value.description,
    },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    { property: 'og:site_name', content: `Boloko's Blog` },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: `https://bolokoz.netlify.app/${path}`,
    },
    {
      property: 'og:title',
      content: data.value.prato,
    },
    {
      property: 'og:description',
      content: data.value.restaurante,
    },
    {
      property: 'og:image',
      content: data.value.image || data.value.image,
    },
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    { name: 'twitter:site', content: '@bolokozord' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:url',
      content: `https://boloko.netlify.app/${path}`,
    },
    {
      name: 'twitter:title',
      content: data.value.prato,
    },
    {
      name: 'twitter:description',
      content: data.value.restaurante,
    },
    {
      name: 'twitter:image',
      content: data.value.ogImage || data.value.image,
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://bolokoz.netlify.app/${path}`,
    },
  ],
})
</script>

<template>
  <main class="px-6 pt-10 container max-w-5xl mx-auto">
    <header>
      <h1 class="text-3xl md:text-3xl lg:text-5xl m-7 font-bold text-center">
        {{ data.prato || 'prato' }}
      </h1>
      <h2 class="text-xl md:text-2xl lg:text-3xl m-7 font-thin text-center">
        Restaurante: {{ data.restaurante }}
      </h2>
      <NuxtImg
        :src="data.image || ''"
        :alt="data.alt || ''"
        class="m-auto rounded-2xl shadow-lg h-52 md:h-96 w-4/5 content-center object-cover"
      />
      <!-- <p class="text-xs sm:text-sm my-3 max-w-3xl mx-auto text-center text-zinc-600">
        {{ data.description }}
      </p> -->
      <div class="flex w-full justify-center text-xs md:text-base my-8">
        <div class="md:flex text-black content-center gap-8 text-xs sm:text-sm">
          <div class="flex items-center font-semibold">
            <LogoDate />
            <span class="bg-gray-200 rounded-md px-2 py-1 font-semibold">{{
              new Date(data.date).toLocaleDateString('pt-BR') || ''
            }}</span>
          </div>
          <div class="flex items-center gap-2 flex-wrap my-5">
            <LogoTag />
            <span class="bg-gray-200 rounded-md px-2 py-1 font-semibold">{{ data.category }}</span>
          </div>
          <div class="flex items-center gap-2 flex-wrap my-5">
            <Icon name="fa:star" size="1.5em" class="text-yellow" />
            <span class="bg-gray-200 rounded-md px-2 py-1 font-semibold"
              >{{ data.nota_sentimental }} / 3</span
            >
          </div>
          <div class="flex items-center gap-2 flex-wrap my-5">
            <Icon name="fa:dollar" size="1.5em" />
            <span class="bg-gray-200 rounded-md px-2 py-1 font-semibold">R$ {{ data.valor }}</span>
          </div>
          <div class="flex items-center gap-2 flex-wrap my-5">
            <Icon name="ic:outline-access-time" size="1.5em" />
            <span class="bg-gray-200 rounded-md px-2 py-1 font-semibold"> {{ data.periodo }}</span>
          </div>
        </div>
      </div>
    </header>
    <div
      class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-5xl mx-auto prose-zinc prose-img:rounded-lg"
    >
      <ContentRenderer :value="articles">
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>
    </div>
  </main>
</template>
