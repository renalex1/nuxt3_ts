<template lang="pug">
div
  nav
    NuxtLink(to="/") Home
    NuxtLink(to="about") About
    NuxtLink(to="profile") Profile
    //- Here nuxt will replace page content
    slot
</template>