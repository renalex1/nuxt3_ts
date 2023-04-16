<template lang="pug">
a(href="#" @click="view('home')") Home
a(href="#" @click="view('counter')") Counter

LazyHomeWelcome(v-if="page ==='home'")
LazyCounter(v-if="page ==='counter'")




</template>

<script setup lang="ts">
const page = ref('home')
const view = (name: string) => page.value = name
</script> 