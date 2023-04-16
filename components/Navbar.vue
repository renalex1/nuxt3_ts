<template lang="pug">
nav.bg-purple-900.shadow-lg.p-3.text-white.text-lg.flex.justify-between
  NuxtLink(to="/") Home
  NuxtLink(to="/about") About
  NuxtLink(to="/iphone") Iphones
  NuxtLink(to="/profile") Profile
  p Cart({{ cart.length }})
</template>

<script setup>
const cart = useCart()
</script>