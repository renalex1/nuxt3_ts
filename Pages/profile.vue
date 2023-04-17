<template lang="pug">
h1 Hello Profile
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'sidebar',
  middleware: ['auth']
})

// definePageMeta({
//   layout: 'sidebar',
//   middleware: () => {
//     const auth = useAuth()
//     return auth.value.isAuthenticated;
//     // return false
//     // console.log('I am from middleware');
//   }
// })

</script>