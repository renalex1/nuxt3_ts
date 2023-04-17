<template lang="pug">
.grid.grid-cols-4.gap-4.mt-10
  nuxt-link.shadow-lg.border.rounded-lg.text-center(v-for="iphone in data" :key="iphone" :to="`iphone/${iphone}`")
    h1 {{ iphone }}
    .flex.justify-center
      img(:src='`/img/${iphone}.jpg`', width="200" alt="")
      
</template>

<script setup>
useHead({
  title: 'Nuxt3 - Iphones'
})

// const iphones = ["iphone-12", "iphone-12-pro", "iphone-13", "iphone-13-pro"];

const { data } = useFetch('/api/iphone')
// console.log(data.value);
</script>