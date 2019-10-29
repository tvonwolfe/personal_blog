<template>
  <div class="navbar">
    <div :key="nav.title" v-for="nav in navselections">
      <NavButton :title="nav.title" :route="nav.route" />
    </div>
  </div>
</template>

<script>
import NavButton from "./NavButton.vue";

export default {
  name: "NavBar",
  components: {
    NavButton
  },
  data() {
    this.navselections = [
      { title: "Home", route: "/" },
      { title: "Programming", route: "/programming" },
      { title: "Cars", route: "/cars" },
      { title: "Life", route: "/life" },
      { title: "Travel", route: "/travel" },
      { title: "About", route: "/about" }
    ];
  }
};
</script>

<style>
.navbar {
  display: flex;
  background-color: #555;
  overflow: hidden;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
