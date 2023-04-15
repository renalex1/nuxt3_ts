<template lang="pug">
a(href="#" @click="view('home')") Home
a(href="#" @click="view('counter')") Counter
//- HomeWelcome(v-if="page ==='home'")
//- Counter(v-if="page ==='counter'")
LazyHomeWelcome(v-if="page ==='home'")
LazyCounter(v-if="page ==='counter'")

//- button(@click="toggle") Toggle
//- div(v-if="MyComponent === 'welcome'")
//-   HomeWelcome
//- Counter(v-else)
//- HomeWelcome
//button(@click="toggle") Toggle
//component(:is="MyComponent")
//- Counter 
//  <NuxtWelcome /> 




</template>

<script setup lang="ts">
const page = ref('home')
const view = (name: string) => page.value = name


// const MyComponent = shallowRef(resolveComponent('Counter'))
// const toggle = () => MyComponent.value = resolveComponent('HomeWelcome')

// const MyComponent = ref('counter')
// const toggle = () => MyComponent.value = 'welcome'
</script> 