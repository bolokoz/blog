<template>
  <div class="py-5 border-t mt-5 text-zinc-700">
    <div class="px-6 container max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div>
          <p class="text-black text-2xl py-1 font-semibold">Hello from Boloko</p>
          <p class="py-2">
            Bem vindo. Site em constante arrumamento. Nunca sei quando escrever as paradinha em
            ingles ou portugues. Antes feito que perfeito.
          </p>
          <div class="my-3 space-x-3 pb-3">
            <NuxtLink
              to="https://github.com/bolokoz"
              target="_blank"
              class="p-2 bg-gray-300 rounded-md"
              aria-label="Github"
            >
              <Icon name="fa:github" size="1em" />
            </NuxtLink>
            <!-- <NuxtLink
              to="https://www.linkedin.com/in/nur-riyad/"
              target="_blank"
              class="p-2 bg-gray-300 rounded-md"
              aria-label="LinkedIn"
            >
              <Icon name="fa:linkedin-square" size="1em" />
            </NuxtLink> -->
            <!-- <NuxtLink
              to="https://twitter.com/qdnvubp"
              target="_blank"
              class="p-2 bg-gray-300 rounded-md"
              aria-label="Twitter"
            >
              <Icon name="fa:twitter-square" size="1em" />
            </NuxtLink> -->
            <NuxtLink
              to="https://stackoverflow.com/users/16781395/nur-riyad"
              target="_blank"
              class="p-2 bg-gray-300 rounded-md"
              aria-label="StackOverflow"
            >
              <Icon name="fa:stack-overflow" size="1em" />
            </NuxtLink>
          </div>
        </div>
        <div class="flex flex-col my-5 md:my-0 md:justify-self-center">
          <p class="text-black text-base font-semibold">Links rápidos</p>
          <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
          <NuxtLink to="/areas" class="hover:underline">Áreas</NuxtLink>
          <NuxtLink to="/resources" class="hover:underline">Interesses</NuxtLink>
          <NuxtLink to="https://www.nurriyad.xyz/" target="_blank" class="hover:underline">
            Sobre mim
          </NuxtLink>
        </div>
        <div>
          <p class="text-black text-base font-semibold">Contato</p>

          <a
            href="https://wa.me/5567999767835"
            class="block text-center w-full bg-green-700 p-2 rounded-lg text-white mt-3 text-sm"
          >
            WhatsApp
          </a>
          <a
            href="mailto: yurifbeck@gmail.com"
            class="block text-center w-full bg-sky-700 p-2 rounded-lg text-white mt-3 text-sm"
          >
            Email
          </a>
        </div>
      </div>

      <div class="border-t mt-5 text-center p-2">
        2023 - Adaptado do blog
        <a href="https://github.com/nurriyad/blog" target="_blank" rel="nofollow" class="underline"
          >open source do Nurriyad</a
        >
      </div>
    </div>
  </div>
</template>
