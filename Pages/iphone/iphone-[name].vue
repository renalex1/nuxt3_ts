<template lang="pug">
p I am iphone {{ name }}
</template>

<script setup lang="ts">
const route = useRoute()

const name = computed(() => route.params.name.toString().replaceAll('-', ' '))
</script>