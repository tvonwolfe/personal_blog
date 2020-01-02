<template>
  <span id="header">
    <nuxt-link :to="{ path: '/' }"><h1>Life of Tony</h1></nuxt-link>
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
}

/* nuxt-links get translated to anchor tags. */
h1 {
  text-decoration: none;
  color: #ddd;
}
</style>
