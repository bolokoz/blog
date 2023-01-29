<script setup lang="ts">
let isDark = ref(false)
</script>

<template>
  <div class="py-5 border-b text-zinc-700">
    <div class="flex px-6 container max-w-5xl justify-between mx-auto items-baseline">
      <ul class="flex items-baseline space-x-5">
        <li class="">
          <NuxtLink to="/" class="text-2xl text-black font-bold"> Boloko | mind </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects"> Projects </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/areas"> Areas </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/resources"> Resources </NuxtLink>
        </li>
      </ul>
      <ul class="flex items-center space-x-3">
        <!-- <li>
          <NuxtLink to="/blog"> Archive </NuxtLink>
        </li> -->
        <li title="About Me">
          <NuxtLink to="https://www.nurriyad.xyz/" aria-label="About me">
            <Icon size="1.2em" class="cursor-pointer" name="About" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
