<template lang="pug">
nav.bg-purple-900.shadow-lg.p-3.text-white.text-lg.flex.justify-between
  .flex
    NuxtLink.mr-4(to="/") Home
    NuxtLink.mr-4(to="/about") About
    NuxtLink.mr-4(to="/iphone") Iphones
    p.mr-4 Cart({{ cart.length }})
    p Total Route Changed : {{ pageVisitCount }}
  div(v-if="auth.isAuthenticated")
    NuxtLink(to="/profile") Profile
    button.ml-4(@click="logout") Logout
  NuxtLink(v-else, to="/login") Login
</template>

<script setup>
const cart = useCart()
const auth = useAuth();
const pageVisitCount = ref(0);
onMounted(() => {
  pageVisitCount.value = usePageVisitCount();
});
const logout = () => {
  auth.value.isAuthenticated = false;
}
</script>