<template lang="pug">
div
  nav.bg-purple-700.shadow-lg.p-3.text-white.text-lg.flex.justify-between
    NuxtLink(to="/") Home
    NuxtLink(to="/about") About
    NuxtLink(to="/iphone") Iphones
    NuxtLink(to="/profile") Profile
    //- Here nuxt will replace page content
  slot
</template>

