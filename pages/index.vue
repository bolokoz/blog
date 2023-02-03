<script lang="ts" setup>
// Get Last 6 Publish Post from the content/blog directory
const { data } = await useAsyncData('home', () =>
  queryContent('/').limit(6).sort({ _id: -1 }).find()
)

const formatedData = computed(() => {
  return data.value?.map((articles) => {
    return {
      path: articles._path,
      dir: articles._dir,
      title: articles.title || 'no-title available',
      description: articles.description || 'no-descriptoin available',
      image: articles.image || '/nuxt-blog/no-image_cyyits.png',
      alt: articles.alt || 'no alter data available',
      ogImage: articles.ogImage || '/nuxt-blog/no-image_cyyits.png',
      provider: articles.provider,
      date: articles.date || 'not-date-available',
      tags: articles.tags || [],
      published: articles.published || false,
    }
  })
})

useHead({
  title: 'Home',
  script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],

  meta: [
    {
      name: 'description',
      content: 'Engineering, Web Developmen and never knowing if I should write in english or not',
    },
  ],
  titleTemplate: "Boloko's Mind - %s",
})
</script>
<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <MainHero title="Ultimas atualizações" subtitle="Todos os assuntos" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <template v-for="post in formatedData" :key="post.title">
        <MainCard
          :path="post.path"
          :dir="post.dir"
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
      <template v-if="data?.length === 0">
        <BlogEmpty />
      </template>
    </div>
  </main>
</template>
