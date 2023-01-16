<script lang="ts" setup>
interface Props {
  title: string,
  subtitle: string,
}
withDefaults(defineProps<Props>(), {
  title: 'Projects',
  subtitle: 'Here you will find all the blog posts I have written & published on this site.'
})
</script>

<template>
  <div class="container mx-auto mb-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 items-center">
      <div class="px-6">
        <h1 class="text-black font-semibold leading-tight text-4xl md:text-5xl my-5">{{ title }}</h1>
        <p>{{ subtitle }}</p>
      </div>
      <div class="px-6 justify-self-center">
        <LogoDogpow />
      </div>
    </div>
  </div>
</template>
