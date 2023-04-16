<template lang="pug">
main.user-layout.bg-gray-100
  article.sidebar
    p Dashboard
    p Settings
  section
    //- Here nuxt will replace page content
    slot
</template>

<style lang="scss">
.user-layout {
  display: flex;
}

.sidebar {
  display: flex;
  flex-direction: row;
  color: $primary;
}
</style>