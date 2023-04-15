<template lang="pug">
button(@click="toggle") Toggle
div(v-if="MyComponent === 'welcome'")
  HomeWelcome
Counter(v-else)
//- HomeWelcome
//button(@click="toggle") Toggle
//component(:is="MyComponent")
//- Counter 
//  <NuxtWelcome /> 




</template>

<script setup lang="ts">
// const MyComponent = shallowRef(resolveComponent('Counter'))
// const toggle = () => MyComponent.value = resolveComponent('HomeWelcome')

const MyComponent = ref('counter')
const toggle = () => MyComponent.value = 'welcome'
</script> 