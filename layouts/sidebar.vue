<template lang="pug">
main.user-layout
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
}
</style>