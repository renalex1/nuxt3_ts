<template lang="pug">
div.grid.grid-cols-4.gap-4.mt-10
  nuxt-link(to="iphone/iphone-12").shadow-lg.border.rounded-lg.text-center
    h1 Iphone 12
    .flex.justify-center
      img(src='/img/iphone12.jpg', width="200" alt="")
  nuxt-link(to="iphone/iphone-12-pro").shadow-lg.border.rounded-lg.text-center
    h1 Iphone 12 Pro
    .flex.justify-center
      img(src='/img/iphone12pro.jpg', width="200" alt="")
</template>

<script setup>
useHead({
  title:'Nuxt3 - Iphones'
})
</script>