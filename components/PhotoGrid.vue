<script setup>
const props = defineProps(['items'])
</script>

<template>
  <section class="overflow-hidden text-neutral-700">
    <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
      <div class="-m-1 flex flex-wrap md:-m-2">
        <div class="flex w-1/2 flex-wrap">
          <div class="w-1/2 p-1 md:p-2">
            <FoodCard :item="items[0]"></FoodCard>
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <FoodCard :item="items[1]"></FoodCard>
          </div>
          <div class="w-full p-1 md:p-2">
            <FoodCard :item="items[2]"></FoodCard>
          </div>
        </div>
        <div class="flex w-1/2 flex-wrap">
          <div class="w-full p-1 md:p-2">
            <FoodCard :item="items[3]"></FoodCard>
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <FoodCard :item="items[4]"></FoodCard>
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <FoodCard :item="items[5]"></FoodCard>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
