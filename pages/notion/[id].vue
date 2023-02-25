<script setup lang="ts">
const route = useRoute()
const { $notion } = useNuxtApp()
const { data, pending } = useLazyAsyncData(`notion-${route.params.id}`, () =>
  $notion.getPageBlocks(route.params.id)
)
// const { mapPageUrl, pageLinkOptions } = useProps()
</script>

<template>
  <div>
    <!-- id = {{ $route.params.id }} -->
    <div v-if="pending" class="notion">Loading...</div>
    <div v-else>
      <NotionRenderer :blockMap="data" fullPage />
    </div>
    <NuxtLink to="/notion">Voltar</NuxtLink>
  </div>
</template>
