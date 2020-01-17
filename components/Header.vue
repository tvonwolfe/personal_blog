<template>
  <span id="header">
    <nuxt-link :to="{ path: '/' }">
      <h1 class="title">Life of Tony</h1>
    </nuxt-link>
  </span>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
#header {
  display: flex;
  background: #003b6d;
  font-size: 15px;
  padding: 20px 10px;
  text-decoration: none;
}

.title {
  color: #ddd;
}

/* weird underline wouldn't go away without this. */
.nuxt-link-exact-active,
.nuxt-link-active {
  text-decoration: none;
}
</style>
