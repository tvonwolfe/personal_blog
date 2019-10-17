<template>
  <div id="app">
    <Header />
    <Footer name="Tony Von Wolfe" />
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
* {
  margin: 0;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ddd;
  background-color: #333;
}
</style>
