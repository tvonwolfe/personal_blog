<template>
  <header id="header">
    <router-link :to="{ path: '/' }"><h1>Life of Tony</h1></router-link>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
#header {
  background: #003b6d;
  font-size: 15px;
  padding: 20px 10px;
}

/* router-links get translated to anchor tags. */
a {
  text-decoration: none;
  color: #DDD;
}
</style>
