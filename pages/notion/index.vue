<script setup>
const { $notion } = useNuxtApp()
// const { data } = await useAsyncData('notion', () =>
//   $notion.getPageBlocks('c7ca4eca35ee4f8ebe2665a7be719c36')
// )
const { data } = await useAsyncData('notion2', () =>
  $notion.getPageTable('c7ca4eca35ee4f8ebe2665a7be719c36')
)
// https://boloko.notion.site/c7ca4eca35ee4f8ebe2665a7be719c36?v=1c555ba7aec040bb96b6a60e5c807bcc
// https://boloko.notion.site/Foodrating-view-f3912b18fbc94c5ea6733721dec7c4d6
</script>

<template>
  <div>
    <FoodTable :items="data"></FoodTable>
    <!-- <NotionRenderer :blockMap="data" fullPage prism /> -->
  </div>
</template>
