<script setup>
const props = defineProps(['items'])
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <!-- <th scope="col" class="p-4">
            <div class="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th> -->
          <th scope="col" class="px-6 py-3">Prato</th>
          <th scope="col" class="px-6 py-3 invisible sm:visible">Restaurante</th>
          <th scope="col" class="px-6 py-3">Rating</th>
          <th scope="col" class="px-6 py-3">Preço</th>
          <th scope="col" class="px-6 py-3">Dia</th>
          <!-- <th scope="col" class="px-6 py-3">Mais</th> -->
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in items"
          :key="item.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
          >
            <img class="w-12 h-12 rounded-full" :src="item?.imagens[0]?.url" alt="Jese image" />
            <div class="pl-3">
              <div class="text-base font-semibold">{{ item.prato }}</div>
              <div class="font-normal text-gray-500  sm:hidden">{{ item.restaurante }}</div>
            </div>
          </th>
          <td class="px-6 py-4 invisible sm:visible">{{ item.restaurante }}</td>
          <td class="px-6 py-4">{{ item.sabor }}</td>
          <td class="px-6 py-4">
            <div class="flex items-center">
              <!-- <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> -->
              R$ {{ item.preco }}
            </div>
          </td>
          <td class="px-6 py-4">
            <td>{{ item.dia }}</td>
            <!-- <NuxtLink
              :to="`/resources/foodrating/${item.id}`"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Mais</NuxtLink
            > -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
