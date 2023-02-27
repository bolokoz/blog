<script setup lang="ts">
const route = useRoute()
const { $notion } = useNuxtApp()
const { data, pending } = useLazyAsyncData(`notion-${route.params.id}`, () =>
  $notion.getPageBlocks(route.params.id)
)

const blok = await fetch(`https://api.vue-notion.workers.dev/v1/page/${route.params.id}`)
  .then((res) => res.json())
  .then((data) => data)
  .catch((err) => err)

console.log(blok)
// const { mapPageUrl, pageLinkOptions } = useProps()
</script>

<template>
  <div>
    <!-- id = {{ $route.params.id }} -->
    <div v-if="pending" class="notion">Loading...</div>
    <div v-else>
      <NotionRenderer :blockMap="data" fullPage />
    </div>
    <NuxtLink to="/resources/foodrating">Voltar</NuxtLink>
  </div>
</template>
