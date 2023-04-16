<template lang="pug">
//- div
//-   Head
//-     Title Nuxt 3 - Iphone {{ name }}
p I am iphone {{ name }}
</template>

<script setup lang="ts">
import { Head } from '~/.nuxt/components';

const route = useRoute()

const name = computed(() => route.params.name.toString().replaceAll('-', ' '))

useHead({
  title:`Nuxt3 - Iphone ${route.params.name.toString().replaceAll('-', ' ')}`
})
</script>