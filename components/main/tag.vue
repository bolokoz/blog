<script setup lang="ts">
interface Props {
  path: string
}

withDefaults(defineProps<Props>(), {
  path: 'No path available',
})

// some random color for tags
const color = [
  '#dc2626',
  '#d97706',
  '#65a30d',
  '#059669',
  '#0891b2',
  '#0284c7',
  '#4f46e5',
  '#7c3aed',
  '#c026d3',
  '#db2777',
]

// get a random number
const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const picAColor = ref(`${color.at(getRandomInt(0, 8))}`)

</script>

<template>
  <div
    class="text-white px-5 py-3 mb-3 rounded hover:underline randbgcolor hover:scale-[1.05] transition-all duration-500"
  >
    <NuxtLink :to="`${path.slice(0, path.lastIndexOf('/')).toLocaleLowerCase()}`" class="text-sm font-extrabold">
      <h1>#{{ path.split('/').slice(-2, -1)[0] }}</h1>
    </NuxtLink>
  </div>
</template>

<style scoped>
.randbgcolor {
  background-color: v-bind(picAColor);
}
</style>
