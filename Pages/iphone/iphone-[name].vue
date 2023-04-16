<template lang="pug">
//- div
//-   Head
//-     Title Nuxt 3 - Iphone {{ name }}
//- p I am iphone {{ name }}
.flex.justify-center.w-full.mt-20 
  .grid.grid-cols-2 
    div
      img(:src="`/img/iphone${name.replaceAll(' ','')}.jpg`" width="300")
    .text-center 
      h1.text3xl Iphone {{ name }}
      button.p-3.bg-indigo-900.text-white.rounded-md.mt-5.w-48(@click="addToCart") 
        span(v-if="!inCart") Buy Now
        span(v-else) Remove from Cart
</template>

<script setup lang="ts">
interface CartItem {
  name: string;
}
const route = useRoute()

const name = computed(() => route.params.name.toString().replaceAll('-', ' '))

const fullName = computed(() => `iphone-${route.params.name}`)

const cart = useCart()

const inCart = computed(() => !!cart.value.find((ct) => ct.name === fullName.value))

const addToCart = () => {
  const found = cart.value.find((ct) => ct.name === fullName.value)

  if (!inCart.value) {
    cart.value.push({
      name: `iphone-${route.params.name}`
    })
  } else {
    cart.value = cart.value.filter((ct) => ct.name !== fullName.value)
  }
}
useHead({
  title: `Nuxt3 - Iphone ${route.params.name.toString().replaceAll('-', ' ')}`
})
</script>