<script setup lang="ts">
import { makeFirstCharUpper } from '@/utils/helper'

const route = useRoute()

// take category from route params & make first char upper
const area = computed(() => {
  let name = route.params.area || ''
  let strName = ''

  if (name instanceof Array) strName = name.at(0) || ''
  else strName = name
  return makeFirstCharUpper(strName)
})
</script>

<template>
  <div class="container mx-auto">
    <div class="p-6 my-4 mx-3 rounded-md bg-gray-200">
      <h1 class="text-black font-semibold leading-tight text-4xl md:text-5xl my-5">
        Area: #{{ area }}
      </h1>
    </div>
  </div>
</template>
