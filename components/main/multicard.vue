<script setup>
const post = withDefaults(defineProps(), {
  post: {
    title: 'no-title',
    date: 'no-date',
    description: 'no-description',
    image: '/nuxt-blog/no-image_cyyits.png',
    alt: 'no-alt',
    ogImage: '/nuxt-blog/no-image_cyyits.png',
    provider: 'cloudinary',
    tags: () => [],
    published: false,
    type: 'no-type',
  },
})
</script>

<template>
  <template v-if="post?.type == 'foodrating'">
    <article class="group border m-2 overflow-hidden rounded-2xl shadow-lg text-zinc-700">
      <NuxtLink :to="post?.path">
        <NuxtImg
          v-if="post?.image"
          class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-2xl shadow-lg group-hover:scale-[1.05] transition-all duration-500"
          :src="post?.image"
          :alt="post?.alt"
        />
        <div class="p-5">
          <div class="text-black text-sm pt-4 pb-2">
            <div class="flex items-center">
              <LogoDate />
              {{ post?.date }}
            </div>
            <div class="flex items-center gap-1 flex-wrap">
              <LogoTag />
              <template v-for="tag in post?.tags" :key="tag">
                <span>{{ tag }}</span>
              </template>
            </div>
          </div>
          <h2 class="text-2xl font-semibold text-black pb-1 group-hover:text-sky-700">
            {{ post?.title }}
          </h2>
          <p class="text-ellipsis line-clamp-3">restaurante: {{ post?.restaurante }}</p>
          <div class="flex group-hover:underline text-sky-700 items-center pt-2">
            <p>Read More</p>
            <LogoArrow />
          </div>
        </div>
      </NuxtLink>
    </article>
  </template>
  <template v-else>
    <article class="group border m-2 overflow-hidden rounded-2xl shadow-lg text-zinc-700">
      <NuxtLink :to="post?.path">
        <NuxtImg
          class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-2xl shadow-lg group-hover:scale-[1.05] transition-all duration-500"
          :src="post?.image"
          :alt="post?.alt"
        />
        <div class="p-5">
          <div class="text-black text-sm pt-4 pb-2">
            <div class="flex items-center">
              <LogoDate />
              {{ post?.date }}
            </div>
            <div class="flex items-center gap-1 flex-wrap">
              <LogoTag />
              <template v-for="tag in post?.tags" :key="tag">
                <span>{{ tag }}</span>
              </template>
            </div>
          </div>
          <h2 class="text-2xl font-semibold text-black pb-1 group-hover:text-sky-700">
            {{ post?.title }}
          </h2>
          <p class="text-ellipsis line-clamp-3">
            {{ post?.description }}
          </p>
          <div class="flex group-hover:underline text-sky-700 items-center pt-2">
            <p>Read More</p>
            <LogoArrow />
          </div>
        </div>
      </NuxtLink>
    </article>
  </template>
</template>
