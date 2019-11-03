<template>
  <div id="app">
    <Header />
    <Nav />
    <router-view></router-view>
    <Footer name="Tony Von Wolfe" />
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import Nav from "./components/layout/Nav.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer,
    Nav
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");

html {
  background-color: #333;
}
* {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ddd;
  background-color: #333;
  width: 100%;
}
</style>
