<template lang="pug">
button(@click="increment") Increment
p {{ count }}
button(@click="decrement") Decrement
  |
  //  <NuxtWelcome /> 
</template>


<!-- Composition API -->

<script setup lang="ts">
const count = ref(0);

const increment =()=> count.value++
const decrement =()=> count.value--
</script>

<!-- Optional API
<script  lang="ts">
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script> -->