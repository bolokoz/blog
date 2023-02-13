<script lang="ts" setup>
interface Props {
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

withDefaults(defineProps<Props>(), {
  path: '/',
  title: 'no-title',
  date: 'no-date',
  description: 'no-description',
  image: '',
  alt: 'no-alt',
  ogImage: '/nuxt-blog/no-image_cyyits.png',
  tags: () => [],
  published: false,
  restaurante: 'sem-nome',
  prato: 'sem-nome-prato',
  coordenadas: 'sem-coordenada',
  category: '',
  valor: 1,
  nota_sentimental: 1,
  nota_tecnica: 2,
  delivery: false,
  periodo: 'almoço',
  _path: '/',
})
</script>

<template>
  <article class="group border m-2 rounded-2xl overflow-hidden shadow-md text-zinc-700">
    <NuxtLink :to="_path" class="grid grid-cols-1 sm:grid-cols-10 gap-1">
      <div v-if="image != ''" class="sm:col-span-3">
        <NuxtImg
          class="h-full w-full object-cover object-center rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none shadow-lg group-hover:scale-[1.05] transition-all duration-500"
          :src="image"
          :alt="alt"
        />
      </div>
      <div class="sm:col-span-7 p-5">
        <h2 class="text-2xl font-semibold text-black pb-1 group-hover:text-sky-700">
          {{ prato }}
        </h2>
        <h2 class="text-xl text-slate pb-1 group-hover:text-sky-700">
          Restaurante: {{ restaurante }}
        </h2>

        <p class="text-ellipsis line-clamp-2">
          {{ description }}
        </p>
        <div class="text-black text-sm pt-2 pb-1 sm:space-y-1 md:flex md:space-x-6">
          <div class="flex items-center">
            <LogoDate />
            {{ new Date(date).toLocaleDateString('pt-BR') }}
          </div>
          <div class="flex items-center gap-1 flex-wrap">
            <LogoTag />
            {{ category }}
          </div>
          <div class="flex items-center gap-1 flex-wrap">
            <Icon name="fa:star" size="1em" class="text-yellow" />
            {{ nota_sentimental }} / 3
          </div>
        </div>
        <div class="flex group-hover:underline text-sky-700 items-center pt-2">
          <p>Ver mais</p>
          <LogoArrow />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
